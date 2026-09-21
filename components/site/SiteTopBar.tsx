import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

/**
 * Lightweight bar for secondary pages. The full interactive Header is reserved
 * for the home page. The back link points at the page's actual parent: a case
 * detail goes up to the listing, the listing goes up to the home.
 */
export function SiteTopBar({
  backHref = "/casos",
  backLabel = "Todos los trabajos",
}: {
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <header className="sticky top-0 z-50 h-[var(--header-h)] border-b border-hairline bg-[rgba(247,245,238,0.88)] backdrop-blur-[14px]">
      <Container className="flex h-full items-center justify-between gap-6">
        <Link href="/" className="text-carbon">
          <span className="sm:hidden">
            <Logo size="sm" />
          </span>
          <span className="hidden sm:block">
            <Logo size="md" />
          </span>
        </Link>
        <Link
          href={backHref}
          className="group inline-flex items-center gap-2 text-[0.92rem] text-ink transition-colors duration-200 hover:text-carbon"
        >
          <span
            aria-hidden
            className="text-verde transition-transform duration-300 group-hover:-translate-x-0.5"
          >
            ←
          </span>
          {backLabel}
        </Link>
      </Container>
    </header>
  );
}
