import { V, RELEASE } from '../../../data/release';

// Sizes come from the release itself, so they cannot go stale.
const mb = (b: number, locale: string) => (b / 1_000_000).toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const bytes = (b: number, locale: string) => b.toLocaleString(locale);
const SETUP = RELEASE.setup.size, PORTABLE = RELEASE.portable?.size ?? 0;

export default {
  meta: { title: 'Download | StarkLLM', description: `Scarica StarkLLM v${V} per Windows: installer, checksum SHA-256, configurazione, requisiti e domande frequenti.` },
  hero: { eyebrow: 'Download', h1: 'Scarica StarkLLM', lede: 'Cominci con la Windows Research Beta.' },
  helpCallout: { h: 'L\'installazione non funziona?', text: 'StarkLLM porta con sé il proprio motore; l\'unico altro programma di cui ha bisogno è Ollama per i modelli di IA, e può anche installarlo per Lei. La pagina Aiuto ha una lista di controllo con una prova per ogni passaggio e le soluzioni per i problemi più comuni.', link: 'Apri Aiuto e risoluzione dei problemi' },
  release: {
    h2: 'Pacchetto di rilascio',
    facts: [
      ['Versione', `v${V} (app desktop nativa, motore incluso, Docker non necessario)`],
      ['Licenza', 'Apache 2.0 (open source)'],
      ['Dimensione dell\'installer', `${mb(SETUP, 'it-IT')} MB (${bytes(SETUP, 'it-IT')} byte)`],
      ...(PORTABLE ? [['Dimensione dell\'app portable', `${mb(PORTABLE, 'it-IT')} MB (${bytes(PORTABLE, 'it-IT')} byte)`]] : []),
    ],
    installer: `Scarica l'installer v${V} (.exe)`,
    portable: 'Portable (.exe)',
    github: 'GitHub',
    shaH: 'Checksum SHA-256',
    shaLede: 'Per verificare l\'integrità del file prima di eseguirlo, confronti l\'hash SHA-256 del Suo download:',
    setupLabel: `StarkLLM-v${V}-Setup.exe (installer per Windows)`,
    portableLabel: `StarkLLM-v${V}-Portable.exe (eseguibile portable)`,
    verify: 'Verifica in PowerShell:',
  },
  setup: {
    h2: 'Passaggi di configurazione',
    intro: 'StarkLLM porta con sé il proprio motore; Docker Desktop e WSL2 non servono. Il primo avvio scarica i modelli di IA che ancora non ha (circa 5 GB) e, se Lei lo permette, Ollama; gli avvii successivi richiedono pochi secondi. Già installato (2.0.7 o successiva)? Impostazioni › Informazioni su StarkLLM › «Verifica aggiornamenti» › «Scarica e installa».',
    steps: [
      { t: 'Esegua l\'installer di StarkLLM', v: `Scarichi ed esegua StarkLLM-v${V}-Setup.exe. L'installer contiene il motore e crea i collegamenti sul desktop.` },
      { t: 'Avvii StarkLLM', v: 'Faccia clic sul collegamento di StarkLLM. L\'app avvia il proprio motore e controlla Ollama.' },
      { t: 'Installi Ollama se manca', v: 'Se Ollama non è installato, la finestra propone «Installa Ollama per me»: StarkLLM scarica l\'installer ufficiale da ollama.com (circa 2 GB), ne controlla la firma e lo installa; non servono diritti di amministratore. Può anche installare Ollama da solo da ollama.com.' },
      { t: 'Attenda il primo avvio', v: 'StarkLLM scarica i modelli di IA (per impostazione predefinita qwen2.5:7b e nomic-embed-text, circa 5 GB; i modelli adatti che ha già in Ollama vengono usati), mostra l\'avanzamento e poi si apre nella sua finestra. Se manca qualcosa, la finestra dice che cosa e come rimediare (log: %APPDATA%\\StarkLLM\\engine.log ed engine-native.log).' },
      { t: 'Crei un workspace e aggiunga un documento', v: 'StarkLLM La fa accedere come utente di questo PC; non serve creare alcun account. Crei un workspace, aggiunga un documento e faccia una domanda su di esso.' },
    ],
  },
  prereq: {
    h2: 'Lista dei requisiti',
    lede: 'Prima di avviare StarkLLM, controlli che ci sia tutto quanto segue:',
    items: [
      ['Sistema operativo', 'Windows 10 o 11 (64 bit).'],
      ['Software', 'Solo Ollama, per i modelli di IA. StarkLLM può installare per Lei la versione ufficiale («Installa Ollama per me»), oppure Lei la scarica da ollama.com. Docker Desktop e WSL2 non servono più dalla v2.2.'],
      ['Modelli e disco', 'Scaricati automaticamente al primo avvio (circa 5 GB). Tenga liberi almeno 15 GB di spazio su disco.'],
      ['Hardware', 'Minimo 8 GB di RAM (modelli da 3B), consigliati 16 GB (modelli da 7B). Si consiglia caldamente una GPU NVIDIA con 8 GB o più di VRAM; dalla v2.3 StarkLLM permette a Ollama di usare anche la grafica integrata AMD Radeon e Intel Arc/Iris. Il manuale ha indicazioni sui livelli di hardware.'],
      ['Formati supportati', 'Documenti: PDF, Word (DOCX, con tabelle), Excel (XLSX), PowerPoint (PPTX), EPUB, TXT, Markdown, CSV, JSON, XML, HTML, log e immagini (PNG, JPG, WEBP, TIFF, con OCR), fino a 100 MB. Registrazioni: MP3, M4A, WAV, OGG, FLAC, l’audio dei video MP4, MOV e MKV e altro, fino a 500 MB.'],
    ],
  },
  smart: {
    h2: 'Firma del codice: come controllare l\'installer',
    text: 'Dalla v2.1.2 l\'installer, StarkLLM.exe e il programma di disinstallazione sono firmati con un certificato di firma del codice Certum intestato a "Open Source Developer Christian Stark", con marca temporale. La firma permette a Windows di verificare l\'editore e mostra che i file non sono stati modificati dopo la firma. Il sistema di aggiornamento integrato installa solo aggiornamenti firmati con questo nome.',
    checkH: 'Controlli personalmente la firma',
    check: [
      `Faccia clic con il tasto destro sull'installer scaricato (StarkLLM-v${V}-Setup.exe) e scelga "Properties" (Proprietà).`,
      'Apra la scheda "Digital Signatures" (Firme digitali). Il firmatario deve essere "Open Source Developer Christian Stark".',
      'Selezioni la firma e faccia clic su "Details" (Dettagli). Windows deve indicare che la firma digitale è valida ("This digital signature is OK").',
    ],
    dlls: 'Alcuni componenti Electron di terze parti contenuti nell\'app (file DLL) non sono firmati da noi. È voluto: l\'installer, StarkLLM.exe e il programma di disinstallazione sono firmati.',
    warnH: 'Windows mostra comunque un avviso (SmartScreen o Smart App Control)?',
    warn: 'La firma permette a Windows di verificare l\'editore, ma Windows può comunque mostrare un avviso per un file che ha visto di rado. Controlli il nome dell\'editore come descritto sopra e confronti il checksum SHA-256. Se entrambi corrispondono, può continuare (in SmartScreen: "More info" (Ulteriori informazioni), poi "Run anyway" (Esegui comunque)). Se il nome è diverso, manca la scheda "Digital Signatures" (Firme digitali) o il checksum non corrisponde, non esegua il file: lo scarichi di nuovo da questa pagina e ci scriva a info@starkllm.com. Non disattivi Smart App Control, SmartScreen o altre impostazioni di sicurezza per installare StarkLLM.',
  },
  notes: { h: 'Note importanti', items: ['StarkLLM è gratuito e open source (Apache 2.0).', 'Con licenza Apache 2.0, gratuito per uso personale, di ricerca e commerciale.', 'Fornito "così com\'è", senza garanzie né responsabilità di alcun tipo.'] },
  walk: {
    h2: 'Un giro nell\'applicazione',
    lede: 'Uno sguardo passo dopo passo a ciò che La aspetta quando esegue StarkLLM sul Suo computer.',
    steps: [
      { t: 'Passo 1: Knowledge Base e workspace', v: 'Colleghi cartelle locali per indicizzare i documenti in un livello permanente di Knowledge Base.', kind: 'kb', alt: 'Configurazione della Knowledge Base di StarkLLM (interfaccia in inglese)' },
      { t: 'Passo 2: chat basata sui documenti', v: 'Faccia domande basate sui documenti indicizzati, con l\'indicazione dei file di origine.', kind: 'chat', alt: 'Chat di StarkLLM basata sui documenti (interfaccia in inglese)' },
      { t: 'Passo 3: fonti che può controllare', v: 'Faccia clic su una fonte sotto una risposta per leggere, parola per parola, i passaggi su cui si è basata e aprire il documento a quella pagina.', kind: 'sources', alt: 'I passaggi su cui si è basata una risposta, mostrati parola per parola con un link alla pagina (interfaccia in inglese)' },
      { t: 'Passo 4: strumenti locali sicuri', v: 'Controlli, modifichi e approvi direttamente nella chat le chiamate agli strumenti fatte dal modello nello stesso processo.', kind: 'tool' },
      { t: 'Passo 5: tredici temi', v: 'Passi subito da OLED Pitch Black a Cyberpunk Rose, Liquid Glass e altri.', kind: 'appearance', alt: 'Impostazioni di StarkLLM e galleria dei temi (interfaccia in inglese)' },
    ],
  },
  faq: {
    h2: 'Domande frequenti',
    items: [
      ['I miei dati escono dal mio computer?', 'StarkLLM è progettato per tenere i Suoi dati sul Suo computer. I documenti sono archiviati in un database ChromaDB locale sul Suo PC e l’inferenza dell’IA passa per Ollama sul Suo PC. Nulla lascia il Suo PC, a meno che Lei non attivi una funzione online facoltativa: la ricerca web, un’attività web, un fornitore di modelli cloud, un’importazione dal web, i prezzi di mercato, il relay del telefono (solo per i telefoni che Lei consente fuori casa, cifrato dal telefono al PC) o il controllo degli aggiornamenti. Impostazioni › Privacy e rete elenca ogni connessione di StarkLLM, e «Completamente offline» le rifiuta tutte. I comandi che Lei consente nel Terminale e i server di strumenti che aggiunge girano come Suoi programmi e non sono nell’elenco.'],
      ['StarkLLM è gratuito?', 'Sì. È gratuito e open source con licenza Apache 2.0, per uso personale, di ricerca e commerciale. Niente abbonamenti, niente telemetria, nessun livello nascosto. Fornito "così com\'è", senza garanzie.'],
      ['Perché le risposte possono essere lente?', 'La velocità dipende dal Suo hardware. Senza una GPU dedicata, Ollama ripiega sull\'inferenza con la CPU, che è molto più lenta. Con una GPU NVIDIA dedicata da 8 GB o più di VRAM la generazione è molto più rapida.'],
      ['L\'installer è firmato? Cosa faccio se SmartScreen o Smart App Control mostrano un avviso?', 'Sì. Dalla v2.1.2 l\'installer, StarkLLM.exe e il programma di disinstallazione sono firmati da "Open Source Developer Christian Stark", così Windows può verificare l\'editore. Se Windows mostra comunque un avviso, controlli il nome dell\'editore (clic destro sull\'installer, Proprietà, Firme digitali) e confronti il checksum SHA-256 riportato in questa pagina. Esegua il file solo se entrambi corrispondono. Non disattivi Smart App Control né altre impostazioni di sicurezza.'],
      ['Di che hardware ho bisogno?', 'Minimo 8 GB di RAM per i modelli da 3B, 16 GB di RAM per quelli da 7B. Per i modelli per utenti esperti (da 14B a 32B) si consigliano 24 GB di VRAM o 64 GB di RAM di sistema.'],
      ['Che differenza c\'è tra la chat normale e la chat sui documenti?', 'La chat normale si affida solo alle conoscenze preaddestrate del modello. La chat sui documenti usa il RAG: cerca prima nei documenti che Lei ha caricato, passa al modello i chunk pertinenti e risponde con citazioni verificabili.'],
      ['Che differenza c\'è tra i documenti del workspace e la Knowledge Base?', 'I documenti del workspace sono isolati in un solo progetto. La Knowledge Base è una cartella globale e permanente sul Suo computer, a cui può fare riferimento qualsiasi chat.'],
      ['La finestra dice "StarkLLM non si è potuto avviare". Che cosa faccio?', 'StarkLLM avvia da solo il proprio motore e Ollama. Quando un passaggio fallisce, la finestra elenca che cosa manca (per esempio Ollama non installato, una porta occupata, un file di programma bloccato da Windows o un errore del motore con le ultime righe del log) e ha un pulsante "Riprova". I log sono in %APPDATA%\\StarkLLM (engine.log, ed engine-native.log per il motore). La pagina Aiuto elenca le soluzioni.'],
      ['Che cosa succede se l\'app si apre ma la chat non si collega?', 'La chat ha bisogno di Ollama. Se la finestra diceva "StarkLLM is running without its AI runtime", installi o avvii Ollama e prema Retry (Riprova); StarkLLM scarica poi i modelli (qwen2.5:7b e nomic-embed-text). Il motore parla con Ollama sul Suo PC all\'indirizzo 127.0.0.1:11434.'],
      ['Posso controllare il codice sorgente?', 'Sì. StarkLLM è interamente open source su GitHub, in StarkChristian/StarkLLM, con licenza Apache 2.0.'],
      ['Dove posso mandare un riscontro o dare il mio contributo?', 'I commenti sono benvenuti. Scriva a info@starkllm.com o apra una issue nel repository GitHub.'],
    ],
  },
  contribute: { h2: 'Contribuisca e proponga miglioramenti', text: 'StarkLLM è un progetto aperto e in evoluzione. Se trova un bug, ha un\'idea per una funzione o vuole esaminare il codice sorgente:', repo: 'Sfogli il codice sorgente e apra issue.', mail: 'E-mail' },
};
