"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Wordmark } from "@/components/ui/Wordmark";
import { Container } from "@/components/ui/Container";
import { WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/cn";

const MENU_LINKS = [
  { label: "Proyectos",       href: "#casos"          },
  { label: "Cómo trabajamos", href: "#como-trabajamos" },
  { label: "Contacto",        href: "#contacto"        },
] as const;

export function Header() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
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
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  // Light marks/text when sitting over the dark hero (top) or the dark menu
  // overlay; dark once scrolled onto the light sections below.
  const lightUI = !scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[var(--header-h)]",
        "transition-[background-color,box-shadow,border-color] duration-300",
        scrolled
          ? "border-b border-hairline bg-[rgba(243,238,228,0.86)] shadow-[0_1px_24px_-12px_rgba(34,32,27,0.35)] backdrop-blur-[14px]"
          : "border-b border-[rgba(243,238,228,0.08)] bg-[rgba(243,238,228,0)]",
      )}
    >
      <Container className="flex h-full items-center justify-between">
        <Link
          href="#top"
          aria-label="JYC Studio — inicio"
          className={cn(
            "transition-colors duration-300",
            lightUI ? "text-ivory" : "text-charcoal",
          )}
          onClick={close}
        >
          <Wordmark className="text-[1.2rem] sm:text-[1.55rem]" />
        </Link>

        {/* Desktop nav — section numerals tie it to the numbered spreads */}
        <nav className="hidden items-center gap-8 md:flex">
          {MENU_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "group relative flex items-baseline gap-1.5 font-sans text-sm transition-colors duration-200",
                lightUI ? "text-ivory/75 hover:text-ivory" : "text-ink-soft hover:text-charcoal",
              )}
            >
              <span
                className={cn(
                  "font-mono text-[0.6rem] tabular-nums transition-colors duration-200",
                  lightUI ? "text-operational-green" : "text-champagne",
                )}
              >
                0{i + 1}
              </span>
              <span className="relative">
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-champagne transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile trigger — hamburger with two asymmetric bars (26px + 17px) */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen ? "true" : "false"}
          className="relative z-[81] flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="sr-only">Menú</span>
          <span className="relative block h-4 w-[26px]">
            <span
              className={cn(
                "absolute left-0 block h-[2px] bg-current transition-all duration-300",
                lightUI ? "text-ivory" : "text-charcoal",
                menuOpen
                  ? "top-1/2 w-[26px] -translate-y-1/2 rotate-45"
                  : "top-0 w-[26px]",
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 block h-[2px] bg-current transition-all duration-300",
                lightUI ? "text-ivory" : "text-charcoal",
                menuOpen
                  ? "bottom-1/2 w-[26px] translate-y-1/2 -rotate-45"
                  : "bottom-0 w-[17px]",
              )}
            />
          </span>
        </button>
      </Container>

      {/* Mobile full-screen overlay — dark (#16150F) per V1 reference */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.35, ease: "easeOut" }}
            className="fixed inset-0 top-0 z-40 flex h-[100dvh] flex-col bg-[#16150F] md:hidden"
          >
            {/* Nav links with mono numerals */}
            <nav className="flex flex-1 flex-col justify-center px-6 sm:px-8">
              {MENU_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, y: reduce ? 0 : 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduce ? 0 : 0.45,
                    delay:    reduce ? 0 : 0.06 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-baseline gap-4 border-b border-white/[0.07] py-5"
                >
                  <span className="w-5 font-mono text-[0.65rem] font-semibold tracking-[0.16em] text-[#63C695]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[2.1rem] font-extrabold leading-none text-ivory transition-opacity duration-200 group-hover:opacity-70">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* WhatsApp CTA at bottom */}
            <div className="px-6 pb-[calc(2.5rem+env(safe-area-inset-bottom))] sm:px-8">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduce ? 0 : 0.4, delay: reduce ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="flex w-full items-center justify-between gap-3 rounded-2xl bg-operational-green px-6 py-5 font-sans text-[1rem] font-semibold text-ivory"
              >
                <span>Escribir por WhatsApp</span>
                <span aria-hidden>→</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
