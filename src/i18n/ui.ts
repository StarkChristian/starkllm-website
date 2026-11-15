// Languages of the site and the strings shared by header and footer. Page bodies are translated in src/i18n/*.ts.
// To add a language see "Adding a language" in README.md: everything that differs per language is listed here or in the
// per-page files next to this one, and the routes, canonical URLs, hreflang tags and the language switcher follow from it.
export const SITE = 'https://www.starkllm.com';

/** `name` is written in the language itself (shown in the switcher), `locale` is for Open Graph. */
export const languages = {
  en: { name: 'English', locale: 'en_US' },
  de: { name: 'Deutsch', locale: 'de_DE' },
} as const;
export type Lang = keyof typeof languages;
/** The default language lives at the site root (/product); every other language under its code (/de/product). */
export const defaultLang: Lang = 'en';
export const langList = Object.keys(languages) as Lang[];
export const otherLangs = langList.filter((l) => l !== defaultLang);

export const ui = {
  en: {
    nav: { home: 'Home', product: 'Product', manual: 'Manual', download: 'Download', about: 'About', contact: 'Contact', github: 'GitHub' },
    menu: 'Menu',
    footer: {
      tagline1: 'A free, open-source project.',
      tagline2: 'Windows Research Beta',
      disclaimer: [
        'Provided "as-is" without warranties of any kind.',
        'No liability for damages, data loss, or outcomes.',
        'Dependent on user hardware, setup, and chosen local models.',
        'Not a substitute for professional judgment.',
      ],
      help: 'Help & Troubleshooting',
      related: 'Related Projects',
      repo: 'GitHub Repository',
      legal: 'Legal',
      impressum: 'Legal notice (Impressum, in German)',
      privacy: 'Privacy policy (Datenschutz, in German)',
      contact: 'Contact',
      bottom: '© 2026 Christian Stark. Provided "as is" with no warranty or liability.',
    },
  },
  de: {
    nav: { home: 'Start', product: 'Produkt', manual: 'Handbuch', download: 'Download', about: 'Über StarkLLM', contact: 'Kontakt', github: 'GitHub' },
    menu: 'Menü',
    footer: {
      tagline1: 'Ein kostenloses Open-Source-Projekt.',
      tagline2: 'Windows Research Beta',
      disclaimer: [
        'Bereitgestellt „wie besehen“ ohne jegliche Gewährleistung.',
        'Keine Haftung für Schäden, Datenverlust oder Ergebnisse.',
        'Abhängig von Hardware, Einrichtung und gewählten lokalen Modellen.',
        'Kein Ersatz für professionelles Urteilsvermögen.',
      ],
      help: 'Hilfe & Problemlösung',
      related: 'Verwandte Projekte',
      repo: 'GitHub-Repository',
      legal: 'Rechtliches',
      impressum: 'Impressum',
      privacy: 'Datenschutz',
      contact: 'Kontakt',
      bottom: '© 2026 Christian Stark. Bereitgestellt „wie besehen“ ohne Gewährleistung oder Haftung.',
    },
  },
} as const;

// Pages that are translated (the same page file renders every language, see src/pages/[...page].astro). Everything else
// (manual, about, contact, impressum, datenschutz) exists once, and links from other languages go to that single page.
const translated = ['/', '/product', '/download', '/help',
  '/tech-rag', '/tech-hybrid-search', '/tech-semantic-chunking', '/tech-knowledge-base', '/tech-workspaces', '/tech-multimodal',
  '/tech-local-models', '/tech-privacy', '/tech-local-tools', '/tech-voice', '/tech-themes'];
/** Pages that exist in each language. A new language may start with fewer pages: missing ones fall back to the default language. */
export const localizedPaths: Record<Lang, string[]> = { en: translated, de: translated };

/** Pages that exist once, in one language (German legal texts, the English manual). They get no hreflang tags and no language switcher. */
export const singlePages = ['/manual', '/about', '/contact', '/impressum', '/datenschutz'];

const key = (path: string) => (path.replace(/\.html$/, '').replace(/\/$/, '') || '/');
export const prefix = (lang: Lang) => (lang === defaultLang ? '' : `/${lang}`);

/** The languages a page exists in. */
export function langsFor(path: string): Lang[] {
  return langList.filter((l) => localizedPaths[l].includes(key(path)));
}

/** Link to `path` in `lang`; falls back to the default-language page when it is not translated. */
export function localePath(lang: Lang, path: string): string {
  const k = key(path);
  if (!localizedPaths[lang].includes(k)) return path;
  if (lang === defaultLang) return path;
  return `${prefix(lang)}${k === '/' ? '/' : k}`;
}

export const absoluteUrl = (lang: Lang, path: string) => SITE + localePath(lang, path);

/** hreflang alternates of a page: every language it exists in, plus x-default (the default language). Empty for single-language pages. */
export function alternatesFor(path: string): { hreflang: string; href: string }[] {
  const langs = langsFor(path);
  if (langs.length < 2) return [];
  return [...langs.map((l) => ({ hreflang: l, href: absoluteUrl(l, path) })), { hreflang: 'x-default', href: absoluteUrl(defaultLang, path) }];
}
