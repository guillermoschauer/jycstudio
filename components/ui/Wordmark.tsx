import { cn } from "@/lib/cn";

/**
 * Schauer Labs wordmark — set in Archivo, per the approved brand board.
 * SCHAUER carries the weight (800); LABS is the light counterweight (300)
 * with a touch more tracking so it reads as air, not as a second word.
 *
 * Caller sets the base size via className; internals are em-relative so the
 * proportions never drift.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex items-baseline whitespace-nowrap leading-none text-current",
        className,
      )}
    >
      <span className="font-extrabold tracking-[-0.015em]">SCHAUER</span>
      <span className="ml-[0.28em] font-light tracking-[0.04em]">LABS</span>
    </span>
  );
}
