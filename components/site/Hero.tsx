"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Button } from "@/components/ui/Button";
import { CapabilitiesMarquee } from "@/components/site/CapabilitiesMarquee";
import { HeroCollage } from "@/components/site/HeroCollage";

/**
 * Hero con collage interactivo en desktop.
 * Mobile/tablet: columna única (copy + CTAs + marquee). Collage oculto.
 * Desktop (lg+): dos columnas. Columna izquierda: copy. Columna derecha: HeroCollage.
 */
export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 },
    },
  };

  const item: Variants = {
    hidden:   { opacity: 0, y: reduce ? 0 : 22 },
    visible:  {
      opacity: 1, y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[calc(var(--header-h)+2.25rem)] pb-14 sm:pb-16 lg:pt-[calc(var(--header-h)+2.5rem)]"
    >
      {/*
        Grid del hero.
        Mobile/tablet : columna única, padding normal.
        Desktop (lg+) : dos columnas flex, ancho máximo 1300px, gap 56px, alto mínimo 680px.
      */}
      <div className="mx-auto w-full max-w-[1300px] px-6 sm:px-10 lg:px-[60px] flex flex-col lg:flex-row lg:items-center lg:gap-14 lg:min-h-[680px]">

        {/* Columna izquierda: copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex-shrink-0 w-full lg:w-[440px]"
        >
          <motion.p
            variants={item}
            className="mb-6 flex items-center gap-2.5 font-mono text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-stone"
          >
            <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
            Estudio de producto digital · Independiente
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance font-sans text-[clamp(2.9rem,9vw,5.6rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-charcoal"
          >
            Productos digitales para{" "}
            <em className="font-serif text-[1.02em] font-normal italic tracking-normal">
              negocios reales.
            </em>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-ink-soft sm:text-lg"
          >
            Para negocios que hoy funcionan con WhatsApp, planillas y
            cuadernos: diseñamos y construimos el sistema que ordena turnos,
            reservas, ventas y stock — y crece con la operación.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#contacto" variant="primary" shimmer className="w-full sm:w-auto">
              Hablemos
            </Button>
            <Button href="#casos" variant="outline" className="w-full sm:w-auto">
              Ver casos
            </Button>
          </motion.div>
        </motion.div>

        {/* Columna derecha: collage interactivo (desktop only) */}
        <HeroCollage />

      </div>

      {/* Capabilities marquee (sin cambios) */}
      <CapabilitiesMarquee className="mt-11 sm:mt-14" />
    </section>
  );
}
