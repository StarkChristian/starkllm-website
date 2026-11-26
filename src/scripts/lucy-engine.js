// Lucy's answer engine: BM25 over the passages of the site, plus a curated FAQ that points at real passages.
// Pure functions, no DOM, no network: the browser (lucy-chat.ts) and the build test (tools/test-lucy.mjs) use the same file.
// Input: the index built by tools/build-lucy-index.mjs (pages, passages c, faq, stop words, suffixes, legal pages).
// Every answer is text copied from a passage of the site; nothing is generated.

const K1 = 1.2, B = 0.75;
const FAQ_MIN = 0.5;       // question match needed for a curated FAQ answer (0..1)
const COVER_MIN = 0.55;    // share of the question's content words (idf-weighted) that a passage must contain
const UNSEEN_MAX = 0.3;    // share of the question's words that appear nowhere on the site (then it is probably about something else)
const SCORE_MIN = 3.2;     // minimum BM25 score of the best passage

// Arabic script (ar, fa): NFKD splits the hamza and madda off the alef forms (أ إ آ -> ا), ؤ -> و, ئ -> ي, ۀ -> ه;
// then the diacritics (harakat, superscript alef, Quranic marks) and the tatweel go, Arabic ي/ى and Persian ی become one
// letter, ك/ک too, ة -> ه, Arabic-Indic and Persian digits -> 0-9. The zero-width non-joiner (می‌شود) joins the word
// (people type it joined, with ZWNJ or with a space), and the bidi controls the pages use around English labels are dropped.
// NFKD also turns full-width Latin and digits into plain ones; the final NFC puts Japanese voiced kana (が = か + ゛) back
// together. For text without CJK the NFC step changes nothing.
const arabicMarks = /[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E8\u06EA-\u06ED\u0640]/g;
const arabicMap = { 'ي': 'ی', 'ى': 'ی', 'ك': 'ک', 'ة': 'ه' };
export const fold = (s) => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/ß/g, 'ss').replace(/ı/g, 'i')
  .replace(arabicMarks, '').replace(/[يىكة]/g, (c) => arabicMap[c])
  .replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x660)).replace(/[\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) - 0x6F0))
  .replace(/\u200C/g, '').replace(/[\u200B\u200D-\u200F\u202A-\u202E\u2066-\u2069\uFEFF]/g, '')
  .normalize('NFC');

// Chinese and Japanese are written without spaces. Their runs are cut into words with Intl.Segmenter where the
// browser has it, and every word longer than two characters into overlapping character pairs (bigrams), so "数据保护"
// and "保护数据" share their words however the segmenter splits them. Without Intl.Segmenter a whole run is cut into
// pairs. Hiragana-only pieces (Japanese particles and endings) are left out. Text without CJK is not affected.
const CJK = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}ー々〆]/u;
const CJK_RUN = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}ー々〆]+/gu;
const KANA_ONLY = /^[\p{Script=Hiragana}ー]+$/u;
const KATA_ONLY = /^[\p{Script=Katakana}ー]+$/u;
const pairs = (w) => { if (w.length <= 2) return [w]; const out = []; for (let i = 0; i + 1 < w.length; i++) out.push(w.slice(i, i + 2)); return out; };

