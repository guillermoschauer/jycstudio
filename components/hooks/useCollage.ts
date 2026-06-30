"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

// ─── Project data ─────────────────────────────────────────────────────────────

export interface Project {
  key: string;
  label: string;
  category: string;
  /** Ruta relativa a /public. */
  src: string;
  /** Ruta interna del caso. */
  href: string;
}

export const PROJECTS: Record<string, Project> = {
  sacaturno:     { key: "sacaturno",     label: "SacaTurno",     category: "Turnos online",       src: "/case-studies/sacaturno.png",     href: "/casos/sacaturno"     },
  agendallena:   { key: "agendallena",   label: "AgendaLlena",   category: "Agenda digital",      src: "/case-studies/agendallena.png",   href: "/casos/agendallena"   },
  coparentar:    { key: "coparentar",    label: "Coparentar",    category: "Crianza compartida",  src: "/case-studies/coparentar.png",    href: "/casos/coparentar"    },
  reservacancha: { key: "reservacancha", label: "ReservaCancha", category: "Reservas deportivas", src: "/case-studies/reservacancha.png", href: "/casos/reservacancha" },
  bicitando:     { key: "bicitando",     label: "Bicitando",     category: "Ciclismo urbano",     src: "/case-studies/bicitando.png",     href: "/casos/bicitando"     },
};

export const NAV_KEYS = [
  "sacaturno",
  "agendallena",
  "coparentar",
  "reservacancha",
  "bicitando",
] as const;

export type ProjectKey = (typeof NAV_KEYS)[number];

/**
 * Para cada proyecto activo: qué tres proyectos mostrar como
 * [slot0 = fondo-izq (pequeño), slot1 = protagonista (grande), slot2 = frente-der (pequeño)].
 * El proyecto activo siempre ocupa slot1.
 */
const SETS: Record<ProjectKey, [ProjectKey, ProjectKey, ProjectKey]> = {
  sacaturno:     ["agendallena",   "sacaturno",     "coparentar"   ],
  agendallena:   ["coparentar",    "agendallena",   "sacaturno"    ],
  coparentar:    ["sacaturno",     "coparentar",    "agendallena"  ],
  reservacancha: ["bicitando",     "reservacancha", "coparentar"   ],
  bicitando:     ["agendallena",   "bicitando",     "reservacancha"],
};

// ─── Slot visual config ───────────────────────────────────────────────────────

export interface SlotConfig {
  homeX: number;
  homeY: number;
  width: number;
  rotate: number;
  borderRadius: number;
}

/**
 * Índice 0 = fondo-izquierda (pequeño)
 * Índice 1 = protagonista (grande, domina)
 * Índice 2 = primer plano derecha (pequeño, superpuesto)
 */
export const SLOTS: SlotConfig[] = [
  { homeX: 2,   homeY: 58,  width: 241, rotate: -3.5, borderRadius: 8  },
  { homeX: 12,  homeY: 108, width: 490, rotate: -0.8, borderRadius: 10 },
  { homeX: 428, homeY: 328, width: 241, rotate: 2,    borderRadius: 8  },
];

// ─── State types ──────────────────────────────────────────────────────────────

export interface CardState {
  x: number;
  y: number;
  z: number;
}

interface DragRef {
  idx: number;
  startX: number;
  startY: number;
  mouseX: number;
  mouseY: number;
}

export interface CollageState {
  activeKey: ProjectKey;
  displaySet: [ProjectKey, ProjectKey, ProjectKey];
  cards: CardState[];
  maxZ: number;
  fading: boolean;
  hasInteracted: boolean;
}

const INITIAL_STATE: CollageState = {
  activeKey:    "sacaturno",
  displaySet:   ["agendallena", "sacaturno", "coparentar"],
  cards:        SLOTS.map((sl, i) => ({ x: sl.homeX, y: sl.homeY, z: i + 1 })),
  maxZ:         3,
  fading:       false,
  hasInteracted: false,
};

// ─── Hook ─────────────────────────────────────────────────────────────────────

export interface UseCollageReturn {
  state: CollageState;
  liftCard: (idx: number) => void;
  switchTo: (key: ProjectKey) => void;
  onPointerDown: (idx: number, e: React.PointerEvent) => void;
  onCardKeyDown: (idx: number, e: React.KeyboardEvent) => void;
  onNavKeyDown: (key: ProjectKey, e: React.KeyboardEvent) => void;
}

