import { V } from '../../../data/release';

export default {
  meta: { title: 'Prodotto | StarkLLM' },
  hero: { eyebrow: 'Prodotto', h1: 'Come funziona StarkLLM', lede: 'Una pipeline locale completa, pensata con la privacy dei dati in primo piano.' },
  lifecycle: {
    h2: 'Il ciclo di vita di un documento',
    lede: 'Quando aggiungi un PDF o un file di testo, l\'elaborazione resta sul tuo PC.',
    steps: [
      { k: 'Analisi', v: 'Parser locali estraggono il testo grezzo. I PDF scansionati e le immagini passano per l\'OCR o per la visione locale prima della divisione in chunk.' },
      { k: 'Chunk', v: 'Un algoritmo di chunking semantico divide il testo in blocchi logici che si sovrappongono.' },
      { k: 'Embedding', v: 'Un modello di embedding locale trasforma ogni blocco in un vettore, conservato nel tuo container ChromaDB privato.' },
      { k: 'Risposta', v: 'Quando fai una domanda, i passaggi più pertinenti vengono inseriti nella finestra di contesto del modello Ollama che hai scelto, così la risposta si basa sulle tue fonti.' },
    ],
  },
  letters: {
    tag: 'Inbox dei documenti',
    h2: 'Ogni lettera, letta e archiviata',
    lede: 'Aggiungi una lettera come PDF, scansione o foto dal telefono. StarkLLM la legge sul tuo PC e ti suggerisce ciò che ti serve. Non rinomina, non sposta e non elimina mai i tuoi file.',
    items: [
      { k: 'Che cosa legge', v: 'Il tipo di lettera (fattura, sollecito, avviso fiscale, contratto, multa e altro), il mittente, la data della lettera, numeri di riferimento come numero cliente, di contratto o codice fiscale, importi, conti bancari e scadenze, nelle lettere in inglese e in tedesco.' },
      { k: 'Ogni valore ha una fonte', v: 'Ogni valore si trova parola per parola in una pagina. Fai clic e la lettera si apre a quella pagina, con la riga evidenziata.' },
      { k: 'Pratiche per mittente', v: 'Le lettere dello stesso mittente vengono raggruppate, con in alto la pratica che ha la scadenza più vicina. Vengono segnalate la stessa lettera presente come foto e come PDF, una lettera sostituita e una possibile truffa.' },
      { k: 'Decidi tu', v: 'Segna una lettera come fatta o dalle un titolo tutto tuo. Il numero di lettere nuove compare accanto a "Inbox".' },
    ],
  },
  deadlines: {
    tag: 'Scadenze',
    h2: 'Le scadenze nella pagina iniziale',
    lede: 'La pagina iniziale mostra i tuoi documenti più recenti e le scadenze, gli appuntamenti e i pagamenti che vi sono stati trovati.',
    items: [
      { k: 'Con importo e pagina', v: 'Ogni data è accompagnata dalla sua frase, dall\'importo, se c\'è, e dalla pagina da cui è stata letta.' },
      { k: 'Aggiungi al calendario', v: '"Add to calendar" (aggiungi al calendario) salva le date come file di calendario, se lo chiedi.' },
      { k: 'Ricavate con regole, su questo PC', v: 'Date, importi e mittenti vengono trovati con regole fisse applicate al testo delle tue lettere, non indovinati da un modello, quindi ognuno è presente nel documento. Controlla la lettera prima di agire.' },
      { k: 'Lingue', v: 'Le lettere in inglese e in tedesco vengono comprese. Foto e scansioni vengono lette come testo inglese o tedesco. Le lettere in altre lingue vengono archiviate e si possono cercare, ma senza scadenze e importi. In arrivo con le prossime versioni (in lavorazione, non ancora rilasciato): regole per le lettere in francese, spagnolo, italiano e turco, e interfaccia in spagnolo, francese, italiano e turco.' },
    ],
  },
  verify: {
    tag: 'Intelligenza verificabile',
    h2: 'Risposte che puoi controllare',
    lede: 'I modelli linguistici possono produrre affermazioni prive di fondamento quando rispondono solo a memoria. StarkLLM affronta il problema con la Retrieval-Augmented Generation (RAG, generazione potenziata dal recupero di informazioni).',
    items: [
      { k: 'Risposte basate sulle fonti', v: 'L\'IA recupera passaggi di testo dai tuoi documenti esatti prima di formulare una risposta.' },
      { k: 'Passaggi che puoi leggere', v: 'Le risposte citano il nome del file di origine e l\'indicazione di una pagina o di una sezione. Fai clic su una fonte sotto una risposta per vedere, parola per parola, i passaggi su cui si è basata e aprire il documento a quella pagina.' },
      { k: 'Avvisi per le lettere false', v: 'Sopra la risposta compare un riquadro rosso se una lettera chiede un pagamento su un conto estero, con un buono o tramite un link, contiene testo rivolto agli assistenti IA, oppure se un mittente indica all\'improvviso un conto diverso.' },
    ],
  },
  library: {
    tag: 'Biblioteca permanente',
    h2: 'Una knowledge base che resta sincronizzata',
    lede: 'I caricamenti nel Workspace (area di lavoro) vanno bene per progetti isolati. La Global Knowledge Base (base di conoscenza globale) è la tua biblioteca di riferimento permanente, raggiungibile da ogni chat.',
    items: [
      { k: 'Indicizzazione di cartelle locali', v: 'Collega una cartella qualsiasi del tuo computer Windows. StarkLLM indicizza in modo ricorsivo i file supportati in una collezione vettoriale globale.' },
      { k: 'Accesso universale', v: 'Interroga la Knowledge Base da qualsiasi chat, in qualunque workspace ti trovi.' },
      { k: 'Sincronizzazione a intervalli', v: 'Circa una volta al minuto la Knowledge Base controlla la cartella collegata e reindicizza i file nuovi o modificati.' },
    ],
    compareH3: 'Documenti del Workspace o Knowledge Base?',
    compareLede: 'StarkLLM offre due modi per dare contesto all\'IA. Conoscere la differenza ti aiuta a tenere in ordine il materiale.',
    cards: [
      { title: 'Documenti del Workspace', points: ['Legati a un solo workspace.', 'Utili quando il lavoro deve restare isolato, per evitare la contaminazione del contesto.', 'Ideali per raccolte di documenti temporanee o specifiche di un progetto.'], ex: 'Esempio', exText: 'Una cartella di contratti per una singola causa o per la revisione contabile di un cliente.' },
      { title: 'Knowledge Base', points: ['Un livello globale e permanente.', 'Utile in tutte le chat e in tutti i workspace contemporaneamente.', 'Ideale per materiale di riferimento a lungo termine e archivi personali.'], ex: 'Esempio', exText: 'La tua biblioteca di ricerca in corso, un manuale o le procedure operative standard della tua azienda.' },
    ],
  },
  control: {
    tag: 'Controllo locale',
    h2: 'Adattalo al tuo hardware',
    lede: 'StarkLLM ti dà il controllo amministrativo sul tuo ambiente di inferenza locale.',
    items: [
      { k: 'Scelta del modello', v: 'Passa da un modello all\'altro, tra quelli scaricati con Ollama (per esempio Qwen 2.5, Llama 3.2, Mistral), direttamente dall\'interfaccia della chat.' },
      { k: 'Configurazione dell\'esecuzione', v: 'Regola la dimensione della finestra di contesto, la temperatura e i parametri avanzati per bilanciare velocità e profondità di ragionamento.' },
      { k: 'Instradamento rigorosamente su localhost', v: 'Il traffico API interno passa per le porte di Docker e dell\'host su localhost, così i tuoi dati restano sul tuo computer.' },
    ],
  },
  tools: {
    tag: 'Host MCP locale, nello stesso processo',
    h2: 'Strumenti che chiedono prima di agire',
    lede: 'A differenza degli strumenti di IA nel cloud, che eseguono i comandi da remoto, StarkLLM fa girare un host di strumenti dentro il proprio backend FastAPI. I modelli ottengono un accesso verificato e di sola lettura ai tuoi contenuti indicizzati.',
    items: [
      { k: 'Tre strumenti integrati', v: 'list_workspace_files esamina i file del workspace attivo. search_local_kb esegue una ricerca ibrida, vettoriale e BM25, negli archivi personali. fetch_cited_chunk recupera il testo esatto del passaggio.' },
      { k: 'Conferma umana obbligatoria', v: 'Ogni chiamata a uno strumento crea una scheda nella chat. Controlla i parametri, cambia i valori oppure annulla.' },
      { k: 'Difesa dai prompt ostili', v: 'Dai passaggi recuperati vengono tolti i marcatori di chiamata agli strumenti prima che arrivino al contesto del modello, e questo rende più difficile la prompt injection attraverso i documenti (nessuna tecnica elimina del tutto questo rischio).' },
      { k: 'Blocco di esecuzione lato server', v: 'Un token di invocazione monouso impedisce l\'esecuzione diretta e i tentativi di replay.' },
    ],
    card: { title: 'in_process_tool: list_workspace_files', badge: 'Isolamento locale', text: 'Lettore dei file del workspace, isolato per tenant. Il modello esamina i file del workspace attivo senza accedere al filesystem dell\'host.', example: 'Esempio di output', foot: 'Protetto da un blocco di esecuzione lato server e da un token di invocazione monouso.' },
  },
  themes: {
    tag: 'Estetica',
    h2: 'Tredici temi',
    lede: 'Pensati per lavorare con concentrazione in condizioni di luce diverse, con cambio immediato.',
    items: [
      { k: 'Tavolozza rapida', v: 'Fai clic sull\'icona della tavolozza nel piè di pagina della barra laterale per cambiare tema senza interrompere la tua ricerca.' },
      { k: 'Preferenza memorizzata', v: 'Il tema attivo viene conservato dopo gli aggiornamenti della pagina e i riavvii.' },
    ],
  },
  superior: {
    h2: 'Perché è diverso dai semplici client di chat locali',
    lede: 'Molti client desktop offrono solo un involucro per la chat o una divisione ingenua dei documenti. StarkLLM è costruito come una postazione di lavoro di precisione.',
    items: [
      { k: 'RAG ibrido con cross-encoder', v: 'La maggior parte degli strumenti RAG desktop si affida ai soli embedding vettoriali e può perdere parole chiave esatte. StarkLLM unisce la frequenza delle parole chiave di BM25 alla ricerca vettoriale densa, poi riordina i chunk con un cross-encoder TinyBERT locale.' },
      { k: 'Finestra nativa e autonoma', v: 'Niente schede del browser né barra degli indirizzi. Un\'app desktop autonoma con barra del titolo senza cornice, schermata iniziale, integrazione con l\'area di notifica di sistema e un installer NSIS per Windows.' },
      { k: 'Esecutore di codice Python', v: 'Esegui calcoli in Python, analisi dei dati e lavoro sulle formule sul tuo computer, con controlli sul codice, limiti di memoria e di tempo. Sono limiti di comodo, non una barriera di sicurezza: esegui solo codice di cui ti fidi.' },
      { k: 'API locale compatibile con OpenAI', v: 'Un gateway locale che espone /v1/chat/completions e /v1/models. Collega ai tuoi modelli locali IDE come Cursor, strumenti come Claude Code, plugin di Obsidian o i tuoi script Python.' },
    ],
  },
  tech: {
    h2: 'Le tecnologie di base',
    lede: 'Scopri l\'architettura e le capacità che stanno dietro a StarkLLM.',
  },
  cta: { h2: 'Pronto a provare StarkLLM?', text: 'Scarica la Windows Research Beta gratuita e open source.', installer: `Scarica l'installer v${V}`, all: 'Tutti i download', manual: 'Leggi il manuale' },
  // Descriptions of the 13 themes (the `themes` list in src/i18n/product.ts has no Italian field yet; see the report).
  themeTexts: {
    'Midnight Indigo': 'Il classico ardesia scuro con intensi riflessi indaco e viola.',
    'Cyberpunk Rose': 'Rosa e rosa acceso al neon, vivaci, con un caldo bagliore ambientale.',
    'OLED Pitch Black': 'Nero assoluto #000000 per il massimo contrasto e la massima autonomia della batteria.',
    'Liquid Glass': 'Vetro smerigliato traslucido con riflessi cangianti e multicolore.',
    'Matrix Emerald': 'Matrice di ossidiana con accenti di un verde smeraldo elettrico.',
    'Sunset Amber': 'Ardesia vulcanica con caldi accenti ambra e color fiamma.',
    'Arctic Frost': 'Blu marino sotto zero con brina cristallina azzurro ciano e blu.',
    'Daylight Minimal': 'Aspetto pulito, da luce del giorno, con ombre morbide e contrasto nitido.',
    'Doodle Chat': 'Carta calda con piccole bambole, cuori, lettere e stelle disegnate sullo sfondo.',
    'Doodle Night': 'Gli stessi disegni su uno sfondo di chat scuro e tranquillo.',
    'Flower Meadow': 'Piccoli fiori rosa, lilla e pesca su un delicato rosa confetto.',
    'Matrix Code': 'Pioggia di codice verde su nero, con un carattere a spaziatura fissa.',
    'Starry Night': 'Un cielo notturno tranquillo, pieno di piccole stelle, con caldi accenti dorati.',
  },
};
