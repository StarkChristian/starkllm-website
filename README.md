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

## Lucy (the mascot)

Lucy is the StarkLLM robot. She appears on the home, product, download, feature (`tech-*`) and About pages and on the 404 page, and never on legal pages or pages that ask for the visitor's full attention (the list is `lucyProfile()` in `src/i18n/lucy.ts`; a page not listed there gets no Lucy).

| Path | What |
|---|---|
| `src/components/Lucy.astro` | The figure as inline SVG. Props: `state` (idle, wave, walk, point, talk, celebrate), `pose` (static), `size`, `title`, `uid`. |
| `src/components/LucySay.astro` | Lucy with a speech bubble, in the page flow. `keep` leaves the text visible as a plain note when she is hidden. |
| `src/components/LucyGuide.astro` + `src/scripts/lucy-guide.ts` | The strip at the end of a page ("Show me around", "Hide Lucy") and the tour. The tour starts only on a click; she walks along the bottom edge. About 1.5 KB gzipped, no dependencies. |
| `src/i18n/lucy.ts` | Every word she says (English, German) and the tour steps (CSS selector plus sentence per page type). The scripts contain no words. |
| `src/styles/lucy.css` | Animations and layout. Reduced motion: static poses only, no walking. |
| `public/assets/lucy/` | `lucy.svg` (animated, standalone), `png/` (poses), `lucy-face-{32,64,180}.png`, `og-lucy.png` (Open Graph, used by the home page). `tools/lucy/make_assets.py` makes the face and Open Graph images. |

Rules: no sound, no autoplay; she never covers links (inline figures sit in the page flow; the tour is started by the visitor); the choice "Hide Lucy" is kept in `localStorage` (key `lucy-hidden`, wrapped in try/catch) and applied before the first paint, so nothing jumps.

## Release data

Version, download links, sizes and SHA-256 come from the latest GitHub release of `StarkChristian/StarkLLM` when the site is built (`src/data/release.ts`). A new release needs no text edits; rebuild and deploy. `src/data/release.json` is the fallback for offline builds (`STARKLLM_OFFLINE=1`); refresh it with `node tools/update_release.mjs`.

## Rules

- Installers go to GitHub Releases. Never put binaries under `public/`.
- Run `npm run build && npm run check-links` before every deploy. This is the check that would have caught the 404 download links.
- Legal pages (`impressum`, `datenschutz`) are German legal text: change them only on purpose.
## Preview deploys

Previews go to a **separate** repo (`StarkChristian/starkllm-website-preview`, GitHub Pages), never to the live `gh-pages` of this repo.

- Preview URL: https://starkchristian.github.io/starkllm-website-preview/
- Publish by hand (Git Bash, from `website/`): `bash tools/publish-preview.sh`. It builds, runs the link check, applies `tools/prepare-preview.mjs`, and force-pushes to the preview repo.
- `tools/prepare-preview.mjs` rewrites root-absolute URLs to the preview base path, adds `noindex` and `robots.txt Disallow: /`, drops `CNAME` and `sitemap.xml`, and adds a yellow "PREVIEW BUILD <sha>" bar.
- Automatic previews on every push: `tools/preview.workflow.yml` is ready. Pushing a file under `.github/workflows/` needs a token with the `workflow` scope. Once you have one: `git mv tools/preview.workflow.yml .github/workflows/preview.yml`, commit and push. The secret `PREVIEW_DEPLOY_KEY` is already set on this repo.
