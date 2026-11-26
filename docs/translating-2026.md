# Translating the 2026 site (phase 2: es, fr, it, tr)

Phase 1 wrote every page in English and German. Spanish, French, Italian and Turkish already have all pages, but their
2026 texts are built from their older texts plus English (`src/i18n/legacy.ts`); every such file says `TODO translate`.
Phase 2 replaces those files with real translations. Formal address everywhere (usted, vous, Lei, siz). Feature and
button names as in the app (`frontend/src/i18n/<lang>.json` of the app repo).

## Files to fill, per language (`<lang>` = es, fr, it, tr)

Each file is a default export with exactly the keys and list lengths of the English file of the same name; the build
fails with the list of what is missing (`byLang` in `src/i18n/ui.ts`). Write them like `src/i18n/langs/de/*.ts`.

| File | English model | Today | What it holds |
|---|---|---|---|
| `src/i18n/langs/<lang>/common.ts` | `langs/en/common.ts` | legacy + English | nav, footer, trust bar, media labels, closing call to action |
| `src/i18n/langs/<lang>/media.ts` | `langs/en/media.ts` | old alt texts for 7 shots, rest English | alt texts of the screenshots, titles and captions of the videos |
| `src/i18n/langs/<lang>/start.ts` | `langs/en/start.ts` | legacy + English | home page |
| `src/i18n/langs/<lang>/features.ts` | `langs/en/features.ts` | legacy + English | features page (16 sections, each with its limits) |
| `src/i18n/langs/<lang>/phone.ts` | `langs/en/phone.ts` | hero from release250.ts, rest English | phone page (the "How it connects" part and the levels already come from `release250.ts`) |
| `src/i18n/langs/<lang>/privacy.ts` | `langs/en/privacy.ts` | headline and lede only, rest English | privacy page, including the table of connections |
| `src/i18n/langs/<lang>/changelog.ts` | `langs/en/changelog.ts` | English | the words around the release notes (the notes stay English; set `notesLang` to a sentence saying so, as in German) |
| `src/i18n/langs/<lang>/about.ts` | `langs/en/about.ts` | **missing**: the page shows the older `content-html/about.main.<lang>.html` | About page; create the file and the page switches to the 2026 layout by itself |

Replace a file completely: delete the two `legacy` lines and write the object. Do not edit `legacy.ts` for a
translated language; once all four are done, `legacy.ts` and the old `home.ts`/`product.ts` data can be removed.

Unchanged from before (already translated, keep them true for the current release): `download.ts`, `help.ts`,
`tech.ts`, `ui.ts`, `pages.ts`, `lucy.ts`, `shots.ts` in `src/i18n/langs/<lang>/`, and
`src/content-html/{manual,contact}.main.<lang>.html`.

## Media

The screenshots and videos are taken from the published app in each language (docs/redesign-2026.md §5):
`src/assets/media/<lang>/<lang>-<name>.png` and `public/media/video/<lang>-<name>.{webm,mp4,jpg,vtt}`. A missing
file falls back to English, and without English to a placeholder. Captions (`.vtt`) are per language even when the
video is English. Names are listed in README.md ("Media").

## Lucy

When a page's text changes, run `npm run build`: the Lucy gate checks that the FAQ phrases of
`src/data/lucy-faq/<lang>.json` still exist on the page they name (`/features`, `/phone` replaced `/product`). Adjust
`match` to the new sentence, never the other way round.

## Done when

`npm run build`, `npm run check-links`, `npm run check-i18n` pass, `python3 tools/check_language_mix.py --root dist`
reports no English in the language, and `grep -rl "TODO translate" src/i18n/langs/<lang>/` prints nothing.
