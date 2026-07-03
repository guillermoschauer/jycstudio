import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CasosIndex } from "@/components/site/CasosIndex";
import { CASES, caseStatus } from "@/lib/site";
import { cn } from "@/lib/cn";

const TONE_CLS = {
  live: "text-operational-green",
  soon: "text-champagne",
  dev: "text-stone",
} as const;

// ─── Mobile: compact list with mini-thumbnails ────────────────────────────────

function MobileList() {
  return (
    <ul>
      {CASES.map((item) => {
        const st = caseStatus(item);
        return (
          <li key={item.id}>
            <Link
              href={item.href}
              className="flex items-center gap-4 border-b border-hairline py-4"
            >
              <div className="relative h-14 w-[4.5rem] shrink-0 overflow-hidden rounded-md bg-[#1A1A1E]">
                {item.image ? (
                  <Image
                    src={item.image.src}
                    alt=""
                    fill
                    sizes="72px"
                    className="object-cover object-top"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center font-mono text-[0.55rem] uppercase tracking-[0.1em] text-stone">
                    Dev
                  </span>
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate font-sans text-[1.05rem] font-bold text-charcoal">
                  {item.title}
                </p>
                <p className="truncate font-mono text-[0.58rem] uppercase tracking-[0.1em] text-stone">
                  {item.eyebrow}
                </p>
              </div>

              <span
                className={cn(
                  "shrink-0 font-mono text-[0.55rem] uppercase tracking-[0.1em]",
                  TONE_CLS[st.tone],
                )}
              >
                {st.label}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Casos() {
  return (
    <section id="casos" className="bg-ivory">

      {/* ── MOBILE (< md) ── */}
      <div className="px-6 pb-14 pt-16 md:hidden sm:px-8">
        <Reveal>
          <p className="flex items-center gap-2.5 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-stone">
            <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
            01 — Casos
          </p>
          <h2 className="mt-5 text-balance font-sans text-[clamp(2.2rem,10vw,2.7rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-charcoal">
            Lo que construimos,{" "}
            <em className="font-serif font-normal italic tracking-normal">
              de punta a punta.
            </em>
          </h2>
        </Reveal>

        <Reveal delay={0.06} className="mt-8">
          <MobileList />
        </Reveal>
      </div>

      {/* ── DESKTOP (md+) — index + hover preview ── */}
      <div className="hidden md:block">
        <Container className="py-20 sm:py-28 lg:py-32">
          <Reveal>
            <p className="overline flex items-center gap-2.5 text-stone">
              <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-operational-green" />
              01 — Casos
            </p>
            <h2 className="mt-6 max-w-3xl text-balance font-sans text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-charcoal">
              Lo que construimos,{" "}
              <em className="font-serif font-normal italic tracking-normal">de punta a punta.</em>
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-[1.05rem] leading-relaxed text-ink-soft sm:text-lg">
              Seis proyectos — sistemas, productos y experiencias. Del problema al
              producto: los que ya están en uso y los que vienen en camino.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-14 lg:mt-20">
            <CasosIndex />
          </Reveal>
        </Container>
      </div>

    </section>
  );
}
