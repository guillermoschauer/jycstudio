/* Concept 03 — "Bloque" · Brutalist premium. Raw structure, signal accent. */

const CONCRETE = "#e6e3da";
const BLACK = "#111110";
const SIGNAL = "#ff4d1c";

const CASES = [
  { name: "SACATURNO.APP", meta: "TURNOS / ESTÉTICA", state: "[ EN USO ]" },
  { name: "AGENDALLENA", meta: "TURNOS / SALUD", state: "[ EN USO ]" },
  { name: "COPARENTAR", meta: "PRODUCTO / FAMILIAS", state: "[ EN USO ]" },
  { name: "RESERVACANCHA", meta: "RESERVAS / DEPORTE", state: "[ POR LANZAR ]" },
  { name: "PANACITY", meta: "SISTEMA / VENTAS", state: "[ EN OBRA ]" },
];

export function BoardBrutalist() {
  return (
    <div
      className="font-[family-name:var(--c-mono)]"
      style={{ backgroundColor: CONCRETE, color: BLACK }}
    >
      {/* Nav — hard bordered blocks */}
      <header className="flex items-stretch border-b-2" style={{ borderColor: BLACK }}>
        <div className="border-r-2 px-5 py-4" style={{ borderColor: BLACK }}>
          <span className="text-sm font-bold tracking-tight">JYC_STUDIO</span>
        </div>
        <nav className="flex flex-1 items-center justify-end gap-0 text-[11px] font-bold uppercase">
          {["CASOS", "MÉTODO", "ESTUDIO"].map((l) => (
            <span key={l} className="border-l-2 px-4 py-4" style={{ borderColor: BLACK }}>
              {l}
            </span>
          ))}
          <span className="px-4 py-4" style={{ backgroundColor: SIGNAL, color: BLACK }}>
            CONTACTO
          </span>
        </nav>
      </header>

      {/* Hero — oversized, cropped, mono */}
      <div className="border-b-2 px-5 py-8 md:py-12" style={{ borderColor: BLACK }}>
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.1em]">
          ▚ EST. MDP — PRODUCTO DIGITAL SIN RELLENO
        </p>
        <h1
          className="font-[family-name:var(--c-archivo-black)] uppercase leading-[0.86]"
          style={{ fontSize: "clamp(2.6rem, 9vw, 8rem)", letterSpacing: "-0.03em" }}
        >
          HACEMOS
          <br />
          QUE <span style={{ color: SIGNAL }}>FUNCIONE</span>
        </h1>
        <div className="mt-6 max-w-xl border-2 p-4 text-sm leading-relaxed" style={{ borderColor: BLACK }}>
          Sistemas, SaaS y experiencias web para problemas reales. Cero humo.
          Cero plantilla. Del problema al producto en uso.
        </div>
      </div>

      {/* Marquee-ish capability strip */}
      <div className="flex flex-wrap border-b-2 text-[11px] font-bold uppercase" style={{ borderColor: BLACK }}>
        {["SISTEMAS INTERNOS", "SAAS", "RESERVAS", "OPERACIÓN", "LANDINGS", "MARCA"].map((c, i) => (
          <span
            key={c}
            className="border-r-2 px-4 py-2 last:border-r-0"
            style={{ borderColor: BLACK, backgroundColor: i % 2 ? BLACK : "transparent", color: i % 2 ? CONCRETE : BLACK }}
          >
            {c}
          </span>
        ))}
      </div>

      {/* Showcase — stacked heavy rows */}
      <div>
        {CASES.map((c) => (
          <div
            key={c.name}
            className="group flex items-center justify-between border-b-2 px-5 py-5"
            style={{ borderColor: BLACK }}
          >
            <div className="flex items-baseline gap-4">
              <span className="font-[family-name:var(--c-archivo-black)] text-xl md:text-3xl">{c.name}</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-bold uppercase">
              <span className="hidden sm:inline" style={{ color: "#5a574f" }}>{c.meta}</span>
              <span style={{ color: SIGNAL }}>{c.state}</span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA — inverted block */}
      <div className="px-5 py-10" style={{ backgroundColor: BLACK, color: CONCRETE }}>
        <h2 className="font-[family-name:var(--c-archivo-black)] uppercase leading-[0.9]" style={{ fontSize: "clamp(1.8rem,5vw,3.4rem)" }}>
          CONTÁ EL PROBLEMA.
        </h2>
        <a
          href="#"
          className="mt-6 inline-block px-6 py-3 text-xs font-bold uppercase tracking-[0.12em]"
          style={{ backgroundColor: SIGNAL, color: BLACK }}
        >
          ABRIR WHATSAPP →
        </a>
      </div>
    </div>
  );
}
