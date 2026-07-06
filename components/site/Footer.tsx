import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { SITE, MAILTO_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-ivory py-10 text-charcoal">
      <Container>
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:gap-6 sm:text-left">
          <a href="#top" aria-label="JYC Studio — inicio" className="text-charcoal">
            <Wordmark className="text-[1.1rem] sm:text-[1.45rem]" />
          </a>

          <p className="max-w-md text-pretty text-sm text-ink-soft">
            {SITE.longClaim}
          </p>

          <div className="flex shrink-0 flex-col items-center gap-2 sm:items-end">
            <a
              href={MAILTO_URL}
              className="font-mono text-[11px] tracking-[0.14em] text-ink-soft transition-colors duration-200 hover:text-charcoal"
            >
              {SITE.email}
            </a>
            <p className="font-mono text-[11px] tracking-[0.14em] text-stone">
              © 2026 · Estudio independiente
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
