#!/usr/bin/env node
// Builds Lucy's search index from the built site (dist/), one file per language: dist/assets/lucy/index-<lang>.json
// Run after `astro build` (npm run build does it). No dependencies.
// Language data (stop words, suffixes, FAQ, extra pages) lives in src/data/lucy-faq/<lang>.json.
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';
import { fold } from "../src/scripts/lucy-engine.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const DATA = join(ROOT, 'src/data/lucy-faq');
const OUT = join(DIST, 'assets/lucy');

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rarr: '→', larr: '←', mdash: '—', ndash: '–', hellip: '…', laquo: '«', raquo: '»', copy: '©', times: '×' };
const decode = (s) => s.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (m, e) => {
  if (e[0] === '#') { const n = e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10); return String.fromCodePoint(n); }
  return ENT[e] ?? m;
});
const VOID = new Set(['img', 'br', 'hr', 'input', 'meta', 'link', 'source', 'path', 'circle', 'rect', 'ellipse', 'stop', 'use', 'col', 'wbr']);
const BLOCK = new Set(['p', 'li', 'div', 'section', 'article', 'header', 'footer', 'tr', 'td', 'th', 'summary', 'details', 'figcaption', 'figure', 'ul', 'ol', 'dt', 'dd', 'blockquote', 'table', 'br', 'main', 'aside', 'nav', 'dl', 'tbody', 'thead', 'label']);
const SKIP_TAGS = new Set(['script', 'style', 'template', 'svg', 'pre', 'noscript', 'canvas', 'button', 'select', 'textarea']);

