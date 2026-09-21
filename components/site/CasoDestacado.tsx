import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { CaseVisual } from "@/components/site/CaseVisual";
import { caseStatus, type CaseItem } from "@/lib/site";
import { STATUS_CLS } from "@/lib/case-style";
import { cn } from "@/lib/cn";

/**
 * A featured case: the screenshot at full width of its column, and the
 * before/after next to it. Sides alternate from `lg` up so the column of cases
 * has a rhythm instead of reading as a stack of identical rows.
 */
export function CasoDestacado({
  item,
  flip = false,
  priority = false,
}: {
  item: CaseItem;
  flip?: boolean;
  priority?: boolean;
}) {
  const st = caseStatus(item);

  return (
    <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-x-16">
      <Reveal
        className={cn(
          "lg:col-span-7",
          flip ? "lg:order-2 lg:col-start-6" : "lg:order-1",
        )}
      >
        <CaseVisual item={item} priority={priority} />
      </Reveal>

      <Reveal
        delay={0.08}
        className={cn("lg:col-span-5", flip ? "lg:order-1 lg:row-start-1" : "lg:order-2")}
      >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="eyebrow text-[0.6rem] tracking-[0.16em] text-muted">{item.eyebrow}</p>
          <span
            className={cn(
              "eyebrow text-[0.58rem] tracking-[0.14em]",
              STATUS_CLS.light[st.tone],
            )}
          >
            {st.label}
          </span>
        </div>

        <h3 className="mt-4 text-balance text-[1.9rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-carbon lg:text-[2.4rem]">
          {item.title}
        </h3>

        {/* La versión corta si existe: en la home se escanea, no se lee. */}
        <dl className="mt-7 space-y-5">
          <div>
            <dt className="eyebrow text-[0.58rem] text-muted">Problema</dt>
            <dd className="mt-2 max-w-[48ch] text-pretty text-[0.95rem] leading-relaxed text-ink">
              {item.brief?.problem ?? item.problem}
            </dd>
          </div>
          <div>
            <dt className="eyebrow text-[0.58rem] text-verde">Qué resolvimos</dt>
            <dd className="mt-2 max-w-[48ch] text-pretty text-[0.95rem] leading-relaxed text-carbon">
              {item.brief?.solution ?? item.solution}
            </dd>
          </div>
        </dl>

        <Link
          href={item.href}
          className="group mt-8 inline-flex items-baseline gap-2.5 text-[0.95rem] font-semibold text-carbon"
        >
          <span className="relative">
            Ver el caso
            <span
              aria-hidden
              className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-verde transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
          </span>
          <span
            aria-hidden
            className="text-verde transition-transform duration-300 ease-out group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      </Reveal>
    </article>
  );
}
