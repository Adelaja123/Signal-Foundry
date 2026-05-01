/**
 * Loading skeleton with premium dark theme
 */
export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header skeleton */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 animate-shimmer rounded-lg" />
            <div className="h-5 w-28 animate-shimmer rounded" />
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <div className="h-4 w-16 animate-shimmer rounded" />
            <div className="h-4 w-20 animate-shimmer rounded" />
            <div className="h-4 w-14 animate-shimmer rounded" />
          </div>
          <div className="h-9 w-24 animate-shimmer rounded-full" />
        </div>
      </header>

      {/* Main content skeleton */}
      <main className="flex-1 pt-16">
        <section className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left column */}
              <div className="space-y-10">
                {/* Hero skeleton */}
                <div className="space-y-6">
                  <div className="h-8 w-40 animate-shimmer rounded-full" />
                  <div className="space-y-3">
                    <div className="h-12 w-full animate-shimmer rounded-lg" />
                    <div className="h-12 w-3/4 animate-shimmer rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-5 w-full animate-shimmer rounded" />
                    <div className="h-5 w-2/3 animate-shimmer rounded" />
                  </div>
                </div>

                {/* Form skeleton */}
                <div className="space-y-5">
                  <div className="h-5 w-40 animate-shimmer rounded" />
                  <div className="h-32 w-full animate-shimmer rounded-xl" />
                  <div className="flex flex-wrap gap-2">
                    <div className="h-9 w-32 animate-shimmer rounded-full" />
                    <div className="h-9 w-40 animate-shimmer rounded-full" />
                    <div className="h-9 w-36 animate-shimmer rounded-full" />
                  </div>
                  <div className="h-12 w-44 animate-shimmer rounded-full" />
                </div>
              </div>

              {/* Right column - Preview skeleton */}
              <div className="rounded-2xl border border-border bg-card p-5">
                <div className="border-b border-border pb-5">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-16 animate-shimmer rounded-full" />
                    <div className="h-4 w-32 animate-shimmer rounded" />
                  </div>
                  <div className="mt-3 h-7 w-48 animate-shimmer rounded" />
                </div>
                <div className="mt-5 space-y-4">
                  <div className="h-32 animate-shimmer rounded-xl" />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="h-28 animate-shimmer rounded-xl" />
                    <div className="h-28 animate-shimmer rounded-xl" />
                  </div>
                  <div className="h-40 animate-shimmer rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
