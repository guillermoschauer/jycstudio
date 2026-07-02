import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { STUDIO_CHIPS, TEAM } from "@/lib/site";

export function Estudio() {
  return (
    <section id="estudio" className="bg-ivory">

      {/* ── MOBILE layout (< md) — V1 reference spec ── */}
      <div className="px-6 py-20 md:hidden sm:px-8">
        <Reveal>
          <p className="flex items-center gap-2.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-stone">
            <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
            03 — El estudio
          </p>

          <h2 className="mt-6 text-balance font-sans text-[clamp(2.2rem,10vw,2.7rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-charcoal">
            Un estudio chico,{" "}
            <em className="block font-serif font-normal italic tracking-normal">
              a propósito.
            </em>
          </h2>

          <p className="mt-6 text-pretty text-[0.97rem] leading-relaxed text-ink-soft">
            No pasás por un comercial y después por otro equipo: la persona
            que entiende tu operación es la misma que diseña y construye. Y
            se queda cuando el producto entra en operación.
          </p>
        </Reveal>

        {/* Avatar block with top/bottom borders */}
        <Reveal delay={0.08}>
          <div className="mt-10 border-y border-hairline py-5">
            {TEAM.map((m) => (
              <div key={m.name} className="flex items-center gap-4">
                {m.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="h-[52px] w-[52px] rounded-full border border-hairline object-cover"
                  />
                ) : (
                  <div
                    aria-hidden
                    className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-hairline bg-charcoal font-sans text-sm font-semibold tracking-wide text-ivory"
                  >
                    {m.initials}
                  </div>
                )}
                <div>
                  <p className="font-sans text-[1rem] font-bold text-charcoal">
                    {m.name}
                  </p>
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-stone">
                    {m.role.replace(/,\s*/g, " · ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* "EN QUÉ ANDAMOS" tagline */}
        <Reveal delay={0.12}>
          <p className="mt-7 font-mono text-[0.62rem] uppercase leading-relaxed tracking-[0.12em] text-stone">
            En qué andamos —{" "}
            {STUDIO_CHIPS.map((chip, i) => (
              <span key={chip}>
                {chip}
                {i < STUDIO_CHIPS.length - 1 && " · "}
              </span>
            ))}
          </p>
        </Reveal>
      </div>

      {/* ── DESKTOP layout (md+) — existing grid ── */}
      <div className="hidden md:block">
        <Container className="py-20 sm:py-28 lg:py-32">
          <Reveal>
            <p className="overline flex items-center gap-2.5 text-stone">
              <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
              03 — El estudio
            </p>
            <h2 className="mt-6 max-w-3xl text-balance font-sans text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-charcoal">
              Un estudio chico,{" "}
              <em className="font-serif font-normal italic tracking-normal">a propósito.</em>
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            {/* Human note + signature */}
            <Reveal delay={0.05}>
              <p className="max-w-xl text-pretty font-sans text-xl leading-relaxed text-charcoal sm:text-2xl">
                No vas a pasar por un comercial y después por otro equipo: la
                misma persona que entiende tu operación es la que diseña y
                construye la herramienta.
              </p>
              <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
                Trabajamos cerca, en contexto real, y nos quedamos cuando el
                producto entra en operación. Escribís y te responde quien
                después construye.
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
      </div>

    </section>
  );
}
