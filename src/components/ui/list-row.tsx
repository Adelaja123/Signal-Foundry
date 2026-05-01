import { cn } from "@/lib/utils";

interface ListRowProps {
  value: string;
  className?: string;
}

/**
 * Row component for list items within InfoCard
 */
export function ListRow({ value, className }: ListRowProps) {
  return (
    <div
      className={cn(
        "rounded-[1.15rem] border border-line bg-white/78 px-4 py-3 text-sm leading-6 text-foreground/75",
        className
      )}
    >
      {value}
    </div>
  );
}
