import type { CaseItem } from "@/lib/site";

/**
 * Status colours per surface. Only the brand green is used as a signal; the
 * other two states are carried by ink weight, not by new hues.
 */
export const STATUS_CLS: Record<"light" | "dark", Record<CaseItem["status"], string>> = {
  light: {
    live: "text-verde",
    soon: "text-carbon",
    dev: "text-muted",
  },
  dark: {
    live: "text-verde-on-dark",
    soon: "text-ivory",
    dev: "text-gris",
  },
};
