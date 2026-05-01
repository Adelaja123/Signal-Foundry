import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * 404 Not Found page
 */
export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-2xl flex-col items-center justify-center px-5 py-12 text-center">
      <div className="rounded-[2rem] border border-line bg-panel px-8 py-10 shadow-lg">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-foreground/50">
          404
        </p>
        <h1 className="mt-2 font-display text-4xl text-foreground">
          Page not found
        </h1>
        <p className="mt-4 text-foreground/70">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6">
          <Link href="/">
            <Button variant="primary">Back to Signal Foundry</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
