// Copy for the home page, EN and DE. German is a first draft and needs a native review before launch.
export const SETUP_URL = 'https://github.com/StarkChristian/StarkLLM/releases/download/v2.0.0/StarkLLM-v2.0.0-Setup.exe';
export const PORTABLE_URL = 'https://github.com/StarkChristian/StarkLLM/releases/download/v2.0.0/StarkLLM-v2.0.0-Portable.exe';
export const SETUP_SHA = 'e6b29e6b77788dfd85eaa1e3e96634f38c97f1d4ed993b6ff6057340d4a457b5';
export const PORTABLE_SHA = 'a0c8b569d554ee345802f832ece80fad01f4db378c126576ac6685be78aaeda9';

export const home = {
  en: {
    meta: {
      title: 'StarkLLM | 100% Private Local AI for Windows',
      description:
        'StarkLLM is a free, open-source, local-first AI assistant for Windows. Chat privately with your documents and Knowledge Base on your own machine.',
    },
    nav: { getBtn: 'Get v2.0.0' },
    hero: {
      eyebrow: 'Local-first AI for Windows · Research Beta',
      h1: ['Ask your files.', 'Nothing', 'leaves your PC.'],
      lede: 'StarkLLM indexes your documents on your own machine and answers with page-level citations, using Ollama models you run yourself.',
      cta1: 'Download for Windows',
      cta2: 'See how it works',
      meta: 'v2.0.0 · 82.3 MB · Apache 2.0 · free',
    },
    pipeline: [
      { k: 'Files', v: 'PDF, Word, text, code' },
      { k: 'Chunks', v: 'Split by meaning, not length' },
      { k: 'Hybrid search', v: 'BM25 + vector embeddings' },
      { k: 'Local model', v: 'Ollama on your GPU' },
      { k: 'Cited answer', v: 'Jump to the source page' },
    ],
    shot: { alt: 'StarkLLM chat interface answering from a local document with citations', caption: 'The StarkLLM desktop app, answering from local documents.' },
    features: {
      h2: "Built for people who can't upload their documents.",
      items: [
        { tag: 'Retrieval', title: 'Hybrid RAG with a cross-encoder re-ranker', text: 'Keyword and semantic search run together, then a TinyBERT cross-encoder re-ranks the passages that actually answer the question.', wide: true, art: 'bars' },
        { tag: 'Desktop', title: 'A real app window', text: 'Its own window with splash screen and tray menu. No browser tab.' },
        { tag: 'Tools', title: 'Local tools with a confirmation gate', text: 'Read-only tools such as search_local_kb and fetch_cited_chunk. Every call needs your confirmation and a single-use token.' },
        { tag: 'Themes', title: 'Eight themes, switched instantly', text: 'Midnight Indigo, OLED Pitch Black, Liquid Glass, Cyberpunk Rose, Matrix Emerald, Sunset Amber, Arctic Frost and Daylight Minimal.', wide: true, art: 'swatches' },
        { tag: 'Knowledge', title: 'Workspaces and a global knowledge base', text: 'Map Windows folders, keep projects isolated, and query the shared knowledge base from any chat.' },
        { tag: 'Code', title: 'Local Python sandbox', text: 'In-process execution with AST validation and timeout protection.' },
        { tag: 'API', title: 'Local OpenAI-compatible server', text: 'A standard /v1/chat/completions endpoint for Cursor, Claude Code and other tools.' },
      ],
    },
    compare: {
      h2: 'How StarkLLM compares',
      lede: 'An honest look at how StarkLLM fits into the local AI landscape next to other popular open solutions.',
      cols: ['Tool', 'Strength and limits', 'Best for'],
      rows: [
        { kind: 'Inference GUI', name: 'LM Studio', text: 'Superb for downloading GGUFs from Hugging Face and tuning GPU layer offloading. It lacks deep multi-document RAG, persistent workspace knowledge bases and safe code execution.', best: 'Testing raw GGUFs without document grounding.' },
        { kind: 'Basic RAG app', name: 'AnythingLLM', text: 'Popular for desktop RAG, but relies on naive chunking without cross-encoder reranking, which can cause retrieval hallucinations on dense technical documents. Runs inside a heavier web-style dashboard.', best: "Casual document chats where retrieval precision isn't mission-critical." },
        { kind: 'Minimalist chat', name: 'Jan.ai', text: 'A lightweight, zero-telemetry, open-source ChatGPT-style app. It lacks advanced hybrid RAG, cross-encoder reranking, in-process code sandboxing and multimodal document analysis.', best: 'Simple zero-telemetry chat without document workflows.' },
        { kind: 'This project', name: 'StarkLLM v2.0.0', text: 'Native Windows desktop app with hybrid RAG and TinyBERT cross-encoder reranking, a safe Python sandbox, a local OpenAI server (/v1) and zero-cloud privacy.', best: 'Developers, researchers and privacy-critical professionals who need verified accuracy.', us: true },
      ],
    },
    setup: {
      h2: 'Set up in about five minutes',
      intro: 'If Docker, Ollama and the models are already installed, setup takes about 5 minutes. First-time model and Docker image downloads depend on your bandwidth.',
      steps: [
        { title: 'Start Docker Desktop', text: 'Make sure it is running in your system tray.' },
        { title: 'Install Ollama and pull the models', text: 'In a terminal, run:', code: 'ollama pull qwen2.5:7b\nollama pull nomic-embed-text' },
        { title: 'Get the project and start its services', text: 'The desktop app only displays StarkLLM; it does not start the services. Download the project from GitHub, extract it, then run start.cmd (choose 1) or:', code: 'docker compose up --build -d' },
        { title: 'Run the StarkLLM installer', text: 'Download and run StarkLLM-v2.0.0-Setup.exe, or use the portable build. The wizard creates the desktop shortcuts.' },
        { title: 'Launch StarkLLM', text: 'Click the desktop shortcut. The window loads as soon as the services are running.' },
      ],
      notesTitle: 'Important notes',
      notes: [
        { k: 'First launch', v: 'It can take several minutes while Docker images download. After the containers are up, the backend may need another 1–2 minutes to finish starting.' },
        { k: 'Windows SmartScreen', v: 'If execution is blocked, choose More info, then Run anyway.' },
        { k: 'Hardware matters', v: 'Speed and answer quality depend heavily on a capable GPU (8 GB+ VRAM recommended).' },
      ],
    },
    privacy: {
      h2: 'The architecture of privacy',
      lede: 'StarkLLM is an offline alternative to cloud AI services. Your documents, legal briefs and research stay on your machine.',
      items: [
        { title: 'Local inference', text: 'Powered by Ollama, language models run on your own CPU or GPU. Designed to work fully offline once models are downloaded.' },
        { title: 'Local storage', text: 'Documents are chunked and embedded into a local ChromaDB vector store running in an isolated Docker container.' },
        { title: 'Zero telemetry', text: 'The Windows app has no telemetry and no analytics SDK. This website uses self-hosted Umami analytics; see the Datenschutz page.' },
      ],
    },
    download: {
      h2: 'Install it today.',
      lede: 'Free and open source under Apache 2.0.',
      reqTitle: 'Before you download',
      req: [
        ['OS', 'Windows 10/11 with WSL2 enabled'],
        ['Docker Desktop', 'installed and running'],
        ['Ollama', 'installed on the Windows host'],
        ['Hardware', '8 GB RAM minimum, 16 GB recommended, NVIDIA GPU with 8 GB+ VRAM recommended'],
      ],
      installer: 'Installer (.exe) · 82.3 MB',
      portable: 'Portable',
      all: 'All downloads',
      shaTitle: 'SHA-256',
      verify: 'Verify with PowerShell:',
    },
  },
  de: {
    meta: {
      title: 'StarkLLM | 100 % private lokale KI für Windows',
      description:
        'StarkLLM ist ein kostenloser, quelloffener, lokaler KI-Assistent für Windows. Chatten Sie privat mit Ihren Dokumenten und Ihrer Wissensdatenbank auf Ihrem eigenen Rechner.',
    },
    nav: { getBtn: 'v2.0.0 laden' },
    hero: {
      eyebrow: 'Lokale KI für Windows · Research Beta',
      h1: ['Fragen Sie Ihre Dateien.', 'Nichts', 'verlässt Ihren PC.'],
      lede: 'StarkLLM indexiert Ihre Dokumente auf Ihrem eigenen Rechner und antwortet mit seitengenauen Quellenangaben, mit Ollama-Modellen, die Sie selbst betreiben.',
      cta1: 'Für Windows herunterladen',
      cta2: 'So funktioniert es',
      meta: 'v2.0.0 · 82,3 MB · Apache 2.0 · kostenlos',
    },
    pipeline: [
      { k: 'Dateien', v: 'PDF, Word, Text, Code' },
      { k: 'Chunks', v: 'Nach Bedeutung geteilt, nicht nach Länge' },
      { k: 'Hybridsuche', v: 'BM25 + Vektor-Embeddings' },
      { k: 'Lokales Modell', v: 'Ollama auf Ihrer GPU' },
      { k: 'Belegte Antwort', v: 'Direkt zur Quellseite' },
    ],
    shot: { alt: 'StarkLLM-Chat beantwortet eine Frage aus einem lokalen Dokument mit Quellenangaben', caption: 'Die StarkLLM-Desktop-App beantwortet Fragen aus lokalen Dokumenten.' },
    features: {
      h2: 'Für alle, die ihre Dokumente nicht hochladen können.',
      items: [
        { tag: 'Suche', title: 'Hybrides RAG mit Cross-Encoder-Reranker', text: 'Stichwort- und semantische Suche laufen zusammen; ein TinyBERT-Cross-Encoder sortiert die Treffer neu und stellt die Passagen nach oben, die die Frage wirklich beantworten.', wide: true, art: 'bars' },
        { tag: 'Desktop', title: 'Ein echtes App-Fenster', text: 'Eigenes Fenster mit Startbildschirm und Tray-Menü. Kein Browser-Tab.' },
        { tag: 'Werkzeuge', title: 'Lokale Tools mit Bestätigung', text: 'Nur lesende Tools wie search_local_kb und fetch_cited_chunk. Jeder Aufruf braucht Ihre Bestätigung und ein Einmal-Token.' },
        { tag: 'Themes', title: 'Acht Themes, sofort umschaltbar', text: 'Midnight Indigo, OLED Pitch Black, Liquid Glass, Cyberpunk Rose, Matrix Emerald, Sunset Amber, Arctic Frost und Daylight Minimal.', wide: true, art: 'swatches' },
        { tag: 'Wissen', title: 'Workspaces und globale Wissensdatenbank', text: 'Windows-Ordner einbinden, Projekte getrennt halten und die gemeinsame Wissensdatenbank aus jedem Chat abfragen.' },
        { tag: 'Code', title: 'Lokale Python-Sandbox', text: 'Ausführung im Prozess mit AST-Prüfung und Zeitlimit.' },
        { tag: 'API', title: 'Lokaler OpenAI-kompatibler Server', text: 'Ein Standard-Endpunkt /v1/chat/completions für Cursor, Claude Code und andere Tools.' },
      ],
    },
    compare: {
      h2: 'StarkLLM im Vergleich',
      lede: 'Ein ehrlicher Blick darauf, wo StarkLLM neben anderen beliebten offenen Lösungen steht.',
      cols: ['Tool', 'Stärken und Grenzen', 'Am besten für'],
      rows: [
        { kind: 'Inferenz-GUI', name: 'LM Studio', text: 'Hervorragend zum Laden von GGUFs von Hugging Face und zum Feinjustieren der GPU-Auslagerung. Nicht enthalten sind tiefes RAG über mehrere Dokumente, dauerhafte Workspace-Wissensdatenbanken und sichere Code-Ausführung.', best: 'GGUF-Modelle ohne Dokumentbezug testen.' },
        { kind: 'Einfache RAG-App', name: 'AnythingLLM', text: 'Beliebt für Desktop-RAG, nutzt aber einfaches Chunking ohne Cross-Encoder-Reranking, was bei dichten technischen Dokumenten zu Fehlern in der Suche führen kann. Läuft in einem schwereren Web-Dashboard.', best: 'Lockere Dokument-Chats, bei denen Präzision nicht kritisch ist.' },
        { kind: 'Minimaler Chat', name: 'Jan.ai', text: 'Eine leichte, telemetriefreie Open-Source-App im ChatGPT-Stil. Nicht enthalten sind fortgeschrittenes Hybrid-RAG, Cross-Encoder-Reranking, eine Code-Sandbox im Prozess und multimodale Dokumentanalyse.', best: 'Einfacher telemetriefreier Chat ohne Dokument-Workflows.' },
        { kind: 'Dieses Projekt', name: 'StarkLLM v2.0.0', text: 'Native Windows-Desktop-App mit Hybrid-RAG und TinyBERT-Cross-Encoder-Reranking, sicherer Python-Sandbox, lokalem OpenAI-Server (/v1) und Datenschutz ohne Cloud.', best: 'Entwickler, Forschende und Fachleute mit hohen Datenschutzanforderungen, die nachprüfbare Genauigkeit brauchen.', us: true },
      ],
    },
    setup: {
      h2: 'In etwa fünf Minuten eingerichtet',
      intro: 'Sind Docker, Ollama und die Modelle bereits installiert, dauert die Einrichtung etwa 5 Minuten. Der erste Download von Modellen und Docker-Images hängt von Ihrer Bandbreite ab.',
      steps: [
        { title: 'Docker Desktop starten', text: 'Stellen Sie sicher, dass es im Infobereich läuft.' },
        { title: 'Ollama installieren und Modelle laden', text: 'Führen Sie im Terminal Folgendes aus:', code: 'ollama pull qwen2.5:7b\nollama pull nomic-embed-text' },
        { title: 'Projekt holen und Dienste starten', text: 'Die Desktop-App zeigt StarkLLM nur an; sie startet die Dienste nicht. Laden Sie das Projekt von GitHub herunter, entpacken Sie es und starten Sie start.cmd (Auswahl 1) oder führen Sie aus:', code: 'docker compose up --build -d' },
        { title: 'StarkLLM-Installer ausführen', text: 'StarkLLM-v2.0.0-Setup.exe herunterladen und starten, oder die portable Version nutzen. Der Assistent legt die Verknüpfungen an.' },
        { title: 'StarkLLM starten', text: 'Klicken Sie auf die Desktop-Verknüpfung. Das Fenster lädt, sobald die Dienste laufen.' },
      ],
      notesTitle: 'Wichtige Hinweise',
      notes: [
        { k: 'Erster Start', v: 'Er kann einige Minuten dauern, während Docker-Images geladen werden. Sobald die Container laufen, braucht das Backend eventuell noch 1–2 Minuten.' },
        { k: 'Windows SmartScreen', v: 'Wird die Ausführung blockiert, wählen Sie „Weitere Informationen“ und dann „Trotzdem ausführen“.' },
        { k: 'Hardware zählt', v: 'Geschwindigkeit und Antwortqualität hängen stark von einer leistungsfähigen GPU ab (8 GB+ VRAM empfohlen).' },
      ],
    },
    privacy: {
      h2: 'Die Architektur der Privatsphäre',
      lede: 'StarkLLM ist eine Offline-Alternative zu Cloud-KI-Diensten. Ihre Dokumente, Schriftsätze und Recherchen bleiben auf Ihrem Rechner.',
      items: [
        { title: 'Lokale Inferenz', text: 'Mit Ollama laufen Sprachmodelle auf Ihrer eigenen CPU oder GPU. Nach dem Download der Modelle ist der Betrieb vollständig offline möglich.' },
        { title: 'Lokaler Speicher', text: 'Dokumente werden in Chunks zerlegt und in einen lokalen ChromaDB-Vektorspeicher in einem isolierten Docker-Container eingebettet.' },
        { title: 'Keine Telemetrie', text: 'Die Windows-App enthält weder Telemetrie noch ein Analyse-SDK. Diese Website nutzt selbst gehostetes Umami; siehe Datenschutzerklärung.' },
      ],
    },
    download: {
      h2: 'Jetzt installieren.',
      lede: 'Kostenlos und quelloffen unter Apache 2.0.',
      reqTitle: 'Vor dem Download',
      req: [
        ['Betriebssystem', 'Windows 10/11 mit aktiviertem WSL2'],
        ['Docker Desktop', 'installiert und gestartet'],
        ['Ollama', 'auf dem Windows-Host installiert'],
        ['Hardware', 'mind. 8 GB RAM, empfohlen 16 GB, NVIDIA-GPU mit 8 GB+ VRAM empfohlen'],
      ],
      installer: 'Installer (.exe) · 82,3 MB',
      portable: 'Portable',
      all: 'Alle Downloads',
      shaTitle: 'SHA-256',
      verify: 'Prüfen mit PowerShell:',
    },
  },
} as const;