export function useCollage(
  containerRef: React.RefObject<HTMLDivElement | null>
): UseCollageReturn {
  const [state, setState] = useState<CollageState>(INITIAL_STATE);
  const dragRef           = useRef<DragRef | null>(null);
  const fadeTimerRef      = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reducedMotion     = useReducedMotion();

  // ── Traer tarjeta al frente ──────────────────────────────────────────────
  const liftCard = useCallback((idx: number) => {
    setState(s => {
      const newZ = s.maxZ + 1;
      return {
        ...s,
        cards: s.cards.map((c, i) => (i === idx ? { ...c, z: newZ } : c)),
        maxZ: newZ,
        hasInteracted: true,
      };
    });
  }, []);

  // ── Cambiar proyecto activo (fade → swap → fade in) ──────────────────────
  const switchTo = useCallback(
    (key: ProjectKey) => {
      setState(s => {
        if (key === s.activeKey || s.fading) return s;
        return { ...s, fading: true, hasInteracted: true };
      });

      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      fadeTimerRef.current = setTimeout(
        () => {
          setState(s => {
            if (!s.fading) return s;
            return {
              ...s,
              activeKey:  key,
              displaySet: SETS[key],
              fading:     false,
              cards:      SLOTS.map((sl, i) => ({ x: sl.homeX, y: sl.homeY, z: i + 1 })),
              maxZ:       3,
            };
          });
        },
        reducedMotion ? 0 : 500
      );
    },
    [reducedMotion]
  );

  // ── Inicio de arrastre ───────────────────────────────────────────────────
  const onPointerDown = useCallback(
    (idx: number, e: React.PointerEvent) => {
      if (e.pointerType === "touch") return;
      if (reducedMotion) { liftCard(idx); return; }

      e.preventDefault();
      setState(s => {
        const newZ = s.maxZ + 1;
        const c    = s.cards[idx];
        dragRef.current = {
          idx,
          startX: c.x, startY: c.y,
          mouseX: e.clientX, mouseY: e.clientY,
        };
        return {
          ...s,
          cards: s.cards.map((card, i) => (i === idx ? { ...card, z: newZ } : card)),
          maxZ: newZ,
          hasInteracted: true,
        };
      });
    },
    [liftCard, reducedMotion]
  );

  // ── Pointermove / pointerup a nivel window (durante drag) ────────────────
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const drag = dragRef.current;
      if (!drag) return;
      e.preventDefault();

      const colW = containerRef.current?.offsetWidth  ?? 680;
      const colH = containerRef.current?.offsetHeight ?? 580;
      const slot = SLOTS[drag.idx];

      setState(s => ({
        ...s,
        cards: s.cards.map((c, i) =>
          i !== drag.idx
            ? c
            : {
                ...c,
                x: Math.max(-16, Math.min(colW - slot.width + 16, drag.startX + e.clientX - drag.mouseX)),
                y: Math.max(-16, Math.min(colH - 100,              drag.startY + e.clientY - drag.mouseY)),
              }
        ),
      }));
    };

    const onUp = () => {
      const drag = dragRef.current;
      if (!drag) return;
      const slot     = SLOTS[drag.idx];
      dragRef.current = null;
      setState(s => ({
        ...s,
        cards: s.cards.map((c, i) =>
          i !== drag.idx ? c : { ...c, x: slot.homeX, y: slot.homeY }
        ),
      }));
    };

    window.addEventListener("pointermove",   onMove, { passive: false });
    window.addEventListener("pointerup",     onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove",   onMove);
      window.removeEventListener("pointerup",     onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [containerRef]);

  // ── Teclado ──────────────────────────────────────────────────────────────
  const onCardKeyDown = useCallback(
    (idx: number, e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); liftCard(idx); }
    },
    [liftCard]
  );

  const onNavKeyDown = useCallback(
    (key: ProjectKey, e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); switchTo(key); }
    },
    [switchTo]
  );

  // ── Cleanup ──────────────────────────────────────────────────────────────
  useEffect(
    () => () => { if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current); },
    []
  );

  return { state, liftCard, switchTo, onPointerDown, onCardKeyDown, onNavKeyDown };
}
