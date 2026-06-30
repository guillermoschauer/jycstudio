import Image from "next/image";
import { PanacityMockup } from "@/components/mockups/PanacityMockup";
import { cn } from "@/lib/cn";
import type { CaseItem } from "@/lib/site";

/**
 * Renders a case's visual: a real screenshot (framed, never recolored) or the
 * in-house Panacity operative mockup. Screenshots are the protagonists.
 */
export function CaseVisual({ item }: { item: CaseItem }) {
  if (item.visual === "mockup") {
    return <PanacityMockup />;
  }

  const img = item.image;
  if (!img) return null;

  return (
    <figure
      className={cn(
        "overflow-hidden rounded-xl border shadow-[0_22px_60px_-40px_rgba(34,32,27,0.5)] sm:rounded-2xl sm:shadow-[0_30px_80px_-44px_rgba(34,32,27,0.55)]",
        item.tone === "dark" ? "border-[color:var(--color-hairline-dark)]" : "border-hairline",
      )}
    >
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        sizes="(min-width: 1024px) 46vw, 100vw"
        className="h-auto w-full"
      />
    </figure>
  );
}
