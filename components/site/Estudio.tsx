import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { STUDIO_CHIPS } from "@/lib/site";

export function Estudio() {
  return (
    <section id="estudio" className="bg-ivory py-24 sm:py-32">
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

        {/* Proof in progress */}
        <Reveal delay={0.05}>
          <div className="mt-12 rounded-2xl border border-hairline bg-paper p-8 sm:p-10">
            <p className="overline flex items-center gap-2.5 text-champagne">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-operational-green" />
              Prueba en construcción
            </p>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
              Estamos construyendo productos propios y trabajando junto a negocios
              reales. Este espacio va a reunir resultados, aprendizajes y
              testimonios a medida que los proyectos entren en operación.
            </p>

            <ul className="mt-8 flex flex-wrap gap-2">
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
      </Container>
    </section>
  );
}
