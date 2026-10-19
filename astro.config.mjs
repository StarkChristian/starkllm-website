import { defineConfig } from 'astro/config';

// Output keeps the legacy URLs (about.html, tech-rag.html, ...) so SEO and inbound links survive.
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
