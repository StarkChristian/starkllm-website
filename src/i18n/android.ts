import { byLang, type Lang } from './ui';
// Copy for the Android page, EN and DE. Facts: docs/android-companion.md, frontend/src/components/PhoneSettings.jsx and
// mobile/android in StarkChristian/StarkLLM. The app is in a closed test on Google Play, not released: keep the page honest.

const androidBase = {
  en: {
    meta: { title: 'StarkLLM for Android (preview) | StarkLLM', description: 'StarkLLM for Android asks your documents from your phone while they stay on your Windows PC: home Wi-Fi only, encrypted, no account, no cloud. In a closed test on Google Play.' },
    hero: { eyebrow: 'Android · Preview', h1: 'StarkLLM for Android', lede: 'Ask your documents from your phone. The phone asks, your PC answers: documents, the search index and the AI model stay on your Windows PC.' },
    status: {
      h2: 'Status: in a closed test, not released yet',
      text: 'The app is in a closed test on Google Play before everyone can download it.',
      howH: 'How to take part',
      how: [
        'Write to info@starkllm.com with the e-mail address of the Google account on your phone.',
        'You get the link to the test on Google Play.',
        'You need StarkLLM 2.4.0 or later on your PC. It is coming soon; the download page always has the current version.',
      ],
      mail: 'Write to info@starkllm.com',
      download: 'Download page',
    },
    how: {
      h2: 'How it works',
      items: [
        { t: 'Turn it on at the PC', v: 'In StarkLLM on your Windows PC, open Settings > Phone and turn the phone link on. It is off by default.' },
        { t: 'Pair with a QR code', v: 'Choose "Show QR code" on the PC and scan it once with the app. You can pair several PCs, for example at home and in the office.' },
        { t: 'Home network only', v: 'The phone reaches the PC only in your home network. The connection is encrypted with the PC\'s own certificate, which the phone pins, so nobody else in the network can pose as your PC.' },
      ],
    },
    features: {
      h2: 'What the app does',
      items: [
        { t: 'Ask about your documents', v: 'Questions go to StarkLLM on your PC; the answer streams in, with the documents it used.' },
        { t: 'Send letters and files', v: 'Take a photo of a letter, pick photos or files (PDF, EPUB, Word, PowerPoint, text, images) or use "Share" in other apps. The PC reads them, also the text in photos; photos are deleted on the phone after sending.' },
        { t: 'Dictation', v: 'Hold the microphone button. The speech model on your PC turns it into text, not an online service.' },
        { t: 'Deadlines', v: 'Overdue, today, this week and later, as on the PC. Optional reminders check the PC while the phone is at home, and a home-screen widget shows the next three.' },
        { t: 'Three levels per phone', v: 'On the PC you choose what each phone may do: ask only; also send documents; also start a backup now and switch StarkLLM fully offline, each confirmed with your fingerprint on the phone.' },
        { t: 'App lock, themes, languages', v: 'App lock with your fingerprint, 13 themes, and the six languages of StarkLLM: English, German, Spanish, French, Italian and Turkish.' },
      ],
    },
    privacy: {
      h2: 'Your documents stay on your PC',
      items: [
        'Documents, the search index and the AI model stay on the PC. The phone keeps only what it shows (the chat list, the open chat, the next deadlines) and its settings.',
        'No account, no cloud, no push service, no analytics.',
        'A question from the phone never goes online: no web search and no cloud models.',
      ],
    },
    req: {
      h2: 'Requirements',
      items: [
        ['Phone', 'Android 10 or later'],
        ['PC', 'StarkLLM 2.4.0 or later on Windows 10 or 11'],
        ['Network', 'Phone and PC in the same home network'],
      ],
      not: 'Not in this first version: access away from home, an app for iPhone, and signing in from the phone when StarkLLM on the PC has several accounts.',
    },
    cta: { h2: 'Try it early', text: 'Write to us to join the closed test. Until then, StarkLLM on Windows is free to download.', mail: 'Join the test', download: 'StarkLLM for Windows', product: 'Back to the product' },
    productLink: { text: 'New: StarkLLM for Android asks your documents from your phone, in your home network. It is in a closed test on Google Play.', link: 'About the Android app' },
  },
  de: {
    meta: { title: 'StarkLLM für Android (Vorschau) | StarkLLM', description: 'Mit StarkLLM für Android fragen Sie Ihre Dokumente vom Handy aus, während sie auf Ihrem Windows-PC bleiben: nur im Heimnetz, verschlüsselt, ohne Konto, ohne Cloud. Im geschlossenen Test bei Google Play.' },
    hero: { eyebrow: 'Android · Vorschau', h1: 'StarkLLM für Android', lede: 'Fragen Sie Ihre Dokumente vom Handy aus. Das Handy fragt, Ihr PC antwortet: Dokumente, Suchindex und KI-Modell bleiben auf Ihrem Windows-PC.' },
    status: {
      h2: 'Stand: im geschlossenen Test, noch nicht veröffentlicht',
      text: 'Die App ist im geschlossenen Test bei Google Play, bevor alle sie herunterladen können.',
      howH: 'So machen Sie mit',
      how: [
        'Schreiben Sie an info@starkllm.com und nennen Sie die E-Mail-Adresse des Google-Kontos auf Ihrem Handy.',
        'Sie bekommen den Link zum Test bei Google Play.',
        'Auf Ihrem PC brauchen Sie StarkLLM 2.4.0 oder neuer. Die Version kommt bald; die Download-Seite hat immer die aktuelle Version.',
      ],
      mail: 'An info@starkllm.com schreiben',
      download: 'Download-Seite',
    },
    how: {
      h2: 'So funktioniert es',
      items: [
        { t: 'Am PC einschalten', v: 'Öffnen Sie in StarkLLM auf Ihrem Windows-PC Einstellungen > Telefon und schalten Sie die Verbindung zum Handy ein. Ab Werk ist sie aus.' },
        { t: 'Mit einem QR-Code koppeln', v: 'Wählen Sie am PC „QR-Code anzeigen“ und scannen Sie ihn einmal mit der App. Sie können mehrere PCs koppeln, zum Beispiel zu Hause und im Büro.' },
        { t: 'Nur im Heimnetz', v: 'Das Handy erreicht den PC nur in Ihrem Heimnetz. Die Verbindung ist mit dem eigenen Zertifikat des PCs verschlüsselt, das sich das Handy merkt; so kann sich niemand anderes im Netz als Ihr PC ausgeben.' },
      ],
    },
    features: {
      h2: 'Was die App kann',
      items: [
        { t: 'Fragen zu Ihren Dokumenten', v: 'Fragen gehen an StarkLLM auf Ihrem PC; die Antwort läuft Wort für Wort ein, mit den Dokumenten, die sie genutzt hat.' },
        { t: 'Briefe und Dateien senden', v: 'Fotografieren Sie einen Brief, wählen Sie Fotos oder Dateien (PDF, EPUB, Word, PowerPoint, Text, Bilder) oder nutzen Sie „Teilen“ in anderen Apps. Der PC liest sie, auch den Text in Fotos; Fotos werden nach dem Senden auf dem Handy gelöscht.' },
        { t: 'Diktieren', v: 'Halten Sie die Mikrofontaste gedrückt. Das Sprachmodell auf Ihrem PC macht Text daraus, kein Online-Dienst.' },
        { t: 'Fristen', v: 'Überfällig, heute, diese Woche und später, wie am PC. Erinnerungen (wahlweise) fragen den PC, während das Handy zu Hause ist, und ein Widget auf dem Startbildschirm zeigt die nächsten drei.' },
        { t: 'Drei Stufen je Handy', v: 'Am PC legen Sie fest, was jedes Handy darf: nur fragen; auch Dokumente senden; auch sofort sichern und StarkLLM vollständig offline schalten, jeweils mit Ihrem Fingerabdruck auf dem Handy bestätigt.' },
        { t: 'App-Sperre, Themes, Sprachen', v: 'App-Sperre mit Fingerabdruck, 13 Themes und die sechs Sprachen von StarkLLM: Englisch, Deutsch, Spanisch, Französisch, Italienisch und Türkisch.' },
      ],
    },
    privacy: {
      h2: 'Ihre Dokumente bleiben auf Ihrem PC',
      items: [
        'Dokumente, Suchindex und KI-Modell bleiben auf dem PC. Das Handy behält nur, was es anzeigt (die Chatliste, den offenen Chat, die nächsten Fristen), und seine Einstellungen.',
        'Kein Konto, keine Cloud, kein Push-Dienst, keine Analyse.',
        'Eine Frage vom Handy geht nie ins Internet: keine Websuche und keine Cloud-Modelle.',
      ],
    },
    req: {
      h2: 'Voraussetzungen',
      items: [
        ['Handy', 'Android 10 oder neuer'],
        ['PC', 'StarkLLM 2.4.0 oder neuer unter Windows 10 oder 11'],
        ['Netz', 'Handy und PC im selben Heimnetz'],
      ],
      not: 'Noch nicht in dieser ersten Version: Zugriff von unterwegs, eine App fürs iPhone und die Anmeldung vom Handy aus, wenn StarkLLM auf dem PC mehrere Konten hat.',
    },
    cta: { h2: 'Früh ausprobieren', text: 'Schreiben Sie uns, um beim geschlossenen Test mitzumachen. Bis dahin können Sie StarkLLM für Windows kostenlos herunterladen.', mail: 'Beim Test mitmachen', download: 'StarkLLM für Windows', product: 'Zurück zum Produkt' },
    productLink: { text: 'Neu: Mit StarkLLM für Android fragen Sie Ihre Dokumente vom Handy aus, in Ihrem Heimnetz. Die App ist im geschlossenen Test bei Google Play.', link: 'Zur Android-App' },
  },
} as const;

// Other languages: src/i18n/langs/<lang>/android.ts (default export, same shape as the English object).
export const android = { ...androidBase, ...byLang(import.meta.glob('./langs/*/android.ts', { eager: true, import: 'default' }), androidBase.en, 'android') } as unknown as Record<Lang, typeof androidBase.en>;
