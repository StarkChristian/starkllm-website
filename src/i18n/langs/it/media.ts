// Testi alternativi degli screenshot dell'app e titoli/didascalie dei video, per nome del media (vedi "Media" in README.md).
// I file provengono dalla 2.6.0 pubblicata in italiano: src/assets/media/it/it-<nome>.png e
// public/media/video/it-<nome>.{webm,mp4,jpg,vtt}. Finché un file manca, la pagina mostra un segnaposto con questo testo.
export default {
  shots: {
    '01-home': 'Pagina iniziale di StarkLLM: le prossime scadenze e date di pagamento trovate nelle lettere, ciascuna con importo e pagina, e i documenti più recenti',
    '02-inbox': 'Posta in arrivo di StarkLLM: le lettere raggruppate in una pratica per mittente, la scadenza più vicina in alto, una lettera segnalata come possibile truffa',
    '03-chat-sources': 'Chat di StarkLLM: una domanda su una lettera riceve risposta con l’importo e la data di scadenza, e sotto la risposta le fonti',
    '04-source-page': 'Una fonte aperta alla sua pagina, con evidenziato il passaggio su cui si basa la risposta',
    '05-scam-warning': 'Un avviso rosso sopra una risposta: la lettera chiede un pagamento con un buono e tramite un link, e contiene una nota nascosta per gli assistenti IA',
    '06-book-summary': 'Una risposta su un intero libro, costruita dai riassunti dei capitoli, con le pagine che copre',
    '07-image-question': 'Una domanda su uno screenshot incollato, a cui risponde un modello visivo sul PC',
    '08-recording': 'La registrazione di una riunione trascritta come documento con i tempi, e una domanda su di essa',
    '09-web-task': 'Un’attività web nella finestra del browser di StarkLLM con la barra degli indirizzi, e i passaggi elencati accanto alla pagina',
    '10-terminal': 'Terminale in una cartella di progetto: una modifica a un file mostrata prima di essere eseguita, con i pulsanti per consentirla o no',
    '11-compare-models': 'Confronta modelli: la stessa domanda con le risposte di due modelli locali, fianco a fianco',
    '12-settings-phone': 'Impostazioni, Telefono: un telefono Android abbinato con l’interruttore «Anche fuori casa (tramite il relay)»',
    '13-privacy-network': 'Impostazioni, Privacy e rete: l’elenco di tutte le connessioni con ora, host e scopo, e l’interruttore «Completamente offline»',
    '14-themes': 'Impostazioni, Aspetto: la galleria dei temi, con un tema chiaro e uno scuro',
    '15-settings-models': 'Impostazioni, Modelli: il modello di chat, il modello di embedding e il modello visivo su questo PC',
    'phone-01-chat': 'L’app StarkLLM per Android: una risposta del PC con le fonti',
  },
  videos: {
    'v1-letter-answer': { title: 'Una lettera, una domanda, una risposta con la sua fonte', caption: 'Viene aggiunta una lettera. La risposta indica l’importo e la data, e un clic sulla fonte apre la pagina.' },
    'v2-web-task': { title: 'Un’attività web', caption: 'StarkLLM apre un sito nella propria finestra del browser, lo attraversa con alcuni clic e risponde con il link.' },
    'v3-terminal': { title: 'Terminale: aiuto con il codice', caption: 'Una modifica viene mostrata prima, viene eseguita dopo un sì, e «Annulla le modifiche ai file» la annulla.' },
    'v4-inbox': { title: 'La posta in arrivo', caption: 'Le lettere diventano pratiche per mittente, con scadenze, importi e la pagina da cui proviene ciascun dato.' },
    'v5-privacy': { title: 'Privacy e rete', caption: 'Ogni connessione è elencata, e un solo interruttore porta StarkLLM completamente offline.' },
  },
};
