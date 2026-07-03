/* Concept 05 — "Campaña" · Fashion campaign. Cinematic, condensed, dramatic. */

const NIGHT = "#0c0b0a";
const BONE = "#efe9df";
const DIM = "rgba(239,233,223,.5)";

const LOOKS = [
  { idx: "001", name: "sacaturno.app", line: "Reservas 24/7 · Estética" },
  { idx: "002", name: "agendallena", line: "Agenda clínica · Salud" },
  { idx: "003", name: "Coparentar", line: "Producto propio · Familias" },
  { idx: "004", name: "ReservaCancha", line: "Reservas · Deporte" },
];

export function BoardFashion() {
  return (
    <div
      className="font-[family-name:var(--c-archivo)]"
      style={{ backgroundColor: NIGHT, color: BONE }}
    >
      {/* Nav — minimal, wide, uppercase */}
      <header className="flex items-center justify-between px-5 py-5 md:px-10">
        <span className="font-[family-name:var(--c-bodoni)] text-lg tracking-tight">JYC</span>
        <nav className="hidden gap-8 text-[10px] font-semibold uppercase tracking-[0.28em] md:flex" style={{ color: DIM }}>
          <span>Colección</span>
          <span>Estudio</span>
          <span>Contacto</span>
        </nav>
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em]" style={{ color: DIM }}>
          FW / MDP
        </span>
      </header>

      {/* Hero — full-bleed cinematic image + condensed overlay type */}
      <div className="relative">
        <img
          src="/conceptos/campaign.png"
          alt="Superficie de hormigón iluminada por un haz de luz cálido y dramático."
          className="h-[62vh] max-h-[560px] min-h-[380px] w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(12,11,10,.35) 0%, rgba(12,11,10,.15) 40%, rgba(12,11,10,.92) 100%)" }} />
        {/* vertical side label */}
        <span
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 text-[10px] font-semibold uppercase tracking-[0.4em] md:block"
          style={{ writingMode: "vertical-rl", color: DIM }}
        >
          Estudio de producto · Campaña 01
        </span>
        <div className="absolute inset-x-0 bottom-0 px-5 pb-8 md:px-10 md:pb-12">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.32em]" style={{ color: "#c98a8f" }}>
            Productos digitales, hechos a medida
          </p>
          <h1
            className="font-[family-name:var(--c-bodoni)] leading-[0.9]"
            style={{ fontSize: "clamp(3rem, 11vw, 9rem)", letterSpacing: "-0.02em" }}
          >
            <span className="block font-light italic">Negocios</span>
            <span className="block font-semibold uppercase" style={{ letterSpacing: "0.01em" }}>que funcionan</span>
          </h1>
        </div>
      </div>

      {/* Statement bar */}
      <div className="border-b px-5 py-8 md:px-10" style={{ borderColor: "rgba(239,233,223,.12)" }}>
        <p className="max-w-2xl text-lg font-light leading-relaxed" style={{ color: "#d8d1c5" }}>
          Sistemas, SaaS y experiencias web construidos de punta a punta. Cada
          proyecto, una pieza. Del problema al producto en uso.
        </p>
      </div>

      {/* Showcase — lookbook rows */}
      <div>
        {LOOKS.map((l) => (
          <a
            key={l.idx}
            href="#"
            className="flex items-center justify-between border-b px-5 py-6 md:px-10"
            style={{ borderColor: "rgba(239,233,223,.12)" }}
          >
            <div className="flex items-baseline gap-5">
              <span className="text-[11px] font-semibold tracking-[0.2em]" style={{ color: "#c98a8f" }}>
                {l.idx}
              </span>
              <span className="font-[family-name:var(--c-bodoni)] text-2xl md:text-4xl">{l.name}</span>
            </div>
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.26em] sm:inline" style={{ color: DIM }}>
              {l.line}
            </span>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="px-5 py-16 text-center md:px-10 md:py-24">
        <h2 className="font-[family-name:var(--c-bodoni)] text-4xl font-light italic md:text-6xl">
          Escribí el próximo capítulo.
        </h2>
        <a
          href="#"
          className="mt-8 inline-block px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.3em]"
          style={{ backgroundColor: BONE, color: NIGHT }}
        >
          Agendar conversación
        </a>
      </div>
    </div>
  );
}
