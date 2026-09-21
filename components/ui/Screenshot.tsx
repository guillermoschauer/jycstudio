import Image from "next/image";
import { cn } from "@/lib/cn";
import type { CaseImage } from "@/lib/site";

/**
 * The frame every product shot goes through.
 *
 * Three jobs, and only three:
 *
 * 1. **One proportion for every case.** A 16/10 window regardless of what the
 *    file measures, so a 2.3:1 dashboard and a 1.5:1 app view sit side by side
 *    without one looking like a banner and the other like a card.
 * 2. **Crop without touching the file.** `focus` and `zoom` reframe the shot
 *    inside that window, so keeping the communicative part visible is a data
 *    change in `lib/site.ts`, not a re-export. The asset on disk stays original.
 * 3. **Frame it honestly.** A hairline, a soft corner, and — only when the
 *    product is actually online — a chrome bar with its real address. No device
 *    mockups, no perspective, no invented browser for something unreleased.
 *
 * With no `image` it renders a typographic panel instead of a broken img, so a
 * case can ship before its screenshot exists without looking unfinished.
 */
export function Screenshot({
  image,
  title,
  summary,
  priority = false,
  sizes = "(min-width: 1024px) 56vw, 100vw",
  className,
}: {
  image?: CaseImage;
  /** Used by the fallback panel when there is no screenshot yet. */
  title: string;
  summary?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  // The 16/10 belongs to the *screenshot*, not to the card: the chrome bar sits
  // above it. Letting the bar eat into the ratio would make `object-cover` crop
  // against a different aspect than the one documented on `CaseImage`, which is
  // how the framed shots ended up with their headers sliced.
  const frame =
    "relative w-full overflow-hidden rounded-lg border border-hairline sm:rounded-xl";
  const shotArea = "relative aspect-[16/10] w-full";

  if (!image) {
    return (
      <div data-screenshot="pending" className={cn(frame, shotArea, "bg-carbon", className)}>
        {/* A title card, not an empty slot: centred and ruled so the absence of
            a screenshot reads as a deliberate card rather than a failed image. */}
        <div className="flex h-full w-full flex-col justify-center px-7 py-8 sm:px-12">
          <span aria-hidden className="mb-6 block h-px w-12 bg-verde-on-dark" />
          <p className="text-[1.7rem] font-extrabold tracking-[-0.035em] text-ivory sm:text-[2.2rem]">
            {title}
          </p>
          {summary && (
            <p className="mt-4 max-w-[40ch] text-pretty leading-relaxed text-gris">
              {summary}
            </p>
          )}
        </div>
      </div>
    );
  }

  const focus = image.focus ?? "left top";
  const zoom = image.zoom ?? 1;

  return (
    <figure
      data-screenshot="shot"
      className={cn(frame, image.shotTone === "light" ? "bg-paper" : "bg-carbon", className)}
    >
      {image.chrome && (
        <div className="flex items-center gap-3 border-b border-[color:var(--color-hairline-dark)] bg-carbon px-4 py-2.5">
          <span aria-hidden className="flex gap-1.5">
            <span className="h-[7px] w-[7px] rounded-full bg-ivory/20" />
            <span className="h-[7px] w-[7px] rounded-full bg-ivory/20" />
            <span className="h-[7px] w-[7px] rounded-full bg-ivory/20" />
          </span>
          {typeof image.chrome === "string" && (
            <span className="truncate text-[0.7rem] text-gris">{image.chrome}</span>
          )}
        </div>
      )}

      <div className={shotArea}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
          style={{
            objectPosition: focus,
            ...(zoom !== 1 ? { transform: `scale(${zoom})`, transformOrigin: focus } : {}),
          }}
        />
      </div>
    </figure>
  );
}
