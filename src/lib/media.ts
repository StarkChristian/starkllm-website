// Which app pictures exist: src/assets/media/<lang>/<lang>-<name>.png, with the English one as the fallback (as in AppShot).
// Used where a page should leave a frame out instead of showing an empty one (the Android screenshots do not exist yet).
const files = import.meta.glob('../assets/media/*/*.png');
export const hasShot = (name: string, lang: string): boolean =>
  [lang, 'en'].some((l) => `../assets/media/${l}/${l}-${name}.png` in files);
