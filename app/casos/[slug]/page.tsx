import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteTopBar } from "@/components/site/SiteTopBar";
import { Contacto } from "@/components/site/Contacto";
import { Footer } from "@/components/site/Footer";
import { CaseVisual } from "@/components/site/CaseVisual";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Screenshot } from "@/components/ui/Screenshot";
import { STATUS_CLS } from "@/lib/case-style";
import { SITE, caseStatus, getCaseBySlug, getCaseSlugs } from "@/lib/site";
import { cn } from "@/lib/cn";

export function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) return {};

  const title = `${item.title} · ${item.eyebrow}`;
  return {
    title,
    description: item.solution,
    alternates: { canonical: item.href },
    openGraph: {
      type: "article",
      url: `${SITE.url}${item.href}`,
      title: `${item.title} — ${SITE.name}`,
      description: item.solution,
    },
    twitter: {
      title: `${item.title} — ${SITE.name}`,
      description: item.solution,
    },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) notFound();

  const st = caseStatus(item);

  // The house format: the problem first, the decision second, the outcome last.
  const narrative = [
    { label: "Problema", text: item.problem },
    { label: "Qué diseñamos", text: item.process },
    { label: "Qué resuelve", text: item.solution },
  ];

  return (
    <>
      <SiteTopBar />
      <main>
        <article className="bg-ivory pb-24 pt-[calc(var(--header-h)+2.5rem)] sm:pb-32">
          <Container>
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <p className="eyebrow text-muted">{item.eyebrow}</p>
                <span
                  className={cn(
                    "eyebrow text-[0.6rem] tracking-[0.14em]",
                    STATUS_CLS.light[st.tone],
                  )}
                >
                  {st.label}
                </span>
              </div>

              <h1 className="mt-7 max-w-[16ch] text-balance text-[clamp(2.4rem,9vw,3.2rem)] font-extrabold leading-[1.03] tracking-[-0.04em] text-carbon lg:text-[clamp(3rem,5vw,4.4rem)]">
                {item.title}
              </h1>
              {item.titleTail && (
                <p className="mt-3 max-w-[30ch] text-pretty text-[1.1rem] text-muted lg:text-[1.3rem]">
                  {item.titleTail}
                </p>
              )}
            </Reveal>

            {/* Problema → Proceso → Solución */}
            <Reveal delay={0.08}>
              <ol className="mt-14 grid gap-px overflow-hidden border-y border-hairline lg:grid-cols-3 lg:gap-x-12 lg:border-x-0">
                {narrative.map((part, i) => (
                  <li
                    key={part.label}
                    className={cn(
                      "py-7 lg:py-9",
                      i > 0 && "border-t border-hairline lg:border-l lg:border-t-0 lg:pl-12",
                    )}
                  >
                    <p
                      className={cn(
                        "eyebrow flex items-center gap-2.5 text-[0.6rem]",
                        i === 2 ? "text-verde" : "text-muted",
                      )}
                    >
                      <span className="nums">0{i + 1}</span>
                      <span aria-hidden className="text-current/50">
                        —
                      </span>
                      <span>{part.label}</span>
                    </p>
                    <p className="mt-4 text-pretty leading-relaxed text-carbon lg:text-[1.05rem]">
                      {part.text}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-14">
                <CaseVisual item={item} priority />
                <p className="eyebrow mt-4 flex items-center gap-2.5 text-[0.6rem] text-muted">
                  <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-verde" />
                  {item.microcopy}
                </p>
              </div>
            </Reveal>

            {/* Secondary screenshots live only here, never in the home listing. */}
            {item.moreImages?.map((img) => (
              <Reveal key={img.src} delay={0.1} className="mt-8">
                <Screenshot
                  image={img}
                  title={item.title}
                  sizes="(min-width: 1024px) 62vw, 100vw"
                />
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-x-20">
                <div className="lg:col-span-4">
                  <h2 className="text-[1.6rem] font-extrabold leading-tight tracking-[-0.03em] text-carbon">
                    {item.changesLabel ?? "Qué cambió en el día a día"}
                  </h2>
                </div>
                <ul className="lg:col-span-8">
                  {item.changes.map((change) => (
                    <li
                      key={change}
                      className="flex items-start gap-4 border-b border-hairline py-4 text-pretty text-[1.05rem] leading-snug text-carbon"
                    >
                      <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-verde" />
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {item.liveUrl && (
              <Reveal delay={0.1}>
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-12 inline-flex items-baseline gap-3 text-[1.05rem] font-semibold text-carbon"
                >
                  <span className="relative">
                    {/* Neutral on purpose: a beta and an early-stage product are
                        both public, but neither is "in production" yet. */}
                    {item.status === "live" ? "Ver el producto funcionando" : "Abrir la versión pública"}
                    <span
                      aria-hidden
                      className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-verde transition-transform duration-300 ease-out group-hover:scale-x-100"
                    />
                  </span>
                  <span
                    aria-hidden
                    className="text-verde transition-transform duration-300 ease-out group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              </Reveal>
            )}
          </Container>
        </article>

        <Contacto />
      </main>
      <Footer />
    </>
  );
}
