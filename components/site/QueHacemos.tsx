import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CAPABILITIES, FRICTIONS } from "@/lib/site";

/**
 * 01 — La situación y la respuesta, en una sola sección.
 *
 * Abre con la línea donde el lector se reconoce, no con una descripción de lo
 * que hacemos: primero tiene que pensar "esto me pasa". Las tres fricciones son
 * el espejo; las tres capacidades, la respuesta. Sin copy puente en el medio.
 *
 * `#problema` y `#para-quien` sobreviven como anclas: las dos fueron URLs vivas.
 */
export function QueHacemos() {
  return (
    <section id="que-hacemos" className="on-dark border-t border-hairline bg-carbon text-ivory">
      <span id="problema" aria-hidden className="block" />
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow number="01" tone="dark">
                Qué hacemos
              </Eyebrow>
              {/* La frase de reconocimiento es el titular de la sección. */}
              <h2
                id="para-quien"
                className="mt-6 max-w-[16ch] text-balance text-[clamp(1.9rem,7.5vw,2.5rem)] font-extrabold leading-[1.06] tracking-[-0.04em] lg:max-w-[20ch] lg:text-[clamp(2.2rem,3.1vw,3rem)]"
              >
                Si tu negocio depende de WhatsApp, planillas y memoria,{" "}
                <span className="text-verde-on-dark">hay mucho para mejorar.</span>
              </h2>
              <p className="mt-6 max-w-[48ch] text-pretty leading-relaxed text-gris">
                Cuando una empresa crece así, aparecen siempre los mismos
                problemas: información duplicada, seguimientos que se pierden y
                personas repitiendo tareas que podrían resolverse solas.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.06}>
              <ul className="border-t border-[color:var(--color-hairline-dark)] lg:mt-14">
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

        {/* El giro: de los síntomas a lo que hacemos con ellos. */}
        <Reveal delay={0.08}>
          <p className="mt-14 max-w-[22ch] text-balance text-[clamp(1.5rem,6vw,1.9rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ivory lg:mt-16 lg:max-w-[36ch] lg:text-[clamp(1.8rem,2.6vw,2.4rem)]">
            Menos tareas manuales. Menos errores.{" "}
            <span className="text-verde-on-dark">Menos tiempo perdido.</span>
          </p>
          <p className="mt-5 max-w-[54ch] text-pretty leading-relaxed text-gris">
            Revisamos cómo trabaja tu empresa y automatizamos lo que hoy te hace
            perder tiempo.
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
      </Container>
    </section>
  );
}
