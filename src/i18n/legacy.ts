// Phase 1 of the 2026 site: es, fr, it and tr are not translated yet. Their files in src/i18n/langs/<lang>/ call the
// functions below, which build the 2026 text objects from the texts these languages already have (home.ts, product.ts,
// release250.ts, release260.ts, download.ts, ui.ts, shots.ts) and use English where nothing older exists.
// Every English fallback is marked `// TODO translate`. Phase 2 replaces each langs/<lang>/<page>.ts by a real
// translation shaped like langs/en/<page>.ts; see docs/translating-2026.md. Nothing here is used for en or de.
import { ui, type Lang } from './ui';
import { home } from './home';
import { product } from './product';
import { download } from './download';
import { tech } from './tech';
import { alt } from './shots';
import { rel250 } from './release250';
import { rel260 } from './release260';
import enCommon from './langs/en/common';
import enMedia from './langs/en/media';
import enStart from './langs/en/start';
import enFeatures from './langs/en/features';
import enPhone from './langs/en/phone';
import enPrivacy from './langs/en/privacy';
import enChangelog from './langs/en/changelog';

type KV = { k: string; v: string };
const kv = (it: { title: string; text: string }): KV => ({ k: it.title, v: it.text });
const clone = <T>(x: T): T => JSON.parse(JSON.stringify(x));

export function legacyCommon(lang: Lang) {
  const u = ui[lang];
  const c = clone(enCommon); // TODO translate: trust bar, media labels, footer headings, call to action
  c.nav.features = u.nav.product;
  c.nav.manual = u.nav.manual;
  c.nav.download = u.nav.download;
  c.nav.about = u.nav.about;
  c.nav.menu = u.menu;
  c.footer.contact = u.footer.contact;
  c.footer.github = u.footer.repo;
  c.footer.tagline = u.footer.tagline1;
  c.footer.disclaimer = u.footer.disclaimer.join(' ');
  c.footer.bottom = u.footer.bottom;
  c.cta.btn = home[lang].hero.cta1;
  return c;
}

export function legacyMedia(lang: Lang) {
  const a = alt[lang];
  const m = clone(enMedia); // TODO translate: the alt texts of new screenshots and every video title and caption
  Object.assign(m.shots, { '01-home': a.dashboard, '02-inbox': a.inbox, '03-chat-sources': a.chat, '04-source-page': a.sources, '05-scam-warning': a.warning, '14-themes': a.appearance, '15-settings-models': a.settings });
  return m;
}

export function legacyStart(lang: Lang) {
  const h = home[lang], r = rel250[lang]!, n = rel260[lang]!, d = download[lang];
  const s = clone(enStart); // TODO translate: promises, tour, privacy diagram labels, audience, download labels
  const hero = r.heroText ?? h.hero;
  s.meta = { title: h.meta.title, description: h.meta.description };
  Object.assign(s.hero, { news: n.tag, newsText: n.pill, h1: [`${hero.h1[0]} ${hero.h1[1]}`, hero.h1[2]], lede: hero.lede, cta1: h.hero.cta1, cta2: h.hero.cta2, meta: h.hero.meta });
  const f = h.features.items, ni = r.news.items, verify = product[lang].verify;
  const old = [
    { tag: f[0].tag, title: f[0].title, text: f[0].text },
    { tag: verify.tag, title: verify.items[1].k, text: verify.items[1].v },
    { tag: f[3].tag, title: f[3].title, text: f[3].text },
    null, // TODO translate: whole books
    { tag: s.bento.items[4].tag, title: ni[2].title, text: ni[2].text },
    { tag: s.bento.items[5].tag, title: ni[3].title, text: ni[3].text },
    { tag: r.product.tasks.web.h3, title: ni[0].title, text: ni[0].text },
    { tag: 'Terminal', title: ni[1].title, text: ni[1].text },
    { tag: s.bento.items[8].tag, title: ni[4].title, text: ni[4].text },
  ];
  s.bento.h2 = h.features.h2;
  s.bento.items = s.bento.items.map((it, i) => (old[i] ? { ...it, ...old[i] } : it));
  const priv = r.privacy ?? h.privacy;
  s.privacy.h2 = priv.h2;
  s.privacy.lede = priv.lede;
  const ph = r.product.phone;
  s.phone = { ...s.phone, h2: ph.h2, lede: ph.lede, home: { title: ph.items[1].k, text: ph.items[1].v }, away: { title: ph.items[2].k, text: ph.items[2].v }, badge: ph.tag, more: n.more };
  s.download.h2 = h.download.h2;
  s.download.lede = h.download.lede;
  s.faq.h2 = d.faq.h2;
  s.faq.items = [1, 0, 4, 3, 2, 9].map((i) => [d.faq.items[i][0], d.faq.items[i][1]]);
  return s;
}

