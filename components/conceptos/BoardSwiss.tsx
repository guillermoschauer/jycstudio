/* Concept 02 — "Sistema" · Swiss / International Typographic Style. */

const WHITE = "#ffffff";
const BLACK = "#0a0a0a";
const RED = "#e2231a";
const GRAY = "#8a8a8a";

const ROWS = [
  { n: "01", cat: "Sistemas internos", name: "Panacity", status: "En desarrollo" },
  { n: "02", cat: "Reservas deportivas", name: "ReservaCancha", status: "Por lanzar" },
  { n: "03", cat: "Gestión de turnos", name: "sacaturno.app", status: "En uso" },
  { n: "04", cat: "Salud", name: "agendallena", status: "En uso" },
  { n: "05", cat: "Familias", name: "Coparentar", status: "En uso" },
];

export function BoardSwiss() {
  return (
    <div
      className="font-[family-name:var(--c-archivo)]"
      style={{ backgroundColor: WHITE, color: BLACK }}
    >
      {/* Nav — strict grid, left wordmark, right index */}
      <header className="border-b" style={{ borderColor: BLACK }}>
        <div className="grid grid-cols-12">
          <div className="col-span-6 border-r px-5 py-4" style={{ borderColor: BLACK }}>
            <span className="text-sm font-bold uppercase tracking-[0.12em]">JYC Studio</span>
          </div>
          <nav className="col-span-6 flex items-center justify-end gap-6 px-5 py-4 text-xs font-medium uppercase tracking-[0.14em]" style={{ color: GRAY }}>
            <span>Casos</span>
            <span>Método</span>
            <span style={{ color: BLACK }}>ES</span>
          </nav>
        </div>
      </header>

      {/* Hero — asymmetric grid, one flush-left mega headline */}
      <div className="grid grid-cols-12 border-b" style={{ borderColor: BLACK }}>
        <div className="col-span-12 border-b px-5 py-3 md:col-span-2 md:border-b-0 md:border-r" style={{ borderColor: BLACK }}>
          <span className="text-[11px] font-medium uppercase tracking-[0.16em]" style={{ color: RED }}>
            (Estudio de producto)
          </span>
        </div>
        <div className="col-span-12 px-5 py-8 md:col-span-10 md:py-14">
          <h1
            className="font-bold uppercase leading-[0.92]"
            style={{ fontSize: "clamp(2.4rem, 7vw, 6rem)", letterSpacing: "-0.02em" }}
          >
            Producto
            <br />
            digital para
            <br />
            <span style={{ color: RED }}>negocios</span> reales
          </h1>
        </div>
      </div>

      {/* Sub row — three definitions on a baseline grid */}
      <div className="grid grid-cols-1 border-b md:grid-cols-3" style={{ borderColor: BLACK }}>
        {[
          { k: "Operación", v: "Sistemas que ordenan reservas, turnos, ventas y stock en tiempo real." },
          { k: "Producto", v: "Productos digitales construidos de punta a punta, del problema al uso." },
          { k: "Marca", v: "Landings y experiencias que convierten interés en consultas y ventas." },
        ].map((c, i) => (
          <div
            key={c.k}
            className={`px-5 py-6 ${i < 2 ? "border-b md:border-b-0 md:border-r" : ""}`}
            style={{ borderColor: BLACK }}
          >
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-bold uppercase tracking-[0.1em]">{c.k}</span>
              <span className="text-[11px]" style={{ color: RED, fontFamily: "var(--c-mono)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#3a3a3a" }}>
              {c.v}
            </p>
          </div>
        ))}
      </div>

      {/* Showcase — data table */}
      <div>
        <div className="grid grid-cols-12 border-b px-5 py-2 text-[10px] font-medium uppercase tracking-[0.16em]" style={{ borderColor: BLACK, color: GRAY }}>
          <span className="col-span-2">Índice</span>
          <span className="col-span-5">Categoría</span>
          <span className="col-span-3">Proyecto</span>
          <span className="col-span-2 text-right">Estado</span>
        </div>
        {ROWS.map((r) => (
          <div
            key={r.n}
            className="grid grid-cols-12 items-center border-b px-5 py-4"
            style={{ borderColor: "rgba(10,10,10,.15)" }}
          >
            <span className="col-span-2 text-sm" style={{ color: RED, fontFamily: "var(--c-mono)" }}>
              {r.n}
            </span>
            <span className="col-span-5 text-sm" style={{ color: "#3a3a3a" }}>
              {r.cat}
            </span>
            <span className="col-span-3 text-base font-semibold">{r.name}</span>
            <span className="col-span-2 text-right text-[11px] uppercase tracking-[0.1em]" style={{ fontFamily: "var(--c-mono)", color: GRAY }}>
              {r.status}
            </span>
          </div>
        ))}
      </div>

      {/* CTA — full red bar */}
      <div style={{ backgroundColor: RED, color: WHITE }}>
        <div className="flex flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center">
          <p className="text-2xl font-bold uppercase leading-tight tracking-[-0.01em]">
            Empecemos por el problema.
          </p>
          <a href="#" className="border-2 border-white px-6 py-3 text-xs font-bold uppercase tracking-[0.16em]">
            Escribinos →
          </a>
        </div>
      </div>
    </div>
  );
}
