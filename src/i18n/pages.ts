// The pages that exist in more than one language, and what renders each of them.
// A path listed here AND in `localizedPaths` (ui.ts) for a language is built for that language by
// src/pages/[...page].astro (default language) and src/pages/[lang]/[...page].astro (all others).
import { techOrder, type TechSlug } from './tech';

export type PageKind = 'home' | 'product' | 'download' | 'help' | 'tech' | 'manual' | 'about' | 'contact' | 'legal' | 'android' | 'tour';
export type PageDef = { kind: PageKind; slug?: TechSlug };

export const pages: Record<string, PageDef> = {
  '/': { kind: 'home' },
  '/product': { kind: 'product' },
  '/download': { kind: 'download' },
  '/help': { kind: 'help' },
  '/manual': { kind: 'manual' },
  '/about': { kind: 'about' },
  '/contact': { kind: 'contact' },
  '/android': { kind: 'android' },
  '/tour': { kind: 'tour' },
  '/legal': { kind: 'legal' },
  ...Object.fromEntries(techOrder.map((slug) => [`/${slug}`, { kind: 'tech' as const, slug }])),
};

/** Route parameter for a path: '' is the home page, otherwise the path without its leading slash. */
export const paramOf = (path: string) => (path === '/' ? undefined : path.slice(1));
export const pathOfParam = (param?: string) => (param ? `/${param}` : '/');
