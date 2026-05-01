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
 * Form component for submitting product ideas
 */
export function IdeaForm({ onSubmit, isLoading, error, onClearError }: IdeaFormProps) {
  const [idea, setIdea] = useState(PROMPT_SUGGESTIONS[0]);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      await onSubmit(idea);
    },
    [idea, onSubmit]
  );

  const handleChipClick = useCallback((chip: string) => {
    setIdea(chip);
    onClearError();
  }, [onClearError]);

  return (
    <form className="space-y-4" onSubmit={handleSubmit} aria-label="Product idea form">
      <Textarea
        label="Describe the product you want to explore"
        value={idea}
        onChange={(e) => {
          setIdea(e.target.value);
          if (error) onClearError();
        }}
        rows={5}
        placeholder="An AI studio that turns client notes into launch-ready product plans..."
        disabled={isLoading}
      />

      <fieldset className="space-y-2" disabled={isLoading}>
        <legend className="sr-only">Quick prompt suggestions</legend>
        <div className="flex flex-wrap gap-2">
          {PROMPT_SUGGESTIONS.map((chip) => (
            <Button
              key={chip}
              type="button"
              variant="chip"
              onClick={() => handleChipClick(chip)}
              aria-pressed={idea === chip}
            >
              {chip}
            </Button>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" variant="primary" isLoading={isLoading}>
          {isLoading ? "Forging strategy..." : "Forge product strategy"}
        </Button>
        <p className="text-sm text-foreground/60">
          Powered by OpenAI GPT-4o-mini
        </p>
      </div>

      {error && (
        <Alert variant="error" onDismiss={onClearError}>
          {error}
        </Alert>
      )}
    </form>
  );
}
