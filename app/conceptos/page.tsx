import type { ConceptMeta } from "@/components/conceptos/ConceptFrame";
import { ConceptFrame } from "@/components/conceptos/ConceptFrame";
import { BoardEditorial } from "@/components/conceptos/BoardEditorial";
import { BoardSwiss } from "@/components/conceptos/BoardSwiss";
import { BoardBrutalist } from "@/components/conceptos/BoardBrutalist";
import { BoardMuseum } from "@/components/conceptos/BoardMuseum";
import { BoardFashion } from "@/components/conceptos/BoardFashion";

const CONCEPTS: { meta: ConceptMeta; board: React.ReactNode }[] = [
  {
    board: <BoardEditorial />,
    meta: {
      id: "gaceta",
      index: "01",
      name: "La Gaceta",
      kicker: "Editorial · Magazine",
      thesis:
        "El estudio como publicación. Cada caso es un artículo. Autoridad tipográfica de diario serio, no de landing.",
      swatches: [
        { name: "Papel", hex: "#f4f0e6" },
        { name: "Tinta", hex: "#1a1712" },
        { name: "Rojo titular", hex: "#b23a2e" },
        { name: "Gris nota", hex: "#7d766a" },
      ],
      specs: [
        { label: "Tipografía", value: "Serif humanista (Newsreader) para titulares y cuerpo; mono para créditos y etiquetas. Drop-cap editorial." },
        { label: "Navegación", value: "Masthead centrado con reglas dobles y fecha/edición. Nav como sumario, no como botones." },
        { label: "Composición", value: "Grilla de columnas de diario, hairlines verticales, historia principal + sumario lateral numerado." },
        { label: "Showcase", value: "Casos como artículos en tres columnas con volanta, bajada y crédito de estado." },
        { label: "CTA", value: "Franja de clasificados en negativo con enlace subrayado — sobrio, sin botón inflado." },
        { label: "Mobile-first", value: "Las columnas colapsan a una sola lectura vertical; el sumario pasa a lista apilada." },
      ],
    },
  },
  {
    board: <BoardSwiss />,
    meta: {
      id: "sistema",
      index: "02",
      name: "Sistema",
      kicker: "Swiss · International Typographic",
      thesis:
        "Rigor total. La grilla es visible y manda. Un solo rojo señaléctico. Cero decoración: la información es el diseño.",
      swatches: [
        { name: "Blanco", hex: "#ffffff" },
        { name: "Negro", hex: "#0a0a0a" },
        { name: "Rojo señal", hex: "#e2231a" },
        { name: "Gris dato", hex: "#8a8a8a" },
      ],
      specs: [
        { label: "Tipografía", value: "Grotesca neutra (Archivo) en mayúsculas, pesos altos, tracking negativo en los títulos gigantes." },
        { label: "Navegación", value: "Barra dividida por la grilla: wordmark a la izquierda, índice a la derecha, todo sobre líneas de 1px." },
        { label: "Composición", value: "Grilla de 12 columnas expuesta con bordes. Titular mega alineado a la izquierda, ritmo de baseline." },
        { label: "Showcase", value: "Tabla de datos: índice, categoría, proyecto y estado. El portafolio como sistema de archivo." },
        { label: "CTA", value: "Barra roja a sangre completa con botón rectangular de borde — imperativo y directo." },
        { label: "Mobile-first", value: "Las 12 columnas se reordenan a bloques apilados; la tabla mantiene jerarquía con etiquetas cortas." },
      ],
    },
  },
  {
    board: <BoardBrutalist />,
    meta: {
      id: "bloque",
      index: "03",
      name: "Bloque",
      kicker: "Brutalist · Premium",
      thesis:
        "Estructura cruda y honesta. Bordes gruesos, mono, escala brutal y un naranja señal. Premium por seguridad, no por pulido.",
      swatches: [
        { name: "Hormigón", hex: "#e6e3da" },
        { name: "Negro", hex: "#111110" },
        { name: "Naranja señal", hex: "#ff4d1c" },
      ],
      specs: [
        { label: "Tipografía", value: "Mono (JetBrains) para estructura y Archivo Black para titulares macizos, recortados al borde." },
        { label: "Navegación", value: "Bloques con bordes de 2px, cada ítem en su celda; contacto como bloque relleno naranja." },
        { label: "Composición", value: "Todo enmarcado con líneas gruesas, franja de capacidades tipo damero blanco/negro." },
        { label: "Showcase", value: "Filas pesadas apiladas con nombre en display y estado entre corchetes en naranja." },
        { label: "CTA", value: "Bloque invertido negro con botón naranja sólido — contundente, sin sutilezas." },
        { label: "Mobile-first", value: "Las celdas se apilan manteniendo los bordes; la escala tipográfica sigue dominando la pantalla." },
      ],
    },
  },
  {
    board: <BoardMuseum />,
    meta: {
      id: "sala",
      index: "04",
      name: "Sala",
      kicker: "Museum · Exhibition",
      thesis:
        "El aire es el lujo. Cada proyecto es una obra con su ficha de sala. Silencio, serif liviana y un dorado tenue.",
      swatches: [
        { name: "Hueso", hex: "#eceae3" },
        { name: "Tinta", hex: "#1c1a17" },
        { name: "Piedra", hex: "#908a7c" },
        { name: "Oro tenue", hex: "#8a7d5a" },
      ],
      specs: [
        { label: "Tipografía", value: "Serif liviana (Newsreader) con itálicas de énfasis; etiquetas en versalitas de tracking amplísimo." },
        { label: "Navegación", value: "Barra silenciosa: wordmark, tres enlaces espaciados y años de la colección. Nada compite con la obra." },
        { label: "Composición", value: "Espacio en blanco monumental, hero centrado con una sola frase; ficha de sala por proyecto." },
        { label: "Showcase", value: "Muro de galería: Sala Nº, título, medio (categoría) y año, alineados a una grilla de museo." },
        { label: "CTA", value: "Placa central discreta con borde fino — 'reservar conversación', como una visita con cita." },
        { label: "Mobile-first", value: "El aire se conserva reduciendo escalas; las fichas pasan a bloque vertical legible." },
      ],
    },
  },
  {
    board: <BoardFashion />,
    meta: {
      id: "campana",
      index: "05",
      name: "Campaña",
      kicker: "Fashion · Cinematic",
      thesis:
        "Portafolio como campaña de moda. Imagen cinematográfica a sangre, serif de alto contraste y lookbook. Deseo antes que features.",
      swatches: [
        { name: "Noche", hex: "#0c0b0a" },
        { name: "Hueso", hex: "#efe9df" },
        { name: "Oxblood", hex: "#7a2a30" },
      ],
      specs: [
        { label: "Tipografía", value: "Serif didona de alto contraste (Bodoni Moda) mezclando itálica ligera y mayúsculas pesadas; grotesca para etiquetas." },
        { label: "Navegación", value: "Ultra minimal, ancha y en versalitas; monograma 'JYC' y referencias tipo temporada (FW / MDP)." },
        { label: "Composición", value: "Hero a sangre completa con foto cinematográfica, gradiente inferior y label vertical lateral." },
        { label: "Showcase", value: "Lookbook: filas numeradas (001…) con nombre en display y descriptor en versalitas." },
        { label: "CTA", value: "Titular en itálica dramática + botón hueso sólido sobre noche — editorial, aspiracional." },
        { label: "Mobile-first", value: "La imagen full-bleed manda en vertical; el label lateral se oculta y el lookbook queda a una columna." },
      ],
    },
  },
];

