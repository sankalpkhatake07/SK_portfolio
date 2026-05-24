"use client";

import { motion } from "framer-motion";

import { certifications } from "@/data/site";

const items = [...certifications, ...certifications];

export function CertificationsSection() {
  return (
    <section id="certifications" className="snap-start py-24">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Certifications</h2>
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] py-5">
          <motion.div
            className="flex w-max gap-4 px-4"
            animate={{ x: [0, -920] }}
            transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
          >
            {items.map((cert, i) => (
              <article
                key={`${cert}-${i}`}
                className="w-[280px] rounded-xl border border-white/15 bg-[#0C1226] p-4 transition-transform hover:scale-[1.03]"
              >
                <p className="text-sm leading-6 text-white/80">{cert}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
