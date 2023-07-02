import { useState } from 'react';
import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from 'openai';

interface UseChatCompletionProps {
  model: string;
  apiKey: string;
  temperature: number;
}

export const useChatCompletion = ({ model, apiKey, temperature }: UseChatCompletionProps) => {
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const configuration = new Configuration({
    apiKey: apiKey,
  });

  const openai = new OpenAIApi(configuration);

  const submitPrompt = async (messages: ChatCompletionRequestMessage[]) => {
    const res = await openai.createChatCompletion({
      model: model,
      messages: messages,
      temperature: temperature,
    });

    res.data.choices[0].message && setMessages([...messages, res.data.choices[0].message]);
  };

  return { messages, submitPrompt };
};
