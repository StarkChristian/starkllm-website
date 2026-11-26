// Panoramica sulla privacy (2026, nuova). L'informativa sulla privacy di questo sito resta separata (/datenschutz, /privacy-policy).
// Fonti: docs/privacy-network.md (la tabella; dove non coincide con il codice vale il codice: la ricerca web è DuckDuckGo,
// Startpage, Mojeek, Wikipedia), docs/verify-privacy.md, docs/encryption-design.md, docs/code-signing.md,
// .github/workflows/sbom.yml e RELEASE_NOTES.md del repository dell'app, v2.6.0.
export default {
  meta: {
    title: 'Privacy: che cosa resta sul Suo PC | StarkLLM',
    description: 'Che cosa non lascia mai il Suo PC, ogni connessione che StarkLLM può stabilire e quando, la protezione dei dati salvati, le versioni firmate, una distinta dei componenti software e come verificare tutto di persona.',
  },
  hero: {
    eyebrow: 'Privacy',
    h1: 'Privato per progetto. Verificabile da Lei.',
    lede: 'StarkLLM è fatto in modo che i Suoi documenti non abbiano mai bisogno di un cloud. Che cosa va online lo decide Lei, può vedere ogni connessione e non deve fidarsi sulla parola.',
  },
  stays: {
    h2: 'Che cosa non lascia mai il Suo PC',
    lede: 'Questi dati restano sul Suo disco e sul Suo processore o sulla Sua scheda grafica, qualunque cosa Lei attivi.',
    items: [
      { icon: 'doc', title: 'I Suoi documenti', text: 'Lettere, contratti, libri, scansioni, foto e registrazioni, e il testo ricavato da essi.' },
      { icon: 'chat', title: 'Le Sue chat', text: 'Domande, risposte e le loro fonti, a meno che non sia Lei a scegliere un modello cloud.' },
      { icon: 'search', title: 'L’indice di ricerca', text: 'I passaggi e i vettori di ogni documento, e i riassunti di quelli lunghi.' },
      { icon: 'pc', title: 'I modelli di IA', text: 'Girano sul Suo PC tramite Ollama. Dopo il primo download, StarkLLM funziona senza internet.' },
      { icon: 'inbox', title: 'Posta in arrivo e scadenze', text: 'Mittenti, importi, conti e date vengono trovati con regole sul Suo PC.' },
      { icon: 'eyeoff', title: 'Nulla su di Lei', text: 'StarkLLM non invia telemetria, segnalazioni di arresti anomali né statistiche d’uso. Nessuna pubblicità, nessun account su un server.' },
    ],
  },
  online: {
    h2: 'Che cosa va online, e quando',
    lede: 'Ogni connessione che StarkLLM può stabilire, come in Impostazioni › Privacy e rete. Ognuna resta spenta finché Lei non la attiva o la avvia, oppure avviene una sola volta per un download che Lei ha richiesto.',
    cols: ['Connessione', 'Destinazione', 'Quando', 'In una nuova installazione'],
    rows: [
      { what: 'Controllo degli aggiornamenti', host: 'api.github.com', when: 'All’avvio, se Lei ha acconsentito al primo avvio', def: 'Spento finché Lei non acconsente' },
      { what: 'Download degli aggiornamenti', host: 'github.com', when: 'Solo dopo «Scarica e installa»', def: 'Spento' },
      { what: 'Modelli di IA', host: 'registry.ollama.ai (tramite Ollama)', when: 'Al primo avvio, per i modelli mancanti', def: 'Quando servono' },
      { what: 'Installer di Ollama', host: 'ollama.com', when: 'Solo dopo «Installa Ollama per me»', def: 'Spento' },
      { what: 'Ricerca web', host: 'DuckDuckGo; se non risponde: Startpage, Mojeek, Wikipedia', when: 'Per ogni domanda, con il pulsante «Ricerca web» attivo', def: 'Spento' },
      { what: 'Attività web', host: 'I siti dell’attività che Lei ha scritto', when: 'Solo per un’attività web che Lei avvia', def: 'Spento' },
      { what: 'Importazioni dal web', host: 'L’indirizzo che Lei inserisce, YouTube, GitHub', when: 'Solo dopo «+ URL web», «+ Video YouTube» o «+ Repository GitHub»', def: 'Spento' },
      { what: 'Provider di modelli cloud', host: 'Il provider che Lei inserisce (per esempio OpenAI, DeepSeek, OpenRouter, Groq)', when: 'Ogni chat, finché un tale provider è selezionato; la chat mostra un contrassegno', def: 'Spento' },
      { what: 'Modelli cloud di Ollama', host: 'ollama.com (tramite Ollama)', when: 'Solo se Lei sceglie un modello il cui nome finisce con «cloud»', def: 'Spento' },
      { what: 'Prezzi di mercato', host: 'Yahoo Finance, CoinGecko', when: 'Solo dopo che Lei ha attivato il widget', def: 'Spento' },
      { what: 'Modelli vocali', host: 'huggingface.co', when: 'Al primo uso dell’input vocale o di una registrazione', def: 'Spento fino al primo uso' },
      { what: 'Lingue per il riconoscimento del testo', host: 'github.com', when: 'Solo dopo «Scarica» nelle Impostazioni', def: 'Spento' },
      { what: 'Telefono a casa', host: 'In entrata, da un telefono abbinato nella Sua rete di casa', when: 'Dopo che Lei ha attivato il collegamento con il telefono e abbinato un telefono', def: 'Spento' },
      { what: 'Telefono fuori casa', host: 'relay.starkllm.com (cifrato dal telefono al Suo PC)', when: 'Solo per i telefoni che Lei ha autorizzato fuori casa', def: 'Spento' },
    ],
    note: 'I comandi che Lei consente nel Terminale e i server di strumenti che aggiunge girano come Suoi programmi: non sono elencati, e a che cosa si collegano dipende da loro. Ollama e Windows hanno i propri controlli degli aggiornamenti, che StarkLLM non controlla.',
  },
  offline: {
    h2: 'Un solo interruttore: completamente offline',
    text: '«Completamente offline» in Impostazioni › Privacy e rete rifiuta ogni funzione online, chiude il collegamento con il Suo telefono e con il relay e non scarica mai nulla, nemmeno un aggiornamento. I Suoi documenti, la posta in arrivo e i modelli locali continuano a funzionare. Al primo avvio StarkLLM chiede una volta se restare online o passare completamente offline.',
  },
  atRest: {
    h2: 'Protezione dei dati salvati',
    lede: 'Facoltativa, in Impostazioni › Protezione: per un portatile perso, per un altro utente sullo stesso PC o per un backup in una cartella cloud.',
    items: [
      { k: 'Cifrati sul disco', v: 'Documenti, chat, nomi e titoli vengono cifrati sul disco, e anche l’indice di ricerca può essere bloccato. La chiave è legata al Suo account Windows.' },
      { k: 'Passphrase all’avvio', v: 'Una passphrase facoltativa con una chiave di ripristino. La passphrase non viene mai salvata.' },
      { k: 'Backup cifrato', v: 'Un unico file di backup che può conservare ovunque, anche in una cartella cloud; senza la passphrase è solo rumore. Un backup settimanale automatico conserva più copie.' },
    ],
    limits: 'Non protegge da un malware che gira con il Suo account mentre StarkLLM è aperto. BitLocker resta consigliato: protegge anche i programmi e i modelli.',
  },
  signed: {
    h2: 'Versioni firmate',
    text: 'Dalla 2.1.2 l’installer, StarkLLM.exe, il programma di disinstallazione e i file di programma del motore sono firmati con un certificato Certum intestato a «Open Source Developer Christian Stark». L’aggiornamento integrato installa solo aggiornamenti firmati con questo nome.',
    link: 'Criteri di firma del codice',
  },
  sbom: {
    h2: 'Una distinta dei componenti per ogni versione',
    text: 'Ogni versione su GitHub include una distinta dei componenti software (SBOM, CycloneDX) per l’app e per il motore: l’elenco di tutte le librerie contenute, con la loro versione.',
    link: 'Le versioni su GitHub',
  },
  check: {
    h2: 'Lo verifichi di persona',
    lede: 'Non deve fidarsi delle schermate di StarkLLM. Attivi «Completamente offline», usi l’app e osservi.',
    steps: [
      { t: 'Monitoraggio risorse', v: 'Win + R, «resmon», scheda Rete. Con «Completamente offline» attivo, StarkLLM.exe, python.exe e ollama.exe dovrebbero comunicare solo con 127.0.0.1.' },
      { t: 'PowerShell', v: 'Elenca ogni connessione aperta che non va verso questo PC, con il programma che l’ha aperta:' },
      { t: 'Wireshark', v: 'Il controllo più rigoroso: registri il traffico sulla Sua scheda di rete e filtri via quello locale. Poi attivi la ricerca web e veda comparire DuckDuckGo: così sa che il controllo funziona.' },
    ],
    code: "Get-NetTCPConnection -State Established |\n  Where-Object { $_.RemoteAddress -notin '127.0.0.1','::1' } |\n  ForEach-Object { $p = Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue\n    [pscustomobject]@{ Process = $p.ProcessName; Remote = \"$($_.RemoteAddress):$($_.RemotePort)\" } } |\n  Sort-Object Process, Remote | Format-Table -AutoSize",
    link: 'La guida completa su GitHub',
  },
  site: {
    h2: 'E questo sito?',
    text: 'Non imposta cookie, non usa strumenti di analisi e non carica caratteri, script o video da altri server. Lucy, l’assistente di queste pagine, risponde nel Suo browser; le Sue domande non vengono inviate da nessuna parte.',
    link: 'Informativa sulla privacy di questo sito',
  },
};
