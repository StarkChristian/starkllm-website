#!/usr/bin/env python3
"""Checks the language setup of a built site (dist/): <html lang>, canonical, hreflang (self-reference, reciprocity, x-default),
the language switcher and the sitemap. Run after `npm run build`:  python3 tools/check_i18n.py --root dist"""
import argparse, pathlib, re, sys

SITE = "https://www.starkllm.com"
ap = argparse.ArgumentParser(); ap.add_argument("--root", default="dist"); ap.add_argument("--default-lang", default="en")
a = ap.parse_args(); root = pathlib.Path(a.root)
errors = []
RTL = {"ar", "fa"}   # right-to-left languages: <html dir="rtl">; every other page dir="ltr"
LANG_DIRS = {"de", "es", "fr", "it", "tr", "ar", "fa"}

def url_of(file):  # dist/de/index.html -> /de/ ; dist/tech-rag.html -> /tech-rag
    rel = file.relative_to(root).as_posix()
    if rel == "index.html": return "/"
    if rel.endswith("/index.html"): return "/" + rel[:-10]
    return "/" + rel[:-5]

def file_of(url):
    p = url.replace(SITE, "")
    if p.endswith("/"): p += "index"
    return root / (p.lstrip("/") + ".html")

pages = {}
for f in sorted(root.rglob("*.html")):
    h = f.read_text(encoding="utf-8")
    pages[url_of(f)] = dict(
        file=f, lang=(re.search(r'<html lang="([^"]+)"', h) or [None, None])[1],
        dir=(re.search(r'<html lang="[^"]+" dir="([^"]+)"', h) or [None, None])[1],
        canonical=re.findall(r'<link rel="canonical" href="([^"]+)"', h),
        alts=dict(re.findall(r'<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"', h)),
        switcher=re.findall(r'<li class="lang">(.*?)</li>', h, re.S),
        redirect='http-equiv="refresh"' in h)

for url, p in pages.items():
    if url == "/404":
        if p["canonical"]: errors.append(f"{url}: the 404 page must have no canonical")
        continue
    if p["redirect"]:  # a moved page (public/*.html): noindex, canonical = the target, not in the sitemap
        if len(p["canonical"]) != 1 or not file_of(p["canonical"][0]).exists(): errors.append(f"{url}: redirect page needs one canonical to an existing page")
        continue
    if not p["lang"]: errors.append(f"{url}: no <html lang>")
    elif p["dir"] != ("rtl" if p["lang"] in RTL else "ltr"): errors.append(f"{url}: <html lang=\"{p['lang']}\"> needs dir=\"{'rtl' if p['lang'] in RTL else 'ltr'}\", found {p['dir']}")
    prefix = url.split("/")[1] if url.count("/") > 1 else ""
    if prefix in LANG_DIRS and p["lang"] != prefix: errors.append(f"{url}: page under /{prefix}/ has <html lang=\"{p['lang']}\">")
    if len(p["canonical"]) != 1: errors.append(f"{url}: expected one canonical, found {len(p['canonical'])}")
    elif not file_of(p["canonical"][0]).exists(): errors.append(f"{url}: canonical {p['canonical'][0]} does not exist")
    elif p["canonical"][0] != SITE + url: errors.append(f"{url}: canonical {p['canonical'][0]} is not the page itself")
    alts = p["alts"]
    if alts:
        langs = [k for k in alts if k != "x-default"]
        if SITE + url not in alts.values(): errors.append(f"{url}: hreflang set does not include the page itself")
        if "x-default" not in alts or alts["x-default"] != alts.get(a.default_lang, alts.get(langs[0])): errors.append(f"{url}: x-default must equal the {a.default_lang} URL (or the first language if the page does not exist in it)")
        for l, href in alts.items():
            q = pages.get(href.replace(SITE, "") or "/")
            if q is None: errors.append(f"{url}: hreflang {l} -> {href} does not exist")
            elif q["alts"] != alts: errors.append(f"{url}: hreflang set differs from the one on {href}")
        if not p["switcher"]: errors.append(f"{url}: exists in {langs} but has no language switcher")
        for sw in p["switcher"]:
            for href in re.findall(r'href="([^"]+)"', sw):
                if SITE + href not in alts.values(): errors.append(f"{url}: switcher link {href} is not in the hreflang set")
    elif p["switcher"]:
        errors.append(f"{url}: language switcher on a page that exists in one language")

sm = (root / "sitemap.xml").read_text(encoding="utf-8")
for url, p in pages.items():
    if url != "/404" and not p["redirect"] and f"<loc>{SITE}{url}</loc>" not in sm: errors.append(f"{url}: missing from sitemap.xml")
if errors:
    print("\n".join(errors)); print(f"{len(errors)} problem(s)"); sys.exit(1)
print(f"{len(pages)} pages checked, language setup OK")
