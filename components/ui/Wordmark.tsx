import { cn } from "@/lib/cn";

/**
 * Official JYC Studio wordmark.
 * "JYC" in DM Sans extrabold, tight tracking — the dominant block.
 * "Studio" in Instrument Serif italic, medium weight, slightly smaller.
 * Caller sets the base size via className; internals are em-relative.
 */
export function Wordmark({
  className,
  ariaLabel = "JYC Studio",
}: {
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <span
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-baseline whitespace-nowrap leading-none text-current",
        className,
      )}
    >
      <span aria-hidden className="font-sans font-extrabold tracking-[-0.045em]">
        JYC
      </span>
      <span
        aria-hidden
        className="ml-[0.2em] font-serif text-[0.92em] font-medium italic tracking-[-0.02em]"
      >
        Studio
      </span>
    </span>
  );
}
