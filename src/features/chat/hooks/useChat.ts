import { useState } from "react";
import { sendChatMessage } from "../api/chat.api";
import type { ChatMessage } from "../types";

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function sendMessage(content: string) {
    if (!content.trim()) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content },
    ];

    setMessages(nextMessages);
    setLoading(true);
    setError(null);

    try {
      const res = await sendChatMessage(nextMessages);
      setMessages([
        ...nextMessages,
        { role: "assistant", content: res.reply },
      ]);
    } catch {
      setError("Assistant is currently unavailable.");
    } finally {
      setLoading(false);
    }
  }

  return {
    messages,
    loading,
    error,
    sendMessage,
  };
}
