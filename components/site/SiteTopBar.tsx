import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/ui/Wordmark";

/**
 * Lightweight top bar for secondary pages (case detail).
 * The full interactive Header is reserved for the landing page.
 */
export function SiteTopBar() {
  return (
    <header className="sticky top-0 z-50 h-[var(--header-h)] border-b border-hairline bg-ivory/85 backdrop-blur-md">
      <Container className="flex h-full items-center justify-between">
        <Link href="/" aria-label="JYC Studio — inicio" className="text-charcoal">
          <Wordmark className="text-[1.1rem] sm:text-[1.45rem]" />
        </Link>
        <Link
          href="/#trabajo"
          className="group inline-flex items-center gap-2 font-sans text-sm text-ink-soft transition-colors duration-200 hover:text-charcoal"
        >
          <span aria-hidden className="transition-transform duration-300 group-hover:-translate-x-0.5">
            ←
          </span>
          Volver
        </Link>
      </Container>
    </header>
  );
}
