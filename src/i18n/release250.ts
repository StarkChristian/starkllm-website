import type { Lang } from './ui';
// What StarkLLM 2.5.0 adds (2.4.0 was folded into it), for the home and product pages. English and German only for now:
// languages without an entry here simply do not show these sections until they are translated.
// Source of truth: RELEASE_NOTES.md (2.5.0, 2.4.0), docs/android-companion.md and docs/privacy-network.md of the app repo.
// Keep every claim exactly true. The phone works on the home network only; do not promise "away from home".

type Item = { icon: string; title: string; text: string; badge?: string };
type KV = { k: string; v: string };

const en = {
  hero: {
    news: 'New in 2.5.0: web tasks, help with code, your phone',
    chips: ['Runs on your Windows PC', 'Asks before it acts', 'No telemetry', 'Free · Apache 2.0'],
  },
  news: {
    tag: 'New in 2.5.0',
    h2: 'StarkLLM now does tasks for you.',
    lede: 'On websites, in a project folder and from your phone. You see every step, and it asks before anything that matters. Your documents and the AI model stay on your PC.',
    items: [
      { icon: 'web', title: 'Web tasks in its own browser window', text: 'StarkLLM opens its own browser window and works on websites, for example to find the cheapest flight on a day. You see every step. It asks before anything that buys, books, pays, sends or deletes. Sign-ins, payments and "are you a robot" checks always stay with you. A task can be repeated daily or weekly.' },
      { icon: 'terminal', title: 'Help with code in a project folder', text: 'Choose a folder with "Terminal": StarkLLM reads and changes files there and runs PowerShell commands. Every change is shown first, every command runs only after your yes, and "Undo the file changes" puts the files back.' },
      { icon: 'image', title: 'Questions about an image', text: 'Paste a screenshot or choose a photo, and a vision model on your PC answers. The image is made smaller, its hidden data (place, camera) is removed, and it is not stored.' },
      { icon: 'audio', title: 'Recordings become documents', text: 'Meetings, lectures and voice memos are written down on your PC with times, by Whisper large-v3-turbo (downloaded once, about 1.6 GB). Then you ask about them like about any document.' },
      { icon: 'compare', title: 'Two models side by side', text: '"Compare models" asks a second local model the same question. You keep the better answer.' },
      { icon: 'export', title: 'Word and PDF, with sources', text: 'Save a whole chat or a single answer as a Word document or a PDF, with the sources it is based on.' },
      { icon: 'plug', title: 'Your own tool servers (MCP)', text: 'Add MCP servers that run on your PC in Settings › Tools. Every tool is off until you turn it on, and every call waits for your yes.' },
      { icon: 'phone', title: 'Your Android phone', badge: 'Preview', text: 'Pair the StarkLLM app for Android by QR code, then ask about your documents, send photos of letters and see your deadlines. Home network only, encrypted with a certificate the phone checks. Per phone you choose: ask only, also send documents, or also manage this PC.' },
      { icon: 'search', title: 'Web search with fallback engines', text: 'When you turn on web search, your question goes to DuckDuckGo. Only if it does not answer, StarkLLM tries Mullvad Leta, then Mojeek: one engine at a time, never several at once.' },
    ] as Item[],
    note: 'Web tasks and the terminal work best with a local model of 14B or more (for example qwen3:14b); small 7B models stop safely but finish few tasks.',
    more: 'How the new features work',
  },
  product: {
    tasks: {
      tag: 'New in 2.5.0',
      h2: 'Tasks it does for you',
      lede: 'StarkLLM can now act, not only answer. It shows what it is about to do and waits for your yes at every step that matters.',
      web: {
        h3: 'Web tasks',
        items: [
          { k: 'Its own browser window', v: 'Start a "Web task" in the chat. StarkLLM opens a separate browser window and you watch every step. "Take over" lets you work in the window yourself and hand it back.' },
          { k: 'It asks first', v: 'Before anything that buys, books, pays, sends or deletes, StarkLLM stops and asks. Bank, health and government sites are opened only after your yes, adult sites never.' },
          { k: 'Some steps are always yours', v: 'Sign-ins, payments and "are you a robot" checks are never done by StarkLLM.' },
          { k: 'Again tomorrow', v: 'Save the page to the workspace, keep the task for later or repeat it daily or weekly. A repeated task only looks, and a notification tells you when the answer changed.' },
        ] as KV[],
      },
      terminal: {
        h3: 'Terminal: help with code',
        items: [
          { k: 'One project folder', v: 'Choose a folder with "Terminal". StarkLLM reads and changes files there and runs PowerShell commands. It never leaves that folder and never reads keys or .env files.' },
          { k: 'Your yes for every step', v: 'Every file change is shown before it is made, and every command runs only after your yes. Commands that change Windows or its security are refused.' },
          { k: 'Undo', v: '"Undo the file changes" puts the files back as they were.' },
        ] as KV[],
      },
      note: 'Web tasks and the terminal work best with a local model of 14B or more (for example qwen3:14b); small 7B models stop safely but finish few tasks.',
    },
    more: {
      tag: 'Also new',
      h2: 'More ways to work with your files',
      icons: ['image', 'audio', 'compare', 'export', 'plug', 'search'],
    },
    phone: {
      tag: 'Android · preview',
      h2: 'Your phone joins in',
      lede: 'The StarkLLM app for Android works together with your PC. The documents and the AI model stay on the PC; the phone asks, sends photos of letters and shows your deadlines.',
      items: [
        { k: 'Paired by QR code', v: 'Settings › Phone shows a QR code. A phone reaches your PC only after it was paired, and it stays paired until you remove it, or until its account signs out or changes its password.' },
        { k: 'Home network only, encrypted', v: 'The phone connects over your home network only. The connection is encrypted, and the phone accepts only your PC\'s own certificate, fixed at pairing, so no other device in the Wi-Fi can pose as your PC.' },
        { k: 'Never online from the phone', v: 'A question from the phone stays on your PC: no web search and no cloud models. "Fully offline" on the PC closes the link.' },
        { k: 'Several accounts on one PC', v: 'Each phone belongs to the StarkLLM account that showed its QR code.' },
      ] as KV[],
      levelsH: 'Per phone, you choose what it may do',
      levels: [
        { k: 'Ask only', v: 'Reads workspaces, chats, the inbox and deadlines, and asks questions. Changes nothing.' },
        { k: 'Ask and send documents', v: 'Also sends photos and documents, deletes chats and marks deadlines as done.' },
        { k: 'Ask, send and manage this PC', v: 'Also starts a backup and can switch StarkLLM fully offline. The phone asks for your fingerprint first.' },
      ] as KV[],
      note: 'The Android app is a preview in a closed test on Google Play. Using it away from your home network is not part of this version.',
    },
  },
};

