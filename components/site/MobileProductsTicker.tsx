import { PRODUCT_TICKER_ITEMS } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Mobile-only ticker showing live products and their status.
 * Replaces the capabilities marquee on small screens.
 * Visually matches CapabilitiesMarquee so the seam is invisible if shown together.
 */
export function MobileProductsTicker() {
  return (
    <div
      aria-label="Productos del estudio"
      className="jyc-marquee relative overflow-hidden border-y border-hairline bg-[#efe8db] md:hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#efe8db] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#efe8db] to-transparent"
      />

      <div className="jyc-marquee-track flex w-max py-4">
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            aria-hidden={dup === 1 || undefined}
            className="flex shrink-0 items-center"
          >
            {PRODUCT_TICKER_ITEMS.map((item) => (
              <li key={item.name} className="flex items-center whitespace-nowrap">
                <span className="flex items-center gap-2 px-5">
                  <span className="font-sans text-[0.82rem] font-semibold uppercase tracking-[0.06em] text-charcoal">
                    {item.name}
                  </span>
                  <span
                    className={cn(
                      "font-mono text-[0.62rem] uppercase tracking-[0.12em]",
                      item.live ? "text-operational-green" : "text-stone",
                    )}
                  >
                    {item.status}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="mx-1 inline-block h-[3px] w-[3px] rounded-full bg-champagne"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
