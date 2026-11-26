// Open Graph image of every page: /og/<lang>-<page>.png, 1200×630, made at build time from an SVG with sharp
// (Astro's own image dependency; nothing is fetched). The title is the page's own title, in its language.
import type { APIRoute } from 'astro';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { langList, langsFor, localizedPaths, singlePages, dirOf, type Lang } from '../../i18n/ui';
import { pages } from '../../i18n/pages';
import { metaOf, pageKey } from '../../lib/pagemeta';
import { V } from '../../data/release';

export function getStaticPaths() {
  const all = [...new Set(langList.flatMap((l) => localizedPaths[l]))].filter((p) => p in pages);
  const out = all.flatMap((p) => langsFor(p).map((lang) => ({ params: { slug: `${lang}-${pageKey(p)}` }, props: { lang, path: p } })));
  for (const p of singlePages) out.push({ params: { slug: `en-${pageKey(p)}` }, props: { lang: 'en' as Lang, path: p } });
  return out;
}

const esc = (s: string) => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
/** Greedy word wrap for the SVG title (no text layout in SVG). */
function wrap(text: string, max: number, lines: number): string[] {
  const out: string[] = [];
  let cur = '';
  for (const w of text.split(/\s+/)) {
    if ((cur + ' ' + w).trim().length > max && cur) { out.push(cur); cur = w; } else cur = (cur + ' ' + w).trim();
  }
  if (cur) out.push(cur);
  if (out.length > lines) { out.length = lines; out[lines - 1] = out[lines - 1].replace(/\s*\S*$/, '') + ' …'; }
  return out;
}
const logo = fs.readFileSync(path.join(process.cwd(), 'public/assets/logo-mark.png')).toString('base64');

export const GET: APIRoute = async ({ props }) => {
  const { lang, path: p } = props as { lang: Lang; path: string };
  const { title, description = '' } = metaOf(lang, p);
  const head = title.replace(/\s*\|\s*StarkLLM\s*$/, '').replace(/^StarkLLM\s*[·|]\s*/, '');
  const lines = wrap(head, 26, 3);
  const desc = wrap(description, 64, lines.length >= 3 ? 1 : 2);
  const font = "'Geist','DejaVu Sans','Liberation Sans',sans-serif";
  // Right-to-left titles (ar, fa) are set from the right edge, without negative letter-spacing (it breaks Arabic joining).
  // The logo and the address line stay as they are.
  const rtl = dirOf(lang) === 'rtl';
  const at = rtl ? 'x="1120" text-anchor="end"' : 'x="80"';
  const tight = rtl ? '' : ' letter-spacing="-2"';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g" cx="85%" cy="10%" r="75%"><stop offset="0" stop-color="#8c14fc" stop-opacity=".55"/><stop offset="1" stop-color="#8c14fc" stop-opacity="0"/></radialGradient>
    <radialGradient id="h" cx="0%" cy="100%" r="55%"><stop offset="0" stop-color="#d4af37" stop-opacity=".16"/><stop offset="1" stop-color="#d4af37" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0f0d16"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect width="1200" height="630" fill="url(#h)"/>
  <image href="data:image/png;base64,${logo}" x="80" y="70" width="64" height="36"/>
  <text x="158" y="99" font-family="${font}" font-size="30" font-weight="700" fill="#f4f1fb">StarkLLM</text>
  <rect x="${rtl ? 1110 : 80}" y="160" width="10" height="10" rx="2" fill="#d4af37"/>
  ${lines.map((l, i) => `<text ${at} y="${250 + i * 82}" font-family="${font}" font-size="70" font-weight="700"${tight} fill="#f4f1fb">${esc(l)}</text>`).join('\n  ')}
  ${desc.map((l, i) => `<text ${at} y="${250 + (lines.length - 1) * 82 + 62 + i * 36}" font-family="${font}" font-size="26" fill="#bdb6d1">${esc(l)}</text>`).join('\n  ')}
  <text x="80" y="570" font-family="${font}" font-size="22" fill="#9d96b6">www.starkllm.com · v${esc(V)} · Windows · Apache 2.0</text>
</svg>`;
  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true, quality: 90 }).toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
