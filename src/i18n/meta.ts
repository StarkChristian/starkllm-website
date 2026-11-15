// Titles and descriptions of the pages that are plain HTML bodies (manual, about, contact) and the text of the legal-notice
// page of the languages that do not get translated legal texts. English and German are here; every other language has them
// in src/i18n/langs/<lang>/pages.ts (default export, same shape as `base.en`).
import { byLang, type Lang } from './ui';

export type LegalNotice = {
  title: string; description: string; h1: string; lede: string;
  /** The notice: the legal texts are not translated; the German version is legally binding. */
  notice: string;
  /** Link texts: English courtesy translation of the privacy policy, German privacy policy, German imprint. */
  privacyEn: string; privacyDe: string; imprintDe: string;
};
type Meta = { title: string; description?: string };
export type PagesMeta = { manual: Meta; about: Meta; contact: Meta; legal?: LegalNotice };

const base: Record<'en' | 'de', PagesMeta> = {
  en: { manual: { title: 'User Manual | StarkLLM' }, about: { title: 'About | StarkLLM' }, contact: { title: 'Contact & Support | StarkLLM', description: 'Contact and support for StarkLLM: email, GitHub and community.' } },
  de: { manual: { title: 'Handbuch | StarkLLM' }, about: { title: 'Über StarkLLM | StarkLLM' }, contact: { title: 'Kontakt und Support | StarkLLM', description: 'Kontakt und Support für StarkLLM: E-Mail, GitHub und Community.' } },
};
export const pageMeta = { ...base, ...byLang(import.meta.glob('./langs/*/pages.ts', { eager: true, import: 'default' }), { ...base.en, legal: { title: '', description: '', h1: '', lede: '', notice: '', privacyEn: '', privacyDe: '', imprintDe: '' } }, 'pages') } as Record<Lang, PagesMeta>;
