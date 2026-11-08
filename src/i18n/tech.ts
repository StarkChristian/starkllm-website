// Feature pages (/tech-*), EN and DE. One template renders them all (src/components/TechPage.astro).
// Keep every claim true for the current release; German needs a native review before larger changes.
import type { Lang } from './ui';

export type Shot = 'chat' | 'kb' | 'settings';
export type Section = { h: string; p?: string; list?: string[] };
export type Tech = { title: string; eyebrow: string; h1: string; lede: string; shot?: Shot; shotAlt?: string; sections: Section[] };

export const techLabels = {
  en: { what: 'What it is', why: 'Why it matters', how: 'How StarkLLM does it', example: 'Example', limits: 'Good to know', more: 'More features', cta: 'Download StarkLLM', manual: 'Read the manual' },
  de: { what: 'Was es ist', why: 'Warum es wichtig ist', how: 'Wie StarkLLM es umsetzt', example: 'Beispiel', limits: 'Gut zu wissen', more: 'Weitere Funktionen', cta: 'StarkLLM herunterladen', manual: 'Zum Handbuch' },
} as const;

export const techOrder = [
  'tech-rag', 'tech-hybrid-search', 'tech-semantic-chunking', 'tech-knowledge-base', 'tech-workspaces', 'tech-multimodal',
  'tech-local-models', 'tech-privacy', 'tech-local-tools', 'tech-voice', 'tech-themes',
] as const;
export type TechSlug = (typeof techOrder)[number];

type L = typeof techLabels.en;
const s = (l: L, what: string, why: string, how: string | Section, example: string, limits?: string): Section[] => [
  { h: l.what, p: what },
  { h: l.why, p: why },
  typeof how === 'string' ? { h: l.how, p: how } : { h: l.how, ...how },
  { h: l.example, p: example },
  ...(limits ? [{ h: l.limits, p: limits }] : []),
];

const en = techLabels.en;
const de = techLabels.de;

