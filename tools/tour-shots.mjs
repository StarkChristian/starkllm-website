#!/usr/bin/env node
// Copies the tour screenshots into src/assets/tour/ as WebP, ready for astro:assets (which makes the responsive sizes).
//   node tools/tour-shots.mjs [folder]     (default: ~/nightbuild/tour/shots)
// Takes <lang>-pc-<n>-<name>.png and <lang>-phone-<n>-<name>.png; skips every file with -INCOMPLETE, -WRONG or -WRONGLANG
// in its name. A PC picture uses its @2x version when there is one. A retaken picture only needs to land in the folder with
// the plain name (e.g. es-pc-3-chat.png): run this again and rebuild; the tour page then uses it instead of the English one.
import { readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { homedir } from 'node:os';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = process.argv[2] || join(homedir(), 'nightbuild/tour/shots');
const OUT = join(ROOT, 'src/assets/tour');
mkdirSync(OUT, { recursive: true });

const NAME = /^(en|de|es|fr|it|tr)-(pc|phone)-(\d)-([a-z]+)\.png$/;
let n = 0;
for (const f of readdirSync(SRC).sort()) {
  const m = f.match(NAME);
  if (!m) continue; // also skips -INCOMPLETE, -WRONG..., @2x
  const [, , kind] = m;
  const hi = join(SRC, f.replace('.png', '@2x.png'));
  const input = kind === 'pc' && existsSync(hi) ? hi : join(SRC, f);
  // PC: at most 2160 px wide (1080 CSS px on a 2x screen); phone: 720 px (the frame is at most 320 CSS px wide)
  const width = kind === 'pc' ? 2160 : 720;
  await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality: 88 }).toFile(join(OUT, f.replace('.png', '.webp')));
  n++;
}
console.log(`[tour-shots] ${n} pictures from ${SRC} -> src/assets/tour/`);
