"use client";

import { useRef } from "react";
import { useReducedMotion } from "motion/react";
import {
  useCollage,
  PROJECTS,
  SLOTS,
  NAV_KEYS,
  type ProjectKey,
} from "@/components/hooks/useCollage";

/**
 * HeroCollage — "living product wall" interactivo.
 *
 * Desktop (≥ 1024px): tres capturas en composición editorial stack.
 *   • Click en tarjeta → la trae al frente.
 *   • Click en nav → cambia el set activo con fade.
 *   • Drag (solo pointer, no touch) con snap al soltar.
 *   • Tab + Enter/Space para accesibilidad de teclado.
 *
 * Mobile/tablet: componente oculto vía `hidden lg:block`.
 */
export function HeroCollage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { state, liftCard, switchTo, onPointerDown, onCardKeyDown, onNavKeyDown } =
    useCollage(containerRef);
  const { activeKey, displaySet, cards, fading, hasInteracted } = state;

  // ── Helpers de estilo ──────────────────────────────────────────────────

  const cardShadow = (idx: number) =>
    idx === 1
      ? "0 28px 72px -20px rgba(34,32,27,.46), 0 8px 24px rgba(34,32,27,.12)"
      : "0 16px 48px -12px rgba(34,32,27,.30), 0 4px 14px rgba(34,32,27,.09)";

  const cardTransition = () =>
    reducedMotion
      ? "none"
      : "left .45s cubic-bezier(.25,.46,.45,.94), top .45s cubic-bezier(.25,.46,.45,.94), box-shadow .3s ease, transform .3s ease";

  const wrapperTransition = reducedMotion
    ? "none"
    : "opacity .5s cubic-bezier(.4,0,.2,1), transform .5s cubic-bezier(.4,0,.2,1)";

  // ── Render ─────────────────────────────────────────────────────────────

  return (
    <div
      ref={containerRef}
      className="relative hidden lg:block self-stretch flex-1"
      aria-label="Colección de proyectos — explorable"
    >
      {/* Wrapper de cards: se desvanece en cada cambio de set */}
      <div
        aria-hidden={fading}
        style={{
          position:   "absolute",
          inset:      0,
          opacity:    fading ? 0 : 1,
          transform:  fading ? "translateY(8px)" : "translateY(0)",
          transition: wrapperTransition,
        }}
      >
        {([0, 1, 2] as const).map(idx => {
          const slot = SLOTS[idx];
          const card = cards[idx];
          const proj = PROJECTS[displaySet[idx]];

          return (
            <div
              key={idx}
              role="button"
              tabIndex={0}
              aria-label={`${proj.label} — explorar proyecto`}
              onPointerDown={e => onPointerDown(idx, e)}
              onClick={() => liftCard(idx)}
              onKeyDown={e => onCardKeyDown(idx, e)}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--operational-green)] focus-visible:ring-offset-2"
              style={{
                position:     "absolute",
                left:         card.x,
                top:          card.y,
                width:        slot.width,
                zIndex:       card.z,
                borderRadius: slot.borderRadius,
                overflow:     "hidden",
                border:       `1px solid rgba(34,32,27,${idx === 1 ? ".11" : ".10"})`,
                boxShadow:    cardShadow(idx),
                transform:    `rotate(${slot.rotate}deg)`,
                cursor:       "grab",
                userSelect:   "none",
                touchAction:  "none",
                transition:   cardTransition(),
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={proj.src}
                alt={proj.label}
                draggable={false}
                style={{
                  display:       "block",
                  width:         "100%",
                  height:        "auto",
                  pointerEvents: "none",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Fade inferior hacia el fondo de la página */}
      <div
        aria-hidden
        style={{
          position:      "absolute",
          bottom:        0,
          left:          0,
          right:         0,
          height:        100,
          background:    "linear-gradient(to bottom, transparent, var(--ivory))",
          zIndex:        10,
          pointerEvents: "none",
        }}
      />

      {/* Nav editorial del collage */}
      <div
        style={{
          position: "absolute",
          bottom:   0,
          left:     0,
          right:    0,
          zIndex:   20,
          padding:  "0 4px 22px",
        }}
      >
        {/* Hint — desaparece tras la primera interacción */}
        <p
          aria-live="polite"
          style={{
            fontFamily:    "var(--font-mono), monospace",
            fontSize:      12,
            fontStyle:     "italic",
            color:         "rgba(34,32,27,.33)",
            letterSpacing: ".005em",
            marginBottom:  5,
            opacity:       hasInteracted ? 0 : 1,
            transition:    reducedMotion ? "none" : "opacity .7s ease",
            pointerEvents: "none",
            userSelect:    "none",
          }}
        >
          Proyectos reales, para explorar. Hacé click en una pantalla.
        </p>

        {/* Fila: nav de proyectos + ver caso */}
        <div
          style={{
            display:        "flex",
            alignItems:     "baseline",
            justifyContent: "space-between",
          }}
        >
          {/* Nombres de proyectos */}
          <nav aria-label="Proyectos" style={{ display: "flex", alignItems: "baseline", flexWrap: "wrap" }}>
            {NAV_KEYS.map((key, i) => {
              const proj     = PROJECTS[key];
              const isActive = activeKey === key;
              return (
                <span key={key} style={{ display: "inline-flex", alignItems: "baseline" }}>
                  {i > 0 && (
                    <span
                      aria-hidden
                      style={{
                        color:      "rgba(34,32,27,.18)",
                        fontSize:   12,
                        padding:    "0 9px",
                        userSelect: "none",
                      }}
                    >
                      ·
                    </span>
                  )}
                  <button
                    onClick={() => switchTo(key as ProjectKey)}
                    onKeyDown={e => onNavKeyDown(key as ProjectKey, e)}
                    aria-current={isActive ? "true" : undefined}
                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--operational-green)] focus-visible:ring-offset-1 rounded-[2px]"
                    style={{
                      fontFamily:    "var(--font-sans), sans-serif",
                      fontSize:      12.5,
                      fontWeight:    isActive ? 600 : 400,
                      color:         isActive ? "var(--charcoal)" : "rgba(34,32,27,.36)",
                      letterSpacing: isActive ? "-0.01em" : "0",
                      background:    "none",
                      border:        "none",
                      padding:       0,
                      margin:        0,
                      cursor:        "pointer",
                      transition:    reducedMotion ? "none" : "color .22s ease",
                    }}
                  >
                    {proj.label}
                  </button>
                </span>
              );
            })}
          </nav>

          {/* Ver caso → aparece tras la primera interacción */}
          <a
            href={PROJECTS[activeKey].href}
            aria-label={`Ver caso de ${PROJECTS[activeKey].label}`}
            className="hover:!text-[var(--charcoal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--operational-green)] focus-visible:ring-offset-1 rounded-[2px]"
            style={{
              fontFamily:    "var(--font-mono), monospace",
              fontSize:      10,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color:         "rgba(34,32,27,.42)",
              textDecoration: "none",
              flexShrink:    0,
              paddingLeft:   16,
              opacity:       hasInteracted ? 1 : 0,
              transition:    reducedMotion ? "none" : "opacity .5s ease, color .2s ease",
              pointerEvents: hasInteracted ? "auto" : "none",
            }}
          >
            Ver caso →
          </a>
        </div>
      </div>
    </div>
  );
}
