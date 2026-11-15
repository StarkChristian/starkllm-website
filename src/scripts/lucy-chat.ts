// Lucy's chat panel. Loaded the first time someone asks for it. The answers come from the site's own pages (search index
// built at build time) and are found in the browser: no server, no cloud, nothing is sent anywhere.
import { createEngine } from './lucy-engine.js';
import { setHidden, type Data } from './lucy-common';

type Ctx = { data: Data; btn: HTMLButtonElement; onState: (open: boolean) => void };
type Rec = { r: 'u' | 'l'; t?: string; k?: string; text?: string; url?: string; title?: string; heading?: string; more?: { url: string; title: string; heading: string }[]; page?: string };

const SKEY = 'lucy-chat';
let panel: HTMLElement | null = null, sugg!: HTMLElement, log!: HTMLElement, input!: HTMLInputElement, ctx!: Ctx;
let engine: ReturnType<typeof createEngine> | null = null, loading: Promise<void> | null = null, failed = false;
let msgs: Rec[] = [];

const el = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', text = '') => { const e = document.createElement(tag); if (cls) e.className = cls; if (text) e.textContent = text; return e; };
const link = (href: string, text: string) => { const a = el('a', '', text); a.href = href; return a; };
const normPath = () => location.pathname.replace(/\.html$/, '').replace(/(.)\/$/, '$1') || '/';

function save() {
  try { sessionStorage.setItem(SKEY, JSON.stringify({ lang: ctx.data.lang, msgs: msgs.slice(-30) })); } catch { /* storage blocked: the conversation lasts for this page only */ }
}
function restore() {
  try {
    const s = JSON.parse(sessionStorage.getItem(SKEY) || 'null');
    if (s && s.lang === ctx.data.lang && Array.isArray(s.msgs)) { msgs = s.msgs; for (const m of msgs) draw(m); }
  } catch { /* ignore */ }
}

function draw(m: Rec) {
  const C = ctx.data.chat;
  const box = el('div', 'lucy-msg lucy-msg-' + m.r);
  box.appendChild(el('span', 'lucy-sr', (m.r === 'u' ? C.you : C.lucy) + ': '));
  if (m.r === 'u') box.appendChild(el('p', '', m.t));
  else {
    const links = (keys: string[]) => { const ul = el('ul', 'lucy-links'); for (const k of keys) { const li = el('li'); li.appendChild(link(C.hrefs[k], C.links[k])); ul.appendChild(li); } return ul; };
    if (m.k === 'faq' || m.k === 'passage') {
      box.appendChild(el('p', '', m.text));
      const src = el('p', 'lucy-src', C.source + ': ');
      src.appendChild(link(m.url!, m.heading && m.heading !== m.title ? `${m.title} › ${m.heading}` : m.title!));
      box.appendChild(src);
      for (const x of m.more || []) { const p = el('p', 'lucy-src', C.also + ': '); p.appendChild(link(x.url, x.heading && x.heading !== x.title ? `${x.title} › ${x.heading}` : x.title)); box.appendChild(p); }
    } else if (m.k === 'advice') {
      box.appendChild(el('p', '', C.advice)); box.appendChild(links(['privacy', 'imprint', 'contact']));
    } else if (m.k === 'scoped') {
      box.appendChild(el('p', '', C.scoped));
      const ul = el('ul', 'lucy-links'); const li = el('li'); li.appendChild(link(location.pathname, document.title.replace(/\s*\|\s*StarkLLM$/, ''))); ul.appendChild(li); box.appendChild(ul);
      box.appendChild(links(['contact']));
    } else if (m.k === 'error') {
      box.appendChild(el('p', '', C.loadError)); box.appendChild(links(['help', 'manual', 'issues', 'contact']));
    } else {
      box.appendChild(el('p', '', C.none)); box.appendChild(el('p', '', C.noneLinks)); box.appendChild(links(['help', 'manual', 'issues', 'contact']));
    }
  }
  log.appendChild(box);
  log.scrollTop = log.scrollHeight;
}
const add = (m: Rec) => { msgs.push(m); draw(m); save(); sugg.hidden = true; };

function load(): Promise<void> {
  if (!loading) loading = fetch(ctx.data.idx).then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json(); }).then((d) => { engine = createEngine(d); }).catch(() => { failed = true; });
  return loading;
}

