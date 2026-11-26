// The pages that exist in more than one language, and what renders each of them.
// A path listed here AND in `localizedPaths` (ui.ts) for a language is built for that language by
// src/pages/[...page].astro (default language) and src/pages/[lang]/[...page].astro (all others).
import { techOrder, type TechSlug } from './tech';

export type PageKind = 'home' | 'features' | 'phone' | 'privacy' | 'changelog' | 'download' | 'help' | 'tech' | 'manual' | 'about' | 'contact' | 'legal';
export type PageDef = { kind: PageKind; slug?: TechSlug };

export const pages: Record<string, PageDef> = {
  '/': { kind: 'home' },
  '/features': { kind: 'features' },
  '/phone': { kind: 'phone' },
  '/privacy': { kind: 'privacy' },
  '/changelog': { kind: 'changelog' },
  '/download': { kind: 'download' },
  '/help': { kind: 'help' },
  '/manual': { kind: 'manual' },
  '/about': { kind: 'about' },
  '/contact': { kind: 'contact' },
  '/legal': { kind: 'legal' },
  ...Object.fromEntries(techOrder.map((slug) => [`/${slug}`, { kind: 'tech' as const, slug }])),
};

/** Old addresses that keep working: a small page that sends the visitor on (meta refresh, canonical to the target, noindex,
 *  not in the sitemap). `/product` became `/features` in the 2026 site (in every language); `/android` is the address the
 *  release notes of 2.4.0 give for the phone app (default language only). */
export const redirects: Record<string, { to: string; everyLang: boolean }> = {
  '/product': { to: '/features', everyLang: true },
  '/android': { to: '/phone', everyLang: false },
};

/** Route parameter for a path: '' is the home page, otherwise the path without its leading slash. */
export const paramOf = (path: string) => (path === '/' ? undefined : path.slice(1));
export const pathOfParam = (param?: string) => (param ? `/${param}` : '/');
