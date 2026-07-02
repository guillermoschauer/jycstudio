"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { CapabilitiesMarquee } from "@/components/site/CapabilitiesMarquee";
import { HeroCollage } from "@/components/site/HeroCollage";
import { WHATSAPP_URL } from "@/lib/site";

/**
 * Hero section — dual-layout:
 *
 * Mobile: full-viewport height (100svh), copy anchored to the bottom,
 *   "Hablemos" full-width pill + "VER LOS CASOS ↓" mono text link.
 *   Green animated underline under "negocios reales." draws in on mount.
 *   Capabilities marquee hidden (replaced by MobileProductsTicker in page.tsx).
 *
 * Desktop (lg+): two-column flex, left copy + right interactive collage.
 *   Capabilities marquee shows at the bottom of the section.
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
      className={[
        "relative overflow-hidden",
        // Mobile: full viewport, content pushed to bottom via flex-col + justify-end
        "flex flex-col min-h-[100svh]",
        // Desktop: revert to block flow with standard padding
        "lg:block lg:min-h-0 lg:pt-[calc(var(--header-h)+2.5rem)] lg:pb-0",
      ].join(" ")}
    >
      {/*
        Mobile inner wrapper: flex-1 so it fills the viewport,
        justify-end so copy lands at the bottom. Padding-top leaves
        room for the fixed header.
        Desktop: static two-column layout.
      */}
      <div
        className={[
          // Mobile: fills remaining space + anchors content to bottom
          "flex-1 flex flex-col justify-end",
          "px-6 pt-[calc(var(--header-h)+1.5rem)] pb-10",
          // Desktop: side-by-side
          "lg:flex-none lg:flex-row lg:items-center lg:gap-14 lg:min-h-[680px]",
          "lg:mx-auto lg:w-full lg:max-w-[1300px]",
          "lg:px-[60px] lg:pt-0 lg:pb-0",
        ].join(" ")}
      >
        {/* Left col: copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex-shrink-0 w-full lg:w-[440px]"
        >
          <motion.p
            variants={item}
            className="mb-6 flex items-center gap-2.5 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-stone"
          >
            <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
            Estudio de producto digital · Independiente
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance font-sans text-[clamp(2.85rem,13.4vw,5.6rem)] font-extrabold leading-[0.97] tracking-[-0.04em] text-charcoal lg:text-[clamp(2.9rem,9vw,5.6rem)]"
          >
            Productos digitales para{" "}
            {/* inline-block keeps "negocios reales." together so it lands on its own line
                and gives the absolutely-positioned underline a proper containing block */}
            <span className="relative inline-block font-serif text-[1.02em] font-normal italic tracking-normal">
              <em>negocios reales.</em>
              {!reduce && (
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.75, duration: 0.9, ease: [0.65, 0, 0.2, 1] }}
                  className="absolute bottom-0 left-0 block h-[3px] w-full origin-left bg-operational-green"
                />
              )}
              {reduce && (
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 block h-[3px] w-full bg-operational-green"
                />
              )}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-[32ch] text-pretty text-[1.02rem] leading-relaxed text-ink-soft lg:max-w-xl lg:text-lg"
          >
            Para negocios que hoy funcionan con WhatsApp, planillas y
            memoria: construimos el sistema que los ordena — y crece con
            la operación.
          </motion.p>

          {/* CTAs — mobile: pill + text link stacked; desktop: row of buttons */}
          <motion.div variants={item} className="mt-8">
            {/* Mobile: full-width pill */}
            <a
              href="#contacto"
              className="flex min-h-[60px] w-full items-center justify-between gap-3 rounded-full bg-charcoal px-7 font-sans text-[1rem] font-semibold text-ivory transition-opacity duration-200 hover:opacity-85 lg:hidden"
            >
              <span>Hablemos</span>
              <span aria-hidden>→</span>
            </a>
            <a
              href="#casos"
              className="mt-4 block text-center font-mono text-[0.7rem] uppercase tracking-[0.18em] text-stone lg:hidden"
            >
              VER LOS CASOS ↓
            </a>

            {/* Desktop: row */}
            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <a
                href="#contacto"
                className="group inline-flex min-h-[48px] items-center gap-2 rounded-full bg-charcoal px-6 font-sans text-sm font-semibold text-ivory transition-opacity duration-200 hover:opacity-85"
              >
                Hablemos
                <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="#casos"
                className="inline-flex min-h-[48px] items-center rounded-full border border-hairline px-6 font-sans text-sm font-medium text-charcoal transition-colors duration-200 hover:border-champagne/60"
              >
                Ver casos
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right col: collage (desktop only) */}
        <HeroCollage />
      </div>

      {/* Capabilities marquee — desktop only; mobile uses MobileProductsTicker */}
      <CapabilitiesMarquee className="mt-11 hidden md:block sm:mt-14" />
    </section>
  );
}
