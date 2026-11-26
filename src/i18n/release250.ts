import type { Lang } from './ui';
// What StarkLLM 2.5.0 added (2.4.0 was folded into it), for the home, product and download pages, in all six languages.
// These features are still in the app; the 2.6.0 news is in release260.ts and is shown above them.
// A language without an entry here simply does not show these sections until it is translated.
// Source of truth: RELEASE_NOTES.md (2.6.0, 2.5.0, 2.4.0), docs/android-companion.md, docs/phone-away.md and
// docs/privacy-network.md of the app repo. Keep every claim exactly true. Since 2.6.0 the phone also works away from
// home, but only for a phone the user allowed, through the StarkLLM relay, encrypted from the phone to the PC.

type Item = { icon: string; title: string; text: string; badge?: string };
type KV = { k: string; v: string };

const en = {
  hero: {
    news: 'Tasks and more: web tasks, help with code, your phone',
    chips: ['Runs on your Windows PC', 'Asks before it acts', 'No telemetry', 'Free · Apache 2.0'],
  },
  news: {
    tag: 'Tasks and more',
    h2: 'StarkLLM now does tasks for you.',
    lede: 'On websites, in a project folder and from your phone. You see every step, and it asks before anything that matters. Your documents and the AI model stay on your PC.',
    items: [
      { icon: 'web', title: 'Web tasks in its own browser window', text: 'StarkLLM opens its own browser window and works on websites, for example to find the cheapest flight on a day. You see every step. It asks before anything that buys, books, pays, sends or deletes. Sign-ins, payments and "are you a robot" checks always stay with you. A task can be repeated daily or weekly.' },
      { icon: 'terminal', title: 'Help with code in a project folder', text: 'Choose a folder with "Terminal": StarkLLM reads and changes files there and runs PowerShell commands. Every change is shown first, every command that can change something runs only after your yes, and "Undo the file changes" puts the files back.' },
      { icon: 'image', title: 'Questions about an image', text: 'Paste a screenshot or choose a photo, and a vision model on your PC answers. The image is made smaller, its hidden data (place, camera) is removed, and it is not stored.' },
      { icon: 'audio', title: 'Recordings become documents', text: 'Meetings, lectures and voice memos are written down on your PC with times, by Whisper large-v3-turbo (downloaded once, about 1.6 GB). Then you ask about them like about any document.' },
      { icon: 'compare', title: 'Two models side by side', text: '"Compare models" asks a second local model the same question. You keep the better answer.' },
      { icon: 'export', title: 'Word and PDF, with sources', text: 'Save a whole chat or a single answer as a Word document or a PDF, with the sources it is based on.' },
      { icon: 'plug', title: 'Your own tool servers (MCP)', text: 'Add MCP servers that run on your PC in Settings › Local Tools. Every tool is off until you turn it on, and every call waits for your yes.' },
      { icon: 'phone', title: 'Your Android phone', badge: 'Preview', text: 'Pair the StarkLLM app for Android by QR code, then ask about your documents, send photos of letters and see your deadlines. At home over your home network; away from home only if you allow it for that phone, through the StarkLLM relay. Always encrypted from the phone to your PC. Per phone you choose: ask only, also send documents, or also manage this PC.' },
      { icon: 'search', title: 'Web search with fallback engines', text: 'When you turn on web search, your question goes to DuckDuckGo. Only if it does not answer, StarkLLM asks Startpage, then Mojeek, and Wikipedia\'s public search as the last resort: one at a time, never several at once.' },
    ] as Item[],
    note: 'Web tasks and the terminal work best with a local model of 14B or more (for example qwen3:14b); small 7B models stop safely but finish few tasks.',
    more: 'How the new features work',
  },
  product: {
    tasks: {
      tag: 'Web tasks · Terminal',
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
          { k: 'Your yes for every step', v: 'Every change is shown first, and every command that can change something runs only after your yes. Commands that change Windows or its security are refused.' },
          { k: 'Undo', v: '"Undo the file changes" puts the files back as they were.' },
        ] as KV[],
      },
      note: 'Web tasks and the terminal work best with a local model of 14B or more (for example qwen3:14b); small 7B models stop safely but finish few tasks.',
    },
    more: {
      tag: 'Also included',
      h2: 'More ways to work with your files',
      icons: ['image', 'audio', 'compare', 'export', 'plug', 'search'],
    },
    phone: {
      tag: 'Android · preview',
      h2: 'Your phone joins in',
      lede: 'The StarkLLM app for Android works together with your PC. The documents and the AI model stay on the PC; the phone asks, sends photos of letters and shows your deadlines. There is no iPhone app, and the Android app is a preview. At home it connects over your home network; away from home only if you allow it for that phone.',
      items: [
        { k: 'Paired by QR code', v: 'Settings › Phone shows a QR code. A phone reaches your PC only after it was paired, and it stays paired until you remove it, or until its account signs out or changes its password. Pairing works at home only, never through the relay.' },
        { k: 'At home: direct and encrypted', v: 'At home the phone connects over your home network. The connection is encrypted, and the phone accepts only your PC\'s own certificate, fixed at pairing, so no other device in the Wi-Fi can pose as your PC.' },
        { k: 'Away from home: only if you allow it', v: 'Per phone, Settings › Phone › "Also away from home (through the relay)" lets it reach your PC from any network, through the StarkLLM relay (relay.starkllm.com). It is off by default. The phone then shows "Connected · away from home".' },
        { k: 'What the relay sees', v: 'The encryption runs from the phone to your PC with the same certificate as at home, so the relay passes on encrypted bytes only: no question, answer, document, device token or account. It stores and logs no content. It sees which PC a connection is for, when, and how much data flows, and it keeps a random ID and a hash of a secret for each PC.' },
        { k: 'No web search, no cloud models', v: 'A question from the phone is answered on your PC: no web search and no cloud models, also away from home. "Fully offline" on the PC closes the link and the connection to the relay.' },
        { k: 'Several accounts on one PC', v: 'Each phone belongs to the StarkLLM account that showed its QR code.' },
      ] as KV[],
      levelsH: 'Per phone, you choose what it may do',
      levels: [
        { k: 'Ask only', v: 'Reads workspaces, chats, the inbox and deadlines, and asks questions. It does not send documents or change deadlines.' },
        { k: 'Ask and send documents', v: 'Also sends photos and documents, deletes chats and marks deadlines as done.' },
        { k: 'Ask, send and manage this PC', v: 'Also starts a backup and can switch StarkLLM fully offline. The phone asks for your fingerprint first.' },
      ] as KV[],
      note: 'The Android app is a preview. Away from home, all data passes through the relay, encrypted; a direct connection between phone and PC is not part of this version. Away from home needs the PC on and StarkLLM running. The relay allows up to 16 phone connections at the same time and 200 MB per minute for each PC, and closes a connection after 6 minutes without any traffic.',
    },
  },
};

