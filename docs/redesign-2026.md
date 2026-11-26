# StarkLLM website 2026: scenario

Owner's goal (25 Nov 2026): a new website at the level of the app, as good as the best websites of 2026.
- Every language has its own complete pages.
- Every feature up to 2.6.0 is on it.
- Current screenshots and short videos, in every language.
- Nothing old or out of date.

Going live needs the owner's OK. Until then the new site is a preview.

## 1. Principles

1. **True to the app.** Every sentence is checked against RELEASE_NOTES.md and the docs of v2.6.0. Every picture is taken from the published 2.6.0, in the page's language.
2. **Six languages, each one complete.** en, de, es, fr, it, tr.
   - Every page exists in every language: home, product, features, phone, privacy, download, manual, help, technology pages and about.
   - The legal pages stay in German and English.
   - The texts are written for each language, not word-for-word translations, always in the formal address.
   - Arabic and Persian (right-to-left) were added on 26 Nov 2026 at the owner's request; the app's interface is not in them, the site says so. See README.md, "Right-to-left languages".
3. **Private like the app.** No trackers, no cookies, no fonts or scripts from other servers. Videos are hosted on the site itself, so there is no YouTube.
4. **Fast.** The HTML of the home page is small. Images are AVIF/WebP in the needed sizes. Videos load only when they come into view.
   - Target: Lighthouse 100 for performance, accessibility, best practices and SEO.
   - Target: LCP < 1.5 s on 4G.
5. **Accessible.** WCAG 2.2 AA.
   - Full keyboard use.
   - Alt texts and captions in every language.
   - `prefers-reduced-motion` switches every animation off.
   - Light and dark mode.

## 2. Technology (2026)

- **Astro 7, static.** Already in use. No server and nothing to log in to.
- **View Transitions API.** Smooth page changes; the language switch keeps the scroll position.
- **CSS:**
  - OKLCH colour tokens, light and dark (`light-dark()`);
  - container queries;
  - `:has()`;
  - native nesting;
  - scroll-driven animations (`animation-timeline: view()`) for scroll reveals, without JavaScript;
  - `@starting-style` for appear effects;
  - the anchor positioning API for tooltips.
- **Speculation Rules API.** Pages the visitor is likely to open next are loaded ahead of time.
- **Images:** `<picture>` with AVIF and WebP, `srcset`, and fixed sizes so the layout does not jump.
- **Video:** `<video>` with AV1 and H.264 sources, a poster frame, muted, loops, and a play/pause control. Captions are WebVTT in every language. Videos load only near the viewport (IntersectionObserver).
- **Self-hosted variable fonts** (Geist), with `font-display: swap`.
- **SEO:**
  - Open Graph images per page and language;
  - JSON-LD (`SoftwareApplication`, `FAQPage`, `HowTo`);
  - hreflang for all six languages;
  - sitemap.
- **Lucy**, the site assistant, stays. She works in the browser only and knows the new pages.
- **Quality gate in `npm run build`:**
  - links (none broken);
  - languages (every page in every language, no English left in other languages);
  - the Lucy test;
  - image sizes.

## 3. Design

The direction is "calm, precise, trustworthy": a software product that keeps documents private, not a crypto landing page.

- **Colours:** deep ink and a warm off-white as the two bases (dark and light mode), the StarkLLM violet as the only accent, and gold only for small details.
- **Type:** large, short headlines, and body text with plenty of air.
- **Bento grid** for the features: every tile has a real image or a short loop from the app.
- **Hero:**
  - On the left, the promise in one sentence and two buttons ("Download for Windows", "Watch the 60-second tour").
  - On the right, a real app window in the visitor's language, with a short loop: a letter is added → the answer with amount and date and a source chip → a click on the source opens the page.
