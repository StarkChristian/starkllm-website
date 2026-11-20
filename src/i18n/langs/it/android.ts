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
    iosH: 'iPhone',
    ios: 'Non esiste ancora un’app StarkLLM per iPhone (iOS); solo l’app per Android è in test chiuso.',
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
  privacyPolicy: {
    h2: 'Informativa sulla privacy dell’app',
    intro: 'Questa è l’informativa sulla privacy dell’app «StarkLLM per Android» (aggiornata al 20 novembre 2026). Fa fede la versione tedesca; le altre lingue sono traduzioni a scopo informativo.',
    sections: [
      { h: 'Titolare del trattamento', p: 'Christian Stark, Maxstr. 14, 52070 Aquisgrana, Germania. E-mail: info@starkllm.com. Altri dati nelle note legali (Impressum).' },
      { h: 'Nessun dato a noi', p: 'L’app non invia dati né a noi né ad altre aziende. Nessun account presso di noi, nessuna analisi, nessuna pubblicità, nessun report sugli arresti anomali e nessuna libreria di terzi che trasmetta dati (né servizi Google Play né Firebase).' },
      { h: 'Solo il tuo PC', p: 'L’app si collega solo a StarkLLM sui PC che hai abbinato tu, e solo nella tua rete di casa (indirizzi di rete privati). La connessione è cifrata (TLS) con il certificato del PC, che l’app memorizza e verifica dall’abbinamento. Le tue domande, le foto e i documenti che scegli e le tue registrazioni di dettatura vanno solo a quel PC e vengono elaborate lì. Noi non riceviamo nulla.' },
      { h: 'Cosa resta sul telefono', p: 'Per ogni PC abbinato: nome, indirizzi di rete, porta, impronta del certificato e un token del dispositivo cifrato con una chiave dell’Android Keystore. Inoltre le tue impostazioni (per esempio tema, blocco dell’app, promemoria, spazio di lavoro e modello scelti) e una breve copia delle prossime scadenze per il widget e i promemoria. Foto e registrazioni di dettatura restano solo nella memoria temporanea dell’app e vengono cancellate dopo l’invio. I dati dell’app sono esclusi dai backup di Android e dal trasferimento a un nuovo dispositivo.' },
      { h: 'Autorizzazioni e perché', p: 'Fotocamera: per scansionare il codice QR del PC e fotografare lettere, solo dopo un tuo tocco. Microfono: per la dettatura, solo mentre tieni premuto il pulsante; la registrazione diventa testo sul tuo PC. Notifiche: per i promemoria facoltativi delle scadenze e mentre arriva una risposta. Biometria: per il blocco facoltativo dell’app e per confermare azioni sul PC; Android verifica la tua impronta, l’app non la riceve mai. Internet e rete: per raggiungere il tuo PC nella rete di casa.' },
      { h: 'Cancellazione', p: 'Disinstallando l’app si cancellano tutti i suoi dati dal telefono. «Dissocia questo telefono» cancella dal telefono l’abbinamento con quel PC; rimuovi anche il telefono sul PC in Impostazioni > Telefono.' },
      { h: 'Dati sul tuo PC', p: 'Ciò che StarkLLM salva e fa sul tuo PC dipende dall’app desktop di StarkLLM; vedi sotto «Come StarkLLM protegge la tua privacy».' },
      { h: 'Google Play', p: 'Se installi l’app da Google Play, Google tratta i dati necessari secondo la propria informativa sulla privacy. Google può fornirci statistiche aggregate (per esempio il numero di installazioni e, dagli utenti che l’hanno consentito in Android, report sugli arresti anomali); da esse non sappiamo chi sei.' },
      { h: 'I tuoi diritti', p: 'Tramite l’app non trattiamo noi alcun dato personale che ti riguardi. Se ci scrivi vale l’informativa sulla privacy di questo sito, che descrive anche i tuoi diritti secondo il GDPR (accesso, rettifica, cancellazione, limitazione, opposizione, portabilità e reclamo a un’autorità di controllo).' },
    ],
    links: { tech: 'Come StarkLLM protegge la tua privacy', site: 'Informativa sulla privacy di questo sito', imprint: 'Note legali (Impressum)' },
  },
  productLink: { text: 'Novità: con StarkLLM per Android interroghi i tuoi documenti dal telefono, nella tua rete domestica. L’app è in test chiuso su Google Play.', link: 'Informazioni sull’app Android' },
};
