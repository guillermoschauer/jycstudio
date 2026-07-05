import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_URL } from "@/lib/site";

/**
 * Mid-page imperative bar — the single saturated-color section on the page, so
 * it's instantly recognizable when scrolling. A short, direct statement (the
 * studio's thesis: start from the problem) with one clear WhatsApp CTA.
 */
export function MidCTA() {
  return (
    <section className="bg-operational-green text-ivory">
      <Container className="py-[76px] sm:py-20 lg:py-24">
        <Reveal>
          <div className="flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            {/* Statement */}
            <div className="max-w-2xl">
              <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ivory/60">
                ¿Te suena?
              </p>
              <h2 className="mt-5 text-balance font-sans text-[clamp(2.2rem,6vw,3.6rem)] font-extrabold leading-[1.03] tracking-[-0.03em] text-ivory">
                Si tu negocio vive en WhatsApp y planillas, necesitás ordenar cómo
                trabajás o mostrar mejor lo que hacés,{" "}
                <em className="font-serif font-normal italic tracking-normal">
                  empecemos por ahí.
                </em>
              </h2>
            </div>

            {/* CTA */}
            <div className="shrink-0">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[60px] w-full items-center justify-between gap-4 rounded-full bg-ivory px-7 font-sans text-[1rem] font-semibold text-charcoal transition-opacity duration-200 hover:opacity-90 sm:w-auto sm:pr-6"
              >
                <span>Escribir por WhatsApp</span>
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
              <p className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-ivory/55">
                Te respondemos en el día
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
