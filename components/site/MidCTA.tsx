import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/lib/site";

/**
 * Slim contact nudge placed mid-page (after the cases) so contact intent does
 * not live only at the very bottom. Light on purpose — the full dark Contacto
 * section still closes the page.
 */
export function MidCTA() {
  return (
    <section className="bg-ivory">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 rounded-2xl border border-hairline bg-paper px-7 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-10 sm:py-9">
            <div>
              <p className="overline flex items-center gap-2.5 text-champagne">
                <span
                  aria-hidden
                  className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green"
                />
                ¿Tu caso se parece a alguno de estos?
              </p>
              <p className="mt-3 max-w-xl text-pretty font-sans text-xl font-semibold leading-snug tracking-[-0.01em] text-charcoal sm:text-[1.6rem]">
                Contanos qué está pasando en tu operación. Te respondemos como
                personas, normalmente el mismo día.
              </p>
            </div>
            <Button
              href={WHATSAPP_URL}
              external
              variant="primary"
              className="shrink-0"
            >
              Escribir por WhatsApp
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
