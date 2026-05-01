import { cn } from "@/lib/utils";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Premium info card with dark theme styling
 */
export function InfoCard({ title, children, className }: InfoCardProps) {
  const headingId = `${title.toLowerCase().replace(/\s+/g, "-")}-heading`;

  return (
    <section
      className={cn(
        "rounded-xl border border-border bg-card p-4",
        className
      )}
      aria-labelledby={headingId}
    >
      <h3
        id={headingId}
        className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground"
      >
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
