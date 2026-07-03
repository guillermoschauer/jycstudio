import type { ReactNode } from "react";

export type Swatch = { name: string; hex: string };

export type ConceptSpec = { label: string; value: string };

export type ConceptMeta = {
  id: string;
  index: string; // "01"
  name: string; // "La Gaceta"
  kicker: string; // design-language family, e.g. "Editorial · Magazine"
  thesis: string; // one-line point of view
  swatches: Swatch[];
  specs: ConceptSpec[];
};

/**
 * Presents a single concept: heavy meta header, the live homepage mock inside a
 * pinned "board" frame, and a structured annotation panel underneath.
 * The gallery chrome is intentionally neutral/dark so each bright board pops.
 */
export function ConceptFrame({
  meta,
  children,
}: {
  meta: ConceptMeta;
  children: ReactNode;
}) {
  return (
    <section
      id={meta.id}
      className="scroll-mt-24 border-t border-white/10 py-16 md:py-28"
    >
      {/* Meta header */}
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex items-start gap-5 md:gap-8">
            <span
              className="font-[family-name:var(--c-archivo-black)] text-5xl leading-none text-white/15 md:text-8xl"
              aria-hidden
            >
              {meta.index}
            </span>
            <div>
              <p className="font-[family-name:var(--c-mono)] text-[11px] uppercase tracking-[0.28em] text-white/40">
                {meta.kicker}
              </p>
              <h2 className="mt-2 font-[family-name:var(--c-bodoni)] text-3xl font-semibold text-white md:text-5xl">
                {meta.name}
              </h2>
            </div>
          </div>
          <p className="max-w-md font-[family-name:var(--c-dm)] text-sm leading-relaxed text-white/55 md:text-right">
            {meta.thesis}
          </p>
        </div>
      </div>

      {/* Board */}
      <div className="mx-auto mt-10 max-w-[1400px] px-5 md:mt-14 md:px-10">
        <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl shadow-black/50">
          {/* faux browser bar */}
          <div className="flex items-center gap-2 border-b border-black/10 bg-neutral-200 px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-neutral-400" />
            <span className="h-3 w-3 rounded-full bg-neutral-400" />
            <span className="h-3 w-3 rounded-full bg-neutral-400" />
            <span className="ml-4 rounded bg-white/70 px-3 py-1 font-[family-name:var(--c-mono)] text-[10px] tracking-wide text-neutral-500">
              jycstudio.com.ar
            </span>
          </div>
          {children}
        </div>
      </div>

      {/* Annotation panel */}
      <div className="mx-auto mt-8 max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 border-t border-white/10 pt-8 md:grid-cols-12">
          {/* Palette */}
          <div className="md:col-span-4">
            <p className="font-[family-name:var(--c-mono)] text-[11px] uppercase tracking-[0.28em] text-white/35">
              Paleta
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {meta.swatches.map((s) => (
                <div key={s.hex} className="flex items-center gap-2.5">
                  <span
                    className="h-8 w-8 rounded-full border border-white/15"
                    style={{ backgroundColor: s.hex }}
                    aria-hidden
                  />
                  <div className="leading-tight">
                    <p className="font-[family-name:var(--c-dm)] text-xs text-white/80">
                      {s.name}
                    </p>
                    <p className="font-[family-name:var(--c-mono)] text-[10px] uppercase text-white/35">
                      {s.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specs */}
          <div className="md:col-span-8">
            <p className="font-[family-name:var(--c-mono)] text-[11px] uppercase tracking-[0.28em] text-white/35">
              Especificaciones
            </p>
            <dl className="mt-4 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
              {meta.specs.map((sp) => (
                <div
                  key={sp.label}
                  className="border-t border-white/10 pt-3"
                >
                  <dt className="font-[family-name:var(--c-mono)] text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {sp.label}
                  </dt>
                  <dd className="mt-1.5 font-[family-name:var(--c-dm)] text-sm leading-relaxed text-white/70">
                    {sp.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
