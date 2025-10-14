"use client";
import { useState } from "react";
import { Bot, User, Send, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const CHAT_ENDPOINT = process.env.NEXT_PUBLIC_CHAT_ENDPOINT ?? "/api/chat";

export default function Chat() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    // Add the user's message to the chat
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput(""); // Clear the input field

    setIsLoading(true);

    try {
      // Call the FastAPI backend directly
  const response = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: input,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response from the API");
      }

      const data = await response.json();
      const botMessage = { role: "assistant", content: data.response };

      // Add the bot's response to the chat
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage = {
        role: "assistant",
        content: "Sorry, something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-200px)] flex-col bg-gray-2 dark:bg-[#020d1a]">
      {/* Page Title and Header */}
      <div className="mb-6 flex items-center gap-4">
        <div className="rounded-full bg-primary p-3">
          <Bot className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-dark dark:text-white">
            Chatbot
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Powered by Local API
          </p>
        </div>
      </div>

      {/* Chat Container */}
      <div className="flex flex-1 flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
        {/* Chat Messages */}
        <div className="custom-scrollbar flex-1 overflow-y-auto p-6">
          {messages.map((m, index) => (
            <div
              key={index}
              className={`mb-4 flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex max-w-[80%] flex-col gap-1 rounded-lg p-4 ${
                  m.role === "user"
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-dark dark:bg-gray-700 dark:text-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  {m.role === "user" ? (
                    <User className="h-4 w-4" />
                  ) : (
                    <Bot className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  )}
                  <span className="text-xs font-medium">
                    {m.role === "user" ? "You" : "Assistant"}
                  </span>
                </div>
                {/* Wrap ReactMarkdown in a div for styling */}
                <div className="prose prose-sm dark:prose-invert max-w-full">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {m.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex max-w-[80%] items-center gap-2 rounded-lg bg-gray-100 p-4 text-dark dark:bg-gray-700 dark:text-white">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Thinking...</span>
              </div>
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="border-t border-gray-200 p-4 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-lg border border-stroke bg-transparent px-4 py-2.5 text-sm focus:border-primary focus:outline-none dark:border-dark-3 dark:focus:border-primary"
              disabled={isLoading}
              maxLength={500}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="rounded-lg bg-primary p-2 text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>

          {/* Character Counter */}
          <div className="mt-2 text-right text-sm text-gray-500 dark:text-gray-400">
            {input.length}/500
          </div>
        </div>
      </div>
    </div>
  );
}
