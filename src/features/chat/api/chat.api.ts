import { apiFetch } from "@/api/client";
import type { ChatMessage, ChatResponse } from "../types";

export async function sendChatMessage(
  messages: ChatMessage[]
): Promise<ChatResponse> {
  return apiFetch<ChatResponse>("/chat", {
    method: "POST",
    body: JSON.stringify({ messages }),
  });
}
