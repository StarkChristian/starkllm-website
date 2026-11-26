// Alt texts of the app screenshots and titles/captions of the videos, by media name (see "Media" in README.md).
// The files themselves come from the published 2.6.0 in this language: src/assets/media/<lang>/<lang>-<name>.png and
// public/media/video/<lang>-<name>.{webm,mp4,jpg,vtt}. Until a file exists, the page shows a placeholder with this text.
export default {
  shots: {
    '01-home': 'StarkLLM start page: the next deadlines and payment dates found in letters, each with amount and page, and the newest documents',
    '02-inbox': 'StarkLLM inbox: letters grouped into one case per sender, the nearest deadline first, one letter marked as a possible scam',
    '03-chat-sources': 'StarkLLM chat: a question about a letter is answered with the amount and the due date, with source chips under the answer',
    '04-source-page': 'A source opened at its page, with the passage the answer was based on marked',
    '05-scam-warning': 'A red warning above an answer: the letter asks for payment by voucher and through a link, and contains a hidden note to AI assistants',
    '06-book-summary': 'An answer about a whole book, built from chapter summaries, with the pages it covers',
    '07-image-question': 'A question about a pasted screenshot, answered by a vision model on the PC',
    '08-recording': 'A meeting recording written down as a document with times, and a question about it',
    '09-web-task': 'A web task in the StarkLLM browser window with its address bar, the steps listed next to the page',
    '10-terminal': 'Terminal in a project folder: a file change shown before it is made, with buttons to allow it or not',
    '11-compare-models': 'Compare models: the same question answered by two local models side by side',
    '12-settings-phone': 'Settings, Phone: a paired Android phone with the switch "Also away from home (through the relay)"',
    '13-privacy-network': 'Settings, Privacy and network: the list of every connection with time, host and purpose, and the "Fully offline" switch',
    '14-themes': 'Settings, Appearance: the theme gallery, one light and one dark theme',
    '15-settings-models': 'Settings, Models: the chat model, the embedding model and the vision model on this PC',
    'phone-01-chat': 'The StarkLLM app for Android: an answer from the PC with source chips',
  },
  videos: {
    'v1-letter-answer': { title: 'A letter, a question, an answer with its source', caption: 'A letter is added. The answer names the amount and the date, and a click on the source opens the page.' },
    'v2-web-task': { title: 'A web task', caption: 'StarkLLM opens a site in its own browser window, clicks through it and answers with the link.' },
    'v3-terminal': { title: 'Terminal: help with code', caption: 'A change is shown first, runs after a yes, and "Undo the file changes" puts it back.' },
    'v4-inbox': { title: 'The inbox', caption: 'Letters become cases per sender, with deadlines, amounts and the page each one comes from.' },
    'v5-privacy': { title: 'Privacy and network', caption: 'Every connection is listed, and one switch takes StarkLLM fully offline.' },
  },
};
