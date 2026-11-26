import { byLang, type Lang } from './ui';
// Copy for the download page, EN and DE. German is a first draft and needs a native review before launch.
import { V, SIZE_MB, RELEASE } from '../data/release';

// Sizes come from the release itself, so they cannot go stale (2.0.11 showed the 2.0.5 sizes).
const mb = (b: number, locale: string) => (b / 1_000_000).toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const bytes = (b: number, locale: string) => b.toLocaleString(locale);
const SETUP = RELEASE.setup.size, PORTABLE = RELEASE.portable?.size ?? 0;
export const GITHUB_URL = 'https://github.com/StarkChristian/StarkLLM';

export const toolStep = `tool_call: search_local_kb
// Human approval gate
{
  "query": "security policy",
  "top_k": 3
}
Approved`;

const downloadBase = {
  en: {
    meta: { title: 'Download | StarkLLM' },
    hero: { eyebrow: 'Download', h1: 'Download StarkLLM', lede: 'Get started with the Windows Research Beta.' },
    helpCallout: { h: 'Installation not working?', text: 'StarkLLM brings its own engine; the only other program it needs is Ollama for the AI models, and it can install Ollama for you. The Help page has a checklist with a test for every step and fixes for the most common problems.', link: 'Open Help & Troubleshooting' },
    release: {
      h2: 'Release package',
      facts: [
        ['Version', `v${V} (Native Desktop, engine included, no Docker needed)`],
        ['License', 'Apache 2.0 (open source)'],
        ['Installer size', `${mb(SETUP, 'en-US')} MB (${bytes(SETUP, 'en-US')} bytes)`],
        ...(PORTABLE ? [['Portable app size', `${mb(PORTABLE, 'en-US')} MB (${bytes(PORTABLE, 'en-US')} bytes)`]] : []),
      ],
      installer: `Download v${V} installer (.exe)`,
      portable: 'Portable (.exe)',
      github: 'GitHub',
      shaH: 'SHA-256 checksums',
      shaLede: 'To verify file integrity before you run it, compare the SHA-256 hash of your download:',
      setupLabel: `StarkLLM-v${V}-Setup.exe (Windows installer)`,
      portableLabel: `StarkLLM-v${V}-Portable.exe (portable executable)`,
      verify: 'Verify in PowerShell:',
    },
    setup: {
      h2: 'Setup steps',
      intro: 'StarkLLM brings its own engine; Docker Desktop and WSL2 are not needed. The first start downloads the AI models you do not have yet (about 5 GB) and, if you let it, Ollama; later starts take seconds. Already installed (2.0.7 or later)? Settings › About StarkLLM › Check for updates › Download and install.',
      steps: [
        { t: 'Run the StarkLLM installer', v: `Download and run StarkLLM-v${V}-Setup.exe. The installer contains the engine and creates desktop shortcuts.` },
        { t: 'Start StarkLLM', v: 'Click the StarkLLM shortcut. The app starts its engine and checks Ollama.' },
        { t: 'Install Ollama if it is missing', v: 'If Ollama is not installed, the window offers "Install Ollama for me": StarkLLM downloads the official installer from ollama.com (about 2 GB), checks its signature and installs it; no administrator rights are needed. You can also install Ollama yourself from ollama.com.' },
        { t: 'Wait for the first start', v: 'StarkLLM downloads the AI models (by default qwen2.5:7b and nomic-embed-text, about 5 GB; suitable models you already have in Ollama are used), shows the progress and then opens in its own window. If something is missing, the window says what and how to fix it (logs: %APPDATA%\\StarkLLM\\engine.log and engine-native.log).' },
        { t: 'Create a workspace and add a document', v: 'StarkLLM signs you in as the user of this PC; there is no account to create. Create a workspace, add a document and ask a question about it.' },
      ],
    },
    prereq: {
      h2: 'Prerequisites checklist',
      lede: 'Before you start StarkLLM, confirm that all of the following are in place:',
      items: [
        ['OS', 'Windows 10 or 11 (64-bit).'],
        ['Software', 'Only Ollama, for the AI models. StarkLLM can install the official version for you ("Install Ollama for me"), or you get it from ollama.com. Docker Desktop and WSL2 are not needed since v2.2.'],
        ['Models and disk', 'Downloaded automatically on the first start (about 5 GB). Keep at least 15 GB of free disk space.'],
        ['Hardware', 'Minimum 8 GB RAM (3B models), 16 GB recommended (7B models). An NVIDIA GPU with 8 GB+ VRAM is strongly recommended; since v2.3 StarkLLM also lets Ollama use integrated AMD Radeon and Intel Arc/Iris graphics. The manual has hardware tier guidance.'],
        ['Supported formats', 'Documents: PDF, Word (DOCX, with tables), Excel (XLSX), PowerPoint (PPTX), EPUB, TXT, Markdown, CSV, JSON, XML, HTML, logs and images (PNG, JPG, WEBP, TIFF, with OCR), up to 100 MB. Recordings: MP3, M4A, WAV, OGG, FLAC, the sound of MP4, MOV and MKV videos and more, up to 500 MB.'],
      ],
    },
    smart: {
      h2: 'Code signing: how to check the installer',
      text: 'Since v2.1.2 the installer, StarkLLM.exe and the uninstaller are signed with a Certum code signing certificate issued to "Open Source Developer Christian Stark", with a timestamp. The signature lets Windows verify the publisher and shows that the files were not changed after signing. The built-in updater only installs updates signed with this name.',
      checkH: 'Check the signature yourself',
      check: [
        `Right-click the downloaded installer (StarkLLM-v${V}-Setup.exe) and choose Properties.`,
        'Open the Digital Signatures tab. The signer must be "Open Source Developer Christian Stark".',
        'Select the signature and click Details. Windows must say "This digital signature is OK".',
      ],
      dlls: 'Some third-party Electron components inside the app (DLL files) are not signed by us. That is intended: the installer, StarkLLM.exe and the uninstaller are signed.',
      warnH: 'Windows still shows a warning (SmartScreen or Smart App Control)?',
      warn: 'The signature lets Windows verify the publisher, but Windows can still warn about a file it has not seen often. Check the publisher name as described above and compare the SHA-256 checksum. If both match, you can continue (in SmartScreen: More info, then Run anyway). If the name is different, the Digital Signatures tab is missing or the checksum does not match, do not run the file: download it again from this page and tell us at info@starkllm.com. Do not turn off Smart App Control, SmartScreen or any other security setting to install StarkLLM.',
    },
    notes: { h: 'Important notes', items: ['StarkLLM is free and open source (Apache 2.0).', 'Licensed under Apache 2.0, free for personal, research and commercial use.', 'Provided "as-is" without warranty or liability of any kind.'] },
    walk: {
      h2: 'Application walkthrough',
      lede: 'A step-by-step look at what to expect when you run StarkLLM on your machine.',
      steps: [
        { t: 'Step 1: Knowledge Base and workspaces', v: 'Map local folders to index documents into a persistent Knowledge Base layer.', kind: 'kb', alt: 'StarkLLM knowledge base configuration' },
        { t: 'Step 2: Document-grounded chat', v: 'Ask questions grounded in indexed documents, with source file indicators.', kind: 'chat', alt: 'StarkLLM document-grounded chat' },
        { t: 'Step 3: Sources you can check', v: 'Click a source under an answer to read the passages it was based on, word for word, and open the document at that page.', kind: 'sources', alt: 'The passages an answer was based on, shown word for word with a link to the page' },
        { t: 'Step 4: Safe local tools', v: 'Review, edit and approve in-process model tool calls directly in the chat.', kind: 'tool' },
        { t: 'Step 5: Thirteen themes', v: 'Hot-swap between OLED Pitch Black, Cyberpunk Rose, Liquid Glass and more.', kind: 'appearance', alt: 'StarkLLM settings and theme gallery' },
      ],
    },
    faq: {
      h2: 'Frequently asked questions',
      items: [
        ['Does my data leave my computer?', 'StarkLLM is designed to keep your data on your machine. Documents are stored in a local ChromaDB database on your PC, and AI inference runs through Ollama on your PC. Nothing leaves your PC unless you turn on an optional online feature: web search, a web task, a cloud model provider, an import from the web, market prices, the phone away from home (through the StarkLLM relay) or the update check. Settings › Privacy & network lists every connection StarkLLM makes, and "Fully offline" refuses all of them. Commands you allow in Terminal and tool servers you add run as your own programs and are not listed.'],
        ['Is StarkLLM free?', 'Yes. It is free and open source under Apache 2.0 for personal, research and commercial use. No subscriptions, telemetry or hidden tiers. Provided "as is" with no warranty.'],
        ['Why can answers be slow?', 'Speed depends on your hardware. Without a dedicated GPU, Ollama falls back to CPU inference, which is much slower. A dedicated NVIDIA GPU with 8 GB+ VRAM generates much faster.'],
        ['Is the installer signed? What if SmartScreen or Smart App Control warns me?', 'Yes. Since v2.1.2 the installer, StarkLLM.exe and the uninstaller are signed by "Open Source Developer Christian Stark", so Windows can verify the publisher. If Windows still warns, check the publisher name (right-click the installer, Properties, Digital Signatures) and compare the SHA-256 checksum on this page. Run the file only if both match. Do not turn off Smart App Control or any other security setting.'],
        ['What hardware do I need?', 'Minimum 8 GB RAM for 3B models, 16 GB RAM for 7B models. For power-user models (14B to 32B), 24 GB VRAM or 64 GB system RAM is recommended.'],
        ['What is the difference between normal chat and document chat?', 'Normal chat relies only on the model\'s pre-trained knowledge. Document chat uses RAG: it searches your uploaded documents first, feeds the relevant chunks to the model, and answers with verifiable citations.'],
        ['What is the difference between workspace documents and the Knowledge Base?', 'Workspace documents are isolated to one project. The Knowledge Base is a persistent, global folder on your machine that any chat can reference.'],
        ['The window says "StarkLLM could not start". What now?', 'StarkLLM starts its own engine and Ollama. When a step fails, the window lists what is missing (for example Ollama not installed, a busy port, a program file Windows blocked, or an engine error with its last log lines) and has a Retry button. The logs are in %APPDATA%\\StarkLLM (engine.log, and engine-native.log for the engine). The Help page lists the fixes.'],
        ['What if the app opens but chat does not connect?', 'The chat needs Ollama. If the window said "StarkLLM is running without its AI runtime", install or start Ollama and press Retry; StarkLLM then downloads the models (qwen2.5:7b and nomic-embed-text). The engine talks to Ollama on your PC at 127.0.0.1:11434.'],
        ['Can I inspect the source code?', 'Yes. StarkLLM is fully open source on GitHub at StarkChristian/StarkLLM under the Apache 2.0 license.'],
        ['Where can I send feedback or contribute?', 'We welcome feedback. Email info@starkllm.com or open an issue on the GitHub repository.'],
      ],
    },
    contribute: { h2: 'Contribute and suggest improvements', text: 'StarkLLM is an open, evolving project. If you hit a bug, have a feature idea or want to inspect the source:', repo: 'Browse the source code and open issues.', mail: 'Email' },
  },
  de: {
    meta: { title: 'Download | StarkLLM', description: `StarkLLM v${V} für Windows herunterladen: Installer, SHA-256-Prüfsummen, Einrichtung, Voraussetzungen und FAQ.` },
    hero: { eyebrow: 'Download', h1: 'StarkLLM herunterladen', lede: 'Starten Sie mit der Windows Research Beta.' },
    helpCallout: { h: 'Die Installation klappt nicht?', text: 'StarkLLM bringt seine eigene Engine mit; das einzige weitere Programm ist Ollama für die KI-Modelle, und auch das kann StarkLLM für Sie installieren. Die Hilfe-Seite hat eine Checkliste mit Test pro Schritt und Lösungen für die häufigsten Probleme.', link: 'Hilfe & Problemlösung öffnen' },
    release: {
      h2: 'Release-Paket',
      facts: [
        ['Version', `v${V} (Native Desktop, Engine enthalten, kein Docker nötig)`],
        ['Lizenz', 'Apache 2.0 (Open Source)'],
        ['Größe des Installers', `${mb(SETUP, 'de-DE')} MB (${bytes(SETUP, 'de-DE')} Bytes)`],
        ...(PORTABLE ? [['Größe der portablen App', `${mb(PORTABLE, 'de-DE')} MB (${bytes(PORTABLE, 'de-DE')} Bytes)`]] : []),
      ],
      installer: `Installer v${V} herunterladen (.exe)`,
      portable: 'Portable (.exe)',
      github: 'GitHub',
      shaH: 'SHA-256-Prüfsummen',
      shaLede: 'Um die Integrität vor der Ausführung zu prüfen, vergleichen Sie den SHA-256-Hash Ihres Downloads:',
      setupLabel: `StarkLLM-v${V}-Setup.exe (Windows-Installer)`,
      portableLabel: `StarkLLM-v${V}-Portable.exe (portable Programmdatei)`,
      verify: 'Prüfen in PowerShell:',
    },
    setup: {
      h2: 'Einrichtung',
      intro: 'StarkLLM bringt seine eigene Engine mit; Docker Desktop und WSL2 sind nicht nötig. Der erste Start lädt die KI-Modelle, die noch fehlen (etwa 5 GB), und, wenn Sie es erlauben, Ollama; spätere Starts dauern Sekunden. Schon installiert (2.0.7 oder neuer)? Einstellungen › Über StarkLLM › Nach Updates suchen › Herunterladen und installieren.',
      steps: [
        { t: 'StarkLLM-Installer ausführen', v: `Laden Sie StarkLLM-v${V}-Setup.exe herunter und starten Sie sie. Der Installer enthält die Engine und legt Desktop-Verknüpfungen an.` },
        { t: 'StarkLLM starten', v: 'Klicken Sie auf die StarkLLM-Verknüpfung. Die App startet ihre Engine und prüft Ollama.' },
        { t: 'Ollama installieren, falls es fehlt', v: 'Ist Ollama nicht installiert, bietet das Fenster „Ollama für mich installieren“ an: StarkLLM lädt den offiziellen Installer von ollama.com (etwa 2 GB), prüft seine Signatur und installiert ihn; Administratorrechte sind nicht nötig. Sie können Ollama auch selbst von ollama.com installieren.' },
        { t: 'Den ersten Start abwarten', v: 'StarkLLM lädt die KI-Modelle (standardmäßig qwen2.5:7b und nomic-embed-text, etwa 5 GB; passende Modelle, die Sie in Ollama schon haben, werden verwendet), zeigt den Fortschritt und öffnet sich dann im eigenen Fenster. Fehlt etwas, sagt das Fenster, was fehlt und wie Sie es beheben (Protokolle: %APPDATA%\\StarkLLM\\engine.log und engine-native.log).' },
        { t: 'Einen Arbeitsbereich anlegen und ein Dokument hinzufügen', v: 'StarkLLM meldet Sie als Benutzer dieses PCs an; ein Konto müssen Sie nicht anlegen. Legen Sie einen Arbeitsbereich an, fügen Sie ein Dokument hinzu und stellen Sie eine Frage dazu.' },
      ],
    },
    prereq: {
      h2: 'Checkliste der Voraussetzungen',
      lede: 'Bevor Sie StarkLLM starten, prüfen Sie, ob alles Folgende vorhanden ist:',
      items: [
        ['Betriebssystem', 'Windows 10 oder 11 (64 Bit).'],
        ['Software', 'Nur Ollama, für die KI-Modelle. StarkLLM kann die offizielle Version für Sie installieren („Ollama für mich installieren“), oder Sie laden es von ollama.com. Docker Desktop und WSL2 sind seit v2.2 nicht mehr nötig.'],
        ['Modelle und Speicherplatz', 'Werden beim ersten Start automatisch geladen (etwa 5 GB). Halten Sie mindestens 15 GB freien Speicherplatz bereit.'],
        ['Hardware', 'Mindestens 8 GB RAM (3B-Modelle), empfohlen 16 GB (7B-Modelle). Eine NVIDIA-GPU mit 8 GB+ VRAM wird dringend empfohlen; seit v2.3 lässt StarkLLM Ollama auch integrierte Grafik von AMD Radeon und Intel Arc/Iris nutzen. Das Handbuch enthält Hinweise zu Hardwarestufen.'],
        ['Unterstützte Formate', 'Dokumente: PDF, Word (DOCX, mit Tabellen), Excel (XLSX), PowerPoint (PPTX), EPUB, TXT, Markdown, CSV, JSON, XML, HTML, Logs und Bilder (PNG, JPG, WEBP, TIFF, mit OCR), bis 100 MB. Aufnahmen: MP3, M4A, WAV, OGG, FLAC, der Ton von MP4-, MOV- und MKV-Videos und mehr, bis 500 MB.'],
      ],
    },
    smart: {
      h2: 'Codesignatur: So prüfen Sie den Installer',
      text: 'Seit v2.1.2 sind der Installer, StarkLLM.exe und das Deinstallationsprogramm mit einem Codesignatur-Zertifikat von Certum signiert, ausgestellt auf „Open Source Developer Christian Stark“, mit Zeitstempel. Mit der Signatur kann Windows den Herausgeber überprüfen, und sie zeigt, dass die Dateien nach dem Signieren nicht verändert wurden. Die eingebaute Update-Funktion installiert nur Updates, die mit diesem Namen signiert sind.',
      checkH: 'Signatur selbst prüfen',
      check: [
        `Klicken Sie mit der rechten Maustaste auf den heruntergeladenen Installer (StarkLLM-v${V}-Setup.exe) und wählen Sie „Eigenschaften“.`,
        'Öffnen Sie die Registerkarte „Digitale Signaturen“. Als Signaturgeber muss „Open Source Developer Christian Stark“ stehen.',
        'Markieren Sie die Signatur und klicken Sie auf „Details“. Windows muss „Diese digitale Signatur ist gültig.“ anzeigen.',
      ],
      dlls: 'Einige Electron-Komponenten von Drittanbietern in der App (DLL-Dateien) sind nicht von uns signiert. Das ist so beabsichtigt: Installer, StarkLLM.exe und Deinstallationsprogramm sind signiert.',
      warnH: 'Windows warnt trotzdem (SmartScreen oder Smart App Control)?',
      warn: 'Mit der Signatur kann Windows den Herausgeber überprüfen, kann aber trotzdem vor einer Datei warnen, die es noch selten gesehen hat. Prüfen Sie den Herausgebernamen wie oben beschrieben und vergleichen Sie die SHA-256-Prüfsumme. Stimmen beide, können Sie fortfahren (bei SmartScreen: „Weitere Informationen“, dann „Trotzdem ausführen“). Steht dort ein anderer Name, fehlt die Registerkarte „Digitale Signaturen“ oder stimmt die Prüfsumme nicht, führen Sie die Datei nicht aus: Laden Sie sie erneut von dieser Seite herunter und schreiben Sie uns an info@starkllm.com. Schalten Sie Smart App Control, SmartScreen oder andere Sicherheitseinstellungen nicht ab, um StarkLLM zu installieren.',
    },
    notes: { h: 'Wichtige Hinweise', items: ['StarkLLM ist kostenlos und quelloffen (Apache 2.0).', 'Lizenziert unter Apache 2.0, kostenlos für private, wissenschaftliche und kommerzielle Nutzung.', 'Bereitgestellt „wie besehen“ ohne jegliche Gewährleistung oder Haftung.'] },
    walk: {
      h2: 'Rundgang durch die Anwendung',
      lede: 'Ein Blick Schritt für Schritt darauf, was Sie beim Betrieb von StarkLLM auf Ihrem Rechner erwartet.',
      steps: [
        { t: 'Schritt 1: Wissensdatenbank und Arbeitsbereiche', v: 'Binden Sie lokale Ordner ein, um Dokumente in eine dauerhafte Wissensdatenbank zu indexieren.', kind: 'kb', alt: 'StarkLLM-Konfiguration der Wissensdatenbank' },
        { t: 'Schritt 2: Dokumentbasierter Chat', v: 'Stellen Sie Fragen zu indexierten Dokumenten, mit Hinweisen auf die Quelldateien.', kind: 'chat', alt: 'StarkLLM-Chat mit Dokumentbezug' },
        { t: 'Schritt 3: Quellen zum Nachprüfen', v: 'Klicken Sie unter einer Antwort auf eine Quelle, um die Textstellen wörtlich zu lesen und das Dokument auf dieser Seite zu öffnen.', kind: 'sources', alt: 'Die Textstellen, auf denen eine Antwort beruht, wörtlich angezeigt, mit Link zur Seite' },
        { t: 'Schritt 4: Sichere lokale Tools', v: 'Prüfen, ändern und bestätigen Sie Tool-Aufrufe des Modells direkt im Chat.', kind: 'tool' },
        { t: 'Schritt 5: Dreizehn Themes', v: 'Wechseln Sie sofort zwischen OLED-Tiefschwarz, Cyberpunk-Rosé, Flüssigglas und mehr.', kind: 'appearance', alt: 'StarkLLM-Einstellungen und Theme-Galerie' },
      ],
    },
    faq: {
      h2: 'Häufige Fragen',
      items: [
        ['Verlassen meine Daten meinen Computer?', 'StarkLLM ist darauf ausgelegt, Ihre Daten auf Ihrem Rechner zu halten. Dokumente liegen in einer lokalen ChromaDB-Datenbank auf Ihrem PC, die KI-Inferenz läuft über Ollama auf Ihrem PC. Nichts verlässt Ihren PC, außer Sie schalten eine optionale Online-Funktion ein: Websuche, eine Web-Aufgabe, einen Cloud-Modellanbieter, einen Import aus dem Web, Marktpreise, das Handy unterwegs (über das StarkLLM-Relay) oder die Update-Prüfung. Einstellungen › Datenschutz & Netzwerk listet jede Verbindung auf, die StarkLLM herstellt, und „Vollständig offline“ lehnt sie alle ab. Befehle, die Sie im Terminal erlauben, und Werkzeug-Server, die Sie hinzufügen, laufen als Ihre eigenen Programme und stehen nicht in der Liste.'],
        ['Ist StarkLLM kostenlos?', 'Ja. Es ist kostenlos und quelloffen unter Apache 2.0 für private, wissenschaftliche und kommerzielle Nutzung. Keine Abos, keine Telemetrie, keine versteckten Stufen. Bereitgestellt „wie besehen“ ohne Gewährleistung.'],
        ['Warum können Antworten langsam sein?', 'Das Tempo hängt von Ihrer Hardware ab. Ohne dedizierte GPU nutzt Ollama die CPU, was deutlich langsamer ist. Eine dedizierte NVIDIA-GPU mit 8 GB+ VRAM erzeugt Text deutlich schneller.'],
        ['Ist der Installer signiert? Was, wenn SmartScreen oder Smart App Control warnt?', 'Ja. Seit v2.1.2 sind der Installer, StarkLLM.exe und das Deinstallationsprogramm von „Open Source Developer Christian Stark“ signiert, damit Windows den Herausgeber überprüfen kann. Warnt Windows trotzdem, prüfen Sie den Herausgebernamen (Rechtsklick auf den Installer, Eigenschaften, Digitale Signaturen) und vergleichen Sie die SHA-256-Prüfsumme auf dieser Seite. Führen Sie die Datei nur aus, wenn beides stimmt. Schalten Sie Smart App Control und andere Sicherheitseinstellungen nicht ab.'],
        ['Welche Hardware brauche ich?', 'Mindestens 8 GB RAM für 3B-Modelle, 16 GB RAM für 7B-Modelle. Für große Modelle (14B bis 32B) werden 24 GB VRAM oder 64 GB Arbeitsspeicher empfohlen.'],
        ['Was ist der Unterschied zwischen normalem Chat und Dokument-Chat?', 'Der normale Chat nutzt nur das vortrainierte Wissen des Modells. Der Dokument-Chat nutzt RAG: Er durchsucht zuerst Ihre hochgeladenen Dokumente, gibt die relevanten Chunks an das Modell und antwortet mit überprüfbaren Quellenangaben.'],
        ['Was ist der Unterschied zwischen Dokumenten im Arbeitsbereich und der Wissensdatenbank?', 'Dokumente im Arbeitsbereich sind auf ein Projekt beschränkt. Die Wissensdatenbank ist ein dauerhafter, globaler Ordner auf Ihrem Rechner, auf den jeder Chat zugreifen kann.'],
        ['Das Fenster zeigt „StarkLLM konnte nicht gestartet werden“. Was tun?', 'StarkLLM startet seine eigene Engine und Ollama. Scheitert ein Schritt, listet das Fenster auf, was fehlt (zum Beispiel Ollama nicht installiert, ein belegter Port, eine von Windows blockierte Programmdatei oder ein Engine-Fehler mit den letzten Protokollzeilen), und bietet „Erneut versuchen“ an. Die Protokolle liegen in %APPDATA%\\StarkLLM (engine.log, für die Engine engine-native.log). Die Hilfe-Seite nennt die Lösungen.'],
        ['Was, wenn die App startet, aber der Chat keine Verbindung hat?', 'Der Chat braucht Ollama. Zeigte das Fenster „StarkLLM läuft ohne KI-Laufzeit“, installieren oder starten Sie Ollama und klicken Sie auf „Erneut versuchen“; StarkLLM lädt dann die Modelle (qwen2.5:7b und nomic-embed-text). Die Engine erreicht Ollama auf Ihrem PC unter 127.0.0.1:11434.'],
        ['Kann ich den Quellcode einsehen?', 'Ja. StarkLLM ist vollständig quelloffen auf GitHub unter StarkChristian/StarkLLM, lizenziert unter Apache 2.0.'],
        ['Wohin kann ich Feedback senden oder beitragen?', 'Wir freuen uns über Rückmeldungen. Schreiben Sie an info@starkllm.com oder eröffnen Sie ein Issue im GitHub-Repository.'],
      ],
    },
    contribute: { h2: 'Mitwirken und Verbesserungen vorschlagen', text: 'StarkLLM ist ein offenes, sich ständig weiterentwickelndes Projekt. Wenn Sie einen Fehler finden, eine Idee haben oder den Quellcode einsehen möchten:', repo: 'Quellcode ansehen und Issues eröffnen.', mail: 'E-Mail' },
  },
} as const;

// Other languages: src/i18n/langs/<lang>/download.ts (default export, same shape as the English object).
export const download = { ...downloadBase, ...byLang(import.meta.glob('./langs/*/download.ts', { eager: true, import: 'default' }), downloadBase.en, 'download') } as unknown as Record<Lang, typeof downloadBase.en>;
