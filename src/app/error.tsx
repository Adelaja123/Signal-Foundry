"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Error boundary with premium dark theme styling
 */
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("[ErrorBoundary] Caught error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="mx-auto max-w-md text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-error/10">
          <svg
            className="h-8 w-8 text-error"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>

        <h1 className="mt-6 text-2xl font-semibold text-foreground">
          Something went wrong
        </h1>
        <p className="mt-3 text-muted">
          We encountered an unexpected error. Please try again.
        </p>

        {error.digest && (
          <p className="mt-2 text-xs text-muted-foreground">
            Error ID: {error.digest}
          </p>
        )}

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button onClick={reset} variant="primary">
            Try again
          </Button>
          <Button
            onClick={() => window.location.reload()}
            variant="secondary"
          >
            Refresh page
          </Button>
        </div>
      </div>
    </main>
  );
}
