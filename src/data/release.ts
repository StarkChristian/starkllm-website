// The current release, read from GitHub when the site is built, so a new version needs no text edits.
// release.json is the fallback for offline builds; tools/update_release.mjs refreshes it.
import fallback from './release.json';

export const REPO = 'StarkChristian/StarkLLM';
export const REPO_URL = `https://github.com/${REPO}`;

type Asset = { name: string; url: string; size: number; sha256: string };
export type Release = { version: string; published: string; setup: Asset; portable: Asset };

async function fromGitHub(): Promise<Release | null> {
  if (process.env.STARKLLM_OFFLINE) return null;
  try {
    const headers: Record<string, string> = { Accept: 'application/vnd.github+json' };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const r = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, { headers, signal: AbortSignal.timeout(10000) });
    if (!r.ok) return null;
    const j = await r.json();
    const pick = (suffix: string): Asset | null => {
      const a = (j.assets || []).find((x: any) => x.name.endsWith(suffix));
      const sha = a?.digest?.startsWith('sha256:') ? a.digest.slice(7) : '';
      return a && sha ? { name: a.name, url: a.browser_download_url, size: a.size, sha256: sha } : null;
    };
    const setup = pick('-Setup.exe');
    const portable = pick('-Portable.exe');
    if (!setup || !portable) return null;
    return { version: String(j.tag_name).replace(/^v/, ''), published: String(j.published_at).slice(0, 10), setup, portable };
  } catch {
    return null;
  }
}

const live = await fromGitHub();
if (!live) console.warn('[release] GitHub not reachable or release incomplete; using src/data/release.json');
export const RELEASE: Release = live ?? (fallback as Release);
export const V = RELEASE.version;
export const SIZE_MB = Math.round(RELEASE.setup.size / 1_000_000); // decimal megabytes (10^6 bytes)
