import sys, re, io, random
sys.argv = ["x", "demo"]
src = open("make_docs.py").read()
# reuse letter HTML for Lakeside, render as a slightly rotated, noisy "phone photo"
ns = {}
exec(src.split("JPG =")[0].replace("OUT = pathlib.Path(sys.argv[1]); OUT.mkdir(parents=True, exist_ok=True)", "OUT=None"), ns)
html = ns["DOCS"]["Letter_LakesideHealth_form.pdf"]
from playwright.sync_api import sync_playwright
from PIL import Image, ImageFilter, ImageEnhance
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport=dict(width=1100, height=1500), device_scale_factor=1.6)
    pg.set_content(html.replace("<body>", "<body style='padding:70px 80px;background:#fbfaf6'>")); pg.screenshot(path="photo_raw.png"); b.close()
im = Image.open("photo_raw.png").convert("RGB")
bg = Image.new("RGB", (im.width + 260, im.height + 260), (92, 78, 64))
bg.paste(im, (130, 130))
bg = bg.rotate(2.1, resample=Image.BICUBIC, expand=True, fillcolor=(92, 78, 64)).filter(ImageFilter.GaussianBlur(0.9))
bg = ImageEnhance.Brightness(bg).enhance(0.96)
bg.thumbnail((2000, 2600)); bg.save("demo/Letter_LakesideHealth_photo.jpg", quality=82)
print(bg.size)
