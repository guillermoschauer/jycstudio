import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/**
 * The page's only saturated surface — an interlude, not a chapter, so it carries
 * no numeral. The weight contrast inside the statement is the same device as the
 * wordmark: heavy first half, light second half.
 *
 * `id="estudio"` is kept as a legacy anchor from the previous brand's nav.
 */
export function Manifiesto() {
  return (
    <section
      id="manifiesto"
      aria-labelledby="manifiesto-titulo"
      className="on-dark bg-verde text-ivory"
    >
      <span id="estudio" aria-hidden className="block scroll-mt-[var(--header-h)]" />
      <Container className="py-24 sm:py-32 lg:py-40">
        <Reveal>
          <p className="eyebrow text-ivory/90">Menos tareas. Más capacidad.</p>
          <p
            id="manifiesto-titulo"
            className="mt-9 max-w-[16ch] text-balance text-[clamp(2.3rem,9.5vw,3.2rem)] leading-[1.02] tracking-[-0.045em] lg:mt-12 lg:max-w-[20ch] lg:text-[clamp(3.2rem,5.6vw,5rem)]"
          >
            <span className="font-extrabold">IA para quitar trabajo,</span>{" "}
            <span className="font-light text-ivory/90">
              no necesariamente trabajadores.
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-10 max-w-[58ch] text-pretty leading-relaxed text-ivory/90 lg:mt-14 lg:text-[1.15rem]">
            La tecnología tiene más valor cuando libera a las personas de tareas
            repetitivas y les permite concentrarse en lo que necesita criterio,
            conversación, creatividad y decisión.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
