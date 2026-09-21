import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { FOUNDER } from "@/lib/site";

/**
 * Quién está detrás — reassurance before the close.
 *
 * Deliberately *not* a numbered chapter. The numerals carry the argument
 * (problema → qué hacemos → método → casos → para quién → contacto); this is an
 * aside, like the manifesto, and staying out of that sequence is what keeps it
 * from reading as a personal-brand page.
 *
 * Same reason there is no display headline: the section label is the heading,
 * and the largest type here is still less than half a section headline. The
 * portrait is capped well under the text column so the person supports the
 * company rather than replacing it.
 */
export function QuienEstaDetras() {
  const { photo } = FOUNDER;

  return (
    <section
      id="quien-esta-detras"
      aria-labelledby="quien-esta-detras-titulo"
      className="border-t border-hairline bg-ivory"
    >
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-x-16">
          <Reveal className="lg:col-span-4">
            {/* Hairline, not a decorative frame: the portrait's background is
                almost as light as the page, so without it the edge dissolves. */}
            <div className="relative aspect-[4/5] w-full max-w-[13.5rem] overflow-hidden rounded-lg border border-hairline sm:max-w-[16rem] lg:max-w-[20rem]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 20rem, 16rem"
                className="object-cover"
                style={{ objectPosition: photo.focus }}
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7 lg:col-start-6">
            <h2
              id="quien-esta-detras-titulo"
              className="eyebrow flex items-center gap-2.5 text-muted"
            >
              <span aria-hidden className="inline-block h-[5px] w-[5px] shrink-0 rounded-full bg-verde" />
              Quién está detrás
            </h2>

            <p className="mt-7 max-w-[34ch] text-balance text-[1.25rem] font-semibold leading-snug tracking-[-0.02em] text-carbon lg:text-[1.5rem]">
              {FOUNDER.lead}
            </p>

            {FOUNDER.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-5 max-w-[58ch] text-pretty leading-relaxed text-ink"
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-8 border-t border-hairline pt-5">
              <p className="text-[0.95rem] font-semibold text-carbon">{FOUNDER.name}</p>
              <p className="eyebrow mt-1.5 text-[0.58rem] text-muted">{FOUNDER.role}</p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
