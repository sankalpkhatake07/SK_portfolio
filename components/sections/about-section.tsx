"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Brain, Cpu, FlaskConical, Lightbulb } from "lucide-react";

const GitHubPanel = dynamic(
  () => import("@/components/github/github-panel").then((module) => module.GitHubPanel),
  {
    ssr: false,
    loading: () => (
      <section className="mt-10 rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-xl">
        <div className="h-24 animate-pulse rounded-xl bg-white/5" />
      </section>
    ),
  }
);

const cards = [
  {
    title: "B.Tech AI Engineer",
    text: "Engineering-first mindset focused on robust systems, not just experiments.",
    icon: Brain,
  },
  {
    title: "Generative AI Builder",
    text: "Designing production-grade GenAI flows with practical business outcomes.",
    icon: FlaskConical,
  },
  {
    title: "Computer Vision Developer",
    text: "Deploying low-latency visual intelligence pipelines for real-time decisions.",
    icon: Cpu,
  },
  {
    title: "Hackathon Innovator",
    text: "Turning deep research ideas into demo-ready prototypes under constraints.",
    icon: Lightbulb,
  },
] as const;

export function AboutSection() {
  return (
    <section id="about" className="relative snap-start py-24">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          About
        </motion.h2>
        <p className="mt-4 max-w-3xl text-white/70">
          Passionate about building real-world AI systems that blend research depth with
          engineering reliability. I work at the intersection of Generative AI, Computer
          Vision, IoT, and edge intelligence.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((card, idx) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-lg"
            >
              <card.icon className="mb-4 size-6 text-[#00D4FF]" />
              <h3 className="text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-white/70">{card.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 space-y-4">
          {[
            "Research + engineering mindset",
            "Built for hackathon-speed innovation",
            "Focused on measurable real-world impact",
          ].map((line, i) => (
            <motion.div
              key={line}
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.75 }}
              className="rounded-xl border border-[#00D4FF]/30 bg-[#00D4FF]/6 px-4 py-3 text-sm text-[#B7F3FF]"
            >
              {line}
            </motion.div>
          ))}
        </div>

        <GitHubPanel />
      </div>
    </section>
  );
}