const de: typeof en = {
  hero: {
    news: 'Aufgaben und mehr: Web-Aufgaben, Hilfe beim Code, Ihr Handy',
    chips: ['Läuft auf Ihrem Windows-PC', 'Fragt, bevor es handelt', 'Keine Telemetrie', 'Kostenlos · Apache 2.0'],
  },
  news: {
    tag: 'Aufgaben und mehr',
    h2: 'StarkLLM erledigt jetzt Aufgaben für Sie.',
    lede: 'Auf Websites, in einem Projektordner und vom Handy aus. Sie sehen jeden Schritt, und vor allem Wichtigen fragt StarkLLM nach. Ihre Dokumente und das KI-Modell bleiben auf Ihrem PC.',
    items: [
      { icon: 'web', title: 'Web-Aufgaben im eigenen Browserfenster', text: 'StarkLLM öffnet ein eigenes Browserfenster und arbeitet auf Websites, zum Beispiel um den günstigsten Flug an einem Tag zu finden. Sie sehen jeden Schritt. Bevor etwas gekauft, gebucht, bezahlt, gesendet oder gelöscht wird, fragt StarkLLM nach. Anmeldungen, Zahlungen und „Sind Sie ein Roboter?“-Prüfungen bleiben immer bei Ihnen. Eine Aufgabe lässt sich täglich oder wöchentlich wiederholen.' },
      { icon: 'terminal', title: 'Hilfe beim Code in einem Projektordner', text: 'Wählen Sie mit „Terminal“ einen Ordner: StarkLLM liest und ändert dort Dateien und führt PowerShell-Befehle aus. Jede Änderung wird zuerst gezeigt, jeder Befehl, der etwas verändern kann, läuft erst nach Ihrem Ja, und „Dateiänderungen rückgängig machen“ stellt die Dateien wieder her.' },
      { icon: 'image', title: 'Fragen zu einem Bild', text: 'Fügen Sie einen Screenshot ein oder wählen Sie ein Foto, und ein Bildmodell auf Ihrem PC antwortet. Das Bild wird verkleinert, seine versteckten Daten (Ort, Kamera) werden entfernt, und es wird nicht gespeichert.' },
      { icon: 'audio', title: 'Aufnahmen werden zu Dokumenten', text: 'Besprechungen, Vorlesungen und Sprachmemos werden auf Ihrem PC mit Zeitangaben aufgeschrieben, von Whisper large-v3-turbo (einmalig geladen, etwa 1,6 GB). Danach fragen Sie dazu wie zu jedem anderen Dokument.' },
      { icon: 'compare', title: 'Zwei Modelle nebeneinander', text: '„Modelle vergleichen“ stellt einem zweiten lokalen Modell dieselbe Frage. Sie behalten die bessere Antwort.' },
      { icon: 'export', title: 'Word und PDF, mit Quellen', text: 'Speichern Sie einen ganzen Chat oder eine einzelne Antwort als Word-Dokument oder PDF, mit den Quellen, auf denen sie beruht.' },
      { icon: 'plug', title: 'Eigene Tool-Server (MCP)', text: 'Fügen Sie unter Einstellungen › Lokale Werkzeuge MCP-Server hinzu, die auf Ihrem PC laufen. Jedes Werkzeug ist aus, bis Sie es einschalten, und jeder Aufruf wartet auf Ihr Ja.' },
      { icon: 'phone', title: 'Ihr Android-Handy', badge: 'Vorschau', text: 'Koppeln Sie die StarkLLM-App für Android per QR-Code, dann fragen Sie zu Ihren Dokumenten, senden Fotos von Briefen und sehen Ihre Fristen. Zu Hause über Ihr Heimnetz; unterwegs nur, wenn Sie es für dieses Handy erlauben, über das StarkLLM-Relay. Immer verschlüsselt vom Handy bis zu Ihrem PC. Je Handy wählen Sie: nur fragen, auch Dokumente senden oder auch diesen PC verwalten.' },
      { icon: 'search', title: 'Websuche mit Ersatz-Suchmaschinen', text: 'Wenn Sie die Websuche einschalten, geht Ihre Frage an DuckDuckGo. Nur wenn dort keine Antwort kommt, fragt StarkLLM Startpage, dann Mojeek und als letzte Möglichkeit die öffentliche Suche von Wikipedia: immer nur eine, nie mehrere zugleich.' },
    ],
    note: 'Web-Aufgaben und das Terminal funktionieren am besten mit einem lokalen Modell ab 14B (zum Beispiel qwen3:14b); kleine 7B-Modelle halten sicher an, schaffen aber nur wenige Aufgaben.',
    more: 'So funktionieren die neuen Funktionen',
  },
  product: {
    tasks: {
      tag: 'Web-Aufgaben · Terminal',
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
          { k: 'Ihr Ja für jeden Schritt', v: 'Jede Änderung wird zuerst gezeigt, und jeder Befehl, der etwas verändern kann, läuft erst nach Ihrem Ja. Befehle, die Windows oder seine Sicherheit verändern, werden abgelehnt.' },
          { k: 'Rückgängig', v: '„Dateiänderungen rückgängig machen“ stellt die Dateien so wieder her, wie sie waren.' },
        ],
      },
      note: 'Web-Aufgaben und das Terminal funktionieren am besten mit einem lokalen Modell ab 14B (zum Beispiel qwen3:14b); kleine 7B-Modelle halten sicher an, schaffen aber nur wenige Aufgaben.',
    },
    more: {
      tag: 'Außerdem dabei',
      h2: 'Mehr Möglichkeiten mit Ihren Dateien',
      icons: ['image', 'audio', 'compare', 'export', 'plug', 'search'],
    },
    phone: {
      tag: 'Android · Vorschau',
      h2: 'Ihr Handy macht mit',
      lede: 'Die StarkLLM-App für Android arbeitet mit Ihrem PC zusammen. Die Dokumente und das KI-Modell bleiben auf dem PC; das Handy fragt, sendet Fotos von Briefen und zeigt Ihre Fristen. Eine iPhone-App gibt es nicht, und die Android-App ist eine Vorschau. Zu Hause verbindet sie sich über Ihr Heimnetz, unterwegs nur, wenn Sie es für dieses Handy erlauben.',
      items: [
        { k: 'Gekoppelt per QR-Code', v: 'Einstellungen › Telefon zeigt einen QR-Code. Ein Handy erreicht Ihren PC erst, wenn es gekoppelt wurde, und bleibt gekoppelt, bis Sie es entfernen oder bis sich sein Konto abmeldet oder sein Passwort ändert. Gekoppelt wird nur zu Hause, nie über das Relay.' },
        { k: 'Zu Hause: direkt und verschlüsselt', v: 'Zu Hause verbindet sich das Handy über Ihr Heimnetz. Die Verbindung ist verschlüsselt, und das Handy akzeptiert nur das eigene Zertifikat Ihres PCs, das beim Koppeln festgelegt wird. So kann sich kein anderes Gerät im WLAN als Ihr PC ausgeben.' },
        { k: 'Unterwegs: nur, wenn Sie es erlauben', v: 'Je Handy erlaubt Einstellungen › Telefon › „Auch unterwegs (über das Relay)“, dass es Ihren PC aus jedem Netz erreicht, über das StarkLLM-Relay (relay.starkllm.com). Standardmäßig ist das aus. Das Handy zeigt dann „Verbunden · unterwegs“.' },
        { k: 'Was das Relay sieht', v: 'Die Verschlüsselung reicht vom Handy bis zu Ihrem PC, mit demselben Zertifikat wie zu Hause. Das Relay leitet daher nur verschlüsselte Daten weiter: keine Frage, keine Antwort, kein Dokument, kein Geräte-Token und kein Konto. Es speichert und protokolliert keine Inhalte. Es sieht, für welchen PC eine Verbindung ist, wann und wie viele Daten fließen, und bewahrt je PC eine zufällige Kennung und einen Hash eines Geheimnisses auf.' },
        { k: 'Keine Websuche, keine Cloud-Modelle', v: 'Eine Frage vom Handy wird auf Ihrem PC beantwortet: keine Websuche und keine Cloud-Modelle, auch unterwegs nicht. „Vollständig offline“ am PC trennt die Verbindung und die Verbindung zum Relay.' },
        { k: 'Mehrere Konten auf einem PC', v: 'Jedes Handy gehört zu dem StarkLLM-Konto, das seinen QR-Code angezeigt hat.' },
      ],
      levelsH: 'Je Handy wählen Sie, was es darf',
      levels: [
        { k: 'Nur fragen', v: 'Liest Arbeitsbereiche, Chats, Posteingang und Fristen und stellt Fragen. Sendet keine Dokumente und ändert keine Fristen.' },
        { k: 'Fragen und Dokumente senden', v: 'Sendet außerdem Fotos und Dokumente, löscht Chats und markiert Fristen als erledigt.' },
        { k: 'Fragen, senden und diesen PC verwalten', v: 'Startet außerdem eine Sicherung und kann StarkLLM vollständig offline schalten. Das Handy fragt vorher nach Ihrem Fingerabdruck.' },
      ],
      note: 'Die Android-App ist eine Vorschau. Unterwegs laufen alle Daten verschlüsselt über das Relay; eine direkte Verbindung zwischen Handy und PC gehört nicht zu dieser Version. Unterwegs muss der PC an sein und StarkLLM laufen. Das Relay erlaubt je PC bis zu 16 Handy-Verbindungen gleichzeitig und 200 MB pro Minute und schließt eine Verbindung nach 6 Minuten ohne jeden Datenverkehr.',
    },
  },
};

// Spanish, French, Italian and Turkish: formal address (usted, vous, Lei, siz); feature names as in the app
// (frontend/src/i18n/{es,fr,it,tr}.json). Their home.ts still has the older hero and privacy texts, which no longer
// fit 2.5.0 ("nothing leaves your PC" next to web tasks), so these languages also bring the hero headline and text
// and the four privacy promises here; English and German have them in home.ts.
type Extra = {
  heroText?: { h1: string[]; lede: string };
  privacy?: { h2: string; lede: string; items: { title: string; text: string }[] };
};
export type Rel = typeof en & Extra;

