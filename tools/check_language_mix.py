#!/usr/bin/env python3
"""Checks that the pages of each language contain no sentences of another language.
Takes the visible text of every built page (navigation and footer included, code and pre blocks excluded), counts common
function words of every language, and reports a page when another language's words are more than a small share of the text.
Pages that deliberately mix languages (imprint and privacy policy in German inside the English interface, the English courtesy
translation, product names) are handled by the allowed list below. Run after `npm run build`:  python3 tools/check_language_mix.py --root dist"""
import argparse, html, pathlib, re, sys

STOP = {
 "en": "the and with your you is are for this that from not can will be by or if it on as at we our".split(),
 "de": "und der die das nicht sie ist mit für ein eine auf von den dem auch wenn oder ihre wird sind bei als nach über wie sich aber nur noch können".split(),
 "es": "el la los las de que y en un una para con por su es se no más como pero también cuando puede esto esta tu".split(),
 "fr": "le la les des du de et un une pour avec par sur est sont pas vous votre plus mais aussi quand peut cette ce dans que qui".split(),
 "it": "il lo la gli le dei del della di e un una per con su è sono non più come ma anche quando può questo questa tuo nel che".split(),
 "tr": "ve bir bu için ile de da çok daha ama gibi olarak olan en mi mı değil var yok ne nasıl veya sizin".split(),
 # Arabic and Persian: words that exist in both with another meaning (ما من هم به) are left out on purpose.
 "ar": "في على إلى عن هذا هذه التي الذي أن لا هل كيف أو ثم قد يمكن عند بين كل ذلك".split(),
 "fa": "در از که این را با است برای شما یا اگر نمی شود کنید می‌شود می‌توانید".split(),
}
# Words that belong to more than one language's list (shared function words) are dropped: only words of exactly one language count
_all = {w for l in STOP.values() for w in l}
_count = {w: sum(w in l for l in STOP.values()) for w in _all}
STOP = {k: [w for w in v if _count[w] == 1] for k, v in STOP.items()}
ap = argparse.ArgumentParser(); ap.add_argument("--root", default="dist"); ap.add_argument("--max", type=float, default=0.025)
a = ap.parse_args(); root = pathlib.Path(a.root)
LANGS = {"de", "es", "fr", "it", "tr", "ar", "fa", "zh", "ja"}
CJK_LANGS = {"zh", "ja"}
HAN = re.compile(r"[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]")
KANA = re.compile(r"[\u3040-\u309f\u30a0-\u30ff\u31f0-\u31ff\uff66-\uff9f]")
CJK = re.compile(r"[\u3040-\u30ff\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]+")
SINGLE = {"impressum": "de", "datenschutz": "de", "privacy-policy": "en", "404": "en"}

def visible(h):
    h = re.sub(r"<(script|style|template|svg|pre|code|noscript)[^>]*>.*?</\1>", " ", h, flags=re.S)
    return html.unescape(re.sub(r"<[^>]+>", " ", h))

bad = 0
for f in sorted(root.rglob("*.html")):
    rel = f.relative_to(root).as_posix()[:-5]
    lang = SINGLE.get(rel) or (rel.split("/")[0] if rel.split("/")[0] in LANGS else "en")
    text = visible(f.read_text(encoding="utf-8"))
    # Chinese and Japanese have no spaces: every Han or kana character counts as one word, and the script tells them
    # apart (Japanese text has kana, Chinese text has none). Latin words are counted as before.
    han, kana = len(HAN.findall(text)), len(KANA.findall(text))
    words = re.findall(r"[^\W\d_]+", CJK.sub(" ", text).lower())
    n = max(1, len(words) + han + kana)
    if lang in CJK_LANGS:
        if lang == "zh" and kana / n > a.max and kana > 8:
            print(f"{rel}: {kana} Japanese kana in a zh page ({kana / n:.1%})"); bad += 1
        if lang == "ja" and han + kana > 200 and kana < 0.15 * (han + kana):
            print(f"{rel}: only {kana} kana among {han + kana} CJK characters, Chinese text in a ja page?"); bad += 1
    elif (han + kana) / n > a.max and han + kana > 20:
        print(f"{rel}: {han + kana} Chinese/Japanese characters in a {lang} page ({(han + kana) / n:.1%})"); bad += 1
    for other, lst in STOP.items():
        if other == lang: continue
        hits = sum(1 for w in words if w in lst)
        # the German imprint mentions English terms; the English footer names German legal pages: allow a few hits
        limit = 0.06 if rel in SINGLE else a.max   # the German legal pages sit in the English interface (navigation, footer)
        if hits / n > limit and hits > 8:
            print(f"{rel}: {hits} {other} words in a {lang} page ({hits / n:.1%})"); bad += 1
print(f"{bad} page(s) with mixed languages" if bad else "no language mixing found")
sys.exit(1 if bad else 0)
