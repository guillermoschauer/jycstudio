"use client";

import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Subtle, premium WhatsApp action pinned bottom-right.
 *
 * - Desktop only (md+): on mobile the StickyCTA already occupies the bottom,
 *   so the two would overlap.
 * - Respects iOS safe areas via the `.fab-safe` helper (globals.css).
 * - Hides while the #contacto section (which already offers WhatsApp) is on
 *   screen, so it never competes with the main CTA at the close of the page.
 * - Mount ONCE near the end of the app tree (app/page.tsx or app/layout.tsx).
 */
export function WhatsAppFab() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById("contacto");
    if (!target || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { rootMargin: "0px 0px -35% 0px" },
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className={cn(
        "fab-safe fixed z-50 hidden h-14 w-14 items-center justify-center rounded-full bg-operational-green text-ivory shadow-[0_14px_30px_-8px_rgba(46,111,94,0.6)] transition-all duration-300 ease-out hover:bg-[#27604f] md:flex",
        hidden
          ? "pointer-events-none translate-y-4 opacity-0"
          : "opacity-100",
      )}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.03h-.01c-1.52 0-3.01-.41-4.3-1.18l-.31-.18-3.19.84.85-3.11-.2-.32a8.18 8.18 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
      </svg>
    </a>
  );
}
