"use client";

import { motion } from "framer-motion";
import {
  PackageSearch,
  Tag,
  ShieldCheck,
  LineChart,
  Users,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Tilt, Parallax } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";

const liveRows = [
  { t: "Cold Brew 750ml — Woolworths Albany", s: "out" },
  { t: "Oat Granola 450g — New World Thorndon", s: "low" },
  { t: "Sparkling Water 1.5L — PAK'nSAVE Mt Albert", s: "ok" },
  { t: "Protein Bar 60g × 12 — Countdown Newtown", s: "ok" },
];

export function Bento() {
  return (
    <section className="relative py-24 md:py-28">
      {/* Subtle background orb */}
      <Parallax speed={30} className="pointer-events-none absolute right-0 top-0 opacity-40">
        <div className="h-[500px] w-[500px] rounded-full bg-[rgb(var(--accent-rgb)/0.06)] blur-[140px]" />
      </Parallax>

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="The platform"
          title={
            <>
              Everything you need to{" "}
              <span className="text-grad">win the shelf</span>
            </>
          }
          sub="A complete distribution intelligence suite — from out-of-stock detection to competitor benchmarking — in one calm, real-time view."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[200px]">
          {/* Large feature — 2×2 */}
          <Reveal className="md:col-span-2 md:row-span-2">
            <div className="card card-spotlight card-hover group relative h-full overflow-hidden p-7">
              {/* Glow blob */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[rgb(var(--accent-rgb)/0.1)] blur-3xl transition-opacity duration-700 group-hover:opacity-150" />

              <div className="relative flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[rgb(var(--accent-rgb)/14%)] text-[var(--color-lime)] transition-transform duration-300 group-hover:scale-110">
                  <PackageSearch className="h-6 w-6" />
                </span>
                <span className="flex items-center gap-1.5 rounded-full border border-[rgb(var(--accent-rgb)/25%)] bg-[rgb(var(--accent-rgb)/8%)] px-2.5 py-1">
                  <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--color-lime)]" />
                  <span className="font-mono text-[0.62rem] text-[var(--color-lime)]">LIVE</span>
                </span>
              </div>

              <h3 className="font-display relative mt-5 text-2xl font-semibold text-ink">
                Detect out-of-stocks before they cost you
              </h3>
              <p className="relative mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                Continuous shelf monitoring flags missing SKUs the moment they
                disappear — so your team acts before a gap becomes lost revenue.
              </p>

              {/* Live feed rows */}
              <div className="relative mt-5 space-y-2">
                {liveRows.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-between rounded-xl border border-border inset-panel px-3.5 py-2.5"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={cn(
                          "grid h-6 w-6 shrink-0 place-items-center rounded-lg",
                          r.s === "out"
                            ? "bg-red-500/15 text-red-400"
                            : r.s === "low"
                              ? "bg-amber-400/15 text-amber-400"
                              : "bg-[rgb(var(--accent-rgb)/15%)] text-[var(--color-lime)]"
                        )}
                      >
                        {r.s === "ok" ? (
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        ) : r.s === "low" ? (
                          <AlertTriangle className="h-3.5 w-3.5" />
                        ) : (
                          <AlertTriangle className="h-3.5 w-3.5" />
                        )}
                      </span>
                      <span className="text-xs text-ink-soft">{r.t}</span>
                    </div>
                    <span
                      className={cn(
                        "font-mono text-[0.65rem] font-medium uppercase",
                        r.s === "out"
                          ? "text-red-400"
                          : r.s === "low"
                            ? "text-amber-400"
                            : "text-[var(--color-lime)]"
                      )}
                    >
                      {r.s === "out" ? "out of stock" : r.s === "low" ? "low stock" : "on shelf"}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Small cards — right column */}
          <BentoCard
            icon={<Tag className="h-5 w-5" />}
            title="Instant price checks"
            body="Live retail pricing across every store and banner."
          />
          <BentoCard
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Compliance assurance"
            body="Confirm distribution agreements are being honoured."
          />

          {/* Bottom row */}
          <BentoCard
            className="md:col-span-1"
            icon={<LineChart className="h-5 w-5" />}
            title="Competitor benchmarking"
            body="Measure your presence against the field, store by store."
          />

          {/* Wide card — 2-col bottom */}
          <Reveal className="md:col-span-2">
            <div className="card card-spotlight card-hover group flex h-full flex-col justify-between gap-4 p-7 sm:flex-row sm:items-center">
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[rgb(var(--accent-rgb)/14%)] text-[var(--color-lime)] transition-transform duration-300 group-hover:scale-110">
                  <Zap className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-4 text-xl font-semibold text-ink">
                  Uncover hidden revenue opportunities
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-soft">
                  Turn shelf gaps and ranging insights into a prioritised list of
                  growth actions, ranked by value.
                </p>
              </div>

              <div className="shrink-0 rounded-2xl border border-[rgb(var(--accent-rgb)/25%)] bg-[rgb(var(--accent-rgb)/6%)] p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-[rgb(var(--accent-rgb)/18%)] text-[var(--color-lime)]">
                    <TrendingUp className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="number-stat text-3xl text-grad">+$240k</p>
                    <p className="mt-0.5 text-[0.7rem] text-ink-mute">annual upside found</p>
                  </div>
                </div>
                <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-[rgb(var(--accent-rgb)/12%)]">
                  <motion.div
                    className="h-full rounded-full bg-[var(--color-lime)]"
                    initial={{ width: "0%" }}
                    whileInView={{ width: "78%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    style={{ boxShadow: "0 0 10px 2px rgb(var(--accent-rgb)/0.5)" }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  icon,
  title,
  body,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("h-full", className)}>
      <Tilt max={7} className="card card-spotlight card-hover group relative h-full overflow-hidden p-6">
        <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[rgb(var(--accent-rgb)/0.08)] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-[rgb(var(--accent-rgb)/12%)] text-[var(--color-lime)] transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>
        <h3 className="font-display relative mt-4 text-lg font-semibold text-ink">{title}</h3>
        <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
      </Tilt>
    </Reveal>
  );
}
