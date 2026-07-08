"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { Shimmer } from "@/components/ui/Shimmer";
import { Wordmark } from "@/components/ui/Wordmark";
import { WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Hero — light editorial opening with the studio's core idea as a scene:
 *
 *   CAOS (chats, notas, planillas) → JYC STUDIO → SOLUCIÓN (landing + sistema)
 *
 * The headline stays the protagonist ("Mostramos lo que hacés. / Ordenamos
 * cómo trabajás."); the scene below illustrates it with the site's own
 * vocabulary — light cards with hairlines, mono micro-labels, charcoal node,
 * green only as accent. Built with DOM + tokens only (no images), decorative
 * for screen readers (the copy already says it), reduced-motion safe.
 */

// ─── Scene vignettes (illustrative content — deliberately generic) ────────────

function ChatCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-hairline bg-white p-3.5 shadow-[0_14px_30px_-16px_rgba(34,32,27,0.35)]",
        className,
      )}
    >
      <p className="w-fit rounded-lg rounded-bl-sm bg-[#efe8db] px-2.5 py-1.5 text-[0.78rem] leading-snug text-ink-soft">
        Hola! ¿Tenés lugar mañana?
      </p>
      <p className="mt-1.5 w-fit rounded-lg rounded-bl-sm bg-[#efe8db] px-2.5 py-1.5 text-[0.78rem] leading-snug text-ink-soft">
        ¿Y el precio del combo?
      </p>
      <p className="mt-2 whitespace-nowrap font-mono text-[0.55rem] uppercase tracking-[0.1em] text-stone">
        22:41 · sin responder
      </p>
    </div>
  );
}

function NoteCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[#e2d8c3] bg-[#f2ead8] p-3.5 shadow-[0_12px_26px_-14px_rgba(34,32,27,0.3)]",
        className,
      )}
    >
      <p className="font-mono text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-stone">
        No olvidar
      </p>
      <ul className="mt-1.5 space-y-0.5 text-[0.78rem] leading-snug text-ink-soft">
        <li>— Seña de Carla</li>
        <li>— Pedido del viernes</li>
        <li>— ¿Factura A?</li>
      </ul>
    </div>
  );
}

function SheetCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-hairline bg-white shadow-[0_12px_26px_-14px_rgba(34,32,27,0.3)]",
        className,
      )}
    >
      <div className="grid grid-cols-4 font-mono text-[0.55rem] uppercase tracking-[0.08em]">
        <span className="border-b border-hairline bg-paper px-2 py-1.5 text-stone">Turnos</span>
        <span className="border-b border-l border-hairline bg-paper px-2 py-1.5 text-stone">Lu</span>
        <span className="border-b border-l border-hairline bg-paper px-2 py-1.5 text-stone">Ma</span>
        <span className="border-b border-l border-hairline bg-paper px-2 py-1.5 text-stone">Mi</span>
        <span className="px-2 py-1.5 text-ink-soft">Mañana</span>
        <span className="border-l border-hairline px-2 py-1.5 text-ink-soft">8</span>
        <span className="border-l border-hairline px-2 py-1.5 text-ink-soft">5</span>
        <span className="border-l border-hairline px-2 py-1.5 text-terracotta">¿?</span>
      </div>
    </div>
  );
}

function MissedChip({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "w-fit rounded-full border border-hairline bg-white px-3 py-1.5 font-mono text-[0.58rem] uppercase tracking-[0.1em] text-terracotta shadow-[0_10px_22px_-12px_rgba(34,32,27,0.3)]",
        className,
      )}
    >
      2 llamadas perdidas
    </p>
  );
}

function JycNode({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center rounded-[20px] bg-charcoal text-ivory shadow-[0_26px_50px_-22px_rgba(34,32,27,0.55)]",
        compact ? "px-6 py-4" : "px-8 py-6",
      )}
    >
      <span
        aria-hidden
        className="absolute right-3 top-3 inline-block h-[6px] w-[6px] rounded-full bg-operational-green"
      />
      <Wordmark className={compact ? "text-[1.05rem]" : "text-[1.3rem]"} />
      <p
        className={cn(
          "mt-1.5 whitespace-nowrap font-mono font-semibold uppercase tracking-[0.16em] text-ivory/55",
          compact ? "text-[0.5rem]" : "text-[0.55rem]",
        )}
      >
        Diseño + desarrollo
      </p>
    </div>
  );
}

/** Title + colored mono caption that names each output explicitly. */
function OutputLabel({
  title,
  caption,
  tone,
  compact = false,
}: {
  title: string;
  caption: string;
  tone: "champagne" | "green";
  compact?: boolean;
}) {
  return (
    <div className={compact ? "mb-1.5" : "mb-2"}>
      <p
        className={cn(
          "font-sans font-bold leading-tight text-charcoal",
          compact ? "text-[0.78rem]" : "text-[0.85rem]",
        )}
      >
        {title}
      </p>
      <p
        className={cn(
          "mt-0.5 font-mono text-[0.55rem] font-semibold uppercase tracking-[0.16em]",
          tone === "champagne" ? "text-champagne" : "text-operational-green",
        )}
      >
        {caption}
      </p>
    </div>
  );
}

