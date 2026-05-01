# Signal Foundry

A polished Next.js starter that turns rough AI product ideas into launch-ready
strategy cards using the OpenAI Responses API.

## Run locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the example env file and add your API key:

   ```bash
   copy .env.example .env.local
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## What it does

- Accepts a rough product idea in the UI
- Calls an internal API route at `src/app/api/strategy/route.ts`
- Uses the OpenAI Responses API with a JSON schema response format
- Returns a product name, positioning, feature pillars, launch plan, and metrics

## Project shape

- `src/app/page.tsx`: client-side interface and result cards
- `src/app/api/strategy/route.ts`: server-side OpenAI request
- `src/app/globals.css`: visual system and global styling

## Next ideas

- Save generated strategies to a database
- Add streaming responses and chat history
- Let users pick tones like "premium", "playful", or "enterprise"
