// UI strings shared by header/footer. Page bodies are translated per page (see src/pages/de/).
export const languages = { en: 'English', de: 'Deutsch' } as const;
export type Lang = keyof typeof languages;

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
      related: 'Related Projects',
      repo: 'GitHub Repository',
      legal: 'Legal',
      contact: 'Contact',
      bottom: '© 2026 Christian Stark. Provided "as is" with no warranty or liability.',
    },
  },
  de: {
    nav: { home: 'Start', product: 'Produkt', manual: 'Handbuch', download: 'Download', about: 'Über uns', contact: 'Kontakt', github: 'GitHub' },
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
      related: 'Verwandte Projekte',
      repo: 'GitHub-Repository',
      legal: 'Rechtliches',
      contact: 'Kontakt',
      bottom: '© 2026 Christian Stark. Bereitgestellt „wie besehen“ ohne Gewährleistung oder Haftung.',
    },
  },
} as const;

// Pages that already have a German version; everything else links to the English page.
export const translatedPaths: string[] = ['/', '/product', '/download'];

export function localePath(lang: Lang, path: string): string {
  if (lang === 'en') return path;
  const key = path.replace(/\.html$/, '');
  return translatedPaths.includes(key) ? `/de${key === '/' ? '/' : key}` : path;
}
