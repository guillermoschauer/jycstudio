import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { STUDIO_CHIPS, TEAM } from "@/lib/site";

export function Estudio() {
  return (
    <section id="estudio" className="bg-ivory py-20 sm:py-28 lg:py-32">
      <Container>
        <Reveal>
          <p className="overline flex items-center gap-2.5 text-stone">
            <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
            El estudio
          </p>
          <h2 className="mt-6 max-w-3xl text-balance font-sans text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-charcoal">
            Independiente, cercano y construido con{" "}
            <em className="font-serif font-normal italic tracking-normal">negocios reales.</em>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Human note + signature */}
          <Reveal delay={0.05}>
            <p className="max-w-xl text-pretty font-sans text-xl leading-relaxed text-charcoal sm:text-2xl">
              Un estudio chico, a propósito. No vas a pasar por un comercial y
              después por otro equipo: la misma persona que entiende tu
              operación es la que diseña y construye la herramienta.
            </p>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
              Trabajamos cerca, en contexto real, y nos quedamos cuando el
              producto entra en operación. Escribís y te responde quien después
              construye.
            </p>

            {/* Signature */}
            <div className="mt-9 flex items-center gap-4">
              <div className="flex -space-x-2.5">
                {TEAM.map((m) =>
                  m.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={m.name}
                      src={m.photo}
                      alt={m.name}
                      className="h-12 w-12 rounded-full border-2 border-ivory object-cover"
                    />
                  ) : (
                    <div
                      key={m.name}
                      aria-hidden
                      className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ivory bg-charcoal font-sans text-sm font-semibold tracking-wide text-ivory"
                    >
                      {m.initials}
                    </div>
                  ),
                )}
              </div>
              <div className="space-y-0.5">
                {TEAM.map((m) => (
                  <p key={m.name} className="font-sans text-sm leading-snug">
                    <span className="font-semibold text-charcoal">{m.name}</span>
                    <span className="text-stone"> · {m.role}</span>
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* What we're working on */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-hairline bg-paper p-8 sm:p-9">
              <p className="overline flex items-center gap-2.5 text-champagne">
                <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-operational-green" />
                En qué andamos
              </p>
              <p className="mt-5 text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
                Productos propios y trabajos en curso junto a negocios reales.
                Vamos a ir sumando resultados, aprendizajes y testimonios a
                medida que los proyectos entran en operación.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2">
                {STUDIO_CHIPS.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-hairline bg-ivory px-3.5 py-1.5 font-mono text-xs tracking-wide text-ink-soft"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
