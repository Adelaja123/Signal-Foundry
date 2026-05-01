import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Card component for displaying grouped information
 */
export function InfoCard({ title, children, className }: InfoCardProps) {
  return (
    <section
      className={cn(
        "rounded-[1.5rem] border border-line bg-panel-strong p-4 shadow-[0_8px_24px_rgba(20,38,29,0.04)]",
        className
      )}
      aria-labelledby={`${title.toLowerCase().replace(/\s+/g, "-")}-heading`}
    >
      <h3
        id={`${title.toLowerCase().replace(/\s+/g, "-")}-heading`}
        className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-foreground/45"
      >
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
