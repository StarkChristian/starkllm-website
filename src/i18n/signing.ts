// Code signing policy (required by the SignPath Foundation for free code signing of open source projects).
// Strings may contain links, so they are rendered as HTML; keep them free of user input.
import type { Lang } from './ui';

const REPO = 'https://github.com/StarkChristian/StarkLLM';
const MAINTAINER = '<a href="https://github.com/StarkChristian" target="_blank" rel="noopener">Christian Stark (StarkChristian)</a>';
const CREDIT = 'Free code signing provided by <a href="https://about.signpath.io" target="_blank" rel="noopener">SignPath.io</a>, certificate by <a href="https://signpath.org" target="_blank" rel="noopener">SignPath Foundation</a>';

type Section = { h: string; p?: string; list?: string[] };

export const signing: Record<Lang, { title: string; description: string; eyebrow: string; h1: string; lede: string; sections: Section[] }> = {
  en: {
    title: 'Code signing policy | StarkLLM',
    description: 'How StarkLLM for Windows is signed, who approves a release, and what the program sends over the network.',
    eyebrow: 'Code signing policy',
    h1: 'Code signing policy',
    lede: `${CREDIT}.`,
    sections: [
      {
        h: 'What is signed',
        list: [
          `The StarkLLM program (<code>StarkLLM.exe</code>) and the Windows installer (<code>StarkLLM-v…-Setup.exe</code>).`,
          `Both are built by GitHub Actions from the public source code in <a href="${REPO}" target="_blank" rel="noopener">${REPO.replace('https://', '')}</a> (branch <code>main</code>). Files built on a developer's PC are never signed.`,
          'Files of other open source projects that the app ships unchanged (for example the Electron and Chromium libraries and the NSIS installer plugins) keep the signature of their authors, or none. We only sign files built from our own source code.',
        ],
      },
      {
        h: 'Team roles',
        list: [
          `Committers and reviewers: ${MAINTAINER}.`,
          `Approvers: ${MAINTAINER}.`,
          'Changes from other contributors are reviewed by a committer before they are merged.',
          'Every release is approved by hand before it is signed. Nothing is signed automatically.',
          'Everyone in these roles uses multi-factor authentication for GitHub and SignPath.',
        ],
      },
      {
        h: 'Privacy',
        p: `This program will not transfer any information to other networked systems unless specifically requested by the user or the person installing or operating it. The optional online features (web search, cloud model providers you add, imports, market prices, the update check that asks first) and the one-time downloads on the first start (the engine and the AI models) are listed on the <a href="/tech-privacy">privacy page</a>. The program has no telemetry.`,
      },
      {
        h: 'Check a download',
        list: [
          'In Windows: right-click the file, Properties, Digital Signatures. The signer is SignPath Foundation.',
          'The SHA-256 checksum of every installer is on the <a href="/download">download page</a> and in the release notes on GitHub.',
        ],
      },
      {
        h: 'Report a problem',
        p: `If a signed file looks wrong, or you think a release was not built from this repository, write to <a href="mailto:info@starkllm.com">info@starkllm.com</a> or open an issue at <a href="${REPO}/issues" target="_blank" rel="noopener">GitHub</a>.`,
      },
    ],
  },
  de: {
    title: 'Code-Signing-Richtlinie | StarkLLM',
    description: 'Wie StarkLLM für Windows signiert wird, wer eine Version freigibt und was das Programm über das Netz sendet.',
    eyebrow: 'Code-Signing-Richtlinie',
    h1: 'Code-Signing-Richtlinie',
    lede: `${CREDIT}.`,
    sections: [
      {
        h: 'Was signiert wird',
        list: [
          `Das Programm StarkLLM (<code>StarkLLM.exe</code>) und der Windows-Installer (<code>StarkLLM-v…-Setup.exe</code>).`,
          `Beide baut GitHub Actions aus dem öffentlichen Quellcode in <a href="${REPO}" target="_blank" rel="noopener">${REPO.replace('https://', '')}</a> (Branch <code>main</code>). Dateien, die auf dem PC eines Entwicklers gebaut wurden, werden nie signiert.`,
          'Dateien anderer Open-Source-Projekte, die die App unverändert mitliefert (zum Beispiel die Bibliotheken von Electron und Chromium und die Plugins des NSIS-Installers), behalten die Signatur ihrer Autoren oder bleiben unsigniert. Wir signieren nur Dateien, die aus unserem eigenen Quellcode gebaut werden.',
        ],
      },
      {
        h: 'Rollen im Team',
        list: [
          `Committer und Reviewer: ${MAINTAINER}.`,
          `Freigabe (Approver): ${MAINTAINER}.`,
          'Änderungen anderer Mitwirkender prüft ein Committer, bevor sie übernommen werden.',
          'Jede Version wird von Hand freigegeben, bevor sie signiert wird. Nichts wird automatisch signiert.',
          'Alle in diesen Rollen nutzen Mehr-Faktor-Authentifizierung für GitHub und SignPath.',
        ],
      },
      {
        h: 'Datenschutz',
        p: `Dieses Programm überträgt keine Informationen an andere vernetzte Systeme, außer der Nutzer oder die Person, die es installiert oder betreibt, verlangt es ausdrücklich. Die optionalen Online-Funktionen (Websuche, selbst hinzugefügte Cloud-Modellanbieter, Importe, Marktpreise, die Update-Prüfung, die vorher fragt) und die einmaligen Downloads beim ersten Start (die Engine und die KI-Modelle) stehen auf der <a href="/de/tech-privacy">Datenschutz-Seite</a>. Das Programm hat keine Telemetrie.`,
      },
      {
        h: 'Einen Download prüfen',
        list: [
          'In Windows: Rechtsklick auf die Datei, Eigenschaften, Digitale Signaturen. Signiert hat SignPath Foundation.',
          'Die SHA-256-Prüfsumme jedes Installers steht auf der <a href="/de/download">Download-Seite</a> und in den Release-Notes auf GitHub.',
        ],
      },
      {
        h: 'Ein Problem melden',
        p: `Wenn eine signierte Datei verdächtig aussieht oder Sie glauben, dass eine Version nicht aus diesem Repository gebaut wurde, schreiben Sie an <a href="mailto:info@starkllm.com">info@starkllm.com</a> oder öffnen Sie ein Issue auf <a href="${REPO}/issues" target="_blank" rel="noopener">GitHub</a>.`,
      },
    ],
  },
};
