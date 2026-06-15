"use client";

import { motion } from "framer-motion";
import { Reveal3D } from "@/components/ui/Motion";

const stars = [0, 1, 2, 3, 4];

const impactChips = [
  { label: "+$240k found", icon: "↑" },
  { label: "12 weeks to ROI", icon: "⚡" },
  { label: "87.5% on-shelf accuracy", icon: "✓" },
];

export function Testimonial() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--accent-rgb)/0.06)] blur-[160px]" />

      <div className="mx-auto max-w-4xl px-5">
        <Reveal3D y={56} rotate={9}>
          <div className="noise-overlay card glass relative overflow-hidden rounded-[var(--radius-card)] p-9 text-center md:p-16">
            {/* Background glows */}
            <div className="pointer-events-none absolute -left-12 -top-12 h-56 w-56 rounded-full bg-[rgb(var(--accent-rgb)/0.1)] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-56 w-56 rounded-full bg-[rgb(var(--accent-rgb)/0.06)] blur-3xl" />

            {/* 5 star rating */}
            <div className="relative flex items-center justify-center gap-1">
              {stars.map((i) => (
                <motion.svg
                  key={i}
                  viewBox="0 0 20 20"
                  className="h-5 w-5 fill-[var(--color-lime)]"
                  initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>

            {/* Quote */}
            <p className="font-display relative mx-auto mt-8 max-w-2xl text-[clamp(1.35rem,2.7vw,2.1rem)] font-medium leading-snug text-ink text-balance">
              &ldquo;Stock Checker gave us visibility we never had. We closed shelf
              gaps we didn&apos;t know existed and recovered six figures in lost
              sales within a single quarter.&rdquo;
            </p>

            {/* Attribution */}
            <div className="relative mt-9 flex items-center justify-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-[var(--color-lime-bright)] to-[var(--color-lime-deep)] font-display text-sm font-bold text-[#0a0d05]">
                NS
              </span>
              <div className="text-left">
                <p className="text-sm font-semibold text-ink">National Sales Manager</p>
                <p className="text-xs text-ink-mute">Leading FMCG supplier · New Zealand</p>
              </div>
            </div>

            {/* Divider */}
            <div className="hairline relative mx-auto mt-9 max-w-xs" />

            {/* Impact chips */}
            <div className="relative mt-7 flex flex-wrap items-center justify-center gap-3">
              {impactChips.map((chip, i) => (
                <motion.span
                  key={chip.label}
                  className="impact-chip"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span aria-hidden>{chip.icon}</span>
                  {chip.label}
                </motion.span>
              ))}
            </div>
          </div>
        </Reveal3D>
      </div>
    </section>
  );
}
