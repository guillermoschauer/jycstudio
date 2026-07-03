/* Concept 04 — "Sala" · Museum exhibition. Air, quiet, wall labels. */

const BONE = "#ecEAe3";
const INK = "#1c1a17";
const STONE = "#908a7c";
const GOLD = "#8a7d5a";

const WORKS = [
  { room: "Sala 01", title: "sacaturno.app", medium: "Reservas · Estética", year: "2023" },
  { room: "Sala 02", title: "agendallena", medium: "Agenda · Salud", year: "2024" },
  { room: "Sala 03", title: "Coparentar", medium: "Producto propio · Familias", year: "2024" },
  { room: "Sala 04", title: "Panacity", medium: "Sistema operativo · Ventas", year: "2025" },
];

export function BoardMuseum() {
  return (
    <div
      className="font-[family-name:var(--c-newsreader)]"
      style={{ backgroundColor: BONE, color: INK }}
    >
      {/* Nav — quiet, centered, letterspaced */}
      <header className="flex items-center justify-between px-6 py-6 md:px-12">
        <span className="text-[11px] uppercase tracking-[0.35em]" style={{ color: STONE }}>
          JYC Studio
        </span>
        <nav className="hidden gap-10 text-[11px] uppercase tracking-[0.3em] md:flex" style={{ color: STONE }}>
          <span>Obra</span>
          <span>Proceso</span>
          <span>Visita</span>
        </nav>
        <span className="text-[11px] uppercase tracking-[0.3em]" style={{ color: GOLD }}>
          2023—25
        </span>
      </header>

      {/* Hero — immense whitespace, single italic statement */}
      <div className="mx-auto max-w-[900px] px-6 py-20 text-center md:py-32">
        <p className="mb-8 text-[11px] uppercase tracking-[0.4em]" style={{ color: GOLD }}>
          Exposición permanente
        </p>
        <h1 className="text-balance text-4xl font-light leading-[1.08] md:text-6xl">
          Objetos digitales para
          <br />
          <span className="italic" style={{ fontWeight: 500 }}>negocios que trabajan</span> de verdad.
        </h1>
        <p className="mx-auto mt-8 max-w-md text-pretty text-base leading-relaxed" style={{ color: "#4a463d" }}>
          Una colección de sistemas, productos y experiencias construidos de
          punta a punta. Del problema al producto en uso.
        </p>
        <div className="mt-10">
          <a href="#" className="text-[11px] uppercase tracking-[0.35em]" style={{ color: INK, borderBottom: `1px solid ${GOLD}`, paddingBottom: 4 }}>
            Recorrer la colección
          </a>
        </div>
      </div>

      {/* Showcase — gallery wall with labels */}
      <div className="border-t" style={{ borderColor: "rgba(28,26,23,.14)" }}>
        {WORKS.map((w) => (
          <div
            key={w.title}
            className="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 border-b px-6 py-10 md:grid-cols-12 md:items-baseline md:px-12"
            style={{ borderColor: "rgba(28,26,23,.14)" }}
          >
            <span className="text-[11px] uppercase tracking-[0.3em] md:col-span-2" style={{ color: GOLD }}>
              {w.room}
            </span>
            <h3 className="text-3xl font-light md:col-span-6 md:text-4xl">{w.title}</h3>
            <span className="text-sm italic md:col-span-3" style={{ color: STONE }}>
              {w.medium}
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] md:col-span-1 md:text-right" style={{ color: STONE }}>
              {w.year}
            </span>
          </div>
        ))}
      </div>

      {/* CTA — plaque */}
      <div className="mx-auto max-w-[900px] px-6 py-20 text-center md:py-28">
        <p className="text-[11px] uppercase tracking-[0.4em]" style={{ color: GOLD }}>
          Visitas con cita
        </p>
        <h2 className="mt-6 text-3xl font-light italic md:text-4xl">
          ¿Empezamos tu próxima pieza?
        </h2>
        <a
          href="#"
          className="mt-8 inline-block px-8 py-3 text-[11px] uppercase tracking-[0.3em]"
          style={{ border: `1px solid ${INK}`, color: INK }}
        >
          Reservar conversación
        </a>
      </div>
    </div>
  );
}
