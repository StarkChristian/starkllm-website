# starkllm.com website (redesign branch)

Astro static site. Output keeps the legacy URLs (`about.html`, `tech-rag.html`, ...), so inbound links and SEO survive.

```bash
npm install
npm run dev            # http://localhost:4321
npm run build          # -> dist/
npm run check-links    # build first; checks every local href/src in dist/
npm run check-i18n     # build first; checks <html lang>, canonical, hreflang, language switcher and sitemap
```

## Layout

| Path | What |
|---|---|
| `src/layouts/SiteLayout.astro` | The page shell: nav, footer, fonts, design tokens, canonical, hreflang, Open Graph (one image per page, `src/pages/og/`), JSON-LD, speculation rules, theme toggle. |
| `src/styles/{tokens,base,components}.css` | The 2026 design system: OKLCH colours with `light-dark()`, type scale, spacing, components. No framework. |
| `src/i18n/langs/<lang>/{common,media,start,features,phone,privacy,about,changelog}.ts` | Texts of the 2026 pages, one file per language and page, loaded by `src/i18n/site.ts`. es/fr/it/tr: see `docs/translating-2026.md`. |
| `src/components/{AppShot,AppVideo}.astro` | App screenshots and clips by media name, with a placeholder until the file exists (see "Media"). |
| `src/data/RELEASE_NOTES.md`, `src/data/changelog.ts` | The app's release notes, parsed at build time into `/changelog`. Copy the new file over it for a new release. |
| `src/i18n/ui.ts` | **The language setup**: `languages`, `defaultLang`, `localizedPaths` (which pages exist in which language), `localePath()`, `alternatesFor()`, and the nav/footer strings. |
| `src/i18n/pages.ts` | The translated pages and what renders them (`home`, `product`, `download`, `help`, `tech-*`). |
| `src/pages/[...page].astro`, `src/pages/[lang]/` | One route template for every translated page: English at the root (`/product`), every other language under its code (`/de/product`). No per-language page files. |
| `src/components/LocalizedPage.astro` | Picks body component, title, description and head tags for a (language, page). |
| `src/components/{Home,FeaturesPage,PhonePage,PrivacyPage,AboutPage,ChangelogPage,DownloadPage,HelpPage,TechPage}.astro` | The page bodies. Download, help and technology copy is in `src/i18n/{download,help,tech}.ts` (+ `langs/<lang>/`); the 2026 pages read `src/i18n/langs/<lang>/<page>.ts`. |
| `src/i18n/shots.ts`, `src/assets/shots/` | Screenshots of the app per UI language, with alt texts. |
| `src/pages/{manual,about,contact,impressum,datenschutz}.astro` | Pages that exist once (the manual is English, the legal pages are German). Body HTML is in `src/content-html/*.main.html`. They have no hreflang tags and no language switcher. |
| `src/components/` | `SiteNav`/`SiteFooter`; the language switcher in the nav lists only the languages a page really exists in. |
| `src/assets/fonts/` | Self-hosted Geist (latin and latin-ext, the second for Turkish ğ ş İ) and Geist Mono (latin), SIL OFL. Source and version: `src/styles/fonts.css`. |
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

Rules: no sound, no autoplay; `prefers-reduced-motion` means no walking and no looping animation; the dock moves aside when links, buttons or fields would be under her and stays above the footer; "Hide Lucy" is kept in `localStorage` (key `lucy-hidden`, try/catch) and applied before the first paint; the conversation lives in `sessionStorage` only; on imprint and privacy policy she never opens a bubble, gives no legal advice and answers only from the open page (in German, the language of those texts).

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

## Languages

English is the default language and lives at the site root; every other language lives under its code: German `/de/`, Spanish `/es/`, French `/fr/`, Italian `/it/`, Turkish `/tr/`. Nothing on a page may assume the reader is in Germany, except the legal pages (`impressum`, `datenschutz`), which are German legal text (their `<html lang>` is `de`).

