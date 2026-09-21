import type { Metadata } from "next";
import { SiteTopBar } from "@/components/site/SiteTopBar";
import { CasosIndex } from "@/components/site/CasosIndex";
import { Contacto } from "@/components/site/Contacto";
import { Footer } from "@/components/site/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { CASES, SITE } from "@/lib/site";

/**
 * /casos — the complete list.
 *
 * The home shows four cases and links here; this is where the rest lives. The
 * route also existed as a 404 until now: anyone trimming `/casos/sacaturno`
 * back to `/casos` hit nothing.
 */

const TITLE = "Todos los trabajos";
const DESCRIPTION =
  "Productos y sistemas que construimos: en uso, en beta y en desarrollo. Cada caso contado como problema, qué diseñamos y qué resuelve.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/casos" },
  openGraph: {
    type: "website",
    url: `${SITE.url}/casos`,
    title: `${TITLE} — ${SITE.name}`,
    description: DESCRIPTION,
  },
  twitter: {
    title: `${TITLE} — ${SITE.name}`,
    description: DESCRIPTION,
  },
};

export default function CasosPage() {
  return (
    <>
      <SiteTopBar backHref="/" backLabel="Volver al inicio" />
      <main>
        <section className="bg-ivory pb-20 pt-[calc(var(--header-h)+2.5rem)] sm:pb-28">
          <Container>
            <Reveal>
              <Eyebrow>Casos</Eyebrow>
              <h1 className="mt-7 max-w-[16ch] text-balance text-[clamp(2.2rem,9vw,3rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-carbon lg:max-w-[20ch] lg:text-[clamp(2.6rem,4vw,3.8rem)]">
                <span className="text-muted">Cómo funcionaba antes.</span>
                <span className="mt-1 block">Cómo funciona ahora.</span>
              </h1>
              <p className="mt-7 max-w-[56ch] text-pretty leading-relaxed text-ink lg:text-[1.1rem]">
                {CASES.length} productos y sistemas: algunos en uso todos los
                días, otros en beta y otros todavía en construcción. En todos el
                punto de partida fue el mismo — entender cómo funcionaba la
                operación antes de escribir una línea de código.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-14 lg:mt-20">
              <CasosIndex />
            </Reveal>
          </Container>
        </section>

        <Contacto />
      </main>
      <Footer />
    </>
  );
}
