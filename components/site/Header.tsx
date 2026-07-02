"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Wordmark } from "@/components/ui/Wordmark";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[var(--header-h)] transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-hairline bg-ivory/85 shadow-[0_1px_24px_-12px_rgba(34,32,27,0.35)] backdrop-blur-md"
          : "border-b border-transparent bg-ivory/0",
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <Link
          href="#top"
          aria-label="JYC Studio — inicio"
          className="text-charcoal"
          onClick={() => setMenuOpen(false)}
        >
          <Wordmark className="text-[1.2rem] sm:text-[1.55rem]" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-sans text-sm text-ink-soft transition-colors duration-200 hover:text-charcoal"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-champagne transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-full border border-charcoal px-5 py-2 text-sm font-medium text-charcoal transition-colors duration-300 hover:bg-charcoal hover:text-ivory"
          >
            Hablemos
          </a>
        </nav>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="sr-only">Menú</span>
          <span className="relative block h-4 w-6">
            <span
              className={cn(
                "absolute left-0 block h-[1.5px] w-6 bg-charcoal transition-all duration-300",
                menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 block h-[1.5px] w-6 bg-charcoal transition-all duration-300",
                menuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0",
              )}
            />
          </span>
        </button>
      </Container>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: "easeOut" }}
            className="fixed inset-0 top-0 z-40 flex h-[100dvh] flex-col bg-ivory md:hidden"
          >
            <div className="flex flex-1 flex-col justify-center px-8">
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduce ? 0 : 0.45,
                      delay: reduce ? 0 : 0.08 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-hairline py-5 font-serif text-4xl text-charcoal"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </div>
            <div className="px-8 pb-12">
              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-charcoal px-6 py-4 text-sm font-medium text-ivory"
              >
                Hablemos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
