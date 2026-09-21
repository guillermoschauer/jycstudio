"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Isotype } from "@/components/ui/Isotype";
import { Button } from "@/components/ui/Button";
import { SITE, WHATSAPP_URL } from "@/lib/site";

/**
 * Hero — pure typography. No product illustration, no dashboard, no scene:
 * the weight sits on the statement, the brand and the whitespace around them.
 * The only ornaments are one green rule, the accent on the final line, and a
 * very faint isotype anchoring the right edge from `lg` up.
 */
export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.04 },
    },
  };

  const item: Variants = {
    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduce ? { duration: 0 } : { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const pillars = SITE.tagline.split(" · ");

  return (
    <section
      id="top"
      // Deliberadamente por debajo de la pantalla completa: dejar asomar el
      // borde de la sección siguiente le dice al que llega que hay más abajo,
      // sin restarle presencia al titular.
      className="relative flex min-h-[84svh] flex-col overflow-hidden bg-ivory text-carbon lg:min-h-[82svh]"
    >
      {/* Oversized mark, barely there — desktop composition only. */}
      <Isotype className="pointer-events-none absolute right-4 top-1/2 hidden h-[24rem] w-[24rem] -translate-y-1/2 text-carbon opacity-[0.05] lg:block xl:right-16 xl:h-[28rem] xl:w-[28rem]" />

      <div className="relative mx-auto flex w-full max-w-[1240px] flex-1 flex-col justify-center px-6 pb-10 pt-[calc(var(--header-h)+2rem)] sm:px-8 lg:px-12 lg:pb-12">
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item} className="flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-verde" />
            <p className="eyebrow text-muted">{SITE.name.toUpperCase()}</p>
          </motion.div>

          {/* La promesa concreta pasa a ser el H1; el descriptor de marca queda
              debajo, con presencia propia pero claramente en segundo nivel. */}
          <motion.h1
            variants={item}
            // La escala móvil la fija la línea más larga ("Menos tareas
            // manuales.", 22 caracteres): si no entra entera, el titular se
            // parte al medio de una frase y deja de leerse como tres promesas.
            className="mt-7 text-[clamp(1.4rem,7.2vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-0.045em] lg:mt-9 lg:text-[clamp(3rem,5vw,4.6rem)]"
          >
            <span className="block">Menos tareas manuales.</span>
            <span className="block">Menos errores.</span>
            <span className="block text-verde">Menos tiempo perdido.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-[26ch] text-balance text-[1.15rem] font-semibold leading-snug tracking-[-0.02em] text-carbon lg:mt-7 lg:max-w-none lg:text-[1.45rem]"
          >
            {SITE.claim}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-[44ch] text-pretty leading-relaxed text-ink lg:mt-6 lg:max-w-[60ch] lg:text-[1.08rem]"
          >
            {SITE.heroSubhead}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-5 lg:mt-12"
          >
            <Button href={WHATSAPP_URL} external block>
              Quiero ver qué puedo mejorar
            </Button>
            <a
              href="#casos"
              className="group inline-flex min-h-[3.25rem] items-center justify-center gap-2 text-[0.95rem] font-medium text-ink transition-colors duration-200 hover:text-carbon sm:justify-start"
            >
              <span className="relative">
                Ver casos reales
                <span
                  aria-hidden
                  className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-verde transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </span>
              <span
                aria-hidden
                className="text-verde transition-transform duration-300 ease-out group-hover:translate-x-0.5"
              >
                ↓
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Pillars — the board's descriptor, used as the hero's footing. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: reduce ? 0 : 0.5 }}
        className="relative border-t border-hairline"
      >
        <ul className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center gap-x-4 gap-y-2 px-6 py-5 sm:gap-x-8 sm:px-8 lg:px-12">
          {pillars.map((pillar) => (
            <li
              key={pillar}
              className="eyebrow flex items-center gap-2 text-[0.6rem] tracking-[0.14em] text-muted sm:gap-2.5 sm:text-[0.7rem] sm:tracking-[0.22em]"
            >
              <span aria-hidden className="inline-block h-[4px] w-[4px] rounded-full bg-verde" />
              {pillar}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