- **"Your data stays here" diagram:** an animated SVG showing what stays on the PC and what goes online, and only when the user chooses. Web search, web task, update check and relay are each shown with their switch.
- **Phone section:** a phone frame with a real screenshot of the Android app, and two paths: "at home, directly" and "away from home, through the relay (opt-in, end-to-end encrypted)".
- **Trust bar:** signed by "Open Source Developer Christian Stark", Apache 2.0, no telemetry, SBOM per release, the source on GitHub.
- **No stock photos.** Only the app, Lucy and clean icons.

## 4. Information architecture (per language)

| Page | Content |
|---|---|
| Home | Hero with a loop · three promises (local, with sources, asks before it acts) · bento of the 9 main features · 60-second tour video · privacy diagram · phone · "who it is for" (households, freelancers, students, offices) · download teaser · FAQ (6 questions) |
| Features (new, replaces product) | One section per feature, with a picture or loop, what it does and its limits: documents and sources · inbox, deadlines and amounts · protection from scams and AI notes · whole books · photos and scans (OCR) · images · recordings · web search · web tasks · terminal · compare models · Word/PDF · MCP tools · themes · voice · workspaces and knowledge base |
| Phone (new) | The Android app: pairing, levels, at home and away from home, what the relay sees, limits, Google Play test |
| Privacy | What never leaves the PC · what goes online and when (table of every connection, as in Privacy → Network) · protection at rest · signed builds · SBOM · how to check it yourself |
| Download | Version, size and SHA-256 live from the GitHub release · system requirements · install in 3 steps with screenshots · Ollama and models · update path · SmartScreen note |
| Manual | First start, every screen with a current screenshot, "New in 2.6.0" |
| Help | Problems and solutions, limits, contact |
| Technology | RAG, hybrid search, chunking, local models, multimodal, encryption: kept and updated |
| About | Christian Stark, why StarkLLM, open source, roadmap 2026–2027 |
| Changelog (new) | Every version from 2.0.2 to 2.6.0, from RELEASE_NOTES.md |

## 5. Pictures and videos (made on the MSI laptop with the published 2.6.0)

The laptop drives the app through its DevTools interface (`Page.captureScreenshot` and `Page.startScreencast`). That gives sharp pictures without the desktop around them and without mouse jitter. The demo data is the test kit only (made-up letters, made-up names), never real data.

**Screenshots, per language (6 × 14):**
1. home with deadlines
2. inbox
3. chat with answer and source chips
4. source opened at its page
5. scam warning / AI-note answer
6. book summary
7. image question
8. recording as a document
9. web task in the StarkLLM browser
10. terminal with a change shown first
11. compare models
12. settings → phone with the away switch
13. privacy → network
14. themes (light and dark)

**Videos.** Silent, 10–25 s, 1280×800, with captions in every language:
- V1 hero loop: letter → answer with sources (per language)
- V2 web task: open a site, click, answer with link (en, de)
- V3 terminal: change shown, yes, undo (en)
- V4 phone: question from the phone, answer with sources (from the PC's mirror; no camera, no QR code)
- V5 60-second tour: cut from V1–V4 plus inbox and privacy, with captions in 6 languages

The pictures for the phone page come from the Android app on the Galaxy Z Flip5 by adb screencap, only when the phone is connected by USB. Until then the phone page uses the app's PC-side screens.

## 6. Order of work tonight

1. Site design system and the new home page in English.
2. In parallel, the laptop makes the screenshots and videos in all six languages.
3. All pages in English and German.
4. es, fr, it, tr.
5. Insert the media. Optimise: AVIF/WebP, and AV1/H.264 with ffmpeg on the home server.
6. Quality gate: build, links, languages, Lucy, Lighthouse and axe on the laptop. Check the look at phone width and in dark and light mode.
7. Preview: branch `site/2026` built on the home server (http://192.168.0.47:8210/site-preview/), screenshots of every page in a report.
8. Going live (push `redesign` → `gh-pages`) waits for the owner's OK. The legal texts (privacy policy, relay paragraph) are listed separately for the owner's check.
