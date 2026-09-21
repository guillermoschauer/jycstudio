import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CAPABILITIES } from "@/lib/site";

/**
 * 02 — What we do. The first dark surface of the page, so the change of chapter
 * is unmistakable. Laid out as an editorial table: numeral, name, definition.
 * No cards, no icons — the hairlines do the grouping.
 */
export function QueHacemos() {
  return (
    <section id="que-hacemos" className="on-dark bg-carbon text-ivory">
      <Container className="py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow number="02" tone="dark">
              Qué hacemos
            </Eyebrow>
            <h2 className="mt-7 text-balance text-[clamp(2.1rem,8.5vw,2.9rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-ivory lg:text-[clamp(2.6rem,4vw,3.8rem)]">
              Cinco maneras de sacar trabajo del medio.
            </h2>
            <p className="mt-7 max-w-[54ch] text-pretty leading-relaxed text-gris lg:text-[1.1rem]">
              El resultado que buscamos no es una herramienta nueva. Es una
              operación que funciona mejor. Qué hace falta para llegar ahí lo
              define el problema, no el catálogo.
            </p>
          </Reveal>
        </div>

        <ol className="mt-14 lg:mt-20">
          {CAPABILITIES.map((cap, i) => (
            <Reveal as="li" key={cap.number} delay={Math.min(i * 0.05, 0.2)}>
              <div className="grid gap-x-10 gap-y-3 border-t border-[color:var(--color-hairline-dark)] py-8 lg:grid-cols-12 lg:py-10">
                <span
                  aria-hidden
                  className="nums text-[0.72rem] font-semibold text-verde-on-dark lg:col-span-1"
                >
                  {cap.number}
                </span>
                <h3 className="text-balance text-[1.35rem] font-extrabold leading-tight tracking-[-0.025em] text-ivory lg:col-span-4 lg:text-[1.6rem]">
                  {cap.title}
                </h3>
                <p className="max-w-[60ch] text-pretty leading-relaxed text-gris lg:col-span-7 lg:text-[1.05rem]">
                  {cap.text}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