const es: Rel = {
  heroText: {
    h1: ['Sus documentos se quedan', 'en su PC.', 'El trabajo se hace.'],
    lede: 'StarkLLM lee sus cartas y documentos en su PC con Windows, encuentra en ellos los plazos y los importes y responde a sus preguntas indicando la página de la que sale cada respuesta. Ahora también hace tareas por usted, en sitios web y en una carpeta de proyecto, y pregunta antes de cada paso importante. Los modelos de IA se ejecutan en su PC mediante Ollama.',
  },
  hero: {
    news: 'Tareas y más: tareas web, ayuda con código, su teléfono',
    chips: ['Funciona en su PC con Windows', 'Pregunta antes de actuar', 'Sin telemetría', 'Gratis · Apache 2.0'],
  },
  news: {
    tag: 'Tareas y más',
    h2: 'StarkLLM ahora hace tareas por usted.',
    lede: 'En sitios web, en una carpeta de proyecto y desde su teléfono. Usted ve cada paso, y antes de todo lo importante StarkLLM le pregunta. Sus documentos y el modelo de IA se quedan en su PC.',
    items: [
      { icon: 'web', title: 'Tareas web en su propia ventana de navegador', text: 'StarkLLM abre su propia ventana de navegador y trabaja en sitios web, por ejemplo para encontrar el vuelo más barato de un día. Usted ve cada paso. Pregunta antes de cualquier cosa que compre, reserve, pague, envíe o borre. Los inicios de sesión, los pagos y las comprobaciones «¿es usted un robot?» siempre quedan en sus manos. Una tarea puede repetirse a diario o cada semana.' },
      { icon: 'terminal', title: 'Ayuda con código en una carpeta de proyecto', text: 'Elija una carpeta con «Terminal»: StarkLLM lee y cambia archivos allí y ejecuta comandos de PowerShell. Cada cambio se muestra primero, cada comando que puede cambiar algo se ejecuta solo después de su sí, y «Deshacer los cambios de archivos» devuelve los archivos a su estado anterior.' },
      { icon: 'image', title: 'Preguntas sobre una imagen', text: 'Pegue una captura de pantalla o elija una foto, y responde un modelo de visión en su PC. La imagen se reduce, se eliminan sus datos ocultos (lugar, cámara) y no se guarda.' },
      { icon: 'audio', title: 'Las grabaciones se convierten en documentos', text: 'Reuniones, clases y notas de voz se transcriben en su PC con marcas de tiempo, mediante Whisper large-v3-turbo (se descarga una vez, unos 1,6 GB). Después puede preguntar sobre ellas como sobre cualquier documento.' },
      { icon: 'compare', title: 'Dos modelos lado a lado', text: '«Comparar modelos» hace la misma pregunta a un segundo modelo local. Usted se queda con la mejor respuesta.' },
      { icon: 'export', title: 'Word y PDF, con fuentes', text: 'Guarde un chat completo o una sola respuesta como documento de Word o PDF, con las fuentes en las que se basa.' },
      { icon: 'plug', title: 'Sus propios servidores de herramientas (MCP)', text: 'En Ajustes › Herramientas locales puede añadir servidores MCP que se ejecutan en su PC. Cada herramienta está desactivada hasta que usted la activa, y cada llamada espera su sí.' },
      { icon: 'phone', title: 'Su teléfono Android', badge: 'Vista previa', text: 'Vincule la app StarkLLM para Android con un código QR y luego pregunte sobre sus documentos, envíe fotos de cartas y vea sus plazos. En casa, por la red de su casa; fuera de casa, solo si usted lo permite para ese teléfono, a través del relé de StarkLLM. Siempre cifrado del teléfono a su PC. Para cada teléfono usted elige: solo preguntar, también enviar documentos o también gestionar este PC.' },
      { icon: 'search', title: 'Búsqueda web con buscadores de reserva', text: 'Cuando usted activa la búsqueda web, su pregunta va a DuckDuckGo. Solo si no responde, StarkLLM pregunta a Startpage, después a Mojeek y, como último recurso, a la búsqueda pública de Wikipedia: uno cada vez, nunca varios a la vez.' },
    ],
    note: 'Las tareas web y el terminal funcionan mejor con un modelo local de 14B o más (por ejemplo qwen3:14b); los modelos pequeños de 7B se detienen de forma segura, pero completan pocas tareas.',
    more: 'Cómo funcionan las novedades',
  },
  product: {
    tasks: {
      tag: 'Tareas web · Terminal',
      h2: 'Tareas que hace por usted',
      lede: 'StarkLLM ahora puede actuar, no solo responder. Muestra lo que va a hacer y espera su sí en cada paso importante.',
      web: {
        h3: 'Tareas web',
        items: [
          { k: 'Su propia ventana de navegador', v: 'Inicie una «Tarea web» en el chat. StarkLLM abre una ventana de navegador aparte y usted ve cada paso. Con «Tomar el control» trabaja usted mismo en la ventana y luego se la devuelve.' },
          { k: 'Primero pregunta', v: 'Antes de cualquier cosa que compre, reserve, pague, envíe o borre, StarkLLM se detiene y pregunta. Los sitios de bancos, de salud y de la administración solo se abren después de su sí; los sitios para adultos, nunca.' },
          { k: 'Algunos pasos son siempre suyos', v: 'StarkLLM nunca hace inicios de sesión, pagos ni comprobaciones «¿es usted un robot?».' },
          { k: 'Otra vez mañana', v: 'Guarde la página en el espacio de trabajo, conserve la tarea para más tarde o repítala a diario o cada semana. Una tarea repetida solo mira, y una notificación le avisa cuando la respuesta ha cambiado.' },
        ],
      },
      terminal: {
        h3: 'Terminal: ayuda con código',
        items: [
          { k: 'Una carpeta de proyecto', v: 'Elija una carpeta con «Terminal». StarkLLM lee y cambia archivos allí y ejecuta comandos de PowerShell. Nunca sale de esa carpeta y nunca lee claves ni archivos .env.' },
          { k: 'Su sí para cada paso', v: 'Cada cambio se muestra primero, y cada comando que puede cambiar algo se ejecuta solo después de su sí. Los comandos que cambian Windows o su seguridad se rechazan.' },
          { k: 'Deshacer', v: '«Deshacer los cambios de archivos» deja los archivos como estaban.' },
        ],
      },
      note: 'Las tareas web y el terminal funcionan mejor con un modelo local de 14B o más (por ejemplo qwen3:14b); los modelos pequeños de 7B se detienen de forma segura, pero completan pocas tareas.',
    },
    more: { tag: 'También incluido', h2: 'Más formas de trabajar con sus archivos', icons: ['image', 'audio', 'compare', 'export', 'plug', 'search'] },
    phone: {
      tag: 'Android · vista previa',
      h2: 'Su teléfono se suma',
      lede: 'La app StarkLLM para Android trabaja junto con su PC. Los documentos y el modelo de IA se quedan en el PC; el teléfono pregunta, envía fotos de cartas y muestra sus plazos. No hay app para iPhone, y la app para Android es una vista previa. En casa se conecta por la red de su casa; fuera de casa, solo si usted lo permite para ese teléfono.',
      items: [
        { k: 'Vinculado con un código QR', v: 'Ajustes › Teléfono muestra un código QR. Un teléfono solo llega a su PC después de vincularlo, y sigue vinculado hasta que usted lo quite, o hasta que su cuenta cierre la sesión o cambie su contraseña. Solo se vincula en casa, nunca a través del relé.' },
        { k: 'En casa: directo y cifrado', v: 'En casa el teléfono se conecta a través de la red de su casa. La conexión está cifrada, y el teléfono solo acepta el certificado propio de su PC, fijado al vincularlo, así que ningún otro dispositivo de la wifi puede hacerse pasar por su PC.' },
        { k: 'Fuera de casa: solo si usted lo permite', v: 'Para cada teléfono, Ajustes › Teléfono › «También fuera de casa (a través del relé)» le permite llegar a su PC desde cualquier red, a través del relé de StarkLLM (relay.starkllm.com). Está desactivado por defecto. El teléfono muestra entonces «Conectado · fuera de casa».' },
        { k: 'Lo que ve el relé', v: 'El cifrado va del teléfono a su PC con el mismo certificado que en casa, así que el relé solo pasa bytes cifrados: ninguna pregunta, respuesta, documento, token del dispositivo ni cuenta. No guarda ni registra contenido. Ve para qué PC es una conexión, cuándo y cuántos datos pasan, y guarda para cada PC un identificador aleatorio y un hash de un secreto.' },
        { k: 'Sin búsqueda web ni modelos en la nube', v: 'Una pregunta desde el teléfono se responde en su PC: sin búsqueda web y sin modelos en la nube, también fuera de casa. «Totalmente sin conexión» en el PC cierra el enlace y la conexión con el relé.' },
        { k: 'Varias cuentas en un PC', v: 'Cada teléfono pertenece a la cuenta de StarkLLM que mostró su código QR.' },
      ],
      levelsH: 'Para cada teléfono, usted elige qué puede hacer',
      levels: [
        { k: 'Solo preguntar', v: 'Lee espacios de trabajo, chats, la bandeja de entrada y los plazos, y hace preguntas. No envía documentos ni cambia plazos.' },
        { k: 'Preguntar y enviar documentos', v: 'Además envía fotos y documentos, elimina chats y marca plazos como hechos.' },
        { k: 'Preguntar, enviar y gestionar este PC', v: 'Además inicia una copia de seguridad y puede poner StarkLLM totalmente sin conexión. El teléfono pide antes su huella.' },
      ],
      note: 'La app para Android es una vista previa. Fuera de casa, todos los datos pasan cifrados por el relé; una conexión directa entre teléfono y PC no forma parte de esta versión. Fuera de casa, el PC debe estar encendido y StarkLLM en marcha. El relé admite por PC hasta 16 conexiones de teléfono a la vez y 200 MB por minuto, y cierra una conexión tras 6 minutos sin ningún tráfico.',
    },
  },
  privacy: {
    h2: 'Una privacidad que usted puede comprobar',
    lede: 'StarkLLM está hecho para que sus documentos nunca necesiten una nube. Lo que se conecta a internet lo decide usted, y puede verlo.',
    items: [
      { title: 'Los documentos y el modelo se quedan en su PC', text: 'Sus documentos, chats y el índice de búsqueda se guardan en su propio disco, y los modelos de lenguaje se ejecutan en su propia CPU o GPU mediante Ollama. La app del teléfono habla con su PC; fuera de casa, solo si usted lo permite, a través del relé de StarkLLM, que solo pasa datos cifrados y no puede leerlos.' },
      { title: 'Sin telemetría', text: 'La app de Windows no tiene telemetría ni ningún SDK de analítica. Este sitio web tampoco usa analítica ni cookies; consulte la política de privacidad.' },
      { title: 'Cada conexión, en una lista', text: 'La búsqueda web, las tareas web, los proveedores de modelos en la nube, las importaciones desde la web (páginas web, YouTube, GitHub), los precios de mercado, el teléfono fuera de casa (relé) y la comprobación de actualizaciones solo funcionan cuando usted los activa o los inicia. Ajustes › Privacidad y red enumera cada conexión que hace StarkLLM; los comandos que usted permite en el Terminal y los servidores de herramientas que añade se ejecutan como sus propios programas y no aparecen en la lista. El chat muestra cuándo una pregunta sale de su PC.' },
      { title: 'Interruptor «Totalmente sin conexión»', text: 'Un interruptor deja StarkLLM totalmente sin conexión: se rechaza toda función en línea y se cierra el enlace con su teléfono. Sus documentos, la bandeja de entrada y los modelos locales siguen funcionando.' },
    ],
  },
};

