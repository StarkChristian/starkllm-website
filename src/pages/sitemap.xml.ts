// Keeps the legacy /sitemap.xml URL. Lists every page except the 404, as clean URLs (Cloudflare Pages redirects *.html to them).
// Driven by src/i18n/ui.ts: a page in several languages gets one entry per language, each with all hreflang alternates.
import type { APIRoute } from 'astro';
import { SITE, langList, langsFor, localizedPaths, singlePages, localePath, alternatesFor } from '../i18n/ui';

const priority: Record<string, string> = { '/': '1.0', '/features': '0.9', '/phone': '0.8', '/privacy': '0.8', '/download': '0.9', '/manual': '0.8', '/help': '0.8' };

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const entries: { loc: string; base: string; alternates: { hreflang: string; href: string }[] }[] = [];
  const all = [...new Set(langList.flatMap((l) => localizedPaths[l]))];
  for (const path of all) {
    for (const lang of langsFor(path)) entries.push({ loc: localePath(lang, path), base: path, alternates: alternatesFor(path) });
  }
  for (const path of singlePages) entries.push({ loc: path, base: path, alternates: [] });
  const body = entries
    .sort((a, b) => a.loc.localeCompare(b.loc))
    .map((e) => {
      const alt = e.alternates.map((a) => `\n    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}"/>`).join('');
      return `  <url>\n    <loc>${SITE}${e.loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority[e.base] ?? '0.6'}</priority>${alt}\n  </url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
