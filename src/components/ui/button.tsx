import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "chip";
  size?: "default" | "sm" | "lg";
  isLoading?: boolean;
}

/**
 * Premium button component with multiple variants
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "default",
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
          // Variants
          variant === "primary" &&
            "rounded-full bg-foreground text-background shadow-lg shadow-white/5 hover:bg-foreground/90 hover:shadow-xl hover:shadow-white/10",
          variant === "secondary" &&
            "rounded-full border border-border bg-card text-foreground hover:border-border-hover hover:bg-card-elevated",
          variant === "ghost" &&
            "rounded-lg text-muted hover:bg-card hover:text-foreground",
          variant === "chip" &&
            "rounded-full border border-border bg-card/50 text-muted hover:border-border-hover hover:bg-card hover:text-foreground",
          // Sizes
          size === "default" && "h-11 px-6 text-sm",
          size === "sm" && "h-9 px-4 text-sm",
          size === "lg" && "h-12 px-8 text-base",
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
