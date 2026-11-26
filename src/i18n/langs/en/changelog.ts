// Changelog page (2026, new): the words around the release notes. The notes themselves come from
// src/data/RELEASE_NOTES.md (a copy of RELEASE_NOTES.md of the app, v2.6.0), parsed at build time; they are in English.
export default {
  meta: {
    title: 'Changelog | StarkLLM',
    description: 'Every version of StarkLLM from 2.0 to today, from the release notes of the app.',
  },
  hero: {
    eyebrow: 'Changelog',
    h1: 'Every version, in plain words.',
    lede: 'What changed in each release of StarkLLM, from the release notes of the app.',
  },
  latest: 'Latest',
  versions: 'Versions',
  older: 'Before 2.0: the research beta',
  notesLang: '',
  update: 'Already installed? Settings › About › "Check for updates" › "Download and install".',
};
