import { Reveal } from "@/components/ui/Reveal";

/**
 * Mobile-only dark manifesto block.
 * Positions between the product ticker and the cases section to bridge
 * "what we do" (hero) → "what we believe" → "what we've built" (cases).
 * Copy is taken verbatim from the V1 reference design.
 */
export function MobileManifesto() {
  return (
    <section
      aria-label="Filosofía del estudio"
      className="bg-dark-base px-6 py-14 md:hidden"
    >
      <Reveal>
        <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-operational-green">
          Cómo lo pensamos
        </p>

        <p className="mt-8 text-balance font-sans text-[2rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-ivory sm:text-[2.4rem]">
          Las webs lindas abundan.
        </p>

        <p className="mt-3 text-balance font-sans text-[2rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-ivory sm:text-[2.4rem]">
          Las herramientas que ordenan un negocio,{" "}
          <em className="font-serif font-normal italic tracking-normal text-champagne">
            no.
          </em>
        </p>

        <p className="mt-7 text-pretty text-[1.05rem] leading-relaxed text-ivory/55">
          Entendemos la operación, detectamos la fricción y construimos el
          producto que la resuelve. Diseño, tecnología y criterio — en la misma
          cabeza.
        </p>
      </Reveal>
    </section>
  );
}
