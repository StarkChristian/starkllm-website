import json, sys
from playwright.sync_api import sync_playwright
st = json.load(open("state.json")); lang = sys.argv[1]
L = {"en": dict(dash="Dashboard", inbox="Inbox", chat="Chat", kb="Knowledge Base", settings="Settings", cases="Cases", other="Other apps", about="About StarkLLM",
                q="How much does the tax office want me to pay, and by when?", ph="Message StarkLLM or drop a file here..."),
     "de": dict(dash="Übersicht", inbox="Posteingang", chat="Chat", kb="Wissensdatenbank", settings="Einstellungen", cases="Vorgänge", other="Andere Programme", about="Über StarkLLM",
                q="Wie viel verlangt das Finanzamt von mir, und bis wann?", ph="Nachricht an StarkLLM oder Datei hier ablegen ...")}[lang]
W, H = 1440, 900
import requests as _r
_r.patch("http://127.0.0.1:18411/api/v1/workspaces/1", headers={"Authorization": "Bearer " + st["token"]}, json={"name": "Household letters" if lang == "en" else "Haushaltspost"})
with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport=dict(width=W, height=H), locale="en-US" if lang == "en" else "de-DE")
    ctx.add_init_script(f"""localStorage.setItem('token','{st['token']}');localStorage.setItem('username','demo');
      localStorage.setItem('starkllm_onboarding_done','true');localStorage.setItem('ui_theme','light');localStorage.setItem('starkllm_language','{lang}');localStorage.setItem('default_model','qwen2.5vl:7b');""")
    pg = ctx.new_page(); pg.goto("http://127.0.0.1:5173/"); pg.wait_for_timeout(4000)
    def nav(name): pg.locator("nav, aside, div").get_by_text(name, exact=True).first.click(); pg.wait_for_timeout(2500)
    pg.screenshot(path=f"shots/{lang}-dashboard.png")
    nav(L["inbox"]); pg.get_by_text(L["cases"], exact=False).first.click(); pg.wait_for_timeout(1500); pg.screenshot(path=f"shots/{lang}-inbox.png")
    nav(L["kb"]); pg.wait_for_timeout(1500)
    pg.locator("svg.lucide-chevron-right").nth(5).click() if False else None
    pg.locator("text=/kb_data").first.click(); pg.wait_for_timeout(1500)
    pg.screenshot(path=f"shots/{lang}-kb.png")
    nav(L["settings"]); pg.get_by_text(L["other"], exact=True).first.click(); pg.wait_for_timeout(1500); pg.screenshot(path=f"shots/{lang}-settings.png")
    pg.get_by_text(L["about"], exact=True).first.click(); pg.wait_for_timeout(1500); pg.screenshot(path=f"shots/{lang}-about.png")

    b.close()
