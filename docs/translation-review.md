# Native-speaker review checklist (es, fr, it, tr)

The Spanish, French, Italian and Turkish texts of the site were drafted with AI assistance from the English source (German existed already). They have **not** been read by native speakers. Every page of these languages shows a small notice in the footer ("translated with AI assistance, please report mistakes") that links to GitHub issues and the contact page. Please remove the notice only after a native speaker has reviewed that language.

## How to review
1. Open the language switcher on https://www.starkllm.com/ and read in this order: home, product, download (SmartScreen explanation, checksum area), help, manual (29 sections), the eleven feature pages (`tech-*`), about, contact, the legal notice page (`/<lang>/legal`).
2. Open Lucy (bottom-right) and ask the suggested questions and a few of your own; check her sentences, the tour ("Show me around") and that her answers are quotes from the pages.
3. Fix by editing the files listed below. Nothing else needs to change; `npm run build` checks the structure and Lucy's quality gate.

| What | Files (replace `<l>` by `es`, `fr`, `it`, `tr`) |
|---|---|
| Navigation, footer, AI notice | `src/i18n/langs/<l>/ui.ts` |
| Home, product, download, help, feature pages | `src/i18n/langs/<l>/{home,product,download,help,tech}.ts` |
| Titles, legal notice page | `src/i18n/langs/<l>/pages.ts` |
| Screenshot descriptions (screenshots show the English app) | `src/i18n/langs/<l>/shots.ts` |
| Manual, about, contact | `src/content-html/{manual,about,contact}.main.<l>.html` |
| Lucy's words, tour, chat labels | `src/i18n/langs/<l>/lucy.ts` |
| Lucy's search data (stop words, suffixes, FAQ questions) | `src/data/lucy-faq/<l>.json` |
| Lucy's test questions | `tests/lucy/{questions,heldout}.<l>.json` |

## Things to look at in every language
- **Tone**: es "tú", fr "vous", it "tu", tr "siz". Is that right for software documentation in your country?
- **Windows messages**: the SmartScreen texts ("Windows protected your PC", More info, Run anyway) and other Windows quotes appear with the language's real Windows wording in brackets where the helper knew it. Please check them against a Windows in your language.
- **App names**: Workspace, Knowledge Base and Inbox stay in English (they are the names in the app, whose interface is English or German for now) and are explained once. Check the explanations.
- **Legal notice page**: the legal texts are not translated; the page says the German texts are legally binding and links to the English courtesy translation. Check the wording of the notice.
- **Claims**: the pages say that the app's interface and letter rules cover English and German today, and that Spanish, French, Italian and Turkish are "coming with the next versions (in progress, not released yet)". Nothing may say that these are available.
- **Country-specific wording**: letters from tax offices, payment reminders and similar examples come from German practice; check that the translated examples sound natural in your country.
- Wherever English or German text remains on purpose (product names, commands, quoted app messages, Impressum, Datenschutz) leave it.

## Language notes from the helpers who drafted the texts
- **Spanish**: Knowledge Base, Workspace and Inbox kept in English and explained once ("base de conocimiento", "espacio de trabajo", "bandeja de entrada"); case = "expediente", deadline = "plazo", tax notice = "notificación de Hacienda", reminder = "reclamación de pago", scam = "estafa", scan = "escaneo", chunk = "fragmento". Unsure: the Spain-centred words Hacienda and "reclamación de pago"; "Windows protegió su PC"; the tone of Lucy's lines. Held-out search questions: 60 % correct source (the lowest of the languages): more Spanish question variants in `es.json` will help.
- **French**: letter = "courrier", case = "dossier", inbox = "boîte de réception", deadline = "échéance", hybrid search = "recherche hybride", chunk = "segment", re-ranking = "reclassement", sandbox = "bac à sable"; SmartScreen buttons « Informations complémentaires » and « Exécuter quand même ». Unsure: « Windows a protégé votre ordinateur » and « Version par défaut : 2 » as real French Windows wording. Known wrong answer outside the tests: an unrelated question about a laptop's price gets the "train/laptop" passage of the local-models page.
- **Italian**: case = "pratica", deadline = "scadenza", letter = "lettera", scan = "scansione", chunk kept as "chunk", hybrid search = "ricerca ibrida", cited answer = "risposta con fonte", fake letter = "lettera falsa"; the legal page is "Informazioni legali". Unsure: the tone of the link texts on the legal page. Source note: the manual lists the theme "Nordic Frost" where the other pages say "Arctic Frost" (kept as in the English source).
