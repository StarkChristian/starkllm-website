// About page (2026). A language without this file shows its older About text (src/content-html/about.main.<lang>.html).
// The roadmap lists plans, not promises: sources are docs/phone-away.md ("next step"), docs/roadmap-2026-12.md and
// RELEASE_NOTES.md 2.2.1 (own sandbox for running code) of the app repo, v2.6.0.
export default {
  meta: {
    title: 'About | StarkLLM',
    description: 'Who makes StarkLLM, why it exists, how it is licensed, and what comes next.',
  },
  hero: {
    eyebrow: 'About',
    h1: 'Made for documents that should stay home.',
    lede: 'StarkLLM is a free, open-source project by Christian Stark from Aachen, Germany.',
  },
  what: {
    h2: 'What StarkLLM is',
    p: [
      'StarkLLM is a private, local-first AI assistant for Windows. It reads your letters and documents on your own PC, answers with the page it found the answer on, and does tasks for you on websites and in a project folder, asking before every step that matters.',
      'Every core workflow runs on your machine: the documents, the search index and the AI models. Nothing leaves your PC unless you turn on an optional online feature, and Settings › Privacy & network lists every connection.',
    ],
  },
  why: {
    h2: 'Why it exists',
    p: [
      'Most AI assistants ask you to upload what you want to ask about. For a tax notice, a medical letter or a contract, that is a lot to ask. StarkLLM shows that useful, document-grounded answers are possible while the documents never leave the desk.',
      'It is built for people who cannot or do not want to upload their documents: households with paperwork, freelancers, students, researchers and small offices.',
    ],
  },
  who: {
    h2: 'Who makes it',
    p: 'StarkLLM is designed and developed by Christian Stark.',
    lines: ['Christian Stark', 'Maxstr. 14, 52070 Aachen, Germany', 'Email: info@starkllm.com'],
    contact: 'Contact',
  },
  open: {
    h2: 'Open source',
    p: [
      'StarkLLM is open source under the Apache 2.0 license: free for personal, research and commercial use. The source code, the release notes and the privacy documents are on GitHub.',
      'Found a bug or have an idea? Open an issue on GitHub or write an email.',
    ],
    github: 'Source code on GitHub',
    issues: 'Report a problem',
  },
  roadmap: {
    h2: 'What comes next',
    lede: 'Plans for 2026 and 2027, not promises. Each step ships only when it is tested.',
    items: [
      { when: 'Next', title: 'A direct line to your phone', text: 'Phone and PC connect directly when they can, with the relay as the fallback. The encryption stays end to end either way.' },
      { when: 'Next', title: 'The Android app on Google Play', text: 'From the closed test to a public release.' },
      { when: 'Later', title: 'Its own sandbox for code', text: '"Run" on Python code blocks works again without Docker, inside a sandbox of StarkLLM\'s own.' },
      { when: 'Ongoing', title: 'Every page in every language', text: 'This website in all six languages of the app, with screenshots and videos from the app in each language.' },
    ],
  },
  related: {
    h2: 'Related project',
    text: 'StarkLLM is part of a wider interest in privacy-preserving computing. For cryptographic approaches to private data, see homomorphicprivacy.com.',
  },
};
