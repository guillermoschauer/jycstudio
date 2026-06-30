import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline";
type Tone = "light" | "dark";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  /** "light" = on ivory surfaces, "dark" = on charcoal surfaces. */
  tone?: Tone;
  external?: boolean;
  /**
   * Adds a subtle recurring light sweep to signal the primary action.
   * Use ONLY on a primary CTA and never more than one visible per viewport.
   * Automatically removed under prefers-reduced-motion (see globals.css).
   */
  shimmer?: boolean;
  className?: string;
  "aria-label"?: string;
};

const base =
  "group inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide font-sans transition-colors duration-300 ease-out";

const styles: Record<Tone, Record<Variant, string>> = {
  light: {
    primary: "bg-charcoal text-ivory hover:bg-[#2e2b24]",
    outline:
      "border border-hairline text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  },
  dark: {
    primary: "bg-ivory text-charcoal hover:bg-white",
    outline:
      "border border-[color:var(--color-hairline-dark)] text-ivory hover:border-ivory/70 hover:bg-white/5",
  },
};

export function Button({
  href,
  children,
  variant = "primary",
  tone = "light",
  external = false,
  shimmer = false,
  className,
  ...rest
}: ButtonProps) {
  const classes = cn(
    base,
    styles[tone][variant],
    shimmer && "relative isolate overflow-hidden",
    className,
  );
  const isProtocol = /^(mailto:|tel:)/.test(href);

  const content = (
    <>
      <span className="relative z-[1] inline-flex items-center gap-2">
        {children}
      </span>
      {shimmer && (
        <span
          aria-hidden
          className="jyc-shimmer-band pointer-events-none absolute inset-y-0 left-0 z-0 w-[36%] bg-gradient-to-r from-transparent via-[rgba(243,238,228,0.42)] to-transparent"
        />
      )}
    </>
  );

  // mailto/tel links render as a plain anchor (no new tab, no client routing).
  if (isProtocol) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
