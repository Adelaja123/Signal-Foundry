/**
 * Hero section with premium dark theme styling
 */
export function Hero() {
  return (
    <div className="relative">
      {/* Background glow effect */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />
      
      <div className="relative space-y-6">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="text-xs font-medium tracking-wide text-muted">
            AI-POWERED STRATEGY
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Ship product strategies that work.
        </h1>

        {/* Subheadline */}
        <p className="max-w-xl text-lg leading-relaxed text-muted text-pretty">
          Transform rough ideas into launch-ready concepts. Get positioning,
          features, and go-to-market plans in seconds.
        </p>

        {/* Trust indicators */}
        <div className="flex items-center gap-6 pt-4">
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-success"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span className="text-sm text-muted-foreground">Powered by GPT-4o</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-success"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="text-sm text-muted-foreground">Secure & Private</span>
          </div>
        </div>
      </div>
    </div>
  );
}
