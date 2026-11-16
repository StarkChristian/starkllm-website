# Lucy, the website assistant (plan and decisions)

Owner request: Lucy sits bottom-right on every page and answers visitors' questions about StarkLLM. This file is the plan; it was written before the code and updated where the code differs. The code is in `src/components/Lucy*.astro`, `src/scripts/lucy-*.{ts,js}`, `tools/build-lucy-index.mjs`, `tools/test-lucy.mjs`, `src/data/lucy-faq/`.

## What the visitor sees

1. **Every page**: Lucy is docked in the bottom-right corner (72 px, 56 px on phones), idle (blinking, breathing). A small round x next to her is the "Hide Lucy" control; the choice is remembered (`localStorage`, try/catch) and applied before the first paint. When hidden, only a small "Show Lucy" chip remains in the corner.
2. **Home page**: Lucy starts in the hero (large, waving, with a greeting bubble). When the visitor scrolls down she leaves the hero and walks (walk state, legs moving) to the bottom-right corner; the movement is linked to the scroll position (scroll up and she walks back). Other pages: already docked. Reduced motion: no walking, no looping animation, she is simply docked.
3. **Click, Enter or Space on her** opens a chat panel above her: a non-modal `role="dialog"` with a short transparency note, three suggested questions, a text field, the answers, a "Show me around" button (where the page has a tour) and "Hide Lucy". Escape closes it and returns the focus to Lucy. On phones the panel is a bottom sheet that exists only while open.
4. **Answers** are short quotes from the site with a link ("Source: Page > Section"). If nothing fits: "I could not find that on this site", with links to Help, Manual, GitHub issues and Contact.
5. **Legal pages** (imprint, privacy policy and its translation): Lucy is there, but never starts a bubble, never gives legal advice and answers only from the text of the open page, with a link to it. Legal-advice questions get a fixed refusal pointing to the page and the contact address.

## Decisions (and why)

