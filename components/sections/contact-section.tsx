"use client";

import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
    };

    setStatus("Sending message...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json()) as { ok?: boolean; message?: string; error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Unable to send message.");
      }

      setSent(true);
      setStatus(data.message ?? "Message sent successfully.");
      event.currentTarget.reset();
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      setSent(false);
      setStatus(error instanceof Error ? error.message : "Unable to send message.");
    }
  };

  return (
    <section id="contact" className="snap-start py-24">
      <div className="mx-auto grid w-[min(1120px,92vw)] gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-2xl border border-[#00D4FF]/30 bg-[#070E22] p-6 shadow-[0_0_50px_-25px_rgba(0,212,255,0.9)]">
          <div className="mb-4 flex items-center gap-2 text-xs text-[#9EEBFF]">
            <span className="size-2 rounded-full bg-[#00D4FF]" />
            <span className="size-2 rounded-full bg-[#7C3AED]" />
            <span className="size-2 rounded-full bg-white/70" />
            TERMINAL_CONTACT.tsx
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Contact</h2>
          <p className="mt-3 text-white/70">Let’s build an AI product that users remember.</p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            {[
              { name: "name", type: "text", placeholder: "Your name" },
              { name: "email", type: "email", placeholder: "your@email.com" },
            ].map((field) => (
              <label key={field.name} className="block">
                <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-white/60">{field.name}</span>
                <input
                  name={field.name}
                  type={field.type}
                  required
                  placeholder={field.placeholder}
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/40"
                />
              </label>
            ))}
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.18em] text-white/60">Message</span>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Project idea..."
                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-[#00D4FF] focus:ring-2 focus:ring-[#00D4FF]/40"
              />
            </label>
            <Button type="submit" variant="gradient" size="lg" className="w-full">
              Send Message
            </Button>
            {status ? (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={sent ? "rounded-lg border border-emerald-400/40 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-200" : "rounded-lg border border-rose-400/40 bg-rose-400/10 px-3 py-2 text-sm text-rose-200"}
              >
                {status}
              </motion.p>
            ) : null}
          </form>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-xl">
          <h3 className="text-xl font-semibold text-white">Connect</h3>
          <div className="mt-4 space-y-3 text-white/80">
            <a className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 hover:border-[#00D4FF]" href="mailto:sankalpkhatake07@gmail.com">
              <Mail className="size-4 text-[#00D4FF]" /> sankalpkhatake07@gmail.com
            </a>
            <a className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 hover:border-[#00D4FF]" href="https://linkedin.com/in/sankalp-khatake" target="_blank" rel="noreferrer">
              <Linkedin className="size-4 text-[#00D4FF]" /> LinkedIn
            </a>
            <a className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 hover:border-[#00D4FF]" href="https://github.com/sankalpkhatake07" target="_blank" rel="noreferrer">
              <Github className="size-4 text-[#00D4FF]" /> GitHub
            </a>
          </div>
          <Button asChild variant="ghost" size="lg" className="mt-6 w-full">
            <a href="/SK_GEN_UPDATED_03.pdf" download>
              <Download className="size-4" /> Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
