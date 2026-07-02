import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CaseVisual } from "@/components/site/CaseVisual";
import { CASES, type CaseItem } from "@/lib/site";
import { cn } from "@/lib/cn";

// ─── Data splits ──────────────────────────────────────────────────────────────

const FEATURED = CASES.filter((c) => !c.taller);   // 3 main cases (editorial)
const TALLER   = CASES.filter((c) =>  c.taller);   // 3 pipeline cases

// ─── Mobile: single editorial case block ──────────────────────────────────────

function MobileCaseBlock({ item, index }: { item: CaseItem; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="relative px-6 pb-16 pt-12 sm:px-8">
      {/* Ghost numeral — upper right, behind content */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-10 select-none font-mono text-[7.5rem] font-semibold leading-none tracking-[-0.04em] text-charcoal/[0.06] tabular-nums"
      >
        {num}
      </span>

      <Reveal>
        {/* Eyebrow: category + status */}
        <p className="flex flex-wrap items-center gap-x-2 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-stone">
          {item.eyebrow}
          {item.badgeTone === "live" && (
            <>
              {" — "}
              <span className="inline-flex items-center gap-1.5 text-operational-green">
                EN USO
                <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
              </span>
            </>
          )}
        </p>

        {/* Product name */}
        <h3 className="mt-3 font-sans text-[clamp(2rem,9vw,2.4rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-charcoal">
          {item.title}
        </h3>
      </Reveal>

      {/* Full-bleed image — negates px-6/sm:px-8 Container padding */}
      {item.image && (
        <Reveal className="mt-6">
          <div
            className={cn(
              "-mx-6 overflow-hidden sm:-mx-8",
              "aspect-[4/3]",
              item.tone === "dark" ? "bg-[#1A1A1E]" : "bg-[#E9E2D2]",
            )}
          >
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={item.image.width}
              height={item.image.height}
              sizes="100vw"
              loading="lazy"
              className="h-full w-full object-cover object-left-top"
            />
          </div>
        </Reveal>
      )}

      {/* Problema / Ahora */}
      <Reveal delay={0.08}>
        <dl className="mt-7 space-y-4">
          <div className="flex flex-col gap-1.5">
            <dt className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-terracotta">
              {item.problemLabel}
            </dt>
            <dd className="text-pretty text-[0.97rem] leading-relaxed text-ink-soft">
              {item.problem}
            </dd>
          </div>
          <div className="flex flex-col gap-1.5">
            <dt className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-operational-green">
              {item.solutionLabel}
            </dt>
            <dd className="text-pretty text-[0.97rem] leading-relaxed text-ink-soft">
              {item.solution}
            </dd>
          </div>
        </dl>

        {/* CTA with thick underline decoration */}
        <Link
          href={item.href}
          className="mt-8 inline-flex items-center gap-2 font-sans text-[0.97rem] font-semibold text-charcoal underline decoration-2 underline-offset-4 hover:decoration-champagne"
        >
          Ver caso completo
          <span aria-hidden className="no-underline">→</span>
        </Link>
      </Reveal>
    </article>
  );
}

// ─── Mobile: "En el taller" pipeline list ─────────────────────────────────────

function EnElTaller() {
  return (
    <div className="px-6 pb-14 pt-2 sm:px-8">
      <p className="flex items-center gap-2.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-stone">
        <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-stone/50" />
        En el taller
      </p>
      <ul className="mt-3 border-t border-hairline">
        {TALLER.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="group flex items-center justify-between gap-3 border-b border-hairline py-4 text-charcoal"
            >
              <span className="font-sans text-[1rem] font-semibold">
                {item.title}
              </span>
              <div className="flex shrink-0 items-center gap-2">
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.12em] text-stone">
                  {item.tallerLabel}
                </span>
                <span
                  aria-hidden
                  className="text-stone transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Desktop: existing row layout (unchanged) ─────────────────────────────────

function CaseRow({
  item,
  reversed,
  onPaper,
}: {
  item: CaseItem;
  reversed: boolean;
  onPaper: boolean;
}) {
  return (
    <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
      {/* Visual — product first in DOM, alternating position on desktop */}
      <Reveal className={cn(reversed ? "lg:order-1" : "lg:order-2")}>
        <CaseVisual item={item} />
        <p className="overline mt-4 flex items-center gap-2 text-stone">
          <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
          {item.microcopy}
        </p>
      </Reveal>

      {/* Text */}
      <Reveal delay={0.1} className={cn(reversed ? "lg:order-2" : "lg:order-1")}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <p className="overline text-stone">{item.eyebrow}</p>
          {item.badge && (
            <span
              className={cn(
                "rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em]",
                item.badgeTone === "live"
                  ? "border-operational-green/50 text-operational-green"
                  : item.badgeTone === "dev"
                    ? "border-stone/40 text-stone"
                    : "border-champagne/50 text-champagne",
              )}
            >
              {item.badge}
            </span>
          )}
        </div>

        <h3 className="mt-5 font-sans text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[1.05] tracking-[-0.025em] text-charcoal">
          {item.title}
          {item.titleTail && (
            <span className="mt-1 block font-serif text-[0.6em] font-normal italic text-stone">
              {item.titleTail}
            </span>
          )}
        </h3>

        <dl className="mt-7 space-y-5">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-[auto_1fr] sm:gap-5">
            <dt>
              <span className="inline-flex w-fit items-center rounded-md bg-[rgba(160,86,58,0.10)] px-2.5 py-1 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-terracotta">
                {item.problemLabel}
              </span>
            </dt>
            <dd className="text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
              {item.problem}
            </dd>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-[auto_1fr] sm:gap-5">
            <dt>
              <span className="inline-flex w-fit items-center rounded-md bg-[rgba(46,111,94,0.11)] px-2.5 py-1 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-operational-green">
                {item.solutionLabel}
              </span>
            </dt>
            <dd className="text-pretty text-[1.05rem] leading-relaxed text-ink-soft">
              {item.solution}
            </dd>
          </div>
        </dl>

        {/* Benefits — hidden on mobile to keep focus on problem/solution */}
        <div className="mt-6 hidden sm:block">
          <p className="overline mb-2.5 text-stone">{item.benefitsLabel}</p>
          <ul className="space-y-2">
            {item.benefits.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 text-pretty text-[1.05rem] leading-relaxed text-ink-soft"
              >
                <span
                  aria-hidden
                  className="mt-2 inline-block h-[5px] w-[5px] shrink-0 rounded-full bg-operational-green"
                />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <CaseAction href={item.href} onPaper={onPaper}>{item.cta}</CaseAction>
          {item.liveUrl && (
            <CaseAction href={item.liveUrl} onPaper={onPaper} external>
              Visitar sitio
            </CaseAction>
          )}
        </div>
      </Reveal>
    </article>
  );
}

function CaseAction({
  href,
  children,
  external = false,
  onPaper,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  onPaper: boolean;
}) {
  const classes = cn(
    "group inline-flex w-full min-h-[3rem] items-center justify-center gap-2.5 rounded-xl border border-hairline px-4 py-3 font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-charcoal transition-all duration-300 ease-out hover:border-champagne/60 hover:bg-[#f0e9dc] active:scale-[0.98] sm:w-auto sm:justify-start",
    onPaper ? "bg-ivory" : "bg-paper",
  );
  const arrow = (
    <span
      aria-hidden
      className="text-champagne transition-transform duration-300 ease-out group-hover:translate-x-0.5"
    >
      {external ? "↗" : "→"}
    </span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}{arrow}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}{arrow}
    </Link>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Casos() {
  return (
    <section id="casos">

      {/* ── MOBILE layout (< md) ── */}
      <div className="md:hidden">
        {/* Section heading */}
        <div className="px-6 pb-2 pt-16 sm:px-8">
          <Reveal>
            <p className="flex items-center gap-2.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-stone">
              <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
              01 — Casos
            </p>
            <h2 className="mt-5 text-balance font-sans text-[clamp(2.2rem,10vw,2.7rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-charcoal">
              Lo que construimos{" "}
              <em className="font-serif font-normal italic tracking-normal">
                está en uso.
              </em>
            </h2>
            {/* Animated divider line */}
            <div className="mt-6 h-px w-full bg-[rgba(23,22,15,0.14)]" />
          </Reveal>
        </div>

        {/* 3 featured editorial cases */}
        {FEATURED.map((item, i) => (
          <MobileCaseBlock key={item.id} item={item} index={i} />
        ))}

        {/* Pipeline: "En el taller" */}
        <EnElTaller />
      </div>

      {/* ── DESKTOP layout (md+) ── */}
      <div className="hidden md:block">
        {/* Heading stripe */}
        <div className="bg-ivory pb-14 pt-20 sm:pb-20 sm:pt-28 lg:pb-24 lg:pt-32">
          <Container>
            <Reveal>
              <p className="overline flex items-center gap-2.5 text-stone">
                <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
                01 — Casos
              </p>
              <h2 className="mt-6 max-w-3xl text-balance font-sans text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-charcoal">
                Lo que construimos{" "}
                <em className="font-serif font-normal italic tracking-normal">está en uso.</em>
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-[1.05rem] leading-relaxed text-ink-soft sm:text-lg">
                Herramientas que nacen de problemas concretos: mostrar un proyecto,
                optimizar una tarea, ahorrar tiempo o hacer más simple el día a día.
              </p>
            </Reveal>
          </Container>
        </div>

        {/* Full-bleed case stripes, alternating bg */}
        {CASES.map((item, i) => {
          const onPaper = i % 2 === 0;
          return (
            <div key={item.id} className={onPaper ? "bg-paper" : "bg-ivory"}>
              <Container className="py-20 sm:py-24 lg:py-28">
                <CaseRow item={item} reversed={i % 2 === 1} onPaper={onPaper} />
              </Container>
            </div>
          );
        })}
      </div>

    </section>
  );
}
