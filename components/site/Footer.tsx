import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SITE, MAILTO_URL, NAV_LINKS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="on-dark border-t border-[color:var(--color-hairline-dark)] bg-carbon-deep py-14 text-ivory">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div>
            <Link href="/" className="inline-block text-ivory">
              <Logo size="lg" onDark withTagline />
            </Link>
            {/* Descriptor funcional, no el claim: repetir el H1 acá le quita
                peso arriba y no agrega nada al pie. */}
            <p className="mt-7 max-w-[34ch] text-pretty leading-relaxed text-gris">
              Analizamos procesos, automatizamos lo repetitivo y construimos
              software cuando hace falta.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <nav aria-label="Secciones" className="flex flex-col gap-3">
              <p className="eyebrow text-[0.6rem] text-gris">Secciones</p>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[0.95rem] text-ivory/85 transition-colors duration-200 hover:text-ivory"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <p className="eyebrow text-[0.6rem] text-gris">Contacto</p>
              <a
                href={MAILTO_URL}
                className="text-[0.95rem] text-ivory/85 transition-colors duration-200 hover:text-ivory"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[color:var(--color-hairline-dark)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-[0.58rem] text-gris">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p className="eyebrow text-[0.58rem] text-gris">schauerlabs.com</p>
        </div>
      </Container>
    </footer>
  );
}