The legal texts are not translated into the new languages. `/privacy-policy` is the English courtesy translation of the privacy policy, `datenschutz` and `impressum` are the legally binding German originals, and the footer of `es`, `fr`, `it` and `tr` links to a short notice page (`/<lang>/legal`) that points to all three. The text of the new languages is AI-drafted: every page shows a small notice in the footer (`footer.aiNote`) and the native-speaker review list is `docs/translation-review.md`.

Rules the build checks (`npm run check-i18n`): every page has one canonical URL (itself); a page that exists in several languages lists all of them plus `x-default` (the default language, or the first language of the page if the default has none) as `hreflang` alternates, and every alternate lists the same set; a page that exists in one language has no hreflang tags and no language switcher; every page is in `sitemap.xml`. `python3 tools/check_language_mix.py --root dist` checks that no page contains sentences of another language.

### Adding a language

Example: Portuguese (`pt`). Nothing in the English or German files changes; everything for a language is in its own files, and the build fails with the list of missing keys if a file does not have every key (and the same list lengths) as the English one.

1. `src/i18n/ui.ts`: add `pt: { name: 'Português', locale: 'pt_PT' }` to `allLanguages`, add `pt` to `localizedPaths` (`[...translated, '/legal']`) and to `aiTranslated` (so it shows the AI notice and the English screenshots).
2. Create `src/i18n/langs/pt/`: the 2026 page texts `common.ts`, `media.ts`, `start.ts`, `features.ts`, `phone.ts`, `privacy.ts`, `about.ts`, `changelog.ts` (shaped like `src/i18n/langs/en/`), and `ui.ts`, `download.ts`, `help.ts`, `tech.ts` (`{ labels, pages }`), `shots.ts` (alt texts), `pages.ts` (titles and the legal-notice text), `lucy.ts`, each a default export shaped like the `en` object of the file of the same name in `src/i18n/`. Add the language's sections to `src/i18n/release250.ts` and `release260.ts`.
3. Create `src/content-html/manual.main.pt.html` and `contact.main.pt.html` (translations of the English ones; links go to `/pt/...`).
4. Lucy: `src/data/lucy-faq/pt.json` (stop words, suffixes, FAQ questions with the phrase of the answer passage) and `tests/lucy/questions.pt.json` (40+ questions, unrelated and legal-advice questions). `npm run build` runs the quality gate.
5. Build with `SITE_LANGS=en,pt npm run build` while working (only those languages are built), then `npm run build`, `npm run check-links`, `npm run check-i18n`.

If the app has an interface in that language, add its screenshots (`tools/screenshots/`, `tools/make_shots.py --lang pt`) and point `shots` at them in `src/i18n/shots.ts` instead of the English ones.

## Media

Screenshots: `src/assets/media/<lang>/<lang>-<name>.png` (PNG, at least 1920 px wide; the build makes AVIF and WebP in 640/960/1280/1920). Names: `01-home`, `02-inbox`, `03-chat-sources`, `04-source-page`, `05-scam-warning`, `06-book-summary`, `07-image-question`, `08-recording`, `09-web-task`, `10-terminal`, `11-compare-models`, `12-settings-phone`, `13-privacy-network`, `14-themes`, `15-settings-models`, and the Android app `phone-01-chat` (portrait). Videos: `public/media/video/<lang>-<name>.webm` (AV1) and `.mp4` (H.264), poster `.jpg`, captions `.vtt`; names `v1-letter-answer` (per language), `v2-web-task`, `v3-terminal`, `v4-inbox`, `v5-privacy` (English; captions per language). A missing file falls back to English, then to a placeholder that shows the expected file name. Alt texts and captions: `src/i18n/langs/<lang>/media.ts`.

Old addresses: `/product` (every language) and `/android` are redirect pages to `/features` and `/phone` (`redirects` in `src/i18n/pages.ts`).

## Screenshots (older, 2.x)

`tools/screenshots/README.md` explains how the screenshots are made (invented demo data only). `tools/make_shots.py` turns them into the optimised WebP files.
