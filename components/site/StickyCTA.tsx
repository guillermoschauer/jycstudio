"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Mobile-only sticky bottom CTA.
 * Appears once the hero section has scrolled out of view.
 * Disappears when the #contacto section comes into range.
 * Links to #contacto so the user goes straight to the contact block.
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
      aria-hidden={!show}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 md:hidden",
        "transition-transform duration-[420ms] ease-[cubic-bezier(0.2,0.6,0.2,1)]",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      {/* Border top as subtle separator against any bg */}
      <div className="border-t border-white/[0.06] bg-dark-base/96 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md">
        <a
          href="#contacto"
          tabIndex={show ? 0 : -1}
          className="group flex w-full items-center justify-between gap-3 rounded-2xl px-5 py-4"
        >
          <span className="font-sans text-[1rem] font-semibold text-ivory">
            ¿Hablamos de tu caso?
          </span>
          <span
            aria-hidden
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-operational-green font-sans text-sm font-bold text-ivory transition-transform duration-300 group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      </div>
    </div>
  );
}
