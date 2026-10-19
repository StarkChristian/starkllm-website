#!/usr/bin/env bash
# Manual preview publish: build, check links, prepare, and force-push to the preview repo's gh-pages.
# Uses your normal git credentials (repo scope is enough). The live site is never touched.
# Usage (Git Bash, from website/):  bash tools/publish-preview.sh
set -euo pipefail
export MSYS_NO_PATHCONV=1
REPO="${PREVIEW_REPO:-StarkChristian/starkllm-website-preview}"
BASE="${PREVIEW_BASE:-/starkllm-website-preview}"
SHA="$(git rev-parse HEAD)"
TMP="$(mktemp -d)"

npm run build
python tools/check_links.py --root dist
cp -r dist "$TMP/site"
BASE="$BASE" SHA="$SHA" node tools/prepare-preview.mjs "$TMP/site"
cd "$TMP/site"
git init -q -b gh-pages
git config user.name "preview-bot"
git config user.email "preview-bot@users.noreply.github.com"
git add -A
git commit -q -m "Preview of ${SHA:0:7}"
git push --force "https://github.com/${REPO}.git" gh-pages
echo "Published: https://${REPO%%/*}.github.io/${REPO##*/}/"
