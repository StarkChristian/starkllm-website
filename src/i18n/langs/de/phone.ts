export default {
  meta: {
    title: 'Handy: StarkLLM für Android | StarkLLM',
    description: 'Die StarkLLM-App für Android fragt Ihren PC zu Ihren Dokumenten, sendet Fotos von Briefen und zeigt Ihre Fristen. Zu Hause direkt, unterwegs nur, wenn Sie es erlauben, verschlüsselt vom Handy bis zu Ihrem PC.',
  },
  hero: {
    eyebrow: 'Android · Vorschau',
    h1: 'Ihr Handy fragt. Ihr PC antwortet.',
    lede: 'Die StarkLLM-App für Android arbeitet mit Ihrem PC zusammen. Die Dokumente, der Index und das KI-Modell bleiben auf dem PC; das Handy fragt, sendet Fotos von Briefen und zeigt Ihre Fristen.',
  },
  does: {
    h2: 'Was das Handy kann',
    items: [
      { icon: 'chat', title: 'Zu Ihren Dokumenten fragen', text: 'Arbeitsbereiche und Chats Ihres PCs, Antworten, die nach und nach erscheinen, mit den genutzten Dokumenten als Chips, und der Hinweis auf Zitate, die nicht in Ihren Dokumenten stehen.' },
      { icon: 'camera', title: 'Briefe senden', text: 'Fotografieren Sie einen Brief oder teilen Sie ein PDF aus einer anderen App. Ihr PC liest es, auch den Text in Fotos. Fotos werden nach dem Senden auf dem Handy gelöscht.' },
      { icon: 'calendar', title: 'Fristen', text: 'Überfällig, heute, diese Woche, später. „Erledigt“ markiert eine Frist auf dem PC; ein Widget auf dem Startbildschirm zeigt die nächsten drei.' },
      { icon: 'mic', title: 'Diktieren', text: 'Halten Sie die Mikrofontaste und sprechen Sie. Das Sprachmodell auf Ihrem PC schreibt mit, kein Online-Dienst.' },
      { icon: 'pc', title: 'Dieser PC', text: 'Verbindung, Version, KI-Modell, Sicherung und Schutz auf einen Blick. Mit der passenden Stufe: jetzt sichern oder vollständig offline gehen, bestätigt mit Ihrem Fingerabdruck.' },
      { icon: 'lock', title: 'App-Sperre', text: 'Fingerabdruck beim Öffnen der App. Solange sie an ist, keine Screenshots und keine Vorschau in den zuletzt verwendeten Apps.' },
    ],
  },
  pair: {
    h2: 'In drei Schritten gekoppelt, zu Hause',
    steps: [
      { t: 'Einschalten', v: 'Öffnen Sie am PC Einstellungen › Telefon und schalten Sie die Handy-Verbindung ein. Standardmäßig ist sie aus.' },
      { t: 'QR-Code zeigen', v: 'Der Code gilt 5 Minuten und funktioniert einmal.' },
      { t: 'Mit der App scannen', v: 'Das Handy merkt sich das Zertifikat des PCs und spricht von da an nur mit diesem PC.' },
    ],
    note: 'Gekoppelt wird nur zu Hause, nie über das Relay. Mehrere PCs lassen sich koppeln, und Einstellungen › Telefon am PC listet jedes Handy mit „Entfernen“.',
  },
  connects: { h2: 'So verbindet es sich', levelsH: 'Je Handy wählen Sie, was es darf' },
  relay: {
    h2: 'Was das Relay sieht und was nicht',
    lede: 'Unterwegs treffen sich Handy und PC beim StarkLLM-Relay. Die Verschlüsselung reicht vom Handy bis zu Ihrem PC, das Relay leitet also nur Daten weiter.',
    cols: ['Das Relay sieht', 'Das Relay sieht nie', 'Das Relay bewahrt auf'],
    sees: ['Für welchen PC eine Verbindung ist (eine zufällige Kennung)', 'Wann eine Verbindung entsteht', 'Wie viele Daten fließen'],
    never: ['Ihre Fragen und Antworten', 'Ihre Dokumente und Fotos', 'Das Geräte-Token oder Ihr Konto'],
    keeps: ['Eine zufällige Kennung je PC', 'Einen Hash des Geheimnisses des PCs', 'Keine Inhalte und keine Inhaltsprotokolle'],
  },
  limits: {
    h2: 'Gut zu wissen',
    items: [
      'Die App ist eine Vorschau im geschlossenen Test bei Google Play. Eine iPhone-App gibt es nicht.',
      'Unterwegs funktioniert es nur, solange der PC an ist, StarkLLM läuft und nicht vollständig offline ist.',
      'Unterwegs laufen alle Daten verschlüsselt über das Relay. Eine direkte Verbindung zwischen Handy und PC ist geplant, mit dem Relay als Rückfall.',
      'Eine Frage vom Handy wird auf Ihrem PC ohne Websuche und ohne Cloud-Modelle beantwortet, auch unterwegs.',
      'Android 10 oder neuer. Die App hat keine Analyse, keinen Absturzbericht-Dienst und keine Google-Play-Dienste.',
    ],
  },
  play: { h2: 'Möchten Sie testen?', text: 'Die Android-App ist im geschlossenen Test bei Google Play. Wenn Sie mitmachen möchten, schreiben Sie an info@starkllm.com.' },
  shots: { pc: '12-settings-phone', phone: 'phone-01-chat' },
};
