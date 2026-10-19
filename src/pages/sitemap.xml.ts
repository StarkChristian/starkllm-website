// Keeps the legacy /sitemap.xml URL. Lists every built page except the 404.
import type { APIRoute } from 'astro';

const SITE = 'https://www.starkllm.com';
const pages = import.meta.glob('./**/*.astro');
const priority: Record<string, string> = { '/': '1.0', '/product.html': '0.9', '/download.html': '0.9', '/manual.html': '0.8' };

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = Object.keys(pages)
    .map((p) => p.replace('./', '').replace(/\.astro$/, ''))
    .filter((p) => p !== '404')
    .map((p) => {
      if (p === 'index') return '/';
      if (p === 'de/index') return '/de/';
      return `/${p}.html`;
    })
    .sort();

  // Pages that exist in both languages get hreflang alternates.
  const pairs = new Set(urls.filter((u) => u.startsWith('/de/')).map((u) => u.slice(3)));
  const alt = (loc: string) => {
    const key = loc.startsWith('/de/') ? loc.slice(3) : loc;
    return pairs.has(key)
      ? `
    <xhtml:link rel="alternate" hreflang="en" href="${SITE}${key}"/>
    <xhtml:link rel="alternate" hreflang="de" href="${SITE}/de${key}"/>`
      : '';
  };

  const body = urls
    .map(
      (loc) =>
        `  <url>\n    <loc>${SITE}${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <priority>${priority[loc] ?? '0.6'}</priority>${alt(loc)}\n  </url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${body}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
