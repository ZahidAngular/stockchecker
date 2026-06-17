"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Play, TrendingUp, MapPin, Activity } from "lucide-react";
import Image from "next/image";
import { DashboardMockup } from "@/components/ui/DashboardMockup";
import { Tilt, Magnetic, ScrollFloat, Parallax } from "@/components/ui/Motion";
import { useModal } from "@/components/ui/ModalContext";

const retailers = [
  { name: "Woolworths", logo: "/woolworths-logo.svg" },
  { name: "New World", logo: "/new-world-logo.png" },
  { name: "PAK'nSAVE", logo: "/paknsave-logo.png" },
];

export function Hero() {
  const { openModal } = useModal();
  return (
    <section id="top" className="hero-grain relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      {/* Background layers */}
      <Parallax speed={70} className="absolute inset-0">
        <div className="mesh" />
      </Parallax>
      <div className="absolute inset-0 grid-bg grid-fade opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgb(var(--accent-rgb)/30%)] to-transparent" />
      {/* Bottom vignette into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />

      {/* Floating live badges — only in wide viewports, outside content columns */}
      <motion.div
        className="float-badge absolute left-[2%] top-1/3 hidden xl:flex"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        style={{ animation: "float-y 7s ease-in-out infinite" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-lime)] pulse-dot" />
        <span className="text-[var(--color-lime)]">1,284</span>&nbsp;stores live
      </motion.div>
      <motion.div
        className="float-badge absolute right-[2%] bottom-1/3 hidden xl:flex"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.7 }}
        style={{ animation: "float-y 9s ease-in-out 1s infinite" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
        <span className="text-amber-400">$240k</span>&nbsp;recovered this week
      </motion.div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left — copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-lime)]" />
            Driving FMCG growth with real-time data
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="h-display mt-6 text-[clamp(3rem,7.2vw,5.8rem)] text-balance"
          >
            Smarter <span className="text-grad">distribution.</span>
            <br />
            Smarter sales.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            See exactly where your products are on shelf, where gaps exist, and
            the revenue opportunities you might be missing — across every major
            retail network in real time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <a href="tel:+61479256105" className="btn-primary">
                Let&apos;s Talk
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Magnetic>
            <a href="#visibility" className="btn-ghost">
              <Play className="h-4 w-4 fill-current" />
              Watch how it works
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-lime)]">
              Tracking distribution across
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3" style={{ perspective: "600px" }}>
              {retailers.map((r) => (
                <motion.div
                  key={r.name}
                  whileHover={{
                    scale: 1.12,
                    rotateY: 14,
                    rotateX: -8,
                    z: 30,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 380, damping: 18 }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative cursor-pointer rounded-lg p-1"
                >
                  {/* Glow shadow behind on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-white/10 opacity-0 blur-md"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <Image
                    src={r.logo}
                    alt={r.name}
                    width={160}
                    height={40}
                    className="relative h-10 w-auto max-w-[140px] object-contain opacity-80 transition-opacity hover:opacity-100"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right — 3D dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <ScrollFloat range={70}>
            <Tilt max={9} className="relative rounded-[26px]">
              <DashboardMockup />
            </Tilt>
          </ScrollFloat>

          {/* Floating stat chips */}
          <motion.div
            className="glass float absolute -left-4 top-10 hidden rounded-2xl px-4 py-3 sm:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[rgb(var(--accent-rgb)/15%)] text-[var(--color-lime)]">
                <TrendingUp className="h-4 w-4" />
              </span>
              <div>
                <p className="font-mono text-lg font-semibold leading-none text-ink">+18.4%</p>
                <p className="mt-1 text-[0.7rem] text-ink-mute">revenue recovered</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass float-slow absolute -right-3 bottom-8 hidden rounded-2xl px-4 py-3 sm:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[rgb(var(--accent-rgb)/15%)] text-[var(--color-lime)]">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="font-mono text-lg font-semibold leading-none text-ink">1,284</p>
                <p className="mt-1 text-[0.7rem] text-ink-mute">stores monitored</p>
              </div>
            </div>
          </motion.div>

          <div className="glass pulse-dot absolute right-8 top-2 hidden items-center gap-2 rounded-full px-3 py-1.5 md:flex">
            <Activity className="h-3.5 w-3.5 text-[var(--color-lime)]" />
            <span className="font-mono text-[0.7rem] text-ink-soft">LIVE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
