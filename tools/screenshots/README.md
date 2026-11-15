# How the screenshots on the site were made

All screenshots show invented demo data (made-up senders, people, numbers, IBAN test values). Never use real documents.

1. `make_docs.py demo/` and `make_photo.py` create the demo letters (English, German, Spanish; a contract; a letter with a deadline; a fake-payment letter; one phone photo).
2. Start the app (backend + frontend, own container names and ports), register a demo user, add the letters (`ingest.py`).
3. `shoot.py`, `chatshots.py`, `more.py`, `inbox2.py` take 1440x900 screenshots with the light theme for `--lang en` and `de` (Playwright, headless Chromium). The scripts expect the UI on port 5173 and the API on 18411; edit the constants at the top.
4. `python3 tools/make_shots.py <raw-dir>` turns the PNGs into the WebP files in `src/assets/shots/` (and the English set into `public/assets/shots/` for the manual).

The Spanish bill is filed as an ordinary document: the app's rules read English and German letters only.
The About page is not used on the site because it shows the app version.
