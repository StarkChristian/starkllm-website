// Texts of the 2026 pages, one file per language and page: src/i18n/langs/<lang>/<page>.ts (default export).
// English is the reference: byLang() fails the build when a language misses a key or has lists of another length.
import { byLang, type Lang } from './ui';
import enCommon from './langs/en/common';
import enMedia from './langs/en/media';
import enStart from './langs/en/start';
import enFeatures from './langs/en/features';
import enPhone from './langs/en/phone';
import enPrivacy from './langs/en/privacy';
import enAbout from './langs/en/about';
import enChangelog from './langs/en/changelog';

// Built on first use, not while the modules load: the release data loads with a top-level await.
const lazy = <T extends object>(make: () => T): T => { let v: T | undefined; return new Proxy({} as T, { get: (_, k) => (v ??= make())[k as keyof T], has: (_, k) => k in (v ??= make()), ownKeys: () => Reflect.ownKeys((v ??= make())), getOwnPropertyDescriptor: (_, k) => Reflect.getOwnPropertyDescriptor((v ??= make()), k) }); };
export const common = lazy(() => byLang(import.meta.glob('./langs/*/common.ts', { eager: true, import: 'default' }), enCommon, 'common')) as Record<Lang, typeof enCommon>;
export const media = lazy(() => byLang(import.meta.glob('./langs/*/media.ts', { eager: true, import: 'default' }), enMedia, 'media')) as Record<Lang, typeof enMedia>;
export const start = lazy(() => byLang(import.meta.glob('./langs/*/start.ts', { eager: true, import: 'default' }), enStart, 'start')) as Record<Lang, typeof enStart>;
export const features = lazy(() => byLang(import.meta.glob('./langs/*/features.ts', { eager: true, import: 'default' }), enFeatures, 'features')) as Record<Lang, typeof enFeatures>;
export const phone = lazy(() => byLang(import.meta.glob('./langs/*/phone.ts', { eager: true, import: 'default' }), enPhone, 'phone')) as Record<Lang, typeof enPhone>;
export const privacy = lazy(() => byLang(import.meta.glob('./langs/*/privacy.ts', { eager: true, import: 'default' }), enPrivacy, 'privacy')) as Record<Lang, typeof enPrivacy>;
export const about = lazy(() => byLang(import.meta.glob('./langs/*/about.ts', { eager: true, import: 'default' }), enAbout, 'about')) as Record<Lang, typeof enAbout>;
export const changelog = lazy(() => byLang(import.meta.glob('./langs/*/changelog.ts', { eager: true, import: 'default' }), enChangelog, 'changelog')) as Record<Lang, typeof enChangelog>;

export type FeatureSection = (typeof enFeatures.sections)[number] & { shot?: string; video?: string; limits?: string };

/** Replaces {name} placeholders: fill('Version {v}', { v: '2.6.0' }). */
export const fill = (s: string, vars: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
