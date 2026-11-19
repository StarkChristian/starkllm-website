// Pagina Android in italiano (stessa forma dell’oggetto inglese di src/i18n/android.ts).
export default {
  meta: { title: 'StarkLLM per Android (anteprima) | StarkLLM', description: 'Con StarkLLM per Android interroghi i tuoi documenti dal telefono mentre restano sul tuo PC Windows: solo nella rete di casa, cifrato, senza account e senza cloud. In test chiuso su Google Play.' },
  hero: { eyebrow: 'Android · Anteprima', h1: 'StarkLLM per Android', lede: 'Interroga i tuoi documenti dal telefono. Il telefono chiede, il tuo PC risponde: i documenti, l’indice di ricerca e il modello di IA restano sul tuo PC Windows.' },
  status: {
    h2: 'Stato: in test chiuso, non ancora pubblicata',
    text: 'L’app è in un test chiuso su Google Play prima che tutti possano scaricarla.',
    howH: 'Come partecipare',
    how: [
      'Scrivi a info@starkllm.com indicando l’indirizzo e-mail dell’account Google del tuo telefono.',
      'Riceverai il link al test su Google Play.',
      'Sul PC ti serve StarkLLM 2.4.0 o successivo. Arriverà presto; la pagina di download ha sempre la versione attuale.',
    ],
    mail: 'Scrivi a info@starkllm.com',
    download: 'Pagina di download',
  },
  how: {
    h2: 'Come funziona',
    items: [
      { t: 'Attivala sul PC', v: 'In StarkLLM sul tuo PC Windows apri Impostazioni > Telefono e attiva il collegamento con il telefono. Di serie è disattivato.' },
      { t: 'Abbina con un codice QR', v: 'Scegli «Mostra codice QR» sul PC e scansionalo una volta con l’app. Puoi abbinare più PC, per esempio quello di casa e quello dell’ufficio.' },
      { t: 'Solo nella rete di casa', v: 'Il telefono raggiunge il PC solo nella tua rete domestica. La connessione è cifrata con il certificato del PC, che il telefono memorizza e verifica: nessun altro nella rete può fingersi il tuo PC.' },
    ],
  },
  features: {
    h2: 'Cosa fa l’app',
    items: [
      { t: 'Domande sui tuoi documenti', v: 'Le domande vanno a StarkLLM sul tuo PC; la risposta arriva man mano, con i documenti che ha usato.' },
      { t: 'Inviare lettere e file', v: 'Fotografa una lettera, scegli foto o file (PDF, EPUB, Word, PowerPoint, testo, immagini) oppure usa «Condividi» in altre app. Il PC li legge, anche il testo nelle foto; le foto vengono cancellate dal telefono dopo l’invio.' },
      { t: 'Dettatura', v: 'Tieni premuto il pulsante del microfono. Il modello vocale del tuo PC lo trasforma in testo, non un servizio online.' },
      { t: 'Scadenze', v: 'Scadute, oggi, questa settimana e più avanti, come sul PC. I promemoria facoltativi interrogano il PC mentre il telefono è a casa, e un widget sulla schermata Home mostra le prossime tre.' },
      { t: 'Tre livelli per telefono', v: 'Sul PC scegli cosa può fare ogni telefono: solo chiedere; anche inviare documenti; anche avviare subito un backup e mettere StarkLLM completamente offline, ogni volta confermato con la tua impronta sul telefono.' },
      { t: 'Blocco, temi, lingue', v: 'Blocco dell’app con l’impronta, 13 temi e le sei lingue di StarkLLM: inglese, tedesco, spagnolo, francese, italiano e turco.' },
    ],
  },
  privacy: {
    h2: 'I tuoi documenti restano sul tuo PC',
    items: [
      'I documenti, l’indice di ricerca e il modello di IA restano sul PC. Il telefono conserva solo ciò che mostra (l’elenco delle chat, la chat aperta, le prossime scadenze) e le sue impostazioni.',
      'Nessun account, nessun cloud, nessun servizio di notifiche push, nessuna analisi.',
      'Una domanda dal telefono non va mai su internet: niente ricerca web e niente modelli cloud.',
    ],
  },
  req: {
    h2: 'Requisiti',
    items: [
      ['Telefono', 'Android 10 o successivo'],
      ['PC', 'StarkLLM 2.4.0 o successivo su Windows 10 o 11'],
      ['Rete', 'Telefono e PC nella stessa rete domestica'],
    ],
    not: 'Non ancora in questa prima versione: l’accesso fuori casa, un’app per iPhone e l’accesso dal telefono quando StarkLLM sul PC ha più account.',
  },
  cta: { h2: 'Provala in anticipo', text: 'Scrivici per partecipare al test chiuso. Nel frattempo StarkLLM per Windows si scarica gratis.', mail: 'Partecipa al test', download: 'StarkLLM per Windows', product: 'Torna al prodotto' },
  productLink: { text: 'Novità: con StarkLLM per Android interroghi i tuoi documenti dal telefono, nella tua rete domestica. L’app è in test chiuso su Google Play.', link: 'Informazioni sull’app Android' },
};
