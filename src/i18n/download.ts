// Copy for the download page, EN and DE. German is a first draft and needs a native review before launch.
export const GITHUB_URL = 'https://github.com/homomorphicprivacy/StarkLLM';

export const consoleStep = `============================================
          StarkLLM Control Panel
          Windows Research Beta
============================================
 1.  Start StarkLLM
 2.  Stop  StarkLLM
 3.  Exit
Enter choice [1/2/3]: 1`;

export const toolStep = `tool_call: search_local_kb
// Human approval gate
{
  "query": "security policy",
  "top_k": 3
}
Approved`;

export const download = {
  en: {
    meta: { title: 'Download | StarkLLM' },
    hero: { eyebrow: 'Download', h1: 'Download StarkLLM', lede: 'Get started with the Windows Research Beta.' },
    helpCallout: { h: 'Installation not working?', text: 'StarkLLM is made of four parts (Docker Desktop, Ollama, the project folder and the desktop window). The Help page has a checklist with a test for every step and fixes for the 23 most common problems.', link: 'Open Help & Troubleshooting' },
    release: {
      h2: 'Release package',
      facts: [
        ['Version', 'v2.0.0 (Native Desktop)'],
        ['License', 'Apache 2.0 (open source)'],
        ['Installer size', '82.3 MB (82,251,796 bytes)'],
        ['Portable app size', '81.9 MB (81,931,492 bytes)'],
      ],
      installer: 'Download v2.0.0 installer (.exe)',
      portable: 'Portable (.exe)',
      github: 'GitHub',
      shaH: 'SHA-256 checksums',
      shaLede: 'To verify file integrity before you run it, compare the SHA-256 hash of your download:',
      setupLabel: 'StarkLLM-v2.0.0-Setup.exe (Windows installer)',
      portableLabel: 'StarkLLM-v2.0.0-Portable.exe (portable executable)',
      verify: 'Verify in PowerShell:',
    },
    setup: {
      h2: 'Setup steps',
      intro: 'If Docker, Ollama and the models are already installed, setup takes about 5 minutes. First-time model and Docker image downloads depend on your bandwidth.',
      steps: [
        { t: 'Start Docker Desktop', v: 'Make sure Docker Desktop is running in your system tray.' },
        { t: 'Install Ollama and pull the models', v: 'In a terminal, run:', code: 'ollama pull qwen2.5:7b\nollama pull nomic-embed-text', after: 'For 8 GB RAM laptops use ollama pull qwen2.5:3b. For power workstations use ollama pull qwen2.5:14b.' },
        { t: 'Get the StarkLLM project and start its services', v: 'The desktop app only displays StarkLLM; it does not start the services itself. Download the project from GitHub (Code, then Download ZIP, or git clone), extract it, open a terminal in that folder and run start.cmd and choose 1 (Start StarkLLM), or run:', code: 'docker compose up --build -d', after: 'The first start builds the containers and can take a few minutes.' },
        { t: 'Run the StarkLLM installer', v: 'Download and run StarkLLM-v2.0.0-Setup.exe, or use the zero-install portable executable. The installer creates desktop shortcuts.' },
        { t: 'Launch the desktop app', v: 'Click the StarkLLM desktop shortcut. Once the services from the earlier step are running, StarkLLM opens in its own application window, with no browser tabs or URL bar. If the services are not running, the window stays on "Connecting to local engine…".' },
      ],
    },
    prereq: {
      h2: 'Prerequisites checklist',
      lede: 'Before you start StarkLLM, confirm that all of the following are in place:',
      items: [
        ['OS', 'Windows 10 or 11 with WSL2 enabled.'],
        ['Docker Desktop', 'Installed and running (visible in the system tray). Without it, containers cannot start.'],
        ['Ollama', 'Installed natively on Windows and running. Download from ollama.com.'],
        ['Recommended models', 'In a terminal: ollama pull qwen2.5:7b and ollama pull nomic-embed-text.'],
        ['Hardware', 'Minimum 8 GB RAM (3B models), 16 GB recommended (7B models). An NVIDIA GPU with 8 GB+ VRAM is strongly recommended. The manual has hardware tier guidance.'],
        ['Supported formats', 'PDF, DOCX, TXT, Markdown (.md), CSV, JSON, HTML and images (PNG, JPG with OCR).'],
      ],
    },
    smart: {
      h2: 'Windows SmartScreen and execution notice',
      text: 'Files downloaded from the web carry a Mark of the Web (MOTW) flag, and the StarkLLM installer and portable app are not code-signed, so Windows SmartScreen may warn when you run them. Click More info, then Run anyway. For the launcher scripts you can also run unblock.ps1 in PowerShell to clear the flag locally.',
      optsH: 'Alternative launch options',
      optsLede: 'These apply to the portable folder or ZIP that includes the launcher scripts.',
      opts: [
        { t: 'Option A: run start.exe from a terminal', v: 'start.exe is a standalone launcher. It checks Docker Desktop and Ollama, builds containers and opens your browser.', ol: ['In File Explorer inside the extracted folder, click the address bar, type cmd and press Enter.', 'Type start.exe and press Enter. If SmartScreen warns you, click More info, then Run anyway.'] },
        { t: 'Option B: run start.cmd', v: 'To run a command script directly, open a terminal in the extracted folder and run start.cmd (in PowerShell: .\\start.cmd).' },
        { t: 'Option C: Docker Compose directly', v: 'To use the standard Docker CLI:', code: 'docker compose up --build -d' },
        { t: 'Option D: run unblock.ps1', v: 'If execution policies block scripts, open PowerShell in the extracted folder and run:', code: 'powershell -ExecutionPolicy Bypass -File unblock.ps1', after: 'This removes SmartScreen flags only from files inside the current StarkLLM folder. It does not change your global Windows security settings. Afterwards, run start.exe or start.cmd.' },
      ],
    },
    notes: { h: 'Important notes', items: ['StarkLLM is free and open source (Apache 2.0).', 'Licensed under Apache 2.0, free for personal, research and commercial use.', 'Provided "as-is" without warranty or liability of any kind.'] },
    walk: {
      h2: 'Application walkthrough',
      lede: 'A step-by-step look at what to expect when you run StarkLLM on your machine.',
      steps: [
        { t: 'Step 1: Control panel launcher', v: 'Run start.exe or start.cmd from a terminal to build the Docker containers and launch StarkLLM.', kind: 'console' },
        { t: 'Step 2: Knowledge Base and workspaces', v: 'Map local folders to index documents into a persistent Knowledge Base layer.', kind: 'kb', alt: 'StarkLLM knowledge base configuration' },
        { t: 'Step 3: Document-grounded chat', v: 'Ask questions grounded in indexed documents, with source file indicators.', kind: 'chat', alt: 'StarkLLM document-grounded chat' },
        { t: 'Step 4: Continuous multi-turn RAG', v: 'Explore details across several turns, with honest page citations.', kind: 'chat2', alt: 'StarkLLM multi-turn conversation' },
        { t: 'Step 5: Safe local tools', v: 'Review, edit and approve in-process model tool calls directly in the chat.', kind: 'tool' },
        { t: 'Step 6: Eight handcrafted themes', v: 'Hot-swap between OLED Pitch Black, Cyberpunk Rose, Liquid Glass and more.', kind: 'settings', alt: 'StarkLLM settings and theme gallery' },
      ],
    },
    faq: {
      h2: 'Frequently asked questions',
      items: [
        ['Does my data leave my computer?', 'StarkLLM is designed to keep your data on your machine. Documents are stored in a local ChromaDB container, and AI inference runs through Ollama on your host. During normal local operation, no data is transmitted externally.'],
        ['Is StarkLLM free?', 'Yes. It is free and open source under Apache 2.0 for personal, research and commercial use. No subscriptions, telemetry or hidden tiers. Provided "as is" with no warranty.'],
        ['Why can answers be slow?', 'Speed depends on your hardware. Without a dedicated GPU, Ollama falls back to CPU inference, which is much slower. A dedicated NVIDIA GPU with 8 GB+ VRAM generates much faster.'],
        ['Why does Windows SmartScreen warn about downloaded launchers?', 'Windows attaches a Mark of the Web attribute to files downloaded from the internet. When you run start.exe, click More info, then Run anyway. Alternatively run start.cmd from a terminal, or run unblock.ps1 to remove the flag locally.'],
        ['What hardware do I need?', 'Minimum 8 GB RAM for 3B models, 16 GB RAM for 7B models. For power-user models (14B to 32B), 24 GB VRAM or 64 GB system RAM is recommended.'],
        ['What is the difference between normal chat and document chat?', 'Normal chat relies only on the model\'s pre-trained knowledge. Document chat uses RAG: it searches your uploaded documents first, feeds the relevant chunks to the model, and answers with verifiable citations.'],
        ['What is the difference between workspace documents and the Knowledge Base?', 'Workspace documents are isolated to one project. The Knowledge Base is a persistent, global folder on your machine that any chat can reference.'],
        ['The desktop window stays on "Connecting to local engine…". What now?', 'The desktop app only displays StarkLLM; the services must already be running. Check that Docker Desktop is running, start StarkLLM from the project folder with start.cmd (or docker compose up --build -d), and make sure Ollama is running. The window loads by itself once the services answer.'],
        ['What if the app opens but chat does not connect?', 'Make sure Docker Desktop and Ollama are running, and that you pulled the default models (ollama pull qwen2.5:7b and ollama pull nomic-embed-text). The backend container talks to Ollama on your host via host.docker.internal:11434. If needed, restart the containers with docker compose down, then docker compose up --build -d.'],
        ['Can I inspect the source code?', 'Yes. StarkLLM is fully open source on GitHub at homomorphicprivacy/StarkLLM under the Apache 2.0 license.'],
        ['Where can I send feedback or contribute?', 'We welcome feedback. Email info@starkllm.com or open an issue on the GitHub repository.'],
      ],
    },
    contribute: { h2: 'Contribute and suggest improvements', text: 'StarkLLM is an open, evolving project. If you hit a bug, have a feature idea or want to inspect the source:', repo: 'Browse the source, inspect the launchers and open issues.', mail: 'Email' },
  },
  de: {
    meta: { title: 'Download | StarkLLM', description: 'StarkLLM v2.0.0 für Windows herunterladen: Installer, portable Version, SHA-256-Prüfsummen, Einrichtung, Voraussetzungen und FAQ.' },
    hero: { eyebrow: 'Download', h1: 'StarkLLM herunterladen', lede: 'Starten Sie mit der Windows Research Beta.' },
    helpCallout: { h: 'Die Installation klappt nicht?', text: 'StarkLLM besteht aus vier Teilen (Docker Desktop, Ollama, Projektordner und Desktop-Fenster). Die Hilfe-Seite hat eine Checkliste mit Test pro Schritt und Lösungen für die 23 häufigsten Probleme.', link: 'Hilfe & Problemlösung öffnen' },
    release: {
      h2: 'Release-Paket',
      facts: [
        ['Version', 'v2.0.0 (Native Desktop)'],
        ['Lizenz', 'Apache 2.0 (Open Source)'],
        ['Größe des Installers', '82,3 MB (82.251.796 Bytes)'],
        ['Größe der portablen App', '81,9 MB (81.931.492 Bytes)'],
      ],
      installer: 'Installer v2.0.0 herunterladen (.exe)',
      portable: 'Portable (.exe)',
      github: 'GitHub',
      shaH: 'SHA-256-Prüfsummen',
      shaLede: 'Um die Integrität vor der Ausführung zu prüfen, vergleichen Sie den SHA-256-Hash Ihres Downloads:',
      setupLabel: 'StarkLLM-v2.0.0-Setup.exe (Windows-Installer)',
      portableLabel: 'StarkLLM-v2.0.0-Portable.exe (portable Programmdatei)',
      verify: 'Prüfen in PowerShell:',
    },
    setup: {
      h2: 'Einrichtung',
      intro: 'Sind Docker, Ollama und die Modelle bereits installiert, dauert die Einrichtung etwa 5 Minuten. Der erste Download von Modellen und Docker-Images hängt von Ihrer Bandbreite ab.',
      steps: [
        { t: 'Docker Desktop starten', v: 'Stellen Sie sicher, dass Docker Desktop im Infobereich läuft.' },
        { t: 'Ollama installieren und Modelle laden', v: 'Führen Sie im Terminal Folgendes aus:', code: 'ollama pull qwen2.5:7b\nollama pull nomic-embed-text', after: 'Für Laptops mit 8 GB RAM: ollama pull qwen2.5:3b. Für leistungsstarke Workstations: ollama pull qwen2.5:14b.' },
        { t: 'StarkLLM-Projekt holen und Dienste starten', v: 'Die Desktop-App zeigt StarkLLM nur an; sie startet die Dienste nicht selbst. Laden Sie das Projekt von GitHub herunter (Code, dann Download ZIP, oder per git clone), entpacken Sie es, öffnen Sie in diesem Ordner ein Terminal. Starten Sie start.cmd und wählen Sie 1 (Start StarkLLM) oder führen Sie diesen Befehl aus:', code: 'docker compose up --build -d', after: 'Beim ersten Start werden die Container gebaut, das kann einige Minuten dauern.' },
        { t: 'StarkLLM-Installer ausführen', v: 'Laden Sie StarkLLM-v2.0.0-Setup.exe herunter und starten Sie sie, oder nutzen Sie die portable Programmdatei ohne Installation. Der Installer legt Desktop-Verknüpfungen an.' },
        { t: 'Desktop-App starten', v: 'Klicken Sie auf die StarkLLM-Verknüpfung. Laufen die Dienste aus dem vorherigen Schritt, öffnet sich StarkLLM in einem eigenen Anwendungsfenster, ohne Browser-Tabs und Adressleiste. Laufen die Dienste nicht, bleibt das Fenster bei „Connecting to local engine…“ stehen.' },
      ],
    },
    prereq: {
      h2: 'Checkliste der Voraussetzungen',
      lede: 'Bevor Sie StarkLLM starten, prüfen Sie, ob alles Folgende vorhanden ist:',
      items: [
        ['Betriebssystem', 'Windows 10 oder 11 mit aktiviertem WSL2.'],
        ['Docker Desktop', 'Installiert und gestartet (im Infobereich sichtbar). Ohne Docker können keine Container starten.'],
        ['Ollama', 'Nativ unter Windows installiert und gestartet. Download auf ollama.com.'],
        ['Empfohlene Modelle', 'Im Terminal: ollama pull qwen2.5:7b und ollama pull nomic-embed-text.'],
        ['Hardware', 'Mindestens 8 GB RAM (3B-Modelle), empfohlen 16 GB (7B-Modelle). Eine NVIDIA-GPU mit 8 GB+ VRAM wird dringend empfohlen. Das Handbuch enthält Hinweise zu Hardwarestufen.'],
        ['Unterstützte Formate', 'PDF, DOCX, TXT, Markdown (.md), CSV, JSON, HTML und Bilder (PNG, JPG mit OCR).'],
      ],
    },
    smart: {
      h2: 'Windows SmartScreen und Ausführungshinweis',
      text: 'Aus dem Web geladene Dateien tragen die Markierung „Mark of the Web“ (MOTW), und der StarkLLM-Installer sowie die portable App sind nicht digital signiert, daher kann Windows SmartScreen beim Start warnen. Klicken Sie auf „Weitere Informationen“ und dann auf „Trotzdem ausführen“. Bei den Start-Skripten können Sie zusätzlich unblock.ps1 in PowerShell ausführen, um die Markierung lokal zu entfernen.',
      optsH: 'Alternative Startmöglichkeiten',
      optsLede: 'Diese gelten für den portablen Ordner oder das ZIP mit den Start-Skripten.',
      opts: [
        { t: 'Variante A: start.exe im Terminal ausführen', v: 'start.exe ist ein eigenständiger Starter. Er prüft Docker Desktop und Ollama, baut Container und öffnet Ihren Browser.', ol: ['Klicken Sie im Explorer im entpackten Ordner in die Adressleiste, tippen Sie cmd und drücken Sie Enter.', 'Tippen Sie start.exe und drücken Sie Enter. Warnt SmartScreen, klicken Sie auf „Weitere Informationen“ und dann auf „Trotzdem ausführen“.'] },
        { t: 'Variante B: start.cmd ausführen', v: 'Um ein Befehlsskript direkt zu starten, öffnen Sie ein Terminal im entpackten Ordner und führen start.cmd aus (in PowerShell: .\\start.cmd).' },
        { t: 'Variante C: Docker Compose direkt', v: 'Mit der Standard-Docker-CLI:', code: 'docker compose up --build -d' },
        { t: 'Variante D: unblock.ps1 ausführen', v: 'Blockieren Ausführungsrichtlinien Skripte, öffnen Sie PowerShell im entpackten Ordner und führen aus:', code: 'powershell -ExecutionPolicy Bypass -File unblock.ps1', after: 'Das entfernt SmartScreen-Markierungen nur von Dateien im aktuellen StarkLLM-Ordner. Ihre globalen Windows-Sicherheitseinstellungen bleiben unverändert. Danach führen Sie start.exe oder start.cmd aus.' },
      ],
    },
    notes: { h: 'Wichtige Hinweise', items: ['StarkLLM ist kostenlos und quelloffen (Apache 2.0).', 'Lizenziert unter Apache 2.0, kostenlos für private, wissenschaftliche und kommerzielle Nutzung.', 'Bereitgestellt „wie besehen“ ohne jegliche Gewährleistung oder Haftung.'] },
    walk: {
      h2: 'Rundgang durch die Anwendung',
      lede: 'Ein Blick Schritt für Schritt darauf, was Sie beim Betrieb von StarkLLM auf Ihrem Rechner erwartet.',
      steps: [
        { t: 'Schritt 1: Startpanel', v: 'Führen Sie start.exe oder start.cmd im Terminal aus, um die Docker-Container zu bauen und StarkLLM zu starten.', kind: 'console' },
        { t: 'Schritt 2: Wissensdatenbank und Workspaces', v: 'Binden Sie lokale Ordner ein, um Dokumente in eine dauerhafte Wissensdatenbank zu indexieren.', kind: 'kb', alt: 'StarkLLM-Konfiguration der Wissensdatenbank' },
        { t: 'Schritt 3: Dokumentbasierter Chat', v: 'Stellen Sie Fragen zu indexierten Dokumenten, mit Hinweisen auf die Quelldateien.', kind: 'chat', alt: 'StarkLLM-Chat mit Dokumentbezug' },
        { t: 'Schritt 4: Fortlaufendes RAG über mehrere Runden', v: 'Vertiefen Sie Details über mehrere Runden, mit ehrlichen Seitenangaben.', kind: 'chat2', alt: 'StarkLLM-Unterhaltung über mehrere Runden' },
        { t: 'Schritt 5: Sichere lokale Tools', v: 'Prüfen, ändern und bestätigen Sie Tool-Aufrufe des Modells direkt im Chat.', kind: 'tool' },
        { t: 'Schritt 6: Acht handgefertigte Themes', v: 'Wechseln Sie sofort zwischen OLED Pitch Black, Cyberpunk Rose, Liquid Glass und mehr.', kind: 'settings', alt: 'StarkLLM-Einstellungen und Theme-Galerie' },
      ],
    },
    faq: {
      h2: 'Häufige Fragen',
      items: [
        ['Verlassen meine Daten meinen Computer?', 'StarkLLM ist darauf ausgelegt, Ihre Daten auf Ihrem Rechner zu halten. Dokumente liegen in einem lokalen ChromaDB-Container, die KI-Inferenz läuft über Ollama auf Ihrem Host. Im normalen lokalen Betrieb werden keine Daten nach außen übertragen.'],
        ['Ist StarkLLM kostenlos?', 'Ja. Es ist kostenlos und quelloffen unter Apache 2.0 für private, wissenschaftliche und kommerzielle Nutzung. Keine Abos, keine Telemetrie, keine versteckten Stufen. Bereitgestellt „wie besehen“ ohne Gewährleistung.'],
        ['Warum können Antworten langsam sein?', 'Das Tempo hängt von Ihrer Hardware ab. Ohne dedizierte GPU nutzt Ollama die CPU, was deutlich langsamer ist. Eine dedizierte NVIDIA-GPU mit 8 GB+ VRAM erzeugt Text deutlich schneller.'],
        ['Warum warnt Windows SmartScreen vor heruntergeladenen Startern?', 'Windows versieht aus dem Internet geladene Dateien mit der Markierung „Mark of the Web“. Beim Start von start.exe klicken Sie auf „Weitere Informationen“ und dann auf „Trotzdem ausführen“. Alternativ führen Sie start.cmd im Terminal aus oder unblock.ps1, um die Markierung lokal zu entfernen.'],
        ['Welche Hardware brauche ich?', 'Mindestens 8 GB RAM für 3B-Modelle, 16 GB RAM für 7B-Modelle. Für große Modelle (14B bis 32B) werden 24 GB VRAM oder 64 GB Arbeitsspeicher empfohlen.'],
        ['Was ist der Unterschied zwischen normalem Chat und Dokument-Chat?', 'Der normale Chat nutzt nur das vortrainierte Wissen des Modells. Der Dokument-Chat nutzt RAG: Er durchsucht zuerst Ihre hochgeladenen Dokumente, gibt die relevanten Chunks an das Modell und antwortet mit überprüfbaren Quellenangaben.'],
        ['Was ist der Unterschied zwischen Workspace-Dokumenten und Wissensdatenbank?', 'Workspace-Dokumente sind auf ein Projekt beschränkt. Die Wissensdatenbank ist ein dauerhafter, globaler Ordner auf Ihrem Rechner, auf den jeder Chat zugreifen kann.'],
        ['Das Desktop-Fenster bleibt bei „Connecting to local engine…“ stehen. Was tun?', 'Die Desktop-App zeigt StarkLLM nur an; die Dienste müssen bereits laufen. Prüfen Sie, ob Docker Desktop läuft, starten Sie StarkLLM im Projektordner mit start.cmd (oder docker compose up --build -d) und stellen Sie sicher, dass Ollama läuft. Das Fenster lädt von selbst, sobald die Dienste antworten.'],
        ['Was, wenn die App startet, aber der Chat keine Verbindung hat?', 'Stellen Sie sicher, dass Docker Desktop und Ollama laufen und dass Sie die Standardmodelle geladen haben (ollama pull qwen2.5:7b und ollama pull nomic-embed-text). Der Backend-Container erreicht Ollama auf Ihrem Host über host.docker.internal:11434. Bei Bedarf starten Sie die Container mit docker compose down und anschließend docker compose up --build -d neu.'],
        ['Kann ich den Quellcode einsehen?', 'Ja. StarkLLM ist vollständig quelloffen auf GitHub unter homomorphicprivacy/StarkLLM, lizenziert unter Apache 2.0.'],
        ['Wohin kann ich Feedback senden oder beitragen?', 'Wir freuen uns über Rückmeldungen. Schreiben Sie an info@starkllm.com oder eröffnen Sie ein Issue im GitHub-Repository.'],
      ],
    },
    contribute: { h2: 'Mitwirken und Verbesserungen vorschlagen', text: 'StarkLLM ist ein offenes, sich ständig weiterentwickelndes Projekt. Wenn Sie einen Fehler finden, eine Idee haben oder den Quellcode einsehen möchten:', repo: 'Quellcode ansehen, Starter prüfen und Issues eröffnen.', mail: 'E-Mail' },
  },
} as const;
