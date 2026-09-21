import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CasoDestacado } from "@/components/site/CasoDestacado";
import { CASES, FEATURED_CASES } from "@/lib/site";

/**
 * 04 — Cases. Real projects only: no invented clients, metrics or results.
 *
 * Four featured cases and a link out, rather than the full table underneath:
 * the table repeated the projects the reader had just scrolled past, which cost
 * a screen and a half on a phone and added nothing. The count stays in the link
 * so the section still says how much work there is without listing all of it.
 */
export function Casos() {
  return (
    <section id="casos" className="bg-ivory">
      <Container className="py-20 sm:py-28 lg:py-36">
        <Reveal>
          <Eyebrow number="04">Casos</Eyebrow>
          <h2 className="mt-7 max-w-[16ch] text-balance text-[clamp(2.1rem,8.5vw,2.9rem)] font-extrabold leading-[1.05] tracking-[-0.04em] lg:max-w-[22ch] lg:text-[clamp(2.6rem,4vw,3.8rem)]">
            <span className="text-muted">Cómo funcionaba antes.</span>
            <span className="mt-1 block text-carbon">Cómo funciona ahora.</span>
          </h2>
          <p className="mt-7 max-w-[56ch] text-pretty leading-relaxed text-ink lg:text-[1.1rem]">
            Productos y sistemas que hoy están en uso, y otros todavía en
            construcción. En todos el punto de partida fue el mismo: entender
            cómo funcionaba la operación antes de escribir una línea de código.
          </p>
        </Reveal>

        {/* Featured — screenshot + before/after, sides alternating. */}
        <div className="mt-16 space-y-20 sm:mt-20 lg:mt-24 lg:space-y-28">
          {FEATURED_CASES.map((item, i) => (
            <CasoDestacado
              key={item.id}
              item={item}
              flip={i % 2 === 1}
              priority={i === 0}
            />
          ))}
        </div>

        {/* The way out to everything else. */}
        <Reveal className="mt-16 border-t border-hairline pt-8 lg:mt-20">
          <Link
            href="/casos"
            className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2"
          >
            <span className="text-[1.35rem] font-extrabold tracking-[-0.03em] text-carbon lg:text-[1.7rem]">
              <span className="relative">
                Ver los {CASES.length} trabajos
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-verde transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </span>
              <span
                aria-hidden
                className="ml-3 inline-block text-verde transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </span>
            <span className="eyebrow text-[0.6rem] text-muted">
              Productos en uso, en beta y en desarrollo
            </span>
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
