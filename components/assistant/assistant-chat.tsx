"use client";

import { FormEvent, useMemo, useState } from "react";
import { Send, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const starterMessages: Message[] = [
  {
    role: "assistant",
    content:
      "I’m Sankalp’s AI assistant. Ask about projects, skills, experience, or collaboration opportunities.",
  },
];

export function AssistantChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(starterMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const lastReply = useMemo(
    () => messages.filter((message) => message.role === "assistant").at(-1)?.content,
    [messages]
  );

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = input.trim();
    if (!value || loading) return;

    setMessages((current) => [...current, { role: "user", content: value }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: value, history: messages }),
      });
      const data = (await response.json()) as { reply?: string };
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            data.reply ??
            "I could not generate a reply right now, but Sankalp works across AI/ML, GenAI, CV, and IoT.",
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: "The assistant is temporarily unavailable. Please use the contact form instead.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="fixed bottom-5 right-5 z-[120] inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/40 bg-[#071122]/90 px-4 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(0,212,255,0.85)] backdrop-blur-xl"
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Sparkles className="size-4 text-[#00D4FF]" /> AI Assistant
      </motion.button>

      <AnimatePresence>
        {open ? (
          <motion.aside
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            className="fixed bottom-20 right-5 z-[120] w-[min(380px,92vw)] overflow-hidden rounded-3xl border border-white/15 bg-[#071122]/95 shadow-[0_20px_80px_-20px_rgba(124,58,237,0.6)] backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-white">Sankalp AI</p>
                <p className="text-xs text-white/55">OpenAI + LangChain assistant</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/15 p-1.5 text-white/70 transition hover:text-white"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="max-h-[360px] space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={
                    message.role === "assistant"
                      ? "max-w-[88%] rounded-2xl rounded-bl-md border border-[#00D4FF]/20 bg-[#00D4FF]/8 px-3 py-2 text-sm text-[#EAFBFF]"
                      : "ml-auto max-w-[88%] rounded-2xl rounded-br-md border border-white/10 bg-white/10 px-3 py-2 text-sm text-white"
                  }
                >
                  {message.content}
                </div>
              ))}
              {loading ? (
                <div className="max-w-[88%] rounded-2xl rounded-bl-md border border-[#00D4FF]/20 bg-[#00D4FF]/8 px-3 py-2 text-sm text-[#B5EFFF]">
                  Thinking...
                </div>
              ) : null}
            </div>

            <form onSubmit={submit} className="flex gap-2 border-t border-white/10 p-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={lastReply ? "Ask about a project..." : "Ask anything about Sankalp..."}
                className="flex-1 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-[#00D4FF]"
              />
              <Button type="submit" size="icon" variant="gradient" className="shrink-0">
                <Send className="size-4" />
              </Button>
            </form>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </>
  );
}
