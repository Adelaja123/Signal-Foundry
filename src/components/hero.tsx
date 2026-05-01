import { Badge } from "@/components/ui/badge";

/**
 * Hero section with branding and main headline
 */
export function Hero() {
  return (
    <div className="space-y-8">
      {/* Tags */}
      <div className="flex flex-wrap items-center gap-3" role="list" aria-label="Product tags">
        <Badge>AI product studio</Badge>
        <Badge>OpenAI-ready</Badge>
      </div>

      {/* Headline */}
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-medium uppercase tracking-[0.28em] text-forest/70">
          Signal Foundry
        </p>
        <h1 className="max-w-3xl font-display text-5xl leading-[0.94] tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
          Turn a rough AI idea into a product shape worth building.
        </h1>
        <p className="max-w-2xl text-base leading-7 text-foreground/75 sm:text-lg text-pretty">
          This starter app takes a messy concept and returns a tighter name, clearer
          positioning, smarter launch steps, and a few signals to track before you
          overbuild.
        </p>
      </div>
    </div>
  );
}
