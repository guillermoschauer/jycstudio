import { Isotype } from "@/components/ui/Isotype";
import { Wordmark } from "@/components/ui/Wordmark";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Horizontal lockup: isotype + wordmark, optionally with the descriptor rule
 * from the brand board. Inherits `currentColor`, so it works on ivory and on
 * carbon with no variant. The accessible name lives here, once.
 */
export function Logo({
  className,
  size = "md",
  withTagline = false,
  /** `true` tints the isotype dot green (light surfaces) or its light tint. */
  accentDot = true,
  onDark = false,
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
  accentDot?: boolean;
  onDark?: boolean;
}) {
  const scale = {
    sm: { mark: "h-[1.15rem] w-[1.15rem]", type: "text-[1.02rem]" },
    md: { mark: "h-[1.35rem] w-[1.35rem]", type: "text-[1.2rem]" },
    lg: { mark: "h-[1.85rem] w-[1.85rem]", type: "text-[1.65rem]" },
  }[size];

  return (
    <span className={cn("inline-flex flex-col gap-2", className)}>
      <span className="inline-flex items-center gap-[0.55em]">
        <Isotype
          className={scale.mark}
          dotClassName={
            accentDot ? (onDark ? "fill-verde-on-dark" : "fill-verde") : undefined
          }
        />
        <Wordmark className={scale.type} />
      </span>
      {withTagline && (
        <span
          aria-hidden
          className={cn(
            "eyebrow text-[0.6rem] tracking-[0.28em]",
            onDark ? "text-gris" : "text-muted",
          )}
        >
          {SITE.tagline.toUpperCase()}
        </span>
      )}
      <span className="sr-only">{SITE.name}</span>
    </span>
  );
}
