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
    helpCallout: { h: 'Installation not working?', text: 'StarkLLM needs Docker Desktop and Ollama on your PC; since v2.0.1 the app starts both and its engine by itself. The Help page has a checklist with a test for every step and fixes for the 24 most common problems.', link: 'Open Help & Troubleshooting' },
    release: {
      h2: 'Release package',
      facts: [
        ['Version', 'v2.0.1 (Native Desktop, starts its own engine)'],
        ['License', 'Apache 2.0 (open source)'],
        ['Installer size', '199.1 MB (199,131,640 bytes, includes the engine)'],
        ['Portable app size', '198.8 MB (198,811,377 bytes)'],
      ],
      installer: 'Download v2.0.1 installer (.exe)',
      portable: 'Portable (.exe)',
      github: 'GitHub',
      shaH: 'SHA-256 checksums',
      shaLede: 'To verify file integrity before you run it, compare the SHA-256 hash of your download:',
      setupLabel: 'StarkLLM-v2.0.1-Setup.exe (Windows installer)',
      portableLabel: 'StarkLLM-v2.0.1-Portable.exe (portable executable)',
      verify: 'Verify in PowerShell:',
    },
    setup: {
      h2: 'Setup steps',
      intro: 'Two programs are installed once, then StarkLLM does the rest. The first start downloads about 5 GB and builds the engine (10 to 20 minutes); later starts take seconds.',
      steps: [
        { t: 'Install Docker Desktop', v: 'Install Docker Desktop (with WSL2) from docker.com, start it once and finish its setup. It may ask you to restart the PC.' },
        { t: 'Install Ollama', v: 'Install Ollama from ollama.com. You do not need to pull models by hand: StarkLLM downloads qwen2.5:7b and nomic-embed-text on its first start.' },
        { t: 'Run the StarkLLM installer', v: 'Download and run StarkLLM-v2.0.1-Setup.exe, or use the portable executable. The installer creates desktop shortcuts.' },
        { t: 'Start StarkLLM and wait for the first start', v: 'Click the StarkLLM shortcut. The app starts Docker Desktop and Ollama, downloads the models, builds its engine and shows the progress, then opens StarkLLM in its own window. If something is missing, the window says what and how to fix it (log: %APPDATA%\\StarkLLM\\engine.log).' },
        { t: 'Create your account', v: 'Register the first account; it is the administrator of this installation (backup and restore). Then create a workspace and upload a document.' },
      ],
    },
    prereq: {
      h2: 'Prerequisites checklist',
      lede: 'Before you start StarkLLM, confirm that all of the following are in place:',
      items: [
        ['OS', 'Windows 10 or 11 with WSL2 enabled.'],
        ['Docker Desktop', 'Installed once (StarkLLM starts it). Without it, the engine cannot run.'],
        ['Ollama', 'Installed natively on Windows (StarkLLM starts it). Download from ollama.com.'],
        ['Models and disk', 'Downloaded automatically on the first start (about 5 GB). Keep at least 15 GB of free disk space.'],
        ['Hardware', 'Minimum 8 GB RAM (3B models), 16 GB recommended (7B models). An NVIDIA GPU with 8 GB+ VRAM is strongly recommended. The manual has hardware tier guidance.'],
        ['Supported formats', 'PDF, DOCX (with tables), TXT, Markdown, CSV, XLSX, JSON, XML, logs, HTML and images (PNG, JPG with OCR).'],
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
        { t: 'Step 1: Start-up', v: 'StarkLLM starts Docker Desktop, Ollama and its engine and shows each step until the app opens. Developers can also start the engine from the project folder with start.exe or start.cmd (shown here).', kind: 'console' },
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
        ['The window says "StarkLLM could not start". What now?', 'Since v2.0.1 the app starts Docker Desktop, Ollama and its engine itself. When a step fails, the window lists what is missing (for example Docker Desktop not installed, a busy port, or an engine error with its last log lines) and has a Retry button. The full log is in %APPDATA%\\StarkLLM\\engine.log. On v2.0.0 the window only waited on "Connecting to local engine…"; please install v2.0.1.'],
        ['What if the app opens but chat does not connect?', 'The chat needs Ollama. If the window said "StarkLLM is running without its AI runtime", install or start Ollama and press Retry; StarkLLM then downloads the models (qwen2.5:7b and nomic-embed-text). The engine talks to Ollama on your PC via host.docker.internal:11434.'],
        ['Can I inspect the source code?', 'Yes. StarkLLM is fully open source on GitHub at homomorphicprivacy/StarkLLM under the Apache 2.0 license.'],
        ['Where can I send feedback or contribute?', 'We welcome feedback. Email info@starkllm.com or open an issue on the GitHub repository.'],
      ],
    },
    contribute: { h2: 'Contribute and suggest improvements', text: 'StarkLLM is an open, evolving project. If you hit a bug, have a feature idea or want to inspect the source:', repo: 'Browse the source, inspect the launchers and open issues.', mail: 'Email' },
  },
  de: {
    meta: { title: 'Download | StarkLLM', description: 'StarkLLM v2.0.1 für Windows herunterladen: Installer, portable Version, SHA-256-Prüfsummen, Einrichtung, Voraussetzungen und FAQ.' },
    hero: { eyebrow: 'Download', h1: 'StarkLLM herunterladen', lede: 'Starten Sie mit der Windows Research Beta.' },
    helpCallout: { h: 'Die Installation klappt nicht?', text: 'StarkLLM braucht Docker Desktop und Ollama auf Ihrem PC; seit v2.0.1 startet die App beide und ihre Engine selbst. Die Hilfe-Seite hat eine Checkliste mit Test pro Schritt und Lösungen für die 24 häufigsten Probleme.', link: 'Hilfe & Problemlösung öffnen' },
    release: {
      h2: 'Release-Paket',
      facts: [
        ['Version', 'v2.0.1 (Native Desktop, startet seine Engine selbst)'],
        ['Lizenz', 'Apache 2.0 (Open Source)'],
        ['Größe des Installers', '199,1 MB (199.131.640 Bytes, mit Engine)'],
        ['Größe der portablen App', '198,8 MB (198.811.377 Bytes)'],
      ],
      installer: 'Installer v2.0.1 herunterladen (.exe)',
      portable: 'Portable (.exe)',
      github: 'GitHub',
      shaH: 'SHA-256-Prüfsummen',
      shaLede: 'Um die Integrität vor der Ausführung zu prüfen, vergleichen Sie den SHA-256-Hash Ihres Downloads:',
      setupLabel: 'StarkLLM-v2.0.1-Setup.exe (Windows-Installer)',
      portableLabel: 'StarkLLM-v2.0.1-Portable.exe (portable Programmdatei)',
      verify: 'Prüfen in PowerShell:',
    },
    setup: {
      h2: 'Einrichtung',
      intro: 'Zwei Programme installieren Sie einmal, den Rest erledigt StarkLLM. Der erste Start lädt etwa 5 GB und baut die Engine (10 bis 20 Minuten); spätere Starts dauern Sekunden.',
      steps: [
        { t: 'Docker Desktop installieren', v: 'Installieren Sie Docker Desktop (mit WSL2) von docker.com, starten Sie es einmal und schließen Sie die Einrichtung ab. Eventuell verlangt es einen Neustart.' },
        { t: 'Ollama installieren', v: 'Installieren Sie Ollama von ollama.com. Modelle müssen Sie nicht von Hand laden: StarkLLM lädt qwen2.5:7b und nomic-embed-text beim ersten Start.' },
        { t: 'StarkLLM-Installer ausführen', v: 'Laden Sie StarkLLM-v2.0.1-Setup.exe herunter und starten Sie sie, oder nutzen Sie die portable Programmdatei. Der Installer legt Desktop-Verknüpfungen an.' },
        { t: 'StarkLLM starten und den ersten Start abwarten', v: 'Klicken Sie auf die StarkLLM-Verknüpfung. Die App startet Docker Desktop und Ollama, lädt die Modelle, baut ihre Engine, zeigt den Fortschritt und öffnet StarkLLM dann im eigenen Fenster. Fehlt etwas, sagt das Fenster was und wie Sie es beheben (Protokoll: %APPDATA%\\StarkLLM\\engine.log).' },
        { t: 'Konto anlegen', v: 'Registrieren Sie das erste Konto; es ist der Administrator dieser Installation (Backup und Wiederherstellung). Legen Sie dann einen Workspace an und laden Sie ein Dokument hoch.' },
      ],
    },
    prereq: {
      h2: 'Checkliste der Voraussetzungen',
      lede: 'Bevor Sie StarkLLM starten, prüfen Sie, ob alles Folgende vorhanden ist:',
      items: [
        ['Betriebssystem', 'Windows 10 oder 11 mit aktiviertem WSL2.'],
        ['Docker Desktop', 'Einmal installiert (StarkLLM startet es). Ohne Docker kann die Engine nicht laufen.'],
        ['Ollama', 'Nativ unter Windows installiert (StarkLLM startet es). Download auf ollama.com.'],
        ['Modelle und Speicherplatz', 'Werden beim ersten Start automatisch geladen (etwa 5 GB). Halten Sie mindestens 15 GB freien Speicherplatz bereit.'],
        ['Hardware', 'Mindestens 8 GB RAM (3B-Modelle), empfohlen 16 GB (7B-Modelle). Eine NVIDIA-GPU mit 8 GB+ VRAM wird dringend empfohlen. Das Handbuch enthält Hinweise zu Hardwarestufen.'],
        ['Unterstützte Formate', 'PDF, DOCX (mit Tabellen), TXT, Markdown, CSV, XLSX, JSON, XML, Logs, HTML und Bilder (PNG, JPG mit OCR).'],
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
        { t: 'Schritt 1: Start', v: 'StarkLLM startet Docker Desktop, Ollama und seine Engine und zeigt jeden Schritt, bis die App öffnet. Entwickler können die Engine auch im Projektordner mit start.exe oder start.cmd starten (hier gezeigt).', kind: 'console' },
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
        ['Das Fenster zeigt „StarkLLM could not start“. Was tun?', 'Seit v2.0.1 startet die App Docker Desktop, Ollama und ihre Engine selbst. Scheitert ein Schritt, listet das Fenster auf, was fehlt (zum Beispiel Docker Desktop nicht installiert, ein belegter Port oder ein Engine-Fehler mit den letzten Protokollzeilen), und bietet Retry an. Das vollständige Protokoll liegt in %APPDATA%\\StarkLLM\\engine.log. Unter v2.0.0 wartete das Fenster nur bei „Connecting to local engine…“; bitte installieren Sie v2.0.1.'],
        ['Was, wenn die App startet, aber der Chat keine Verbindung hat?', 'Der Chat braucht Ollama. Zeigte das Fenster „StarkLLM is running without its AI runtime“, installieren oder starten Sie Ollama und klicken auf Retry; StarkLLM lädt dann die Modelle (qwen2.5:7b und nomic-embed-text). Die Engine erreicht Ollama auf Ihrem PC über host.docker.internal:11434.'],
        ['Kann ich den Quellcode einsehen?', 'Ja. StarkLLM ist vollständig quelloffen auf GitHub unter homomorphicprivacy/StarkLLM, lizenziert unter Apache 2.0.'],
        ['Wohin kann ich Feedback senden oder beitragen?', 'Wir freuen uns über Rückmeldungen. Schreiben Sie an info@starkllm.com oder eröffnen Sie ein Issue im GitHub-Repository.'],
      ],
    },
    contribute: { h2: 'Mitwirken und Verbesserungen vorschlagen', text: 'StarkLLM ist ein offenes, sich ständig weiterentwickelndes Projekt. Wenn Sie einen Fehler finden, eine Idee haben oder den Quellcode einsehen möchten:', repo: 'Quellcode ansehen, Starter prüfen und Issues eröffnen.', mail: 'E-Mail' },
  },
} as const;
