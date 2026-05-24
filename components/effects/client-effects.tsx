"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function ClientEffects() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      gestureOrientation: "vertical",
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      return;
    }

    const move = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--y", `${event.clientY}px`);
      cursor.style.transform = `translate3d(${event.clientX - 16}px, ${event.clientY - 16}px, 0)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div
        className="fixed left-0 top-0 z-[120] hidden size-8 rounded-full border border-[#00D4FF]/50 bg-[#00D4FF]/10 blur-[1px] transition-transform duration-150 will-change-transform md:block"
        ref={cursorRef}
      />
      <div className="pointer-events-none fixed left-0 top-0 z-[1] h-full w-full bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,30%),rgba(0,212,255,0.12),transparent_36%)]" />
    </>
  );
}