export default function ConceptosPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      {/* Gallery masthead */}
      <div className="mx-auto max-w-[1400px] px-5 pt-16 md:px-10 md:pt-24">
        <p className="font-[family-name:var(--c-mono)] text-[11px] uppercase tracking-[0.3em] text-white/40">
          JYC Studio · Exploración de dirección de arte
        </p>
        <h1 className="mt-5 max-w-4xl font-[family-name:var(--c-bodoni)] text-4xl font-medium leading-[1.05] text-balance md:text-7xl">
          Cinco lenguajes de diseño para una misma home.
        </h1>
        <p className="mt-6 max-w-2xl font-[family-name:var(--c-dm)] text-base leading-relaxed text-white/55">
          No son cinco variaciones de color: son cinco puntos de vista distintos
          sobre cómo debería verse y sentirse JYC Studio. Cada tablero es un mock
          de home de alta fidelidad con su propia navegación, tipografía, paleta,
          showcase de casos y CTA. Elegí una dirección y la construimos completa.
        </p>
      </div>

      {/* Index */}
      <nav className="mx-auto mt-12 max-w-[1400px] px-5 md:px-10">
        <ul className="flex flex-wrap gap-x-6 gap-y-3 border-y border-white/10 py-4 font-[family-name:var(--c-mono)] text-[11px] uppercase tracking-[0.18em]">
          {CONCEPTS.map((c) => (
            <li key={c.meta.id}>
              <a
                href={`#${c.meta.id}`}
                className="text-white/45 transition-colors hover:text-white"
              >
                <span className="text-white/25">{c.meta.index}</span>{" "}
                {c.meta.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Boards */}
      {CONCEPTS.map((c) => (
        <ConceptFrame key={c.meta.id} meta={c.meta}>
          {c.board}
        </ConceptFrame>
      ))}

      {/* Footer note */}
      <footer className="mx-auto max-w-[1400px] px-5 py-20 md:px-10">
        <div className="border-t border-white/10 pt-8">
          <p className="max-w-xl font-[family-name:var(--c-dm)] text-sm leading-relaxed text-white/45">
            ¿Cuál te representa? Decime el número (o mezclá elementos de varias) y
            la desarrollo como home completa, responsive y lista para producción.
          </p>
        </div>
      </footer>
    </main>
  );
}
