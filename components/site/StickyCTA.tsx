"use client";

import { useEffect, useState } from "react";

/**
 * Mobile-only bottom CTA. Appears once the hero leaves the viewport and hides
 * again as the contact section approaches, so it never competes with the real
 * form. Hidden from `md` up, where the header CTA is always visible.
 */
export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const contacto = document.getElementById("contacto");
    if (!hero || !contacto) return;

    let heroOut = false;
    let contactoNear = false;
    const sync = () => setShow(heroOut && !contactoNear);

    const heroIO = new IntersectionObserver(
      ([e]) => {
        heroOut = !e.isIntersecting;
        sync();
      },
      { threshold: 0 },
    );
    const contactoIO = new IntersectionObserver(
      ([e]) => {
        contactoNear = e.isIntersecting;
        sync();
      },
      { rootMargin: "0px 0px -15% 0px" },
    );

    heroIO.observe(hero);
    contactoIO.observe(contacto);
    return () => {
      heroIO.disconnect();
      contactoIO.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden={show ? undefined : "true"}
      className={`fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-[calc(1rem+env(safe-area-inset-bottom))] transition-transform duration-[420ms] ease-[cubic-bezier(0.2,0.6,0.2,1)] md:hidden ${
        show ? "translate-y-0" : "translate-y-[150%]"
      }`}
    >
      <a
        href="#contacto"
        tabIndex={show ? 0 : -1}
        className="flex h-[56px] w-full max-w-[26rem] items-center justify-between gap-4 rounded-full bg-verde px-6 shadow-[0_12px_32px_-8px_rgba(22,20,15,0.45)]"
      >
        <span className="text-[0.95rem] font-semibold text-ivory">
          Hablemos de tu negocio
        </span>
        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ivory text-sm font-bold text-carbon"
        >
          →
        </span>
      </a>
    </div>
  );
}
