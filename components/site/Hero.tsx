"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { CampaignStill } from "@/components/site/CampaignStill";
import { cn } from "@/lib/cn";

/**
 * Hero — cinematic "noche" opening.
 *
 * Legibility rule: the headline is always the protagonist. On desktop a real
 * screenshot appears as a *secondary* campaign still, offset and bleeding off
 * the right edge, scrimmed and faded into the background so it never competes
 * with the type. Mobile stays purely typographic, anchored to the bottom.
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
    hidden:  { opacity: 0, y: reduce ? 0 : 22 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="top"
      className={cn(
        "relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden",
        "bg-noche text-ivory",
        "lg:justify-start",
      )}
    >
      {/* Cinematic depth — a very subtle warm/green glow, not an AI gradient. */}
      <div aria-hidden className="hero-noche-glow pointer-events-none absolute inset-0" />

      {/* Desktop-only campaign still: secondary, off-edge, faded into the noche. */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block">
        <div className="absolute left-0 top-1/2 w-[118%] -translate-y-1/2 rotate-[1.4deg]">
          <CampaignStill
            src="/case-studies/sacaturno.png"
            alt="Pantalla de sacaturno.app: agenda semanal de turnos para un salón de estética."
            width={1167}
            height={781}
            url="sacaturno.app"
            scrim="recede"
            priority
            sizes="48vw"
          />
        </div>
        {/* Left edge fade so the headline never collides with a hard image edge. */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-noche via-noche/45 to-transparent" />
        {/* Bottom fade grounds the still into the section. */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-noche to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 pb-10 pt-[calc(var(--header-h)+1.5rem)] lg:mx-auto lg:max-w-[1240px] lg:px-12 lg:pb-24 lg:pt-[calc(var(--header-h)+3.25rem)]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-[640px]"
        >
          <motion.p
            variants={item}
            className="mb-6 flex items-center gap-2.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-ivory/55"
          >
            <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
            Estudio de producto digital · Independiente
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance font-sans text-[clamp(2.6rem,12vw,4.9rem)] font-extrabold leading-[0.97] tracking-[-0.04em] text-ivory lg:text-[clamp(2.7rem,6vw,5.1rem)]"
          >
            Productos digitales para{" "}
            {/* inline-block keeps the serif remate on its own line and gives the
                animated underline a proper containing block */}
            <span className="relative inline-block font-serif text-[1.02em] font-normal italic tracking-normal text-champagne">
              <em>negocios reales.</em>
              {!reduce && (
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.75, duration: 0.9, ease: [0.65, 0, 0.2, 1] }}
                  className="absolute -bottom-1 left-0 block h-[3px] w-full origin-left bg-champagne"
                />
              )}
              {reduce && (
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 block h-[3px] w-full bg-champagne"
                />
              )}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-[34ch] text-pretty text-[1.02rem] leading-relaxed text-ivory/65 lg:text-lg"
          >
            Para negocios que hoy funcionan con WhatsApp, planillas y memoria:
            construimos el sistema que los ordena — y crece con la operación.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9">
            {/* Mobile: full-width pill */}
            <a
              href="#contacto"
              className="flex min-h-[60px] w-full items-center justify-between gap-3 rounded-full bg-ivory px-7 font-sans text-[1rem] font-semibold text-charcoal transition-opacity duration-200 hover:opacity-90 lg:hidden"
            >
              <span>Hablemos</span>
              <span aria-hidden>→</span>
            </a>
            <a
              href="#casos"
              className="mt-4 block text-center font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ivory/45 lg:hidden"
            >
              VER LOS CASOS ↓
            </a>

            {/* Desktop: row */}
            <div className="hidden lg:flex lg:items-center lg:gap-4">
              <a
                href="#contacto"
                className="group inline-flex min-h-[52px] items-center gap-2 rounded-full bg-ivory px-7 font-sans text-sm font-semibold text-charcoal transition-opacity duration-200 hover:opacity-90"
              >
                Hablemos
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#casos"
                className="group inline-flex items-center gap-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ivory/60 transition-colors duration-200 hover:text-ivory"
              >
                Ver los casos
                <span aria-hidden className="text-operational-green transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