| # | Decision | Why |
|---|---|---|
| 1 | Retrieval in the browser, no LLM, no server, nothing sent anywhere | It matches StarkLLM's promise. A hosted LLM would send visitors' questions to a server and could invent answers. |
| 2 | Index built at build time from the *built HTML* (`dist/`) | One source of truth: every page and language is covered, including the German manual. No separate copy to keep in sync. |
| 3 | Curated FAQ per language is **a list of questions plus a phrase that must exist on a page** (`"page"`, `"match"`) | The build resolves the phrase to the real passage and fails if it is not found. So even curated answers are text that exists on the site; no FAQ answer is hand-written text that could drift. |
| 4 | BM25 over passages, small suffix stemmer, stop words and suffix lists come from the language data file | Adding Spanish, French, Italian or Turkish = one data file with stop words, suffixes, FAQ questions, plus the strings in `src/i18n/lucy.ts`. No engine change. |
| 5 | Two thresholds: a FAQ hit needs a good question match, a passage hit needs a minimum score *and* enough of the question's content words | "Unrelated question gives the fallback, not a guess." Tuned on the test set (see below). |
| 6 | Language follows the page (`<html lang>`); each language has its own index and only its own pages. German legal pages are indexed for German, the English privacy translation for English | No mixing of languages in answers. |
| 7 | The always-loaded dock script is small (target < 6 KB gzipped, with the tour); the chat code (`lucy-chat`) and the index load on first open | Performance budget on every page. |
| 8 | Conversation kept only in `sessionStorage` (try/catch), gone when the tab closes; no analytics events for questions; no network request carries a question | Privacy promise. The site's page-view analytics (Umami, cookieless) are unchanged. |
| 9 | The tour (PR #20) stays; its button moved from the old strip at the page end into the panel and the hero bubble | One Lucy per page. During a tour the docked Lucy steps aside. |
| 10 | The dock avoids covering links and form fields: after scrolling stops she tests the spots under her; if links, buttons or fields are underneath she moves up the right edge (then to the left), and near the end of the page she stays above the footer | The owner's rule "never covers links, fields or the footer". |
| 11 | Existing explanatory figures (pointing at screenshots, SmartScreen note, privacy note, About) stay as page content | They carry information next to the text; the docked Lucy is the assistant. |
| 12 | Quality gate runs in the build: `tools/test-lucy.mjs` | Fails the build below 85% top-1 source accuracy, on any answer text that is not on the site, or any unrelated question that is answered. |

## Files

- `src/data/lucy-faq/<lang>.json`: stop words, suffixes, extra pages, legal pages, FAQ entries (`q`, `page`, `match`).
- `tools/build-lucy-index.mjs`: reads `dist/**/*.html`, writes `dist/assets/lucy/index-<lang>.json` (passages, FAQ resolved to passages, language settings). Runs after `astro build` (`npm run build`).
- `src/scripts/lucy-engine.js`: tokenizer, BM25, FAQ matching, answer building. Pure functions, shared by the browser and the test.
- `src/scripts/lucy-dock.ts`: dock position, descent, hide, collision avoidance, opens the chat; `src/scripts/lucy-chat.ts`: the panel (lazy).
- `src/scripts/lucy-guide.ts`: the tour (unchanged apart from the button source).
- `tests/lucy/questions.<lang>.json` + `tools/test-lucy.mjs`: at least 40 realistic questions per language with the expected source page, plus unrelated questions that must give the fallback.
- `src/i18n/lucy.ts`: all words (chat labels, suggestions, fallback text, legal-advice text), English and German.

## Adding a language

1. Add the site language as described in the README ("Adding a language"); Lucy's strings are `src/i18n/langs/<lang>/lucy.ts`.
2. Add `src/data/lucy-faq/<lang>.json` (stop words, suffixes, FAQ: questions plus a phrase from the translated page) and `tests/lucy/questions.<lang>.json`; `npm run build` shows the hit rate and fails below 85 %.

## Open questions for the owner (not implemented)

- An optional LLM-backed mode later (for example Cloudflare Workers AI) would send questions to a server; it must then be opt-in and clearly labelled.
- Feedback buttons ("helpful / not helpful") would need somewhere to store the votes; today nothing is stored.

## Measured (build of 2026-11-15)

| What | Value |
|---|---|
| Search index | English 115 KB (about 34 KB gzipped), German 130 KB (about 38 KB gzipped); 19 pages and about 340 passages per language, 35 FAQ entries. Loaded only when the chat is first opened. |
| Always-loaded JavaScript (dock and tour) | about 3.2 KB gzipped, plus about 1.2 KB of page data (JSON) |
| Lazy chunk (chat panel and engine) | about 3.6 KB gzipped |
| Questions that must be answered correctly (tuned set, 48 per language) | English 100 %, German 100 %; answers not found on the page: 0; unrelated questions answered: 0 of 12 per language; legal-advice questions refused: 3 of 3 |
| Held-out questions (20 per language, written after the tuning, not tuned on) | English 85 %, German 70 % correct top-1 source; invented answers: 0 (the misses are honest fallbacks or a neighbouring page) |
| Lighthouse (local, mobile and desktop; home, download, imprint, tech-rag) | performance 99-100, accessibility 93-95, both equal to or better than before; layout shift unchanged |

The tuned set is the build gate (85 % minimum). Because the FAQ question lists were extended while tuning on it, the held-out numbers are the honest estimate of how well she does on new questions.

## Six languages (2026-11-15)

Lucy works in English, German, Spanish, French, Italian and Turkish: UI strings and tour in `src/i18n/langs/<lang>/lucy.ts`, search data in `src/data/lucy-faq/<lang>.json`, one index per language (`index-<lang>.json`, 34-41 KB gzipped each, loaded on first open only). The quality gate runs for every language: 48-53 realistic questions per language, top-1 source 100 % (threshold 85 %), 0 answers that are not on the cited page, 0 of 12 unrelated questions answered, 3 of 3 legal-advice questions refused. Held-out questions (20 per language, not tuned on): English 85 %, German 70 %, Spanish 60 %, French 80 %, Italian 85 %, Turkish 85 %. The Spanish and German FAQ variants are the first to extend when a native speaker reviews the text. On the legal pages (German texts) Lucy speaks German and answers only from the page.
