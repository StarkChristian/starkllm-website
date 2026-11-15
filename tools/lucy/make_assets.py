#!/usr/bin/env python3
"""Make Lucy's small PNGs (favicon-size face, Open Graph image) from public/assets/lucy/lucy.svg with a headless browser.

usage: python3 tools/lucy/make_assets.py        (needs: pip install playwright pillow; playwright install chromium)
Writes public/assets/lucy/lucy-face-{32,64,180}.png and public/assets/lucy/og-lucy.png (1200x630).
The full-size poses in public/assets/lucy/png/ come from the same drawing (see public/assets/lucy/README.md).
"""
import base64, pathlib, re
from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent.parent
OUT = ROOT / "public/assets/lucy"
svg = (OUT / "lucy.svg").read_text()
FONT = base64.b64encode((ROOT / "src/assets/fonts/geist-latin-wght-normal.woff2").read_bytes()).decode()

def pose(pose_name, viewbox=None):
    s = svg.replace('data-state="idle"', f'data-state="idle" data-pose="{pose_name}"', 1)
    if viewbox:
        s = re.sub(r'viewBox="[^"]*"', f'viewBox="{viewbox}"', s, count=1)
    return s

with sync_playwright() as p:
    b = p.chromium.launch()
    # Face: the head and hairs only, square, transparent
    face = pose("idle", "232 8 804 804")
    for px in (32, 64, 180):
        pg = b.new_page(viewport={"width": px, "height": px}, device_scale_factor=1)
        pg.set_content(f'<body style="margin:0;background:transparent"><div style="width:{px}px;height:{px}px">{face}</div><style>svg{{width:100%;height:100%}}</style></body>')
        pg.screenshot(path=str(OUT / f"lucy-face-{px}.png"), omit_background=True)
        pg.close()
    # Open Graph image: dark site background, Lucy waving, the claim in Geist
    wave = pose("wave")
    html = f"""<style>
@font-face {{ font-family: Geist; src: url(data:font/woff2;base64,{FONT}) format('woff2'); font-weight: 100 900; }}
* {{ box-sizing: border-box; margin: 0 }}
body {{ width: 1200px; height: 630px; background: radial-gradient(60% 80% at 80% 45%, #1d1535 0%, #07060b 70%); color: #f2eefb; font-family: Geist, sans-serif; position: relative; overflow: hidden }}
.t {{ position: absolute; left: 80px; top: 120px; width: 640px }}
.k {{ font-size: 22px; letter-spacing: .14em; text-transform: uppercase; color: #d4af37; margin-bottom: 26px }}
h1 {{ font-size: 84px; line-height: 1.02; letter-spacing: -.04em; font-weight: 700 }}
h1 em {{ font-style: normal; background: linear-gradient(100deg, #b777ff, #d4af37); -webkit-background-clip: text; color: transparent }}
.s {{ margin-top: 30px; font-size: 28px; color: #9d96b6 }}
.l {{ position: absolute; right: 70px; bottom: 40px; width: 430px }}
.l svg {{ width: 100%; height: auto; display: block }}
</style>
<div class="t"><p class="k">StarkLLM</p><h1>Ask your files. <em>Nothing leaves your PC.</em></h1><p class="s">Free, open-source AI assistant for Windows.</p></div>
<div class="l">{wave}</div>"""
    pg = b.new_page(viewport={"width": 1200, "height": 630})
    pg.set_content(html)
    pg.wait_for_timeout(300)
    pg.screenshot(path=str(OUT / "og-lucy.png"))
    b.close()
print("done")
