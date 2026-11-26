// Phone page (2026, new). Sources: docs/android-companion.md, docs/phone-away.md, RELEASE_NOTES.md 2.4.0–2.6.0 (app repo v2.6.0).
// The sections "How it connects" and the levels come from src/i18n/release250.ts (product.phone), which every language has.
export default {
  meta: {
    title: 'Phone: StarkLLM for Android | StarkLLM',
    description: 'The StarkLLM app for Android asks your PC about your documents, sends photos of letters and shows your deadlines. At home directly, away from home only if you allow it, encrypted from the phone to your PC.',
  },
  hero: {
    eyebrow: 'Android · preview',
    h1: 'Your phone asks. Your PC answers.',
    lede: 'The StarkLLM app for Android works together with your PC. The documents, the index and the AI model stay on the PC; the phone asks, sends photos of letters and shows your deadlines.',
  },
  does: {
    h2: 'What the phone does',
    items: [
      { icon: 'chat', title: 'Ask about your documents', text: 'Workspaces and chats of your PC, answers that stream in with the documents they used as chips, and the warning for quotations that are not in your documents.' },
      { icon: 'camera', title: 'Send letters', text: 'Take a photo of a letter or share a PDF from another app. Your PC reads it, also the text in photos. Photos are deleted on the phone after sending.' },
      { icon: 'calendar', title: 'Deadlines', text: 'Overdue, today, this week, later. "Done" marks a deadline on the PC; a home-screen widget shows the next three.' },
      { icon: 'mic', title: 'Dictation', text: 'Hold the microphone button and speak. The speech model on your PC writes it down, not an online service.' },
      { icon: 'pc', title: 'This PC', text: 'Connection, version, AI model, backup and protection at a glance. With the right level: back up now or go fully offline, confirmed with your fingerprint.' },
      { icon: 'lock', title: 'App lock', text: 'Fingerprint when the app opens. While it is on, no screenshots and no preview in recent apps.' },
    ],
  },
  pair: {
    h2: 'Paired in three steps, at home',
    steps: [
      { t: 'Turn it on', v: 'On the PC, open Settings › Phone and turn the phone link on. It is off by default.' },
      { t: 'Show the QR code', v: 'The code is valid for 5 minutes and works once.' },
      { t: 'Scan it with the app', v: 'The phone remembers the PC\'s certificate and from then on talks only to that PC.' },
    ],
    note: 'Pairing works at home only, never through the relay. Several PCs can be paired, and Settings › Phone on the PC lists every phone with "Remove".',
  },
  connects: { h2: 'How it connects', levelsH: 'Per phone, you choose what it may do' },
  relay: {
    h2: 'What the relay sees, and what it does not',
    lede: 'Away from home, the phone and your PC meet at the StarkLLM relay. The encryption runs from the phone to your PC, so the relay only passes on bytes.',
    cols: ['The relay sees', 'The relay never sees', 'The relay keeps'],
    sees: ['Which PC a connection is for (a random ID)', 'When a connection is made', 'How much data flows'],
    never: ['Your questions and answers', 'Your documents and photos', 'The device token or your account'],
    keeps: ['A random ID per PC', 'A hash of the PC\'s secret', 'No content and no content logs'],
  },
  limits: {
    h2: 'Good to know',
    items: [
      'The app is a preview. There is no iPhone app.',
      'Away from home works only while the PC is on, StarkLLM is running and it is not fully offline.',
      'Away from home, all data passes through the relay, encrypted. A direct connection between phone and PC is planned, with the relay as fallback.',
      'A question from the phone is answered on your PC without web search and without cloud models, also away from home.',
      'Android 10 or newer. The app has no analytics, no crash reporting service and no Google Play services.',
    ],
  },
  play: { h2: 'Getting the Android app', text: 'The Android app is on Google Play in a test phase. If you would like it from Google Play, send your e-mail address to info@starkllm.com, and you will receive the link to Google Play.' },
  shots: { pc: '12-settings-phone', phone: 'phone-01-chat' },
};
