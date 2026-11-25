import { byLang, type Lang } from './ui';
// Copy for the home page, EN and DE. German is a first draft and needs a native review before launch.
import { RELEASE, V, SIZE_MB } from '../data/release';
export const SETUP_URL = RELEASE.setup.url;
export const PORTABLE_URL = RELEASE.portable?.url ?? null;
export const SETUP_SHA = RELEASE.setup.sha256;
export const PORTABLE_SHA = RELEASE.portable?.sha256 ?? null;

const homeBase = {
  en: {
    meta: {
      title: 'StarkLLM | Private, local-first AI for your documents (Windows)',
      description:
        'StarkLLM is a free, open-source, local-first AI assistant for Windows. Chat privately with your documents and Knowledge Base on your own machine.',
    },
    nav: { getBtn: `Get v${V}` },
    hero: {
      eyebrow: 'Local-first AI for Windows · Research Beta',
      h1: ['Your documents stay', 'on your PC.', 'The work gets done.'],
      lede: 'StarkLLM reads your letters and documents on your Windows PC, finds the deadlines and amounts in them and answers with the page each answer comes from. Now it also does tasks for you, on websites and in a project folder, and asks before every step that matters. The AI models run on your PC through Ollama.',
      cta1: 'Download for Windows',
      cta2: 'See how it works',
      meta: `v${V} · ${SIZE_MB} MB · Apache 2.0 · free`,
    },
    pipeline: [
      { k: 'Files', v: 'PDF, Word, PowerPoint, EPUB, scans, photos, recordings' },
      { k: 'Chunks', v: 'Split by meaning, not length' },
      { k: 'Hybrid search', v: 'BM25 + vector embeddings' },
      { k: 'Local model', v: 'Ollama on your GPU' },
      { k: 'Cited answer', v: 'Jump to the source page' },
    ],
    shot: { alt: 'StarkLLM chat: a question about a tax letter is answered with the amount, the due date and the source document and page', caption: 'The StarkLLM desktop app answering a question about a letter. Demo documents with invented names and numbers.' },
    letters: {
      tag: 'Letters',
      h2: 'Your letters and documents at a glance',
      lede: 'Add a PDF, a scan or a photo from your phone. StarkLLM reads it on your PC, groups the letters of one sender into a case and puts every deadline on the start page. Each value links to the page and line it was read from.',
      dashCaption: 'Start page: deadlines and payment dates found in your letters, with the amount and the page.',
      inboxCaption: 'Inbox: one case per sender, the nearest deadline first, a mark on a possible scam.',
      note: 'Letters are read in English, German, French, Spanish, Italian and Turkish, with their deadlines and amounts, and the interface speaks the same six languages. Text recognition (OCR) for photos and scans reads English and German out of the box; more languages can be added in Settings. Letters in other languages are filed as ordinary documents, without deadlines and amounts. Demo documents with invented names and numbers.',
    },
    features: {
      h2: "Built for people who can't upload their documents.",
      items: [
        { tag: 'Inbox', title: 'An inbox with a case per sender', text: 'For every letter: its kind (bill, reminder, tax notice, contract, fine and more), sender, date, reference numbers, amounts, bank accounts and deadlines, each found word for word on a page. Mark a letter done when you have dealt with it. Nothing is renamed or moved on your disk.', wide: true },
        { tag: 'Deadlines', title: 'Deadlines on the start page', text: 'Deadlines, appointments and payment dates from your letters, with the amount and the page. "Add to calendar" saves them as a calendar file.' },
        { tag: 'Scans', title: 'Photos and scans are read on your PC', text: 'A photo or scanned page is read as English or German text, turned upright if needed, and can be searched and cited like any other document.' },
        { tag: 'Safety', title: 'Warnings for fake letters', text: 'A red box appears if a letter asks for payment to a foreign account, by voucher or through a link, contains text addressed to AI assistants, or a sender suddenly names a different account.' },
        { tag: 'Knowledge', title: 'Workspaces and a global knowledge base', text: 'Map Windows folders, keep projects isolated, and query the shared knowledge base from any chat.' },
        { tag: 'Retrieval', title: 'Hybrid RAG with a cross-encoder re-ranker', text: 'Keyword and semantic search run together, then a TinyBERT cross-encoder re-ranks the passages that actually answer the question.', wide: true, art: 'bars' },
        { tag: 'Desktop', title: 'A real app window', text: 'Its own window with splash screen and tray menu. No browser tab.' },
        { tag: 'Themes', title: 'Thirteen themes, switched instantly', text: 'From Midnight Indigo and pure OLED black to Daylight Minimal, plus five pattern themes such as Doodle Chat and Starry Night.', wide: true, art: 'swatches' },
        { tag: 'Tools', title: 'Local tools with a confirmation gate', text: 'Read-only tools such as search_local_kb and fetch_cited_chunk. Every call needs your confirmation and a single-use token.' },
        { tag: 'Other apps', title: 'Use StarkLLM from other programs (off by default)', text: 'Editors such as VS Code and Cursor, MCP-capable AI assistants and your own scripts can search your documents and ask questions about them through an MCP server or an OpenAI-compatible API. Only on this PC, only with a key you create, and they cannot change or delete anything.', wide: true },
        { tag: 'Code', title: 'Local Python sandbox', text: 'Runs Python code blocks from the chat with code checks and time and memory limits. Available with the Docker Desktop engine (advanced); off in the built-in engine until StarkLLM has its own sandbox. A convenience limit, not a security boundary: only run code you trust.' },
      ],
    },
    compare: {
      h2: 'How StarkLLM compares',
      lede: 'An honest look at how StarkLLM fits into the local AI landscape next to other popular open solutions.',
      note: 'As of October 2026, based on each tool\'s public documentation. Features change quickly, so please check the current versions. StarkLLM\'s answers also come from a small local model: check the cited source for anything important.',
      cols: ['Tool', 'Strength and limits', 'Best for'],
      rows: [
        { kind: 'Inference GUI', name: 'LM Studio', text: 'Superb for downloading GGUFs from Hugging Face and tuning GPU layer offloading. Its "Chat with Documents" attaches files to a conversation (short files are pasted in whole, long ones go through retrieval); per its documentation and third-party guides it has no persistent workspaces or shared knowledge bases.', best: 'Trying out models, with occasional documents attached to a chat.' },
        { kind: 'Basic RAG app', name: 'AnythingLLM', text: 'A popular app for chatting with your documents in workspaces. Retrieval options such as reranking depend on the version and the vector database you choose, so compare it on your own documents.', best: 'Document chats where you want a ready-made workspace app.' },
        { kind: 'Minimalist chat', name: 'Jan.ai', text: 'A lightweight, open-source ChatGPT-style app that keeps data on the device. Document retrieval exists as an optional setting that its documentation calls experimental; the focus is chat rather than document workflows.', best: 'Simple local chat with a clean interface.' },
        { kind: 'This project', name: `StarkLLM v${V}`, text: 'Native Windows desktop app with an inbox for letters (deadlines, amounts, cases per sender, warnings for fake letters), web tasks and help with code that ask before every important step, hybrid RAG with TinyBERT cross-encoder reranking, an optional local MCP server and OpenAI-compatible API (off by default) and local-by-default privacy.', best: 'Anyone who wants to keep their letters and documents private and get answers with sources they can check, from households to developers and researchers.', us: true },
      ],
    },
    setup: {
      h2: 'Set up in four steps',
      intro: 'StarkLLM brings its own engine: no Docker Desktop, no WSL2. The first start downloads the AI models (about 5 GB) and, if you let it, Ollama; later starts take seconds.',
      steps: [
        { title: 'Install StarkLLM', text: `Run StarkLLM-v${V}-Setup.exe and click the shortcut. The installer is signed by "Open Source Developer Christian Stark" and contains the engine.` },
        { title: 'Let it set up Ollama', text: 'If Ollama is missing, choose "Install Ollama for me": StarkLLM installs the official, signed version. No terminal needed.' },
        { title: 'Wait for the models', text: 'StarkLLM downloads the AI models it needs, shows the progress and then opens in its own window.' },
        { title: 'If something is missing', text: 'The window says what is missing and how to fix it, with a Retry button. The Help page has a checklist.' },
      ],
      notesTitle: 'Important notes',
      notes: [
        { k: 'First launch', v: 'Downloading the AI models (about 5 GB) takes a while on a slow connection. The first start after an install or update can also take a few minutes while the engine starts.' },
        { k: 'Windows SmartScreen', v: 'The installer is signed by "Open Source Developer Christian Stark". If Windows still warns, check that publisher name (right-click the installer, Properties, Digital Signatures) and compare the SHA-256 checksum on the download page. Continue (More info, then Run anyway) only if both match, and do not turn off SmartScreen or Smart App Control.' },
        { k: 'Hardware matters', v: 'Speed and answer quality depend heavily on a capable GPU (8 GB+ VRAM recommended).' },
      ],
    },
    privacy: {
      h2: 'Privacy you can check',
      lede: 'StarkLLM is built so that your documents never need a cloud. What goes online is your choice, and you can see it.',
      items: [
        { title: 'Documents and model stay on your PC', text: 'Your documents, chats and search index are stored on your own disk, and the language models run on your own CPU or GPU through Ollama. The phone app talks to your PC; away from home, only if you allow it, through the StarkLLM relay, which passes on encrypted data only and cannot read it.' },
        { title: 'No telemetry', text: 'The Windows app has no telemetry and no analytics SDK. This website uses no analytics and sets no cookies either; see the privacy policy.' },
        { title: 'Every connection listed', text: 'Web search, web tasks, cloud model providers, imports from the web (web pages, YouTube, GitHub), market prices, the phone away from home (relay) and the update check run only when you turn them on or start them. Settings › Privacy & network lists every connection StarkLLM makes; commands you allow in Terminal and tool servers you add run as your own programs and are not listed. The chat shows when a question leaves your PC.' },
        { title: 'Fully offline switch', text: 'One switch takes StarkLLM fully offline: every online feature is refused and the link to your phone is closed. Your documents, the inbox and the local models keep working.' },
      ],
    },
    download: {
      h2: 'Install it today.',
      lede: 'Free and open source under Apache 2.0.',
      reqTitle: 'Before you download',
      req: [
        ['OS', 'Windows 10/11 (64-bit), no Docker or WSL2 needed'],
        ['Ollama', 'for the AI models; StarkLLM can install it for you'],
        ['Disk', 'at least 15 GB free for the app, the engine and the models'],
        ['Hardware', '8 GB RAM minimum, 16 GB recommended, NVIDIA GPU with 8 GB+ VRAM recommended'],
      ],
      installer: `Installer (.exe) · ${SIZE_MB} MB`,
      portable: 'Portable',
      all: 'All downloads',
      shaTitle: 'SHA-256',
      verify: 'Verify with PowerShell:',
    },
  },
  de: {
    meta: {
      title: 'StarkLLM | Private, lokale KI für Ihre Dokumente (Windows)',
      description:
        'StarkLLM ist ein kostenloser, quelloffener, lokaler KI-Assistent für Windows. Chatten Sie privat mit Ihren Dokumenten und Ihrer Wissensdatenbank auf Ihrem eigenen Rechner.',
    },
    nav: { getBtn: `v${V} laden` },
    hero: {
      eyebrow: 'Lokale KI für Windows · Research Beta',
      h1: ['Ihre Dokumente bleiben', 'auf Ihrem PC.', 'Die Arbeit wird erledigt.'],
      lede: 'StarkLLM liest Ihre Briefe und Dokumente auf Ihrem Windows-PC, findet die Fristen und Beträge darin und antwortet mit der Seite, aus der jede Antwort stammt. Jetzt erledigt es auch Aufgaben für Sie, auf Websites und in einem Projektordner, und fragt vor jedem wichtigen Schritt nach. Die KI-Modelle laufen über Ollama auf Ihrem PC.',
      cta1: 'Für Windows herunterladen',
      cta2: 'So funktioniert es',
      meta: `v${V} · ${SIZE_MB} MB · Apache 2.0 · kostenlos`,
    },
    pipeline: [
      { k: 'Dateien', v: 'PDF, Word, PowerPoint, EPUB, Scans, Fotos, Aufnahmen' },
      { k: 'Chunks', v: 'Nach Bedeutung geteilt, nicht nach Länge' },
      { k: 'Hybridsuche', v: 'BM25 + Vektor-Embeddings' },
      { k: 'Lokales Modell', v: 'Ollama auf Ihrer GPU' },
      { k: 'Belegte Antwort', v: 'Direkt zur Quellseite' },
    ],
    shot: { alt: 'StarkLLM-Chat: Die Frage zu einem Steuerbescheid wird mit Betrag, Fälligkeit sowie Quelldokument und Seite beantwortet', caption: 'Die StarkLLM-Desktop-App beantwortet eine Frage zu einem Brief. Demo-Dokumente mit erfundenen Namen und Zahlen.' },
    letters: {
      tag: 'Briefe',
      h2: 'Ihre Briefe und Dokumente im Überblick',
      lede: 'Fügen Sie ein PDF, einen Scan oder ein Foto vom Handy hinzu. StarkLLM liest es auf Ihrem PC, fasst die Briefe eines Absenders zu einem Vorgang zusammen und zeigt jede Frist auf der Startseite. Jeder Wert verweist auf die Seite und Zeile, aus der er gelesen wurde.',
      dashCaption: 'Startseite: Fristen und Zahlungstermine aus Ihren Briefen, mit Betrag und Seite.',
      inboxCaption: 'Posteingang: ein Vorgang je Absender, die nächste Frist zuerst, ein Hinweis bei möglichem Betrug.',
      note: 'Briefe werden auf Englisch, Deutsch, Französisch, Spanisch, Italienisch und Türkisch gelesen, mit ihren Fristen und Beträgen, und die Oberfläche spricht dieselben sechs Sprachen. Die Texterkennung (OCR) für Fotos und Scans liest ab Werk Englisch und Deutsch; weitere Sprachen lassen sich in den Einstellungen hinzufügen. Briefe in anderen Sprachen werden als normale Dokumente abgelegt, ohne Fristen und Beträge. Demo-Dokumente mit erfundenen Namen und Zahlen.',
    },
    features: {
      h2: 'Für alle, die ihre Dokumente nicht hochladen können.',
      items: [
        { tag: 'Posteingang', title: 'Ein Posteingang mit einem Vorgang je Absender', text: 'Zu jedem Brief: die Art (Rechnung, Mahnung, Bescheid, Vertrag, Bußgeld und mehr), Absender, Datum, Aktenzeichen und Nummern, Beträge, Bankkonten und Fristen, jeweils wörtlich auf einer Seite gefunden. Haken Sie einen Brief ab, wenn er erledigt ist. Auf Ihrer Festplatte wird nichts umbenannt oder verschoben.', wide: true },
        { tag: 'Fristen', title: 'Fristen auf der Startseite', text: 'Fristen, Termine und Zahlungsdaten aus Ihren Briefen, mit Betrag und Seite. „Zum Kalender“ speichert sie als Kalenderdatei.' },
        { tag: 'Scans', title: 'Fotos und Scans werden auf Ihrem PC gelesen', text: 'Ein Foto oder eine gescannte Seite wird als englischer oder deutscher Text gelesen, bei Bedarf aufgerichtet und lässt sich wie jedes andere Dokument durchsuchen und zitieren.' },
        { tag: 'Sicherheit', title: 'Warnungen vor gefälschten Briefen', text: 'Ein rotes Feld erscheint, wenn ein Brief Zahlung auf ein ausländisches Konto, per Gutschein oder über einen Link verlangt, Text an KI-Assistenten enthält oder ein Absender plötzlich ein anderes Konto nennt.' },
        { tag: 'Wissen', title: 'Workspaces und globale Wissensdatenbank', text: 'Windows-Ordner einbinden, Projekte getrennt halten und die gemeinsame Wissensdatenbank aus jedem Chat abfragen.' },
        { tag: 'Suche', title: 'Hybrides RAG mit Cross-Encoder-Reranker', text: 'Stichwort- und semantische Suche laufen zusammen; ein TinyBERT-Cross-Encoder sortiert die Treffer neu und stellt die Passagen nach oben, die die Frage wirklich beantworten.', wide: true, art: 'bars' },
        { tag: 'Desktop', title: 'Ein echtes App-Fenster', text: 'Eigenes Fenster mit Startbildschirm und Tray-Menü. Kein Browser-Tab.' },
        { tag: 'Themes', title: 'Dreizehn Themes, sofort umschaltbar', text: 'Von Midnight Indigo und reinem OLED-Schwarz bis Daylight Minimal, dazu fünf Muster-Themes wie Doodle Chat und Starry Night.', wide: true, art: 'swatches' },
        { tag: 'Werkzeuge', title: 'Lokale Tools mit Bestätigung', text: 'Nur lesende Tools wie search_local_kb und fetch_cited_chunk. Jeder Aufruf braucht Ihre Bestätigung und ein Einmal-Token.' },
        { tag: 'Andere Programme', title: 'StarkLLM aus anderen Programmen nutzen (standardmäßig aus)', text: 'Editoren wie VS Code und Cursor, MCP-fähige KI-Assistenten und eigene Skripte können über einen MCP-Server oder eine OpenAI-kompatible API Ihre Dokumente durchsuchen und Fragen dazu stellen. Nur auf diesem PC, nur mit einem Schlüssel, den Sie erstellen, und sie können nichts ändern oder löschen.', wide: true },
        { tag: 'Code', title: 'Lokale Python-Sandbox', text: 'Führt Python-Codeblöcke aus dem Chat aus, mit Code-Prüfung sowie Zeit- und Speicherlimit. Verfügbar mit der Docker-Desktop-Engine (für Fortgeschrittene); in der eingebauten Engine aus, bis StarkLLM eine eigene Sandbox hat. Eine Komfortgrenze, keine Sicherheitsgrenze: Führen Sie nur Code aus, dem Sie vertrauen.' },
      ],
    },
    compare: {
      h2: 'StarkLLM im Vergleich',
      lede: 'Ein ehrlicher Blick darauf, wo StarkLLM neben anderen beliebten offenen Lösungen steht.',
      note: 'Stand Oktober 2026, nach der öffentlichen Dokumentation der jeweiligen Tools. Funktionen ändern sich schnell, prüfen Sie bitte die aktuellen Versionen. Auch die Antworten von StarkLLM stammen von einem kleinen lokalen Modell: Prüfen Sie bei Wichtigem die genannte Quelle.',
      cols: ['Tool', 'Stärken und Grenzen', 'Am besten für'],
      rows: [
        { kind: 'Inferenz-GUI', name: 'LM Studio', text: 'Hervorragend zum Laden von GGUFs von Hugging Face und zum Feinjustieren der GPU-Auslagerung. „Chat with Documents“ hängt Dateien an eine Unterhaltung an (kurze Dateien werden ganz eingefügt, lange laufen über Retrieval); laut Dokumentation und Drittanleitungen gibt es keine dauerhaften Workspaces oder gemeinsamen Wissensdatenbanken.', best: 'Modelle ausprobieren, gelegentlich mit Dokumenten im Chat.' },
        { kind: 'Einfache RAG-App', name: 'AnythingLLM', text: 'Eine beliebte App, um in Workspaces mit den eigenen Dokumenten zu chatten. Retrieval-Optionen wie Reranking hängen von Version und gewählter Vektordatenbank ab; vergleichen Sie sie an Ihren eigenen Dokumenten.', best: 'Dokument-Chats mit einer fertigen Workspace-App.' },
        { kind: 'Minimaler Chat', name: 'Jan.ai', text: 'Eine leichte Open-Source-App im ChatGPT-Stil, die Daten auf dem Gerät hält. Dokument-Retrieval gibt es als optionale Einstellung, die ihre Dokumentation als experimentell bezeichnet; der Schwerpunkt liegt auf Chat statt auf Dokument-Workflows.', best: 'Einfacher lokaler Chat mit klarer Oberfläche.' },
        { kind: 'Dieses Projekt', name: `StarkLLM v${V}`, text: 'Native Windows-Desktop-App mit Posteingang für Briefe (Fristen, Beträge, Vorgänge je Absender, Warnungen vor gefälschten Briefen), Web-Aufgaben und Hilfe beim Code, die vor jedem wichtigen Schritt nachfragen, Hybrid-RAG mit TinyBERT-Cross-Encoder-Reranking, optionalem lokalem MCP-Server und OpenAI-kompatibler API (standardmäßig aus) und standardmäßig lokalem Datenschutz.', best: 'Alle, die ihre Briefe und Dokumente privat halten und Antworten mit nachprüfbaren Quellen wollen, von Haushalten bis zu Entwicklern und Forschenden.', us: true },
      ],
    },
    setup: {
      h2: 'In vier Schritten eingerichtet',
      intro: 'StarkLLM bringt seine eigene Engine mit: kein Docker Desktop, kein WSL2. Der erste Start lädt die KI-Modelle (etwa 5 GB) und, wenn Sie es erlauben, Ollama; spätere Starts dauern Sekunden.',
      steps: [
        { title: 'StarkLLM installieren', text: `StarkLLM-v${V}-Setup.exe ausführen und auf die Verknüpfung klicken. Der Installer ist von „Open Source Developer Christian Stark“ signiert und enthält die Engine.` },
        { title: 'Ollama einrichten lassen', text: 'Fehlt Ollama, wählen Sie „Ollama für mich installieren“: StarkLLM installiert die offizielle, signierte Version. Kein Terminal nötig.' },
        { title: 'Auf die Modelle warten', text: 'StarkLLM lädt die nötigen KI-Modelle, zeigt den Fortschritt und öffnet sich dann im eigenen Fenster.' },
        { title: 'Wenn etwas fehlt', text: 'Das Fenster sagt, was fehlt und wie Sie es beheben, mit der Schaltfläche „Erneut versuchen“. Die Hilfe-Seite hat eine Checkliste.' },
      ],
      notesTitle: 'Wichtige Hinweise',
      notes: [
        { k: 'Erster Start', v: 'Das Laden der KI-Modelle (etwa 5 GB) dauert bei langsamer Verbindung eine Weile. Der erste Start nach einer Installation oder einem Update kann außerdem einige Minuten dauern, bis die Engine läuft.' },
        { k: 'Windows SmartScreen', v: 'Der Installer ist von „Open Source Developer Christian Stark“ signiert. Warnt Windows trotzdem, prüfen Sie diesen Herausgebernamen (Rechtsklick auf den Installer, Eigenschaften, Digitale Signaturen) und vergleichen Sie die SHA-256-Prüfsumme auf der Download-Seite. Fahren Sie nur fort („Weitere Informationen“, dann „Trotzdem ausführen“), wenn beides stimmt, und schalten Sie SmartScreen und Smart App Control nicht ab.' },
        { k: 'Hardware zählt', v: 'Geschwindigkeit und Antwortqualität hängen stark von einer leistungsfähigen GPU ab (8 GB+ VRAM empfohlen).' },
      ],
    },
    privacy: {
      h2: 'Datenschutz, den Sie prüfen können',
      lede: 'StarkLLM ist so gebaut, dass Ihre Dokumente keine Cloud brauchen. Was online geht, entscheiden Sie, und Sie können es sehen.',
      items: [
        { title: 'Dokumente und Modell bleiben auf Ihrem PC', text: 'Ihre Dokumente, Chats und der Suchindex liegen auf Ihrer eigenen Festplatte, und die Sprachmodelle laufen über Ollama auf Ihrer eigenen CPU oder GPU. Die Handy-App spricht mit Ihrem PC; unterwegs nur, wenn Sie es erlauben, über das StarkLLM-Relay, das nur verschlüsselte Daten weiterleitet und sie nicht lesen kann.' },
        { title: 'Keine Telemetrie', text: 'Die Windows-App enthält weder Telemetrie noch ein Analyse-SDK. Auch diese Website nutzt keine Webanalyse und setzt keine Cookies; siehe Datenschutzerklärung.' },
        { title: 'Jede Verbindung aufgelistet', text: 'Websuche, Web-Aufgaben, Cloud-Modellanbieter, Importe aus dem Web (Webseiten, YouTube, GitHub), Marktpreise, das Handy unterwegs (Relay) und die Update-Prüfung laufen nur, wenn Sie sie einschalten oder starten. Einstellungen › Datenschutz & Netzwerk listet jede Verbindung auf, die StarkLLM herstellt; Befehle, die Sie im Terminal erlauben, und Werkzeug-Server, die Sie hinzufügen, laufen als Ihre eigenen Programme und stehen nicht in der Liste. Der Chat zeigt an, wenn eine Frage Ihren PC verlässt.' },
        { title: 'Schalter „Vollständig offline“', text: 'Ein Schalter nimmt StarkLLM vollständig vom Netz: Jede Online-Funktion wird abgelehnt und die Verbindung zu Ihrem Handy geschlossen. Ihre Dokumente, der Posteingang und die lokalen Modelle arbeiten weiter.' },
      ],
    },
    download: {
      h2: 'Jetzt installieren.',
      lede: 'Kostenlos und quelloffen unter Apache 2.0.',
      reqTitle: 'Vor dem Download',
      req: [
        ['Betriebssystem', 'Windows 10/11 (64 Bit), kein Docker oder WSL2 nötig'],
        ['Ollama', 'für die KI-Modelle; StarkLLM kann es für Sie installieren'],
        ['Speicherplatz', 'mindestens 15 GB frei für App, Engine und Modelle'],
        ['Hardware', 'mind. 8 GB RAM, empfohlen 16 GB, NVIDIA-GPU mit 8 GB+ VRAM empfohlen'],
      ],
      installer: `Installer (.exe) · ${SIZE_MB} MB`,
      portable: 'Portable',
      all: 'Alle Downloads',
      shaTitle: 'SHA-256',
      verify: 'Prüfen mit PowerShell:',
    },
  },
} as const;

// Other languages: src/i18n/langs/<lang>/home.ts (default export, same shape as the English object).
export const home = { ...homeBase, ...byLang(import.meta.glob('./langs/*/home.ts', { eager: true, import: 'default' }), homeBase.en, 'home') } as unknown as Record<Lang, typeof homeBase.en>;
