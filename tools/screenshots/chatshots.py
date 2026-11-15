import json, sys, requests
from playwright.sync_api import sync_playwright
st = json.load(open("state.json")); lang = sys.argv[1]
L = {"en": dict(chat="Chat", q1="What does the Finanzamt Musterstadt ask me to pay, and by when?", q2="Is the letter from the National Revenue Service genuine?", ph="Message StarkLLM or drop a file here..."),
     "de": dict(chat="Chat", q1="Was verlangt das Finanzamt Musterstadt von mir, und bis wann?", q2="Ist der Brief vom National Revenue Service echt?", ph="Nachricht an StarkLLM oder Datei hierher ziehen…")}[lang]
import re
import requests as _r
_r.patch("http://127.0.0.1:18411/api/v1/workspaces/1", headers={"Authorization": "Bearer " + st["token"]}, json={"name": "Household letters" if lang == "en" else "Haushaltspost"})
with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport=dict(width=1440, height=900), locale="en-US" if lang == "en" else "de-DE")
    ctx.add_init_script(f"""localStorage.setItem('token','{st['token']}');localStorage.setItem('username','demo');
      localStorage.setItem('starkllm_onboarding_done','true');localStorage.setItem('ui_theme','light');localStorage.setItem('starkllm_language','{lang}');localStorage.setItem('default_model','qwen2.5vl:7b');""")
    pg = ctx.new_page(); pg.goto("http://127.0.0.1:5173/"); pg.wait_for_timeout(3500)
    pg.get_by_text(L["chat"], exact=True).first.click(); pg.wait_for_timeout(1500)
    for i, q in enumerate([L["q1"], L["q2"]]):
        box = pg.get_by_placeholder(L["ph"]); box.click(); box.fill(q); box.press("Enter")
        pg.wait_for_timeout(4000)
        for _ in range(90):
            if pg.locator("text=/\\d+ (words|Wörter)/").count() >= i + 1: break
            pg.wait_for_timeout(2000)
        pg.wait_for_timeout(1500)
        pg.screenshot(path=f"shots/{lang}-chat{i+1}.png")
        if i == 0:
            pg.get_by_text(re.compile(r"^(Documents|Dokumente):")).first.click(); pg.wait_for_timeout(1500); pg.screenshot(path=f"shots/{lang}-sources.png")
            pg.keyboard.press("Escape"); pg.wait_for_timeout(800)
    b.close()
