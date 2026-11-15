// Lucy's tour: she walks along the bottom edge, stops under the part of the page she explains and says one sentence.
// No dependencies, no words: texts come from #lucy-data (built from src/i18n/lucy.ts).
// Not started by the page, only by a click on [data-lucy-tour]. Reduced motion: she does not walk, she just appears.
import { root, reduce, setHidden, readData } from './lucy-common';
type Step = { sel: string; text: string };

const SIZE = 96;
const data = readData();
const tpl = document.getElementById('lucy-tpl') as HTMLTemplateElement | null;

// Nothing animates while the tab is hidden
document.addEventListener('visibilitychange', () => root.classList.toggle('lucy-paused', document.hidden));

let stop: (() => void) | null = null;

function start(opener: HTMLElement | null) {
  if (stop || !data || !tpl) return;
  const steps = data.steps.filter((s) => document.querySelector(s.sel));
  if (!steps.length) return;
  const L = data.labels;

  const host = document.createElement('div');
  host.className = 'lucy-host';
  host.style.width = SIZE + 'px';
  host.innerHTML =
    '<div class="lucy-pop"><span class="lucy-count"></span><p class="lucy-text" role="status"></p><div class="lucy-btns">' +
    '<button type="button" class="lucy-btn primary" data-n></button><button type="button" class="lucy-btn" data-s></button><button type="button" class="lucy-btn" data-h></button></div></div>' +
    '<div class="lucy-flip"></div>';
  host.querySelector('.lucy-flip')!.appendChild(tpl.content.cloneNode(true));
  document.body.appendChild(host);
  root.classList.add('lucy-touring');

  const svg = host.querySelector('svg')!;
  const pop = host.querySelector<HTMLElement>('.lucy-pop')!;
  const flip = host.querySelector<HTMLElement>('.lucy-flip')!;
  const text = host.querySelector<HTMLElement>('.lucy-text')!;
  const count = host.querySelector<HTMLElement>('.lucy-count')!;
  const next = host.querySelector<HTMLButtonElement>('[data-n]')!;
  const stopBtn = host.querySelector<HTMLButtonElement>('[data-s]')!;
  const hideBtn = host.querySelector<HTMLButtonElement>('[data-h]')!;
  stopBtn.textContent = L.stop;
  hideBtn.textContent = L.hide;

  let x = 8, facing = 1, i = 0, raf = 0, alive = true;
  const place = () => {
    host.style.transform = `translateX(${Math.round(x)}px)`;
    flip.style.transform = `scaleX(${facing})`;
    // keep the bubble inside the window
    const w = pop.offsetWidth;
    const left = Math.max(12, Math.min(innerWidth - w - 12, x + SIZE / 2 - w / 2));
    pop.style.transform = `translateX(${Math.round(left - x)}px)`;
  };
  const pose = (s: string) => {
    if (reduce) { svg.setAttribute('data-pose', s); svg.setAttribute('data-state', 'idle'); }
    else svg.setAttribute('data-state', s);
  };
  const walkTo = (target: number) => new Promise<void>((done) => {
    target = Math.max(8, Math.min(innerWidth - SIZE - 8, target));
    if (reduce || Math.abs(target - x) < 4) { x = target; place(); return done(); }
    facing = target > x ? 1 : -1;
    pose('walk');
    const speed = Math.max(160, Math.abs(target - x) / 2.2);
    let last = performance.now();
    const frame = (now: number) => {
      if (!alive) return done();
      const dt = Math.min((now - last) / 1000, 0.1); last = now;
      const d = speed * dt * facing;
      if ((facing > 0 && x + d >= target) || (facing < 0 && x + d <= target)) { x = target; facing = 1; place(); return done(); }
      x += d; place();
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
  });

  const show = async (n: number) => {
    const s = steps[n];
    const el = document.querySelector<HTMLElement>(s.sel);
    if (!el) return;
    pop.style.visibility = 'hidden';
    const r0 = el.getBoundingClientRect();
    // bring the part she explains into the upper half, so the bubble at the bottom does not cover it
    scrollTo({ top: Math.max(0, scrollY + r0.top - innerHeight * 0.16), behavior: reduce ? 'auto' : 'smooth' });
    await new Promise((r) => setTimeout(r, reduce ? 0 : 450));
    if (!alive) return;
    const r = el.getBoundingClientRect();
    await walkTo(r.left + r.width / 2 - SIZE / 2);
    if (!alive) return;
    pose('point');
    text.textContent = s.text;
    count.textContent = L.step.replace('{n}', String(n + 1)).replace('{m}', String(steps.length));
    next.textContent = n === steps.length - 1 ? L.finish : L.next;
    pop.style.visibility = '';
    place();
    next.focus({ preventScroll: true });
  };

  stop = () => {
    alive = false; cancelAnimationFrame(raf); host.remove(); stop = null; root.classList.remove('lucy-touring');
    removeEventListener('keydown', onKey); removeEventListener('resize', place);
    opener?.focus();
  };
  const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') stop?.(); };
  addEventListener('keydown', onKey);
  addEventListener('resize', place);
  next.addEventListener('click', () => { if (i >= steps.length - 1) stop?.(); else show(++i); });
  stopBtn.addEventListener('click', () => stop?.());
  hideBtn.addEventListener('click', () => { stop?.(); setHidden(true); });

  place();
  show(0);
}

document.addEventListener('click', (e) => {
  const t = e.target as HTMLElement | null;
  const tour = t?.closest<HTMLElement>('[data-lucy-tour]');
  if (tour) { start(tour); return; }

});
