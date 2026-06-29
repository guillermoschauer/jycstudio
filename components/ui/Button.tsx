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
  className?: string;
  "aria-label"?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide font-sans transition-colors duration-300 ease-out";

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
  className,
  ...rest
}: ButtonProps) {
  const classes = cn(base, styles[tone][variant], className);
  const isProtocol = /^(mailto:|tel:)/.test(href);

  // mailto/tel links render as a plain anchor (no new tab, no client routing).
  if (isProtocol) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
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
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
