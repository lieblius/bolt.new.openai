import { createOpenAI } from '@ai-sdk/openai';

export function getOpenAIModel(apiKey: string) {
  const openai = createOpenAI({
    apiKey,
  });

  return openai('gpt-4o');
}