const fr: Rel = {
  heroText: {
    h1: ['Vos documents restent', 'sur votre PC.', 'Le travail se fait.'],
    lede: 'StarkLLM lit vos courriers et vos documents sur votre PC Windows, y trouve les échéances et les montants et répond en indiquant la page d’où provient chaque réponse. Désormais, il accomplit aussi des tâches pour vous, sur des sites web et dans un dossier de projet, et vous demande avant chaque étape importante. Les modèles d’IA tournent sur votre PC grâce à Ollama.',
  },
  hero: {
    news: 'Tâches et plus : tâches web, aide pour le code, votre téléphone',
    chips: ['Fonctionne sur votre PC Windows', 'Demande avant d’agir', 'Aucune télémétrie', 'Gratuit · Apache 2.0'],
  },
  news: {
    tag: 'Tâches et plus',
    h2: 'StarkLLM accomplit désormais des tâches pour vous.',
    lede: 'Sur des sites web, dans un dossier de projet et depuis votre téléphone. Vous voyez chaque étape, et StarkLLM vous demande avant tout ce qui compte. Vos documents et le modèle d’IA restent sur votre PC.',
    items: [
      { icon: 'web', title: 'Des tâches web dans sa propre fenêtre de navigateur', text: 'StarkLLM ouvre sa propre fenêtre de navigateur et travaille sur des sites web, par exemple pour trouver le vol le moins cher un jour donné. Vous voyez chaque étape. Il demande avant tout ce qui achète, réserve, paie, envoie ou supprime. Les connexions, les paiements et les vérifications « Êtes-vous un robot ? » restent toujours entre vos mains. Une tâche peut être répétée chaque jour ou chaque semaine.' },
      { icon: 'terminal', title: 'De l’aide pour le code dans un dossier de projet', text: 'Choisissez un dossier avec « Terminal » : StarkLLM y lit et modifie des fichiers et exécute des commandes PowerShell. Chaque modification est d’abord affichée, chaque commande qui peut modifier quelque chose ne s’exécute qu’après votre oui, et « Annuler les modifications des fichiers » remet les fichiers en place.' },
      { icon: 'image', title: 'Des questions sur une image', text: 'Collez une capture d’écran ou choisissez une photo, et un modèle de vision sur votre PC répond. L’image est réduite, ses données cachées (lieu, appareil photo) sont supprimées, et elle n’est pas enregistrée.' },
      { icon: 'audio', title: 'Les enregistrements deviennent des documents', text: 'Réunions, cours et mémos vocaux sont transcrits sur votre PC avec les horodatages, par Whisper large-v3-turbo (téléchargé une fois, environ 1,6 Go). Ensuite, vous les interrogez comme n’importe quel document.' },
      { icon: 'compare', title: 'Deux modèles côte à côte', text: '« Comparer des modèles » pose la même question à un second modèle local. Vous gardez la meilleure réponse.' },
      { icon: 'export', title: 'Word et PDF, avec les sources', text: 'Enregistrez une discussion entière ou une seule réponse en document Word ou en PDF, avec les sources sur lesquelles elle s’appuie.' },
      { icon: 'plug', title: 'Vos propres serveurs d’outils (MCP)', text: 'Dans Paramètres › Outils locaux, ajoutez des serveurs MCP qui tournent sur votre PC. Chaque outil reste désactivé jusqu’à ce que vous l’activiez, et chaque appel attend votre oui.' },
      { icon: 'phone', title: 'Votre téléphone Android', badge: 'Aperçu', text: 'Associez l’application StarkLLM pour Android par code QR, puis posez des questions sur vos documents, envoyez des photos de courriers et consultez vos échéances. À la maison par votre réseau domestique ; hors de chez vous seulement si vous l’autorisez pour ce téléphone, via le relais StarkLLM. Toujours chiffré du téléphone jusqu’à votre PC. Pour chaque téléphone, vous choisissez : seulement poser des questions, aussi envoyer des documents, ou aussi gérer ce PC.' },
      { icon: 'search', title: 'Recherche web avec moteurs de secours', text: 'Quand vous activez la recherche web, votre question part vers DuckDuckGo. Seulement s’il ne répond pas, StarkLLM interroge Startpage, puis Mojeek, et en dernier recours la recherche publique de Wikipedia : un seul à la fois, jamais plusieurs en même temps.' },
    ],
    note: 'Les tâches web et le terminal fonctionnent au mieux avec un modèle local de 14B ou plus (par exemple qwen3:14b) ; les petits modèles 7B s’arrêtent sans risque, mais terminent peu de tâches.',
    more: 'Comment fonctionnent les nouveautés',
  },
  product: {
    tasks: {
      tag: 'Tâches web · Terminal',
      h2: 'Les tâches qu’il accomplit pour vous',
      lede: 'StarkLLM peut désormais agir, pas seulement répondre. Il montre ce qu’il s’apprête à faire et attend votre oui à chaque étape importante.',
      web: {
        h3: 'Tâches web',
        items: [
          { k: 'Sa propre fenêtre de navigateur', v: 'Lancez une « Tâche web » dans la discussion. StarkLLM ouvre une fenêtre de navigateur distincte et vous suivez chaque étape. « Reprendre la main » vous permet de travailler vous-même dans la fenêtre, puis de la lui rendre.' },
          { k: 'Il demande d’abord', v: 'Avant tout ce qui achète, réserve, paie, envoie ou supprime, StarkLLM s’arrête et vous demande. Les sites de banques, de santé et d’administrations ne s’ouvrent qu’après votre oui ; les sites pour adultes, jamais.' },
          { k: 'Certaines étapes restent les vôtres', v: 'StarkLLM ne fait jamais les connexions, les paiements ni les vérifications « Êtes-vous un robot ? ».' },
          { k: 'Encore demain', v: 'Enregistrez la page dans l’espace de travail, gardez la tâche pour plus tard ou répétez-la chaque jour ou chaque semaine. Une tâche répétée ne fait que regarder, et une notification vous prévient quand la réponse a changé.' },
        ],
      },
      terminal: {
        h3: 'Terminal : aide pour le code',
        items: [
          { k: 'Un dossier de projet', v: 'Choisissez un dossier avec « Terminal ». StarkLLM y lit et modifie des fichiers et exécute des commandes PowerShell. Il ne quitte jamais ce dossier et ne lit jamais de clés ni de fichiers .env.' },
          { k: 'Votre oui à chaque étape', v: 'Chaque modification est d’abord affichée, et chaque commande qui peut modifier quelque chose ne s’exécute qu’après votre oui. Les commandes qui modifient Windows ou sa sécurité sont refusées.' },
          { k: 'Annuler', v: '« Annuler les modifications des fichiers » remet les fichiers tels qu’ils étaient.' },
        ],
      },
      note: 'Les tâches web et le terminal fonctionnent au mieux avec un modèle local de 14B ou plus (par exemple qwen3:14b) ; les petits modèles 7B s’arrêtent sans risque, mais terminent peu de tâches.',
    },
    more: { tag: 'Également inclus', h2: 'Plus de façons de travailler avec vos fichiers', icons: ['image', 'audio', 'compare', 'export', 'plug', 'search'] },
    phone: {
      tag: 'Android · aperçu',
      h2: 'Votre téléphone s’y met aussi',
      lede: 'L’application StarkLLM pour Android travaille avec votre PC. Les documents et le modèle d’IA restent sur le PC ; le téléphone pose les questions, envoie des photos de courriers et affiche vos échéances. Il n’existe pas d’application pour iPhone, et l’application Android est un aperçu. À la maison, elle se connecte par votre réseau domestique ; hors de chez vous, seulement si vous l’autorisez pour ce téléphone.',
      items: [
        { k: 'Associé par code QR', v: 'Paramètres › Téléphone affiche un code QR. Un téléphone n’accède à votre PC qu’après avoir été associé, et il le reste jusqu’à ce que vous le retiriez, ou jusqu’à ce que son compte se déconnecte ou change de mot de passe. L’association se fait uniquement à la maison, jamais via le relais.' },
        { k: 'À la maison : direct et chiffré', v: 'À la maison, le téléphone se connecte par votre réseau domestique. La connexion est chiffrée, et le téléphone n’accepte que le certificat propre à votre PC, fixé lors de l’association : aucun autre appareil du Wi-Fi ne peut se faire passer pour votre PC.' },
        { k: 'Hors de chez vous : seulement si vous l’autorisez', v: 'Pour chaque téléphone, Paramètres › Téléphone › « Aussi hors de chez vous (via le relais) » lui permet de joindre votre PC depuis n’importe quel réseau, via le relais StarkLLM (relay.starkllm.com). C’est désactivé par défaut. Le téléphone affiche alors « Connecté · hors de chez vous ».' },
        { k: 'Ce que voit le relais', v: 'Le chiffrement va du téléphone jusqu’à votre PC, avec le même certificat qu’à la maison : le relais ne transmet donc que des octets chiffrés, sans question, réponse, document, jeton d’appareil ni compte. Il n’enregistre ni ne journalise aucun contenu. Il voit à quel PC une connexion est destinée, quand et combien de données passent, et il conserve pour chaque PC un identifiant aléatoire et l’empreinte (hash) d’un secret.' },
        { k: 'Ni recherche web, ni modèles cloud', v: 'Une question posée depuis le téléphone reçoit sa réponse sur votre PC : ni recherche web, ni modèles cloud, hors de chez vous non plus. « Entièrement hors ligne » sur le PC ferme la liaison et la connexion au relais.' },
        { k: 'Plusieurs comptes sur un PC', v: 'Chaque téléphone appartient au compte StarkLLM qui a affiché son code QR.' },
      ],
      levelsH: 'Pour chaque téléphone, vous choisissez ce qu’il peut faire',
      levels: [
        { k: 'Seulement poser des questions', v: 'Lit les espaces de travail, les chats, la boîte de réception et les échéances, et pose des questions. N’envoie pas de documents et ne modifie pas les échéances.' },
        { k: 'Poser des questions et envoyer des documents', v: 'Envoie aussi des photos et des documents, supprime des chats et marque des échéances comme faites.' },
        { k: 'Poser des questions, envoyer et gérer ce PC', v: 'Lance aussi une sauvegarde et peut passer StarkLLM entièrement hors ligne. Le téléphone demande d’abord votre empreinte.' },
      ],
      note: 'L’application Android est un aperçu. Hors de chez vous, toutes les données passent chiffrées par le relais ; une connexion directe entre le téléphone et le PC ne fait pas partie de cette version. Hors de chez vous, le PC doit être allumé et StarkLLM doit tourner. Le relais accepte par PC jusqu’à 16 connexions de téléphone simultanées et 200 Mo par minute, et ferme une connexion après 6 minutes sans aucun trafic.',
    },
  },
  privacy: {
    h2: 'Une confidentialité que vous pouvez vérifier',
    lede: 'StarkLLM est conçu pour que vos documents n’aient jamais besoin du cloud. Ce qui passe en ligne, c’est vous qui le décidez, et vous pouvez le voir.',
    items: [
      { title: 'Les documents et le modèle restent sur votre PC', text: 'Vos documents, vos discussions et l’index de recherche sont stockés sur votre propre disque, et les modèles de langage tournent sur votre propre CPU ou GPU grâce à Ollama. L’application du téléphone parle à votre PC ; hors de chez vous, seulement si vous l’autorisez, via le relais StarkLLM, qui ne transmet que des données chiffrées et ne peut pas les lire.' },
      { title: 'Aucune télémétrie', text: 'L’application Windows n’a ni télémétrie ni SDK d’analyse. Ce site web n’utilise pas non plus d’outil d’analyse et ne dépose aucun cookie ; voir la politique de confidentialité.' },
      { title: 'Chaque connexion est listée', text: 'La recherche web, les tâches web, les fournisseurs de modèles cloud, les imports depuis le web (pages web, YouTube, GitHub), les cours du marché, le téléphone hors de chez vous (relais) et la vérification des mises à jour ne fonctionnent que si vous les activez ou les lancez. Paramètres › Confidentialité et réseau liste chaque connexion établie par StarkLLM ; les commandes que vous autorisez dans le Terminal et les serveurs d’outils que vous ajoutez s’exécutent comme vos propres programmes et ne figurent pas dans la liste. La discussion indique quand une question quitte votre PC.' },
      { title: 'Le bouton « Entièrement hors ligne »', text: 'Un seul bouton met StarkLLM entièrement hors ligne : toute fonction en ligne est refusée et la liaison avec votre téléphone est fermée. Vos documents, la boîte de réception et les modèles locaux continuent de fonctionner.' },
    ],
  },
};

