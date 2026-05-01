import { cn } from "@/lib/utils";

interface ListRowProps {
  value: string;
  className?: string;
}

/**
 * Premium list row with subtle styling
 */
export function ListRow({ value, className }: ListRowProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg bg-card-elevated/50 px-3 py-2.5 text-sm text-muted",
        className
      )}
    >
      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
      <span>{value}</span>
    </div>
  );
}
