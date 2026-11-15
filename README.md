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
| `src/layouts/SiteLayout.astro` | The page shell: nav, footer, fonts, tokens, canonical and hreflang tags (computed from `lang` + `path`). |
| `src/i18n/ui.ts` | **The language setup**: `languages`, `defaultLang`, `localizedPaths` (which pages exist in which language), `localePath()`, `alternatesFor()`, and the nav/footer strings. |
| `src/i18n/pages.ts` | The translated pages and what renders them (`home`, `product`, `download`, `help`, `tech-*`). |
| `src/pages/[...page].astro`, `src/pages/[lang]/` | One route template for every translated page: English at the root (`/product`), every other language under its code (`/de/product`). No per-language page files. |
| `src/components/LocalizedPage.astro` | Picks body component, title, description and head tags for a (language, page). |
| `src/components/{Home,ProductPage,DownloadPage,HelpPage,TechPage}.astro` | The page bodies. Copy for every language lives in `src/i18n/{home,product,download,help,tech}.ts`, one object per language. |
| `src/i18n/shots.ts`, `src/assets/shots/` | Screenshots of the app per UI language, with alt texts. |
| `src/pages/{manual,about,contact,impressum,datenschutz}.astro` | Pages that exist once (the manual is English, the legal pages are German). Body HTML is in `src/content-html/*.main.html`. They have no hreflang tags and no language switcher. |
| `src/components/` | `SiteNav`/`SiteFooter`; the language switcher in the nav lists only the languages a page really exists in. |
| `src/assets/fonts/` | Self-hosted Syne, Manrope, JetBrains Mono (latin subset, SIL OFL). |
| `public/` | Copied as-is: `CNAME`, `.nojekyll`, `robots.txt`, `favicon.ico`, `assets/`. |
| `legacy/` | The pre-redesign pages, kept for reference until Phase 3 is done. Not built. |
| `mockups/` | The three design directions (A was chosen). Not built. |
| `downloads/` | Gitignored. Installers are on GitHub Releases, not on this site. |

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

## Languages

English is the default language and lives at the site root; German lives under `/de/`. Nothing on a page may assume the reader is in Germany, except the legal pages (`impressum`, `datenschutz`), which are German legal text (their `<html lang>` is `de`).

Rules the build checks (`npm run check-i18n`): every page has one canonical URL (itself); a page that exists in several languages lists all of them plus `x-default` (the default language) as `hreflang` alternates, and every alternate lists the same set; a page that exists in one language has no hreflang tags and no language switcher; every page is in `sitemap.xml`.

### Adding a language

Example: French (`fr`).

1. `src/i18n/ui.ts`: add `fr: { name: 'Français', locale: 'fr_FR' }` to `languages`; add `fr: translated` (or a shorter list, see below) to `localizedPaths`; add an `fr` object next to `en` and `de` in `ui` (nav and footer strings).
2. Translate the page copy: add an `fr` object next to `en` and `de` in `src/i18n/home.ts`, `product.ts`, `download.ts`, `help.ts` and `tech.ts` (same keys; the build fails with an error where the `fr` object is missing).
3. Screenshots: take the same shots with the app set to that language (`tools/screenshots/`), run `tools/make_shots.py` for `--lang fr`, and add the images and alt texts for `fr` to `src/i18n/shots.ts`. If the app has no UI in that language yet, use the English shots for it (point `fr` at the `en` images) and say so in the alt text.
4. Build: the routes (`/fr/`, `/fr/product`, ...), canonical URLs, hreflang tags, the language switcher and the sitemap entries appear by themselves. Run `npm run check-i18n` and `npm run check-links`.

A new language may start with only some pages: list just those paths in `localizedPaths.fr`. Links to the other pages fall back to the default language, and those pages offer no `fr` switcher.

Not translated yet and exist once: the manual (`/manual`, English), `about`, `contact`, and the German legal texts. To translate one of them, add it to `localizedPaths` and move it to a component like the others.

## Screenshots

`tools/screenshots/README.md` explains how the screenshots are made (invented demo data only). `tools/make_shots.py` turns them into the optimised WebP files.
