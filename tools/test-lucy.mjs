#!/usr/bin/env node
// Quality gate for Lucy's answers (runs after the index build; `npm run build` includes it).
// For every language: realistic visitor questions with the expected source page(s), unrelated questions that must NOT be answered,
// and legal-advice questions that must be refused. Every answer must be text that exists on the cited page.
// Fails (exit 1) below 85% correct top-1 source, on any invented text, any answered unrelated question, or a missed refusal.
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createEngine } from '../src/scripts/lucy-engine.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const MIN_RATE = 0.85;
const flat = (s) => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^\p{L}\p{N}]+/gu, '');
const verbose = process.argv.includes('--verbose');
let failed = false;
const summary = [];

for (const file of readdirSync(join(ROOT, 'tests/lucy')).filter((f) => /^(questions|heldout)\./.test(f)).sort().reverse()) {
  const lang = file.split('.')[1];
  const held = file.startsWith('heldout');   // questions written after the tuning: reported, not tuned on, gate only on invented text
  const data = JSON.parse(readFileSync(join(ROOT, `dist/assets/lucy/index-${lang}.json`), 'utf8'));
  const T = JSON.parse(readFileSync(join(ROOT, 'tests/lucy', file), 'utf8'));
  const eng = createEngine(data);
  const pageText = new Map();
  for (const [pi, , , t] of data.c) pageText.set(data.pages[pi].u, (pageText.get(data.pages[pi].u) || '') + ' ' + t);
  const flatPage = new Map([...pageText].map(([u, t]) => [u, flat(t)]));

  let hit = 0, invented = 0, noAnswer = 0;
  const misses = [];
  for (const { q, pages } of T.questions) {
    const a = eng.answer(q);
    if (a.kind === 'none') { noAnswer++; misses.push(`NO ANSWER   ${q}`); continue; }
    if (!flatPage.get(a.page)?.includes(flat(a.text))) { invented++; misses.push(`INVENTED    ${q} -> ${a.page}`); }
    if (pages.includes(a.page)) hit++; else misses.push(`WRONG PAGE  ${q} -> ${a.page} (${a.kind}), expected ${pages.join(' | ')}`);
  }
  let overAnswered = 0;
  for (const q of T.unrelated) { const a = eng.answer(q); if (a.kind !== 'none') { overAnswered++; misses.push(`UNRELATED ANSWERED  ${q} -> ${a.page}: ${a.text.slice(0, 80)}`); } }
  let adviceMissed = 0;
  for (const q of T.advice) { if (eng.answer(q).kind !== 'advice') { adviceMissed++; misses.push(`ADVICE NOT REFUSED  ${q}`); } }
  // scoped answers on legal pages come only from the page itself
  const legal = data.legal.filter((u) => data.pages.some((p) => p.u === u));
  for (const u of legal) {
    const a = eng.answer(lang === 'de' ? 'Welche Daten werden gespeichert?' : 'Which data is stored?', { page: u });
    if (a.kind !== 'none' && a.page !== u) { invented++; misses.push(`SCOPE BROKEN ${u} -> ${a.page}`); }
  }
  const n = T.questions.length, rate = hit / n;
  summary.push(`${held ? 'held-out ' : ''}${lang}: ${n} questions, top-1 source ${(rate * 100).toFixed(0)}% (${hit}/${n}), no answer ${noAnswer}, invented ${invented}, unrelated answered ${overAnswered}/${T.unrelated.length}, advice refused ${T.advice.length - adviceMissed}/${T.advice.length}`);
  if ((!held && rate < MIN_RATE) || invented || overAnswered || adviceMissed) failed = true;
  if (verbose || failed) for (const m of misses) console.log(`  [${lang}] ${m}`);
}
console.log('[lucy-test] ' + summary.join(' | '));
if (failed) { console.error('[lucy-test] FAILED'); process.exit(1); }
