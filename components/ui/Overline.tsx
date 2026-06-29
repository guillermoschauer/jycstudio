import { cn } from "@/lib/cn";

/**
 * Section label: mono uppercase with wide tracking and a small champagne dot.
 */
export function Overline({
  children,
  tone = "light",
  className,
  withDot = true,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
  withDot?: boolean;
}) {
  return (
    <p
      className={cn(
        "overline flex items-center gap-2.5",
        tone === "dark" ? "text-stone" : "text-stone",
        className,
      )}
    >
      {withDot && (
        <span aria-hidden className="inline-block h-[5px] w-[5px] rounded-full bg-champagne" />
      )}
      <span>{children}</span>
    </p>
  );
}
