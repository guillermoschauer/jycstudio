import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FOUNDER } from "@/lib/site";

/**
 * Filosofía + quién está detrás, en un solo bloque.
 *
 * Eran dos secciones: una pantalla verde casi completa con la frase, y otra
 * aparte con el retrato. Las dos decían lo mismo desde ángulos distintos — que
 * hay criterio humano detrás de la tecnología — así que ahora la frase y la
 * persona que la sostiene comparten el bloque y se explican una a la otra.
 *
 * Sigue sin numeral: es el aparte, no un capítulo del argumento. El verde pasó
 * de fondo de pantalla completa a acento, que es lo que permite bajar el alto
 * sin perderlo como momento visual.
 *
 * `#manifiesto`, `#estudio` y `#quien-esta-detras` sobreviven como anclas.
 */
export function Manifiesto() {
  const { photo } = FOUNDER;

  return (
    <section
      id="manifiesto"
      aria-labelledby="manifiesto-titulo"
      className="border-t border-hairline bg-paper"
    >
      <span id="estudio" aria-hidden className="block" />
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-muted">Menos tareas. Más capacidad.</p>
              <p
                id="manifiesto-titulo"
                className="mt-6 max-w-[18ch] text-balance text-[clamp(2rem,8vw,2.7rem)] leading-[1.05] tracking-[-0.04em] lg:max-w-[22ch] lg:text-[clamp(2.4rem,3.6vw,3.3rem)]"
              >
                <span className="font-extrabold text-carbon">IA para quitar trabajo,</span>{" "}
                <span className="font-light text-verde">no necesariamente trabajadores.</span>
              </p>
              <p className="mt-6 max-w-[52ch] text-pretty leading-relaxed text-ink">
                La tecnología vale más cuando libera a las personas de lo
                repetitivo y las deja concentrarse en lo que necesita criterio,
                conversación y decisión.
              </p>
            </Reveal>
          </div>

          {/* Quién está detrás: la persona que sostiene lo de arriba. */}
          <div className="lg:col-span-5">
            <Reveal delay={0.08}>
              <div
                id="quien-esta-detras"
                className="flex items-start gap-5 border-t border-hairline pt-8 sm:gap-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
              >
                {/* Hairline, no marco decorativo: el fondo del retrato es casi
                    tan claro como la página y sin él se disuelve el borde. */}
                <div className="relative aspect-[4/5] w-[6.5rem] shrink-0 overflow-hidden rounded-lg border border-hairline sm:w-[8rem]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="8rem"
                    className="object-cover"
                    style={{ objectPosition: photo.focus }}
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-[1.02rem] font-semibold leading-snug text-carbon">
                    {FOUNDER.lead}
                  </p>
                  <p className="mt-3 text-pretty text-[0.92rem] leading-relaxed text-ink">
                    {FOUNDER.body[0]}
                  </p>
                  <p className="eyebrow mt-4 text-[0.55rem] text-muted">{FOUNDER.role}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
