"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CASES, caseStatus, caseDisplayUrl } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Desktop cases index (md+). All six projects as an editorial table
 * (Nº · proyecto · categoría · estado). Hovering — or keyboard-focusing — a row
 * reveals that project's real screenshot in the sticky preview panel (lg+).
 * Compact (little scroll) while keeping the product visuals present.
 */

const TONE_CLS = {
  live: "text-operational-green",
  soon: "text-champagne",
  dev: "text-stone",
} as const;

export function CasosIndex() {
  const [active, setActive] = useState(0);
  const activeItem = CASES[active];

  return (
    <div className="grid gap-y-12 lg:grid-cols-[1fr_340px] lg:gap-x-16 xl:gap-x-20">
      {/* ── Index list ── */}
      <div>
        <div className="grid grid-cols-[2.5rem_1fr_auto] gap-6 border-b border-charcoal/20 pb-3 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-stone">
          <span>Nº</span>
          <span>Proyecto · Categoría</span>
          <span className="text-right">Estado</span>
        </div>

        <ul>
          {CASES.map((item, i) => {
            const st = caseStatus(item);
            const on = i === active;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-6 border-b border-hairline py-6"
                >
                  <span
                    className={cn(
                      "font-mono text-[0.85rem] tabular-nums transition-colors duration-200",
                      on ? "text-operational-green" : "text-stone",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="flex flex-col gap-1 xl:flex-row xl:items-baseline xl:gap-3">
                    <span
                      className={cn(
                        "font-sans text-[1.5rem] font-bold tracking-[-0.02em] transition-colors duration-200",
                        on ? "text-operational-green" : "text-charcoal",
                      )}
                    >
                      {item.title}
                    </span>
                    <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-stone">
                      {item.eyebrow}
                    </span>
                  </span>

                  <span
                    className={cn(
                      "flex items-center gap-2 text-right font-mono text-[0.62rem] uppercase tracking-[0.14em]",
                      TONE_CLS[st.tone],
                    )}
                  >
                    {st.label}
                    <span
                      aria-hidden
                      className="text-stone transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* ── Sticky preview (lg+) ── */}
      <div className="hidden lg:block">
        <div className="lg:sticky lg:top-28">
          <figure className="overflow-hidden rounded-xl border border-[color:var(--color-hairline-dark)] bg-noche shadow-[0_30px_80px_-45px_rgba(0,0,0,0.8)]">
            {/* Chrome bar with the active project's real URL */}
            <div className="flex items-center gap-3 border-b border-[color:var(--color-hairline-dark)] bg-white/[0.03] px-4 py-2.5">
              <span aria-hidden className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-ivory/20" />
                <span className="h-2 w-2 rounded-full bg-ivory/20" />
                <span className="h-2 w-2 rounded-full bg-ivory/20" />
              </span>
              <span className="truncate font-mono text-[0.62rem] tracking-[0.06em] text-ivory/40">
                {caseDisplayUrl(activeItem) ?? `${activeItem.id} · en desarrollo`}
              </span>
            </div>

            {/* Stacked previews — crossfade on hover (instant under reduced motion) */}
            <div className="relative aspect-[16/10] bg-noche">
              {CASES.map((item, i) => (
                <div
                  key={item.id}
                  aria-hidden={i !== active}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    i === active ? "opacity-100" : "opacity-0",
                  )}
                >
                  {item.image ? (
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="340px"
                      className="object-contain"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 text-center">
                      <span className="font-sans text-lg font-bold text-ivory/80">
                        {item.title}
                      </span>
                      <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-stone">
                        Sistema en desarrollo
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </figure>

          <p className="mt-4 flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-stone">
            <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
            {activeItem.microcopy}
          </p>
        </div>
      </div>
    </div>
  );
}
