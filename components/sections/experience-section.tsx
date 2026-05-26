"use client";

import { motion } from "framer-motion";

import { experiences } from "@/data/site";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative snap-start py-24">
      <div className="mx-auto w-[min(960px,92vw)]">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Experience Timeline</h2>
        <div className="relative mt-12 border-l border-white/15 pl-8">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.org}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.08 }}
              className="relative mb-10 rounded-2xl border border-white/15 bg-white/[0.03] p-5"
            >
              <span className="absolute -left-[41px] top-8 size-4 rounded-full border border-[#00D4FF] bg-[#00D4FF]/30 shadow-[0_0_20px_rgba(0,212,255,0.9)]" />
              <p className="text-sm text-[#9EEBFF]">{exp.duration}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-white/80">{exp.org}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {exp.achievements.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg border border-[#00D4FF]/25 bg-[#00D4FF]/8 px-3 py-2 text-sm text-[#B7F3FF]">
                Impact: {exp.impact}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