const it: Rel = {
  heroText: {
    h1: ['I Suoi documenti restano', 'sul Suo PC.', 'Il lavoro viene fatto.'],
    lede: 'StarkLLM è un assistente gratuito per le Sue lettere e i Suoi documenti: li legge sul Suo PC Windows, ne ricava scadenze e importi e risponde indicando la pagina da cui viene ogni risposta. Ora svolge anche attività per Lei, sui siti web e in una cartella di progetto, e chiede prima di ogni passaggio importante. I modelli di IA girano sul Suo PC tramite Ollama.',
  },
  hero: {
    news: 'Attività e altro: attività web, aiuto con il codice, il Suo telefono',
    chips: ['Funziona sul Suo PC Windows', 'Chiede prima di agire', 'Nessuna telemetria', 'Gratuito · Apache 2.0'],
  },
  news: {
    tag: 'Attività e altro',
    h2: 'Ora StarkLLM svolge attività per Lei.',
    lede: 'Sui siti web, in una cartella di progetto e dal Suo telefono. Lei vede ogni passaggio, e prima di tutto ciò che conta StarkLLM chiede. I Suoi documenti e il modello di IA restano sul Suo PC.',
    items: [
      { icon: 'web', title: 'Attività web in una propria finestra del browser', text: "StarkLLM apre una propria finestra del browser e lavora sui siti web, per esempio per trovare il volo più economico in un certo giorno. Lei vede ogni passaggio. Chiede prima di qualsiasi cosa che acquisti, prenoti, paghi, invii o elimini. Accessi, pagamenti e verifiche «Non sono un robot» restano sempre a Lei. Un'attività può essere ripetuta ogni giorno o ogni settimana." },
      { icon: 'terminal', title: 'Aiuto con il codice in una cartella di progetto', text: 'Scelga una cartella con «Terminale»: StarkLLM legge e modifica i file lì dentro ed esegue comandi PowerShell. Ogni modifica viene mostrata prima, ogni comando che può cambiare qualcosa parte solo dopo il Suo sì, e «Annulla le modifiche ai file» rimette a posto i file.' },
      { icon: 'image', title: "Domande su un'immagine", text: "Incolli uno screenshot o scelga una foto, e risponde un modello visivo sul Suo PC. L'immagine viene rimpicciolita, i suoi dati nascosti (luogo, fotocamera) vengono rimossi e non viene salvata." },
      { icon: 'audio', title: 'Le registrazioni diventano documenti', text: 'Riunioni, lezioni e memo vocali vengono trascritti sul Suo PC con i tempi, da Whisper large-v3-turbo (scaricato una volta, circa 1,6 GB). Poi Lei può fare domande su di essi come su qualsiasi documento.' },
      { icon: 'compare', title: 'Due modelli fianco a fianco', text: '«Confronta modelli» pone la stessa domanda a un secondo modello locale. Lei tiene la risposta migliore.' },
      { icon: 'export', title: 'Word e PDF, con le fonti', text: "Salvi un'intera chat o una singola risposta come documento Word o PDF, con le fonti su cui si basa." },
      { icon: 'plug', title: 'I Suoi server di strumenti (MCP)', text: 'In Impostazioni › Strumenti locali aggiunga server MCP che girano sul Suo PC. Ogni strumento resta spento finché Lei non lo attiva, e ogni chiamata attende il Suo sì.' },
      { icon: 'phone', title: 'Il Suo telefono Android', badge: 'Anteprima', text: "Abbini l'app StarkLLM per Android con un codice QR, poi faccia domande sui Suoi documenti, invii foto di lettere e veda le Sue scadenze. A casa tramite la rete di casa; fuori casa solo se Lei lo consente per quel telefono, tramite il relay di StarkLLM. Sempre cifrato dal telefono al Suo PC. Per ogni telefono Lei sceglie: solo fare domande, anche inviare documenti o anche gestire questo PC." },
      { icon: 'search', title: 'Ricerca web con motori di riserva', text: 'Quando Lei attiva la ricerca web, la domanda va a DuckDuckGo. Solo se non risponde, StarkLLM interroga Startpage, poi Mojeek e, come ultima risorsa, la ricerca pubblica di Wikipedia: uno alla volta, mai più di uno insieme.' },
    ],
    note: 'Le attività web e il terminale funzionano meglio con un modello locale da 14B o più (per esempio qwen3:14b); i piccoli modelli da 7B si fermano in sicurezza, ma portano a termine poche attività.',
    more: 'Come funzionano le novità',
  },
  product: {
    tasks: {
      tag: 'Attività web · Terminale',
      h2: 'Attività che svolge per Lei',
      lede: 'Ora StarkLLM può agire, non solo rispondere. Mostra che cosa sta per fare e attende il Suo sì a ogni passaggio importante.',
      web: {
        h3: 'Attività web',
        items: [
          { k: 'Una propria finestra del browser', v: "Avvii un'«Attività web» nella chat. StarkLLM apre una finestra del browser separata e Lei segue ogni passaggio. Con «Prendi il controllo» lavora personalmente nella finestra e poi la restituisce." },
          { k: 'Prima chiede', v: 'Prima di qualsiasi cosa che acquisti, prenoti, paghi, invii o elimini, StarkLLM si ferma e chiede. I siti di banche, sanità e pubblica amministrazione si aprono solo dopo il Suo sì, i siti per adulti mai.' },
          { k: 'Alcuni passaggi restano Suoi', v: 'StarkLLM non esegue mai accessi, pagamenti né verifiche «Non sono un robot».' },
          { k: 'Di nuovo domani', v: "Salvi la pagina nell'area di lavoro, conservi l'attività per dopo o la ripeta ogni giorno o ogni settimana. Un'attività ripetuta si limita a guardare, e una notifica La avvisa quando la risposta è cambiata." },
        ],
      },
      terminal: {
        h3: 'Terminale: aiuto con il codice',
        items: [
          { k: 'Una cartella di progetto', v: 'Scelga una cartella con «Terminale». StarkLLM legge e modifica i file lì dentro ed esegue comandi PowerShell. Non esce mai da quella cartella e non legge mai chiavi né file .env.' },
          { k: 'Il Suo sì per ogni passaggio', v: 'Ogni modifica viene mostrata prima, e ogni comando che può cambiare qualcosa parte solo dopo il Suo sì. I comandi che modificano Windows o la sua sicurezza vengono rifiutati.' },
          { k: 'Annulla', v: "«Annulla le modifiche ai file» riporta i file com'erano." },
        ],
      },
      note: 'Le attività web e il terminale funzionano meglio con un modello locale da 14B o più (per esempio qwen3:14b); i piccoli modelli da 7B si fermano in sicurezza, ma portano a termine poche attività.',
    },
    more: { tag: 'Inoltre', h2: 'Più modi di lavorare con i Suoi file', icons: ['image', 'audio', 'compare', 'export', 'plug', 'search'] },
    phone: {
      tag: 'Android · anteprima',
      h2: 'Anche il Suo telefono partecipa',
      lede: "L'app StarkLLM per Android lavora insieme al Suo PC. I documenti e il modello di IA restano sul PC; il telefono fa domande, invia foto di lettere e mostra le Sue scadenze. Non esiste un’app per iPhone, e l’app Android è un’anteprima. A casa si collega tramite la Sua rete di casa; fuori casa solo se Lei lo consente per quel telefono.",
      items: [
        { k: 'Abbinato con un codice QR', v: "Impostazioni › Telefono mostra un codice QR. Un telefono raggiunge il Suo PC solo dopo l'abbinamento, e resta abbinato finché Lei non lo rimuove, o finché il suo account non si disconnette o cambia la password. L'abbinamento avviene solo a casa, mai tramite il relay." },
        { k: 'A casa: diretto e cifrato', v: "A casa il telefono si collega attraverso la Sua rete di casa. La connessione è cifrata, e il telefono accetta solo il certificato del Suo PC, fissato all'abbinamento: nessun altro dispositivo nella rete Wi-Fi può spacciarsi per il Suo PC." },
        { k: 'Fuori casa: solo se Lei lo consente', v: 'Per ogni telefono, Impostazioni › Telefono › «Anche fuori casa (tramite il relay)» gli permette di raggiungere il Suo PC da qualsiasi rete, tramite il relay di StarkLLM (relay.starkllm.com). È spento per impostazione predefinita. Il telefono mostra allora «Connesso · fuori casa».' },
        { k: 'Che cosa vede il relay', v: 'La cifratura va dal telefono al Suo PC con lo stesso certificato usato a casa, quindi il relay inoltra solo byte cifrati: nessuna domanda, risposta, documento, token del dispositivo o account. Non salva e non registra alcun contenuto. Vede a quale PC è destinata una connessione, quando e quanti dati passano, e conserva per ogni PC un identificativo casuale e un hash di un segreto.' },
        { k: 'Niente ricerca web, niente modelli cloud', v: 'A una domanda dal telefono risponde il Suo PC: niente ricerca web e niente modelli cloud, anche fuori casa. «Completamente offline» sul PC chiude il collegamento e la connessione al relay.' },
        { k: 'Più account su un PC', v: "Ogni telefono appartiene all'account StarkLLM che ha mostrato il suo codice QR." },
      ],
      levelsH: 'Per ogni telefono, Lei sceglie che cosa può fare',
      levels: [
        { k: 'Solo fare domande', v: 'Legge aree di lavoro, chat, posta in arrivo e scadenze e fa domande. Non invia documenti e non cambia le scadenze.' },
        { k: 'Fare domande e inviare documenti', v: 'Invia anche foto e documenti, elimina chat e segna le scadenze come fatte.' },
        { k: 'Fare domande, inviare e gestire questo PC', v: 'Avvia anche un backup e può mettere StarkLLM completamente offline. Il telefono chiede prima la Sua impronta.' },
      ],
      note: "L'app Android è un'anteprima. Fuori casa tutti i dati passano cifrati attraverso il relay; un collegamento diretto tra telefono e PC non fa parte di questa versione. Fuori casa il PC deve essere acceso e StarkLLM in esecuzione. Il relay consente per ogni PC fino a 16 connessioni di telefoni contemporanee e 200 MB al minuto, e chiude una connessione dopo 6 minuti senza alcun traffico.",
    },
  },
  privacy: {
    h2: 'Una privacy che può verificare',
    lede: 'StarkLLM è fatto in modo che i Suoi documenti non abbiano mai bisogno del cloud. Che cosa va online lo decide Lei, e può vederlo.',
    items: [
      { title: 'Documenti e modello restano sul Suo PC', text: "I Suoi documenti, le chat e l'indice di ricerca sono salvati sul Suo disco, e i modelli linguistici girano sulla Sua CPU o GPU tramite Ollama. L'app del telefono parla con il Suo PC; fuori casa, solo se Lei lo consente, tramite il relay di StarkLLM, che inoltra solo dati cifrati e non può leggerli." },
      { title: 'Nessuna telemetria', text: "L'app per Windows non ha telemetria né SDK di analisi. Anche questo sito non usa strumenti di analisi e non imposta cookie; veda l'informativa sulla privacy." },
      { title: 'Ogni connessione in elenco', text: 'Ricerca web, attività web, fornitori di modelli cloud, importazioni dal web (pagine web, YouTube, GitHub), prezzi di mercato, telefono fuori casa (relay) e controllo degli aggiornamenti funzionano solo quando Lei li attiva o li avvia. Impostazioni › Privacy e rete elenca ogni connessione di StarkLLM; i comandi che Lei consente nel Terminale e i server di strumenti che aggiunge girano come Suoi programmi e non sono nell’elenco. La chat mostra quando una domanda lascia il Suo PC.' },
      { title: "L'interruttore «Completamente offline»", text: 'Un solo interruttore porta StarkLLM completamente offline: ogni funzione online viene rifiutata e il collegamento con il Suo telefono viene chiuso. I Suoi documenti, la posta in arrivo e i modelli locali continuano a funzionare.' },
    ],
  },
};

