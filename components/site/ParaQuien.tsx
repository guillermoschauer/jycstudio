import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { AUDIENCE } from "@/lib/site";

/**
 * 05 — Who this is for. Deliberately not a "startups" pitch: the list names
 * ordinary companies with ordinary operations.
 */
export function ParaQuien() {
  return (
    <section id="para-quien" className="border-t border-hairline bg-paper">
      <Container className="py-20 sm:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-20">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow number="05">Para quién</Eyebrow>
              <h2 className="mt-7 text-balance text-[clamp(2.1rem,8.5vw,2.9rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-carbon lg:text-[clamp(2.4rem,3.4vw,3.3rem)]">
                Negocios que crecieron más rápido que sus procesos.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.06}>
              <ul className="grid gap-x-10 sm:grid-cols-2">
                {AUDIENCE.map((who) => (
                  <li
                    key={who}
                    className="flex items-start gap-4 border-b border-hairline py-4 text-pretty text-[1.02rem] leading-snug text-carbon"
                  >
                    <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-verde" />
                    {who}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-10 max-w-[54ch] text-pretty leading-relaxed text-ink">
                No hace falta ser una startup ni tener un equipo técnico. Alcanza
                con querer entender dónde se está yendo el tiempo.
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
