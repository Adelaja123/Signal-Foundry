/**
 * Loading component shown during page transitions
 */
export default function Loading() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-6 sm:px-8 lg:px-10">
      <div className="relative overflow-hidden rounded-[2rem] border border-line bg-panel px-6 py-8 shadow-[0_18px_60px_rgba(20,38,29,0.08)] backdrop-blur sm:px-8 lg:px-10">
        {/* Decorative gradient */}
        <div
          className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(207,95,42,0.16),transparent_65%)]"
          aria-hidden="true"
        />

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left column skeleton */}
          <div className="space-y-8 animate-pulse">
            <div className="flex gap-3">
              <div className="h-8 w-32 rounded-full bg-line" />
              <div className="h-8 w-28 rounded-full bg-line" />
            </div>
            <div className="space-y-4">
              <div className="h-4 w-32 rounded bg-line" />
              <div className="h-16 w-full rounded-lg bg-line" />
              <div className="h-6 w-3/4 rounded bg-line" />
            </div>
            <div className="space-y-4">
              <div className="h-32 w-full rounded-[1.6rem] bg-line" />
              <div className="flex gap-2">
                <div className="h-10 w-32 rounded-full bg-line" />
                <div className="h-10 w-32 rounded-full bg-line" />
              </div>
            </div>
          </div>

          {/* Right column skeleton */}
          <div className="rounded-[1.8rem] border border-line bg-panel-strong p-5 animate-pulse">
            <div className="border-b border-line pb-4">
              <div className="h-4 w-24 rounded bg-line" />
              <div className="mt-2 h-8 w-48 rounded bg-line" />
            </div>
            <div className="mt-5 space-y-5">
              <div className="h-40 rounded-[1.5rem] bg-line" />
              <div className="grid gap-4 md:grid-cols-2">
                <div className="h-32 rounded-[1.5rem] bg-line" />
                <div className="h-32 rounded-[1.5rem] bg-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
