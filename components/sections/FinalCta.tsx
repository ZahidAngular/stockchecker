"use client";

import { ArrowUpRight, PhoneCall, ShieldCheck, Clock, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Magnetic, Parallax } from "@/components/ui/Motion";
import { useModal } from "@/components/ui/ModalContext";

const trust = [
  { icon: <ShieldCheck className="h-4 w-4" />, text: "No lock-in contracts" },
  { icon: <Clock className="h-4 w-4" />, text: "20-min live demo" },
  { icon: <Users className="h-4 w-4" />, text: "NZ & Australia coverage" },
];

export function FinalCta() {
  const { openModal } = useModal();
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      {/* Layered parallax backgrounds */}
      <Parallax speed={60} className="absolute inset-0">
        <div className="mesh opacity-70" />
      </Parallax>
      <div className="absolute inset-0 grid-bg grid-fade opacity-40" />

      {/* Decorative ring */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgb(var(--accent-rgb)/0.07)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgb(var(--accent-rgb)/0.1)]" />

      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <Reveal>
          <span className="eyebrow">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-lime)]" />
            Ready when you are
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="h-display mt-7 text-[clamp(2.8rem,6.5vw,5.2rem)] text-balance leading-none">
            Stop guessing.
            <br />
            <span className="text-grad">Start seeing every shelf.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            Book a walkthrough and we&apos;ll show you exactly where your products
            are — and the revenue you&apos;re leaving on the shelf.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnetic strength={0.4}>
              <a href="tel:+61479256105" className="btn-primary px-7 py-3.5 text-base">
                Let&apos;s Talk
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Magnetic>
            <a href="tel:+61479256105" className="btn-ghost px-7 py-3.5 text-base">
              <PhoneCall className="h-4 w-4" />
              +61 479 256 105
            </a>
          </div>
        </Reveal>

        {/* Trust badges */}
        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {trust.map((t) => (
              <span
                key={t.text}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-xs font-medium text-ink-mute backdrop-blur-sm"
              >
                <span className="text-[var(--color-lime)]">{t.icon}</span>
                {t.text}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
