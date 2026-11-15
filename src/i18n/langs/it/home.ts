import { V, SIZE_MB } from '../../../data/release';

export default {
  meta: {
    title: 'StarkLLM | IA privata e locale per i tuoi documenti (Windows)',
    description:
      'StarkLLM è un assistente IA gratuito, open source e locale per Windows. Chatta in privato con i tuoi documenti e con la tua Knowledge Base sul tuo computer.',
  },
  nav: { getBtn: `Scarica v${V}` },
  hero: {
    eyebrow: 'IA locale per Windows · Research Beta',
    h1: ['Fai domande ai tuoi file.', 'Niente', 'esce dal tuo PC.'],
    lede: 'StarkLLM legge le tue lettere e i tuoi documenti sul tuo computer, ne ricava scadenze e importi e risponde alle tue domande indicando la pagina da cui viene ogni risposta, con modelli Ollama che gestisci tu stesso.',
    cta1: 'Scarica per Windows',
    cta2: 'Come funziona',
    meta: `v${V} · ${SIZE_MB} MB · Apache 2.0 · gratis`,
  },
  pipeline: [
    { k: 'File', v: 'PDF, Word, testo, scansioni, foto' },
    { k: 'Chunk', v: 'Divisi per significato, non per lunghezza' },
    { k: 'Ricerca ibrida', v: 'BM25 + embedding vettoriali' },
    { k: 'Modello locale', v: 'Ollama sulla tua GPU' },
    { k: 'Risposta con fonte', v: 'Vai alla pagina di origine' },
  ],
  shot: { alt: 'Chat di StarkLLM: la domanda su una cartella delle tasse riceve risposta con importo, scadenza, documento di origine e pagina', caption: 'L\'app desktop StarkLLM risponde a una domanda su una lettera. Documenti di esempio con nomi e numeri inventati.' },
  letters: {
    tag: 'Lettere',
    h2: 'Le tue lettere e i tuoi documenti a colpo d\'occhio',
    lede: 'Aggiungi un PDF, una scansione o una foto dal telefono. StarkLLM la legge sul tuo PC, raggruppa in una pratica le lettere dello stesso mittente e mette ogni scadenza nella pagina iniziale. Ogni valore rimanda alla pagina e alla riga da cui è stato letto.',
    dashCaption: 'Pagina iniziale: scadenze e date di pagamento trovate nelle tue lettere, con importo e pagina.',
    inboxCaption: 'Inbox: una pratica per mittente, la scadenza più vicina in alto, un segnale su una possibile truffa.',
    note: 'Le lettere e l\'interfaccia funzionano in inglese e tedesco. Il riconoscimento del testo (OCR) per foto e scansioni legge inglese e tedesco. Le altre lingue vengono archiviate come normali documenti, senza scadenze e importi. In arrivo con le prossime versioni (in lavorazione, non ancora rilasciato): regole per le lettere in francese, spagnolo, italiano e turco, e interfaccia in spagnolo, francese, italiano e turco. Documenti di esempio con nomi e numeri inventati.',
  },
  features: {
    h2: 'Pensato per chi non può caricare i propri documenti online.',
    items: [
      { tag: 'Inbox', title: 'Una inbox con una pratica per mittente', text: 'Per ogni lettera: tipo (fattura, sollecito, avviso fiscale, contratto, multa e altro), mittente, data, numeri di riferimento, importi, conti bancari e scadenze, ognuno trovato parola per parola in una pagina. Segna una lettera come fatta quando te ne sei occupato. Sul tuo disco nulla viene rinominato o spostato.', wide: true },
      { tag: 'Scadenze', title: 'Le scadenze nella pagina iniziale', text: 'Scadenze, appuntamenti e date di pagamento delle tue lettere, con importo e pagina. "Add to calendar" (aggiungi al calendario) le salva come file di calendario.' },
      { tag: 'Scansioni', title: 'Foto e scansioni vengono lette sul tuo PC', text: 'Una foto o una pagina scansionata viene letta come testo inglese o tedesco, raddrizzata se serve, e si può cercare e citare come qualsiasi altro documento.' },
      { tag: 'Sicurezza', title: 'Avvisi per le lettere false', text: 'Compare un riquadro rosso se una lettera chiede un pagamento su un conto estero, con un buono o tramite un link, contiene testo rivolto agli assistenti IA, oppure se un mittente indica all\'improvviso un conto diverso.' },
      { tag: 'Conoscenza', title: 'Workspace e una Knowledge Base globale', text: 'Collega le cartelle di Windows, tieni i progetti separati e interroga la Knowledge Base condivisa da qualsiasi chat.' },
      { tag: 'Ricerca', title: 'RAG ibrido con re-ranker cross-encoder', text: 'La ricerca per parole chiave e quella semantica lavorano insieme, poi un cross-encoder TinyBERT riordina i passaggi che rispondono davvero alla domanda.', wide: true, art: 'bars' },
      { tag: 'Desktop', title: 'Una vera finestra di app', text: 'Una finestra tutta sua, con schermata iniziale e menu nell\'area di notifica. Nessuna scheda del browser.' },
      { tag: 'Temi', title: 'Tredici temi, con cambio immediato', text: 'Da Midnight Indigo e nero OLED puro fino a Daylight Minimal, più cinque temi con motivi come Doodle Chat e Starry Night.', wide: true, art: 'swatches' },
      { tag: 'Strumenti', title: 'Strumenti locali con conferma obbligatoria', text: 'Strumenti di sola lettura come search_local_kb e fetch_cited_chunk. Ogni chiamata richiede la tua conferma e un token monouso.' },
      { tag: 'Altre app', title: 'Usa StarkLLM da altri programmi (disattivato di default)', text: 'Editor come VS Code e Cursor, assistenti IA compatibili con MCP e i tuoi script possono cercare nei tuoi documenti e fare domande su di essi tramite un server MCP o un\'API compatibile con OpenAI. Solo su questo PC, solo con una chiave che crei tu, e non possono modificare né eliminare nulla.', wide: true },
      { tag: 'Codice', title: 'Sandbox Python locale', text: 'Gira dentro l\'app, con controlli sul codice e limiti di tempo e di memoria. È un limite di comodo, non una barriera di sicurezza: esegui solo codice di cui ti fidi.' },
    ],
  },
  compare: {
    h2: 'Come si colloca StarkLLM',
    lede: 'Uno sguardo onesto a come StarkLLM si inserisce nel panorama dell\'IA locale, accanto ad altre soluzioni aperte molto diffuse.',
    note: 'Aggiornato a ottobre 2026, sulla base della documentazione pubblica di ciascuno strumento. Le funzioni cambiano in fretta, quindi controlla le versioni attuali. Anche le risposte di StarkLLM vengono da un piccolo modello locale: per tutto ciò che è importante controlla la fonte citata.',
    cols: ['Strumento', 'Punti di forza e limiti', 'Ideale per'],
    rows: [
      { kind: 'GUI per l\'inferenza', name: 'LM Studio', text: 'Ottimo per scaricare GGUF da Hugging Face e regolare lo scaricamento dei livelli sulla GPU. La sua "Chat with Documents" allega file a una conversazione (i file brevi vengono incollati per intero, quelli lunghi passano per il retrieval); secondo la documentazione e le guide di terzi non ha workspace persistenti né knowledge base condivise.', best: 'Provare modelli, con qualche documento allegato di tanto in tanto a una chat.' },
      { kind: 'App RAG di base', name: 'AnythingLLM', text: 'Un\'app molto diffusa per chattare con i tuoi documenti in workspace. Le opzioni di retrieval, come il reranking, dipendono dalla versione e dal database vettoriale che scegli, quindi confrontala sui tuoi documenti.', best: 'Chat sui documenti con un\'app di workspace già pronta.' },
      { kind: 'Chat minimalista', name: 'Jan.ai', text: 'Un\'app open source leggera, in stile ChatGPT, che tiene i dati sul dispositivo. Il retrieval dei documenti c\'è come impostazione facoltativa, che la sua documentazione definisce sperimentale; l\'attenzione è sulla chat più che sui flussi di lavoro con i documenti.', best: 'Una semplice chat locale con un\'interfaccia pulita.' },
      { kind: 'Questo progetto', name: `StarkLLM v${V}`, text: 'App desktop nativa per Windows con una inbox per le lettere (scadenze, importi, pratiche per mittente, avvisi per le lettere false), RAG ibrido con reranking cross-encoder TinyBERT, un server MCP locale facoltativo e un\'API compatibile con OpenAI (disattivati di default) e privacy locale per impostazione predefinita.', best: 'Chiunque voglia tenere private le proprie lettere e i propri documenti e ottenere risposte con fonti verificabili, dalle famiglie agli sviluppatori e ai ricercatori.', us: true },
    ],
  },
  setup: {
    h2: 'Si configura in tre passaggi',
    intro: 'Installa Docker Desktop e Ollama una volta sola; al resto pensa StarkLLM. Il primo avvio scarica circa 5 GB e costruisce il motore (da 10 a 20 minuti); gli avvii successivi richiedono pochi secondi.',
    steps: [
      { title: 'Installa Docker Desktop', text: 'Da docker.com (con WSL2). Avvialo una volta e completa la sua configurazione.' },
      { title: 'Installa Ollama', text: 'Da ollama.com. Non serve il terminale: i modelli li scarica StarkLLM stesso.' },
      { title: 'Installa e avvia StarkLLM', text: `Esegui StarkLLM-v${V}-Setup.exe e fai clic sul collegamento. L'app avvia Docker e Ollama, scarica i modelli, costruisce il suo motore e mostra l'avanzamento.` },
      { title: 'Se manca qualcosa', text: 'La finestra dice che cosa manca e come rimediare, con un pulsante Retry (Riprova). La pagina Aiuto ha una lista di controllo.' },
    ],
    notesTitle: 'Note importanti',
    notes: [
      { k: 'Primo avvio', v: 'Può richiedere diversi minuti, mentre le immagini Docker vengono scaricate. Quando i container sono attivi, il backend può impiegare ancora 1–2 minuti per finire di avviarsi.' },
      { k: 'Windows SmartScreen', v: 'Se l\'esecuzione viene bloccata, scegli "More info" (Ulteriori informazioni), poi "Run anyway" (Esegui comunque).' },
      { k: 'L\'hardware conta', v: 'Velocità e qualità delle risposte dipendono molto da una GPU adeguata (consigliati 8 GB o più di VRAM).' },
    ],
  },
  privacy: {
    h2: 'L\'architettura della privacy',
    lede: 'StarkLLM è un\'alternativa offline ai servizi di IA nel cloud. I tuoi documenti, i tuoi atti legali e le tue ricerche restano sul tuo computer.',
    items: [
      { title: 'Inferenza locale', text: 'Con Ollama, i modelli linguistici girano sulla tua CPU o GPU. Pensato per funzionare del tutto offline, una volta scaricati i modelli.' },
      { title: 'Archiviazione locale', text: 'I documenti vengono divisi in chunk e trasformati in embedding in un archivio vettoriale ChromaDB locale, che gira in un container Docker isolato.' },
      { title: 'Zero telemetria', text: 'L\'app per Windows non ha telemetria né SDK di analisi. Questo sito usa Umami, un servizio di statistiche ospitato in proprio; vedi la pagina Datenschutz (informativa sulla privacy, in tedesco).' },
      { title: 'Online solo se lo scegli tu', text: 'Ricerca sul web, provider di modelli cloud, importazione da YouTube e GitHub, prezzi di mercato e controllo degli aggiornamenti sono disattivati finché non li attivi. La chat mostra quando una richiesta esce dal tuo PC.' },
    ],
  },
  download: {
    h2: 'Installalo oggi stesso.',
    lede: 'Gratuito e open source con licenza Apache 2.0.',
    reqTitle: 'Prima di scaricare',
    req: [
      ['Sistema operativo', 'Windows 10/11 con WSL2 attivato'],
      ['Docker Desktop', 'installato e in esecuzione'],
      ['Ollama', 'installato sull\'host Windows'],
      ['Hardware', 'minimo 8 GB di RAM, consigliati 16 GB, consigliata una GPU NVIDIA con 8 GB o più di VRAM'],
    ],
    installer: `Installer (.exe) · ${SIZE_MB} MB`,
    portable: 'Portable',
    all: 'Tutti i download',
    shaTitle: 'SHA-256',
    verify: 'Verifica con PowerShell:',
  },
};
