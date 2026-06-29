"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroPanel } from "@/components/mockups/HeroPanel";
import { HERO_CHIPS, HERO_PILLARS } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.05 },
    },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[calc(var(--header-h)+2.25rem)] pb-16 sm:pb-20 lg:pt-[calc(var(--header-h)+4.5rem)] lg:pb-24"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.p
              variants={item}
              className="mb-7 flex items-center gap-2.5 font-sans text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-stone"
            >
              <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
              Estudio de producto digital · Independiente
            </motion.p>

            <motion.h1
              variants={item}
              className="text-balance font-sans text-[clamp(3.4rem,7vw,6.2rem)] font-extrabold leading-[0.96] tracking-[-0.04em] text-charcoal"
            >
              Productos digitales para{" "}
              <em className="font-serif text-[1.05em] font-normal italic tracking-normal">
                negocios reales.
              </em>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              Para negocios que hoy funcionan con WhatsApp, planillas y
              cuadernos: diseñamos y construimos el sistema que ordena turnos,
              reservas, ventas y stock — y crece con la operación.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button href="#contacto" variant="primary">
                Hablemos
              </Button>
              <Button href="#casos" variant="outline">
                Ver casos
              </Button>
            </motion.div>

            {/* Capability chips */}
            <motion.div variants={item} className="mt-9">
              <ul className="flex flex-wrap gap-2">
                {HERO_CHIPS.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-hairline bg-paper px-3.5 py-1.5 text-xs text-ink-soft"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Operative panel */}
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: reduce ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <HeroPanel className="mx-auto max-w-[520px]" />
          </motion.div>
        </div>

        {/* Three pillars */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -12% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:mt-20 md:grid-cols-3"
        >
          {HERO_PILLARS.map((pillar) => (
            <div key={pillar.title} className="bg-ivory p-7 sm:p-8">
              <h2 className="font-sans text-lg font-semibold text-charcoal">
                {pillar.title}
              </h2>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-ink-soft">
                {pillar.text}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