export function createEngine(data) {
  const stop = new Set((data.stop || []).map(fold));
  const suf = [...(data.suf || [])].map(fold).sort((a, b) => b.length - a.length);
  // prefixes (Arabic: the article and the clitics و ب ل ف ك), stripped before the suffixes; empty for most languages
  const pre = [...(data.pre || [])].map(fold).sort((a, b) => b.length - a.length);
  const advice = (data.advice || []).map(fold);
  const seg = typeof Intl !== 'undefined' && Intl.Segmenter ? new Intl.Segmenter(data.lang || undefined, { granularity: 'word' }) : null;

  const stem = (t) => {
    for (const p of pre) if (t.length - p.length >= 3 && t.startsWith(p)) { t = t.slice(p.length); break; }
    for (const s of suf) if (t.length - s.length >= 3 && t.endsWith(s)) return t.slice(0, -s.length);
    return t;
  };
  const cjkWords = (run) => {
    const words = seg ? [...seg.segment(run)].map((s) => s.segment) : run.split(/[\p{Script=Hiragana}]+/u);
    const out = [];
    for (let w of words) {
      if (!w || KANA_ONLY.test(w) || stop.has(w)) continue;
      w = w.replace(/\p{Script=Hiragana}+$/u, '');   // Japanese endings: 使える, 使います -> 使
      if (stop.has(w)) continue;
      // katakana loanwords stay whole: their pairs (ール, カー, ップ) are shared by unrelated words (サッカー, ツール)
      for (const p of (KATA_ONLY.test(w) ? [w] : pairs(w))) if (!stop.has(p) && !KANA_ONLY.test(p)) out.push(p);
    }
    return out;
  };
  const latin = (text) => text.split(/[^\p{L}\p{N}@.]+/u).map((t) => t.replace(/^\.+|\.+$/g, '')).filter((t) => t && !stop.has(t) && (t.length > 1 || /\d/.test(t))).map(stem);
  const tokens = (text) => {
    const f = fold(text);
    if (!CJK.test(f)) return latin(f);
    const out = [];
    let last = 0;
    for (const m of f.matchAll(CJK_RUN)) {
      out.push(...latin(f.slice(last, m.index)), ...cjkWords(m[0]));
      last = m.index + m[0].length;
    }
    out.push(...latin(f.slice(last)));
    return out;
  };

  // documents
  const docs = data.c.map(([pi, id, h, t], i) => {
    const head = tokens(h), body = tokens(t), title = tokens(data.pages[pi].t);
    const all = [...head, ...head, ...title, ...body]; // heading counts double, page title once
    const tf = new Map();
    for (const w of all) tf.set(w, (tf.get(w) || 0) + 1);
    return { i, pi, id, h, t, tf, len: all.length, seq: body };
  });
  const N = docs.length;
  const avg = docs.reduce((a, d) => a + d.len, 0) / Math.max(1, N);
  const df = new Map();
  for (const d of docs) for (const w of d.tf.keys()) df.set(w, (df.get(w) || 0) + 1);
  const idf = (w) => Math.log(1 + (N - (df.get(w) || 0) + 0.5) / ((df.get(w) || 0) + 0.5));
  const maxIdf = idf('\u0000unseen');

  const urlOf = (d) => data.pages[d.pi].u + (d.id ? '#' + d.id : '');

  function bm25(q, d) {
    let s = 0;
    for (const w of q) {
      const f = d.tf.get(w); if (!f) continue;
      s += idf(w) * (f * (K1 + 1)) / (f + K1 * (1 - B + B * d.len / avg));
    }
    // adjacent pairs of the question that also stand next to each other in the passage
    for (let i = 0; i + 1 < q.length; i++) {
      for (let j = 0; j + 1 < d.seq.length; j++) if (d.seq[j] === q[i] && d.seq[j + 1] === q[i + 1]) { s += 0.8 * Math.min(idf(q[i]), idf(q[i + 1])); break; }
    }
    return s;
  }
  const vocab = new Set();
  const seen = (q) => q.filter((w) => df.has(w) || vocab.has(w));
  const coverage = (q, d) => {
    let have = 0, all = 0;
    for (const w of seen(q)) { const x = idf(w); all += x; if (d.tf.has(w)) have += x; }
    return all ? have / all : 0;
  };

  // curated FAQ: the question text matches the visitor's question; the answer is the passage the entry points at
  const faq = (data.faq || []).map((e) => ({
    id: e.id, ci: e.ci, m: e.m,
    qs: e.q.map((x) => new Set(tokens(x))).filter((s) => s.size),
  }));
  for (const e of faq) for (const s of e.qs) for (const w of s) vocab.add(w);
  function faqMatch(q) {
    if (!q.length) return null;
    const qs = new Set(q);
    const wq = [...qs].reduce((a, w) => a + (df.has(w) ? idf(w) : maxIdf), 0);
    let best = null;
    for (const e of faq) for (const s of e.qs) {
      let hit = 0, wf = 0, hitf = 0;
      for (const w of s) { const x = df.has(w) ? idf(w) : maxIdf; wf += x; if (qs.has(w)) { hitf += x; } }
      for (const w of qs) if (s.has(w)) hit += df.has(w) ? idf(w) : maxIdf;
      const cq = hit / wq, cf = hitf / wf;
      const f = cq && cf ? (2 * cq * cf) / (cq + cf) : 0;
      if (!best || f > best.f) best = { f, e };
    }
    return best && best.f >= FAQ_MIN ? best : null;
  }

  // pick the sentences of a passage that carry the question's words (kept contiguous, at most ~360 characters)
  function quote(d, q) {
    const t = d.t;
    if (t.length <= 360) return t;
    const sents = t.split(/(?<=[.!?…؟])\s+|(?<=[。！？])/);   // CJK sentences end with 。！？ and no space
    const sc = sents.map((s) => { const tk = new Set(tokens(s)); return q.reduce((a, w) => a + (tk.has(w) ? idf(w) : 0), 0); });
    let bi = 0; for (let i = 1; i < sc.length; i++) if (sc[i] > sc[bi]) bi = i;
    let from = bi, to = bi, out = sents[bi].trim();
    if (out.length > 360) return out.slice(0, 360);
    while (out.length < 200) {
      const next = (sc[to + 1] ?? -1) >= (sc[from - 1] ?? -1) ? to + 1 : from - 1;
      if (next > to && next < sents.length) { to = next; } else if (next < from && next >= 0) { from = next; } else break;
      out = sents.slice(from, to + 1).reduce((a, x) => (a ? a + (/[。！？]$/.test(a) ? '' : ' ') + x : x), '').trim();
      if (out.length > 360) { out = out.slice(0, 360); break; }
    }
    return out;
  }

  const norm = (u) => u.replace(/\.html$/, '').replace(/(.)\/$/, '$1') || '/';

  /** answer(question, {page}) -> {kind, text, url, title, heading, more[]} ; kind: faq | passage | advice | none */
  function answer(question, opts = {}) {
    const qn = fold(question);
    const here = opts.page ? norm(opts.page) : null;
    const scoped = !!(here && (data.legal || []).includes(here));
    if (advice.some((a) => qn.includes(a))) return { kind: 'advice' };
    const q = tokens(question);
    if (!q.length) return { kind: 'none' };
    const mk = (d, kind) => ({ kind, text: quote(d, q), url: urlOf(d), page: data.pages[d.pi].u, title: data.pages[d.pi].t, heading: d.h, doc: d.i });
    if ((q.length - seen(q).length) / q.length > UNSEEN_MAX) return { kind: 'none', scoped, page: scoped ? here : null };
    if (!scoped) {
      const f = faqMatch(q);
      if (f) return mk(docs[f.e.ci], 'faq');
    }
    const pool = scoped ? docs.filter((d) => data.pages[d.pi].u === here) : docs;
    const ranked = pool.map((d) => ({ d, s: bm25(q, d), c: coverage(q, d) })).filter((r) => r.s > 0).sort((a, b) => b.s - a.s);
    const top = ranked[0];
    const need = q.length >= 5 ? COVER_MIN - 0.1 : COVER_MIN;
    if (!top || top.s < SCORE_MIN || top.c < need) return { kind: 'none', scoped, page: scoped ? here : null };
    const out = mk(top.d, 'passage');
    out.more = ranked.slice(1, 12).filter((r) => r.s >= top.s * 0.6 && r.c >= need && data.pages[r.d.pi].u !== data.pages[top.d.pi].u).slice(0, 1).map((r) => ({ url: urlOf(r.d), title: data.pages[r.d.pi].t, heading: r.d.h }));
    return out;
  }
  /** for tuning: what the engine sees for a question */
  function explain(question) {
    const q = tokens(question);
    const f = faqMatch(q);
    const ranked = docs.map((d) => ({ d, s: bm25(q, d), c: coverage(q, d) })).sort((a, b) => b.s - a.s).slice(0, 3);
    return { q, unseen: q.filter((w) => !df.has(w)), faq: f && { id: f.e.id, f: +f.f.toFixed(2) }, top: ranked.map((r) => `${data.pages[r.d.pi].u}#${r.d.id} s=${r.s.toFixed(1)} c=${r.c.toFixed(2)} "${r.d.t.slice(0, 50)}"`) };
  }
  return { answer, tokens, docs, explain };
}
