"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Error boundary component for handling runtime errors
 */
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("[ErrorBoundary] Caught error:", error);
  }, [error]);

  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-2xl flex-col items-center justify-center px-5 py-12 text-center">
      <div className="rounded-[2rem] border border-[#d58d76] bg-[#fff1eb] px-8 py-10 shadow-lg">
        <h1 className="font-display text-3xl text-[#8f3f1f]">
          Something went wrong
        </h1>
        <p className="mt-4 text-[#8f3f1f]/80">
          We encountered an unexpected error. Please try again or refresh the page.
        </p>
        {error.digest && (
          <p className="mt-2 text-xs text-[#8f3f1f]/60">
            Error ID: {error.digest}
          </p>
        )}
        <div className="mt-6 flex justify-center gap-4">
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
