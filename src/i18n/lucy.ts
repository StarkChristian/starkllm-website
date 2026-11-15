// Everything Lucy says, in English and German. The scripts contain no words: they read these texts from the page.
// Kept in its own file (not in ui.ts) so the language restructuring in PR #19 can move or merge it later without conflicts.
import { byLang, languages, type Lang } from './ui';

/** Which kind of page this is. `null` means Lucy must not appear (legal pages and pages that ask for the visitor's full attention). */
export type LucyProfile = 'home' | 'download' | 'product' | 'tech' | 'help' | 'manual' | 'about' | 'lost';

export function lucyProfile(path: string): LucyProfile | null {
  const p = path.replace(/\.html$/, '').replace(new RegExp(`^/(${Object.keys(languages).join('|')})(?=/|$)`), '') || '/';
  if (p === '/') return 'home';
  if (p === '/download') return 'download';
  if (p === '/product') return 'product';
  if (p === '/help') return 'help';
  if (p === '/manual') return 'manual';
  if (p === '/about') return 'about';
  if (p === '/404') return 'lost';
  if (p.startsWith('/tech-')) return 'tech';
  // Everything else (imprint, privacy policy and its translation, code signing policy, contact, ...) stays Lucy-free.
  return null;
}

/** The imprint and the privacy policy are German texts: Lucy speaks German there, whatever the interface language is. */
export const lucyLangFor = (path: string, lang: Lang): Lang => (['/impressum', '/datenschutz', '/code-signing'].includes(path.replace(/\.html$/, '')) ? 'de' : lang);

export type Step = { sel: string; text: string };

