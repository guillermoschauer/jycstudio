import { cn } from "@/lib/cn";

/**
 * Panacity — operational schematic, used where the other cases show a real
 * screenshot. Deliberately *not* a fake dashboard: the system is still in
 * development, so inventing figures would be inventing results. What the
 * diagram shows instead is the only thing that is true today — the shape of the
 * flow the product replaces. Decorative; the case copy carries the meaning.
 */

const STAGES: Array<{ label: string; items: string[] }> = [
  { label: "En el comercio", items: ["Pedido", "Devolución", "Reposición"] },
  { label: "Carga única", items: ["Una vez", "En el momento", "En el lugar"] },
  { label: "En la oficina", items: ["Stock", "Ruta del vendedor", "Seguimiento"] },
];

export function PanacityMockup({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "w-full select-none overflow-hidden rounded-lg border border-[color:var(--color-hairline-dark)] bg-carbon text-ivory",
        className,
      )}
    >
      <div className="border-b border-[color:var(--color-hairline-dark)] px-6 py-4">
        <p className="eyebrow text-[0.58rem] text-gris">
          Panacity · Esquema operativo
        </p>
      </div>

      <div className="relative px-6 py-10 sm:px-10 sm:py-14">
        <ol className="relative grid gap-10 sm:grid-cols-3 sm:gap-6">
          {/* Flow line */}
          <span
            aria-hidden
            className="absolute bottom-2 left-[4px] top-2 w-px bg-[color:var(--color-hairline-dark)] sm:bottom-auto sm:left-0 sm:right-0 sm:top-[4px] sm:h-px sm:w-auto"
          />

          {STAGES.map((stage, i) => (
            <li key={stage.label} className="relative pl-8 sm:pl-0 sm:pt-8">
              <span
                className={cn(
                  "absolute left-0 top-[6px] block h-[9px] w-[9px] rounded-full sm:top-0",
                  i === 1
                    ? "bg-verde-on-dark"
                    : "border border-[color:var(--color-hairline-dark)] bg-carbon",
                )}
              />
              <p className="eyebrow text-[0.6rem] text-gris">{stage.label}</p>
              <ul className="mt-4 space-y-2">
                {stage.items.map((label) => (
                  <li key={label} className="text-[0.95rem] leading-snug text-ivory/85">
                    {label}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