const de: typeof en = {
  hero: {
    news: 'Neu in 2.5.0: Web-Aufgaben, Hilfe beim Code, Ihr Handy',
    chips: ['Läuft auf Ihrem Windows-PC', 'Fragt, bevor es handelt', 'Keine Telemetrie', 'Kostenlos · Apache 2.0'],
  },
  news: {
    tag: 'Neu in 2.5.0',
    h2: 'StarkLLM erledigt jetzt Aufgaben für Sie.',
    lede: 'Auf Websites, in einem Projektordner und vom Handy aus. Sie sehen jeden Schritt, und vor allem Wichtigen fragt StarkLLM nach. Ihre Dokumente und das KI-Modell bleiben auf Ihrem PC.',
    items: [
      { icon: 'web', title: 'Web-Aufgaben im eigenen Browserfenster', text: 'StarkLLM öffnet ein eigenes Browserfenster und arbeitet auf Websites, zum Beispiel um den günstigsten Flug an einem Tag zu finden. Sie sehen jeden Schritt. Bevor etwas gekauft, gebucht, bezahlt, gesendet oder gelöscht wird, fragt StarkLLM nach. Anmeldungen, Zahlungen und „Sind Sie ein Roboter?“-Prüfungen bleiben immer bei Ihnen. Eine Aufgabe lässt sich täglich oder wöchentlich wiederholen.' },
      { icon: 'terminal', title: 'Hilfe beim Code in einem Projektordner', text: 'Wählen Sie mit „Terminal“ einen Ordner: StarkLLM liest und ändert dort Dateien und führt PowerShell-Befehle aus. Jede Änderung wird zuerst gezeigt, jeder Befehl läuft erst nach Ihrem Ja, und „Dateiänderungen rückgängig machen“ stellt die Dateien wieder her.' },
      { icon: 'image', title: 'Fragen zu einem Bild', text: 'Fügen Sie einen Screenshot ein oder wählen Sie ein Foto, und ein Bildmodell auf Ihrem PC antwortet. Das Bild wird verkleinert, seine versteckten Daten (Ort, Kamera) werden entfernt, und es wird nicht gespeichert.' },
      { icon: 'audio', title: 'Aufnahmen werden zu Dokumenten', text: 'Besprechungen, Vorlesungen und Sprachmemos werden auf Ihrem PC mit Zeitangaben aufgeschrieben, von Whisper large-v3-turbo (einmalig geladen, etwa 1,6 GB). Danach fragen Sie dazu wie zu jedem anderen Dokument.' },
      { icon: 'compare', title: 'Zwei Modelle nebeneinander', text: '„Modelle vergleichen“ stellt einem zweiten lokalen Modell dieselbe Frage. Sie behalten die bessere Antwort.' },
      { icon: 'export', title: 'Word und PDF, mit Quellen', text: 'Speichern Sie einen ganzen Chat oder eine einzelne Antwort als Word-Dokument oder PDF, mit den Quellen, auf denen sie beruht.' },
      { icon: 'plug', title: 'Eigene Tool-Server (MCP)', text: 'Fügen Sie in den Einstellungen MCP-Server hinzu, die auf Ihrem PC laufen. Jedes Werkzeug ist aus, bis Sie es einschalten, und jeder Aufruf wartet auf Ihr Ja.' },
      { icon: 'phone', title: 'Ihr Android-Handy', badge: 'Vorschau', text: 'Koppeln Sie die StarkLLM-App für Android per QR-Code, dann fragen Sie zu Ihren Dokumenten, senden Fotos von Briefen und sehen Ihre Fristen. Nur im Heimnetz, verschlüsselt mit einem Zertifikat, das das Handy prüft. Je Handy wählen Sie: nur fragen, auch Dokumente senden oder auch diesen PC verwalten.' },
      { icon: 'search', title: 'Websuche mit Ersatz-Suchmaschinen', text: 'Wenn Sie die Websuche einschalten, geht Ihre Frage an DuckDuckGo. Nur wenn dort keine Antwort kommt, versucht StarkLLM Mullvad Leta, dann Mojeek: immer nur eine Suchmaschine, nie mehrere zugleich.' },
    ],
    note: 'Web-Aufgaben und das Terminal funktionieren am besten mit einem lokalen Modell ab 14B (zum Beispiel qwen3:14b); kleine 7B-Modelle halten sicher an, schaffen aber nur wenige Aufgaben.',
    more: 'So funktionieren die neuen Funktionen',
  },
  product: {
    tasks: {
      tag: 'Neu in 2.5.0',
      h2: 'Aufgaben, die StarkLLM für Sie erledigt',
      lede: 'StarkLLM kann jetzt handeln, nicht nur antworten. Es zeigt, was es als Nächstes tun will, und wartet bei jedem wichtigen Schritt auf Ihr Ja.',
      web: {
        h3: 'Web-Aufgaben',
        items: [
          { k: 'Ein eigenes Browserfenster', v: 'Starten Sie im Chat eine „Web-Aufgabe“. StarkLLM öffnet ein separates Browserfenster, und Sie sehen jeden Schritt. Mit „Selbst übernehmen“ arbeiten Sie selbst im Fenster und geben es danach zurück.' },
          { k: 'Erst fragen', v: 'Bevor etwas gekauft, gebucht, bezahlt, gesendet oder gelöscht wird, hält StarkLLM an und fragt. Seiten von Banken, Gesundheitsdiensten und Behörden werden nur nach Ihrem Ja geöffnet, Seiten für Erwachsene nie.' },
          { k: 'Manche Schritte bleiben Ihre', v: 'Anmeldungen, Zahlungen und „Sind Sie ein Roboter?“-Prüfungen übernimmt StarkLLM nie.' },
          { k: 'Morgen noch einmal', v: 'Speichern Sie die Seite im Arbeitsbereich, bewahren Sie die Aufgabe für später auf oder wiederholen Sie sie täglich oder wöchentlich. Eine wiederholte Aufgabe schaut nur nach, und eine Benachrichtigung zeigt, wenn sich die Antwort geändert hat.' },
        ],
      },
      terminal: {
        h3: 'Terminal: Hilfe beim Code',
        items: [
          { k: 'Ein Projektordner', v: 'Wählen Sie mit „Terminal“ einen Ordner. StarkLLM liest und ändert dort Dateien und führt PowerShell-Befehle aus. Es verlässt diesen Ordner nie und liest keine Schlüssel und keine .env-Dateien.' },
          { k: 'Ihr Ja für jeden Schritt', v: 'Jede Dateiänderung wird gezeigt, bevor sie geschieht, und jeder Befehl läuft erst nach Ihrem Ja. Befehle, die Windows oder seine Sicherheit verändern, werden abgelehnt.' },
          { k: 'Rückgängig', v: '„Dateiänderungen rückgängig machen“ stellt die Dateien so wieder her, wie sie waren.' },
        ],
      },
      note: 'Web-Aufgaben und das Terminal funktionieren am besten mit einem lokalen Modell ab 14B (zum Beispiel qwen3:14b); kleine 7B-Modelle halten sicher an, schaffen aber nur wenige Aufgaben.',
    },
    more: {
      tag: 'Ebenfalls neu',
      h2: 'Mehr Möglichkeiten mit Ihren Dateien',
      icons: ['image', 'audio', 'compare', 'export', 'plug', 'search'],
    },
    phone: {
      tag: 'Android · Vorschau',
      h2: 'Ihr Handy macht mit',
      lede: 'Die StarkLLM-App für Android arbeitet mit Ihrem PC zusammen. Die Dokumente und das KI-Modell bleiben auf dem PC; das Handy fragt, sendet Fotos von Briefen und zeigt Ihre Fristen.',
      items: [
        { k: 'Gekoppelt per QR-Code', v: 'Einstellungen › Telefon zeigt einen QR-Code. Ein Handy erreicht Ihren PC erst, wenn es gekoppelt wurde, und bleibt gekoppelt, bis Sie es entfernen oder bis sich sein Konto abmeldet oder sein Passwort ändert.' },
        { k: 'Nur im Heimnetz, verschlüsselt', v: 'Das Handy verbindet sich nur über Ihr Heimnetz. Die Verbindung ist verschlüsselt, und das Handy akzeptiert nur das eigene Zertifikat Ihres PCs, das beim Koppeln festgelegt wird. So kann sich kein anderes Gerät im WLAN als Ihr PC ausgeben.' },
        { k: 'Vom Handy nie online', v: 'Eine Frage vom Handy bleibt auf Ihrem PC: keine Websuche und keine Cloud-Modelle. „Vollständig offline“ am PC trennt die Verbindung.' },
        { k: 'Mehrere Konten auf einem PC', v: 'Jedes Handy gehört zu dem StarkLLM-Konto, das seinen QR-Code angezeigt hat.' },
      ],
      levelsH: 'Je Handy wählen Sie, was es darf',
      levels: [
        { k: 'Nur fragen', v: 'Liest Arbeitsbereiche, Chats, Posteingang und Fristen und stellt Fragen. Ändert nichts.' },
        { k: 'Fragen und Dokumente senden', v: 'Sendet außerdem Fotos und Dokumente, löscht Chats und markiert Fristen als erledigt.' },
        { k: 'Fragen, senden und diesen PC verwalten', v: 'Startet außerdem eine Sicherung und kann StarkLLM vollständig offline schalten. Das Handy fragt vorher nach Ihrem Fingerabdruck.' },
      ],
      note: 'Die Android-App ist eine Vorschau im geschlossenen Test bei Google Play. Die Nutzung außerhalb Ihres Heimnetzes gehört nicht zu dieser Version.',
    },
  },
};

export const rel250: Partial<Record<Lang, typeof en>> = { en, de };
