import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CasoDestacado } from "@/components/site/CasoDestacado";
import { CasosIndex } from "@/components/site/CasosIndex";
import { CASES, FEATURED_CASES } from "@/lib/site";

/**
 * 04 — Cases. Real projects only: no invented clients, metrics or results.
 *
 * Two layers, on purpose: the featured ones get the screenshot and the
 * before/after, so the section proves something instead of listing names; every
 * project, including the ones still in the workshop, is listed underneath.
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

        {/* Everything else. */}
        <div className="mt-24 lg:mt-32">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
              <h3 className="text-[1.5rem] font-extrabold tracking-[-0.03em] text-carbon lg:text-[1.9rem]">
                Todos los trabajos
              </h3>
              <p className="eyebrow text-[0.6rem] text-muted">
                {CASES.length} proyectos
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="mt-10">
            <CasosIndex />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
