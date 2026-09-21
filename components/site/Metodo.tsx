import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { METHOD_STEPS } from "@/lib/site";

/**
 * 02 — Method. The thesis keeps the largest type on the page; the five stages
 * are now microtext on one line, because the point of this section is that the
 * order exists, not what happens inside each step. The paragraphs that used to
 * sit under each stage repeated what the previous section already said.
 *
 * `#como-trabajamos` stays as a second anchor for links shared under the
 * previous brand.
 */
export function Metodo() {
  return (
    <section id="metodo" className="border-t border-hairline bg-paper">
      <span id="como-trabajamos" aria-hidden className="block" />
      <Container className="py-16 sm:py-20 lg:py-24">
        <Reveal>
          <Eyebrow number="02">Cómo trabajamos</Eyebrow>
        </Reveal>

        <Reveal delay={0.06}>
          <blockquote className="mt-8 lg:mt-10">
            <p className="max-w-[20rem] text-balance text-[clamp(1.9rem,7.5vw,2.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-carbon sm:max-w-[32rem] lg:max-w-[44rem] lg:text-[clamp(2.4rem,4vw,3.4rem)]">
              No empezamos preguntando qué software querés.{" "}
              <span className="text-verde">Empezamos preguntando cómo funciona tu negocio.</span>
            </p>
          </blockquote>
        </Reveal>

        {/* The flow: one line, five nodes. Vertical on phones, horizontal from lg. */}
        <ol className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-5 lg:gap-x-6">
          <span
            aria-hidden
            className="absolute bottom-3 left-[4px] top-3 w-px bg-hairline lg:bottom-auto lg:left-0 lg:right-0 lg:top-[4px] lg:h-px lg:w-auto"
          />

          {METHOD_STEPS.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={Math.min(i * 0.05, 0.25)}
              className="relative pb-7 pl-8 last:pb-0 lg:pb-0 lg:pl-0 lg:pt-7"
            >
              <span
                aria-hidden
                className="absolute left-0 top-[6px] block h-[9px] w-[9px] rounded-full border border-verde bg-paper lg:top-0"
              />
              <h3 className="eyebrow text-[0.8rem] tracking-[0.14em] text-carbon">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[30ch] text-pretty text-[0.92rem] leading-snug text-ink">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
