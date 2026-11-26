// The changelog, parsed at build time from src/data/RELEASE_NOTES.md (a copy of RELEASE_NOTES.md of the app, tag v2.6.0).
// To update: copy the new RELEASE_NOTES.md over it and rebuild. Only a small Markdown subset is needed: headings,
// lists (nested by indentation), paragraphs, **bold**, *italic*, `code`, [links](url) and fenced code.
import raw from './RELEASE_NOTES.md?raw';

export type Release = { id: string; version: string; title: string; html: string };
const REPO = 'https://github.com/StarkChristian/StarkLLM';

const esc = (s: string) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
function inline(s: string): string {
  const codes: string[] = [];
  let t = esc(s).replace(/`([^`]+)`/g, (_, c) => `\u0000${codes.push(c) - 1}\u0000`);
  t = t
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, txt, href) => {
      const url = /^https?:/.test(href) ? href : `${REPO}/blob/main/${href.replace(/^\.?\//, '')}`;
      return `<a href="${url}" target="_blank" rel="noopener">${txt}</a>`;
    })
    .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
    .replace(/(^|[\s(])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>')
    .replace(/(^|[\s(])#(\d{1,4})\b/g, `$1<a href="${REPO}/pull/$2" target="_blank" rel="noopener">#$2</a>`);
  return t.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${codes[Number(i)]}</code>`);
}

/** Markdown block subset to HTML. */
export function md(src: string): string {
  const lines = src.split('\n');
  const out: string[] = [];
  const stack: { indent: number; tag: 'ul' | 'ol' }[] = [];
  let para: string[] = [];
  let fence: string[] | null = null;
  const flushPara = () => { if (para.length) { const t = para.join(' '); out.push(/^Pull requests:/.test(t) ? `<p class="prs">${inline(t)}</p>` : `<p>${inline(t)}</p>`); para = []; } };
  const closeLists = (indent = -1) => { while (stack.length && stack[stack.length - 1].indent > indent) out.push(`</li></${stack.pop()!.tag}>`); };
  for (const line of lines) {
    if (fence) { if (/^\s*```/.test(line)) { out.push(`<pre><code>${esc(fence.join('\n'))}</code></pre>`); fence = null; } else fence.push(line.replace(/^ {3}/, '')); continue; }
    if (/^\s*```/.test(line)) { flushPara(); fence = []; continue; }
    if (!line.trim() || /^-{3,}\s*$/.test(line.trim())) { flushPara(); if (!line.trim()) continue; closeLists(); continue; }
    const h = line.match(/^(#{3,4})\s+(.*)$/);
    if (h) { flushPara(); closeLists(); out.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`); continue; }
    const li = line.match(/^(\s*)([-*]|\d+\.)\s+(.*)$/);
    if (li) {
      flushPara();
      const indent = li[1].length, tag = /\d/.test(li[2]) ? 'ol' : 'ul';
      const top = stack[stack.length - 1];
      if (!top || indent > top.indent) { stack.push({ indent, tag }); out.push(`<${tag}><li>${inline(li[3])}`); }
      else { closeLists(indent); out.push(`</li><li>${inline(li[3])}`); }
      continue;
    }
    if (stack.length && /^\s+\S/.test(line)) { out[out.length - 1] += ' ' + inline(line.trim()); continue; }
    closeLists();
    para.push(line.trim());
  }
  flushPara(); closeLists();
  return out.join('\n');
}

const sections = raw.split(/^## /m).slice(1);
const notMeta = (s: string) => s.split('\n').filter((l) => !/^\*\*(Current Version|Release Date|Status):\*\*/.test(l)).join('\n');

export const releases: Release[] = sections
  .filter((s) => s.startsWith('Version '))
  .map((s) => {
    const [head, ...rest] = s.split('\n');
    const m = head.match(/^Version\s+(\S+)\s+[—-]\s+(.*)$/)!;
    const version = m[1];
    const title = m[2].replace(/\s*\*\(v[\d.]+\)\*\s*$/, '').trim();
    return { id: 'v' + version.replaceAll('.', '-'), version, title, html: md(notMeta(rest.join('\n'))) };
  });

const before = sections.find((s) => s.startsWith('Before 2.0'));
/** The research-beta notes before 2.0 (historical), as HTML. */
export const beforeHtml = before ? md(before.split('\n').slice(1).join('\n')) : '';
