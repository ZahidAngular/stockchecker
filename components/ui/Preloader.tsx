"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const DURATION = 1900;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      // Ease-out curve: fast start, slow finish
      const raw = elapsed / DURATION;
      const eased = 1 - Math.pow(1 - Math.min(raw, 1), 2.2);
      const p = Math.round(eased * 100);
      setProgress(p);

      if (raw < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 350);
      }
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070906]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden
        >
          {/* Ambient radial glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[500px] rounded-full bg-[#c7f94d]/6 blur-[180px]" />
          </div>

          {/* Grid pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: `linear-gradient(rgba(199,249,77,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,249,77,0.04) 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
              maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 20%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, #000 20%, transparent 80%)",
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.82, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Image
              src="/logo.png"
              alt="Stock Checker"
              width={220}
              height={90}
              priority
              className="h-auto w-[180px] object-contain sm:w-[220px]"
            />
          </motion.div>

          {/* Progress counter */}
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-10 font-mono text-[0.65rem] tabular-nums tracking-[0.25em] text-white/30"
          >
            {String(progress).padStart(3, "0")}%
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mt-4 w-64 sm:w-80"
          >
            {/* Track */}
            <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/10">
              {/* Fill */}
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-[#c7f94d]"
                style={{
                  width: `${progress}%`,
                  transition: "width 0.06s linear",
                  boxShadow: "0 0 14px 3px rgba(199,249,77,0.7), 0 0 32px 6px rgba(199,249,77,0.25)",
                }}
              />
              {/* Leading glow dot */}
              <div
                className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#e1ff6b]"
                style={{
                  left: `calc(${progress}% - 5px)`,
                  transition: "left 0.06s linear",
                  boxShadow: "0 0 10px 4px rgba(225,255,107,0.9)",
                  opacity: progress > 1 && progress < 99 ? 1 : 0,
                }}
              />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-white/20"
          >
            Real-time FMCG intelligence
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
