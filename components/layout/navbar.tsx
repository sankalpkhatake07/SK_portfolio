"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { navItems } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/theme-toggle";

export function Navbar() {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-[100] mx-auto w-[min(1120px,94vw)]">
      <nav className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <Link href="#home" className="text-lg font-bold tracking-wide text-white">
            Sankalp<span className="text-[#00D4FF]">.AI</span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative text-sm font-medium text-white/80 transition-colors hover:text-white",
                  active === item.href && "text-white"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-[#00D4FF] transition-all duration-300",
                    active === item.href ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button asChild variant="gradient" size="default">
              <a href="/SK_GEN_UPDATED_03.pdf" download>
                <Download className="size-4" /> Resume
              </a>
            </Button>
          </div>

          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-4 grid gap-3 border-t border-white/10 pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl bg-white/5 px-3 py-2 text-sm text-white/90"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <span className="text-xs uppercase tracking-[0.18em] text-white/50">Theme</span>
                </div>
                <Button asChild variant="gradient" className="mt-1 w-full">
                  <a href="/SK_GEN_UPDATED_03.pdf" download>Download Resume</a>
                </Button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>
    </header>
  );
}
