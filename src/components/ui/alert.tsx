import { cn } from "@/lib/utils";

interface AlertProps {
  children: React.ReactNode;
  variant?: "error" | "info" | "success";
  className?: string;
  onDismiss?: () => void;
}

/**
 * Alert component for displaying messages
 */
export function Alert({ children, variant = "error", className, onDismiss }: AlertProps) {
  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm",
        variant === "error" && "border-[#d58d76] bg-[#fff1eb] text-[#8f3f1f]",
        variant === "info" && "border-line bg-panel text-foreground/75",
        variant === "success" && "border-forest-soft bg-forest-soft/30 text-forest",
        className
      )}
    >
      <span className="flex-1">{children}</span>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="flex-shrink-0 rounded p-1 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Dismiss alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
