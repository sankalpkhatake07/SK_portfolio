"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import { roleLoop } from "@/data/site";

const HeroOrbCanvas = dynamic(
  () => import("@/components/three/hero-orb").then((module) => module.HeroOrbCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="relative h-[360px] w-full rounded-full border border-white/10 bg-white/5 sm:h-[430px]" />
    ),
  }
);

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen snap-start overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.14]" />
      <div className="pointer-events-none absolute -left-20 top-16 h-80 w-80 rounded-full bg-[#7C3AED]/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-72 w-72 rounded-full bg-[#00D4FF]/25 blur-3xl" />

      <div className="relative mx-auto grid w-[min(1120px,92vw)] items-center gap-10 pb-24 md:grid-cols-2">
        <div>
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00D4FF]/35 bg-[#00D4FF]/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#9EEBFF]"
          >
            <Rocket className="size-3.5" /> Building Future Intelligence
          </motion.p>

          <motion.h1
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Sankalp Khatake
          </motion.h1>

          <div className="mt-5 h-14 overflow-hidden rounded-xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, -48, -96, -144, -192, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="space-y-4 text-xl font-semibold text-[#00D4FF]"
            >
              {roleLoop.map((role) => (
                <p key={role}>{role}</p>
              ))}
              <p>{roleLoop[0]}</p>
            </motion.div>
          </div>

          <motion.p
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/75"
          >
            Building intelligent AI systems with Generative AI, Computer Vision, IoT,
            and Edge Intelligence.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button asChild size="lg" variant="gradient">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="/SK_GEN_UPDATED_03.pdf" download>
                <Download className="size-4" /> Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="https://github.com/sankalpkhatake07" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 p-2.5 text-white/85 hover:border-[#00D4FF] hover:text-[#00D4FF]"><Github className="size-4" /></a>
            <a href="https://linkedin.com/in/sankalp-khatake" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 p-2.5 text-white/85 hover:border-[#00D4FF] hover:text-[#00D4FF]"><Linkedin className="size-4" /></a>
            <a href="mailto:sankalpkhatake07@gmail.com" className="rounded-full border border-white/20 p-2.5 text-white/85 hover:border-[#00D4FF] hover:text-[#00D4FF]"><Mail className="size-4" /></a>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.25),transparent_55%)] blur-2xl" />
          <HeroOrbCanvas />
        </motion.div>
      </div>
    </section>
  );
}