const lucyBase = {
  en: {
    title: 'Lucy, the StarkLLM robot',
    hide: 'Hide Lucy',
    ask: 'Ask me',
    show: 'Show Lucy',
    tour: 'Show me around',
    next: 'Next',
    finish: 'Finish',
    stop: 'Stop tour',
    step: 'Step {n} of {m}',
    stripText: 'Lucy is the StarkLLM guide.',
    hero: { line: "Hi, I'm Lucy! Your documents stay on your PC. Ask me anything about StarkLLM, or shall I show you around?" },
    download: {
      news: 'Version {v} is out!',
      newsDate: 'Released {d}.',
      point:
        'The big violet button downloads the installer. When you start it, Windows may say "Windows protected your PC". That happens because the installer is not code-signed, not because Windows found a problem. Click "More info", then "Run anyway". If you want to be sure first, compare the checksum below.',
    },
    privacy: 'Your documents, your search index, your chats and your models stay on this PC. A few extra features can go online, but only when you switch them on, and the chat tells you when a question leaves your PC.',
    localModels: 'The language models run on your own PC with Ollama. After the first download, StarkLLM keeps working without internet.',
    shot: {
      product: 'This is the chat. Ask about your documents, and the answer shows where it comes from.',
      'tech-rag': 'Here is an answer in the app. The sources are listed under it, so you can check them.',
      'tech-knowledge-base': 'This is the Knowledge Base with a folder that has been indexed.',
      'tech-voice': 'You find the voice options in the settings.',
      'tech-themes': 'This is the theme gallery in Settings, Appearance. Click a theme and it applies at once.',
    } as Record<string, string>,
    lost: { line: "Hmm, where did that page go? I looked everywhere, but I can't find it.", back: 'Back to the home page' },
    about: {
      h: 'About Lucy',
      p1: 'Lucy is the StarkLLM robot: a small blue helper with three yellow hairs. She explains things, points at screenshots and, if you ask, shows you around this website.',
      origin: 'Lucy\'s original artwork was made with the help of AI; we redrew it ourselves as a vector drawing so that she can move.',
      p2: 'She is quiet (no sound, ever), starts nothing on her own except a friendly wave, and stays out of the way. She answers questions about StarkLLM from the pages of this website, entirely in your browser. You can hide her with the small x next to her or the "Hide Lucy" button in her chat window, and your choice is remembered on your device only.',
    },
    chat: {
      open: 'Ask Lucy',
      title: 'Ask Lucy',
      close: 'Close',
      note: 'Lucy is an automated assistant, not a person. Her answers are quotes from the pages of this website. Your questions stay in your browser and are not sent anywhere. This is not legal or financial advice.',
      placeholder: 'Ask about StarkLLM',
      label: 'Your question',
      send: 'Send',
      suggestions: ['Is StarkLLM free?', 'Does my data leave my PC?', 'How do I install it?', 'Why does Windows warn me?'],
      suggestionsLabel: 'Try asking',
      loading: 'Lucy is getting ready…',
      loadError: 'I could not load my notes. Please try again later, or use the links below.',
      source: 'Source',
      also: 'Also see',
      none: 'I could not find that on this site.',
      noneLinks: 'You may find help here:',
      scoped: 'On this page I only answer from the text of the page itself, and I cannot give legal advice. Please read the page:',
      advice: 'I cannot give legal advice. You can read the legal texts of this site here, and for legal questions please ask a lawyer:',
      you: 'You',
      lucy: 'Lucy',
      clear: 'Clear conversation',
      hrefs: { help: '/help', manual: '/manual', contact: '/contact', issues: 'https://github.com/StarkChristian/StarkLLM/issues', privacy: '/privacy-policy', imprint: '/impressum' },
      links: { help: 'Help & Troubleshooting', manual: 'Manual', issues: 'GitHub issues', contact: 'Contact', privacy: 'Privacy policy', imprint: 'Imprint (Impressum)' },
    },
    tours: {
      home: [
        { sel: '.hero h1', text: 'StarkLLM is a free assistant for your letters and documents. It runs on your own Windows PC.' },
        { sel: '#how', text: 'This is the path of a question: your files, split into passages, searched by meaning and by words, answered by a model on your PC, with the source page.' },
        { sel: '.shot', text: 'The app in action: a question about a letter, answered with the amount, the due date and the page it comes from.' },
        { sel: '#features-h', text: 'Here are the main features: the inbox for letters, deadlines, scans and photos, warnings for fake letters, workspaces and more.' },
        { sel: '#priv-h', text: 'Privacy: no telemetry in the app. Online features are off until you switch them on.' },
        { sel: '#download', text: 'And here you can download it. It is free and open source.' },
      ],
      download: [
        { sel: '#rel-h', text: 'The newest version, its size and the installer button are here.' },
        { sel: '.sha', text: 'This checksum lets you check that your download is exactly the file we published.' },
        { sel: '#setup-h', text: 'These are the steps to install and start StarkLLM.' },
        { sel: '#pre-h', text: 'Before you download: what your PC needs.' },
        { sel: '#faq-h', text: 'Questions people ask, including the Windows warning.' },
      ],
      product: [
        { sel: '#life-h', text: 'From a file to an answer, step by step.' },
        { sel: '#let-h', text: 'The inbox for letters: one case per sender.' },
        { sel: '#dl-h', text: 'Deadlines from your letters, on the start page.' },
        { sel: '#thm-h', text: 'The app has thirteen themes.' },
        { sel: '#cta-h', text: 'Ready to try it? The download is at the end of the page.' },
      ],
      tech: [
        { sel: '.tech-text', text: 'This page explains one feature: what it is, why it matters and how StarkLLM does it.' },
        { sel: '.tech-body figure', text: 'This is how it looks in the app.' },
        { sel: '#more-h', text: 'More features are listed here.' },
      ],
      help: [
        { sel: '#how-h', text: 'This page helps when StarkLLM does not start or something goes wrong. First, how the pieces fit together.' },
        { sel: '#steps-h', text: 'A checklist with a test for every step. Work through it from top to bottom.' },
        { sel: '#problems-h', text: 'Common problems, each with the likely cause and what to do.' },
        { sel: '#report-h', text: 'Still stuck? This is what to send us.' },
        { sel: '#limits-h', text: 'What StarkLLM cannot do yet.' },
      ],
      manual: [
        { sel: '#what-it-is', text: 'The manual starts with what StarkLLM is. The list of sections at the top helps you jump around.' },
        { sel: '#hardware', text: 'What your PC needs: memory, graphics card and disk space.' },
        { sel: '#installation', text: 'How to install and start StarkLLM.' },
        { sel: '#first-week', text: 'A path for your first week: what to try in which order.' },
        { sel: '#inbox', text: 'The inbox: letters grouped into cases, with deadlines and amounts.' },
        { sel: '#knowledge-base', text: 'The Knowledge Base: folders on this PC that are read and kept searchable.' },
        { sel: '#troubleshooting', text: 'If something does not work, start here.' },
        { sel: '#faq', text: 'And the questions people ask most often.' },
      ],
      about: [],
      lost: [],
    } as Record<LucyProfile, Step[]>,
  },
  de: {
    title: 'Lucy, der StarkLLM-Roboter',
    hide: 'Lucy ausblenden',
    ask: 'Frag mich',
    show: 'Lucy einblenden',
    tour: 'Zeig mir die Seite',
    next: 'Weiter',
    finish: 'Fertig',
    stop: 'Rundgang beenden',
    step: 'Schritt {n} von {m}',
    stripText: 'Lucy ist die Begleiterin von StarkLLM.',
    hero: { line: 'Hallo, ich bin Lucy! Ihre Dokumente bleiben auf Ihrem PC. Fragen Sie mich etwas zu StarkLLM, oder soll ich Ihnen die Seite zeigen?' },
    download: {
      news: 'Version {v} ist da!',
      newsDate: 'Veröffentlicht am {d}.',
      point:
        'Mit dem großen violetten Knopf laden Sie den Installer herunter. Beim Start meldet Windows eventuell „Der Computer wurde durch Windows geschützt“. Das liegt daran, dass der Installer nicht digital signiert ist, nicht daran, dass Windows ein Problem gefunden hat. Klicken Sie auf „Weitere Informationen“ und dann auf „Trotzdem ausführen“. Wenn Sie vorher sicher sein möchten, vergleichen Sie die Prüfsumme weiter unten.',
    },
    privacy: 'Ihre Dokumente, Ihr Suchindex, Ihre Chats und Ihre Modelle bleiben auf diesem PC. Einige zusätzliche Funktionen können ins Internet gehen, aber nur, wenn Sie sie einschalten, und der Chat sagt Ihnen, wenn eine Frage Ihren PC verlässt.',
    localModels: 'Die Sprachmodelle laufen mit Ollama auf Ihrem eigenen PC. Nach dem ersten Download arbeitet StarkLLM auch ohne Internet weiter.',
    shot: {
      product: 'Das ist der Chat. Fragen Sie zu Ihren Dokumenten, und die Antwort zeigt, woher sie stammt.',
      'tech-rag': 'Hier sehen Sie eine Antwort in der App. Die Quellen stehen darunter, damit Sie sie prüfen können.',
      'tech-knowledge-base': 'Das ist die Knowledge Base mit einem Ordner, der indexiert wurde.',
      'tech-voice': 'Die Sprachoptionen finden Sie in den Einstellungen.',
      'tech-themes': 'Das ist die Theme-Galerie unter Einstellungen, Darstellung. Ein Klick auf ein Theme, und es gilt sofort.',
    } as Record<string, string>,
    lost: { line: 'Hm, wo ist diese Seite hin? Ich habe überall gesucht, aber ich finde sie nicht.', back: 'Zurück zur Startseite' },
    about: {
      h: 'Über Lucy',
      p1: 'Lucy ist der StarkLLM-Roboter: ein kleiner blauer Helfer mit drei gelben Haaren. Sie erklärt Dinge, zeigt auf Screenshots und führt Sie auf Wunsch über diese Website.',
      origin: 'Lucys ursprüngliche Zeichnung ist mit Hilfe von KI entstanden; wir haben sie selbst als Vektorgrafik neu gezeichnet, damit sie sich bewegen kann.',
      p2: 'Sie ist leise (nie ein Ton), startet von sich aus nur ein freundliches Winken und bleibt aus dem Weg. Fragen zu StarkLLM beantwortet sie aus den Seiten dieser Website, ganz in Ihrem Browser. Mit dem kleinen Kreuz neben ihr oder dem Knopf „Lucy ausblenden“ im Chatfenster blenden Sie sie aus; Ihre Wahl wird nur auf Ihrem Gerät gespeichert.',
    },
    chat: {
      open: 'Lucy fragen',
      title: 'Lucy fragen',
      close: 'Schließen',
      note: 'Lucy ist eine automatische Assistentin, keine Person. Ihre Antworten sind Zitate von den Seiten dieser Website. Ihre Fragen bleiben in Ihrem Browser und werden nirgendwohin gesendet. Das ist keine Rechts- oder Finanzberatung.',
      placeholder: 'Fragen zu StarkLLM',
      label: 'Ihre Frage',
      send: 'Senden',
      suggestions: ['Ist StarkLLM kostenlos?', 'Verlassen meine Daten meinen PC?', 'Wie installiere ich es?', 'Warum warnt mich Windows?'],
      suggestionsLabel: 'Zum Beispiel',
      loading: 'Lucy macht sich bereit …',
      loadError: 'Ich konnte meine Notizen nicht laden. Bitte versuchen Sie es später noch einmal oder nutzen Sie die Links unten.',
      source: 'Quelle',
      also: 'Siehe auch',
      none: 'Das habe ich auf dieser Website nicht gefunden.',
      noneLinks: 'Hilfe finden Sie hier:',
      scoped: 'Auf dieser Seite antworte ich nur aus dem Text der Seite selbst und gebe keine Rechtsberatung. Bitte lesen Sie die Seite:',
      advice: 'Ich gebe keine Rechtsberatung. Die rechtlichen Texte dieser Website finden Sie hier; bei rechtlichen Fragen wenden Sie sich bitte an eine Anwältin oder einen Anwalt:',
      you: 'Sie',
      lucy: 'Lucy',
      clear: 'Gespräch löschen',
      hrefs: { help: '/de/help', manual: '/de/manual', contact: '/contact', issues: 'https://github.com/StarkChristian/StarkLLM/issues', privacy: '/datenschutz', imprint: '/impressum' },
      links: { help: 'Hilfe und Problemlösung', manual: 'Handbuch', issues: 'GitHub-Issues', contact: 'Kontakt', privacy: 'Datenschutzerklärung', imprint: 'Impressum' },
    },
    tours: {
      home: [
        { sel: '.hero h1', text: 'StarkLLM ist ein kostenloser Assistent für Ihre Briefe und Dokumente. Er läuft auf Ihrem eigenen Windows-PC.' },
        { sel: '#how', text: 'So läuft eine Frage ab: Ihre Dateien, in Abschnitte geteilt, nach Bedeutung und nach Wörtern durchsucht, beantwortet von einem Modell auf Ihrem PC, mit der Quellseite.' },
        { sel: '.shot', text: 'Die App in Aktion: eine Frage zu einem Brief, beantwortet mit Betrag, Fälligkeit und der Seite, aus der die Antwort stammt.' },
        { sel: '#features-h', text: 'Hier die wichtigsten Funktionen: der Posteingang für Briefe, Fristen, Scans und Fotos, Warnungen vor gefälschten Briefen, Workspaces und mehr.' },
        { sel: '#priv-h', text: 'Datenschutz: keine Telemetrie in der App. Online-Funktionen sind aus, bis Sie sie einschalten.' },
        { sel: '#download', text: 'Und hier können Sie es herunterladen. Es ist kostenlos und Open Source.' },
      ],
      download: [
        { sel: '#rel-h', text: 'Hier stehen die neueste Version, ihre Größe und der Knopf für den Installer.' },
        { sel: '.sha', text: 'Mit dieser Prüfsumme prüfen Sie, ob Ihr Download genau die Datei ist, die wir veröffentlicht haben.' },
        { sel: '#setup-h', text: 'Das sind die Schritte, um StarkLLM zu installieren und zu starten.' },
        { sel: '#pre-h', text: 'Vor dem Download: was Ihr PC braucht.' },
        { sel: '#faq-h', text: 'Fragen, die oft gestellt werden, auch zur Windows-Warnung.' },
      ],
      product: [
        { sel: '#life-h', text: 'Von der Datei zur Antwort, Schritt für Schritt.' },
        { sel: '#let-h', text: 'Der Posteingang für Briefe: ein Fall pro Absender.' },
        { sel: '#dl-h', text: 'Fristen aus Ihren Briefen, auf der Startseite.' },
        { sel: '#thm-h', text: 'Die App hat dreizehn Themes.' },
        { sel: '#cta-h', text: 'Lust, es auszuprobieren? Der Download steht am Ende der Seite.' },
      ],
      tech: [
        { sel: '.tech-text', text: 'Diese Seite erklärt eine Funktion: was sie ist, warum sie wichtig ist und wie StarkLLM sie umsetzt.' },
        { sel: '.tech-body figure', text: 'So sieht es in der App aus.' },
        { sel: '#more-h', text: 'Weitere Funktionen stehen hier.' },
      ],
      help: [
        { sel: '#how-h', text: 'Diese Seite hilft, wenn StarkLLM nicht startet oder etwas schiefgeht. Zuerst: wie die Teile zusammenspielen.' },
        { sel: '#steps-h', text: 'Eine Checkliste mit einem Test für jeden Schritt. Gehen Sie sie von oben nach unten durch.' },
        { sel: '#problems-h', text: 'Häufige Probleme, jeweils mit der wahrscheinlichen Ursache und dem, was zu tun ist.' },
        { sel: '#report-h', text: 'Immer noch hängen? Das schicken Sie uns.' },
        { sel: '#limits-h', text: 'Was StarkLLM noch nicht kann.' },
      ],
      manual: [
        { sel: '#what-it-is', text: 'Das Handbuch beginnt damit, was StarkLLM ist. Die Liste der Abschnitte oben hilft beim Springen.' },
        { sel: '#hardware', text: 'Was Ihr PC braucht: Arbeitsspeicher, Grafikkarte und Speicherplatz.' },
        { sel: '#installation', text: 'So installieren und starten Sie StarkLLM.' },
        { sel: '#first-week', text: 'Ein Weg für Ihre erste Woche: was Sie in welcher Reihenfolge ausprobieren.' },
        { sel: '#inbox', text: 'Der Posteingang: Briefe, nach Vorgängen gruppiert, mit Fristen und Beträgen.' },
        { sel: '#knowledge-base', text: 'Die Knowledge Base: Ordner auf diesem PC, die gelesen und durchsuchbar gehalten werden.' },
        { sel: '#troubleshooting', text: 'Wenn etwas nicht funktioniert, fangen Sie hier an.' },
        { sel: '#faq', text: 'Und die Fragen, die am häufigsten gestellt werden.' },
      ],
      about: [],
      lost: [],
    } as Record<LucyProfile, Step[]>,
  },
} as const;

// Other languages: src/i18n/langs/<lang>/lucy.ts (default export, same shape as lucyBase.en).
export const lucy = { ...lucyBase, ...byLang(import.meta.glob('./langs/*/lucy.ts', { eager: true, import: 'default' }), lucyBase.en, 'lucy') } as unknown as Record<Lang, typeof lucyBase.en>;

export function fill(t: string, vars: Record<string, string>): string {
  return t.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
}
