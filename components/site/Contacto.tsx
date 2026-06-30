import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MAILTO_URL, SITE, WHATSAPP_URL } from "@/lib/site";

export function Contacto() {
  return (
    <section id="contacto" className="bg-dark-base pt-20 text-ivory sm:pt-28 lg:pt-32 pb-[calc(7rem+env(safe-area-inset-bottom))] sm:pb-[calc(9rem+env(safe-area-inset-bottom))]">
      <Container>
        <Reveal>
          <p className="overline flex items-center gap-2.5 text-stone">
            <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
            Contacto
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-7 max-w-4xl text-balance font-sans text-[clamp(2.6rem,5.6vw,4.8rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-ivory">
            ¿Hay un problema real{" "}
            <em className="font-serif font-normal italic tracking-normal text-champagne">que debería funcionar mejor?</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ivory/70">
            Contanos qué está pasando. Sin formularios ni demos automáticas —
            hablamos como personas.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {/* WhatsApp — operational green */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative isolate flex min-h-[8.5rem] flex-col justify-between overflow-hidden rounded-2xl bg-operational-green p-6 text-ivory transition-colors duration-300 hover:bg-[#27604f]"
            >
              <div className="relative z-[1] flex items-center justify-between gap-3">
                <span className="text-lg font-medium">Escribir por WhatsApp</span>
                <span
                  aria-hidden
                  className="text-xl transition-transform duration-300 ease-out group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
              <p className="relative z-[1] mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-ivory/70">
                Respondemos como personas · normalmente el mismo día
              </p>
              <span
                aria-hidden
                className="jyc-shimmer-band pointer-events-none absolute inset-y-0 left-0 z-0 w-[34%] bg-gradient-to-r from-transparent via-[rgba(243,238,228,0.34)] to-transparent"
              />
            </a>

            {/* Email — sober */}
            <a
              href={MAILTO_URL}
              className="group flex min-h-[8.5rem] flex-col justify-between rounded-2xl border border-[color:var(--color-hairline-dark)] bg-white/[0.02] p-6 text-ivory transition-colors duration-300 hover:bg-white/[0.05]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-lg font-medium">{SITE.email}</span>
                <span
                  aria-hidden
                  className="text-xl text-stone transition-transform duration-300 ease-out group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-stone">
                Escribinos por correo, contamos el caso con calma
              </p>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
