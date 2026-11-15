import json, sys
from playwright.sync_api import sync_playwright
st = json.load(open("state.json")); lang = sys.argv[1]
L = {"en": dict(inbox="Inbox", cases="Cases", first="Brightline Telecom Ltd"), "de": dict(inbox="Posteingang", cases="Vorgänge", first="Brightline Telecom Ltd")}[lang]
with sync_playwright() as p:
    b = p.chromium.launch()
    ctx = b.new_context(viewport=dict(width=1440, height=900), locale="en-US" if lang == "en" else "de-DE")
    ctx.add_init_script(f"""localStorage.setItem('token','{st['token']}');localStorage.setItem('username','demo');
      localStorage.setItem('starkllm_onboarding_done','true');localStorage.setItem('ui_theme','light');localStorage.setItem('starkllm_language','{lang}');localStorage.setItem('default_model','qwen2.5vl:7b');""")
    pg = ctx.new_page(); pg.goto("http://127.0.0.1:5173/"); pg.wait_for_timeout(3500)
    pg.get_by_text(L["inbox"], exact=True).first.click(); pg.wait_for_timeout(2000)
    pg.get_by_text(L["cases"], exact=False).first.click(); pg.wait_for_timeout(1500)
    pg.get_by_text(L["first"], exact=True).first.click(); pg.wait_for_timeout(1500)
    pg.screenshot(path=f"shots/{lang}-inbox3.png")
    b.close()
