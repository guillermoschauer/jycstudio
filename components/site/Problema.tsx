import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { FRICTIONS } from "@/lib/site";

/**
 * 01 — The starting point. A recognisable situation, never a diagnosis of
 * incompetence: the frictions are listed as symptoms of growth.
 * Silhouette: a short statement on the left, a stack of hairline rows on the
 * right — the section reads as a list even out of focus.
 */
export function Problema() {
  return (
    <section id="problema" className="border-t border-hairline bg-paper">
      <Container className="py-20 sm:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-20">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow number="01">El punto de partida</Eyebrow>
              <h2 className="mt-7 text-balance text-[clamp(2.1rem,8.5vw,2.9rem)] font-extrabold leading-[1.05] tracking-[-0.04em] lg:text-[clamp(2.6rem,3.6vw,3.6rem)]">
                <span className="text-muted">Muchos negocios crecen.</span>
                <span className="mt-1 block text-carbon">Sus procesos, no.</span>
              </h2>
              <p className="mt-7 max-w-[46ch] text-pretty leading-relaxed text-ink">
                No es desprolijidad. Es lo que pasa cuando el trabajo crece más
                rápido que las herramientas con las que se resuelve.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="border-t border-hairline">
              {FRICTIONS.map((line, i) => (
                <Reveal as="li" key={line} delay={Math.min(i * 0.05, 0.25)}>
                  <div className="flex items-start gap-5 border-b border-hairline py-5 sm:gap-6 sm:py-6">
                    <span
                      aria-hidden
                      className="nums mt-1 shrink-0 text-[0.7rem] font-semibold text-verde"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-pretty text-[1.02rem] leading-snug text-carbon sm:text-[1.15rem]">
                      {line}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.1}>
              <p className="mt-10 max-w-[52ch] border-l-2 border-verde pl-5 text-pretty text-[1.05rem] leading-relaxed text-ink sm:pl-6">
                Nada de esto se arregla comprando otro sistema. Se arregla
                entendiendo primero dónde se está yendo el tiempo.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
