// Copy for the product page, EN and DE. German is a first draft and needs a native review before launch.
// Theme names, colors and descriptions mirror frontend/src/utils/themes.js in the app repo.
import { V, SIZE_MB } from '../data/release';
export const themes = [
  { name: 'Midnight Indigo', bg: '#05070a', card: '#121622', g: ['#6366f1', '#8b5cf6'], en: 'Classic deep slate with rich indigo and violet radiance.', de: 'Klassisches tiefes Schiefer mit kräftigem Indigo und Violett.' },
  { name: 'Cyberpunk Rose', bg: '#0a040b', card: '#220f28', g: ['#ec4899', '#f43f5e'], en: 'Vibrant neon pink and rose with a warm ambient glow.', de: 'Leuchtendes Neonpink und Rosé mit warmem Schimmer.' },
  { name: 'OLED Pitch Black', bg: '#000000', card: '#101010', g: ['#0284c7', '#38bdf8'], en: 'Pure #000000 true black for maximum contrast and battery life.', de: 'Reines #000000-Schwarz für maximalen Kontrast und Akkulaufzeit.' },
  { name: 'Liquid Glass', bg: '#070b16', card: '#192442', g: ['#a855f7', '#38bdf8'], en: 'Translucent frosted glass with iridescent multi-color radiance.', de: 'Durchscheinendes Milchglas mit schillernden Farbverläufen.' },
  { name: 'Matrix Emerald', bg: '#030c08', card: '#0d281e', g: ['#10b981', '#06b6d4'], en: 'Obsidian matrix with electric emerald green accents.', de: 'Obsidian-Matrix mit elektrisch smaragdgrünen Akzenten.' },
  { name: 'Sunset Amber', bg: '#0b0602', card: '#26190b', g: ['#f59e0b', '#ea580c'], en: 'Volcanic slate with warm glowing amber and flame accents.', de: 'Vulkanisches Schiefer mit warmen Bernstein- und Flammenakzenten.' },
  { name: 'Arctic Frost', bg: '#060f18', card: '#152c43', g: ['#06b6d4', '#3b82f6'], en: 'Sub-zero navy with crystalline cyan and blue frost.', de: 'Eisiges Marineblau mit kristallinem Cyan und Frostblau.' },
  { name: 'Daylight Minimal', bg: '#f0f2f8', card: '#ffffff', g: ['#ffffff', '#e0e7ff'], en: 'Clean daylight look with soft shadows and crisp contrast.', de: 'Klarer Tageslicht-Look mit weichen Schatten und scharfem Kontrast.' },
  { name: 'Doodle Chat', bg: '#efe6dc', card: '#fffdf9', g: ['#0d9488', '#14b8a6'], en: 'Warm paper with little dolls, hearts, letters and stars drawn in the background.', de: 'Warmes Papier mit kleinen Puppen, Herzen, Briefen und Sternen im Hintergrund.' },
  { name: 'Doodle Night', bg: '#0b141a', card: '#1f2c33', g: ['#14b8a6', '#06b6d4'], en: 'The doodles on a calm dark chat background.', de: 'Dieselben Zeichnungen auf ruhigem dunklem Chat-Hintergrund.' },
  { name: 'Flower Meadow', bg: '#fdf2f6', card: '#ffffff', g: ['#ec4899', '#f59e0b'], en: 'Small pink, lilac and peach flowers on soft blush.', de: 'Kleine rosa, lila und pfirsichfarbene Blumen auf zartem Rosé.' },
  { name: 'Matrix Code', bg: '#000a03', card: '#02140a', g: ['#16a34a', '#4ade80'], en: 'Green code rain on black, in a monospace font.', de: 'Grüner Code-Regen auf Schwarz, in Festbreitenschrift.' },
  { name: 'Starry Night', bg: '#0a0f24', card: '#161e44', g: ['#6366f1', '#f59e0b'], en: 'A quiet night sky full of small stars, with warm gold accents.', de: 'Ein ruhiger Nachthimmel voller kleiner Sterne mit warmen Goldakzenten.' },
];

