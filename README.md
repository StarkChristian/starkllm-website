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
| `src/layouts/SiteLayout.astro` | New design shell (Direction A): nav, footer, fonts, tokens. Used by the redesigned pages (home, product, download; EN + DE). |
| `src/layouts/Layout.astro` | Legacy shell for not-yet-redesigned pages (legacy header/footer + `legacy.css`). |
| `src/components/{Home,ProductPage,DownloadPage}.astro` | The redesigned pages. Copy for EN/DE lives in `src/i18n/{home,product,download}.ts`. |
| `src/components/` | `SiteNav`/`SiteFooter` (new), `Header`/`Footer` (legacy). Shared strings in `src/i18n/ui.ts`. |
| `src/pages/*.astro` | One thin wrapper per page. Body HTML is in `src/content-html/*.main.html`, head meta in `*.head.html`. |
| `src/pages/de/` | German pages. Add a path to `translatedPaths` in `src/i18n/ui.ts` when you add one. |
| `src/assets/fonts/` | Self-hosted Syne, Manrope, JetBrains Mono (latin subset, SIL OFL). |
| `src/styles/legacy.css` | Old stylesheet, unchanged for now. Phase 3 moves components onto `tokens.css`. |
| `public/` | Copied as-is: `CNAME`, `.nojekyll`, `robots.txt`, `favicon.ico`, `assets/`. |
| `legacy/` | The pre-redesign pages, kept for reference until Phase 3 is done. Not built. |
| `mockups/` | The three design directions (A was chosen). Not built. |
| `downloads/` | Gitignored. Installers are on GitHub Releases, not on this site. |

## Lucy (the mascot and website assistant)

Lucy is docked in the bottom-right corner of every page (home: she starts in the hero and walks down while you scroll). Click her and she answers questions about StarkLLM from this website's own pages, entirely in the browser: no LLM, no server, nothing is sent anywhere. The plan, the decisions and why are in `docs/lucy-assistant.md`.

| Path | What |
|---|---|
| `src/components/Lucy.astro` | The figure as inline SVG. Props: `state` (idle, wave, walk, point, talk, celebrate), `pose` (static), `size`, `title`, `uid`. |
| `src/components/LucySay.astro` | Lucy with a speech bubble in the page flow (explanations next to screenshots, SmartScreen note, privacy note, About). |
| `src/components/LucyGuide.astro` | The dock markup, the page data (JSON: labels, chat strings, tour steps) and the scripts. On every page. |
| `src/scripts/lucy-dock.ts` | Always loaded (about 3 KB gzipped with the tour): position, descent on the home page, footer and link avoidance, hide. |
| `src/scripts/lucy-chat.ts` + `lucy-engine.js` | The chat panel and the answer engine (BM25 + curated FAQ). Loaded on first click. |
| `src/scripts/lucy-guide.ts` | The visitor-started "Show me around" tour (not on legal pages). |
| `tools/build-lucy-index.mjs` | After `astro build`: reads `dist/**/*.html`, writes `dist/assets/lucy/index-<lang>.json`. |
| `tools/test-lucy.mjs`, `tests/lucy/` | Quality gate in `npm run build`: questions with expected source pages, unrelated questions, legal-advice questions. `npm run test-lucy` lists every miss. |
| `src/data/lucy-faq/<lang>.json` | Per language: stop words, suffixes, curated FAQ (questions plus a phrase that must exist on a page; the build fails if it does not). |
| `src/i18n/lucy.ts` | Every word she says (English, German): chat, bubbles, tour steps. The scripts contain no words. |
| `public/assets/lucy/` | `lucy.svg`, `png/` poses, `lucy-face-{32,64,180}.png`, `og-lucy.png` (Open Graph, home page only). `tools/lucy/make_assets.py` makes the face and Open Graph images. |

Rules: no sound, no autoplay; `prefers-reduced-motion` means no walking and no looping animation; the dock moves aside when links, buttons or fields would be under her and stays above the footer; "Hide Lucy" is kept in `localStorage` (key `lucy-hidden`, try/catch) and applied before the first paint; the conversation lives in `sessionStorage` only; on imprint, privacy policy and code signing policy she never opens a bubble, gives no legal advice and answers only from the open page (in German, the language of those texts).

Adding a language: add `src/data/lucy-faq/<lang>.json`, the `chat` block and tour steps in `src/i18n/lucy.ts`, and `tests/lucy/questions.<lang>.json`.

## Release data

Version, download links, sizes and SHA-256 come from the latest GitHub release of `StarkChristian/StarkLLM` when the site is built (`src/data/release.ts`). A new release needs no text edits; rebuild and deploy. `src/data/release.json` is the fallback for offline builds (`STARKLLM_OFFLINE=1`); refresh it with `node tools/update_release.mjs`.

## Rules

- Installers go to GitHub Releases. Never put binaries under `public/`.
- Run `npm run build && npm run check-links` before every deploy. This is the check that would have caught the 404 download links.
- Legal pages (`impressum`, `datenschutz`) are German legal text: change them only on purpose. `/privacy-policy` is the English courtesy translation of `datenschutz`; the German text is legally binding, so change both together and keep the notice on both pages.
## Preview deploys

Previews go to a **separate** repo (`StarkChristian/starkllm-website-preview`, GitHub Pages), never to the live `gh-pages` of this repo.

- Preview URL: https://starkchristian.github.io/starkllm-website-preview/
- Publish by hand (Git Bash, from `website/`): `bash tools/publish-preview.sh`. It builds, runs the link check, applies `tools/prepare-preview.mjs`, and force-pushes to the preview repo.
- `tools/prepare-preview.mjs` rewrites root-absolute URLs to the preview base path, adds `noindex` and `robots.txt Disallow: /`, drops `CNAME` and `sitemap.xml`, and adds a yellow "PREVIEW BUILD <sha>" bar.
- Automatic previews on every push: `tools/preview.workflow.yml` is ready. Pushing a file under `.github/workflows/` needs a token with the `workflow` scope. Once you have one: `git mv tools/preview.workflow.yml .github/workflows/preview.yml`, commit and push. The secret `PREVIEW_DEPLOY_KEY` is already set on this repo.
