import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CasoDestacado } from "@/components/site/CasoDestacado";
import { FEATURED_CASES } from "@/lib/site";

/**
 * 03 — Cases. Real projects only: no invented clients, metrics or results.
 *
 * Three featured cases and a link out, rather than the full table underneath:
 * the table repeated the projects the reader had just scrolled past, which cost
 * a screen and a half on a phone and added nothing.
 *
 * The link says "todos" and not the count on purpose. A number only helps while
 * it impresses, and it reframes a portfolio as a quantity the reader is invited
 * to judge — which is the wrong question to hand someone right before the close.
 */
export function Casos() {
  return (
    <section id="casos" className="bg-ivory">
      <Container className="py-16 sm:py-20 lg:py-24">
        <Reveal>
          <Eyebrow number="03">Casos</Eyebrow>
          <h2 className="mt-7 max-w-[16ch] text-balance text-[clamp(2.1rem,8.5vw,2.9rem)] font-extrabold leading-[1.05] tracking-[-0.04em] lg:max-w-[22ch] lg:text-[clamp(2.6rem,4vw,3.8rem)]">
            <span className="text-muted">Problemas reales.</span>
            <span className="mt-1 block text-carbon">Soluciones que ya construimos.</span>
          </h2>
          <p className="mt-7 max-w-[60ch] text-pretty leading-relaxed text-ink lg:text-[1.1rem]">
            Stock, turnos, cobros, organización y marketplaces. Distintos
            negocios, mismo punto de partida: entender qué problema había que
            resolver antes de elegir la tecnología.
          </p>
        </Reveal>

        {/* Featured — screenshot + before/after, sides alternating. */}
        <div className="mt-12 space-y-14 sm:mt-14 lg:mt-16 lg:space-y-20">
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
        <Reveal className="mt-12 border-t border-hairline pt-7 lg:mt-14">
          <Link
            href="/casos"
            className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2"
          >
            <span className="text-[1.35rem] font-extrabold tracking-[-0.03em] text-carbon lg:text-[1.7rem]">
              <span className="relative">
                Ver todos los trabajos
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
