"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="fixed inset-0 z-[140] flex items-center justify-center bg-[#050816]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center">
            <div className="mx-auto size-14 animate-spin rounded-full border-2 border-[#00D4FF]/30 border-t-[#00D4FF]" />
            <p className="mt-4 text-sm tracking-[0.18em] text-[#9EEBFF]">INITIALIZING AI PORTFOLIO</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
