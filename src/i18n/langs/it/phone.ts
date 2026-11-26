// Pagina Telefono (2026, nuova). Fonti: docs/android-companion.md, docs/phone-away.md, RELEASE_NOTES.md 2.4.0–2.6.0 (repository dell'app v2.6.0).
// Le sezioni "Come si collega" e i livelli provengono da src/i18n/release250.ts (product.phone), che ogni lingua ha.
export default {
  meta: {
    title: 'Telefono: StarkLLM per Android | StarkLLM',
    description: 'L’app StarkLLM per Android interroga il Suo PC sui Suoi documenti, invia foto di lettere e mostra le Sue scadenze. A casa direttamente, fuori casa solo se Lei lo consente, cifrato dal telefono al Suo PC.',
  },
  hero: {
    eyebrow: 'Android · anteprima',
    h1: 'Il telefono chiede. Il PC risponde.',
    lede: 'L’app StarkLLM per Android lavora insieme al Suo PC. I documenti, l’indice e il modello di IA restano sul PC; il telefono fa domande, invia foto di lettere e mostra le Sue scadenze.',
  },
  does: {
    h2: 'Che cosa fa il telefono',
    items: [
      { icon: 'chat', title: 'Domande sui Suoi documenti', text: 'Le aree di lavoro e le chat del Suo PC, risposte che arrivano man mano con i documenti usati come fonti, e l’avviso per le citazioni che non si trovano nei Suoi documenti.' },
      { icon: 'camera', title: 'Inviare lettere', text: 'Fotografi una lettera o condivida un PDF da un’altra app. Il Suo PC la legge, anche il testo nelle foto. Dopo l’invio le foto vengono eliminate dal telefono.' },
      { icon: 'calendar', title: 'Scadenze', text: 'Scadute, oggi, questa settimana, più avanti. «Fatto» segna una scadenza sul PC; un widget nella schermata iniziale mostra le prossime tre.' },
      { icon: 'mic', title: 'Dettatura', text: 'Tenga premuto il pulsante del microfono e parli. A trascrivere è il modello vocale sul Suo PC, non un servizio online.' },
      { icon: 'pc', title: 'Questo PC', text: 'Connessione, versione, modello di IA, backup e protezione a colpo d’occhio. Con il livello giusto: avviare subito un backup o passare completamente offline, confermando con l’impronta digitale.' },
      { icon: 'lock', title: 'Blocco dell’app', text: 'Impronta digitale all’apertura dell’app. Finché è attivo, niente screenshot e nessuna anteprima tra le app recenti.' },
    ],
  },
  pair: {
    h2: 'Abbinato in tre passaggi, a casa',
    steps: [
      { t: 'Lo attivi', v: 'Sul PC apra Impostazioni › Telefono e attivi il collegamento con il telefono. Per impostazione predefinita è spento.' },
      { t: 'Mostri il codice QR', v: 'Il codice vale 5 minuti e funziona una sola volta.' },
      { t: 'Lo scansioni con l’app', v: 'Il telefono memorizza il certificato del PC e da quel momento parla solo con quel PC.' },
    ],
    note: 'L’abbinamento funziona solo a casa, mai tramite il relay. Si possono abbinare più PC, e Impostazioni › Telefono sul PC elenca ogni telefono con «Rimuovi».',
  },
  connects: { h2: 'Come si collega', levelsH: 'Per ogni telefono, Lei sceglie che cosa può fare' },
  relay: {
    h2: 'Che cosa vede il relay, e che cosa no',
    lede: 'Fuori casa, il telefono e il Suo PC si incontrano presso il relay di StarkLLM. La cifratura va dal telefono al Suo PC, quindi il relay si limita a inoltrare byte.',
    cols: ['Il relay vede', 'Il relay non vede mai', 'Il relay conserva'],
    sees: ['Per quale PC è una connessione (un ID casuale)', 'Quando avviene una connessione', 'Quanti dati passano'],
    never: ['Le Sue domande e risposte', 'I Suoi documenti e le Sue foto', 'Il token del dispositivo o il Suo account'],
    keeps: ['Un ID casuale per ogni PC', 'Un hash del segreto del PC', 'Nessun contenuto e nessun registro dei contenuti'],
  },
  limits: {
    h2: 'Buono a sapersi',
    items: [
      'L’app è un’anteprima. Non esiste un’app per iPhone.',
      'Fuori casa funziona solo mentre il PC è acceso, StarkLLM è in esecuzione e non è completamente offline.',
      'Fuori casa tutti i dati passano cifrati attraverso il relay. È previsto un collegamento diretto tra telefono e PC, con il relay come riserva.',
      'Una domanda dal telefono riceve risposta sul Suo PC senza ricerca web e senza modelli cloud, anche fuori casa.',
      'Android 10 o successivo. L’app non ha strumenti di analisi, né un servizio di segnalazione degli arresti anomali, né i servizi Google Play.',
    ],
  },
  play: { h2: 'Come ottenere l’app Android', text: 'L’app Android è su Google Play in fase di test. Se desidera riceverla da Google Play, invii il Suo indirizzo e-mail a info@starkllm.com e riceverà il link a Google Play.' },
  shots: { pc: '12-settings-phone', phone: 'phone-01-chat' },
};
