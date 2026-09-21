import { PanacityMockup } from "@/components/mockups/PanacityMockup";
import { Screenshot } from "@/components/ui/Screenshot";
import type { CaseItem } from "@/lib/site";

/**
 * A case's visual: the in-house schematic for the project with nothing to show
 * yet, otherwise the real screenshot in the shared frame.
 */
export function CaseVisual({ item, priority = false }: { item: CaseItem; priority?: boolean }) {
  if (item.visual === "schematic") {
    return <PanacityMockup />;
  }

  return (
    <Screenshot
      image={item.image}
      title={item.title}
      summary={item.summary}
      priority={priority}
      sizes="(min-width: 1024px) 62vw, 100vw"
    />
  );
}
