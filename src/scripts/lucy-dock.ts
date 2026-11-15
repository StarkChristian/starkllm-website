// Lucy's dock: she stands in the bottom-right corner of every page. Small and always loaded; the chat panel loads on first use.
// Home page: she starts in the hero (slot) and walks down to the corner while the visitor scrolls (linked to the scroll position).
// She keeps off the footer and moves aside when links, buttons or fields would be under her. No words here: see src/i18n/lucy.ts.
import { root, reduce, setHidden, readData } from './lucy-common';

const dock = document.querySelector<HTMLElement>('[data-lucy-dock]');
const btn = dock?.querySelector<HTMLButtonElement>('.lucy-dock-btn');
if (dock && btn) init(dock, btn);

function init(dock: HTMLElement, btn: HTMLButtonElement) {
  const svg = dock.querySelector('svg')!;
  const chip = document.querySelector<HTMLElement>('.lucy-chip');
  const slot = document.querySelector<HTMLElement>('[data-lucy-slot]');
  const hero = document.querySelector<HTMLElement>('.lucy-hero .lucy-bubble');
  const footer = document.querySelector('footer');
  const data = readData();
  const ASPECT = 1050 / 1080, M = 16;
  const BLOCK = 'a,button,input,select,textarea,summary,label,[role=button],[role=link]';
  let side = 1, lift = 0, state = '', raf = 0, idle = 0, p = 1;
  let chat: typeof import('./lucy-chat') | null = null, open = false;

  const size = () => (innerWidth < 600 ? 56 : 72);
  const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
  const setState = (s: string) => { if (s !== state) { state = s; svg.setAttribute('data-state', s); } };

  // where she stands when docked: corner, above the footer when it is on screen
  function docked(w: number, s = side, l = lift) {
    const h = w * ASPECT;
    let y = innerHeight - M - h - l;
    if (footer) { const f = footer.getBoundingClientRect().top; if (f < innerHeight) y = Math.min(y, f - 12 - h); }
    return { x: s > 0 ? innerWidth - M - w : M, y: Math.max(8, y), w };
  }

  function frame() {
    raf = 0;
    const w = size();
    let pos = docked(w);
    p = 1;
    const hero0 = !!slot && !reduce && innerWidth >= 1040 && !!slot.offsetParent;   // narrow screens: she is docked from the start
    if (hero0 && slot) {
      const D = Math.min(innerHeight * 0.55, 420);
      p = Math.min(1, Math.max(0, scrollY / D));
      if (p < 1) {
        const r = slot.getBoundingClientRect(), e = ease(p);
        pos = { x: r.left + (pos.x - r.left) * e, y: r.top + (pos.y - r.top) * e, w: r.width + (w - r.width) * e };
      }
    }
    dock.style.width = pos.w + 'px';
    dock.style.transform = `translate3d(${Math.round(pos.x)}px,${Math.round(pos.y)}px,0)`;
    setState(p >= 1 ? 'idle' : p > 0 ? 'walk' : 'wave');
    if (hero && hero0) { hero.style.opacity = String(Math.max(0, 1 - p * 2)); hero.style.pointerEvents = p > 0.3 ? 'none' : ''; }
    if (chip && footer) { const f = footer.getBoundingClientRect().top; chip.style.bottom = Math.max(M, innerHeight - f + 12) + 'px'; }
    if (open) chat?.place();
  }
  const schedule = () => { if (!raf) raf = requestAnimationFrame(frame); };

  // after scrolling stops: if links, buttons or fields are under her, stand somewhere free (right edge higher up, then left)
  function free(s: number, l: number) {
    const w = size(), h = w * ASPECT, d = docked(w, s, l);
    for (const fx of [0, 0.5, 1]) for (const fy of [0, 0.5, 1]) {
      const x = Math.min(innerWidth - 1, Math.max(0, d.x + fx * w)), y = Math.min(innerHeight - 1, Math.max(0, d.y + fy * h));
      for (const el of document.elementsFromPoint(x, y)) if (!el.closest('[data-lucy-dock],.lucy-panel,.lucy-chip,.lucy-host') && el.closest(BLOCK)) return false;
    }
    return true;
  }
  function settle() {
    if (open || p < 1 || document.hidden) return;
    const options: [number, number][] = [[1, 0], [1, 80], [1, 160], [-1, 0], [-1, 80]];
    const pick = options.find(([s, l]) => free(s, l)) || options[0];
    if (pick[0] === side && pick[1] === lift) return;
    side = pick[0]; lift = pick[1];
    if (!reduce) { dock.classList.add('lucy-shift'); setTimeout(() => dock.classList.remove('lucy-shift'), 450); }
    schedule();
  }
  const later = () => { clearTimeout(idle); idle = window.setTimeout(settle, 220); };

  addEventListener('scroll', () => { schedule(); later(); }, { passive: true });
  addEventListener('resize', () => { schedule(); later(); });
  root.classList.add('lucy-js');
  frame();
  setTimeout(settle, 500);

  // the chat panel (lazy)
  async function toggleChat() {
    chat = chat || (await import('./lucy-chat'));
    chat.toggle({
      data: data!, btn,
      onState(o: boolean) { open = o; btn.setAttribute('aria-expanded', String(o)); root.classList.toggle('lucy-chat-open', o); if (!o) later(); },
    });
  }
  btn.addEventListener('click', toggleChat);
  document.addEventListener('click', (e) => {
    const t = e.target as Element | null;
    if (t?.closest('[data-lucy-open]')) toggleChat();
    else if (t?.closest('[data-lucy-toggle]')) { chat?.close(); setHidden(root.getAttribute('data-lucy') !== 'off'); }
    else if (t?.closest('[data-lucy-tour]')) chat?.close();
  });
}
