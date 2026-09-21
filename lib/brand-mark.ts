/**
 * The Schauer Labs isotype as portable SVG markup.
 *
 * Single source of geometry for the places that cannot import the React
 * component: generated icons (`app/apple-icon.tsx`), the OG image and the
 * static files under `public/brand/`. Keep in sync with
 * `components/ui/Isotype.tsx` — same 64×64 grid, same path.
 */
export function isotypeSvg({
  bar = "#16140f",
  dot = bar,
  size = 64,
}: { bar?: string; dot?: string; size?: number } = {}): string {
  return [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}">`,
    `<path d="M28.5 10h16L28.5 54h-16z" fill="${bar}"/>`,
    `<circle cx="44.5" cy="47" r="7" fill="${dot}"/>`,
    `</svg>`,
  ].join("");
}

/** Same mark, ready to drop into an `<img src>` (Satori-friendly). */
export function isotypeDataUri(options?: Parameters<typeof isotypeSvg>[0]): string {
  return `data:image/svg+xml;base64,${Buffer.from(isotypeSvg(options)).toString("base64")}`;
}
