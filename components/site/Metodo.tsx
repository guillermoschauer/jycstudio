import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { METHOD_STEPS } from "@/lib/site";

/**
 * 03 — Method. The page's thesis gets the largest type on the site, and the
 * five stages read as an actual flow: one line, five nodes. Vertical on phones,
 * horizontal from `lg`.
 *
 * `id="como-trabajamos"` is kept as a second anchor so links shared under the
 * previous brand still land on the right section.
 */
export function Metodo() {
  return (
    <section id="metodo" className="border-t border-hairline bg-ivory">
      <span id="como-trabajamos" aria-hidden className="block scroll-mt-[var(--header-h)]" />
      <Container className="py-20 sm:py-28 lg:py-36">
        <Reveal>
          <Eyebrow number="03">Cómo trabajamos</Eyebrow>
        </Reveal>

        {/* The thesis. */}
        <Reveal delay={0.06}>
          {/* The measure lives on the paragraph: `ch` on the blockquote would be
              computed at the inherited 16px, not at the display size. */}
          <blockquote className="mt-10 lg:mt-14">
            <span aria-hidden className="mb-7 block h-px w-14 bg-verde" />
            <p className="max-w-[20rem] text-balance text-[clamp(2.2rem,9vw,3rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-carbon sm:max-w-[34rem] lg:max-w-[48rem] lg:text-[clamp(3rem,5vw,4.6rem)]">
              No empezamos preguntando qué software querés.{" "}
              <span className="text-verde">
                Empezamos preguntando cómo funciona tu negocio.
              </span>
            </p>
          </blockquote>
        </Reveal>

        {/* The flow. */}
        <ol className="relative mt-16 lg:mt-24 lg:grid lg:grid-cols-5 lg:gap-x-8">
          <span
            aria-hidden
            className="absolute bottom-3 left-[4px] top-3 w-px bg-hairline lg:bottom-auto lg:left-0 lg:right-0 lg:top-[4px] lg:h-px lg:w-auto"
          />

          {METHOD_STEPS.map((step, i) => (
            <Reveal
              as="li"
              key={step.number}
              delay={Math.min(i * 0.06, 0.3)}
              className="relative pb-10 pl-8 last:pb-0 lg:pb-0 lg:pl-0 lg:pt-8"
            >
              <span
                aria-hidden
                className="absolute left-0 top-[6px] block h-[9px] w-[9px] rounded-full border border-verde bg-ivory lg:top-0"
              />
              <p className="nums text-[0.7rem] font-semibold text-verde">{step.number}</p>
              <h3 className="eyebrow mt-3 text-[0.82rem] tracking-[0.14em] text-carbon">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[40ch] text-pretty text-[0.97rem] leading-relaxed text-ink">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
