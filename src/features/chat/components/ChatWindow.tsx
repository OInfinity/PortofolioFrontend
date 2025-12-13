import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect } from "react";
import { useChat } from "../hooks/useChat";

interface ChatWindowProps {
  open: boolean;
  onClose: () => void;
}

const PRESET_QUESTIONS = [
  "Tell me about your projects",
  "What technologies do you use?",
  "What is your background?",
  "How do you approach learning computer science?",
];

export default function ChatWindow({ open, onClose }: ChatWindowProps) {
  const { messages, sendMessage, loading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
            fixed bottom-24 right-6
            w-80 md:w-96
            bg-white dark:bg-gray-900
            text-gray-900 dark:text-gray-100
            rounded-xl shadow-2xl
            border border-gray-200 dark:border-gray-700
            z-[2000]
            flex flex-col overflow-hidden
          "
        >
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
            <h3 className="font-semibold text-lg">Ouonogo’s Assistant</h3>
            <button
              onClick={onClose}
              className="text-xl font-bold hover:opacity-80"
            >
              ×
            </button>
          </div>

          {/* Suggested Questions */}
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <p className="text-xs text-gray-500 mb-2">
              Explore:
            </p>
            <div className="flex flex-wrap gap-2">
              {PRESET_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  disabled={loading}
                  className="
                    text-xs px-3 py-1 rounded-full
                    border border-blue-500/40
                    text-blue-600 dark:text-blue-400
                    hover:bg-blue-500/10
                    disabled:opacity-50
                    transition
                  "
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-80">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm ${
                    msg.role === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-gray-200 dark:bg-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="text-xs text-gray-400 italic">
                Assistant is responding…
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
