"use client";

import { useState, useCallback, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Alert } from "@/components/ui/alert";
import { PROMPT_SUGGESTIONS } from "@/lib/constants";

interface IdeaFormProps {
  onSubmit: (idea: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  onClearError: () => void;
}

/**
 * Premium form component for submitting product ideas
 */
export function IdeaForm({
  onSubmit,
  isLoading,
  error,
  onClearError,
}: IdeaFormProps) {
  const [idea, setIdea] = useState(PROMPT_SUGGESTIONS[0]);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await onSubmit(idea);
    },
    [idea, onSubmit]
  );

  const handleChipClick = useCallback(
    (chip: string) => {
      setIdea(chip);
      onClearError();
    },
    [onClearError]
  );

  return (
    <form
      className="space-y-5"
      onSubmit={handleSubmit}
      aria-label="Product idea form"
    >
      <Textarea
        label="Describe your product idea"
        value={idea}
        onChange={(e) => {
          setIdea(e.target.value);
          if (error) onClearError();
        }}
        rows={4}
        placeholder="An AI tool that analyzes user feedback and generates product roadmaps..."
        disabled={isLoading}
      />

      {/* Quick suggestions */}
      <fieldset className="space-y-2" disabled={isLoading}>
        <legend className="sr-only">Quick prompt suggestions</legend>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Try an example
        </p>
        <div className="flex flex-wrap gap-2">
          {PROMPT_SUGGESTIONS.map((chip) => (
            <Button
              key={chip}
              type="button"
              variant="chip"
              size="sm"
              onClick={() => handleChipClick(chip)}
              aria-pressed={idea === chip}
              className={idea === chip ? "border-accent bg-accent/10 text-accent" : ""}
            >
              {chip.length > 45 ? `${chip.slice(0, 45)}...` : chip}
            </Button>
          ))}
        </div>
      </fieldset>

      {/* Submit section */}
      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary" size="lg" isLoading={isLoading}>
          {isLoading ? (
            "Generating..."
          ) : (
            <>
              Generate Strategy
              <svg
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </>
          )}
        </Button>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          Powered by OpenAI GPT-4o
        </p>
      </div>

      {/* Error display */}
      {error && (
        <Alert variant="error" onDismiss={onClearError}>
          {error}
        </Alert>
      )}
    </form>
  );
}
