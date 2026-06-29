import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteTopBar } from "@/components/site/SiteTopBar";
import { Contacto } from "@/components/site/Contacto";
import { Footer } from "@/components/site/Footer";
import { CaseVisual } from "@/components/site/CaseVisual";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { getCaseBySlug, getCaseSlugs } from "@/lib/site";

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
  return {
    title: `${item.title} · ${item.eyebrow}`,
    description: item.solution,
    openGraph: {
      title: `${item.title} — JYC Studio`,
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

  return (
    <>
      <SiteTopBar />
      <main>
        <article className="bg-ivory pt-[calc(var(--header-h)+2.5rem)] pb-24 sm:pb-32">
          <Container>
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className="overline flex items-center gap-2.5 text-stone">
                  <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-champagne" />
                  {item.eyebrow}
                </p>
                {item.badge && (
                  <span className="rounded-full border border-champagne/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-champagne">
                    {item.badge}
                  </span>
                )}
              </div>
              <h1 className="mt-6 font-sans text-[clamp(2.4rem,6vw,4.4rem)] font-bold leading-[1.04] tracking-[-0.03em] text-charcoal">
                {item.title}
                {item.titleTail && (
                  <span className="mt-2 block font-serif text-[0.5em] font-normal italic text-stone">
                    {item.titleTail}
                  </span>
                )}
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-12 grid max-w-3xl gap-8 sm:grid-cols-2">
                <div>
                  <p className="overline text-stone">{item.problemLabel}</p>
                  <p className="mt-3 text-pretty text-lg leading-relaxed text-ink-soft">
                    {item.problem}
                  </p>
                </div>
                <div>
                  <p className="overline text-champagne">{item.solutionLabel}</p>
                  <p className="mt-3 text-pretty text-lg leading-relaxed text-ink-soft">
                    {item.solution}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-12">
                <CaseVisual item={item} />
                <p className="overline mt-4 flex items-center gap-2 text-stone">
                  <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-champagne" />
                  {item.microcopy}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-14 max-w-2xl">
                <p className="overline text-stone">{item.benefitsLabel}</p>
                <ul className="mt-4 space-y-2.5">
                  {item.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-pretty text-lg leading-relaxed text-ink-soft">
                      <span
                        aria-hidden
                        className="mt-2.5 inline-block h-[5px] w-[5px] shrink-0 rounded-full bg-champagne"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Container>
        </article>

        <Contacto />
      </main>
      <Footer />
    </>
  );
}
