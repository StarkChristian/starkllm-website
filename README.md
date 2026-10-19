# starkllm.com website (redesign branch)

Astro static site. Output keeps the legacy URLs (`about.html`, `tech-rag.html`, ...), so inbound links and SEO survive.

```bash
npm install
npm run dev            # http://localhost:4321
npm run build          # -> dist/
npm run check-links    # build first; checks every local href/src in dist/
```

## Layout

| Path | What |
|---|---|
| `src/layouts/SiteLayout.astro` | New design shell (Direction A): nav, footer, fonts, tokens. Used by the home pages. |
| `src/layouts/Layout.astro` | Legacy shell for not-yet-redesigned pages (legacy header/footer + `legacy.css`). |
| `src/components/Home.astro` | The new home page. Copy for EN/DE lives in `src/i18n/home.ts`. |
| `src/components/` | `Header.astro`, `Footer.astro` (EN/DE strings from `src/i18n/ui.ts`) |
| `src/pages/*.astro` | One thin wrapper per page. Body HTML is in `src/content-html/*.main.html`, head meta in `*.head.html`. |
| `src/pages/de/` | German pages. Add a path to `translatedPaths` in `src/i18n/ui.ts` when you add one. |
| `src/assets/fonts/` | Self-hosted Syne, Manrope, JetBrains Mono (latin subset, SIL OFL). |
| `src/styles/legacy.css` | Old stylesheet, unchanged for now. Phase 3 moves components onto `tokens.css`. |
| `public/` | Copied as-is: `CNAME`, `.nojekyll`, `robots.txt`, `favicon.ico`, `assets/`. |
| `legacy/` | The pre-redesign pages, kept for reference until Phase 3 is done. Not built. |
| `mockups/` | The three design directions (A was chosen). Not built. |
| `downloads/` | Gitignored. Installers are on GitHub Releases, not on this site. |

## Rules

- Installers go to GitHub Releases. Never put binaries under `public/`.
- Run `npm run build && npm run check-links` before every deploy. This is the check that would have caught the 404 download links.
- Legal pages (`impressum`, `datenschutz`) are German legal text: change them only on purpose.
