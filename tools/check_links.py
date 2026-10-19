"""Link checker for the static site.

Checks every local href/src in *.html resolves to a file, and (with --external)
that every https:// link answers 2xx/3xx. This is the check that would have
caught the 404 installer links (downloads/ was gitignored).

Usage:  python tools/check_links.py [--external] [--root .]
Exit code 1 if any link is broken.
"""
import argparse, re, sys, urllib.request, urllib.error
from pathlib import Path
from urllib.parse import urlparse, unquote

ATTR = re.compile(r'''(?:href|src)\s*=\s*["']([^"'#][^"']*)["']''', re.I)
SKIP = ("mailto:", "tel:", "javascript:", "data:")

def local_target(root: Path, page: Path, link: str):
    path = unquote(urlparse(link).path)
    if not path:
        return None
    base = root if path.startswith("/") else page.parent
    t = (base / path.lstrip("/")).resolve()
    if t.is_dir():
        t = t / "index.html"
    return t

def head_ok(url: str) -> bool:
    for method in ("HEAD", "GET"):
        try:
            req = urllib.request.Request(url, method=method, headers={"User-Agent": "link-check"})
            with urllib.request.urlopen(req, timeout=30) as r:
                return r.status < 400
        except urllib.error.HTTPError as e:
            if method == "GET":
                return False
        except Exception:
            if method == "GET":
                return False
    return False

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=".")
    ap.add_argument("--external", action="store_true")
    a = ap.parse_args()
    root = Path(a.root).resolve()
    bad, seen_ext, n = [], {}, 0
    for page in sorted(root.rglob("*.html")):
        if any(p in page.parts for p in ("node_modules", ".git", "mockups")):
            continue
        for link in ATTR.findall(page.read_text(encoding="utf-8", errors="ignore")):
            if link.startswith(SKIP):
                continue
            n += 1
            if link.startswith(("http://", "https://", "//")):
                if a.external:
                    url = "https:" + link if link.startswith("//") else link
                    if url not in seen_ext:
                        seen_ext[url] = head_ok(url)
                    if not seen_ext[url]:
                        bad.append((page.relative_to(root), link))
                continue
            t = local_target(root, page, link)
            if t is not None and not t.exists():
                bad.append((page.relative_to(root), link))
    for p, l in bad:
        print(f"BROKEN  {p}: {l}")
    print(f"{n} links checked, {len(bad)} broken")
    sys.exit(1 if bad else 0)

if __name__ == "__main__":
    main()
