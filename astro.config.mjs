import { defineConfig } from 'astro/config';

// Files are still written as about.html, tech-rag.html, ... but every public URL (links, canonical, sitemap) is the clean form /about, /tech-rag.
// Cloudflare Pages serves the clean form and 308-redirects *.html to it, so old .html links keep working.
export default defineConfig({
  site: 'https://www.starkllm.com',
  trailingSlash: 'ignore',
  build: { format: 'preserve' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    routing: { prefixDefaultLocale: false },
  },
});
