import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * 404 page with premium dark theme styling
 */
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="mx-auto max-w-md text-center">
        {/* 404 indicator */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <span className="text-2xl font-bold text-accent">404</span>
        </div>

        <h1 className="mt-6 text-2xl font-semibold text-foreground">
          Page not found
        </h1>
        <p className="mt-3 text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mt-8">
          <Link href="/">
            <Button variant="primary">
              <svg
                className="mr-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Signal Foundry
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
