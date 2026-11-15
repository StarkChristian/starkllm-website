// Small helpers shared by Lucy's scripts: the "hide Lucy" choice and the page data written by LucyGuide.astro.
export const KEY = 'lucy-hidden';
export const root = document.documentElement;
export const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

export function setHidden(v: boolean) {
  v ? root.setAttribute('data-lucy', 'off') : root.removeAttribute('data-lucy');
  try { localStorage.setItem(KEY, v ? '1' : '0'); } catch { /* storage blocked: the choice lasts for this page only */ }
}

export type Chat = {
  open: string; title: string; close: string; note: string; placeholder: string; label: string; send: string;
  suggestions: string[]; suggestionsLabel: string; loading: string; loadError: string; source: string; also: string;
  none: string; noneLinks: string; scoped: string; advice: string; you: string; lucy: string; clear: string;
  hrefs: Record<string, string>; links: Record<string, string>;
};
export type Data = { lang: string; idx: string; chat: Chat; labels: Record<string, string>; steps: { sel: string; text: string }[]; hide: string; tour: string };

export function readData(): Data | null {
  try { return JSON.parse(document.getElementById('lucy-data')?.textContent || ''); } catch { return null; }
}