function LandingMini({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-hairline bg-white shadow-[0_18px_40px_-20px_rgba(34,32,27,0.35)]",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-hairline bg-paper px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-stone/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-stone/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-stone/30" />
      </div>
      <div className="p-3.5">
        <div className="h-2.5 w-4/5 rounded-full bg-charcoal" />
        <div className="mt-2 h-1.5 w-full rounded-full bg-charcoal/15" />
        <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-charcoal/15" />
        <div className="mt-3 flex h-6 w-20 items-center justify-center rounded-full bg-operational-green">
          <span className="font-sans text-[0.6rem] font-semibold text-ivory">Hablemos</span>
        </div>
      </div>
    </div>
  );
}

function AgendaMini({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-hairline bg-white p-3.5 shadow-[0_18px_40px_-20px_rgba(34,32,27,0.35)]",
        className,
      )}
    >
      <p className="font-mono text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-stone">
        Hoy · Agenda
      </p>
      <ul className="mt-2 space-y-1.5">
        {[
          { time: "10:00", label: "Carla M.",    on: true  },
          { time: "11:30", label: "Nuevo turno", on: true  },
          { time: "13:00", label: "Libre",       on: false },
        ].map((row) => (
          <li key={row.time} className="flex items-center gap-2 text-[0.75rem] leading-none">
            <span className="font-mono text-[0.62rem] tabular-nums text-stone">{row.time}</span>
            <span className={cn("flex-1", row.on ? "font-medium text-charcoal" : "text-stone")}>
              {row.label}
            </span>
            <span
              className={cn(
                "inline-block h-[5px] w-[5px] rounded-full",
                row.on ? "bg-operational-green" : "border border-stone/50",
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function SceneCaption({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "font-mono text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-stone",
        className,
      )}
    >
      {children}
    </p>
  );
}

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <span className="font-sans text-xl leading-none text-operational-green">
      {down ? "↓" : "→"}
    </span>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

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

  // Scene zones slide toward the node (chaos from the left, result from the right).
  const sceneZone = (x: number): Variants => ({
    hidden:  { opacity: 0, x: reduce ? 0 : x },
    visible: {
      opacity: 1, x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ivory text-charcoal lg:min-h-[92svh]"
    >
      <div className="w-full px-6 pb-14 pt-[calc(var(--header-h)+2rem)] sm:px-8 lg:mx-auto lg:max-w-[1240px] lg:px-12 lg:pb-16 lg:pt-[calc(var(--header-h)+2.75rem)]">

        {/* ── The message ── */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="mb-6 flex items-center gap-2.5 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-stone"
          >
            <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
            Estudio de producto digital · Independiente
          </motion.p>

          <motion.h1
            variants={item}
            className="max-w-[900px] text-balance font-sans text-[clamp(2.3rem,9.6vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-charcoal lg:text-[clamp(2.7rem,4.4vw,3.9rem)]"
          >
            {/* Color code ties the headline to the scene's two outputs:
                champagne = mostrar (landing) · green = ordenar (sistema) */}
            Mostramos{" "}
            <span className="relative inline-block">
              lo que hacés.
              {!reduce && (
                <motion.span
                  aria-hidden
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.8, ease: [0.65, 0, 0.2, 1] }}
                  className="absolute -bottom-1 left-0 block h-[3px] w-full origin-left bg-champagne"
                />
              )}
              {reduce && (
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 block h-[3px] w-full bg-champagne"
                />
              )}
            </span>{" "}
            <span className="block font-serif text-[1.04em] font-normal italic tracking-normal">
              Ordenamos{" "}
              {/* inline-block keeps the underlined pair together across wraps */}
              <span className="relative inline-block">
                cómo trabajás.
                {!reduce && (
                  <motion.span
                    aria-hidden
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.05, duration: 0.8, ease: [0.65, 0, 0.2, 1] }}
                    className="absolute -bottom-1 left-0 block h-[3px] w-full origin-left bg-operational-green"
                  />
                )}
                {reduce && (
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 block h-[3px] w-full bg-operational-green"
                  />
                )}
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-[38ch] text-pretty text-[1.02rem] leading-relaxed text-ink-soft lg:max-w-xl lg:text-lg"
          >
            Una landing que muestra lo que hacés y un sistema que ordena tu día
            a día — para negocios que hoy funcionan con WhatsApp, planillas y
            memoria.
          </motion.p>

          {/* CTAs — primary: WhatsApp (green); secondary: projects */}
          <motion.div variants={item} className="mt-8">
            {/* Mobile: stacked */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative isolate flex min-h-[60px] w-full items-center justify-between gap-3 overflow-hidden rounded-full bg-operational-green px-7 font-sans text-[0.98rem] font-semibold text-ivory transition-opacity duration-200 hover:opacity-90 md:hidden"
            >
              <span className="relative z-[1]">Contame tu caso por WhatsApp</span>
              <span aria-hidden className="relative z-[1]">→</span>
              <Shimmer className="via-[rgba(243,238,228,0.3)]" />
            </a>
            <a
              href="#casos"
              className="mt-4 block text-center font-mono text-[0.7rem] uppercase tracking-[0.18em] text-stone transition-colors duration-200 hover:text-charcoal md:hidden"
            >
              Ver proyectos ↓
            </a>

            {/* md+: row */}
            <div className="hidden md:flex md:items-center md:gap-7">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative isolate inline-flex min-h-[52px] items-center overflow-hidden rounded-full bg-operational-green px-7 font-sans text-sm font-semibold text-ivory transition-opacity duration-200 hover:opacity-90"
              >
                <span className="relative z-[1] inline-flex items-center gap-2">
                  Contame tu caso por WhatsApp
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
                </span>
                <Shimmer className="via-[rgba(243,238,228,0.3)]" />
              </a>
              <a
                href="#casos"
                className="group inline-flex items-center gap-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.18em] text-stone transition-colors duration-200 hover:text-charcoal"
              >
                Ver proyectos
                <span aria-hidden className="text-operational-green transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ── The scene: caos → JYC → solución (decorative; the copy says it) ── */}

        {/* Desktop (lg+): horizontal, three moments */}
        <motion.div
          aria-hidden
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mt-14 hidden items-center justify-center gap-4 lg:flex xl:gap-8"
        >
          {/* 1 · Chaos — rotated, loosely stacked */}
          <motion.div variants={sceneZone(-18)} className="w-[330px] shrink-0 xl:w-[400px]">
            <SceneCaption>Entra — el día a día</SceneCaption>
            <div className="mt-3 flex items-start gap-2.5 xl:gap-3">
              <ChatCard className="w-[185px] shrink-0 -rotate-2 xl:w-[215px]" />
              <div className="flex min-w-0 flex-col items-start gap-2.5 pt-3">
                <MissedChip className="rotate-2 whitespace-nowrap" />
                <NoteCard className="w-[135px] rotate-[2.5deg] xl:w-[165px]" />
              </div>
            </div>
            <SheetCard className="-mt-1.5 ml-7 w-[215px] -rotate-1 xl:w-[240px]" />
          </motion.div>

          <Arrow />

          {/* 2 · JYC — the transformation node */}
          <motion.div variants={sceneZone(0)} className="shrink-0">
            <JycNode />
          </motion.div>

          <Arrow />

          {/* 3 · Result — straight, clean, the two outputs named */}
          <motion.div variants={sceneZone(18)} className="w-[330px] shrink-0 xl:w-[400px]">
            <SceneCaption className="text-right">Sale — listo para usar</SceneCaption>
            <div className="mt-3 flex items-start justify-end gap-3 xl:gap-4">
              <div className="w-[155px] xl:w-[190px]">
                <OutputLabel title="Landing page" caption="Para mostrar" tone="champagne" />
                <LandingMini />
              </div>
              <div className="mt-6 w-[165px] xl:w-[195px]">
                <OutputLabel title="Sistema · agenda" caption="Para ordenar" tone="green" />
                <AgendaMini />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile / tablet (< lg): vertical, simplified */}
        <motion.div
          aria-hidden
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -8% 0px" }}
          className="mt-12 flex flex-col items-center lg:hidden"
        >
          <motion.div variants={item} className="w-[290px]">
            <SceneCaption>Entra — el día a día</SceneCaption>
            <ChatCard className="mt-3 w-[195px] -rotate-2" />
            <NoteCard className="-mt-4 ml-auto w-[150px] rotate-2" />
            <MissedChip className="-mt-1 -rotate-1" />
          </motion.div>

          <motion.div variants={item} className="my-3">
            <Arrow down />
          </motion.div>

          <motion.div variants={item}>
            <JycNode compact />
          </motion.div>

          <motion.div variants={item} className="my-3">
            <Arrow down />
          </motion.div>

          <motion.div variants={item} className="flex items-start gap-3">
            <div className="w-[158px]">
              <OutputLabel title="Landing page" caption="Para mostrar" tone="champagne" compact />
              <LandingMini />
            </div>
            <div className="w-[165px]">
              <OutputLabel title="Sistema · agenda" caption="Para ordenar" tone="green" compact />
              <AgendaMini />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
