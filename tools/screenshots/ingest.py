import requests, pathlib, time, json
API = "http://127.0.0.1:18411/api/v1"
s = requests.Session()
r = s.post(API + "/auth/register", json={"username": "demo", "password": "DemoShots!2026"}); print(r.status_code, r.text[:200])
r = s.post(API + "/auth/login", data={"username": "demo", "password": "DemoShots!2026"}); tok = r.json()["access_token"]
s.headers["Authorization"] = "Bearer " + tok
print(s.get(API + "/workspaces/").text[:300])
r = s.post(API + "/knowledge-base/folders", json={"folder_path": "/kb_data", "folder_name": "My knowledge base folder"}); kid = r.json()["id"]
print(s.post(f"{API}/knowledge-base/folders/{kid}/sync").text[:100]); time.sleep(5)
r = s.post(API + "/workspaces/", json={"name": "Household letters"}); print(r.status_code, r.text[:200]); ws = r.json()["id"]
for f in sorted(pathlib.Path("demo2").iterdir()):
    r = s.post(f"{API}/documents/{ws}/upload", files={"file": (f.name, f.read_bytes())}, timeout=900)
    print(f.name, r.status_code, r.text[:120])
    did = r.json().get("id")
    t0 = time.time()
    while time.time() - t0 < 600:
        j = s.get(f"{API}/documents/{ws}/documents/{did}/status").json()
        if j.get("status") in ("indexed", "failed", "missing"): print("  ->", j.get("status"), round(time.time()-t0)); break
        time.sleep(2)
json.dump({"token": tok, "ws": ws}, open("state.json", "w"))
