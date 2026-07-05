import { cn } from "@/lib/cn";

/**
 * Animated light band that sweeps across a CTA (~every 2.6s) for a subtle
 * "shine". Place inside a `relative isolate overflow-hidden` element and mark
 * the button's own content `relative z-[1]` so it stays above the band.
 * Set the sweep color with a `via-*` utility in `className`
 * (e.g. `via-white/70` on light buttons, `via-[rgba(243,238,228,0.3)]` on dark).
 * Auto-disabled under prefers-reduced-motion (see globals.css).
 */
export function Shimmer({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "jyc-shimmer-band pointer-events-none absolute inset-y-0 left-0 z-0 w-[34%] bg-gradient-to-r from-transparent to-transparent",
        className,
      )}
    />
  );
}
