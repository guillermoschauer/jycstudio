import Image from "next/image";
import { cn } from "@/lib/cn";

type CampaignStillProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Real display URL shown in the chrome bar, no protocol (e.g. "sacaturno.app"). */
  url?: string;
  /** Sizing / placement / rotation supplied by the caller. */
  className?: string;
  /** Eager-load when above the fold (hero). */
  priority?: boolean;
  /** next/image `sizes` hint. */
  sizes?: string;
  /**
   * Scrim over the screenshot:
   *  - "soft":  light bottom fade — gallery pieces, where the work is the point.
   *  - "recede": stronger fade into the background so it never competes with a
   *    headline (hero). Legibility rule: the title is always the protagonist.
   */
  scrim?: "soft" | "recede";
};

/**
 * A real product screenshot framed as a cinematic "still": a thin, editorial
 * browser-chrome bar (three dots + the project's real URL) over a dark frame,
 * with a scrim so a raw UI reads as a premium piece — never recolored.
 *
 * Shared by the Hero (secondary, scrim="recede") and the Casos gallery pieces
 * (scrim="soft"). Does not touch CaseVisual, which case-detail pages still use.
 */
export function CampaignStill({
  src,
  alt,
  width,
  height,
  url,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 44vw, 90vw",
  scrim = "soft",
}: CampaignStillProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border border-[color:var(--color-hairline-dark)] bg-noche",
        "shadow-[0_40px_100px_-45px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {/* Editorial chrome bar — a nod to the concept frame, not skeuomorphism */}
      <div className="flex items-center gap-3 border-b border-[color:var(--color-hairline-dark)] bg-white/[0.03] px-4 py-2.5">
        <span aria-hidden className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-ivory/20" />
          <span className="h-2 w-2 rounded-full bg-ivory/20" />
          <span className="h-2 w-2 rounded-full bg-ivory/20" />
        </span>
        {url && (
          <span className="truncate font-mono text-[0.62rem] tracking-[0.06em] text-ivory/40">
            {url}
          </span>
        )}
      </div>

      {/* Screenshot + scrim */}
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="block h-auto w-full"
        />
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-0",
            scrim === "recede"
              ? "bg-gradient-to-t from-noche/85 via-noche/5 to-transparent"
              : "bg-gradient-to-t from-noche/45 via-transparent to-transparent",
          )}
        />
      </div>
    </figure>
  );
}
