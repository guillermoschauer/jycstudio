import { cn } from "@/lib/cn";

/**
 * Schauer Labs isotype — the "/." mark.
 *
 * A single diagonal bar and a dot. Nothing else: no circuits, no nodes, no
 * brackets. Pure geometry so it survives a 16px favicon, a monochrome print
 * and a dark background without any variant file.
 *
 * Geometry (64×64 grid): the ink box is 39×44 and optically centred.
 * `color` drives the bar; `dotClassName` can tint the dot green when the mark
 * is shown large. Decorative by default — the wordmark carries the name.
 */
export function Isotype({
  className,
  dotClassName,
  title,
}: {
  className?: string;
  /** Tailwind `fill-*` for the dot. Defaults to the bar's color. */
  dotClassName?: string;
  /** When present the mark becomes a labelled image instead of decoration. */
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-6 w-6", className)}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path d="M28.5 10h16L28.5 54h-16z" fill="currentColor" />
      <circle cx="44.5" cy="47" r="7" fill="currentColor" className={dotClassName} />
    </svg>
  );
}
