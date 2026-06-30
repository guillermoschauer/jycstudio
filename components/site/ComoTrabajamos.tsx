import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { APPROACH_STEPS } from "@/lib/site";

export function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="bg-paper py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Intro */}
          <Reveal>
            <p className="overline flex items-center gap-2.5 text-stone">
              <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
              Cómo trabajamos
            </p>
            <h2 className="mt-6 text-balance font-sans text-[clamp(2.2rem,4.6vw,3.6rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-charcoal">
              Primero entendemos el negocio.{" "}
              <em className="font-serif font-normal italic tracking-normal">Después construimos la solución.</em>
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-ink-soft">
              Un proceso corto y honesto, pensado para negocios reales. No
              entregamos y nos vamos: el producto evoluciona con la operación.
            </p>
          </Reveal>

          {/* Steps */}
          <div className="grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-2">
            {APPROACH_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.07}>
                <div className="flex h-full flex-col bg-paper p-7">
                  <span className="font-serif text-3xl text-champagne">{step.number}</span>
                  <h3 className="mt-4 font-sans text-lg font-semibold text-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2 flex-1 text-pretty text-[0.95rem] leading-relaxed text-ink-soft sm:text-sm">
                    {step.text}
                  </p>
                  <p className="overline mt-5 text-stone">{step.tag}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
