// Turns a production build (dist/) into a safe preview build:
//   - prefixes root-absolute URLs with BASE, so the site works under https://<user>.github.io/<repo>/
//   - marks every page noindex and disallows all crawlers (robots.txt), removes the sitemap
//   - adds a visible "Preview" banner with the commit
//
// Usage: BASE=/starkllm-website-preview SHA=abc123 node tools/prepare-preview.mjs dist
// Leave BASE empty when the preview is served from the root of its own domain.
import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve(process.argv[2] ?? 'dist');
const base = (process.env.BASE ?? '').replace(/\/$/, '');
const sha = (process.env.SHA ?? 'local').slice(0, 7);
const when = new Date().toISOString().slice(0, 16).replace('T', ' ') + ' UTC';

const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
const prefix = (u) => (u.startsWith('/') && !u.startsWith('//') ? base + u : u);

const banner =
  `<div role="note" style="position:fixed;z-index:99999;left:0;right:0;bottom:0;padding:.4rem 1rem;background:#d4af37;color:#111;` +
  `font:600 12px/1.4 ui-monospace,Consolas,monospace;text-align:center">PREVIEW BUILD ${sha} · ${when} · not the live site</div>`;

let pages = 0;
for (const file of walk(dir)) {
  if (file.endsWith('.html')) {
    let h = fs.readFileSync(file, 'utf8');
    if (base) {
      h = h.replace(/(\s(?:href|src|action|poster)=")(\/(?!\/)[^"]*)"/g, (_, a, u) => `${a}${prefix(u)}"`);
      h = h.replace(/(\ssrcset=")([^"]*)"/g, (_, a, v) => `${a}${v.split(',').map((p) => { const t = p.trim(); const i = t.search(/\s/); const u = i < 0 ? t : t.slice(0, i); return prefix(u) + (i < 0 ? '' : t.slice(i)); }).join(', ')}"`);
      h = h.replace(/url\((['"]?)(\/(?!\/)[^)'"]*)\1\)/g, (_, q, u) => `url(${q}${prefix(u)}${q})`);
    }
    h = h.replace(/<meta\s+name="robots"[^>]*>/gi, '');
    h = h.replace(/<head>/i, '<head><meta name="robots" content="noindex, nofollow">');
    h = h.replace(/<body([^>]*)>/i, `<body$1>${banner}`);
    fs.writeFileSync(file, h);
    pages++;
  } else if (file.endsWith('.css') && base) {
    const c = fs.readFileSync(file, 'utf8').replace(/url\((['"]?)(\/(?!\/)[^)'"]*)\1\)/g, (_, q, u) => `url(${q}${prefix(u)}${q})`);
    fs.writeFileSync(file, c);
  }
}
fs.writeFileSync(path.join(dir, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
fs.rmSync(path.join(dir, 'sitemap.xml'), { force: true });
fs.rmSync(path.join(dir, 'CNAME'), { force: true }); // the preview must never claim the production domain
console.log(`prepared ${pages} pages (base="${base}", ${sha})`);
