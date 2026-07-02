import { cn } from "@/lib/cn";

/**
 * Official JYC Studio wordmark.
 * "JYC" — DM Sans extrabold, tight tracking. Dominant mark.
 * "STUDIO" — DM Sans normal, uppercase, wide tracking. Small descriptor.
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
        "inline-flex items-center whitespace-nowrap leading-none text-current",
        className,
      )}
    >
      <span aria-hidden className="font-sans font-extrabold tracking-[-0.04em]">
        JYC
      </span>
      <span
        aria-hidden
        className="ml-[0.32em] font-sans text-[0.44em] font-light uppercase tracking-[0.2em]"
      >
        Studio
      </span>
    </span>
  );
}
