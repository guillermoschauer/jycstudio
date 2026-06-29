import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { CaseVisual } from "@/components/site/CaseVisual";
import { CASES, type CaseItem } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Casos() {
  return (
    <section id="casos" className="bg-ivory py-24 sm:py-32">
      <Container>
        {/* Heading */}
        <Reveal>
          <p className="overline flex items-center gap-2.5 text-stone">
            <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
            Casos
          </p>
          <h2 className="mt-6 max-w-3xl text-balance font-sans text-[clamp(2.4rem,5vw,4rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-charcoal">
            Problemas concretos, resueltos con{" "}
            <em className="font-serif font-normal italic tracking-normal">producto.</em>
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
            Una galería curada de productos reales y sistemas en desarrollo. La
            misma forma de pensar: entender la operación primero, construir
            después.
          </p>
        </Reveal>

        {/* Cases */}
        <div className="mt-16 flex flex-col gap-24 sm:mt-20 sm:gap-32">
          {CASES.map((item, i) => (
            <CaseRow key={item.id} item={item} reversed={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function CaseRow({ item, reversed }: { item: CaseItem; reversed: boolean }) {
  return (
    <article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Text */}
      <Reveal className={cn(reversed && "lg:order-2")}>
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
                    : "border-champagne/40 text-champagne",
              )}
            >
              {item.badge}
            </span>
          )}
        </div>

        <h3 className="mt-5 font-sans text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.06] tracking-[-0.025em] text-charcoal">
          {item.title}
          {item.titleTail && (
            <span className="mt-1 block font-serif text-[0.62em] font-normal italic text-stone">
              {item.titleTail}
            </span>
          )}
        </h3>

        <dl className="mt-7 space-y-5">
          <div className="grid grid-cols-[92px_1fr] gap-4">
            <dt className="overline pt-1 text-stone">{item.problemLabel}</dt>
            <dd className="text-pretty leading-relaxed text-ink-soft">{item.problem}</dd>
          </div>
          <div className="grid grid-cols-[92px_1fr] gap-4">
            <dt className="overline pt-1 text-champagne">{item.solutionLabel}</dt>
            <dd className="text-pretty leading-relaxed text-ink-soft">{item.solution}</dd>
          </div>
        </dl>

        <div className="mt-6">
          <p className="overline mb-2.5 text-stone">{item.benefitsLabel}</p>
          <ul className="space-y-2">
            {item.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-pretty leading-relaxed text-ink-soft">
                <span
                  aria-hidden
                  className="mt-2 inline-block h-[5px] w-[5px] shrink-0 rounded-full bg-operational-green"
                />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
          <ArrowLink href={item.href}>{item.cta}</ArrowLink>
          {item.liveUrl && (
            <ArrowLink href={item.liveUrl} external>
              Visitar sitio
            </ArrowLink>
          )}
        </div>
      </Reveal>

      {/* Visual */}
      <Reveal delay={0.1} className={cn(reversed && "lg:order-1")}>
        <CaseVisual item={item} />
        <p className="overline mt-4 flex items-center gap-2 text-stone">
          <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
          {item.microcopy}
        </p>
      </Reveal>
    </article>
  );
}
