// Writes the latest GitHub release (version, URLs, sizes, SHA-256) into src/data/release.json.
// Run after publishing a release: node tools/update_release.mjs
import { writeFileSync } from 'node:fs';
const repo = 'StarkChristian/StarkLLM';
const r = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, { headers: { Accept: 'application/vnd.github+json' } });
if (!r.ok) throw new Error(`GitHub answered ${r.status}`);
const j = await r.json();
const pick = (suffix) => {
  const a = j.assets.find((x) => x.name.endsWith(suffix));
  if (!a || !a.digest?.startsWith('sha256:')) throw new Error(`asset *${suffix} or its digest is missing`);
  return { name: a.name, url: a.browser_download_url, size: a.size, sha256: a.digest.slice(7) };
};
const out = { version: j.tag_name.replace(/^v/, ''), published: j.published_at.slice(0, 10), setup: pick('-Setup.exe'), portable: pick('-Portable.exe') };
writeFileSync(new URL('../src/data/release.json', import.meta.url), JSON.stringify(out, null, 2) + '\n');
console.log(`release.json: v${out.version}`);
