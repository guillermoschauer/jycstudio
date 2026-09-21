import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";
type Tone = "light" | "dark";

type Common = {
  children: React.ReactNode;
  variant?: Variant;
  /** Surface the button sits on: "light" = ivory, "dark" = carbon. */
  tone?: Tone;
  /** Full width below `sm`. CTAs on mobile should almost always set this. */
  block?: boolean;
  className?: string;
  "aria-label"?: string;
};

type Props =
  | (Common & { href: string; external?: boolean; type?: never })
  | (Common & { href?: undefined; external?: never; type: "submit" | "button" });

/**
 * The single CTA primitive. Pill, 3.25rem tall (comfortably past the 44px touch
 * target), one arrow, no gradient and no shimmer — the emphasis comes from the
 * green, not from decoration.
 */
const base =
  "group inline-flex min-h-[3.25rem] items-center justify-center gap-3 rounded-full px-7 text-[0.95rem] font-semibold tracking-[-0.01em] transition-colors duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-60";

const styles: Record<Tone, Record<Variant, string>> = {
  light: {
    primary: "bg-verde text-ivory hover:bg-verde-deep",
    secondary: "border border-hairline text-carbon hover:border-carbon hover:bg-carbon hover:text-ivory",
  },
  dark: {
    primary: "bg-ivory text-carbon hover:bg-white",
    secondary:
      "border border-[color:var(--color-hairline-dark)] text-ivory hover:border-ivory/60 hover:bg-white/[0.06]",
  },
};

export function Button({
  children,
  variant = "primary",
  tone = "light",
  block = false,
  className,
  ...rest
}: Props) {
  const classes = cn(base, styles[tone][variant], block && "w-full sm:w-auto", className);

  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
      >
        →
      </span>
    </>
  );

  if (!rest.href) {
    const { type, external: _external, ...buttonProps } = rest as Extract<
      Props,
      { type: "submit" | "button" }
    >;
    void _external;
    return (
      <button type={type} className={classes} {...buttonProps}>
        {content}
      </button>
    );
  }

  const { href, external, ...linkProps } = rest as Extract<Props, { href: string }>;

  if (external || /^(mailto:|tel:|https?:)/.test(href)) {
    const isProtocol = /^(mailto:|tel:)/.test(href);
    return (
      <a
        href={href}
        {...(isProtocol ? {} : { target: "_blank", rel: "noopener noreferrer" })}
        className={classes}
        {...linkProps}
      >
        {content}
      </a>
    );
  }

  // In-page anchors must not go through the router.
  if (href.startsWith("#")) {
    return (
      <a href={href} className={classes} {...linkProps}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...linkProps}>
      {content}
    </Link>
  );
}