export const tech: Record<Lang, Record<TechSlug, Tech>> = {
  en: {
    'tech-rag': {
      title: 'Answers from your documents (RAG) | StarkLLM', eyebrow: 'Retrieval-augmented generation',
      h1: 'Answers from your documents', lede: 'StarkLLM reads the relevant passages of your files before it answers, and tells you where they are.',
      shot: 'chat', shotAlt: 'StarkLLM answering a question from a local PDF with cited sources',
      sections: s(en,
        'Retrieval-augmented generation (RAG) means the model first gets the passages of your documents that match your question, and answers from them.',
        'A language model knows nothing about your contracts, reports or notes. Without your passages it guesses, and a guess can sound convincing.',
        'Your question is searched in the workspace (and, if switched on, in your Knowledge Base). The best passages are re-ranked and given to the model together with the question. Each answer lists its sources with file name and page or section.',
        'You ask "What is the notice period in the Smith contract?" StarkLLM finds the clause in the PDF, answers from it and shows "Smith contract.pdf, page 4".',
        'The model can still misread a passage. For important decisions, open the cited page and check it.'),
    },
    'tech-hybrid-search': {
      title: 'Hybrid search | StarkLLM', eyebrow: 'Search',
      h1: 'Hybrid search', lede: 'Search by meaning and by exact words at the same time.',
      sections: s(en,
        'Hybrid search combines vector search, which finds passages with the same meaning, with keyword search (BM25), which finds exact words, names and numbers.',
        'Some questions need meaning ("How do we handle a loss?"), others need the exact term ("invoice 8492-B"). Each method alone misses one of the two.',
        'StarkLLM runs both searches on your local index, merges the results and re-ranks them with a small local model (TinyBERT cross-encoder) before the language model sees them.',
        'A search for "NASA budget" finds a passage about "funding for the National Aeronautics and Space Administration" and also the passage that names "NASA" exactly.'),
    },
    'tech-semantic-chunking': {
      title: 'Semantic chunking | StarkLLM', eyebrow: 'Indexing',
      h1: 'Semantic chunking', lede: 'Documents are split where the meaning changes, not after a fixed number of characters.',
      sections: s(en,
        'Before a document is searchable, it is split into passages ("chunks"). Each passage is stored with its file, page or section.',
        'A passage cut in the middle of a sentence or a clause loses its meaning, and the search then returns half answers.',
        'StarkLLM splits text into sentences and starts a new passage where the topic changes, measured with the embedding model. If that is not possible, it splits at paragraphs and sentences with a small overlap. Tables (CSV, Excel, Word tables) are kept row by row with their column names.',
        'A contract is indexed clause by clause. A question about "liability" retrieves the whole liability clause, not two halves.',
        'Long files without punctuation, such as some logs, can still become large passages in which single values are harder to find.'),
    },
    'tech-knowledge-base': {
      title: 'Knowledge Base | StarkLLM', eyebrow: 'Library',
      h1: 'Knowledge Base', lede: 'A folder on your PC that every chat can search.',
      shot: 'kb', shotAlt: 'The StarkLLM Knowledge Base with an indexed folder',
      sections: s(en,
        'The Knowledge Base is a folder on your PC (by default "StarkLLM Knowledge Base" in your Documents) whose files StarkLLM indexes and keeps up to date.',
        'Reference material such as procedures, manuals or notes is needed in many projects. Without a shared library you would upload the same files into every workspace.',
        'StarkLLM checks the registered folders every 30 seconds and indexes new and changed files; "Sync Now" does it immediately. In the chat, the Knowledge Base switch decides whether these files are searched too. Sources from it are marked "Personal KB".',
        'You keep your team handbook in the folder. In a workspace about a new project you can ask about the project files and the handbook in the same question.'),
    },
    'tech-workspaces': {
      title: 'Workspaces | StarkLLM', eyebrow: 'Organisation',
      h1: 'Workspaces', lede: 'One workspace per project, with its own documents and chats.',
      sections: s(en,
        'A workspace holds the documents and chats of one project. The Knowledge Base is shared across all workspaces.',
        'If all files are in one place, a question about one case can pick up passages from another one.',
        'Each workspace has its own index. A chat searches only the documents of its workspace, plus the Knowledge Base when you switch it on.',
        'You switch from "Tax return 2025" to "Website relaunch". Answers now come only from the website documents.'),
    },
    'tech-multimodal': {
      title: 'Supported files and images | StarkLLM', eyebrow: 'Files',
      h1: 'Files, scans and images', lede: '14 file types, including scanned PDFs and photos.',
      sections: s(en,
        'StarkLLM reads PDF, Word (DOCX), Excel (XLSX), CSV, Markdown, text, HTML, JSON, XML and log files, and images (PNG, JPG). You add them with the paperclip or by dropping them on the window.',
        'Real documents are often scans or photos, not text you can select. A plain text extractor finds nothing in them.',
        { p: 'Each type has its own reader:', list: [
          'PDF pages with text are read directly; scanned pages go through local OCR (Tesseract), and if that finds too little, through a local image model.',
          'Images are described and their text read by a local image model. The first image downloads that model once (llava, about 4.4 GB).',
          'Spreadsheets and tables keep their column names, so values stay attached to their meaning.',
        ] },
        'You add a photo of a parking sign. Later you ask "Which level is visitor parking on?" and get "Level P2, spaces 40 to 55" with the photo as source.',
        'Handwriting and small or blurry text are read less reliably. The image model reads printed text better than whiteboards.'),
    },
    'tech-local-models': {
      title: 'Local models with Ollama | StarkLLM', eyebrow: 'Models',
      h1: 'Local models with Ollama', lede: 'The language model runs on your PC, with your hardware.',
      sections: s(en,
        'Ollama is a free program that runs open language models such as Qwen, Llama or Mistral on your CPU or graphics card. StarkLLM uses it for chat, search and images.',
        'A local model needs no account and no subscription, keeps working without internet once it is downloaded, and your documents never go to a model provider.',
        'StarkLLM starts Ollama if it is installed, downloads the default models on the first start (about 5 GB) and lets you switch models in the Model Hub. Thinking models such as Qwen 3 work too.',
        'On a train without Wi-Fi you add a PDF and ask questions about it. Everything runs on the laptop.',
        'Answer quality and speed depend on the model and your hardware. A 7B model needs about 8 GB of RAM; larger models answer better but need more memory, ideally on a graphics card.'),
    },
    'tech-privacy': {
      title: 'Privacy | StarkLLM', eyebrow: 'Privacy',
      h1: 'What stays on your PC', lede: 'Documents, index, chats and models stay on your computer. A few optional features go online, and only when you use them.',
      sections: [
        { h: en.what, p: 'StarkLLM runs its database, search index and web interface on your PC (in Docker) and the language model in Ollama, also on your PC. It has no telemetry and no account on a server.' },
        { h: en.why, p: 'Contracts, patient files or research data should not be sent to a cloud service just to ask a question about them.' },
        { h: 'Optional online features', p: 'These connect to the internet only when you switch them on or start them. The chat says when a question leaves your PC.', list: [
          'Web search (switch in the chat): your question goes to DuckDuckGo.',
          'Cloud model providers (Settings, e.g. DeepSeek, OpenRouter, Groq): your question and the found passages go to that provider.',
          'YouTube and GitHub import: the app downloads the transcript or repository you entered.',
          'Market prices (widget, off by default): fetched from Yahoo Finance.',
          'Update check (asked once on the first start): asks GitHub for the newest version number, nothing else.',
        ] },
        { h: 'One-time downloads', p: 'The AI models (from Ollama), the re-ranker (on the first search), the speech model (on the first voice input) and the image model (on the first image) are downloaded once. No documents, questions or usage data are sent with them.' },
        { h: en.example, p: 'After the first start you can switch off Wi-Fi. Adding documents, searching and answering keep working.' },
      ],
    },
    'tech-local-tools': {
      title: 'Local tools with approval | StarkLLM', eyebrow: 'Tools',
      h1: 'Local tools, with your approval', lede: 'The model can ask to look something up. Nothing runs until you confirm it.',
      sections: s(en,
        'StarkLLM has a small built-in tool host (MCP). The model can request three read-only tools: list the files of the workspace, search the Knowledge Base, and fetch the exact text of a cited passage.',
        'With tools the model can check facts instead of guessing. Without control, tools could do things you did not want.',
        { p: 'Every tool call stops at a card in the chat:', list: [
          'The card shows the tool and its arguments; you can edit them, run the call or cancel it.',
          'The tools only read. There is no shell, no file writing and no internet access.',
          'The server accepts a tool call only with a one-time token from that card.',
        ] },
        'The model is unsure which version of a document is the newest and asks to list the workspace files. You see the request, run it, and the answer uses the real file list.'),
    },
    'tech-voice': {
      title: 'Voice input and output | StarkLLM', eyebrow: 'Voice',
      h1: 'Voice input and output', lede: 'Ask by speaking and listen to the answer, processed on your PC.',
      shot: 'settings', shotAlt: 'StarkLLM settings',
      sections: s(en,
        'Speech to text turns your question into text; text to speech reads the answer aloud.',
        'Speaking is faster than typing for long questions, and listening helps when your hands or eyes are busy.',
        'StarkLLM uses Whisper for speech recognition and Piper voices for English and German, both running locally. Audio is not sent to any service.',
        'While reading a paper document you click the microphone, ask your question and listen to the answer.',
        'The speech recognition model is downloaded on the first voice input.'),
    },
    'tech-themes': {
      title: 'Themes | StarkLLM', eyebrow: 'Appearance',
      h1: 'Themes', lede: 'Eight colour themes, from pure black for OLED screens to a light theme.',
      sections: [
        { h: en.what, p: 'StarkLLM has eight themes: Midnight Indigo (default), OLED Pitch Black, Liquid Glass, Cyberpunk Rose, Matrix Emerald, Sunset Amber, Arctic Frost and Daylight Minimal.' },
        { h: en.why, p: 'Long sessions are easier on the eyes when contrast and brightness fit your screen and your room.' },
        { h: en.how, p: 'Change the theme with the palette button at the bottom of the sidebar or in Settings, Appearance. The choice is saved and applied immediately.' },
      ],
    },
  },
  de: {
    'tech-rag': {
      title: 'Antworten aus Ihren Dokumenten (RAG) | StarkLLM', eyebrow: 'Retrieval-Augmented Generation',
      h1: 'Antworten aus Ihren Dokumenten', lede: 'StarkLLM liest vor der Antwort die passenden Stellen Ihrer Dateien und sagt Ihnen, wo sie stehen.',
      shot: 'chat', shotAlt: 'StarkLLM beantwortet eine Frage aus einem lokalen PDF mit Quellenangabe',
      sections: s(de,
        'Retrieval-Augmented Generation (RAG) bedeutet: Das Modell erhält zuerst die Stellen Ihrer Dokumente, die zur Frage passen, und antwortet daraus.',
        'Ein Sprachmodell kennt Ihre Verträge, Berichte und Notizen nicht. Ohne Ihre Textstellen rät es, und auch eine geratene Antwort kann überzeugend klingen.',
        'Ihre Frage wird im Workspace gesucht (und, wenn eingeschaltet, in Ihrer Knowledge Base). Die besten Stellen werden neu gewichtet und zusammen mit der Frage an das Modell gegeben. Jede Antwort nennt ihre Quellen mit Dateiname und Seite oder Abschnitt.',
        'Sie fragen: „Wie lang ist die Kündigungsfrist im Vertrag Schmidt?“ StarkLLM findet die Klausel im PDF, antwortet daraus und zeigt „Vertrag Schmidt.pdf, Seite 4“.',
        'Das Modell kann eine Stelle trotzdem falsch lesen. Prüfen Sie bei wichtigen Entscheidungen die genannte Seite.'),
    },
    'tech-hybrid-search': {
      title: 'Hybride Suche | StarkLLM', eyebrow: 'Suche',
      h1: 'Hybride Suche', lede: 'Gleichzeitig nach Bedeutung und nach genauen Wörtern suchen.',
      sections: s(de,
        'Die hybride Suche verbindet die Vektorsuche, die Stellen mit gleicher Bedeutung findet, mit der Stichwortsuche (BM25), die genaue Wörter, Namen und Nummern findet.',
        'Manche Fragen brauchen die Bedeutung („Wie gehen wir mit einem Verlust um?“), andere den genauen Begriff („Rechnung 8492-B“). Jede Methode allein verfehlt eine der beiden.',
        'StarkLLM führt beide Suchen in Ihrem lokalen Index aus, führt die Ergebnisse zusammen und ordnet sie mit einem kleinen lokalen Modell (TinyBERT-Cross-Encoder) neu, bevor das Sprachmodell sie sieht.',
        'Eine Suche nach „NASA Budget“ findet eine Stelle über die „Finanzierung der National Aeronautics and Space Administration“ und ebenso die Stelle, die genau „NASA“ nennt.'),
    },
    'tech-semantic-chunking': {
      title: 'Semantisches Chunking | StarkLLM', eyebrow: 'Indexierung',
      h1: 'Semantisches Chunking', lede: 'Dokumente werden dort geteilt, wo sich der Inhalt ändert, nicht nach einer festen Zeichenzahl.',
      sections: s(de,
        'Bevor ein Dokument durchsuchbar ist, wird es in Abschnitte („Chunks“) geteilt. Jeder Abschnitt wird mit Datei, Seite oder Abschnitt gespeichert.',
        'Ein Abschnitt, der mitten im Satz oder in einer Klausel endet, verliert seinen Sinn, und die Suche liefert dann halbe Antworten.',
        'StarkLLM teilt den Text in Sätze und beginnt einen neuen Abschnitt, wo das Thema wechselt, gemessen mit dem Embedding-Modell. Wenn das nicht möglich ist, teilt es an Absätzen und Sätzen mit einer kleinen Überlappung. Tabellen (CSV, Excel, Word-Tabellen) bleiben Zeile für Zeile mit ihren Spaltennamen erhalten.',
        'Ein Vertrag wird Klausel für Klausel indexiert. Eine Frage zur „Haftung“ liefert die ganze Haftungsklausel, nicht zwei Hälften.',
        'Lange Dateien ohne Satzzeichen, etwa manche Logs, können weiterhin große Abschnitte ergeben, in denen einzelne Werte schwerer zu finden sind.'),
    },
    'tech-knowledge-base': {
      title: 'Knowledge Base | StarkLLM', eyebrow: 'Bibliothek',
      h1: 'Knowledge Base', lede: 'Ein Ordner auf Ihrem PC, den jeder Chat durchsuchen kann.',
      shot: 'kb', shotAlt: 'Die StarkLLM Knowledge Base mit einem indexierten Ordner',
      sections: s(de,
        'Die Knowledge Base ist ein Ordner auf Ihrem PC (standardmäßig „StarkLLM Knowledge Base“ in Ihren Dokumenten), dessen Dateien StarkLLM indexiert und aktuell hält.',
        'Nachschlagematerial wie Verfahrensanweisungen, Handbücher oder Notizen wird in vielen Projekten gebraucht. Ohne gemeinsame Bibliothek müssten Sie dieselben Dateien in jeden Workspace laden.',
        'StarkLLM prüft die registrierten Ordner alle 30 Sekunden und indexiert neue und geänderte Dateien; „Sync Now“ tut es sofort. Im Chat entscheidet der Knowledge-Base-Schalter, ob diese Dateien mit durchsucht werden. Quellen daraus sind mit „Personal KB“ markiert.',
        'Ihr Team-Handbuch liegt im Ordner. In einem Workspace zu einem neuen Projekt fragen Sie in derselben Frage nach den Projektdateien und dem Handbuch.'),
    },
    'tech-workspaces': {
      title: 'Workspaces | StarkLLM', eyebrow: 'Organisation',
      h1: 'Workspaces', lede: 'Ein Workspace pro Projekt, mit eigenen Dokumenten und Chats.',
      sections: s(de,
        'Ein Workspace enthält die Dokumente und Chats eines Projekts. Die Knowledge Base gilt für alle Workspaces.',
        'Liegen alle Dateien an einem Ort, kann eine Frage zu einem Fall Stellen aus einem anderen aufgreifen.',
        'Jeder Workspace hat seinen eigenen Index. Ein Chat durchsucht nur die Dokumente seines Workspace, plus die Knowledge Base, wenn Sie sie einschalten.',
        'Sie wechseln von „Steuererklärung 2025“ zu „Website-Relaunch“. Antworten kommen jetzt nur aus den Website-Dokumenten.'),
    },
    'tech-multimodal': {
      title: 'Unterstützte Dateien und Bilder | StarkLLM', eyebrow: 'Dateien',
      h1: 'Dateien, Scans und Bilder', lede: '14 Dateitypen, auch gescannte PDFs und Fotos.',
      sections: s(de,
        'StarkLLM liest PDF, Word (DOCX), Excel (XLSX), CSV, Markdown, Text, HTML, JSON, XML und Log-Dateien sowie Bilder (PNG, JPG). Sie fügen sie mit der Büroklammer hinzu oder ziehen sie auf das Fenster.',
        'Echte Dokumente sind oft Scans oder Fotos, kein markierbarer Text. Eine reine Textextraktion findet darin nichts.',
        { p: 'Jeder Typ hat seinen eigenen Leser:', list: [
          'PDF-Seiten mit Text werden direkt gelesen; gescannte Seiten gehen durch lokale Texterkennung (Tesseract) und, wenn diese zu wenig findet, durch ein lokales Bildmodell.',
          'Bilder werden von einem lokalen Bildmodell beschrieben und ihr Text gelesen. Das erste Bild lädt dieses Modell einmalig herunter (llava, etwa 4,4 GB).',
          'Tabellen behalten ihre Spaltennamen, damit Werte mit ihrer Bedeutung verbunden bleiben.',
        ] },
        'Sie fügen ein Foto eines Parkschilds hinzu. Später fragen Sie „Auf welcher Ebene parken Besucher?“ und erhalten „Ebene P2, Plätze 40 bis 55“ mit dem Foto als Quelle.',
        'Handschrift und kleine oder unscharfe Schrift werden weniger zuverlässig gelesen. Gedruckten Text liest das Bildmodell besser als Whiteboards.'),
    },
    'tech-local-models': {
      title: 'Lokale Modelle mit Ollama | StarkLLM', eyebrow: 'Modelle',
      h1: 'Lokale Modelle mit Ollama', lede: 'Das Sprachmodell läuft auf Ihrem PC, mit Ihrer Hardware.',
      sections: s(de,
        'Ollama ist ein kostenloses Programm, das offene Sprachmodelle wie Qwen, Llama oder Mistral auf Ihrem Prozessor oder Ihrer Grafikkarte ausführt. StarkLLM nutzt es für Chat, Suche und Bilder.',
        'Ein lokales Modell braucht kein Konto und kein Abonnement, funktioniert nach dem Download ohne Internet, und Ihre Dokumente gehen nie an einen Modellanbieter.',
        'StarkLLM startet Ollama, wenn es installiert ist, lädt beim ersten Start die Standardmodelle (etwa 5 GB) und lässt Sie im Model Hub das Modell wechseln. Denkende Modelle wie Qwen 3 funktionieren ebenfalls.',
        'Im Zug ohne WLAN fügen Sie ein PDF hinzu und stellen Fragen dazu. Alles läuft auf dem Laptop.',
        'Antwortqualität und Geschwindigkeit hängen vom Modell und Ihrer Hardware ab. Ein 7B-Modell braucht etwa 8 GB RAM; größere Modelle antworten besser, brauchen aber mehr Speicher, am besten auf einer Grafikkarte.'),
    },
    'tech-privacy': {
      title: 'Datenschutz | StarkLLM', eyebrow: 'Datenschutz',
      h1: 'Was auf Ihrem PC bleibt', lede: 'Dokumente, Index, Chats und Modelle bleiben auf Ihrem Computer. Einige optionale Funktionen gehen online, und nur wenn Sie sie nutzen.',
      sections: [
        { h: de.what, p: 'StarkLLM betreibt Datenbank, Suchindex und Weboberfläche auf Ihrem PC (in Docker) und das Sprachmodell in Ollama, ebenfalls auf Ihrem PC. Es gibt keine Telemetrie und kein Konto auf einem Server.' },
        { h: de.why, p: 'Verträge, Patientenakten oder Forschungsdaten sollten nicht an einen Clouddienst gehen, nur um eine Frage dazu zu stellen.' },
        { h: 'Optionale Online-Funktionen', p: 'Diese verbinden sich nur mit dem Internet, wenn Sie sie einschalten oder starten. Der Chat zeigt an, wenn eine Frage Ihren PC verlässt.', list: [
          'Websuche (Schalter im Chat): Ihre Frage geht an DuckDuckGo.',
          'Cloud-Modellanbieter (Einstellungen, z. B. DeepSeek, OpenRouter, Groq): Ihre Frage und die gefundenen Textstellen gehen an diesen Anbieter.',
          'YouTube- und GitHub-Import: Die App lädt das angegebene Transkript oder Repository herunter.',
          'Marktpreise (Widget, standardmäßig aus): von Yahoo Finance abgerufen.',
          'Update-Prüfung (einmal beim ersten Start gefragt): fragt GitHub nach der neuesten Versionsnummer, sonst nichts.',
        ] },
        { h: 'Einmalige Downloads', p: 'Die KI-Modelle (von Ollama), der Re-Ranker (bei der ersten Suche), das Sprachmodell (bei der ersten Spracheingabe) und das Bildmodell (beim ersten Bild) werden einmal heruntergeladen. Dabei werden keine Dokumente, Fragen oder Nutzungsdaten gesendet.' },
        { h: de.example, p: 'Nach dem ersten Start können Sie das WLAN ausschalten. Dokumente hinzufügen, suchen und antworten funktioniert weiter.' },
      ],
    },
    'tech-local-tools': {
      title: 'Lokale Werkzeuge mit Freigabe | StarkLLM', eyebrow: 'Werkzeuge',
      h1: 'Lokale Werkzeuge, mit Ihrer Freigabe', lede: 'Das Modell kann anfragen, etwas nachzuschlagen. Nichts läuft, bevor Sie es bestätigen.',
      sections: s(de,
        'StarkLLM hat einen kleinen eingebauten Werkzeug-Host (MCP). Das Modell kann drei reine Lesewerkzeuge anfordern: die Dateien des Workspace auflisten, die Knowledge Base durchsuchen und den genauen Text einer zitierten Stelle holen.',
        'Mit Werkzeugen kann das Modell Fakten prüfen, statt zu raten. Ohne Kontrolle könnten Werkzeuge Dinge tun, die Sie nicht wollten.',
        { p: 'Jeder Werkzeugaufruf hält an einer Karte im Chat:', list: [
          'Die Karte zeigt Werkzeug und Argumente; Sie können sie ändern, den Aufruf ausführen oder abbrechen.',
          'Die Werkzeuge lesen nur. Es gibt keine Shell, kein Schreiben von Dateien und keinen Internetzugriff.',
          'Der Server nimmt einen Werkzeugaufruf nur mit einem einmaligen Token dieser Karte an.',
        ] },
        'Das Modell ist unsicher, welche Version eines Dokuments die neueste ist, und möchte die Workspace-Dateien auflisten. Sie sehen die Anfrage, führen sie aus, und die Antwort nutzt die echte Dateiliste.'),
    },
    'tech-voice': {
      title: 'Spracheingabe und Sprachausgabe | StarkLLM', eyebrow: 'Sprache',
      h1: 'Spracheingabe und Sprachausgabe', lede: 'Fragen sprechen und die Antwort anhören, verarbeitet auf Ihrem PC.',
      shot: 'settings', shotAlt: 'StarkLLM Einstellungen',
      sections: s(de,
        'Die Spracherkennung macht aus Ihrer gesprochenen Frage Text; die Sprachausgabe liest die Antwort vor.',
        'Bei langen Fragen ist Sprechen schneller als Tippen, und Zuhören hilft, wenn Hände oder Augen beschäftigt sind.',
        'StarkLLM nutzt Whisper für die Spracherkennung und Piper-Stimmen für Englisch und Deutsch, beide lokal. Audio wird an keinen Dienst gesendet.',
        'Während Sie ein Papierdokument lesen, klicken Sie auf das Mikrofon, stellen Ihre Frage und hören die Antwort.',
        'Das Spracherkennungsmodell wird bei der ersten Spracheingabe heruntergeladen.'),
    },
    'tech-themes': {
      title: 'Farbthemen | StarkLLM', eyebrow: 'Darstellung',
      h1: 'Farbthemen', lede: 'Acht Farbthemen, von reinem Schwarz für OLED-Bildschirme bis zu einem hellen Thema.',
      sections: [
        { h: de.what, p: 'StarkLLM hat acht Themen: Midnight Indigo (Standard), OLED Pitch Black, Liquid Glass, Cyberpunk Rose, Matrix Emerald, Sunset Amber, Arctic Frost und Daylight Minimal.' },
        { h: de.why, p: 'Lange Sitzungen schonen die Augen, wenn Kontrast und Helligkeit zu Bildschirm und Raum passen.' },
        { h: de.how, p: 'Wechseln Sie das Thema mit der Paletten-Schaltfläche unten in der Seitenleiste oder unter Einstellungen, Darstellung. Die Wahl wird gespeichert und sofort übernommen.' },
      ],
    },
  },
};
