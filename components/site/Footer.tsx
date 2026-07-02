import { SITE, MAILTO_URL } from "@/lib/site";

/**
 * Footer — V1 reference spec:
 * - Dark bg, subtle top border
 * - Top row: "© 2026 · ESTUDIO INDEPENDIENTE" (left) / "MAR DEL PLATA · ARG" (right)
 * - Giant "JYC" wordmark (36vw) as decorative watermark, 10% opacity, cropped by overflow:hidden
 */
export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[color:var(--color-hairline-dark)] bg-dark-base text-ivory">
      {/* Top row */}
      <div className="flex items-center justify-between px-6 py-7 sm:px-8">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ivory/45">
          © 2026 · Estudio independiente
        </p>
        <a
          href={MAILTO_URL}
          className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ivory/45 transition-colors duration-200 hover:text-ivory/75 md:hidden"
        >
          {SITE.email}
        </a>
        <p className="hidden font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ivory/45 md:block">
          Mar del Plata · ARG
        </p>
      </div>

      {/* Desktop: extra info row */}
      <div className="hidden items-center justify-between border-t border-[color:var(--color-hairline-dark)] px-8 py-5 md:flex">
        <p className="max-w-md text-pretty text-sm text-ivory/45">
          {SITE.longClaim}
        </p>
        <a
          href={MAILTO_URL}
          className="font-mono text-[11px] tracking-[0.14em] text-ivory/50 transition-colors duration-200 hover:text-ivory"
        >
          {SITE.email}
        </a>
      </div>

      {/* Giant JYC watermark — decorative, cropped */}
      <div aria-hidden className="pointer-events-none select-none px-4 pb-4 pt-2 sm:px-6">
        <span className="block text-[36vw] font-sans font-extrabold leading-[0.85] tracking-[-0.04em] text-ivory/[0.07]">
          JYC
        </span>
      </div>
    </footer>
  );
}
