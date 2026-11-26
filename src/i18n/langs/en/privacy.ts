// Privacy overview (2026, new). The legal privacy policy of this website stays separate (/datenschutz, /privacy-policy).
// Sources: docs/privacy-network.md (the table; where it disagrees with the code, the code wins: web search is DuckDuckGo,
// Startpage, Mojeek, Wikipedia), docs/verify-privacy.md, docs/encryption-design.md, docs/code-signing.md,
// .github/workflows/sbom.yml and RELEASE_NOTES.md of the app repo, v2.6.0.
export default {
  meta: {
    title: 'Privacy: what stays on your PC | StarkLLM',
    description: 'What never leaves your PC, every connection StarkLLM can make and when, protection at rest, signed builds, a software bill of materials, and how to check it all yourself.',
  },
  hero: {
    eyebrow: 'Privacy',
    h1: 'Private by design. Checkable by you.',
    lede: 'StarkLLM is built so that your documents never need a cloud. What goes online is your choice, you can see every connection, and you do not have to take our word for it.',
  },
  stays: {
    h2: 'What never leaves your PC',
    lede: 'These stay on your own disk and your own processor or graphics card, whatever you switch on.',
    items: [
      { icon: 'doc', title: 'Your documents', text: 'Letters, contracts, books, scans, photos and recordings, and the text read from them.' },
      { icon: 'chat', title: 'Your chats', text: 'Questions, answers and their sources, unless you choose a cloud model yourself.' },
      { icon: 'search', title: 'The search index', text: 'The passages and vectors of every document, and the summaries of large ones.' },
      { icon: 'pc', title: 'The AI models', text: 'They run on your PC through Ollama. After the first download, StarkLLM works without internet.' },
      { icon: 'inbox', title: 'Inbox and deadlines', text: 'Senders, amounts, accounts and dates are found by rules on your PC.' },
      { icon: 'eyeoff', title: 'Nothing about you', text: 'No telemetry, no crash reports, no usage statistics, no advertising, no account on a server.' },
    ],
  },
  online: {
    h2: 'What goes online, and when',
    lede: 'Every connection StarkLLM can make, as in Settings › Privacy & network. Each one is off until you turn it on or start it, or happens once for a download you asked for.',
    cols: ['Connection', 'Goes to', 'When', 'In a new install'],
    rows: [
      { what: 'Update check', host: 'api.github.com', when: 'At the start, if you agreed at the first start', def: 'Off until you agree' },
      { what: 'Update download', host: 'github.com', when: 'Only after "Download and install"', def: 'Off' },
      { what: 'AI models', host: 'registry.ollama.ai (through Ollama)', when: 'First start, for models that are missing', def: 'When needed' },
      { what: 'Ollama installer', host: 'ollama.com', when: 'Only after "Install Ollama for me"', def: 'Off' },
      { what: 'Web search', host: 'DuckDuckGo; if it does not answer: Startpage, Mojeek, Wikipedia', when: 'Per question, with the Web Search button on', def: 'Off' },
      { what: 'Web tasks', host: 'The sites of the task you typed', when: 'Only for a web task you start', def: 'Off' },
      { what: 'Imports from the web', host: 'The address you enter, YouTube, GitHub', when: 'Only after "+ Web URL", "+ YouTube Video" or "+ GitHub Repo"', def: 'Off' },
      { what: 'Cloud model providers', host: 'The provider you enter (for example OpenAI, DeepSeek, OpenRouter, Groq)', when: 'Every chat while such a provider is selected; the chat shows a badge', def: 'Off' },
      { what: 'Ollama cloud models', host: 'ollama.com (through Ollama)', when: 'Only if you pick a model whose name ends in "cloud"', def: 'Off' },
      { what: 'Market prices', host: 'Yahoo Finance, CoinGecko', when: 'Only after you switch the widget on', def: 'Off' },
      { what: 'Speech models', host: 'huggingface.co', when: 'First use of voice input or of a recording', def: 'Off until used' },
      { what: 'Text-recognition languages', host: 'github.com', when: 'Only after "Download" in Settings', def: 'Off' },
      { what: 'Phone at home', host: 'Incoming, from a paired phone on your home network', when: 'After you turned the phone link on and paired a phone', def: 'Off' },
      { what: 'Phone away from home', host: 'relay.starkllm.com (encrypted from the phone to your PC)', when: 'Only for phones you allowed away from home', def: 'Off' },
    ],
    note: 'Commands you allow in Terminal and tool servers you add run as your own programs: they are not listed, and what they connect to is up to them. Ollama and Windows have their own update checks, which StarkLLM does not control.',
  },
  offline: {
    h2: 'One switch: fully offline',
    text: '"Fully offline" in Settings › Privacy & network refuses every online feature, closes the link to your phone and the relay, and never downloads anything, not even an update. Your documents, the inbox and the local models keep working. The first start asks once whether to stay online or go fully offline.',
  },
  atRest: {
    h2: 'Protection at rest',
    lede: 'Optional, in Settings › Protection: for a lost laptop, another user on the same PC, or a backup in a cloud folder.',
    items: [
      { k: 'Encrypted on disk', v: 'Documents, chats, names and titles are encrypted on disk, and the search index can be locked too. The key is bound to your Windows account.' },
      { k: 'Start-up passphrase', v: 'An optional passphrase with a recovery key. The passphrase is never stored.' },
      { k: 'Encrypted backup', v: 'One backup file you can keep anywhere, also in a cloud folder; without the passphrase it is noise. An automatic weekly backup keeps several copies.' },
    ],
    limits: 'It does not protect against malware that runs as you while StarkLLM is open. BitLocker is still recommended: it also covers the programs and the models.',
  },
  signed: {
    h2: 'Signed builds',
    text: 'Since 2.1.2 the installer, StarkLLM.exe, the uninstaller and the program files of the engine are signed with a Certum certificate issued to "Open Source Developer Christian Stark". The built-in updater installs only updates signed with this name.',
    link: 'Code signing policy',
  },
  sbom: {
    h2: 'A bill of materials for every release',
    text: 'Every release on GitHub comes with a software bill of materials (SBOM, CycloneDX) for the app and for the engine: the list of every library inside, with its version.',
    link: 'Releases on GitHub',
  },
  check: {
    h2: 'Check it yourself',
    lede: 'You do not have to trust StarkLLM\'s own screens. Turn "Fully offline" on, use the app, and look.',
    steps: [
      { t: 'Resource Monitor', v: 'Win + R, "resmon", Network tab. With fully offline on, StarkLLM.exe, python.exe and ollama.exe should talk to 127.0.0.1 only.' },
      { t: 'PowerShell', v: 'List every open connection that does not go to this PC, with the program that made it:' },
      { t: 'Wireshark', v: 'The strongest check: capture on your network adapter and filter out local traffic. Then turn web search on and watch DuckDuckGo appear, so you know the check works.' },
    ],
    code: "Get-NetTCPConnection -State Established |\n  Where-Object { $_.RemoteAddress -notin '127.0.0.1','::1' } |\n  ForEach-Object { $p = Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue\n    [pscustomobject]@{ Process = $p.ProcessName; Remote = \"$($_.RemoteAddress):$($_.RemotePort)\" } } |\n  Sort-Object Process, Remote | Format-Table -AutoSize",
    link: 'The full guide on GitHub',
  },
  site: {
    h2: 'And this website?',
    text: 'It sets no cookies, uses no analytics and loads no fonts, scripts or videos from other servers. Lucy, the assistant on these pages, answers in your browser; your questions are not sent anywhere.',
    link: 'Privacy policy of this website',
  },
};
