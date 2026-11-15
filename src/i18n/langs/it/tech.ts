type Section = { h: string; p?: string; list?: string[] };

const labels = { what: 'Che cos\'è', why: 'Perché è importante', how: 'Come lo fa StarkLLM', example: 'Esempio', limits: 'Da sapere', more: 'Altre funzioni', cta: 'Scarica StarkLLM', manual: 'Leggi il manuale' };
type L = typeof labels;
const it = labels;

const s = (l: L, what: string, why: string, how: string | Section, example: string, limits?: string): Section[] => [
  { h: l.what, p: what },
  { h: l.why, p: why },
  typeof how === 'string' ? { h: l.how, p: how } : { h: l.how, ...how },
  { h: l.example, p: example },
  ...(limits ? [{ h: l.limits, p: limits }] : []),
];

const pages = {
  'tech-rag': {
    title: 'Risposte dai tuoi documenti (RAG) | StarkLLM', eyebrow: 'Retrieval-augmented generation',
    h1: 'Risposte dai tuoi documenti', lede: 'StarkLLM legge i passaggi rilevanti dei tuoi file prima di rispondere e ti dice dove si trovano.',
    shot: 'chat', shotAlt: 'StarkLLM risponde a una domanda partendo da un PDF locale, con le fonti citate (interfaccia in inglese)',
    sections: s(it,
      'Retrieval-augmented generation (RAG, generazione potenziata dal recupero di informazioni) significa che il modello riceve prima i passaggi dei tuoi documenti che corrispondono alla domanda e risponde basandosi su di essi.',
      'Un modello linguistico non sa nulla dei tuoi contratti, rapporti o appunti. Senza i tuoi passaggi tira a indovinare, e un\'ipotesi può suonare convincente.',
      'La tua domanda viene cercata nel workspace (e, se attivata, nella tua Knowledge Base). I passaggi migliori vengono riordinati e dati al modello insieme alla domanda. Ogni risposta elenca le sue fonti, con nome del file e pagina o sezione.',
      'Chiedi: "Qual è il preavviso nel contratto Rossi?" StarkLLM trova la clausola nel PDF, risponde in base a essa e mostra "Contratto Rossi.pdf, pagina 4".',
      'Il modello può comunque interpretare male un passaggio. Per le decisioni importanti, apri la pagina citata e controlla.'),
  },
  'tech-hybrid-search': {
    title: 'Ricerca ibrida | StarkLLM', eyebrow: 'Ricerca',
    h1: 'Ricerca ibrida', lede: 'Cerca per significato e per parole esatte nello stesso momento.',
    sections: s(it,
      'La ricerca ibrida combina la ricerca vettoriale, che trova passaggi con lo stesso significato, con la ricerca per parole chiave (BM25), che trova parole, nomi e numeri esatti.',
      'Alcune domande richiedono il significato ("Come gestiamo una perdita?"), altre il termine esatto ("fattura 8492-B"). Ciascun metodo da solo ne perde una delle due.',
      'StarkLLM esegue entrambe le ricerche sul tuo indice locale, unisce i risultati e li riordina con un piccolo modello locale (cross-encoder TinyBERT) prima che li veda il modello linguistico.',
      'Una ricerca per "budget NASA" trova un passaggio sui "finanziamenti per la National Aeronautics and Space Administration" e anche il passaggio che nomina esattamente "NASA".'),
  },
  'tech-semantic-chunking': {
    title: 'Chunking semantico | StarkLLM', eyebrow: 'Indicizzazione',
    h1: 'Chunking semantico', lede: 'I documenti vengono divisi dove cambia il significato, non dopo un numero fisso di caratteri.',
    sections: s(it,
      'Prima che un documento diventi ricercabile, viene diviso in passaggi ("chunk"). Ogni passaggio viene archiviato con il suo file, la pagina o la sezione.',
      'Un passaggio tagliato a metà di una frase o di una clausola perde il suo significato, e la ricerca restituisce allora risposte a metà.',
      'StarkLLM divide il testo in frasi e comincia un nuovo passaggio dove cambia l\'argomento, misurato con il modello di embedding. Se non è possibile, divide ai paragrafi e alle frasi con una piccola sovrapposizione. Le tabelle (CSV, Excel, tabelle di Word) vengono conservate riga per riga, con i nomi delle colonne.',
      'Un contratto viene indicizzato clausola per clausola. Una domanda sulla "responsabilità" recupera l\'intera clausola sulla responsabilità, non due metà.',
      'I file lunghi senza punteggiatura, come alcuni log, possono comunque diventare passaggi grandi, in cui i singoli valori sono più difficili da trovare.'),
  },
  'tech-knowledge-base': {
    title: 'Knowledge Base | StarkLLM', eyebrow: 'Biblioteca',
    h1: 'Knowledge Base', lede: 'Una cartella sul tuo PC che ogni chat può cercare.',
    shot: 'kb', shotAlt: 'La Knowledge Base di StarkLLM con una cartella indicizzata (interfaccia in inglese)',
    sections: s(it,
      'La Knowledge Base (base di conoscenza) è una cartella sul tuo PC (per impostazione predefinita "StarkLLM Knowledge Base" in Documenti) i cui file StarkLLM indicizza e tiene aggiornati.',
      'Il materiale di riferimento, come procedure, manuali o appunti, serve in molti progetti. Senza una biblioteca condivisa dovresti caricare gli stessi file in ogni workspace.',
      'StarkLLM controlla le cartelle registrate ogni 30 secondi e indicizza i file nuovi e modificati; "Sync Now" (sincronizza ora) lo fa subito. Nella chat, l\'interruttore Knowledge Base decide se anche questi file vengono cercati. Le fonti che ne provengono sono contrassegnate "Personal KB".',
      'Tieni il manuale del tuo team nella cartella. In un workspace su un nuovo progetto puoi fare domande sui file del progetto e sul manuale nella stessa domanda.'),
  },
  'tech-workspaces': {
    title: 'Workspace | StarkLLM', eyebrow: 'Organizzazione',
    h1: 'Workspace', lede: 'Un workspace per progetto, con i suoi documenti e le sue chat.',
    sections: s(it,
      'Un workspace (area di lavoro) contiene i documenti e le chat di un progetto. La Knowledge Base è condivisa da tutti i workspace.',
      'Se tutti i file sono in un unico posto, una domanda su una pratica può prendere passaggi da un\'altra.',
      'Ogni workspace ha il proprio indice. Una chat cerca solo nei documenti del proprio workspace, più nella Knowledge Base quando la attivi.',
      'Passi da "Dichiarazione dei redditi 2025" a "Rilancio del sito web". Da quel momento le risposte vengono solo dai documenti del sito web.'),
  },
  'tech-multimodal': {
    title: 'File supportati e immagini | StarkLLM', eyebrow: 'File',
    h1: 'File, scansioni e immagini', lede: '14 tipi di file, comprese le scansioni in PDF e le foto.',
    sections: s(it,
      'StarkLLM legge file PDF, Word (DOCX), Excel (XLSX), CSV, Markdown, di testo, HTML, JSON, XML e di log, e immagini (PNG, JPG). Li aggiungi con la graffetta o trascinandoli sulla finestra.',
      'I documenti reali sono spesso scansioni o foto, non testo che si può selezionare. Un semplice estrattore di testo non vi trova nulla.',
      { p: 'Ogni tipo ha il suo lettore:', list: [
        'Le pagine PDF con testo vengono lette direttamente; le pagine scansionate passano per l\'OCR locale (Tesseract) e, se trova troppo poco, per un modello locale per le immagini.',
        'Le immagini vengono descritte e il loro testo viene letto da un modello locale per le immagini. La prima immagine scarica una volta quel modello (llava, circa 4,4 GB).',
        'I fogli di calcolo e le tabelle conservano i nomi delle colonne, così i valori restano legati al loro significato.',
      ] },
      'Aggiungi la foto di un cartello di un parcheggio. Più tardi chiedi "A che piano è il parcheggio per i visitatori?" e ottieni "Piano P2, posti da 40 a 55" con la foto come fonte.',
      'La scrittura a mano e il testo piccolo o sfocato vengono letti in modo meno affidabile. Il modello per le immagini legge meglio il testo stampato che le lavagne.'),
  },
  'tech-local-models': {
    title: 'Modelli locali con Ollama | StarkLLM', eyebrow: 'Modelli',
    h1: 'Modelli locali con Ollama', lede: 'Il modello linguistico gira sul tuo PC, con il tuo hardware.',
    sections: s(it,
      'Ollama è un programma gratuito che esegue modelli linguistici aperti come Qwen, Llama o Mistral sulla tua CPU o sulla tua scheda grafica. StarkLLM lo usa per la chat, la ricerca e le immagini.',
      'Un modello locale non richiede account né abbonamento, continua a funzionare senza internet una volta scaricato, e i tuoi documenti non arrivano mai a un fornitore di modelli.',
      'StarkLLM avvia Ollama se è installato, scarica i modelli predefiniti al primo avvio (circa 5 GB) e ti lascia cambiare modello nel Model Hub. Funzionano anche i modelli che ragionano, come Qwen 3.',
      'In treno, senza Wi-Fi, aggiungi un PDF e fai domande su di esso. Tutto gira sul portatile.',
      'La qualità e la velocità delle risposte dipendono dal modello e dal tuo hardware. Un modello da 7B richiede circa 8 GB di RAM; i modelli più grandi rispondono meglio ma richiedono più memoria, idealmente su una scheda grafica.'),
  },
  'tech-privacy': {
    title: 'Privacy | StarkLLM', eyebrow: 'Privacy',
    h1: 'Che cosa resta sul tuo PC', lede: 'Documenti, indice, chat e modelli restano sul tuo computer. Alcune funzioni facoltative vanno online, e solo quando le usi.',
    sections: [
      { h: it.what, p: 'StarkLLM esegue il proprio database, l\'indice di ricerca e l\'interfaccia web sul tuo PC (in Docker) e il modello linguistico in Ollama, anch\'esso sul tuo PC. Non ha telemetria né un account su un server.' },
      { h: it.why, p: 'Contratti, cartelle cliniche o dati di ricerca non dovrebbero essere inviati a un servizio cloud solo per fare una domanda su di essi.' },
      { h: 'Funzioni online facoltative', p: 'Si collegano a internet solo quando le attivi o le avvii. La chat dice quando una domanda esce dal tuo PC.', list: [
        'Ricerca sul web (interruttore nella chat): la tua domanda va a DuckDuckGo.',
        'Provider di modelli cloud (Settings, per esempio DeepSeek, OpenRouter, Groq): la tua domanda e i passaggi trovati vanno a quel provider.',
        'Importazione da YouTube e GitHub: l\'app scarica la trascrizione o il repository che hai indicato.',
        'Prezzi di mercato (widget, disattivato di default): recuperati da Yahoo Finance.',
        'Controllo degli aggiornamenti (chiesto una volta al primo avvio): chiede a GitHub il numero dell\'ultima versione, nient\'altro.',
      ] },
      { h: 'Download una tantum', p: 'I modelli di IA (da Ollama), il re-ranker (alla prima ricerca), il modello vocale (al primo input vocale) e il modello per le immagini (alla prima immagine) vengono scaricati una volta sola. Insieme a essi non viene inviato alcun documento, alcuna domanda né alcun dato di utilizzo.' },
      { h: it.example, p: 'Dopo il primo avvio puoi spegnere il Wi-Fi. Aggiungere documenti, cercare e rispondere continuano a funzionare.' },
    ],
  },
  'tech-local-tools': {
    title: 'Strumenti locali con approvazione | StarkLLM', eyebrow: 'Strumenti',
    h1: 'Strumenti locali, con la tua approvazione', lede: 'Il modello può chiedere di cercare qualcosa. Non viene eseguito nulla finché non confermi.',
    sections: s(it,
      'StarkLLM ha un piccolo host di strumenti integrato (MCP). Il modello può richiedere tre strumenti di sola lettura: elencare i file del workspace, cercare nella Knowledge Base e recuperare il testo esatto di un passaggio citato.',
      'Con gli strumenti il modello può verificare i fatti invece di tirare a indovinare. Senza controllo, gli strumenti potrebbero fare cose che non volevi.',
      { p: 'Ogni chiamata a uno strumento si ferma a una scheda nella chat:', list: [
        'La scheda mostra lo strumento e i suoi argomenti; puoi modificarli, eseguire la chiamata o annullarla.',
        'Gli strumenti si limitano a leggere. Non c\'è shell, non si scrivono file e non c\'è accesso a internet.',
        'Il server accetta una chiamata a uno strumento solo con un token monouso proveniente da quella scheda.',
      ] },
      'Il modello non è sicuro di quale versione di un documento sia la più recente e chiede di elencare i file del workspace. Vedi la richiesta, la esegui e la risposta usa l\'elenco reale dei file.'),
  },
  'tech-voice': {
    title: 'Input e output vocale | StarkLLM', eyebrow: 'Voce',
    h1: 'Input e output vocale', lede: 'Fai domande parlando e ascolta la risposta, elaborate sul tuo PC.',
    shot: 'settings', shotAlt: 'Impostazioni di StarkLLM (interfaccia in inglese)',
    sections: s(it,
      'Il riconoscimento vocale (speech to text) trasforma la tua domanda in testo; la sintesi vocale (text to speech) legge la risposta ad alta voce.',
      'Parlare è più veloce che scrivere per le domande lunghe, e ascoltare aiuta quando hai le mani o gli occhi occupati.',
      'StarkLLM usa Whisper per il riconoscimento vocale e le voci Piper per inglese e tedesco, entrambi in esecuzione in locale. L\'audio non viene inviato a nessun servizio.',
      'Mentre leggi un documento cartaceo fai clic sul microfono, fai la domanda e ascolti la risposta.',
      'Il modello di riconoscimento vocale viene scaricato al primo input vocale.'),
  },
  'tech-themes': {
    title: 'Temi | StarkLLM', eyebrow: 'Aspetto',
    shot: 'appearance', shotAlt: 'Impostazioni di StarkLLM, Appearance: la galleria dei temi (interfaccia in inglese)',
    h1: 'Temi', lede: 'Tredici temi di colore, dal nero puro per gli schermi OLED ai temi chiari e ai temi con motivi.',
    sections: [
      { h: it.what, p: 'StarkLLM ha tredici temi: Midnight Indigo (predefinito), OLED Pitch Black, Liquid Glass, Cyberpunk Rose, Matrix Emerald, Sunset Amber, Arctic Frost e Daylight Minimal, più cinque temi con motivi: Doodle Chat, Doodle Night, Flower Meadow, Matrix Code e Starry Night.' },
      { h: it.why, p: 'Le sessioni lunghe affaticano meno gli occhi quando contrasto e luminosità si adattano al tuo schermo e alla tua stanza.' },
      { h: it.how, p: 'Cambia il tema con il pulsante della tavolozza in fondo alla barra laterale o in Settings, Appearance. La scelta viene salvata e applicata subito.' },
    ],
  },
};

export default { labels, pages };
