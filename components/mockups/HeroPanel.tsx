import { cn } from "@/lib/cn";

/**
 * Hero visual — a sober, abstract operations panel (not a copy of any real app).
 * Green is used only for live/operational indicators, champagne as a fine accent.
 * Purely decorative.
 */
export function HeroPanel({ className }: { className?: string }) {
  const rows: Array<[string, string, string, "green" | "champagne" | "muted"]> = [
    ["09:30", "Turno · M. Díaz", "Confirmado", "green"],
    ["11:00", "Reserva · Cancha 2", "Confirmado", "green"],
    ["12:15", "Pedido · Ruta norte", "En curso", "champagne"],
    ["16:00", "Turno · L. Pérez", "Pendiente", "muted"],
  ];

  return (
    <div
      aria-hidden
      className={cn(
        "w-full select-none overflow-hidden rounded-2xl border border-[color:var(--color-hairline-dark)] bg-dark-base text-ivory shadow-[0_36px_90px_-44px_rgba(0,0,0,0.75)]",
        className,
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-[color:var(--color-hairline-dark)] px-5 py-3.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
          Operación · Hoy
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wide text-stone">
          <span className="h-1.5 w-1.5 rounded-full bg-operational-green" />
          En vivo
        </span>
      </div>

      <div className="p-5">
        {/* KPIs */}
        <div className="grid grid-cols-3 gap-2.5">
          {[
            ["Reservas", "18"],
            ["Confirmadas", "14"],
            ["Ocupación", "78%"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-lg border border-[color:var(--color-hairline-dark)] bg-white/[0.04] px-3 py-2.5"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-stone">
                {label}
              </p>
              <p className="mt-1 font-serif text-2xl">{value}</p>
            </div>
          ))}
        </div>

        {/* Occupancy bar */}
        <div className="mt-4">
          <div className="mb-1.5 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-stone">
            <span>Ocupación del día</span>
            <span>78%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[78%] rounded-full bg-operational-green" />
          </div>
        </div>

        {/* Operative rows */}
        <div className="mt-4 space-y-px overflow-hidden rounded-lg border border-[color:var(--color-hairline-dark)]">
          {rows.map(([time, label, status, tone]) => (
            <div
              key={time}
              className="flex items-center gap-3 bg-white/[0.03] px-3.5 py-2.5"
            >
              <span className="font-mono text-[11px] tabular-nums text-stone">{time}</span>
              <span className="flex-1 truncate text-xs text-ivory/85">{label}</span>
              <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wide text-stone">
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full",
                    tone === "green" && "bg-operational-green",
                    tone === "champagne" && "bg-champagne",
                    tone === "muted" && "bg-white/25",
                  )}
                />
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
