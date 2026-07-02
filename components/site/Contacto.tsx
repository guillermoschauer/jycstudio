import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MAILTO_URL, SITE, WHATSAPP_URL } from "@/lib/site";

export function Contacto() {
  return (
    <section
      id="contacto"
      className="bg-dark-base pb-[calc(7rem+env(safe-area-inset-bottom))] pt-20 text-ivory sm:pb-[calc(9rem+env(safe-area-inset-bottom))] sm:pt-28 lg:pt-32"
    >
      <Container>
        <Reveal>
          <p className="flex items-center gap-2.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-stone">
            <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
            04 — Contacto
          </p>
        </Reveal>

        {/*
          H2 in 4 natural lines at mobile viewport widths:
          "¿Hay un" / "problema real" / "que debería" (italic gold) / "funcionar mejor?" (italic gold)
          Text naturally wraps; italic portion is the <em>.
        */}
        <Reveal delay={0.05}>
          <h2 className="mt-7 max-w-[13ch] text-balance font-sans text-[clamp(2.35rem,10vw,4.8rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-ivory">
            ¿Hay un problema real{" "}
            <em className="font-serif font-normal italic tracking-normal text-champagne">
              que debería funcionar mejor?
            </em>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-7 max-w-xl text-pretty text-[0.97rem] leading-relaxed text-ivory/65 lg:text-lg">
            Contanos qué está pasando. Sin formularios ni demos automáticas —
            hablamos como personas.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex max-w-lg flex-col gap-4">
            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative isolate flex min-h-[4.5rem] items-center justify-between gap-3 overflow-hidden rounded-[20px] bg-operational-green p-6 text-ivory transition-opacity duration-200 hover:opacity-90"
            >
              <div className="relative z-[1]">
                <p className="font-sans text-[1rem] font-medium">Escribir por WhatsApp</p>
                <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-ivory/65">
                  Respondemos el mismo día
                </p>
              </div>
              <span
                aria-hidden
                className="relative z-[1] text-xl transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                →
              </span>
              <span
                aria-hidden
                className="jyc-shimmer-band pointer-events-none absolute inset-y-0 left-0 z-0 w-[34%] bg-gradient-to-r from-transparent via-[rgba(243,238,228,0.3)] to-transparent"
              />
            </a>

            {/* Email */}
            <a
              href={MAILTO_URL}
              className="group flex min-h-[4.5rem] items-center justify-between gap-3 rounded-[20px] border border-[color:var(--color-hairline-dark)] bg-white/[0.02] p-6 text-ivory transition-opacity duration-200 hover:opacity-80"
            >
              <div>
                <p className="font-sans text-[1rem] font-medium">{SITE.email}</p>
                <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-stone">
                  Contanos el caso con calma
                </p>
              </div>
              <span
                aria-hidden
                className="text-xl text-stone transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
