import { byLang, type Lang } from './ui';
// Copy for the tour page ("one evening with the letters"), EN and DE. The story and the screenshots: ~/nightbuild/tour/scenario-tour.md
// on the build server; the pictures are in src/assets/tour/ (tools/tour-shots.mjs). Which pictures belong to which step is fixed
// in src/components/TourPage.astro; here are only the words. Every person, company, place and number in the pictures is invented.

export type ShotId = 'pc-1-home' | 'pc-2-inbox' | 'pc-3-chat' | 'pc-4-source' | 'pc-5-scam' | 'pc-6-deadlines' | 'pc-7-privacy' | 'pc-8-phone'
  | 'phone-1-home' | 'phone-2-chat' | 'phone-3-deadlines' | 'phone-4-pc' | 'phone-5-add';

const tourBase = {
  en: {
    meta: { title: 'Tour: one evening with the letters | StarkLLM', description: 'See StarkLLM at work in nine steps: five letters, the next deadlines, a question in your own words, the source, a fake letter, the phone and privacy.' },
    hero: { eyebrow: 'Tour', h1: 'One evening with the letters', lede: 'Emma Clarke from Northbridge has five letters on her desk. Here is how StarkLLM helps her with them, step by step, on her PC and on her phone.' },
    note: 'Emma, her town, the companies and every name, amount and account number in the pictures are invented.',
    step: 'Step',
    steps: [
      { h: 'The letters arrive', p: 'In the last few weeks five letters came: the electricity bill, the council tax, the service charges, the car insurance and a notice about a parcel. Emma photographs them with her phone or drags the PDFs into StarkLLM. They all go into her workspace "Letters" on her PC.' },
      { h: 'What do I have to do?', p: 'The start page shows the next dates with the amount and the letter they come from, and the newest documents.' },
      { h: 'The inbox sorts it', p: 'For every letter StarkLLM shows the kind, the sender, the amounts and the deadline. One letter is marked as a possible scam.' },
      { h: 'Ask in your own words', p: 'Emma types: "What do I have to pay by the end of the year?" The answer lists the amounts and dates and names the letters they come from.' },
      { h: 'Check the source', p: 'A click on a source opens the letter at the line the amount comes from, so Emma can check it herself.' },
      { h: 'The fake letter', p: '"Is the parcel letter genuine?" A red box warns her: payment through a link or with gift cards and extreme time pressure are typical signs of a scam. Emma does not pay.' },
      { h: 'Never miss a date', p: 'All deadlines in one list: "Done" when a bill is paid, reminders before the day, and "Add to calendar" for her own calendar.' },
      { h: 'From the sofa', p: 'Later, on the sofa, Emma asks the same on her phone. The phone talks to her PC over the home Wi-Fi; the letters stay on the PC.' },
      { h: 'Private by design', p: 'Settings → Privacy & network lists every connection StarkLLM makes; on Emma\'s evening there was none. The "Fully offline" switch blocks them all.' },
    ],
    android: { text: 'The Android app is in a closed test on Google Play.', link: 'About the Android app' },
    fallback: 'For now this picture is in English; the version in this language follows soon.',
    shots: {
      'phone-5-add': { cap: 'On the phone, "Add to the chat" sends a photo or a file to the PC.', alt: 'Android app sheet "Add to the chat" with the buttons Camera, Photos and Files.' },
      'pc-1-home': { cap: 'Start page: the next deadlines with the amount, and the new letters.', alt: 'StarkLLM start page with the upcoming deadlines and their amounts and the newest documents, one of them marked as a possible scam.' },
      'phone-1-home': { cap: 'The same start page on the phone.', alt: 'Android app home screen with a greeting, the next three deadlines and the new documents.' },
      'pc-2-inbox': { cap: 'The inbox: what StarkLLM read in each letter. The parcel letter carries a scam warning.', alt: 'Inbox with one card per letter showing kind, sender, date, reference, amounts and bank account; the parcel letter has a red scam warning.' },
      'pc-3-chat': { cap: 'The answer names the letters it comes from.', alt: 'Chat with the question what has to be paid by the end of the year and an answer listing three amounts with due dates and their letters.' },
      'pc-4-source': { cap: 'The source view marks the line the amount comes from.', alt: 'A letter opened in StarkLLM with the sentence about the amount and the due date highlighted.' },
      'pc-5-scam': { cap: 'A red box warns before anything else.', alt: 'Chat with the question whether the parcel letter is genuine, answered with a red warning about typical signs of a scam.' },
      'pc-6-deadlines': { cap: 'Deadlines with "Done", reminders and "Add to calendar".', alt: 'List of deadlines with date, sender, amount, reminder options and a Done button for each.' },
      'phone-3-deadlines': { cap: 'The deadlines on the phone.', alt: 'Android app list of deadlines with date, sender, amount and Done.' },
      'pc-8-phone': { cap: 'On the PC: Settings → Phone. It stays off until you turn it on.', alt: 'StarkLLM settings, page Phone: allow a phone on the home network, and pair a phone with a QR code.' },
      'phone-2-chat': { cap: 'The same question on the phone, with its sources.', alt: 'Android app chat with the question about payments by the end of the year and an answer with three amounts and the source documents.' },
      'phone-4-pc': { cap: '"This PC": which PC the phone is connected to and what the phone may do.', alt: 'Android app screen "This PC": connected, StarkLLM version, AI model, automatic backup, protection at rest and what this phone may do.' },
      'pc-7-privacy': { cap: 'Every connection is listed; "Fully offline" blocks them all.', alt: 'Settings, Privacy & network: the "Fully offline" switch and a connection list that says there was no connection to the internet.' },
    } as Record<ShotId, { cap: string; alt: string }>,
    cta: { h2: 'Try it with your own letters', text: 'StarkLLM is free and open source. Your letters stay on your PC.', download: 'Download for Windows', product: 'How StarkLLM works' },
    links: { home: 'Take the tour: one evening with the letters', product: 'See StarkLLM at work: a short tour with five letters, on the PC and on the phone.', productLink: 'Take the tour' },
  },
  de: {
    meta: { title: 'Rundgang: ein Abend mit den Briefen | StarkLLM', description: 'StarkLLM bei der Arbeit, in neun Schritten: fünf Briefe, die nächsten Fristen, eine Frage in eigenen Worten, die Quelle, ein gefälschter Brief, das Handy und der Datenschutz.' },
    hero: { eyebrow: 'Rundgang', h1: 'Ein Abend mit den Briefen', lede: 'Anna Becker aus Musterstadt hat fünf Briefe auf dem Tisch. So hilft ihr StarkLLM damit, Schritt für Schritt, am PC und auf dem Handy.' },
    note: 'Anna, ihre Stadt, die Firmen und alle Namen, Beträge und Kontonummern auf den Bildern sind erfunden.',
    step: 'Schritt',
    steps: [
      { h: 'Die Briefe kommen', p: 'In den letzten Wochen kamen fünf Briefe: die Stromrechnung, die Grundsteuer, die Nebenkostenabrechnung, die Kfz-Versicherung und eine Nachricht über ein Paket. Anna fotografiert sie mit dem Handy oder zieht die PDFs in StarkLLM. Alles landet in ihrem Workspace „Briefe“ auf dem PC.' },
      { h: 'Was muss ich tun?', p: 'Die Startseite zeigt die nächsten Termine mit Betrag und dem Brief, aus dem sie stammen, und die neuesten Dokumente.' },
      { h: 'Der Posteingang sortiert', p: 'Zu jedem Brief zeigt StarkLLM die Art, den Absender, die Beträge und die Frist. Ein Brief ist als möglicher Betrug markiert.' },
      { h: 'Fragen in eigenen Worten', p: 'Anna tippt: „Was muss ich bis Jahresende bezahlen?“ Die Antwort nennt die Beträge und Termine und die Briefe, aus denen sie stammen.' },
      { h: 'Die Quelle prüfen', p: 'Ein Klick auf eine Quelle öffnet den Brief an der Zeile, aus der der Betrag stammt. So kann Anna selbst nachsehen.' },
      { h: 'Der gefälschte Brief', p: '„Ist der Paketbrief echt?“ Ein rotes Feld warnt: Zahlung über einen Link oder mit Gutscheinkarten und großer Zeitdruck sind typische Zeichen für Betrug. Anna zahlt nicht.' },
      { h: 'Keinen Termin verpassen', p: 'Alle Fristen in einer Liste: „Fertig“, wenn eine Rechnung bezahlt ist, Erinnerungen vor dem Tag und „Zum Kalender“ für den eigenen Kalender.' },
      { h: 'Vom Sofa aus', p: 'Später, auf dem Sofa, fragt Anna dasselbe auf dem Handy. Das Handy spricht über das WLAN zu Hause mit ihrem PC; die Briefe bleiben auf dem PC.' },
      { h: 'Privat von Anfang an', p: 'Einstellungen → Datenschutz & Netzwerk listet jede Verbindung, die StarkLLM aufbaut; an Annas Abend gab es keine. Der Schalter „Vollständig offline“ sperrt sie alle.' },
    ],
    android: { text: 'Die Android-App ist im geschlossenen Test bei Google Play.', link: 'Zur Android-App' },
    fallback: 'Dieses Bild ist vorerst auf Englisch; die Fassung in dieser Sprache folgt bald.',
    shots: {
      'phone-5-add': { cap: 'Auf dem Handy schickt „Zum Chat hinzufügen“ ein Foto oder eine Datei an den PC.', alt: 'Android-App, Fenster „Zum Chat hinzufügen“ mit den Knöpfen Kamera, Fotos und Dateien.' },
      'pc-1-home': { cap: 'Startseite: die nächsten Fristen mit Betrag und die neuen Briefe.', alt: 'StarkLLM-Startseite mit den kommenden Fristen und ihren Beträgen und den neuesten Dokumenten, eines davon als möglicher Betrug markiert.' },
      'phone-1-home': { cap: 'Dieselbe Startseite auf dem Handy.', alt: 'Startbildschirm der Android-App mit Begrüßung, den nächsten drei Fristen und den neuen Dokumenten.' },
      'pc-2-inbox': { cap: 'Der Posteingang: was StarkLLM in jedem Brief gelesen hat. Der Paketbrief trägt eine Betrugswarnung.', alt: 'Posteingang mit einer Karte je Brief mit Art, Absender, Datum, Zeichen, Beträgen und Bankkonto; der Paketbrief hat eine rote Betrugswarnung.' },
      'pc-3-chat': { cap: 'Die Antwort nennt die Briefe, aus denen sie stammt.', alt: 'Chat mit der Frage, was bis Jahresende zu bezahlen ist, und einer Antwort mit drei Beträgen, Fälligkeiten und den zugehörigen Briefen.' },
      'pc-4-source': { cap: 'Die Quellenansicht markiert die Zeile, aus der der Betrag stammt.', alt: 'Ein Brief, in StarkLLM geöffnet, mit dem markierten Satz über Betrag und Fälligkeit.' },
      'pc-5-scam': { cap: 'Ein rotes Feld warnt, bevor irgendetwas anderes kommt.', alt: 'Chat mit der Frage, ob der Paketbrief echt ist, beantwortet mit einer roten Warnung vor typischen Betrugszeichen.' },
      'pc-6-deadlines': { cap: 'Fristen mit „Fertig“, Erinnerungen und „Zum Kalender“.', alt: 'Liste der Fristen mit Datum, Absender, Betrag, Erinnerungen und je einem Knopf „Fertig“.' },
      'phone-3-deadlines': { cap: 'Die Fristen auf dem Handy.', alt: 'Fristenliste der Android-App mit Datum, Absender, Betrag und „Fertig“.' },
      'pc-8-phone': { cap: 'Am PC: Einstellungen → Telefon. Aus, bis Sie es einschalten.', alt: 'StarkLLM-Einstellungen, Seite Telefon: ein Telefon im Heimnetz zulassen und ein Telefon per QR-Code koppeln.' },
      'phone-2-chat': { cap: 'Dieselbe Frage auf dem Handy, mit ihren Quellen.', alt: 'Chat in der Android-App mit der Frage nach den Zahlungen bis Jahresende und einer Antwort mit drei Beträgen und den Quelldokumenten.' },
      'phone-4-pc': { cap: '„Dieser PC“: mit welchem PC das Handy verbunden ist und was es darf.', alt: 'Android-App, Seite „Dieser PC“: verbunden, StarkLLM-Version, KI-Modell, automatische Sicherung, Schutz im Ruhezustand und was dieses Handy darf.' },
      'pc-7-privacy': { cap: 'Jede Verbindung steht in der Liste; „Vollständig offline“ sperrt sie alle.', alt: 'Einstellungen, Datenschutz & Netzwerk: der Schalter „Vollständig offline“ und eine Verbindungsliste ohne Verbindung ins Internet.' },
    } as Record<ShotId, { cap: string; alt: string }>,
    cta: { h2: 'Probieren Sie es mit Ihren eigenen Briefen', text: 'StarkLLM ist kostenlos und quelloffen. Ihre Briefe bleiben auf Ihrem PC.', download: 'Für Windows herunterladen', product: 'So funktioniert StarkLLM' },
    links: { home: 'Zum Rundgang: ein Abend mit den Briefen', product: 'StarkLLM bei der Arbeit: ein kurzer Rundgang mit fünf Briefen, am PC und auf dem Handy.', productLink: 'Zum Rundgang' },
  },
};

// Other languages: src/i18n/langs/<lang>/tour.ts (default export, same shape as the English object).
export const tour = { ...tourBase, ...byLang(import.meta.glob('./langs/*/tour.ts', { eager: true, import: 'default' }), tourBase.en, 'tour') } as unknown as Record<Lang, typeof tourBase.en>;
