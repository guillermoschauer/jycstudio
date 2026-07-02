import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_URL } from "@/lib/site";

/**
 * Mid-page green CTA band — visible on all screen sizes.
 * Matches the V1 reference: full-bleed operational-green section,
 * conversational headline, WhatsApp pill, and micro-copy.
 */
export function MidCTA() {
  return (
    <section className="bg-operational-green px-6 py-[76px] sm:px-8 sm:py-24">
      <Reveal>
        <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-ivory/60">
          ¿Te suena?
        </p>

        <h2 className="mt-5 max-w-[15ch] text-balance font-sans text-[clamp(2.2rem,10vw,2.7rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-ivory">
          Si tu operación vive en WhatsApp y planillas,{" "}
          <em className="font-serif font-normal italic tracking-normal">hablemos.</em>
        </h2>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 flex min-h-[60px] w-full items-center justify-between gap-3 rounded-full bg-ivory px-7 font-sans text-[1rem] font-semibold text-charcoal transition-opacity duration-200 hover:opacity-90 sm:w-auto sm:pr-6"
        >
          <span>Escribir por WhatsApp</span>
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>

        <p className="mt-6 text-center font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ivory/55 sm:text-left">
          Respondemos como personas · el mismo día
        </p>
      </Reveal>
    </section>
  );
}
