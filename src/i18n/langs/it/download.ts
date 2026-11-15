import { V, RELEASE } from '../../../data/release';

// Sizes come from the release itself, so they cannot go stale.
const mb = (b: number, locale: string) => (b / 1_000_000).toLocaleString(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
const bytes = (b: number, locale: string) => b.toLocaleString(locale);
const SETUP = RELEASE.setup.size, PORTABLE = RELEASE.portable?.size ?? 0;

export default {
  meta: { title: 'Download | StarkLLM', description: `Scarica StarkLLM v${V} per Windows: installer, checksum SHA-256, configurazione, requisiti e domande frequenti.` },
  hero: { eyebrow: 'Download', h1: 'Scarica StarkLLM', lede: 'Inizia con la Windows Research Beta.' },
  helpCallout: { h: 'L\'installazione non funziona?', text: 'StarkLLM ha bisogno di Docker Desktop e di Ollama sul tuo PC; dalla v2.0.1 l\'app avvia da sola entrambi e il proprio motore. La pagina Aiuto ha una lista di controllo con una prova per ogni passaggio e le soluzioni per i 24 problemi più comuni.', link: 'Apri Aiuto e risoluzione dei problemi' },
  release: {
    h2: 'Pacchetto di rilascio',
    facts: [
      ['Versione', `v${V} (desktop nativa, avvia da sola il proprio motore)`],
      ['Licenza', 'Apache 2.0 (open source)'],
      ['Dimensione dell\'installer', `${mb(SETUP, 'it-IT')} MB (${bytes(SETUP, 'it-IT')} byte)`],
      ...(PORTABLE ? [['Dimensione dell\'app portable', `${mb(PORTABLE, 'it-IT')} MB (${bytes(PORTABLE, 'it-IT')} byte)`]] : []),
    ],
    installer: `Scarica l'installer v${V} (.exe)`,
    portable: 'Portable (.exe)',
    github: 'GitHub',
    shaH: 'Checksum SHA-256',
    shaLede: 'Per verificare l\'integrità del file prima di eseguirlo, confronta l\'hash SHA-256 del tuo download:',
    setupLabel: `StarkLLM-v${V}-Setup.exe (installer per Windows)`,
    portableLabel: `StarkLLM-v${V}-Portable.exe (eseguibile portable)`,
    verify: 'Verifica in PowerShell:',
  },
  setup: {
    h2: 'Passaggi di configurazione',
    intro: 'Due programmi si installano una volta sola, poi al resto pensa StarkLLM. Il primo avvio scarica il motore e i modelli di IA che ancora non hai (diversi GB, circa 10-20 minuti); gli avvii successivi richiedono pochi secondi.',
    steps: [
      { t: 'Installa Docker Desktop', v: 'Installa Docker Desktop (con WSL2) da docker.com, avvialo una volta e completa la sua configurazione. Potrebbe chiederti di riavviare il PC.' },
      { t: 'Installa Ollama', v: 'Installa Ollama da ollama.com. Non devi scaricare i modelli a mano: StarkLLM scarica qwen2.5:7b e nomic-embed-text al primo avvio.' },
      { t: 'Esegui l\'installer di StarkLLM', v: `Scarica ed esegui StarkLLM-v${V}-Setup.exe. L'installer crea i collegamenti sul desktop.` },
      { t: 'Avvia StarkLLM e attendi il primo avvio', v: 'Fai clic sul collegamento di StarkLLM. L\'app avvia Docker Desktop e Ollama, scarica i modelli, costruisce il proprio motore e mostra l\'avanzamento, poi apre StarkLLM nella sua finestra. Se manca qualcosa, la finestra dice che cosa e come rimediare (log: %APPDATA%\\StarkLLM\\engine.log).' },
      { t: 'Crea il tuo account', v: 'Registra il primo account: è l\'amministratore di questa installazione (backup e ripristino). Poi crea un workspace e carica un documento.' },
    ],
  },
  prereq: {
    h2: 'Lista dei requisiti',
    lede: 'Prima di avviare StarkLLM, controlla che ci sia tutto quanto segue:',
    items: [
      ['Sistema operativo', 'Windows 10 o 11 con WSL2 attivato.'],
      ['Docker Desktop', 'Installato una volta (StarkLLM lo avvia). Senza di esso il motore non può girare.'],
      ['Ollama', 'Installato in modo nativo su Windows (StarkLLM lo avvia). Download da ollama.com.'],
      ['Modelli e disco', 'Scaricati automaticamente al primo avvio (circa 5 GB). Tieni liberi almeno 15 GB di spazio su disco.'],
      ['Hardware', 'Minimo 8 GB di RAM (modelli da 3B), consigliati 16 GB (modelli da 7B). Si consiglia caldamente una GPU NVIDIA con 8 GB o più di VRAM. Il manuale ha indicazioni sui livelli di hardware.'],
      ['Formati supportati', 'PDF, DOCX (con tabelle), TXT, Markdown, CSV, XLSX, JSON, XML, log, HTML e immagini (PNG, JPG con OCR).'],
    ],
  },
  smart: {
    h2: 'Windows SmartScreen e avviso di esecuzione',
    text: 'I file scaricati dal web portano il contrassegno Mark of the Web (MOTW) e l\'installer di StarkLLM non è firmato digitalmente (code signing), quindi Windows SmartScreen può mostrare un avviso quando li esegui. Fai clic su "More info" (Ulteriori informazioni), poi su "Run anyway" (Esegui comunque). Per gli script di avvio puoi anche eseguire unblock.ps1 in PowerShell, per togliere il contrassegno in locale.',
    optsH: 'Altre opzioni di avvio',
    optsLede: 'Valgono per la cartella portable o per lo ZIP che include gli script di avvio.',
    opts: [
      { t: 'Opzione A: esegui start.exe da un terminale', v: 'start.exe è un programma di avvio autonomo. Controlla Docker Desktop e Ollama, costruisce i container e apre il browser.', ol: ['In Esplora file, dentro la cartella estratta, fai clic sulla barra degli indirizzi, scrivi cmd e premi Invio.', 'Scrivi start.exe e premi Invio. Se SmartScreen mostra un avviso, fai clic su "More info" (Ulteriori informazioni), poi su "Run anyway" (Esegui comunque).'] },
      { t: 'Opzione B: esegui start.cmd', v: 'Per eseguire direttamente uno script di comandi, apri un terminale nella cartella estratta ed esegui start.cmd (in PowerShell: .\\start.cmd).' },
      { t: 'Opzione C: Docker Compose direttamente', v: 'Per usare la CLI standard di Docker:', code: 'docker compose up --build -d' },
      { t: 'Opzione D: esegui unblock.ps1', v: 'Se i criteri di esecuzione bloccano gli script, apri PowerShell nella cartella estratta ed esegui:', code: 'powershell -ExecutionPolicy Bypass -File unblock.ps1', after: 'Questo toglie i contrassegni di SmartScreen solo dai file che si trovano nella cartella StarkLLM corrente. Non modifica le impostazioni di sicurezza globali di Windows. Dopo, esegui start.exe o start.cmd.' },
    ],
  },
  notes: { h: 'Note importanti', items: ['StarkLLM è gratuito e open source (Apache 2.0).', 'Con licenza Apache 2.0, gratuito per uso personale, di ricerca e commerciale.', 'Fornito "così com\'è", senza garanzie né responsabilità di alcun tipo.'] },
  walk: {
    h2: 'Un giro nell\'applicazione',
    lede: 'Uno sguardo passo dopo passo a ciò che ti aspetta quando esegui StarkLLM sul tuo computer.',
    steps: [
      { t: 'Passo 1: l\'avvio', v: 'StarkLLM avvia Docker Desktop, Ollama e il proprio motore e mostra ogni passaggio fino all\'apertura dell\'app. Gli sviluppatori possono anche avviare il motore dalla cartella del progetto con start.exe o start.cmd (mostrato qui).', kind: 'console' },
      { t: 'Passo 2: Knowledge Base e workspace', v: 'Collega cartelle locali per indicizzare i documenti in un livello permanente di Knowledge Base.', kind: 'kb', alt: 'Configurazione della Knowledge Base di StarkLLM (interfaccia in inglese)' },
      { t: 'Passo 3: chat basata sui documenti', v: 'Fai domande basate sui documenti indicizzati, con l\'indicazione dei file di origine.', kind: 'chat', alt: 'Chat di StarkLLM basata sui documenti (interfaccia in inglese)' },
      { t: 'Passo 4: fonti che puoi controllare', v: 'Fai clic su una fonte sotto una risposta per leggere, parola per parola, i passaggi su cui si è basata e aprire il documento a quella pagina.', kind: 'sources', alt: 'I passaggi su cui si è basata una risposta, mostrati parola per parola con un link alla pagina (interfaccia in inglese)' },
      { t: 'Passo 5: strumenti locali sicuri', v: 'Controlla, modifica e approva direttamente nella chat le chiamate agli strumenti fatte dal modello nello stesso processo.', kind: 'tool' },
      { t: 'Passo 6: tredici temi', v: 'Passa subito da OLED Pitch Black a Cyberpunk Rose, Liquid Glass e altri.', kind: 'appearance', alt: 'Impostazioni di StarkLLM e galleria dei temi (interfaccia in inglese)' },
    ],
  },
  faq: {
    h2: 'Domande frequenti',
    items: [
      ['I miei dati escono dal mio computer?', 'StarkLLM è progettato per tenere i tuoi dati sul tuo computer. I documenti sono archiviati in un container ChromaDB locale e l\'inferenza dell\'IA passa per Ollama sul tuo host. Durante il normale funzionamento locale non viene trasmesso nulla all\'esterno.'],
      ['StarkLLM è gratuito?', 'Sì. È gratuito e open source con licenza Apache 2.0, per uso personale, di ricerca e commerciale. Niente abbonamenti, niente telemetria, nessun livello nascosto. Fornito "così com\'è", senza garanzie.'],
      ['Perché le risposte possono essere lente?', 'La velocità dipende dal tuo hardware. Senza una GPU dedicata, Ollama ripiega sull\'inferenza con la CPU, che è molto più lenta. Con una GPU NVIDIA dedicata da 8 GB o più di VRAM la generazione è molto più rapida.'],
      ['Perché Windows SmartScreen avvisa per gli script di avvio scaricati?', 'Windows applica un attributo Mark of the Web ai file scaricati da internet. Quando esegui start.exe, fai clic su "More info" (Ulteriori informazioni), poi su "Run anyway" (Esegui comunque). In alternativa esegui start.cmd da un terminale, oppure esegui unblock.ps1 per togliere il contrassegno in locale.'],
      ['Di che hardware ho bisogno?', 'Minimo 8 GB di RAM per i modelli da 3B, 16 GB di RAM per quelli da 7B. Per i modelli per utenti esperti (da 14B a 32B) si consigliano 24 GB di VRAM o 64 GB di RAM di sistema.'],
      ['Che differenza c\'è tra la chat normale e la chat sui documenti?', 'La chat normale si affida solo alle conoscenze preaddestrate del modello. La chat sui documenti usa il RAG: cerca prima nei documenti che hai caricato, passa al modello i chunk pertinenti e risponde con citazioni verificabili.'],
      ['Che differenza c\'è tra i documenti del workspace e la Knowledge Base?', 'I documenti del workspace sono isolati in un solo progetto. La Knowledge Base è una cartella globale e permanente sul tuo computer, a cui può fare riferimento qualsiasi chat.'],
      ['La finestra dice "StarkLLM could not start". Che cosa faccio?', 'Dalla v2.0.1 l\'app avvia da sola Docker Desktop, Ollama e il proprio motore. Quando un passaggio fallisce, la finestra elenca che cosa manca (per esempio Docker Desktop non installato, una porta occupata o un errore del motore con le ultime righe del log) e ha un pulsante Retry (Riprova). Il log completo è in %APPDATA%\\StarkLLM\\engine.log. Con la v2.0.0 la finestra restava in attesa su "Connecting to local engine…"; installa la v2.0.1.'],
      ['Che cosa succede se l\'app si apre ma la chat non si collega?', 'La chat ha bisogno di Ollama. Se la finestra diceva "StarkLLM is running without its AI runtime", installa o avvia Ollama e premi Retry (Riprova); StarkLLM scarica poi i modelli (qwen2.5:7b e nomic-embed-text). Il motore parla con Ollama sul tuo PC tramite host.docker.internal:11434.'],
      ['Posso controllare il codice sorgente?', 'Sì. StarkLLM è interamente open source su GitHub, in StarkChristian/StarkLLM, con licenza Apache 2.0.'],
      ['Dove posso mandare un riscontro o dare il mio contributo?', 'I commenti sono benvenuti. Scrivi a info@starkllm.com o apri una issue nel repository GitHub.'],
    ],
  },
  contribute: { h2: 'Contribuisci e proponi miglioramenti', text: 'StarkLLM è un progetto aperto e in evoluzione. Se trovi un bug, hai un\'idea per una funzione o vuoi esaminare il codice sorgente:', repo: 'Sfoglia il codice sorgente, esamina gli script di avvio e apri issue.', mail: 'E-mail' },
};
