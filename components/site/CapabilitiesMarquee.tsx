import { HERO_CHIPS } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Capabilities ribbon — replaces the static pill grid under the hero CTAs.
 * A calm, continuous horizontal loop (editorial, not "techy"). Two identical
 * tracks make the -50% translate loop seamlessly. `overflow-hidden` guarantees
 * it never introduces horizontal page scroll. Motion is disabled under
 * prefers-reduced-motion (globals.css), where it rests at the start.
 */
export function CapabilitiesMarquee({ className }: { className?: string }) {
  return (
    <section
      aria-label="Capacidades del estudio"
      className={cn(
        "jyc-marquee relative overflow-hidden border-y border-hairline bg-[#efe8db]",
        className,
      )}
    >
      {/* Soft edge fades so words don't hard-cut at the borders. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#efe8db] to-transparent sm:w-16"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#efe8db] to-transparent sm:w-16"
      />

      <div className="jyc-marquee-track flex w-max py-4">
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            aria-hidden={dup === 1 || undefined}
            className="flex shrink-0 items-center"
          >
            {HERO_CHIPS.map((chip) => (
              <li key={chip} className="flex items-center whitespace-nowrap">
                <span className="px-5 font-sans text-[0.95rem] font-medium text-charcoal sm:px-6">
                  {chip}
                </span>
                <span aria-hidden className="text-sm text-champagne">
                  ✳
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
