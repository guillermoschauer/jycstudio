import { Reveal } from "@/components/ui/Reveal";

/**
 * Mobile-only dark manifesto block (V1 reference spec).
 * 110px vertical padding, 3-part structure:
 *  1. Muted first statement (weight 500, translucent)
 *  2. Bold white statement + italic gold "no."
 *  3. Supporting paragraph
 * Copy is verbatim from the V1 reference design.
 */
export function MobileManifesto() {
  return (
    <section
      aria-label="Filosofía del estudio"
      className="bg-dark-base px-6 py-[110px] md:hidden sm:px-8"
    >
      <Reveal>
        <p className="text-balance font-sans text-[clamp(1.8rem,8vw,2.2rem)] font-medium leading-[1.06] tracking-[-0.025em] text-ivory/50">
          Las webs lindas abundan.
        </p>

        <p className="mt-3 text-balance font-sans text-[clamp(1.8rem,8vw,2.2rem)] font-extrabold leading-[1.06] tracking-[-0.025em] text-ivory">
          Las herramientas que ordenan un negocio,{" "}
          <em className="font-serif font-normal italic tracking-normal text-champagne">
            no.
          </em>
        </p>

        <p className="mt-7 max-w-[34ch] text-pretty text-[0.97rem] leading-relaxed text-ivory/55">
          Entendemos la operación, detectamos la fricción y construimos el
          producto que la resuelve. Diseño, tecnología y criterio — en la misma
          cabeza.
        </p>
      </Reveal>
    </section>
  );
}
