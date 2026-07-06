"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Shimmer } from "@/components/ui/Shimmer";
import { WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Hero — light, editorial opening.
 *
 * Warm off-white surface with the headline as the absolute protagonist.
 * The secondary piece (lg+) is a quiet "ficha de archivo": a curated index of
 * real products and systems that opens the studio's universe instead of
 * spotlighting a single product screenshot. Green appears only as punctual
 * accents (numerals, dots, statuses); champagne stays in the drawn underline.
 */

// Curated index for the hero's secondary piece — real projects only.
const HERO_INDEX = [
  { name: "sacaturno.app",           cat: "Reservas y gestión",    status: "En uso",         live: true  },
  { name: "agendallena",             cat: "Turnos · Salud",        status: "En uso",         live: true  },
  { name: "Coparentar",              cat: "Organización familiar", status: "En uso",         live: true  },
  { name: "Panacity",                cat: "Operación comercial",   status: "En desarrollo",  live: false },
  { name: "Landings y experiencias", cat: "Marca y conversión",    status: null,             live: false },
] as const;

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
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ivory text-charcoal lg:min-h-[92svh]"
    >
      <div className="w-full px-6 pb-14 pt-[calc(var(--header-h)+2rem)] sm:px-8 lg:mx-auto lg:grid lg:max-w-[1240px] lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-12 lg:pb-20 lg:pt-[calc(var(--header-h)+3rem)]">

        {/* ── Main zone: the message ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-[620px] lg:col-span-7"
        >
          <motion.p
            variants={item}
            className="mb-7 flex items-center gap-2.5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-stone"
          >
            <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
            Estudio de producto digital · Independiente
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance font-sans text-[clamp(2.5rem,11.5vw,4.4rem)] font-extrabold leading-[1] tracking-[-0.04em] text-charcoal lg:text-[clamp(2.6rem,5vw,4.5rem)] lg:leading-[0.98]"
          >
            Productos digitales para{" "}
            {/* inline-block keeps the serif remate on its own line and gives the
                animated underline a proper containing block */}
            <span className="relative inline-block font-serif text-[1.04em] font-normal italic tracking-normal">
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
            className="mt-7 max-w-[36ch] text-pretty text-[1.02rem] leading-relaxed text-ink-soft lg:max-w-md lg:text-lg"
          >
            Para negocios que hoy funcionan con WhatsApp, planillas y memoria:
            construimos el sistema que los ordena — y crece con la operación.
          </motion.p>

          {/* CTAs — primary: projects; secondary: quiet WhatsApp link */}
          <motion.div variants={item} className="mt-10">
            {/* Mobile: stacked */}
            <a
              href="#casos"
              className="group relative isolate flex min-h-[60px] w-full items-center justify-between gap-3 overflow-hidden rounded-full bg-charcoal px-7 font-sans text-[1rem] font-semibold text-ivory transition-colors duration-300 hover:bg-[#2e2b24] md:hidden"
            >
              <span className="relative z-[1]">Ver proyectos</span>
              <span aria-hidden className="relative z-[1]">→</span>
              <Shimmer className="via-[rgba(243,238,228,0.25)]" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-center font-mono text-[0.7rem] uppercase tracking-[0.18em] text-stone transition-colors duration-200 hover:text-charcoal md:hidden"
            >
              Escribir por WhatsApp
            </a>

            {/* md+: row */}
            <div className="hidden md:flex md:items-center md:gap-7">
              <a
                href="#casos"
                className="group relative isolate inline-flex min-h-[52px] items-center overflow-hidden rounded-full bg-charcoal px-7 font-sans text-sm font-semibold text-ivory transition-colors duration-300 hover:bg-[#2e2b24]"
              >
                <span className="relative z-[1] inline-flex items-center gap-2">
                  Ver proyectos
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </span>
                <Shimmer className="via-[rgba(243,238,228,0.25)]" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-stone transition-colors duration-200 hover:text-charcoal"
              >
                Escribir por WhatsApp
                <span aria-hidden className="text-operational-green transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Secondary zone (lg+): ficha de archivo — curated index ── */}
        <motion.aside
          aria-label="Índice de productos y sistemas del estudio"
          initial={{ opacity: 0, y: reduce ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:col-span-4 lg:col-start-9 lg:block"
        >
          <div className="rounded-[20px] border border-hairline bg-paper p-7">
            <p className="flex items-baseline justify-between gap-3">
              <span className="font-mono text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-stone">
                Índice — selección
              </span>
              <span aria-hidden className="accent-rule" />
            </p>

            <ol className="mt-5">
              {HERO_INDEX.map((row, i) => (
                <li
                  key={row.name}
                  className={cn(
                    "flex items-baseline gap-4 py-3.5",
                    i > 0 && "border-t border-hairline",
                  )}
                >
                  <span className="w-5 shrink-0 font-mono text-[0.6rem] tabular-nums text-operational-green">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-sans text-[0.95rem] font-bold tracking-[-0.01em] text-charcoal">
                      {row.name}
                    </span>
                    <span className="mt-0.5 block font-mono text-[0.56rem] uppercase tracking-[0.12em] text-stone">
                      {row.cat}
                    </span>
                  </span>
                  {row.status && (
                    <span
                      className={cn(
                        "shrink-0 font-mono text-[0.55rem] uppercase tracking-[0.12em]",
                        row.live ? "text-operational-green" : "text-stone",
                      )}
                    >
                      {row.status}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-4 flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-stone">
            <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
            Del problema al producto en uso
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
