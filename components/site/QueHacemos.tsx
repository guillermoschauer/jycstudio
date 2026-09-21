import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { AUDIENCE_LINE, CAPABILITIES, FRICTIONS } from "@/lib/site";

/**
 * 01 — The situation and the answer, in one section.
 *
 * These used to be two full screens that made the same argument twice: first
 * "here is what breaks", then "here is what we do about it". Separating them
 * meant restating the problem to introduce the solution. Together, the frictions
 * are the setup and the three capabilities are the payoff, with no bridge copy
 * in between.
 *
 * `#problema` and `#para-quien` survive as anchors: both were live URLs.
 */
export function QueHacemos() {
  return (
    <section id="que-hacemos" className="on-dark border-t border-hairline bg-carbon text-ivory">
      <span id="problema" aria-hidden className="block" />
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow number="01" tone="dark">
                Qué hacemos
              </Eyebrow>
              <h2 className="mt-6 text-balance text-[clamp(2rem,8vw,2.6rem)] font-extrabold leading-[1.05] tracking-[-0.04em] lg:text-[clamp(2.3rem,3.2vw,3.1rem)]">
                <span className="text-gris">Muchos negocios crecen.</span>
                <span className="mt-1 block text-ivory">Sus procesos, no.</span>
              </h2>
              <p className="mt-6 max-w-[44ch] text-pretty leading-relaxed text-gris">
                La operación empieza a repartirse entre WhatsApp, planillas,
                tareas manuales y herramientas que no se hablan entre sí.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.06}>
              <ul className="border-t border-[color:var(--color-hairline-dark)]">
                {FRICTIONS.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-4 border-b border-[color:var(--color-hairline-dark)] py-4 text-pretty text-[1.02rem] leading-snug text-ivory"
                  >
                    <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-verde-on-dark" />
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* The answer, straight after the symptoms. */}
        <Reveal delay={0.08}>
          <p className="mt-14 max-w-[24ch] text-balance text-[clamp(1.5rem,6vw,1.9rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ivory lg:mt-16 lg:max-w-[40ch] lg:text-[clamp(1.8rem,2.6vw,2.4rem)]">
            El resultado no es una herramienta nueva.{" "}
            <span className="text-verde-on-dark">Es una operación que funciona mejor.</span>
          </p>
        </Reveal>

        <ol className="mt-10 grid gap-x-10 gap-y-8 lg:mt-12 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <Reveal
              as="li"
              key={cap.number}
              delay={Math.min(0.1 + i * 0.05, 0.25)}
              className="border-t border-[color:var(--color-hairline-dark)] pt-5"
            >
              <span aria-hidden className="nums text-[0.7rem] font-semibold text-verde-on-dark">
                {cap.number}
              </span>
              <h3 className="mt-3 text-balance text-[1.15rem] font-extrabold leading-tight tracking-[-0.025em] text-ivory">
                {cap.title}
              </h3>
              <p className="mt-2.5 max-w-[42ch] text-pretty text-[0.95rem] leading-relaxed text-gris">
                {cap.text}
              </p>
            </Reveal>
          ))}
        </ol>

        {/* Who it is for — one line, no longer a section. */}
        <Reveal delay={0.12}>
          <p
            id="para-quien"
            className="mt-12 max-w-[60ch] border-l-2 border-verde-on-dark pl-5 text-pretty leading-relaxed text-gris lg:mt-14"
          >
            {AUDIENCE_LINE}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
