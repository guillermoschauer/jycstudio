"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site";
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

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  // The page opens on ivory, so the bar reads dark at rest; it only flips to
  // light marks while the carbon overlay is up.
  const onDark = menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-[var(--header-h)]",
        "transition-[background-color,border-color] duration-300",
        scrolled && !menuOpen
          ? "border-b border-hairline bg-[rgba(247,245,238,0.88)] backdrop-blur-[14px]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-full items-center justify-between gap-6">
        <Link
          href="/"
          className={cn(
            "transition-colors duration-300",
            onDark ? "text-ivory" : "text-carbon",
          )}
          onClick={close}
        >
          <span className="sm:hidden">
            <Logo size="sm" onDark={onDark} />
          </span>
          <span className="hidden sm:block">
            <Logo size="md" onDark={onDark} />
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          <nav className="flex items-center gap-7">
            {NAV_LINKS.filter((l) => l.href !== "#contacto").map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[0.92rem] text-ink transition-colors duration-200 hover:text-carbon"
              >
                {link.label}
                <span
                  aria-hidden
                  className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-verde transition-transform duration-300 ease-out group-hover:scale-x-100"
                />
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-full bg-carbon px-5 text-[0.85rem] font-semibold text-ivory transition-colors duration-200 hover:bg-verde"
          >
            Hablemos
          </a>
        </div>

        {/* Mobile trigger — two asymmetric bars */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          className="relative z-[81] -mr-2 flex h-11 w-11 items-center justify-center md:hidden"
        >
          <span className="relative block h-4 w-[26px]">
            <span
              className={cn(
                "absolute left-0 block h-[2px] bg-current transition-all duration-300",
                onDark ? "text-ivory" : "text-carbon",
                menuOpen ? "top-1/2 w-[26px] -translate-y-1/2 rotate-45" : "top-0 w-[26px]",
              )}
            />
            <span
              className={cn(
                "absolute bottom-0 left-0 block h-[2px] bg-current transition-all duration-300",
                onDark ? "text-ivory" : "text-carbon",
                menuOpen ? "bottom-1/2 w-[26px] translate-y-1/2 -rotate-45" : "bottom-0 w-[16px]",
              )}
            />
          </span>
        </button>
      </Container>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3, ease: "easeOut" }}
            className="on-dark fixed inset-0 top-0 z-40 flex h-[100dvh] flex-col bg-carbon md:hidden"
          >
            <nav className="flex flex-1 flex-col justify-center px-6 sm:px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  initial={{ opacity: 0, y: reduce ? 0 : 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduce ? 0 : 0.45,
                    delay: reduce ? 0 : 0.05 + i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-baseline gap-4 border-b border-[color:var(--color-hairline-dark)] py-5"
                >
                  <span className="nums w-6 text-[0.68rem] font-semibold tracking-[0.16em] text-verde-on-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[2rem] font-extrabold leading-none tracking-[-0.03em] text-ivory">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="px-6 pb-[calc(2.25rem+env(safe-area-inset-bottom))] sm:px-8">
              <motion.a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                initial={{ opacity: 0, y: reduce ? 0 : 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: reduce ? 0 : 0.4,
                  delay: reduce ? 0 : 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex w-full items-center justify-between gap-3 rounded-full bg-verde px-7 py-5 text-[1rem] font-semibold text-ivory"
              >
                <span>Hablemos de tu negocio</span>
                <span aria-hidden>→</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
