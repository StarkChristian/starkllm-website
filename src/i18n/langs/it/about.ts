// Pagina Chi siamo (2026). Stesse chiavi di ../en/about.ts.
// La tabella di marcia elenca progetti, non promesse: fonti sono docs/phone-away.md ("next step"), docs/roadmap-2026-12.md e
// RELEASE_NOTES.md 2.2.1 (sandbox propria per eseguire codice) del repository dell'app, v2.6.0.
export default {
  meta: {
    title: 'Chi siamo | StarkLLM',
    description: 'Chi realizza StarkLLM, perché esiste, con quale licenza viene distribuito e che cosa arriverà in seguito.',
  },
  hero: {
    eyebrow: 'Chi siamo',
    h1: 'Fatto per i documenti che devono restare a casa.',
    lede: 'StarkLLM è un progetto gratuito e open source di Christian Stark, di Aquisgrana (Aachen), in Germania.',
  },
  what: {
    h2: 'Che cos’è StarkLLM',
    p: [
      'StarkLLM è un assistente IA privato e locale per Windows. Legge le Sue lettere e i Suoi documenti sul Suo PC, risponde indicando la pagina in cui ha trovato la risposta e svolge attività per Lei sui siti web e in una cartella di progetto, chiedendo prima di ogni passaggio importante.',
      'Ogni funzione principale gira sul Suo computer: i documenti, l’indice di ricerca e i modelli di IA. Nulla lascia il Suo PC, a meno che Lei non attivi una funzione online facoltativa, e Impostazioni › Privacy e rete elenca ogni connessione.',
    ],
  },
  why: {
    h2: 'Perché esiste',
    p: [
      'La maggior parte degli assistenti IA chiede di caricare ciò su cui si vuole fare domande. Per un avviso fiscale, un referto medico o un contratto è chiedere molto. StarkLLM dimostra che sono possibili risposte utili e basate sui documenti, mentre i documenti non lasciano mai la scrivania.',
      'È pensato per chi non può o non vuole caricare i propri documenti: famiglie alle prese con le carte, liberi professionisti, studenti, ricercatori e piccoli uffici.',
    ],
  },
  who: {
    h2: 'Chi lo realizza',
    p: 'StarkLLM è progettato e sviluppato da Christian Stark.',
    lines: ['Christian Stark', 'Maxstr. 14, 52070 Aachen (Aquisgrana), Germania', 'E-mail: info@starkllm.com'],
    contact: 'Contatti',
  },
  open: {
    h2: 'Open source',
    p: [
      'StarkLLM è open source con licenza Apache 2.0: gratuito per uso personale, di ricerca e commerciale. Il codice sorgente, le note di rilascio e i documenti sulla privacy sono su GitHub.',
      'Ha trovato un errore o ha un’idea? Apra una segnalazione su GitHub o scriva un’e-mail.',
    ],
    github: 'Codice sorgente su GitHub',
    issues: 'Segnalare un problema',
  },
  roadmap: {
    h2: 'Che cosa arriverà',
    lede: 'Progetti per il 2026 e il 2027, non promesse. Ogni passo arriva solo quando è stato collaudato.',
    items: [
      { when: 'Prossimo passo', title: 'Una linea diretta con il Suo telefono', text: 'Telefono e PC si collegheranno direttamente quando possibile, con il relay come riserva. In entrambi i casi la cifratura resta da un capo all’altro.' },
      { when: 'Prossimo passo', title: 'L’app Android su Google Play', text: 'Dal test chiuso a una versione pubblica.' },
      { when: 'Più avanti', title: 'Una sandbox propria per il codice', text: '«Esegui» sui blocchi di codice Python funzionerà di nuovo senza Docker, dentro una sandbox di StarkLLM.' },
      { when: 'In corso', title: 'Ogni pagina in ogni lingua', text: 'Questo sito in tutte le sei lingue dell’app, con screenshot e video dell’app in ciascuna lingua.' },
    ],
  },
  related: {
    h2: 'Progetto correlato',
    text: 'StarkLLM fa parte di un interesse più ampio per l’informatica che tutela la privacy. Per gli approcci crittografici ai dati privati, veda homomorphicprivacy.com.',
  },
};
