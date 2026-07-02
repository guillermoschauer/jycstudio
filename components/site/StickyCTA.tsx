"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Mobile-only sticky floating CTA pill (V1 reference spec):
 * - Green pill, 16px margins from screen edges, 56px tall
 * - "¿Hablamos de tu caso?" text + circular cream arrow button
 * - Appears after hero exits view, hides when #contacto comes into range
 * - Hides on md+ (desktop has its own CTAs)
 */
export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero     = document.getElementById("top");
    const contacto = document.getElementById("contacto");
    if (!hero || !contacto) return;

    let heroOut      = false;
    let contactoNear = false;
    const sync = () => setShow(heroOut && !contactoNear);

    const heroIO = new IntersectionObserver(
      ([e]) => { heroOut = !e.isIntersecting; sync(); },
      { threshold: 0 },
    );
    const contactoIO = new IntersectionObserver(
      ([e]) => { contactoNear = e.isIntersecting; sync(); },
      { rootMargin: "0px 0px -15% 0px" },
    );

    heroIO.observe(hero);
    contactoIO.observe(contacto);
    return () => { heroIO.disconnect(); contactoIO.disconnect(); };
  }, []);

  return (
    <div
      aria-hidden={show ? undefined : "true"}
      className={cn(
        "fixed bottom-0 inset-x-0 z-40 md:hidden",
        "flex justify-center",
        "px-4 pb-[calc(1rem+env(safe-area-inset-bottom))]",
        "transition-transform duration-[420ms] ease-[cubic-bezier(0.2,0.6,0.2,1)]",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <a
        href="#contacto"
        tabIndex={show ? 0 : -1}
        className="group flex h-[56px] w-full max-w-[calc(100%-2rem)] items-center justify-between gap-4 rounded-full bg-operational-green px-5 shadow-[0_10px_30px_rgba(22,21,15,0.35)]"
      >
        <span className="font-sans text-[0.95rem] font-semibold text-ivory">
          ¿Hablamos de tu caso?
        </span>
        <span
          aria-hidden
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory font-sans text-sm font-bold text-charcoal transition-transform duration-300 group-hover:translate-x-0.5"
        >
          →
        </span>
      </a>
    </div>
  );
}
