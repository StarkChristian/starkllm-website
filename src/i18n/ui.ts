// Languages of the site and the strings shared by header and footer. Page bodies are translated in src/i18n/*.ts.
// To add a language see "Adding a language" in README.md: everything that differs per language is listed here or in the
// per-page files next to this one, and the routes, canonical URLs, hreflang tags and the language switcher follow from it.
export const SITE = 'https://www.starkllm.com';

/** `name` is written in the language itself (shown in the switcher), `locale` is for Open Graph, `dir: 'rtl'` marks right-to-left scripts,
 *  `tag` (if set) is the BCP 47 tag for <html lang> and hreflang when it differs from the URL code (Simplified Chinese: /zh/, zh-Hans). */
const allLanguages = {
  en: { name: 'English', locale: 'en_US' },
  de: { name: 'Deutsch', locale: 'de_DE' },
  es: { name: 'Español', locale: 'es_ES' },
  fr: { name: 'Français', locale: 'fr_FR' },
  it: { name: 'Italiano', locale: 'it_IT' },
  tr: { name: 'Türkçe', locale: 'tr_TR' },
  ar: { name: 'العربية', locale: 'ar_AR', dir: 'rtl' },
  fa: { name: 'فارسی', locale: 'fa_IR', dir: 'rtl' },
  zh: { name: '简体中文', locale: 'zh_CN', tag: 'zh-Hans' },
  ja: { name: '日本語', locale: 'ja_JP' },
} as const;
export type Lang = keyof typeof allLanguages;
/** SITE_LANGS=en,de,es builds only those languages (used while one language is being translated). Default: all. */
const wanted = (process.env.SITE_LANGS || Object.keys(allLanguages).join(',')).split(',').map((l) => l.trim());
export const languages = Object.fromEntries(Object.entries(allLanguages).filter(([l]) => wanted.includes(l))) as Record<Lang, (typeof allLanguages)[Lang]>;
/** Languages whose text was translated with AI assistance and still needs a native-speaker review (they show a notice). */
export const aiTranslated: Lang[] = ['es', 'fr', 'it', 'tr', 'ar', 'fa', 'zh', 'ja'];
/** The language tag of a site language for <html lang> and hreflang ("zh" -> "zh-Hans"). */
export const langTag = (l: Lang): string => (allLanguages[l] as { tag?: string }).tag ?? l;
/** Collects the per-language files src/i18n/langs/<lang>/<name>.ts (import.meta.glob result) into { <lang>: default export }.
 *  With `base` (the English object) it also checks that the translation has every key the English one has, with the same array lengths,
 *  and fails the build with the list of what is missing, so a half-translated language cannot go live unnoticed. */
export const byLang = (mods: Record<string, unknown>, base?: unknown, label = '') => {
  const out = Object.fromEntries(Object.entries(mods).map(([p, v]) => [p.split('/').slice(-2)[0], v])) as Record<string, unknown>;
  if (base !== undefined) {
    const problems: string[] = [];
    const walk = (b: unknown, o: unknown, path: string, l: string) => {
      if (Array.isArray(b)) {
        if (!Array.isArray(o)) { problems.push(`${l} ${label}: ${path} should be a list`); return; }
        if (o.length !== b.length) problems.push(`${l} ${label}: ${path} has ${o.length} items, English has ${b.length}`);
        b.forEach((x, i) => { if (o[i] !== undefined) walk(x, o[i], `${path}[${i}]`, l); });
      } else if (b && typeof b === 'object') {
        if (!o || typeof o !== 'object') { problems.push(`${l} ${label}: ${path} should be an object`); return; }
        for (const k of Object.keys(b)) {
          if (!(k in (o as object))) problems.push(`${l} ${label}: missing ${path}.${k}`);
          else walk((b as Record<string, unknown>)[k], (o as Record<string, unknown>)[k], `${path}.${k}`, l);
        }
      } else if (typeof b === 'string' && typeof o !== 'string') problems.push(`${l} ${label}: ${path} should be text`);
    };
    for (const [l, v] of Object.entries(out)) walk(base, v, '', l);
    if (problems.length) throw new Error(`[i18n] incomplete translation:\n${problems.slice(0, 60).join('\n')}${problems.length > 60 ? `\n... and ${problems.length - 60} more` : ''}`);
  }
  return out;
};
/** The default language lives at the site root (/product); every other language under its code (/de/product). */
export const defaultLang: Lang = 'en';
/** Writing direction of a language code (also of a page whose text is in another language, e.g. the German legal pages). */
export const dirOf = (lang: string): 'ltr' | 'rtl' => ((allLanguages as Record<string, { dir?: string }>)[lang]?.dir === 'rtl' ? 'rtl' : 'ltr');
export const langList = Object.keys(languages) as Lang[];
export const otherLangs = langList.filter((l) => l !== defaultLang);

const uiBase = {
  en: {
    nav: { home: 'Home', product: 'Product', manual: 'Manual', download: 'Download', about: 'About', contact: 'Contact', github: 'GitHub' },
    menu: 'Menu',
    skip: 'Skip to content',
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
    skip: 'Zum Inhalt springen',
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
const uiMore = byLang(import.meta.glob('./langs/*/ui.ts', { eager: true, import: 'default' }), { ...uiBase.en, skip: '', footer: { ...uiBase.en.footer, legalPage: '', aiNote: { text: '', issues: '', contact: '' } } }, 'ui');
export const ui = { ...uiBase, ...uiMore } as unknown as Record<Lang, typeof uiBase.en & { skip: string; footer: { legalPage?: string; aiNote?: { text: string; issues: string; contact: string } } }>;

// Pages that are translated (the same page file renders every language, see src/pages/[...page].astro). The imprint, the privacy
// policy and its English translation exist once, and links from other languages go to that single page.
const translated = ['/', '/features', '/phone', '/privacy', '/changelog', '/download', '/help', '/manual', '/about', '/contact',
  '/tech-rag', '/tech-hybrid-search', '/tech-semantic-chunking', '/tech-knowledge-base', '/tech-workspaces', '/tech-multimodal',
  '/tech-local-models', '/tech-privacy', '/tech-local-tools', '/tech-voice', '/tech-themes'];
/** Pages that exist in each language. A new language may start with fewer pages: missing ones fall back to the default language. */
// The legal texts are not translated into the new languages: they get a short notice page (/legal) that links to the English courtesy translation and the German originals.
export const localizedPaths: Record<Lang, string[]> = { en: translated, de: translated, es: [...translated, '/legal'], fr: [...translated, '/legal'], it: [...translated, '/legal'], tr: [...translated, '/legal'], ar: [...translated, '/legal'], fa: [...translated, '/legal'], zh: [...translated, '/legal'], ja: [...translated, '/legal'] };

/** Pages that exist once, in one language (German legal texts, the English manual). They get no hreflang tags and no language switcher. */
export const singlePages = ['/impressum', '/datenschutz', '/privacy-policy', '/code-signing'];

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
  return [...langs.map((l) => ({ hreflang: langTag(l), href: absoluteUrl(l, path) })), { hreflang: 'x-default', href: absoluteUrl(langs.includes(defaultLang) ? defaultLang : langs[0], path) }];
}
