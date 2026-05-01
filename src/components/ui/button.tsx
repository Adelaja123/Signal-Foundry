import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "chip";
  isLoading?: boolean;
}

/**
 * Button component with multiple variants
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
          variant === "primary" &&
            "rounded-full bg-foreground px-6 py-3 text-sm font-medium text-[#fff7ef] shadow-[0_10px_30px_rgba(20,38,29,0.18)] hover:-translate-y-0.5 hover:bg-forest disabled:cursor-not-allowed disabled:opacity-70",
          variant === "secondary" &&
            "rounded-full border border-line bg-white/70 px-4 py-2 text-sm text-foreground/75 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-white",
          variant === "chip" &&
            "rounded-full border border-line bg-white/70 px-4 py-2 text-sm text-foreground/75 hover:-translate-y-0.5 hover:border-accent/45 hover:bg-white text-left",
          isLoading && "cursor-wait",
          className
        )}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <LoadingSpinner />
            <span className="ml-2">{children}</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

function LoadingSpinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}