const tr: Rel = {
  heroText: {
    h1: ['Belgeleriniz', 'bilgisayarınızda kalır.', 'İş yine de yapılır.'],
    lede: 'StarkLLM, mektuplarınızı ve belgelerinizi Windows bilgisayarınızda okur, içlerindeki son tarihleri ve tutarları bulur ve her yanıtın hangi sayfadan geldiğini göstererek yanıtlar. Artık sizin için görevler de yapar: web sitelerinde ve bir proje klasöründe, önemli her adımdan önce size sorarak. Yapay zekâ modelleri Ollama aracılığıyla bilgisayarınızda çalışır.',
  },
  hero: {
    news: 'Görevler ve daha fazlası: web görevleri, kod yardımı, telefonunuz',
    chips: ['Windows bilgisayarınızda çalışır', 'Harekete geçmeden önce sorar', 'Telemetri yok', 'Ücretsiz · Apache 2.0'],
  },
  news: {
    tag: 'Görevler ve daha fazlası',
    h2: 'StarkLLM artık sizin için görevler yapıyor.',
    lede: 'Web sitelerinde, bir proje klasöründe ve telefonunuzdan. Her adımı görürsünüz; önemli olan her şeyden önce StarkLLM size sorar. Belgeleriniz ve yapay zekâ modeli bilgisayarınızda kalır.',
    items: [
      { icon: 'web', title: 'Kendi tarayıcı penceresinde web görevleri', text: 'StarkLLM kendi tarayıcı penceresini açar ve web sitelerinde çalışır; örneğin belirli bir gündeki en ucuz uçuşu bulmak için. Her adımı görürsünüz. Satın alan, rezervasyon yapan, ödeme yapan, gönderen veya silen her işlemden önce size sorar. Oturum açma, ödemeler ve “Robot musunuz?” doğrulamaları her zaman sizde kalır. Bir görev her gün veya her hafta tekrarlanabilir.' },
      { icon: 'terminal', title: 'Bir proje klasöründe kod yardımı', text: '“Terminal” ile bir klasör seçin: StarkLLM oradaki dosyaları okur ve değiştirir, PowerShell komutları çalıştırır. Her değişiklik önce gösterilir, bir şeyi değiştirebilecek her komut ancak onayınızdan sonra çalışır ve “Dosya değişikliklerini geri al” dosyaları eski hâline getirir.' },
      { icon: 'image', title: 'Bir görsel hakkında sorular', text: 'Bir ekran görüntüsü yapıştırın veya bir fotoğraf seçin; bilgisayarınızdaki bir görme modeli yanıt verir. Görsel küçültülür, gizli verileri (konum, kamera) silinir ve kaydedilmez.' },
      { icon: 'audio', title: 'Kayıtlar belgeye dönüşür', text: 'Toplantılar, dersler ve sesli notlar, Whisper large-v3-turbo ile (bir kez indirilir, yaklaşık 1,6 GB) bilgisayarınızda zaman bilgileriyle yazıya dökülür. Ardından onlar hakkında da her belgede olduğu gibi soru sorarsınız.' },
      { icon: 'compare', title: 'Yan yana iki model', text: '“Modelleri karşılaştır” aynı soruyu ikinci bir yerel modele sorar. Daha iyi yanıtı siz seçersiniz.' },
      { icon: 'export', title: 'Kaynaklarıyla Word ve PDF', text: 'Bir sohbetin tamamını veya tek bir yanıtı, dayandığı kaynaklarla birlikte Word belgesi ya da PDF olarak kaydedin.' },
      { icon: 'plug', title: 'Kendi araç sunucularınız (MCP)', text: 'Ayarlar › Yerel Araçlar bölümünde bilgisayarınızda çalışan MCP sunucuları ekleyin. Her araç siz açana kadar kapalıdır ve her çağrı onayınızı bekler.' },
      { icon: 'phone', title: 'Android telefonunuz', badge: 'Önizleme', text: 'Android için StarkLLM uygulamasını QR koduyla eşleştirin; ardından belgeleriniz hakkında soru sorun, mektupların fotoğraflarını gönderin ve son tarihlerinizi görün. Evde ev ağınız üzerinden; evden uzakta yalnızca o telefon için izin verirseniz, StarkLLM aktarıcısı üzerinden. Telefondan bilgisayarınıza kadar her zaman şifreli. Her telefon için siz seçersiniz: yalnızca soru sormak, belge de göndermek veya bu bilgisayarı da yönetmek.' },
      { icon: 'search', title: 'Yedek arama motorlu web araması', text: 'Web aramasını açtığınızda sorunuz DuckDuckGo’ya gider. Yalnızca oradan yanıt gelmezse StarkLLM önce Startpage’e, sonra Mojeek’e ve son çare olarak Wikipedia’nın herkese açık aramasına sorar: her seferinde yalnızca biri, asla aynı anda birkaçı değil.' },
    ],
    note: 'Web görevleri ve terminal, 14B veya daha büyük bir yerel modelle (örneğin qwen3:14b) en iyi sonucu verir; küçük 7B modeller güvenli şekilde durur ama az sayıda görevi tamamlar.',
    more: 'Yeni özellikler nasıl çalışır',
  },
  product: {
    tasks: {
      tag: 'Web görevleri · Terminal',
      h2: 'Sizin için yaptığı görevler',
      lede: 'StarkLLM artık yalnızca yanıt vermiyor, harekete de geçebiliyor. Ne yapmak üzere olduğunu gösterir ve önemli her adımda onayınızı bekler.',
      web: {
        h3: 'Web görevleri',
        items: [
          { k: 'Kendi tarayıcı penceresi', v: 'Sohbette bir “Web görevi” başlatın. StarkLLM ayrı bir tarayıcı penceresi açar ve her adımı izlersiniz. “Devral” ile pencerede kendiniz çalışır, sonra pencereyi geri verirsiniz.' },
          { k: 'Önce sorar', v: 'Satın alan, rezervasyon yapan, ödeme yapan, gönderen veya silen her işlemden önce StarkLLM durur ve sorar. Banka, sağlık ve resmî kurum siteleri yalnızca onayınızdan sonra açılır; yetişkin siteleri asla.' },
          { k: 'Bazı adımlar her zaman sizindir', v: 'Oturum açma, ödemeler ve “Robot musunuz?” doğrulamalarını StarkLLM asla yapmaz.' },
          { k: 'Yarın yeniden', v: 'Sayfayı çalışma alanına kaydedin, görevi sonraya saklayın veya her gün ya da her hafta tekrarlayın. Tekrarlanan bir görev yalnızca bakar; yanıt değiştiğinde bir bildirim size haber verir.' },
        ],
      },
      terminal: {
        h3: 'Terminal: kod yardımı',
        items: [
          { k: 'Tek bir proje klasörü', v: '“Terminal” ile bir klasör seçin. StarkLLM oradaki dosyaları okur ve değiştirir, PowerShell komutları çalıştırır. O klasörün dışına asla çıkmaz, anahtarları ve .env dosyalarını asla okumaz.' },
          { k: 'Her adım için onayınız', v: 'Her değişiklik önce gösterilir ve bir şeyi değiştirebilecek her komut ancak onayınızdan sonra çalışır. Windows’u veya güvenliğini değiştiren komutlar reddedilir.' },
          { k: 'Geri al', v: '“Dosya değişikliklerini geri al” dosyaları eski hâline getirir.' },
        ],
      },
      note: 'Web görevleri ve terminal, 14B veya daha büyük bir yerel modelle (örneğin qwen3:14b) en iyi sonucu verir; küçük 7B modeller güvenli şekilde durur ama az sayıda görevi tamamlar.',
    },
    more: { tag: 'Ayrıca', h2: 'Dosyalarınızla çalışmanın daha fazla yolu', icons: ['image', 'audio', 'compare', 'export', 'plug', 'search'] },
    phone: {
      tag: 'Android · önizleme',
      h2: 'Telefonunuz da işin içinde',
      lede: 'Android için StarkLLM uygulaması bilgisayarınızla birlikte çalışır. Belgeler ve yapay zekâ modeli bilgisayarda kalır; telefon soru sorar, mektup fotoğrafları gönderir ve son tarihlerinizi gösterir. iPhone uygulaması yok ve Android uygulaması bir önizlemedir. Evde ev ağınız üzerinden bağlanır; evden uzakta yalnızca o telefon için izin verirseniz.',
      items: [
        { k: 'QR koduyla eşleştirme', v: 'Ayarlar › Telefon bir QR kodu gösterir. Bir telefon bilgisayarınıza ancak eşleştirildikten sonra ulaşır ve siz onu kaldırana kadar ya da hesabı oturumu kapatana veya parolasını değiştirene kadar eşleşmiş kalır. Eşleştirme yalnızca evde yapılır, asla aktarıcı üzerinden değil.' },
        { k: 'Evde: doğrudan ve şifreli', v: 'Evde telefon ev ağınız üzerinden bağlanır. Bağlantı şifrelidir ve telefon yalnızca bilgisayarınızın eşleştirme sırasında sabitlenen kendi sertifikasını kabul eder; böylece Wi-Fi’daki başka hiçbir cihaz kendini bilgisayarınız gibi gösteremez.' },
        { k: 'Evden uzakta: yalnızca izin verirseniz', v: 'Her telefon için Ayarlar › Telefon › “Evden uzaktayken de (aktarıcı üzerinden)” seçeneği, telefonun bilgisayarınıza her ağdan StarkLLM aktarıcısı (relay.starkllm.com) üzerinden ulaşmasını sağlar. Varsayılan olarak kapalıdır. Telefon o zaman “Bağlı · evden uzakta” gösterir.' },
        { k: 'Aktarıcının gördükleri', v: 'Şifreleme, evdekiyle aynı sertifikayla telefondan bilgisayarınıza kadar uzanır; bu yüzden aktarıcı yalnızca şifreli baytları iletir: soru, yanıt, belge, cihaz belirteci veya hesap yok. Hiçbir içeriği saklamaz ve kaydetmez. Bir bağlantının hangi bilgisayar için olduğunu, ne zaman ve ne kadar veri aktığını görür; her bilgisayar için rastgele bir kimlik ve bir sırrın özetini (hash) saklar.' },
        { k: 'Web araması yok, bulut modelleri yok', v: 'Telefondan gelen bir soru bilgisayarınızda yanıtlanır: evden uzaktayken de web araması yok, bulut modelleri yok. Bilgisayardaki “Tamamen çevrimdışı” bağlantıyı ve aktarıcıyla bağlantıyı kapatır.' },
        { k: 'Bir bilgisayarda birden fazla hesap', v: 'Her telefon, QR kodunu gösteren StarkLLM hesabına aittir.' },
      ],
      levelsH: 'Her telefonun neler yapabileceğini siz seçersiniz',
      levels: [
        { k: 'Yalnızca soru sormak', v: 'Çalışma alanlarını, sohbetleri, gelen kutusunu ve son tarihleri okur, soru sorar. Belge göndermez ve son tarihleri değiştirmez.' },
        { k: 'Soru sormak ve belge göndermek', v: 'Ayrıca fotoğraf ve belge gönderir, sohbetleri siler ve son tarihleri tamamlandı olarak işaretler.' },
        { k: 'Soru sormak, göndermek ve bu bilgisayarı yönetmek', v: 'Ayrıca bir yedekleme başlatır ve StarkLLM’i tamamen çevrimdışı yapabilir. Telefon önce parmak izinizi ister.' },
      ],
      note: 'Android uygulaması bir önizlemedir. Evden uzakta tüm veriler şifreli olarak aktarıcıdan geçer; telefon ile bilgisayar arasında doğrudan bağlantı bu sürümün parçası değildir. Evden uzakta bilgisayarın açık olması ve StarkLLM’in çalışması gerekir. Aktarıcı her bilgisayar için aynı anda en fazla 16 telefon bağlantısına ve dakikada 200 MB’a izin verir ve hiç trafik olmayan bir bağlantıyı 6 dakika sonra kapatır.',
    },
  },
  privacy: {
    h2: 'Kontrol edebileceğiniz gizlilik',
    lede: 'StarkLLM, belgelerinizin hiçbir zaman buluta ihtiyaç duymaması için tasarlandı. Neyin çevrimiçi olacağına siz karar verirsiniz ve bunu görebilirsiniz.',
    items: [
      { title: 'Belgeler ve model bilgisayarınızda kalır', text: 'Belgeleriniz, sohbetleriniz ve arama dizini kendi diskinizde saklanır; dil modelleri Ollama aracılığıyla kendi CPU veya GPU’nuzda çalışır. Telefon uygulaması bilgisayarınızla konuşur; evden uzakta yalnızca izin verirseniz, yalnızca şifreli verileri ileten ve bunları okuyamayan StarkLLM aktarıcısı üzerinden.' },
      { title: 'Telemetri yok', text: 'Windows uygulaması telemetri göndermez ve analiz SDK’sı içermez. Bu web sitesi de analiz aracı kullanmaz ve çerez yerleştirmez; gizlilik politikasına bakın.' },
      { title: 'Her bağlantı listelenir', text: 'Web araması, web görevleri, bulut model sağlayıcıları, web’den içe aktarma (web sayfaları, YouTube, GitHub), piyasa fiyatları, evden uzaktaki telefon (aktarıcı) ve güncelleme denetimi yalnızca siz açtığınızda veya başlattığınızda çalışır. Ayarlar › Gizlilik ve ağ, StarkLLM’in kurduğu her bağlantıyı listeler; Terminal’de izin verdiğiniz komutlar ve eklediğiniz araç sunucuları sizin kendi programlarınız olarak çalışır ve listede yer almaz. Sohbet de bir soru bilgisayarınızdan çıktığında bunu gösterir.' },
      { title: '“Tamamen çevrimdışı” anahtarı', text: 'Tek bir anahtar StarkLLM’i tamamen çevrimdışı yapar: her çevrimiçi özellik reddedilir ve telefonunuzla bağlantı kapatılır. Belgeleriniz, gelen kutusu ve yerel modeller çalışmaya devam eder.' },
    ],
  },
};

// Languages added later keep only the part that is still shown (product.phone, on the phone page) in
// src/i18n/langs/<lang>/release250.ts (default export { product: { phone } }).
const more = Object.fromEntries(Object.entries(import.meta.glob('./langs/*/release250.ts', { eager: true, import: 'default' })).map(([p, v]) => [p.split('/').slice(-2)[0], v])) as Record<string, Rel>;
export const rel250: Partial<Record<Lang, Rel>> = { en, de, es, fr, it, tr, ...more };
