"use client";

import { Counter } from "@/components/ui/Counter";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";

const stats = [
  {
    value: 94,
    suffix: "%",
    decimals: 0,
    label: "On-shelf accuracy tracked",
    sub: "across every audited store",
  },
  {
    value: 1284,
    suffix: "",
    decimals: 0,
    label: "Stores monitored",
    sub: "nationwide, in real time",
  },
  {
    value: 12,
    suffix: "M+",
    decimals: 0,
    label: "SKU checks run",
    sub: "every week and counting",
  },
  {
    value: 18.4,
    suffix: "%",
    decimals: 1,
    label: "Avg revenue recovered",
    sub: "from closing shelf gaps",
  },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Section ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(var(--accent-rgb)/0.03)] to-transparent" />

      <div className="mx-auto max-w-6xl px-5">
        <RevealStagger
          className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] border border-border bg-border lg:grid-cols-4"
          stagger={0.07}
        >
          {stats.map((s) => (
            <RevealItem key={s.label}>
              <div className="noise-overlay relative flex h-full flex-col bg-surface px-7 py-10 sm:px-9 sm:py-12">
                {/* Corner glow per cell */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[rgb(var(--accent-rgb)/0.12)] blur-2xl"
                />

                {/* Animated counter */}
                <p className="number-stat text-5xl text-grad sm:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} duration={2} />
                </p>

                <p className="mt-4 text-sm font-semibold text-ink">{s.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-mute">{s.sub}</p>

                {/* Lime accent line */}
                <div className="mt-7 h-0.5 w-10 rounded-full bg-[rgb(var(--accent-rgb)/40%)]" />
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