export const product = {
  en: {
    meta: { title: 'Product | StarkLLM' },
    hero: { eyebrow: 'Product', h1: 'How StarkLLM works', lede: 'An end-to-end local pipeline designed with data privacy in mind.' },
    lifecycle: {
      h2: 'The document lifecycle',
      lede: 'When you add a PDF or text file, processing stays on your PC.',
      steps: [
        { k: 'Parse', v: 'Local parsers extract the raw text. Scanned PDFs and images go through local OCR or vision before chunking.' },
        { k: 'Chunk', v: 'A semantic chunking algorithm splits the text into logical, overlapping blocks.' },
        { k: 'Embed', v: 'A local embedding model turns each block into a vector, stored in your private ChromaDB container.' },
        { k: 'Answer', v: 'When you ask a question, the most relevant passages are injected into the context window of your chosen Ollama model, so the response is grounded in your sources.' },
      ],
    },
    letters: {
      tag: 'Document inbox',
      h2: 'Every letter, read and filed',
      lede: 'Add a letter as a PDF, a scan or a photo from your phone. StarkLLM reads it on your PC and suggests what you need. It never renames, moves or deletes your files.',
      items: [
        { k: 'What it reads', v: 'The kind of letter (bill, reminder, tax notice, contract, fine and more), sender, letter date, reference numbers such as customer, contract or tax number, amounts, bank accounts and deadlines, in English and German letters.' },
        { k: 'Every value has a source', v: 'Each value is found word for word on a page. Click it and the letter opens at that page with the line marked.' },
        { k: 'Cases per sender', v: 'Letters of one sender are put together, the case with the nearest deadline first. The same letter as a photo and as a PDF is marked, and so are a replaced letter and a possible scam.' },
        { k: 'You decide', v: 'Mark a letter done or give it your own title. The number of new letters is shown next to "Inbox".' },
      ],
    },
    deadlines: {
      tag: 'Deadlines',
      h2: 'Deadlines on the start page',
      lede: 'The start page shows your newest documents and the deadlines, appointments and payments found in them.',
      items: [
        { k: 'With amount and page', v: 'Every date comes with its sentence, the amount if there is one and the page it was read from.' },
        { k: 'Add to calendar', v: '"Add to calendar" saves the dates as a calendar file on request.' },
        { k: 'Made by rules on this PC', v: 'Dates, amounts and senders are found by fixed rules over the text of your letters, not guessed by a model, so each one is in the document. Check the letter before you act on it.' },
        { k: 'Languages', v: 'Letters in English and German are understood. Photos and scans are read as English or German text. Letters in other languages are filed and can be searched, but without deadlines and amounts. Coming with the next versions (in progress, not released yet): letter rules for French, Spanish, Italian and Turkish, and the interface in Spanish, French, Italian and Turkish.' },
      ],
    },
    verify: {
      tag: 'Verifiable intelligence',
      h2: 'Answers you can check',
      lede: 'Language models can produce unsupported claims when they answer from memory alone. StarkLLM addresses this with Retrieval-Augmented Generation (RAG).',
      items: [
        { k: 'Source-backed responses', v: 'The AI retrieves text passages from your exact documents before it formulates an answer.' },
        { k: 'Passages you can read', v: 'Responses cite the source filename and a page or section locator. Click a source under an answer to see the passages it was based on, word for word, and open the document at that page.' },
        { k: 'Warnings for fake letters', v: 'A red box above the answer appears if a letter asks for payment to a foreign account, by voucher or through a link, contains text addressed to AI assistants, or a sender suddenly names a different account.' },
      ],
    },
    library: {
      tag: 'Persistent library',
      h2: 'A knowledge base that stays in sync',
      lede: 'Workspace uploads suit isolated projects. The Global Knowledge Base is your permanent reference library, reachable from every chat.',
      items: [
        { k: 'Local folder indexing', v: 'Map any folder on your Windows machine. StarkLLM recursively indexes supported files into a global vector collection.' },
        { k: 'Universal access', v: 'Query the Knowledge Base from any chat, whatever workspace you are in.' },
        { k: 'Interval synchronization', v: 'About once a minute, the Knowledge Base checks the mapped folder and re-indexes new or modified files.' },
      ],
      compareH3: 'Workspace documents or Knowledge Base?',
      compareLede: 'StarkLLM offers two ways to give the AI context. Knowing the difference keeps your material organized.',
      cards: [
        { title: 'Workspace documents', points: ['Tied to one single workspace.', 'Useful when work must stay isolated to prevent context contamination.', 'Best for temporary or project-specific document sets.'], ex: 'Example', exText: 'A folder of contracts for one legal case or client audit.' },
        { title: 'Knowledge Base', points: ['A persistent, global layer.', 'Useful across all chats and workspaces at once.', 'Best for long-term reference material and personal archives.'], ex: 'Example', exText: 'Your ongoing research library, handbook or company SOPs.' },
      ],
    },
    control: {
      tag: 'Local control',
      h2: 'Tune it to your hardware',
      lede: 'StarkLLM gives you administrative control over your local inference environment.',
      items: [
        { k: 'Model selection', v: 'Switch between any model you downloaded via Ollama (for example Qwen 2.5, Llama 3.2, Mistral) from the chat interface.' },
        { k: 'Runtime configuration', v: 'Adjust context window size, temperature and advanced parameters to balance speed and reasoning depth.' },
        { k: 'Strict localhost routing', v: 'Internal API traffic runs on localhost Docker and host ports, keeping your data on your machine.' },
      ],
    },
    tools: {
      tag: 'In-process local MCP host',
      h2: 'Tools that ask before they act',
      lede: 'Unlike cloud AI tools that execute commands remotely, StarkLLM runs a tool host inside its own FastAPI backend. Models get verified, read-only access to your indexed content.',
      items: [
        { k: 'Three built-in tools', v: 'list_workspace_files inspects active workspace files. search_local_kb runs hybrid vector and BM25 search over personal archives. fetch_cited_chunk fetches the exact passage text.' },
        { k: 'Human-in-the-loop gate', v: 'Each tool call creates a card in the chat. Review the parameters, change values, or cancel.' },
        { k: 'Adversarial prompt defense', v: 'Retrieved passages are stripped of tool-call markers before they reach the model context, which makes prompt injection through documents harder (no technique removes that risk completely).' },
        { k: 'Server-side execution gate', v: 'A single-use invocation token blocks direct execution and replay attempts.' },
      ],
      card: { title: 'in_process_tool: list_workspace_files', badge: 'Local isolation', text: 'Tenant-isolated workspace file reader. The model inspects active workspace files without access to the host filesystem.', example: 'Example output', foot: 'Protected by a server-side execution gate and a single-use invocation token.' },
    },
    themes: {
      tag: 'Aesthetics',
      h2: 'Thirteen themes',
      lede: 'Designed for focused work in different lighting conditions, with instant hot-swapping.',
      items: [
        { k: 'Quick palette popover', v: 'Click the palette icon in the sidebar footer to switch themes without interrupting your research.' },
        { k: 'Persistent preference', v: 'Your active theme is saved across refreshes and restarts.' },
      ],
    },
    superior: {
      h2: 'Why it differs from basic local chat clients',
      lede: 'Many desktop clients offer a chat wrapper or naive document chunking. StarkLLM is built as a precision workstation.',
      items: [
        { k: 'Hybrid RAG with a cross-encoder', v: 'Most desktop RAG tools rely on vector embeddings alone and can miss exact keywords. StarkLLM merges BM25 keyword frequency with dense vector search, then re-ranks chunks with a local TinyBERT cross-encoder.' },
        { k: 'Native standalone window', v: 'No browser tabs or address bar. A standalone desktop app with a frameless title bar, splash screen, system tray integration and a Windows NSIS installer.' },
        { k: 'Python code runner', v: 'Run Python calculations, data analysis and formula work on your own machine, with code checks, memory caps and time limits. These are convenience limits, not a security boundary: only run code you trust.' },
        { k: 'Local OpenAI-compatible API', v: 'A local gateway exposing /v1/chat/completions and /v1/models. Connect IDEs like Cursor, tools like Claude Code, Obsidian plugins or your own Python scripts to your local models.' },
      ],
    },
    tech: {
      h2: 'Core technologies',
      lede: 'Explore the architecture and capabilities behind StarkLLM.',
    },
    cta: { h2: 'Ready to try StarkLLM?', text: 'Download the free, open-source Windows Research Beta.', installer: `Download v${V} installer`, all: 'All downloads', manual: 'Read the manual' },
  },
  de: {
    meta: { title: 'Produkt | StarkLLM', description: 'So funktioniert StarkLLM: lokale Dokumentverarbeitung, hybrides RAG mit Quellenangaben, Wissensdatenbank, lokale Tools und dreizehn Themes. Alles auf Ihrem Windows-PC.' },
    hero: { eyebrow: 'Produkt', h1: 'So funktioniert StarkLLM', lede: 'Eine durchgängig lokale Pipeline, entwickelt mit Blick auf den Datenschutz.' },
    lifecycle: {
      h2: 'Der Weg eines Dokuments',
      lede: 'Wenn Sie eine PDF- oder Textdatei hinzufügen, bleibt die Verarbeitung auf Ihrem PC.',
      steps: [
        { k: 'Einlesen', v: 'Lokale Parser extrahieren den Rohtext. Gescannte PDFs und Bilder durchlaufen vor dem Chunking lokale OCR oder Bildanalyse.' },
        { k: 'Zerlegen', v: 'Ein semantischer Chunking-Algorithmus teilt den Text in logische, überlappende Blöcke.' },
        { k: 'Einbetten', v: 'Ein lokales Embedding-Modell wandelt jeden Block in einen Vektor um, gespeichert in Ihrem privaten ChromaDB-Container.' },
        { k: 'Antworten', v: 'Bei einer Frage werden die relevantesten Passagen in das Kontextfenster Ihres gewählten Ollama-Modells eingefügt, sodass die Antwort auf Ihren Quellen beruht.' },
      ],
    },
    letters: {
      tag: 'Posteingang',
      h2: 'Jeder Brief gelesen und abgelegt',
      lede: 'Fügen Sie einen Brief als PDF, Scan oder Foto vom Handy hinzu. StarkLLM liest ihn auf Ihrem PC und macht Vorschläge. Es benennt Ihre Dateien nie um, verschiebt oder löscht sie nicht.',
      items: [
        { k: 'Was gelesen wird', v: 'Die Art des Briefs (Rechnung, Mahnung, Bescheid, Vertrag, Bußgeld und mehr), Absender, Briefdatum, Nummern wie Kunden-, Vertrags- oder Steuernummer, Beträge, Bankkonten und Fristen, bei englischen und deutschen Briefen.' },
        { k: 'Jeder Wert hat eine Quelle', v: 'Jeder Wert wird wörtlich auf einer Seite gefunden. Ein Klick öffnet den Brief auf dieser Seite, die Zeile ist markiert.' },
        { k: 'Vorgänge je Absender', v: 'Briefe eines Absenders werden zusammengefasst, der Vorgang mit der nächsten Frist zuerst. Derselbe Brief als Foto und als PDF wird markiert, ebenso ein ersetzter Brief und ein möglicher Betrug.' },
        { k: 'Sie entscheiden', v: 'Haken Sie einen Brief ab oder geben Sie ihm einen eigenen Titel. Die Zahl der neuen Briefe steht neben „Posteingang“.' },
      ],
    },
    deadlines: {
      tag: 'Fristen',
      h2: 'Fristen auf der Startseite',
      lede: 'Die Startseite zeigt Ihre neuesten Dokumente und die Fristen, Termine und Zahlungen darin.',
      items: [
        { k: 'Mit Betrag und Seite', v: 'Zu jedem Datum gehören der Satz, der Betrag, falls es einen gibt, und die Seite, aus der es gelesen wurde.' },
        { k: 'Zum Kalender', v: '„Zum Kalender“ speichert die Termine auf Wunsch als Kalenderdatei.' },
        { k: 'Nach festen Regeln auf diesem PC', v: 'Daten, Beträge und Absender werden nach festen Regeln im Text Ihrer Briefe gefunden und nicht von einem Modell geraten, jeder Wert steht also im Dokument. Prüfen Sie den Brief, bevor Sie handeln.' },
        { k: 'Sprachen', v: 'Briefe auf Englisch und Deutsch werden verstanden. Fotos und Scans werden als englischer oder deutscher Text gelesen. Briefe in anderen Sprachen werden abgelegt und lassen sich durchsuchen, aber ohne Fristen und Beträge. Mit den nächsten Versionen kommen (in Arbeit, noch nicht veröffentlicht): Briefregeln für Französisch, Spanisch, Italienisch und Türkisch sowie die Oberfläche auf Spanisch, Französisch, Italienisch und Türkisch.' },
      ],
    },
    verify: {
      tag: 'Überprüfbare Intelligenz',
      h2: 'Antworten, die Sie nachprüfen können',
      lede: 'Sprachmodelle können unbelegte Behauptungen erzeugen, wenn sie nur aus dem Gedächtnis antworten. StarkLLM begegnet dem mit Retrieval-Augmented Generation (RAG).',
      items: [
        { k: 'Antworten mit Quellenbezug', v: 'Die KI ruft Textpassagen aus Ihren Dokumenten ab, bevor sie eine Antwort formuliert.' },
        { k: 'Textstellen zum Nachlesen', v: 'Antworten nennen Dateiname sowie Seite oder Abschnitt. Ein Klick auf eine Quelle unter der Antwort zeigt die Textstellen, auf denen sie beruht, wörtlich, und öffnet das Dokument auf dieser Seite.' },
        { k: 'Warnungen vor gefälschten Briefen', v: 'Ein rotes Feld über der Antwort erscheint, wenn ein Brief Zahlung auf ein ausländisches Konto, per Gutschein oder über einen Link verlangt, Text an KI-Assistenten enthält oder ein Absender plötzlich ein anderes Konto nennt.' },
      ],
    },
    library: {
      tag: 'Dauerhafte Bibliothek',
      h2: 'Eine Wissensdatenbank, die aktuell bleibt',
      lede: 'Workspace-Uploads eignen sich für abgeschlossene Projekte. Die globale Wissensdatenbank ist Ihre dauerhafte Referenzbibliothek, aus jedem Chat erreichbar.',
      items: [
        { k: 'Indexierung lokaler Ordner', v: 'Binden Sie beliebige Ordner Ihres Windows-Rechners ein. StarkLLM indexiert unterstützte Dateien rekursiv in eine globale Vektorsammlung.' },
        { k: 'Zugriff von überall', v: 'Fragen Sie die Wissensdatenbank aus jedem Chat ab, unabhängig vom aktuellen Workspace.' },
        { k: 'Regelmäßiger Abgleich', v: 'Etwa einmal pro Minute prüft die Wissensdatenbank den eingebundenen Ordner und indexiert neue oder geänderte Dateien neu.' },
      ],
      compareH3: 'Workspace-Dokumente oder Wissensdatenbank?',
      compareLede: 'StarkLLM bietet zwei Wege, der KI Kontext zu geben. Wer den Unterschied kennt, hält sein Material geordnet.',
      cards: [
        { title: 'Workspace-Dokumente', points: ['An genau einen Workspace gebunden.', 'Sinnvoll, wenn Arbeit getrennt bleiben muss, um Kontextvermischung zu vermeiden.', 'Am besten für temporäre oder projektbezogene Dokumentsätze.'], ex: 'Beispiel', exText: 'Ein Ordner mit Verträgen für einen bestimmten Rechtsfall oder ein Kunden-Audit.' },
        { title: 'Wissensdatenbank', points: ['Eine dauerhafte, globale Ebene.', 'Nutzbar in allen Chats und Workspaces gleichzeitig.', 'Am besten für langfristiges Referenzmaterial und persönliche Archive.'], ex: 'Beispiel', exText: 'Ihre laufende Recherchebibliothek, ein Handbuch oder interne Arbeitsanweisungen.' },
      ],
    },
    control: {
      tag: 'Lokale Kontrolle',
      h2: 'Auf Ihre Hardware abgestimmt',
      lede: 'StarkLLM gibt Ihnen Kontrolle über Ihre lokale Inferenzumgebung.',
      items: [
        { k: 'Modellauswahl', v: 'Wechseln Sie im Chat zwischen allen über Ollama geladenen Modellen (zum Beispiel Qwen 2.5, Llama 3.2, Mistral).' },
        { k: 'Laufzeit-Konfiguration', v: 'Passen Sie Kontextfenster, Temperatur und weitere Parameter an, um Tempo und Denktiefe abzuwägen.' },
        { k: 'Strikt lokales Routing', v: 'Interner API-Verkehr läuft über Localhost-Ports von Docker und Host, Ihre Daten bleiben auf Ihrem Rechner.' },
      ],
    },
    tools: {
      tag: 'Lokaler MCP-Host im Prozess',
      h2: 'Tools, die vorher fragen',
      lede: 'Anders als Cloud-KI, die Befehle entfernt ausführt, betreibt StarkLLM einen Tool-Host im eigenen FastAPI-Backend. Modelle erhalten geprüften, lesenden Zugriff auf Ihre indexierten Inhalte.',
      items: [
        { k: 'Drei integrierte Tools', v: 'list_workspace_files zeigt Dateien des aktiven Workspaces. search_local_kb führt eine hybride Vektor- und BM25-Suche über persönliche Archive aus. fetch_cited_chunk holt den genauen Passagentext.' },
        { k: 'Bestätigung durch den Menschen', v: 'Jeder Tool-Aufruf erzeugt eine Karte im Chat. Prüfen Sie die Parameter, ändern Sie Werte oder brechen Sie ab.' },
        { k: 'Schutz vor Prompt-Injection', v: 'Aus abgerufenen Passagen werden Tool-Marker entfernt, bevor sie in den Modellkontext gelangen. Das erschwert Prompt-Injection über Dokumente (kein Verfahren beseitigt dieses Risiko vollständig).' },
        { k: 'Serverseitige Ausführungssperre', v: 'Ein Einmal-Token verhindert direkte Ausführung und Wiederholungsangriffe.' },
      ],
      card: { title: 'in_process_tool: list_workspace_files', badge: 'Lokale Isolation', text: 'Mandantengetrennter Leser für Workspace-Dateien. Das Modell sieht die Dateien des aktiven Workspaces, ohne Zugriff auf das Dateisystem des Hosts.', example: 'Beispielausgabe', foot: 'Geschützt durch serverseitige Ausführungssperre und Einmal-Token.' },
    },
    themes: {
      tag: 'Gestaltung',
      h2: 'Dreizehn Themes',
      lede: 'Für konzentriertes Arbeiten bei unterschiedlichem Licht, mit sofortigem Wechsel.',
      items: [
        { k: 'Schnelle Palettenauswahl', v: 'Klicken Sie auf das Paletten-Symbol in der Seitenleiste, um Themes ohne Unterbrechung zu wechseln.' },
        { k: 'Gespeicherte Auswahl', v: 'Ihr aktives Theme bleibt über Aktualisierungen und Neustarts erhalten.' },
      ],
    },
    superior: {
      h2: 'Was es von einfachen lokalen Chat-Clients unterscheidet',
      lede: 'Viele Desktop-Clients bieten eine Chat-Hülle oder einfaches Dokument-Chunking. StarkLLM ist als Präzisions-Arbeitsplatz gebaut.',
      items: [
        { k: 'Hybrides RAG mit Cross-Encoder', v: 'Die meisten Desktop-RAG-Tools nutzen nur Vektor-Embeddings und können exakte Stichwörter verpassen. StarkLLM verbindet BM25-Stichwortgewichtung mit dichter Vektorsuche und sortiert die Chunks mit einem lokalen TinyBERT-Cross-Encoder neu.' },
        { k: 'Natives, eigenständiges Fenster', v: 'Keine Browser-Tabs, keine Adressleiste. Eine eigenständige Desktop-App mit rahmenloser Titelleiste, Startbildschirm, Tray-Integration und Windows-NSIS-Installer.' },
        { k: 'Python-Code-Ausführung', v: 'Führen Sie Python-Berechnungen, Datenanalysen und Formelarbeit auf Ihrem Rechner aus, mit Code-Prüfung, Speichergrenzen und Zeitlimit. Das sind Komfortgrenzen, keine Sicherheitsgrenze: führen Sie nur Code aus, dem Sie vertrauen.' },
        { k: 'Lokale OpenAI-kompatible API', v: 'Ein lokales Gateway mit /v1/chat/completions und /v1/models. Verbinden Sie IDEs wie Cursor, Werkzeuge wie Claude Code, Obsidian-Plugins oder eigene Python-Skripte mit Ihren lokalen Modellen.' },
      ],
    },
    tech: {
      h2: 'Kerntechnologien',
      lede: 'Die Architektur und Fähigkeiten hinter StarkLLM.',
    },
    cta: { h2: 'Bereit, StarkLLM auszuprobieren?', text: 'Laden Sie die kostenlose, quelloffene Windows Research Beta herunter.', installer: `Installer v${V} herunterladen`, all: 'Alle Downloads', manual: 'Handbuch lesen (EN)' },
  },
} as const;

export const toolSample = [
  { name: 'research_notes.pdf', size: 1048576, chunks: 42 },
  { name: 'financial_audit.docx', size: 524288, chunks: 18 },
];
