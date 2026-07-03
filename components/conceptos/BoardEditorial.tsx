/* Concept 01 — "La Gaceta" · Editorial magazine language. */

const INK = "#1a1712";
const PAPER = "#f4f0e6";
const RED = "#b23a2e";
const GRAY = "#7d766a";

const ARTICLES = [
  {
    kicker: "Gestión de turnos",
    title: "sacaturno.app",
    dek: "El cliente reserva solo, las 24 horas. Señas y confirmaciones, sin perseguir a nadie.",
    tag: "En uso",
  },
  {
    kicker: "Salud · Agenda",
    title: "agendallena",
    dek: "El paciente reserva solo, con recordatorios automáticos y señas por Mercado Pago.",
    tag: "En uso",
  },
  {
    kicker: "Familias · Producto propio",
    title: "Coparentar",
    dek: "Calendario, gastos y comunicación en un lugar claro y neutral para ambas partes.",
    tag: "En uso",
  },
];

export function BoardEditorial() {
  return (
    <div
      className="font-[family-name:var(--c-newsreader)]"
      style={{ backgroundColor: PAPER, color: INK }}
    >
      {/* Masthead */}
      <header className="border-b-2" style={{ borderColor: INK }}>
        <div className="mx-auto flex max-w-[980px] items-center justify-between px-5 py-2 text-[10px] uppercase tracking-[0.2em]" style={{ color: GRAY, fontFamily: "var(--c-mono)" }}>
          <span>Mar del Plata</span>
          <span className="hidden sm:inline">Estudio de producto · Est. 2023</span>
          <span>Nº 01</span>
        </div>
        <div className="border-t" style={{ borderColor: "rgba(26,23,18,.25)" }}>
          <div className="mx-auto max-w-[980px] px-5 py-4 text-center">
            <h1 className="text-4xl font-medium tracking-tight md:text-6xl" style={{ letterSpacing: "-0.01em" }}>
              JYC Studio
            </h1>
          </div>
        </div>
        <nav className="border-t border-b" style={{ borderColor: INK }}>
          <ul className="mx-auto flex max-w-[980px] items-center justify-center gap-6 px-5 py-2 text-[11px] uppercase tracking-[0.18em]" style={{ fontFamily: "var(--c-mono)" }}>
            <li>Casos</li>
            <li>·</li>
            <li>Cómo trabajamos</li>
            <li>·</li>
            <li>Estudio</li>
          </ul>
        </nav>
      </header>

      {/* Hero — lead story */}
      <div className="mx-auto max-w-[980px] px-5 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-8 md:border-r md:pr-8" style={{ borderColor: "rgba(26,23,18,.2)" }}>
            <p className="mb-3 text-[11px] uppercase tracking-[0.24em]" style={{ color: RED, fontFamily: "var(--c-mono)" }}>
              La historia principal
            </p>
            <h2 className="text-balance text-4xl font-medium leading-[1.02] md:text-6xl" style={{ letterSpacing: "-0.015em" }}>
              Productos digitales para negocios reales.
            </h2>
            <p className="mt-5 text-pretty text-lg leading-relaxed" style={{ color: "#33302a" }}>
              <span className="float-left mr-2 mt-1 font-medium leading-[0.72]" style={{ fontSize: "3.6rem", color: RED }}>
                C
              </span>
              onstruimos sistemas, SaaS y experiencias web que ordenan la
              operación, comunican mejor y hacen crecer al negocio. Del problema
              al producto en uso, sin humo ni plantillas.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="inline-block border-b-2 pb-0.5 text-sm uppercase tracking-[0.18em]"
                style={{ borderColor: INK, fontFamily: "var(--c-mono)" }}
              >
                Leé los casos →
              </a>
            </div>
          </div>

          {/* Sidebar index */}
          <aside className="md:col-span-4">
            <p className="mb-3 border-b pb-2 text-[11px] uppercase tracking-[0.24em]" style={{ borderColor: INK, fontFamily: "var(--c-mono)" }}>
              En esta edición
            </p>
            <ol className="space-y-3">
              {["Operación en tiempo real", "Producto de punta a punta", "Marca y conversión"].map((t, i) => (
                <li key={t} className="flex gap-3 border-b pb-3" style={{ borderColor: "rgba(26,23,18,.18)" }}>
                  <span className="text-sm" style={{ color: RED, fontFamily: "var(--c-mono)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] leading-snug">{t}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>

      {/* Project showcase — article columns */}
      <div className="border-t-2" style={{ borderColor: INK }}>
        <div className="mx-auto max-w-[980px] px-5 py-8">
          <p className="mb-5 text-[11px] uppercase tracking-[0.24em]" style={{ color: GRAY, fontFamily: "var(--c-mono)" }}>
            Portafolio · Casos recientes
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {ARTICLES.map((a) => (
              <article key={a.title} className="md:border-r md:pr-6 md:last:border-r-0" style={{ borderColor: "rgba(26,23,18,.2)" }}>
                <p className="text-[10px] uppercase tracking-[0.22em]" style={{ color: RED, fontFamily: "var(--c-mono)" }}>
                  {a.kicker}
                </p>
                <h3 className="mt-1 text-2xl font-medium leading-tight">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "#4a463e" }}>
                  {a.dek}
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.2em]" style={{ color: GRAY, fontFamily: "var(--c-mono)" }}>
                  — {a.tag}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* CTA — classified strip */}
      <div style={{ backgroundColor: INK, color: PAPER }}>
        <div className="mx-auto flex max-w-[980px] flex-col items-start justify-between gap-3 px-5 py-6 sm:flex-row sm:items-center">
          <p className="text-2xl font-medium italic">¿Tenés un problema que debería funcionar mejor?</p>
          <a href="#" className="whitespace-nowrap border-b-2 pb-0.5 text-sm uppercase tracking-[0.18em]" style={{ borderColor: RED, fontFamily: "var(--c-mono)" }}>
            Escribinos →
          </a>
        </div>
      </div>
    </div>
  );
}
