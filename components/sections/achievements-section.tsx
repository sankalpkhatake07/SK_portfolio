"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { achievements } from "@/data/site";

function useCountUp(target: number, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const run = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(progress * target));
      if (progress < 1) {
        raf = requestAnimationFrame(run);
      }
    };

    raf = requestAnimationFrame(run);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}

function CounterCard({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const count = useCountUp(value);
  return (
    <article className="rounded-2xl border border-white/15 bg-white/[0.03] p-6 text-center shadow-[0_25px_80px_-45px_rgba(0,212,255,1)]">
      <p className="text-4xl font-bold text-[#00D4FF]">{count}{suffix}</p>
      <p className="mt-2 text-sm text-white/75">{label}</p>
    </article>
  );
}

export function AchievementsSection() {
  return (
    <section id="achievements" className="snap-start py-24">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Achievements
        </motion.h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item) => (
            <CounterCard key={item.label} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
