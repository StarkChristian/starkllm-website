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
    helpCallout: { h: 'Installation not working?', text: 'StarkLLM needs Docker Desktop and Ollama on your PC; since v2.0.1 the app starts both and its engine by itself. The Help page has a checklist with a test for every step and fixes for the 24 most common problems.', link: 'Open Help & Troubleshooting' },
    release: {
      h2: 'Release package',
      facts: [
        ['Version', `v${V} (Native Desktop, starts its own engine)`],
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
      intro: 'Two programs are installed once, then StarkLLM does the rest. The first start downloads the engine and the AI models you do not have yet (several GB, about 10 to 20 minutes); later starts take seconds.',
      steps: [
        { t: 'Install Docker Desktop', v: 'Install Docker Desktop (with WSL2) from docker.com, start it once and finish its setup. It may ask you to restart the PC.' },
        { t: 'Install Ollama', v: 'Install Ollama from ollama.com. You do not need to pull models by hand: StarkLLM downloads qwen2.5:7b and nomic-embed-text on its first start.' },
        { t: 'Run the StarkLLM installer', v: `Download and run StarkLLM-v${V}-Setup.exe. The installer creates desktop shortcuts.` },
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
      h2: 'Code signing: how to check the installer',
      text: 'Since v2.1.0 the installer, StarkLLM.exe and the uninstaller are signed with a Certum code signing certificate issued to "Open Source Developer Christian Stark", with a timestamp. The signature lets Windows verify the publisher and shows that the files were not changed after signing. The built-in updater only installs updates signed with this name.',
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
        ['Does my data leave my computer?', 'StarkLLM is designed to keep your data on your machine. Documents are stored in a local ChromaDB container, and AI inference runs through Ollama on your host. Nothing leaves your PC unless you turn on an optional online feature (web search, a cloud model provider, the update check).'],
        ['Is StarkLLM free?', 'Yes. It is free and open source under Apache 2.0 for personal, research and commercial use. No subscriptions, telemetry or hidden tiers. Provided "as is" with no warranty.'],
        ['Why can answers be slow?', 'Speed depends on your hardware. Without a dedicated GPU, Ollama falls back to CPU inference, which is much slower. A dedicated NVIDIA GPU with 8 GB+ VRAM generates much faster.'],
        ['Is the installer signed? What if SmartScreen or Smart App Control warns me?', 'Yes. Since v2.1.0 the installer, StarkLLM.exe and the uninstaller are signed by "Open Source Developer Christian Stark", so Windows can verify the publisher. If Windows still warns, check the publisher name (right-click the installer, Properties, Digital Signatures) and compare the SHA-256 checksum on this page. Run the file only if both match. Do not turn off Smart App Control or any other security setting.'],
        ['What hardware do I need?', 'Minimum 8 GB RAM for 3B models, 16 GB RAM for 7B models. For power-user models (14B to 32B), 24 GB VRAM or 64 GB system RAM is recommended.'],
        ['What is the difference between normal chat and document chat?', 'Normal chat relies only on the model\'s pre-trained knowledge. Document chat uses RAG: it searches your uploaded documents first, feeds the relevant chunks to the model, and answers with verifiable citations.'],
        ['What is the difference between workspace documents and the Knowledge Base?', 'Workspace documents are isolated to one project. The Knowledge Base is a persistent, global folder on your machine that any chat can reference.'],
        ['The window says "StarkLLM could not start". What now?', 'Since v2.0.1 the app starts Docker Desktop, Ollama and its engine itself. When a step fails, the window lists what is missing (for example Docker Desktop not installed, a busy port, or an engine error with its last log lines) and has a Retry button. The full log is in %APPDATA%\\StarkLLM\\engine.log. On v2.0.0 the window only waited on "Connecting to local engine…"; please install v2.0.1.'],
        ['What if the app opens but chat does not connect?', 'The chat needs Ollama. If the window said "StarkLLM is running without its AI runtime", install or start Ollama and press Retry; StarkLLM then downloads the models (qwen2.5:7b and nomic-embed-text). The engine talks to Ollama on your PC via host.docker.internal:11434.'],
        ['Can I inspect the source code?', 'Yes. StarkLLM is fully open source on GitHub at StarkChristian/StarkLLM under the Apache 2.0 license.'],
        ['Where can I send feedback or contribute?', 'We welcome feedback. Email info@starkllm.com or open an issue on the GitHub repository.'],
      ],
    },
    contribute: { h2: 'Contribute and suggest improvements', text: 'StarkLLM is an open, evolving project. If you hit a bug, have a feature idea or want to inspect the source:', repo: 'Browse the source code and open issues.', mail: 'Email' },
  },
  de: {
    meta: { title: 'Download | StarkLLM', description: `StarkLLM v${V} für Windows herunterladen: Installer, SHA-256-Prüfsummen, Einrichtung, Voraussetzungen und FAQ.` },
    hero: { eyebrow: 'Download', h1: 'StarkLLM herunterladen', lede: 'Starten Sie mit der Windows Research Beta.' },
    helpCallout: { h: 'Die Installation klappt nicht?', text: 'StarkLLM braucht Docker Desktop und Ollama auf Ihrem PC; seit v2.0.1 startet die App beide und ihre Engine selbst. Die Hilfe-Seite hat eine Checkliste mit Test pro Schritt und Lösungen für die 24 häufigsten Probleme.', link: 'Hilfe & Problemlösung öffnen' },
    release: {
      h2: 'Release-Paket',
      facts: [
        ['Version', `v${V} (Native Desktop, startet seine Engine selbst)`],
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
      intro: 'Zwei Programme installieren Sie einmal, den Rest erledigt StarkLLM. Der erste Start lädt die Engine und die KI-Modelle, die noch fehlen (mehrere GB, etwa 10 bis 20 Minuten); spätere Starts dauern Sekunden.',
      steps: [
        { t: 'Docker Desktop installieren', v: 'Installieren Sie Docker Desktop (mit WSL2) von docker.com, starten Sie es einmal und schließen Sie die Einrichtung ab. Eventuell verlangt es einen Neustart.' },
        { t: 'Ollama installieren', v: 'Installieren Sie Ollama von ollama.com. Modelle müssen Sie nicht von Hand laden: StarkLLM lädt qwen2.5:7b und nomic-embed-text beim ersten Start.' },
        { t: 'StarkLLM-Installer ausführen', v: `Laden Sie StarkLLM-v${V}-Setup.exe herunter und starten Sie sie. Der Installer legt Desktop-Verknüpfungen an.` },
        { t: 'StarkLLM starten und den ersten Start abwarten', v: 'Klicken Sie auf die StarkLLM-Verknüpfung. Die App startet Docker Desktop und Ollama, lädt die Modelle, baut ihre Engine, zeigt den Fortschritt und öffnet StarkLLM dann im eigenen Fenster. Fehlt etwas, sagt das Fenster, was fehlt und wie Sie es beheben (Protokoll: %APPDATA%\\StarkLLM\\engine.log).' },
        { t: 'Konto anlegen', v: 'Registrieren Sie das erste Konto; es ist der Administrator dieser Installation (Sicherung und Wiederherstellung). Legen Sie dann einen Workspace an und laden Sie ein Dokument hoch.' },
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
      h2: 'Codesignatur: So prüfen Sie den Installer',
      text: 'Seit v2.1.0 sind der Installer, StarkLLM.exe und das Deinstallationsprogramm mit einem Codesignatur-Zertifikat von Certum signiert, ausgestellt auf „Open Source Developer Christian Stark“, mit Zeitstempel. Mit der Signatur kann Windows den Herausgeber überprüfen, und sie zeigt, dass die Dateien nach dem Signieren nicht verändert wurden. Die eingebaute Update-Funktion installiert nur Updates, die mit diesem Namen signiert sind.',
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
        { t: 'Schritt 1: Wissensdatenbank und Workspaces', v: 'Binden Sie lokale Ordner ein, um Dokumente in eine dauerhafte Wissensdatenbank zu indexieren.', kind: 'kb', alt: 'StarkLLM-Konfiguration der Wissensdatenbank' },
        { t: 'Schritt 2: Dokumentbasierter Chat', v: 'Stellen Sie Fragen zu indexierten Dokumenten, mit Hinweisen auf die Quelldateien.', kind: 'chat', alt: 'StarkLLM-Chat mit Dokumentbezug' },
        { t: 'Schritt 3: Quellen zum Nachprüfen', v: 'Klicken Sie unter einer Antwort auf eine Quelle, um die Textstellen wörtlich zu lesen und das Dokument auf dieser Seite zu öffnen.', kind: 'sources', alt: 'Die Textstellen, auf denen eine Antwort beruht, wörtlich angezeigt, mit Link zur Seite' },
        { t: 'Schritt 4: Sichere lokale Tools', v: 'Prüfen, ändern und bestätigen Sie Tool-Aufrufe des Modells direkt im Chat.', kind: 'tool' },
        { t: 'Schritt 5: Dreizehn Themes', v: 'Wechseln Sie sofort zwischen OLED Pitch Black, Cyberpunk Rose, Liquid Glass und mehr.', kind: 'appearance', alt: 'StarkLLM-Einstellungen und Theme-Galerie' },
      ],
    },
    faq: {
      h2: 'Häufige Fragen',
      items: [
        ['Verlassen meine Daten meinen Computer?', 'StarkLLM ist darauf ausgelegt, Ihre Daten auf Ihrem Rechner zu halten. Dokumente liegen in einem lokalen ChromaDB-Container, die KI-Inferenz läuft über Ollama auf Ihrem Host. Nichts verlässt Ihren PC, außer Sie schalten eine optionale Online-Funktion ein (Websuche, einen Cloud-Modellanbieter, die Update-Prüfung).'],
        ['Ist StarkLLM kostenlos?', 'Ja. Es ist kostenlos und quelloffen unter Apache 2.0 für private, wissenschaftliche und kommerzielle Nutzung. Keine Abos, keine Telemetrie, keine versteckten Stufen. Bereitgestellt „wie besehen“ ohne Gewährleistung.'],
        ['Warum können Antworten langsam sein?', 'Das Tempo hängt von Ihrer Hardware ab. Ohne dedizierte GPU nutzt Ollama die CPU, was deutlich langsamer ist. Eine dedizierte NVIDIA-GPU mit 8 GB+ VRAM erzeugt Text deutlich schneller.'],
        ['Ist der Installer signiert? Was, wenn SmartScreen oder Smart App Control warnt?', 'Ja. Seit v2.1.0 sind der Installer, StarkLLM.exe und das Deinstallationsprogramm von „Open Source Developer Christian Stark“ signiert, damit Windows den Herausgeber überprüfen kann. Warnt Windows trotzdem, prüfen Sie den Herausgebernamen (Rechtsklick auf den Installer, Eigenschaften, Digitale Signaturen) und vergleichen Sie die SHA-256-Prüfsumme auf dieser Seite. Führen Sie die Datei nur aus, wenn beides stimmt. Schalten Sie Smart App Control und andere Sicherheitseinstellungen nicht ab.'],
        ['Welche Hardware brauche ich?', 'Mindestens 8 GB RAM für 3B-Modelle, 16 GB RAM für 7B-Modelle. Für große Modelle (14B bis 32B) werden 24 GB VRAM oder 64 GB Arbeitsspeicher empfohlen.'],
        ['Was ist der Unterschied zwischen normalem Chat und Dokument-Chat?', 'Der normale Chat nutzt nur das vortrainierte Wissen des Modells. Der Dokument-Chat nutzt RAG: Er durchsucht zuerst Ihre hochgeladenen Dokumente, gibt die relevanten Chunks an das Modell und antwortet mit überprüfbaren Quellenangaben.'],
        ['Was ist der Unterschied zwischen Workspace-Dokumenten und Wissensdatenbank?', 'Workspace-Dokumente sind auf ein Projekt beschränkt. Die Wissensdatenbank ist ein dauerhafter, globaler Ordner auf Ihrem Rechner, auf den jeder Chat zugreifen kann.'],
        ['Das Fenster zeigt „StarkLLM konnte nicht gestartet werden“. Was tun?', 'Seit v2.0.1 startet die App Docker Desktop, Ollama und ihre Engine selbst. Scheitert ein Schritt, listet das Fenster auf, was fehlt (zum Beispiel Docker Desktop nicht installiert, ein belegter Port oder ein Engine-Fehler mit den letzten Protokollzeilen), und bietet „Erneut versuchen“ an. Das vollständige Protokoll liegt in %APPDATA%\\StarkLLM\\engine.log. Unter v2.0.0 wartete das Fenster nur bei „Connecting to local engine…“; bitte installieren Sie v2.0.1.'],
        ['Was, wenn die App startet, aber der Chat keine Verbindung hat?', 'Der Chat braucht Ollama. Zeigte das Fenster „StarkLLM läuft ohne KI-Laufzeit“, installieren oder starten Sie Ollama und klicken Sie auf „Erneut versuchen“; StarkLLM lädt dann die Modelle (qwen2.5:7b und nomic-embed-text). Die Engine erreicht Ollama auf Ihrem PC über host.docker.internal:11434.'],
        ['Kann ich den Quellcode einsehen?', 'Ja. StarkLLM ist vollständig quelloffen auf GitHub unter StarkChristian/StarkLLM, lizenziert unter Apache 2.0.'],
        ['Wohin kann ich Feedback senden oder beitragen?', 'Wir freuen uns über Rückmeldungen. Schreiben Sie an info@starkllm.com oder eröffnen Sie ein Issue im GitHub-Repository.'],
      ],
    },
    contribute: { h2: 'Mitwirken und Verbesserungen vorschlagen', text: 'StarkLLM ist ein offenes, sich ständig weiterentwickelndes Projekt. Wenn Sie einen Fehler finden, eine Idee haben oder den Quellcode einsehen möchten:', repo: 'Quellcode ansehen und Issues eröffnen.', mail: 'E-Mail' },
  },
} as const;

// Other languages: src/i18n/langs/<lang>/download.ts (default export, same shape as the English object).
export const download = { ...downloadBase, ...byLang(import.meta.glob('./langs/*/download.ts', { eager: true, import: 'default' }), downloadBase.en, 'download') } as unknown as Record<Lang, typeof downloadBase.en>;
