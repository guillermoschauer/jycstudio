"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/cn";

// ─── Content ──────────────────────────────────────────────────────────────────

const STEPS = [
  {
    number: "01",
    title: "Entender la operación.",
    text: "Miramos cómo trabaja hoy el negocio, dónde se pierde tiempo, qué se repite y qué termina resolviéndose por WhatsApp, planillas o memoria.",
  },
  {
    number: "02",
    title: "Encontrar el problema que vale resolver.",
    text: "No todo necesita una app. Buscamos el punto donde una mejora concreta puede ordenar, ahorrar tiempo o hacer crecer algo.",
  },
  {
    number: "03",
    title: "Pensar una solución simple.",
    text: "Definimos qué tiene que hacer el producto, qué puede esperar y cuál es la forma más clara de que alguien lo use de verdad.",
  },
  {
    number: "04",
    title: "Construir, probar y mejorar.",
    text: "Lanzamos algo real, lo usamos, escuchamos lo que pasa y lo seguimos ajustando hasta que tenga sentido en el día a día.",
  },
] as const;

// ─── Step block ───────────────────────────────────────────────────────────────

function StepBlock({
  step,
  isLast,
}: {
  step: (typeof STEPS)[number];
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Fires once when the block first scrolls into view → triggers the reveal
  const hasEntered = useInView(ref, { once: true, margin: "0px 0px -6% 0px" });

  // Fires repeatedly: true when the block occupies the active zone (center ~28% of viewport)
  const isActive = useInView(ref, {
    once: false,
    margin: "-36% 0px -36% 0px",
  });

  const targetOpacity = reduce ? 1 : !hasEntered ? 0 : isActive ? 1 : 0.28;
  const targetY       = reduce || hasEntered ? 0 : 14;

  return (
    <motion.div
      ref={ref}
      animate={{ opacity: targetOpacity, y: targetY }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative flex flex-col justify-center",
        "pl-10 lg:pl-16",
        "py-14 min-h-[46svh] sm:py-16 lg:py-[13vh] lg:min-h-[74vh]",
        !isLast && "border-b border-ivory/[0.07] lg:border-0",
      )}
    >
      {/* Dot on the progress line — desktop only */}
      <motion.span
        aria-hidden
        animate={{
          backgroundColor: isActive ? "rgba(46,111,94,1)" : "rgba(46,111,94,0)",
          scale:           isActive ? 1.15 : 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="hidden lg:block absolute left-0 top-1/2 -translate-x-[calc(50%-0.5px)] -translate-y-1/2 h-[10px] w-[10px] rounded-full border border-operational-green/55"
      />

      {/* Number */}
      <span
        aria-hidden
        className="font-mono text-[3.8rem] lg:text-[5.5rem] font-light leading-none text-operational-green/45 select-none tabular-nums"
      >
        {step.number}
      </span>

      {/* Title */}
      <h3 className="mt-4 lg:mt-6 text-balance font-sans text-[clamp(1.9rem,3.5vw,2.8rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-ivory">
        {step.title}
      </h3>

      {/* Body */}
      <p className="mt-5 max-w-[500px] text-pretty text-[1.05rem] lg:text-[1.12rem] leading-relaxed text-ivory/60">
        {step.text}
      </p>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function ComoTrabajamos() {
  const reduce     = useReducedMotion();
  const stepsRef   = useRef<HTMLDivElement>(null);

  // Drive the progress line fill as the steps column scrolls through the viewport
  const { scrollYProgress } = useScroll({
    target:  stepsRef,
    offset:  ["start 90%", "end 10%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="como-trabajamos" className="bg-dark-base">
      <div className="mx-auto w-full max-w-[1300px] lg:flex lg:items-start">

        {/* ── Left sticky column ── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -5% 0px" }}
          variants={{
            hidden:   {},
            visible:  {
              transition: {
                staggerChildren: reduce ? 0 : 0.09,
                delayChildren:   0.04,
              },
            },
          }}
          className={cn(
            "px-6 pt-20 pb-10 sm:px-10 sm:pt-24",
            "lg:w-[40%] lg:flex-shrink-0",
            "lg:sticky lg:top-[var(--header-h)]",
            "lg:h-[calc(100vh-var(--header-h))]",
            "lg:flex lg:flex-col lg:justify-center",
            "lg:px-[52px] lg:pt-0 lg:pb-0",
          )}
        >
          {/* Eyebrow */}
          <motion.p
            variants={{
              hidden:  { opacity: 0, y: reduce ? 0 : 12 },
              visible: {
                opacity: 1, y: 0,
                transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="overline flex items-center gap-2.5 text-stone"
          >
            <span
              aria-hidden
              className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green"
            />
            02 — Cómo trabajamos
          </motion.p>

          {/* Headline */}
          <motion.h2
            variants={{
              hidden:  { opacity: 0, y: reduce ? 0 : 18 },
              visible: {
                opacity: 1, y: 0,
                transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="mt-7 text-balance font-sans text-[clamp(2.4rem,3.8vw,3.3rem)] font-extrabold leading-[1.04] tracking-[-0.035em] text-ivory"
          >
            Primero entendemos{" "}
            <span className="block">
              <em className="font-serif font-normal italic tracking-normal text-champagne">
                qué hace falta.
              </em>
            </span>
          </motion.h2>

          {/* Support text */}
          <motion.p
            variants={{
              hidden:  { opacity: 0, y: reduce ? 0 : 12 },
              visible: {
                opacity: 1, y: 0,
                transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="mt-6 max-w-[340px] text-pretty text-[1.05rem] leading-relaxed text-ivory/60"
          >
            Antes de proponer una solución, miramos cómo funciona hoy el negocio:
            qué se hace a mano, dónde se pierde tiempo y qué conviene mejorar de
            verdad.
          </motion.p>
        </motion.div>

        {/* ── Right steps column ── */}
        <div
          ref={stepsRef}
          className="relative px-6 sm:px-10 lg:px-0 lg:w-[60%] pt-2 lg:pt-[14vh] pb-16 lg:pb-[18vh]"
        >
          {/* Line track — full height, very subtle */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-ivory/[0.07]"
          />

          {/* Line fill — grows with scroll progress */}
          {!reduce && (
            <motion.div
              aria-hidden
              style={{ scaleY: lineScaleY, transformOrigin: "top" }}
              className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-operational-green/50"
            />
          )}

          {STEPS.map((step, i) => (
            <StepBlock
              key={step.number}
              step={step}
              isLast={i === STEPS.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
