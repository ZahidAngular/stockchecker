"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight, Radar, TrendingDown } from "lucide-react";
import { Reveal, RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { Tilt, Parallax, FadeUp } from "@/components/ui/Motion";
import { useModal } from "@/components/ui/ModalContext";

const points = [
  "Detect out-of-stocks before they impact sales",
  "See exactly where your products are listed — and where they're missing",
  "Instantly check retail prices across all stores",
  "Confirm compliance with distribution agreements and spot gaps",
  "Uncover new revenue opportunities",
  "Benchmark performance with competitor data",
];

export function Visibility() {
  const { openModal } = useModal();
  return (
    <section id="visibility" className="relative overflow-hidden py-24 md:py-32">
      {/* Ambient glows */}
      <Parallax speed={-30} className="pointer-events-none absolute -left-40 top-1/3">
        <div className="h-96 w-96 rounded-full bg-[var(--color-leaf)]/10 blur-[120px]" />
      </Parallax>
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[rgb(var(--accent-rgb)/0.04)] blur-[100px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        {/* Visual panel */}
        <Reveal className="order-2 lg:order-1">
          <Parallax speed={26}>
            <Tilt max={7} className="card glass card-spotlight relative rounded-[26px] p-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[rgb(var(--accent-rgb)/12%)] text-[var(--color-lime)]">
                    <Radar className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink">Live distribution scan</p>
                    <p className="font-mono text-[0.7rem] text-ink-mute">updated 12s ago</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 rounded-full border border-[rgb(var(--accent-rgb)/25%)] bg-[rgb(var(--accent-rgb)/8%)] px-2.5 py-1">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--color-lime)]" />
                  <span className="font-mono text-[0.65rem] text-[var(--color-lime)]">SCANNING</span>
                </span>
              </div>

              {/* Coverage map grid */}
              <div className="mt-6 grid grid-cols-8 gap-1.5">
                {Array.from({ length: 48 }).map((_, i) => {
                  const isGap = [5, 11, 19, 27, 33, 41].includes(i);
                  return (
                    <motion.span
                      key={i}
                      className={`aspect-square rounded-[5px] ${
                        isGap
                          ? "bg-amber-400/65"
                          : "bg-[rgb(var(--accent-rgb)/22%)]"
                      }`}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.01, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  );
                })}
              </div>

              {/* Stats row */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="flex flex-col items-center justify-center rounded-xl border border-border inset-panel py-3">
                  <p className="font-mono text-xl font-bold text-ink">87.5%</p>
                  <p className="mt-0.5 text-[0.65rem] text-ink-mute">confirmed</p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl border border-border inset-panel py-3">
                  <p className="font-mono text-xl font-bold text-amber-400">6</p>
                  <p className="mt-0.5 text-[0.65rem] text-ink-mute">gaps flagged</p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-xl border border-[rgb(var(--accent-rgb)/20%)] bg-[rgb(var(--accent-rgb)/6%)] py-3">
                  <p className="font-mono text-xl font-bold text-[var(--color-lime)]">$24k</p>
                  <p className="mt-0.5 text-[0.65rem] text-[var(--color-lime)]/70">at risk /wk</p>
                </div>
              </div>

              {/* Alert chip */}
              <FadeUp delay={0.4}>
                <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-amber-400/20 bg-amber-400/6 px-3.5 py-2.5">
                  <TrendingDown className="h-4 w-4 shrink-0 text-amber-400" />
                  <p className="text-xs text-ink-soft">
                    <span className="font-medium text-amber-400">3 new gaps</span> detected in Woolworths Auckland region
                  </p>
                </div>
              </FadeUp>
            </Tilt>
          </Parallax>
        </Reveal>

        {/* Copy + checklist */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow">Stock Checker</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="h-display mt-5 text-[clamp(2rem,4.2vw,3.2rem)] text-balance">
              Real-time visibility of{" "}
              <span className="text-grad">your distribution.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              One live source of truth for where your products are — and where
              they should be. No more guesswork, no more blind spots.
            </p>
          </Reveal>

          <RevealStagger className="mt-8 grid gap-2.5" stagger={0.06}>
            {points.map((p) => (
              <RevealItem key={p}>
                <div className="group flex items-start gap-3 rounded-2xl border border-transparent p-2.5 transition-all duration-300 hover:border-border hover:bg-[var(--inset)]">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[rgb(var(--accent-rgb)/15%)] text-[var(--color-lime)] transition-transform duration-300 group-hover:scale-110">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <p className="text-[0.9rem] leading-relaxed text-ink-soft">{p}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal delay={0.15}>
            <button onClick={openModal} className="btn-primary mt-9">
              Get Started
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
