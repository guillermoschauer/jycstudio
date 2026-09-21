import Link from "next/link";
import { CASES, caseStatus } from "@/lib/site";
import { STATUS_CLS } from "@/lib/case-style";
import { cn } from "@/lib/cn";

/**
 * Every project, featured or not, as one editorial table. The featured blocks
 * above already carry the screenshots, so this stays deliberately plain — it is
 * the complete list, not a second gallery.
 *
 * One responsive markup for both breakpoints: no duplicated copy, no client
 * state, so it stays a server component.
 */
export function CasosIndex() {
  return (
    <div>
      <div className="eyebrow hidden grid-cols-[2.5rem_1fr_9rem] gap-6 border-b border-carbon/25 pb-3 text-[0.6rem] tracking-[0.18em] text-muted sm:grid">
        <span className="nums">Nº</span>
        <span>Proyecto · Rubro</span>
        <span className="text-right">Estado</span>
      </div>

      <ul className="border-t border-hairline sm:border-t-0">
        {CASES.map((item, i) => {
          const st = caseStatus(item);
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className="group grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 border-b border-hairline py-5 sm:grid-cols-[2.5rem_1fr_9rem] sm:gap-6 sm:py-6"
              >
                <span className="nums hidden text-[0.82rem] text-muted transition-colors duration-200 group-hover:text-verde sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="flex min-w-0 flex-col gap-1 xl:flex-row xl:items-baseline xl:gap-3">
                  <span className="truncate text-[1.2rem] font-extrabold tracking-[-0.025em] text-carbon transition-colors duration-200 group-hover:text-verde sm:text-[1.45rem]">
                    {item.title}
                  </span>
                  <span className="eyebrow truncate text-[0.58rem] tracking-[0.12em] text-muted">
                    {item.eyebrow}
                  </span>
                </span>

                <span
                  className={cn(
                    "eyebrow flex items-center justify-end gap-3 text-[0.58rem] tracking-[0.14em] sm:text-[0.6rem]",
                    STATUS_CLS.light[st.tone],
                  )}
                >
                  {st.label}
                  <span
                    aria-hidden
                    className="hidden text-muted transition-transform duration-200 group-hover:translate-x-0.5 sm:inline"
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
  );
}
