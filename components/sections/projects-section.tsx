"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";

import { projects } from "@/data/site";
import { Button } from "@/components/ui/button";

type ProjectItem = (typeof projects)[number] & {
  imageUrl?: string | null;
};

export function ProjectsSection() {
  const [active, setActive] = useState<number | null>(null);
  const [items, setItems] = useState<ProjectItem[]>(() => [...projects]);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let loaded = false;

    const load = async () => {
      if (loaded) return;
      loaded = true;
      const response = await fetch("/api/projects");
      const data = (await response.json()) as { projects?: ProjectItem[] };
      if (Array.isArray(data.projects) && data.projects.length > 0) {
        setItems(data.projects);
      }
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            void load();
            observer.disconnect();
          }
        },
        { rootMargin: "200px" }
      );

      observer.observe(section);
      return () => observer.disconnect();
    }

    const idleId = setTimeout(() => {
      void load();
    }, 800);

    return () => clearTimeout(idleId);
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative snap-start py-24">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
        <p className="mt-3 text-white/70">Cinematic products engineered for measurable impact.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -6, rotateX: 3, rotateY: -3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] p-5"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/15 to-[#7C3AED]/10" />
              </div>
              <div className="relative z-10">
                <div
                  className="mb-4 h-36 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#00D4FF]/20 via-[#090f1f] to-[#7C3AED]/20"
                  style={
                    project.imageUrl
                      ? {
                          backgroundImage: `linear-gradient(135deg, rgba(0, 212, 255, 0.18), rgba(124, 58, 237, 0.14)), url(${project.imageUrl})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }
                      : undefined
                  }
                >
                  <div className="h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(0,212,255,0.22),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.22),transparent_40%)]" />
                </div>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((stack) => (
                    <span key={stack} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
                      {stack}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex gap-3">
                  <Button asChild variant="ghost" size="default">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="size-4" /> GitHub
                    </a>
                  </Button>
                  <Button asChild size="default">
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="size-4" /> Live Demo
                    </a>
                  </Button>
                </div>
                <button
                  className="mt-4 text-sm text-[#9FEFFF] underline-offset-4 hover:underline"
                  type="button"
                  onClick={() => setActive(index)}
                >
                  View details
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="w-full max-w-xl rounded-2xl border border-white/20 bg-[#091123] p-6"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{items[active].title}</h3>
                <button onClick={() => setActive(null)} className="rounded-full border border-white/20 p-1 text-white/80">
                  <X className="size-4" />
                </button>
              </div>
              <p className="text-white/75">{items[active].description}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {items[active].features.map((feature) => (
                  <li key={feature} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
