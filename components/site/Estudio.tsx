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

      {/* ── DESKTOP layout (md+) — museum spread, no cards ── */}
      <div className="hidden md:block">
        <Container className="py-24 sm:py-32 lg:py-40">
          <Reveal>
            <p className="overline flex items-center gap-2.5 text-stone">
              <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
              03 — El estudio
            </p>
            <h2 className="mt-7 max-w-[15ch] text-balance font-sans text-[clamp(2.6rem,5.5vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-charcoal">
              Un estudio chico,{" "}
              <em className="font-serif font-normal italic tracking-normal">a propósito.</em>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-x-16 gap-y-14 lg:mt-20 lg:grid-cols-12">
            {/* Human note + signature */}
            <Reveal className="lg:col-span-7">
              <p className="max-w-xl text-pretty font-sans text-2xl leading-[1.35] text-charcoal sm:text-[1.7rem]">
                No pasás por un comercial y después por otro equipo: la misma
                persona que entiende tu operación es la que diseña y construye la
                herramienta.
              </p>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
                Trabajamos cerca, en contexto real, y nos quedamos cuando el
                producto entra en operación. Escribís y te responde quien después
                construye.
              </p>

              {/* Signature */}
              <div className="mt-10 flex items-center gap-4">
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

            {/* "En qué andamos" — museum placard, not a card */}
            <Reveal delay={0.08} className="lg:col-span-4 lg:col-start-9 lg:border-l lg:border-hairline lg:pl-10">
              <p className="overline flex items-center gap-2.5 text-champagne">
                <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-operational-green" />
                En qué andamos
              </p>
              <ul className="mt-6 space-y-3">
                {STUDIO_CHIPS.map((chip) => (
                  <li
                    key={chip}
                    className="flex items-baseline gap-3 font-mono text-[0.8rem] tracking-[0.04em] text-ink-soft"
                  >
                    <span aria-hidden className="text-champagne">—</span>
                    {chip}
                  </li>
                ))}
              </ul>
              <p className="mt-7 max-w-xs text-pretty text-sm leading-relaxed text-stone">
                Productos propios y trabajos en curso junto a negocios reales.
                Vamos sumando resultados y aprendizajes a medida que entran en
                operación.
              </p>
            </Reveal>
          </div>
        </Container>
      </div>

    </section>
  );
}
