import json, sys, requests
from playwright.sync_api import sync_playwright
st = json.load(open("state.json")); lang = sys.argv[1]
L = {"en": dict(settings="Settings", model="Model Settings", appearance="Appearance", other="Other apps", about="About StarkLLM", chat="Chat", ph="Message StarkLLM or drop a file here...", q="Is the letter from the National Revenue Service genuine? Answer in two sentences."),
     "de": dict(settings="Einstellungen", model="Modell", appearance="Darstellung", other="Andere Programme", about="Über StarkLLM", chat="Chat", ph="Nachricht an StarkLLM oder Datei hierher ziehen…", q="Ist der Brief vom National Revenue Service echt? Antworte in zwei Sätzen.")}[lang]
requests.patch("http://127.0.0.1:18411/api/v1/workspaces/1", headers={"Authorization": "Bearer " + st["token"]}, json={"name": "Household letters" if lang == "en" else "Haushaltspost"})
what = sys.argv[2:]
with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport=dict(width=1440, height=900), locale="en-US" if lang == "en" else "de-DE")
    ctx.add_init_script(f"""localStorage.setItem('token','{st['token']}');localStorage.setItem('username','demo');
      localStorage.setItem('starkllm_onboarding_done','true');localStorage.setItem('ui_theme','light');localStorage.setItem('starkllm_language','{lang}');localStorage.setItem('default_model','qwen2.5vl:7b');""")
    pg = ctx.new_page(); pg.goto("http://127.0.0.1:5173/"); pg.wait_for_timeout(3500)
    if "settings" in what:
        pg.get_by_text(L["settings"], exact=True).first.click(); pg.wait_for_timeout(1500)
        for key, name in (("model", "settings"), ("appearance", "appearance"), ("other", "otherapps"), ("about", "about")):
            pg.get_by_text(L[key], exact=True).first.click(); pg.wait_for_timeout(1800)
            if key == "about":
                pg.add_style_tag(content="[class*='versionBadge'],[class*='version']{visibility:hidden !important}")
                pg.wait_for_timeout(300)
            pg.screenshot(path=f"shots/{lang}-{name}2.png")
    if "warning" in what:
        pg.get_by_text(L["chat"], exact=True).first.click(); pg.wait_for_timeout(1500)
        box = pg.get_by_placeholder(L["ph"]); box.click(); box.fill(L["q"]); box.press("Enter"); pg.wait_for_timeout(4000)
        for _ in range(100):
            if pg.locator("text=/\\d+ (words|Wörter)/").count() >= 1: break
            pg.wait_for_timeout(2000)
        pg.wait_for_timeout(1500)
        pg.evaluate("document.querySelectorAll('*').forEach(e=>{if(e.scrollHeight>e.clientHeight+20&&getComputedStyle(e).overflowY!='visible')e.scrollTop=0})")
        pg.wait_for_timeout(800); pg.screenshot(path=f"shots/{lang}-warning2.png")
    b.close()
