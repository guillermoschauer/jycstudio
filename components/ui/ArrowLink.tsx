import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Editorial "Ver caso completo →" style link.
 * Uppercase mono label, animated arrow and a champagne underline on hover.
 */
export function ArrowLink({
  href,
  children,
  tone = "light",
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const color =
    tone === "dark" ? "text-ivory/85 hover:text-ivory" : "text-charcoal hover:text-charcoal";

  return (
    <Link
      href={href}
      className={cn(
        "group/arrow inline-flex items-center gap-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors duration-300",
        color,
        className,
      )}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-champagne transition-transform duration-300 ease-out group-hover/arrow:scale-x-100" />
      </span>
      <span
        aria-hidden
        className="text-champagne transition-transform duration-300 ease-out group-hover/arrow:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}
