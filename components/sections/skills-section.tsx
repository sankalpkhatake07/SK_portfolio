"use client";

import { motion } from "framer-motion";

import { skillCategories } from "@/data/site";

const marquee = [...skillCategories.flatMap((c) => c.skills), ...skillCategories.flatMap((c) => c.skills)];

export function SkillsSection() {
  const orbitSkills = ["LangChain", "YOLOv8", "AWS", "Firebase", "FastAPI", "Docker"];

  return (
    <section id="skills" className="relative snap-start py-24">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Skills</h2>
        <p className="mt-3 text-white/70">Advanced stack across AI, product engineering, and IoT systems.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.16),transparent_55%)]" />
            <motion.div
              className="absolute size-44 rounded-full border border-[#00D4FF]/25"
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute size-72 rounded-full border border-white/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute size-24 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.9),rgba(124,58,237,0.2)_72%,transparent_75%)] shadow-[0_0_60px_rgba(0,212,255,0.85)]" />
            {orbitSkills.map((skill, index) => {
              const angle = (index / orbitSkills.length) * Math.PI * 2;
              const x = Math.cos(angle) * 130;
              const y = Math.sin(angle) * 130;

              return (
                <motion.span
                  key={skill}
                  className="absolute rounded-full border border-white/15 bg-[#07111f]/90 px-4 py-2 text-xs font-medium text-white/85 backdrop-blur-md"
                  animate={{ x, y }}
                  transition={{ duration: 5 + index, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                >
                  {skill}
                </motion.span>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.02] py-4">
          <motion.div
            className="flex w-max gap-3"
            animate={{ x: [0, -900] }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
          >
            {marquee.map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="rounded-full border border-[#00D4FF]/30 bg-[#00D4FF]/8 px-4 py-2 text-sm text-[#BDF3FF]"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-white/15 bg-white/[0.03] p-5 shadow-[0_20px_60px_-40px_rgba(0,212,255,0.9)]"
            >
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              <div className="mt-4 space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill}>
                    <div className="flex items-center justify-between text-sm text-white/80">
                      <span>{skill}</span>
                      <span>{88 + ((skill.length * 3) % 11)}%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${88 + ((skill.length * 3) % 11)}%` }}
                        viewport={{ once: true }}
                        className="h-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7C3AED]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
