#!/usr/bin/env python3
"""Turn raw app screenshots (PNG, 1440x900, one folder per run) into the optimised WebP files the site uses.

usage: python3 tools/make_shots.py <raw-dir> [--lang en] [--lang de]
Expects <raw-dir>/<lang>-<name>.png for every name in SHOTS (see src/i18n/shots.ts). Writes src/assets/shots/<lang>-<name>.webp,
copies every language's set to public/assets/shots/ (the manual is plain HTML and cannot use Astro's image pipeline) and makes
the social preview image public/assets/shots/social.png (1200x630).
"""
import argparse, pathlib, shutil
from PIL import Image

SHOTS = ["dashboard", "inbox", "chat", "sources", "warning", "kb", "settings", "appearance", "otherapps"]
ROOT = pathlib.Path(__file__).resolve().parent.parent

ap = argparse.ArgumentParser()
ap.add_argument("raw"); ap.add_argument("--lang", action="append")
a = ap.parse_args()
raw = pathlib.Path(a.raw)
out = ROOT / "src/assets/shots"; pub = ROOT / "public/assets/shots"
out.mkdir(parents=True, exist_ok=True); pub.mkdir(parents=True, exist_ok=True)
for lang in a.lang or ["en", "de"]:
    for name in SHOTS:
        src = raw / f"{lang}-{name}.png"
        im = Image.open(src).convert("RGB")
        dst = out / f"{lang}-{name}.webp"
        im.save(dst, "WEBP", quality=86, method=6)
        print(dst.relative_to(ROOT), dst.stat().st_size // 1024, "KB")
        shutil.copy(dst, pub / dst.name)  # English and German manual use the plain-HTML copies
# social preview: the English chat, cropped to 1.91:1
im = Image.open(raw / "en-chat.png").convert("RGB")
w, h = im.size; ch = int(w / 1.905)
social = im.crop((0, 0, w, ch)).resize((1200, 630), Image.LANCZOS)
social.save(pub / "social.png", optimize=True)
print("social.png", (pub / "social.png").stat().st_size // 1024, "KB")