const clean = (s) => decode(s).replace(/\s+/g, ' ').replace(/ ([.,;:!?)\]])/g, '$1').replace(/([(\[]) /g, '$1').trim();
const attr = (a, n) => { const m = a.match(new RegExp(`\\b${n}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'i')); return m ? (m[2] ?? m[3]) : null; };

/** One built page -> {title, lang, blocks:[{h,id,t}]} */
export function extractPage(html) {
  const title = clean((html.match(/<title>([\s\S]*?)<\/title>/i) || [, ''])[1]).replace(/\s*\|\s*StarkLLM\s*$/i, '');
  const lang = (html.match(/<html[^>]*\blang="([a-z-]+)"/i) || [, ''])[1];
  const mainM = html.match(/<main[\s\S]*<\/main>/i);
  const body = mainM ? mainM[0] : '';
  const re = /<!--[\s\S]*?-->|<(\/?)([a-z][a-z0-9-]*)([^>]*)>|([^<]+)/gi;
  const stack = []; // {tag, skip, section}
  let skipDepth = 0, section = null, h = '', hid = null, buf = '', capHeading = null;
  const blocks = [];
  let sumTag = false;
  const flush = () => { const t = clean(buf); buf = ''; if (t) blocks.push({ h, id: hid ?? section, t, sum: sumTag }); sumTag = false; };
  let m;
  while ((m = re.exec(body))) {
    if (m[4] !== undefined) { if (!skipDepth) { if (capHeading) capHeading.t += m[4]; else buf += m[4]; } continue; }
    if (!m[2]) continue; // comment
    if (!skipDepth) { if (capHeading) capHeading.t += ' '; else buf += ' '; }
    const close = m[1] === '/', tag = m[2].toLowerCase(), a = m[3];
    if (!close) {
      const cls = attr(a, 'class') || '';
      const hidden = /\blucy-/.test(cls) || /aria-hidden\s*=\s*"true"/.test(a) || /\bhidden\b/.test(a.replace(/="[^"]*"/g, ''));
      const skip = SKIP_TAGS.has(tag) || hidden;
      if (VOID.has(tag) || /\/\s*$/.test(a)) { if (tag === 'br' && !skipDepth) buf += ' '; if (tag === 'img' && !skipDepth) { /* alt text of screenshots is not page text */ } continue; }
      stack.push({ tag, skip, section: section });
      if (skip) skipDepth++;
      if (skipDepth) continue;
      if (tag === 'section' || /^h[1-4]$/.test(tag)) {
        if (tag === 'section') { const id = attr(a, 'id'); if (id) section = id; }
        else { flush(); capHeading = { t: '', id: attr(a, 'id') }; }
      }
      if (BLOCK.has(tag)) { flush(); if (tag === 'summary') sumTag = true; }
    } else {
      // close: pop to the matching open tag
      let i = stack.length - 1;
      while (i >= 0 && stack[i].tag !== tag) i--;
      if (i < 0) continue;
      while (stack.length > i) { const e = stack.pop(); if (e.skip) skipDepth--; if (e.tag === 'section') section = e.section; }
      if (skipDepth) continue;
      if (/^h[1-4]$/.test(tag) && capHeading) { h = clean(capHeading.t); hid = capHeading.id || section; capHeading = null; blocks.push({ h, id: hid, t: h, heading: true }); }
      else if (BLOCK.has(tag)) flush();
    }
  }
  flush();
  return { title, lang, blocks };
}

const sentenceEnd = (t) => /[.!?:;…)"”»؟؛]$/.test(t);
/** Merge consecutive blocks of one heading into passages of about 450 characters. */
export function chunk(blocks) {
  const out = [];
  let cur = null;
  const push = () => { if (cur && cur.t.replace(/\s/g, '').length >= 25) out.push(cur); cur = null; };
  for (const b of blocks) {
    if (b.heading) { push(); continue; }
    let t = b.t; if (!sentenceEnd(t)) t += '.';
    const sentences = t.length > 700 ? t.split(/(?<=[.!?…؟])\s+/) : [t];
    if (b.sum) push();
    for (const s of sentences) {
      if (cur && (cur.h !== b.h || cur.id !== b.id || (!cur.open && cur.t.length + s.length > 520))) push();
      if (!cur) cur = { h: b.h, id: b.id, t: '' };
      cur.t += (cur.t ? ' ' : '') + s.trim();
      cur.open = !!b.sum;
    }
  }
  push();
  return out;
}

// FAQ phrase lookup: the engine's fold (also Arabic script), then letters and digits only.
const norm = (s) => fold(s).replace(/[^\p{L}\p{N}]+/gu, '');

function walk(dir, out = []) {
  for (const n of readdirSync(dir)) { const p = join(dir, n); statSync(p).isDirectory() ? walk(p, out) : n.endsWith('.html') && out.push(p); }
  return out;
}
const urlOf = (file) => {
  let u = '/' + relative(DIST, file).replace(/\\/g, '/').replace(/\.html$/, '');
  return u.replace(/\/index$/, '/').replace(/^$/, '/');
};

export function build() {
  if (!existsSync(DIST)) throw new Error('dist/ missing: run astro build first');
  mkdirSync(OUT, { recursive: true });
  const langs = readdirSync(DATA).filter((f) => f.endsWith('.json')).map((f) => JSON.parse(readFileSync(join(DATA, f), 'utf8')));
  const report = [];
  const prefixed = langs.filter((l) => !l.default).map((l) => l.lang);
  for (const L of langs) {
    const all = walk(DIST);
    const files = all.filter((f) => {
      const u = urlOf(f);
      if (['/404'].includes(u) || u.startsWith('/_astro')) return false;
      if ((L.exclude || []).includes(u)) return false;
      if ((L.extraPages || []).includes(u)) return true;
      return L.default ? !prefixed.some((c) => u.startsWith(`/${c}/`)) : u.startsWith(`/${L.lang}/`);
    }).sort();
    const pages = [], chunks = [];
    for (const f of files) {
      const html = readFileSync(f, 'utf8');
      const pg = extractPage(html);
      const url = urlOf(f);
      const pi = pages.push({ u: url, t: pg.title }) - 1;
      for (const c of chunk(pg.blocks)) chunks.push([pi, c.id || '', c.h || '', c.t]);
    }
    // FAQ: each entry names a page and a phrase that must exist on it; the answer is the passage that contains the phrase.
    const faq = [], bad = [];
    for (const e of L.faq || []) {
      const pi = pages.findIndex((p) => p.u === e.page);
      if (pi < 0) { bad.push(`[${L.lang}] FAQ ${e.id}: page ${e.page} is not in the index`); continue; }
      const want = norm(e.match);
      const ci = chunks.findIndex((c) => c[0] === pi && norm(c[3]).includes(want));
      if (ci < 0) { bad.push(`[${L.lang}] FAQ ${e.id}: phrase not found on ${e.page}: "${e.match}"`); continue; }
      faq.push({ id: e.id, q: e.q, ci, m: e.match });
    }
    if (bad.length) { console.error(bad.join('\n')); process.exitCode = 1; continue; }
    const data = { lang: L.lang, pages, c: chunks, faq, stop: L.stop, suf: L.suffixes, pre: L.prefixes || [], advice: L.advice || [], legal: L.legalPages || [], links: L.links || {} };
    const json = JSON.stringify(data);
    writeFileSync(join(OUT, `index-${L.lang}.json`), json);
    report.push(`${L.lang}: ${pages.length} pages, ${chunks.length} passages, ${faq.length} FAQ, ${(json.length / 1024).toFixed(0)} KB (${(gzipSync(json).length / 1024).toFixed(0)} KB gzipped)`);
  }
  console.log('[lucy-index] ' + report.join(' | '));
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) build();
