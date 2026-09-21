import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/site/ContactForm";
import { MAILTO_URL, SITE, WHATSAPP_URL } from "@/lib/site";

/**
 * 04 — The close. Dark surface so the page ends where it began in tone, with
 * the offer stated plainly: the conversation starts with the operation, not
 * with a product. Also rendered at the foot of every case page.
 */
export function Contacto() {
  return (
    <section
      id="contacto"
      className="on-dark bg-carbon pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-16 text-ivory sm:pb-[calc(6.5rem+env(safe-area-inset-bottom))] sm:pt-20 lg:pt-24"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-20">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow number="04" tone="dark">
                Contacto
              </Eyebrow>
              <h2 className="mt-7 max-w-[14ch] text-balance text-[clamp(2.2rem,9vw,3rem)] font-extrabold leading-[1.03] tracking-[-0.04em] text-ivory lg:text-[clamp(2.5rem,3.6vw,3.6rem)]">
                Hablemos de cómo funciona tu negocio.
              </h2>
              <p className="mt-7 max-w-[42ch] text-pretty leading-relaxed text-gris lg:text-[1.1rem]">
                No hace falta empezar con un software. Primero entendamos qué
                conviene mejorar.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-10 space-y-4 border-t border-[color:var(--color-hairline-dark)] pt-8">
                <p className="eyebrow text-[0.6rem] text-gris">Directo</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline gap-3 text-[1.05rem] text-ivory"
                >
                  <span className="relative">
                    WhatsApp
                    <span
                      aria-hidden
                      className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-verde-on-dark transition-transform duration-300 ease-out group-hover:scale-x-100"
                    />
                  </span>
                  <span
                    aria-hidden
                    className="text-verde-on-dark transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
                <a
                  href={MAILTO_URL}
                  className="group flex items-baseline gap-3 text-[1.05rem] text-ivory"
                >
                  <span className="relative">
                    {SITE.email}
                    <span
                      aria-hidden
                      className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-verde-on-dark transition-transform duration-300 ease-out group-hover:scale-x-100"
                    />
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.12} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