async function ask(q: string) {
  q = q.trim().slice(0, 200);
  if (!q) return;
  add({ r: 'u', t: q });
  input.value = '';
  const wait = engine || failed ? null : el('p', 'lucy-wait', ctx.data.chat.loading);
  if (wait) log.appendChild(wait);
  await load();
  wait?.remove();
  if (!engine) { add({ r: 'l', k: 'error' }); return; }
  const a = engine.answer(q, { page: normPath() });
  if (a.kind === 'faq' || a.kind === 'passage') add({ r: 'l', k: a.kind, text: a.text, url: a.url, title: a.title, heading: a.heading, more: a.more });
  else if (a.kind === 'advice') add({ r: 'l', k: 'advice' });
  else add({ r: 'l', k: a.scoped ? 'scoped' : 'none' });
}

function build() {
  const C = ctx.data.chat;
  const p = el('div', 'lucy-panel');
  p.id = 'lucy-panel'; p.setAttribute('role', 'dialog'); p.setAttribute('aria-modal', 'false'); p.setAttribute('aria-labelledby', 'lucy-panel-t'); p.hidden = true;
  const head = el('div', 'lucy-panel-head');
  const title = el('span', '', C.title); title.id = 'lucy-panel-t';
  const x = el('button', 'lucy-panel-x', '×'); x.type = 'button'; x.setAttribute('aria-label', C.close); x.title = C.close;
  x.addEventListener('click', () => close(true));
  head.append(title, x);
  const note = el('p', 'lucy-panel-note', C.note);
  log = el('div', 'lucy-log'); log.setAttribute('role', 'log'); log.setAttribute('aria-live', 'polite'); log.setAttribute('aria-relevant', 'additions'); log.tabIndex = 0;
  const sg = sugg = el('div', 'lucy-sugg'); sg.appendChild(el('span', '', C.suggestionsLabel + ':'));
  for (const s of C.suggestions) { const b = el('button', 'lucy-chipbtn', s); b.type = 'button'; b.addEventListener('click', () => ask(s)); sg.appendChild(b); }
  const form = el('form', 'lucy-form');
  const lab = el('label', 'lucy-sr', C.label); lab.htmlFor = 'lucy-q';
  input = el('input'); input.id = 'lucy-q'; input.type = 'text'; input.autocomplete = 'off'; input.maxLength = 200; input.placeholder = C.placeholder;
  const send = el('button', 'lucy-btn primary', C.send); send.type = 'submit';
  form.append(lab, input, send);
  form.addEventListener('submit', (e) => { e.preventDefault(); ask(input.value); });
  const foot = el('div', 'lucy-panel-foot');
  if (ctx.data.steps.length) { const t = el('button', 'lucy-btn', ctx.data.tour); t.type = 'button'; t.setAttribute('data-lucy-tour', ''); foot.appendChild(t); }
  const clr = el('button', 'lucy-btn', C.clear); clr.type = 'button';
  clr.addEventListener('click', () => { msgs = []; log.textContent = ''; save(); sugg.hidden = false; input.focus(); });
  const hide = el('button', 'lucy-btn', ctx.data.hide); hide.type = 'button'; hide.setAttribute('data-lucy-toggle', '');
  foot.append(clr, hide);
  p.append(head, note, log, sg, form, foot);
  p.addEventListener('keydown', (e) => { if (e.key === 'Escape') { e.stopPropagation(); close(true); } });
  document.body.appendChild(p);
  panel = p;
  restore();
  sugg.hidden = msgs.length > 0;
}

/** position above the docked Lucy (a bottom sheet on phones: CSS) */
export function place() {
  if (!panel || panel.hidden) return;
  const r = ctx.btn.getBoundingClientRect();
  const left = r.left + r.width / 2 < innerWidth / 2;
  // above Lucy; if she is still up in the hero, above the corner where she will dock. Never taller than the window.
  let bottom = r.top < innerHeight * 0.45 ? 100 : Math.max(8, innerHeight - r.top + 10);
  panel.style.bottom = bottom + 'px';
  bottom = Math.min(bottom, innerHeight - panel.offsetHeight - 8);
  panel.style.bottom = Math.max(8, bottom) + 'px';
  panel.style.left = left ? '16px' : 'auto';
  panel.style.right = left ? 'auto' : '16px';
}

export function close(focus = false) {
  if (!panel || panel.hidden) return;
  panel.hidden = true;
  ctx.onState(false);
  if (focus) ctx.btn.focus();
}

export function toggle(c: Ctx) {
  ctx = c;
  if (!panel) build();
  if (!panel!.hidden) { close(true); return; }
  panel!.hidden = false;
  ctx.onState(true);
  place();
  input.focus({ preventScroll: true });
  load();   // fetch the index now, while the visitor types
}

export { setHidden };
