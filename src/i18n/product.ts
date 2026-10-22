// Copy for the product page, EN and DE. German is a first draft and needs a native review before launch.
// Theme names, colors and descriptions mirror frontend/src/utils/themes.js in the app repo.
export const themes = [
  { name: 'Midnight Indigo', bg: '#05070a', card: '#121622', g: ['#6366f1', '#8b5cf6'], en: 'Classic deep slate with rich indigo and violet radiance.', de: 'Klassisches tiefes Schiefer mit kräftigem Indigo und Violett.' },
  { name: 'Cyberpunk Rose', bg: '#0a040b', card: '#220f28', g: ['#ec4899', '#f43f5e'], en: 'Vibrant neon pink and rose with a warm ambient glow.', de: 'Leuchtendes Neonpink und Rosé mit warmem Schimmer.' },
  { name: 'OLED Pitch Black', bg: '#000000', card: '#101010', g: ['#0284c7', '#38bdf8'], en: 'Pure #000000 true black for maximum contrast and battery life.', de: 'Reines #000000-Schwarz für maximalen Kontrast und Akkulaufzeit.' },
  { name: 'Liquid Glass', bg: '#070b16', card: '#192442', g: ['#a855f7', '#38bdf8'], en: 'Translucent frosted glass with iridescent multi-color radiance.', de: 'Durchscheinendes Milchglas mit schillernden Farbverläufen.' },
  { name: 'Matrix Emerald', bg: '#030c08', card: '#0d281e', g: ['#10b981', '#06b6d4'], en: 'Obsidian matrix with electric emerald green accents.', de: 'Obsidian-Matrix mit elektrisch smaragdgrünen Akzenten.' },
  { name: 'Sunset Amber', bg: '#0b0602', card: '#26190b', g: ['#f59e0b', '#ea580c'], en: 'Volcanic slate with warm glowing amber and flame accents.', de: 'Vulkanisches Schiefer mit warmen Bernstein- und Flammenakzenten.' },
  { name: 'Arctic Frost', bg: '#060f18', card: '#152c43', g: ['#06b6d4', '#3b82f6'], en: 'Sub-zero navy with crystalline cyan and blue frost.', de: 'Eisiges Marineblau mit kristallinem Cyan und Frostblau.' },
  { name: 'Daylight Minimal', bg: '#f0f2f8', card: '#ffffff', g: ['#ffffff', '#e0e7ff'], en: 'Clean daylight look with soft shadows and crisp contrast.', de: 'Klarer Tageslicht-Look mit weichen Schatten und scharfem Kontrast.' },
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
      shotAlt: 'StarkLLM chat answering from indexed documents',
    },
    verify: {
      tag: 'Verifiable intelligence',
      h2: 'Answers you can check',
      lede: 'Language models can produce unsupported claims when they answer from memory alone. StarkLLM addresses this with Retrieval-Augmented Generation (RAG).',
      items: [
        { k: 'Source-backed responses', v: 'The AI retrieves text passages from your exact documents before it formulates an answer.' },
        { k: 'Direct citations', v: 'Responses cite the source filename and a page or section locator, so you can find the passage in your original document.' },
        { k: 'Reduced hallucination', v: 'Grounding generation in your documents sharply reduces unsupported statements.' },
      ],
    },
    library: {
      tag: 'Persistent library',
      h2: 'A knowledge base that stays in sync',
      lede: 'Workspace uploads suit isolated projects. The Global Knowledge Base is your permanent reference library, reachable from every chat.',
      shotAlt: 'StarkLLM knowledge base settings',
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
      shotAlt: 'StarkLLM settings screen',
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
        { k: 'Adversarial prompt defense', v: 'Retrieved passages are stripped of tool-call markers before they reach the model context, which closes off prompt injection through documents.' },
        { k: 'Server-side execution gate', v: 'A single-use invocation token blocks direct execution and replay attempts.' },
      ],
      card: { title: 'in_process_tool: list_workspace_files', badge: 'Local isolation', text: 'Tenant-isolated workspace file reader. The model inspects active workspace files without access to the host filesystem.', example: 'Example output', foot: 'Protected by a server-side execution gate and a single-use invocation token.' },
    },
    themes: {
      tag: 'Aesthetics',
      h2: 'Eight handcrafted themes',
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
        { k: 'In-process code sandbox', v: 'Run Python calculations, data analysis and formula work on your own machine, protected by strict AST validation, memory caps and timeout watchdogs.' },
        { k: 'Local OpenAI-compatible API', v: 'A local gateway exposing /v1/chat/completions and /v1/models. Connect IDEs like Cursor, tools like Claude Code, Obsidian plugins or your own Python scripts to your local models.' },
      ],
    },
    tech: {
      h2: 'Core technologies',
      lede: 'Explore the architecture and capabilities behind StarkLLM.',
      items: [
        { href: '/tech-local-tools.html', t: 'Local tools (MCP host)', v: 'The in-process read-only tool host with human confirmation and server-side execution gates.' },
        { href: '/tech-themes.html', t: 'Aesthetics and 8 themes', v: 'The eight palettes, OLED black, glassmorphism and the instant switcher.' },
        { href: '/tech-rag.html', t: 'Retrieval-Augmented Generation', v: 'How StarkLLM retrieves context from your documents with honest page and section citations.' },
        { href: '/tech-knowledge-base.html', t: 'Global Knowledge Base', v: 'Index local folders as a persistent reference library across all chats, with auto-sync.' },
        { href: '/tech-semantic-chunking.html', t: 'Semantic chunking', v: 'How documents are split to preserve meaning and section locators.' },
        { href: '/tech-hybrid-search.html', t: 'Hybrid search and re-ranking', v: 'Vector similarity combined with BM25 keyword search and re-ranking.' },
        { href: '/tech-multimodal.html', t: 'Multimodal documents', v: 'PDFs, images and scanned documents through OCR and vision models.' },
        { href: '/tech-workspaces.html', t: 'Multi-workspace and multi-chat', v: 'Isolated workspaces and separate chat sessions with auto-summaries.' },
        { href: '/tech-voice.html', t: 'Voice I/O (STT/TTS)', v: 'Hands-free use with local speech-to-text and offline Piper text-to-speech.' },
        { href: '/tech-local-models.html', t: 'Local models with Ollama', v: 'Run open-weight models on your GPU without cloud dependencies.' },
        { href: '/tech-privacy.html', t: 'Privacy and local-first architecture', v: 'The Docker-based design that keeps your data on your PC.' },
        { href: '/manual.html#folders', t: 'Chat folders and universal export', v: 'Collapsible folders, and export to Markdown, JSON, HTML or TXT.' },
        { href: '/manual.html#languages', t: 'Language roadmap', v: 'A four-tier internationalization plan ordered by global internet demographics.' },
        { href: '/manual.html#telemetry', t: 'Hardware health and VRAM monitor', v: 'Live GPU memory, container status, indexed chunk counts and a recent-chat launcher.' },
      ],
    },
    cta: { h2: 'Ready to try StarkLLM?', text: 'Download the free, open-source Windows Research Beta.', installer: 'Download v2.0.0 installer', all: 'All downloads', manual: 'Read the manual' },
  },
  de: {
    meta: { title: 'Produkt | StarkLLM', description: 'So funktioniert StarkLLM: lokale Dokumentverarbeitung, hybrides RAG mit Quellenangaben, Wissensdatenbank, lokale Tools und acht Themes. Alles auf Ihrem Windows-PC.' },
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
      shotAlt: 'StarkLLM-Chat beantwortet Fragen aus indexierten Dokumenten',
    },
    verify: {
      tag: 'Überprüfbare Intelligenz',
      h2: 'Antworten, die Sie nachprüfen können',
      lede: 'Sprachmodelle können unbelegte Behauptungen erzeugen, wenn sie nur aus dem Gedächtnis antworten. StarkLLM begegnet dem mit Retrieval-Augmented Generation (RAG).',
      items: [
        { k: 'Antworten mit Quellenbezug', v: 'Die KI ruft Textpassagen aus Ihren Dokumenten ab, bevor sie eine Antwort formuliert.' },
        { k: 'Direkte Quellenangaben', v: 'Antworten nennen Dateiname sowie Seite oder Abschnitt, sodass Sie die Passage im Originaldokument finden.' },
        { k: 'Weniger Halluzinationen', v: 'Die Verankerung in Ihren Dokumenten verringert unbelegte Aussagen deutlich.' },
      ],
    },
    library: {
      tag: 'Dauerhafte Bibliothek',
      h2: 'Eine Wissensdatenbank, die aktuell bleibt',
      lede: 'Workspace-Uploads eignen sich für abgeschlossene Projekte. Die globale Wissensdatenbank ist Ihre dauerhafte Referenzbibliothek, aus jedem Chat erreichbar.',
      shotAlt: 'StarkLLM-Einstellungen der Wissensdatenbank',
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
      shotAlt: 'StarkLLM-Einstellungen',
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
        { k: 'Schutz vor Prompt-Injection', v: 'Aus abgerufenen Passagen werden Tool-Marker entfernt, bevor sie in den Modellkontext gelangen. Das schließt Prompt-Injection über Dokumente aus.' },
        { k: 'Serverseitige Ausführungssperre', v: 'Ein Einmal-Token verhindert direkte Ausführung und Wiederholungsangriffe.' },
      ],
      card: { title: 'in_process_tool: list_workspace_files', badge: 'Lokale Isolation', text: 'Mandantengetrennter Leser für Workspace-Dateien. Das Modell sieht die Dateien des aktiven Workspaces, ohne Zugriff auf das Dateisystem des Hosts.', example: 'Beispielausgabe', foot: 'Geschützt durch serverseitige Ausführungssperre und Einmal-Token.' },
    },
    themes: {
      tag: 'Gestaltung',
      h2: 'Acht handgefertigte Themes',
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
        { k: 'Code-Sandbox im Prozess', v: 'Führen Sie Python-Berechnungen, Datenanalysen und Formelarbeit auf Ihrem Rechner aus, geschützt durch strikte AST-Prüfung, Speichergrenzen und Zeitüberwachung.' },
        { k: 'Lokale OpenAI-kompatible API', v: 'Ein lokales Gateway mit /v1/chat/completions und /v1/models. Verbinden Sie IDEs wie Cursor, Werkzeuge wie Claude Code, Obsidian-Plugins oder eigene Python-Skripte mit Ihren lokalen Modellen.' },
      ],
    },
    tech: {
      h2: 'Kerntechnologien',
      lede: 'Die Architektur und Fähigkeiten hinter StarkLLM. (Die Detailseiten sind derzeit auf Englisch.)',
      items: [
        { href: '/tech-local-tools.html', t: 'Lokale Tools (MCP-Host)', v: 'Der lesende Tool-Host im Prozess mit Bestätigung und serverseitiger Ausführungssperre.' },
        { href: '/tech-themes.html', t: 'Gestaltung und 8 Themes', v: 'Die acht Paletten, OLED-Schwarz, Glassmorphismus und der Sofort-Umschalter.' },
        { href: '/tech-rag.html', t: 'Retrieval-Augmented Generation', v: 'Wie StarkLLM Kontext aus Ihren Dokumenten abruft, mit ehrlichen Seiten- und Abschnittsangaben.' },
        { href: '/tech-knowledge-base.html', t: 'Globale Wissensdatenbank', v: 'Lokale Ordner als dauerhafte Referenzbibliothek für alle Chats, mit automatischem Abgleich.' },
        { href: '/tech-semantic-chunking.html', t: 'Semantisches Chunking', v: 'Wie Dokumente zerlegt werden, damit Bedeutung und Abschnittsangaben erhalten bleiben.' },
        { href: '/tech-hybrid-search.html', t: 'Hybridsuche und Re-Ranking', v: 'Vektorähnlichkeit kombiniert mit BM25-Stichwortsuche und Neusortierung.' },
        { href: '/tech-multimodal.html', t: 'Multimodale Dokumente', v: 'PDFs, Bilder und Scans über OCR und Bildmodelle.' },
        { href: '/tech-workspaces.html', t: 'Mehrere Workspaces und Chats', v: 'Getrennte Workspaces und Chat-Sitzungen mit automatischen Zusammenfassungen.' },
        { href: '/tech-voice.html', t: 'Sprach-Ein-/Ausgabe (STT/TTS)', v: 'Freihändige Nutzung mit lokaler Spracherkennung und Piper-Sprachausgabe offline.' },
        { href: '/tech-local-models.html', t: 'Lokale Modelle mit Ollama', v: 'Offene Modelle auf Ihrer GPU ausführen, ohne Cloud-Abhängigkeit.' },
        { href: '/tech-privacy.html', t: 'Datenschutz und Local-First-Architektur', v: 'Das Docker-basierte Design, das Ihre Daten auf Ihrem PC hält.' },
        { href: '/manual.html#folders', t: 'Chat-Ordner und Export', v: 'Einklappbare Ordner und Export nach Markdown, JSON, HTML oder TXT.' },
        { href: '/manual.html#languages', t: 'Sprach-Roadmap', v: 'Ein vierstufiger Internationalisierungsplan nach globalen Internetdemografien.' },
        { href: '/manual.html#telemetry', t: 'Hardware-Zustand und VRAM-Monitor', v: 'Live-GPU-Speicher, Container-Status, Chunk-Zähler und Schnellzugriff auf letzte Chats.' },
      ],
    },
    cta: { h2: 'Bereit, StarkLLM auszuprobieren?', text: 'Laden Sie die kostenlose, quelloffene Windows Research Beta herunter.', installer: 'Installer v2.0.0 herunterladen', all: 'Alle Downloads', manual: 'Handbuch lesen (EN)' },
  },
} as const;

export const toolSample = [
  { name: 'research_notes.pdf', size: 1048576, chunks: 42 },
  { name: 'financial_audit.docx', size: 524288, chunks: 18 },
];
