// Screenshots of the app (demo data only: invented senders, people and numbers), one set per UI language.
// Add a language: take the same shots with the app set to that language, save them as src/assets/shots/<lang>-<name>.webp
// and add the language to `shots` and `alt` below (see "Adding a language" in README.md).
import type { ImageMetadata } from 'astro';
import enDashboard from '../assets/shots/en-dashboard.webp';
import enInbox from '../assets/shots/en-inbox.webp';
import enChat from '../assets/shots/en-chat.webp';
import enSources from '../assets/shots/en-sources.webp';
import enWarning from '../assets/shots/en-warning.webp';
import enKb from '../assets/shots/en-kb.webp';
import enSettings from '../assets/shots/en-settings.webp';
import enAppearance from '../assets/shots/en-appearance.webp';
import enOtherApps from '../assets/shots/en-otherapps.webp';
import deDashboard from '../assets/shots/de-dashboard.webp';
import deInbox from '../assets/shots/de-inbox.webp';
import deChat from '../assets/shots/de-chat.webp';
import deSources from '../assets/shots/de-sources.webp';
import deWarning from '../assets/shots/de-warning.webp';
import deKb from '../assets/shots/de-kb.webp';
import deSettings from '../assets/shots/de-settings.webp';
import deAppearance from '../assets/shots/de-appearance.webp';
import deOtherApps from '../assets/shots/de-otherapps.webp';
import { aiTranslated, byLang, type Lang } from './ui';

export type ShotKey = 'dashboard' | 'inbox' | 'chat' | 'sources' | 'warning' | 'kb' | 'settings' | 'appearance' | 'otherapps';

const shotsBase: Record<'en' | 'de', Record<ShotKey, ImageMetadata>> = {
  en: { dashboard: enDashboard, inbox: enInbox, chat: enChat, sources: enSources, warning: enWarning, kb: enKb, settings: enSettings, appearance: enAppearance, otherapps: enOtherApps },
  de: { dashboard: deDashboard, inbox: deInbox, chat: deChat, sources: deSources, warning: deWarning, kb: deKb, settings: deSettings, appearance: deAppearance, otherapps: deOtherApps },
};

const altBase: Record<'en' | 'de', Record<ShotKey, string>> = {
  en: {
    dashboard: 'StarkLLM start page with upcoming deadlines and payment dates found in letters, and the newest documents',
    inbox: 'StarkLLM inbox grouping letters into cases by sender, with the next deadline and a "suspicious" mark on one letter',
    chat: 'StarkLLM chat: the question about a tax letter is answered with the amount, the date and the source document and page',
    sources: 'The passages an answer was based on, shown word for word with a link that opens the document at that page',
    warning: 'A red warning above the answer: the letter asks for payment with gift cards and a link, typical signs of a scam',
    kb: 'StarkLLM Knowledge Base: folders on this PC that are read and kept searchable, with indexed files',
    settings: 'StarkLLM settings: model, context window and generation options',
    appearance: 'StarkLLM settings, Appearance: the theme gallery with colour swatches and the interface size',
    otherapps: 'StarkLLM settings, Other apps: off by default, keys, MCP server and OpenAI-compatible API addresses',
  },
  de: {
    dashboard: 'StarkLLM-Startseite mit anstehenden Fristen und Zahlungsterminen aus Briefen und den neuesten Dokumenten',
    inbox: 'StarkLLM-Posteingang: Briefe nach Absender zu Vorgängen gruppiert, mit nächster Frist und einem Verdachtshinweis bei einem Brief',
    chat: 'StarkLLM-Chat: Die Frage zu einem Steuerbescheid wird mit Betrag, Datum sowie Quelldokument und Seite beantwortet',
    sources: 'Die Textstellen, auf denen eine Antwort beruht, wörtlich angezeigt, mit Link zur Seite im Dokument',
    warning: 'Eine rote Warnung über der Antwort: Der Brief verlangt Zahlung per Geschenkkarte und Link, typische Merkmale von Betrug',
    kb: 'StarkLLM-Wissensdatenbank: Ordner auf diesem PC, die gelesen und durchsuchbar gehalten werden, mit indizierten Dateien',
    settings: 'StarkLLM-Einstellungen: Modell, Kontextfenster und Erzeugungsoptionen',
    appearance: 'StarkLLM-Einstellungen, Darstellung: die Theme-Galerie mit Farbmustern und der Schriftgröße',
    otherapps: 'StarkLLM-Einstellungen, Andere Programme: standardmäßig aus, Schlüssel, MCP-Server und Adresse der OpenAI-kompatiblen API',
  },
};

// The app has no interface in the other languages yet: they show the English screenshots with their own alt texts
// (src/i18n/langs/<lang>/shots.ts, default export: the alt texts, same keys as altBase.en).
export const shots = { ...shotsBase, ...Object.fromEntries(aiTranslated.map((l) => [l, shotsBase.en])) } as Record<Lang, Record<ShotKey, ImageMetadata>>;
export const alt = { ...altBase, ...byLang(import.meta.glob('./langs/*/shots.ts', { eager: true, import: 'default' }), altBase.en, 'shots') } as Record<Lang, Record<ShotKey, string>>;