export function legacyFeatures(lang: Lang) {
  const p = product[lang], r = rel250[lang]!, n = rel260[lang]!, h = home[lang], d = download[lang], t = tech[lang];
  const F = clone(enFeatures); // TODO translate: every section without an older text (books, scans points, limits, ...)
  const ni = r.news.items, tasks = r.product.tasks, f = h.features.items;
  const formats = d.prereq.items[4];
  const set = (id: string, patch: Record<string, unknown>) => { const sec = F.sections.find((x) => x.id === id)!; Object.assign(sec, patch); };
  F.meta.title = p.meta.title;
  set('documents', { tag: p.verify.tag, h2: p.verify.h2, lede: p.verify.lede, points: [p.verify.items[0], p.verify.items[1], { k: formats[0], v: formats[1] }] });
  set('inbox', { tag: p.letters.tag, h2: p.letters.h2, lede: p.letters.lede, points: [p.letters.items[0], p.letters.items[1], p.letters.items[2], p.deadlines.items[1]], limits: p.deadlines.items[3].v });
  set('safety', { tag: f[3].tag, h2: f[3].title, lede: f[3].text, points: [p.verify.items[2], kv(n.items[2]), p.tools.items[2]] });
  set('scans', { tag: f[2].tag, h2: f[2].title, lede: f[2].text });
  set('images', { h2: ni[2].title, lede: ni[2].text });
  set('recordings', { h2: ni[3].title, lede: ni[3].text });
  set('web-search', { h2: n.items[3].title, lede: n.items[3].text });
  set('web-tasks', { tag: tasks.web.h3, h2: ni[0].title, lede: ni[0].text, points: tasks.web.items, limits: tasks.note });
  set('terminal', { h2: tasks.terminal.h3, lede: ni[1].text, points: tasks.terminal.items, limits: tasks.note });
  set('compare', { h2: ni[4].title, lede: ni[4].text });
  set('export', { h2: ni[5].title, lede: ni[5].text });
  set('tools', { tag: p.tools.tag, h2: p.tools.h2, lede: p.tools.lede, points: [p.tools.items[1], kv(ni[6]), { k: f[9].title, v: f[9].text }] });
  set('voice', { h2: t['tech-voice'].h1, lede: t['tech-voice'].lede });
  set('workspaces', { tag: p.library.tag, h2: p.library.h2, lede: p.library.lede, points: [p.library.items[1], p.library.items[0]] });
  set('themes', { tag: p.themes.tag, h2: p.themes.h2, lede: p.themes.lede, points: [p.themes.items[0], p.themes.items[1]] });
  F.phone = { ...F.phone, h2: r.product.phone.h2, text: r.product.phone.lede, link: n.more };
  return F;
}

export function legacyPhone(lang: Lang) {
  const ph = rel250[lang]!.product.phone;
  const P = clone(enPhone); // TODO translate: what the phone does, pairing steps, the relay table, limits, Google Play test
  P.hero = { eyebrow: ph.tag, h1: ph.h2, lede: ph.lede };
  P.connects.levelsH = ph.levelsH;
  return P;
}

export function legacyPrivacy(lang: Lang) {
  const priv = rel250[lang]?.privacy ?? home[lang].privacy;
  const P = clone(enPrivacy); // TODO translate: everything except the headline and the lede
  P.hero.h1 = priv.h2;
  P.hero.lede = priv.lede;
  return P;
}

export function legacyChangelog(_lang: Lang) {
  return clone(enChangelog); // TODO translate: the words around the (English) release notes
}
