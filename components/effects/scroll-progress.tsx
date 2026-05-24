"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? (window.scrollY / max) * 100 : 0;
      setProgress(value);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[130] h-1 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#00D4FF] via-[#7C3AED] to-[#00D4FF] shadow-[0_0_22px_rgba(0,212,255,0.8)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
