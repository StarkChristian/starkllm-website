import json, requests
st = json.load(open("state.json")); H = {"Authorization": "Bearer " + st["token"]}
for c in requests.get("http://127.0.0.1:18411/api/v1/chat/sessions/1", headers=H).json():
    print(requests.delete(f"http://127.0.0.1:18411/api/v1/chat/session/{c['id']}", headers=H).status_code)
