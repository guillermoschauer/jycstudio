import { cn } from "@/lib/cn";

/**
 * Panacity — in-house operative mockup (no real screenshot yet).
 * Field-sales control surface: orders, visited shops, pending restock,
 * critical stock, sales per rep and a list of points of sale.
 * Same visual weight as the real case screenshots. Decorative.
 */
export function PanacityMockup({ className }: { className?: string }) {
  const kpis: Array<[string, string, string]> = [
    ["Pedidos del día", "128", "+12"],
    ["Comercios visitados", "34", "+7"],
    ["Reposición pendiente", "21", "−3"],
    ["Stock crítico", "9", "alerta"],
  ];
  const reps: Array<[string, number, string]> = [
    ["M. Díaz", 86, "$ 184.200"],
    ["R. Sosa", 64, "$ 132.900"],
    ["L. Pérez", 48, "$ 98.500"],
  ];
  const shops: Array<[string, string, "ok" | "pend" | "low"]> = [
    ["Mercado El Sol", "Pedido + reposición", "ok"],
    ["Dietética Norte", "Reposición pendiente", "pend"],
    ["Almacén Centro", "Stock crítico", "low"],
    ["Café Las Lomas", "Pedido confirmado", "ok"],
  ];

  return (
    <div
      aria-hidden
      className={cn(
        "w-full select-none overflow-hidden rounded-xl border border-[color:var(--color-hairline-dark)] bg-dark-base text-ivory shadow-[0_30px_80px_-40px_rgba(0,0,0,0.75)]",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[color:var(--color-hairline-dark)] px-5 py-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
            Panacity · Operación de campo
          </p>
          <p className="mt-1 font-serif text-lg">Semana 24</p>
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-wide text-stone">
          <span className="h-1.5 w-1.5 rounded-full bg-operational-green" />
          Tiempo real
        </span>
      </div>

      <div className="p-5">
        {/* KPI grid */}
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {kpis.map(([label, value, delta]) => (
            <div
              key={label}
              className="rounded-lg border border-[color:var(--color-hairline-dark)] bg-white/[0.04] px-3.5 py-3"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-stone">
                {label}
              </p>
              <div className="mt-1 flex items-baseline justify-between gap-1">
                <span className="font-serif text-2xl">{value}</span>
                <span
                  className={cn(
                    "font-mono text-[10px]",
                    delta.startsWith("+") && "text-operational-green",
                    delta.startsWith("−") && "text-stone",
                    delta === "alerta" && "text-champagne",
                  )}
                >
                  {delta}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          {/* Sales per rep */}
          <div className="rounded-lg border border-[color:var(--color-hairline-dark)] p-4">
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.14em] text-stone">
              Ventas por vendedor
            </p>
            <div className="space-y-3">
              {reps.map(([name, pct, amount]) => (
                <div key={name}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-ivory/85">{name}</span>
                    <span className="font-mono text-[11px] tabular-nums text-stone">
                      {amount}
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      style={{ width: `${pct}%` }}
                      className="h-full rounded-full bg-operational-green"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Points of sale */}
          <div className="rounded-lg border border-[color:var(--color-hairline-dark)] p-4">
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.14em] text-stone">
              Puntos de venta
            </p>
            <div className="space-y-px overflow-hidden rounded-md">
              {shops.map(([name, state, tone]) => (
                <div
                  key={name}
                  className="flex items-center gap-3 bg-white/[0.03] px-3 py-2"
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 shrink-0 rounded-full",
                      tone === "ok" && "bg-operational-green",
                      tone === "pend" && "bg-champagne",
                      tone === "low" && "bg-white/30",
                    )}
                  />
                  <span className="flex-1 truncate text-xs text-ivory/85">{name}</span>
                  <span className="hidden font-mono text-[9px] uppercase tracking-wide text-stone sm:inline">
                    {state}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
