import { cn } from "@/lib/cn";

/**
 * Section label: Archivo uppercase with wide tracking, preceded by the brand's
 * green dot — the only recurring ornament in the whole system. A numeral keeps
 * the page readable as a sequence of chapters.
 */
export function Eyebrow({
  children,
  number,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  /** e.g. "01". Rendered before the label, separated by an em dash. */
  number?: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "eyebrow flex items-center gap-2.5",
        tone === "dark" ? "text-gris" : "text-muted",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "inline-block h-[5px] w-[5px] shrink-0 rounded-full",
          tone === "dark" ? "bg-verde-on-dark" : "bg-verde",
        )}
      />
      {number && (
        <>
          <span className="nums">{number}</span>
          <span aria-hidden className="text-current/50">
            —
          </span>
        </>
      )}
      <span>{children}</span>
    </p>
  );
}
