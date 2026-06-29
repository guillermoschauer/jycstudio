import { cn } from "@/lib/cn";

/**
 * Secondary brand symbol — serif italic accent glyph.
 * Use only in small details (avatar, favicon parity, loaders, micro-marks),
 * never as the primary large logo. The wordmark is always the protagonist.
 */
export function VSymbol({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex items-center justify-center font-serif italic leading-none select-none",
        className,
      )}
    >
      V
    </span>
  );
}
