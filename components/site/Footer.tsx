import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-hairline-dark)] bg-dark-base py-10 text-ivory">
      <Container>
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:gap-6 sm:text-left">
          <a href="#top" aria-label="JYC Studio — inicio" className="text-ivory">
            <Wordmark className="text-[1.1rem] sm:text-[1.45rem]" />
          </a>

          <p className="max-w-md text-pretty text-sm text-ivory/55">
            {SITE.longClaim}
          </p>

          <p className="shrink-0 font-mono text-[11px] tracking-[0.14em] text-stone">
            © 2026 · Estudio independiente
          </p>
        </div>
      </Container>
    </footer>
  );
}
