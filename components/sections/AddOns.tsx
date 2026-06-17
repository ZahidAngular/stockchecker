"use client";

import { Tag, Boxes, GitMerge, Swords, ArrowUpRight, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { Tilt } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";
import { useModal } from "@/components/ui/ModalContext";

const addons = [
  {
    num: "01",
    icon: <Tag className="h-5 w-5" />,
    name: "Display Real-Time Pricing",
    desc: "Show live retail pricing across every store and banner — right in your dashboard.",
    price: "$9",
    unit: "per SKU / month",
    cta: "Add to plan",
    soon: false,
  },
  {
    num: "02",
    icon: <Boxes className="h-5 w-5" />,
    name: "Additional SKUs",
    desc: "Scale your SKU tracking beyond the core 6 as your product range grows.",
    price: "$55",
    unit: "each / month",
    cta: "Add to plan",
    soon: false,
  },
  {
    num: "03",
    icon: <GitMerge className="h-5 w-5" />,
    name: "Ranging Outcome Integration",
    desc: "Connect distribution outcomes directly into your reporting workflow.",
    price: "$79",
    unit: "per month",
    cta: "Add to plan",
    soon: false,
  },
  {
    num: "04",
    icon: <Swords className="h-5 w-5" />,
    name: "Competitor Stock Analysis",
    desc: "Benchmark your shelf presence against competitors — store by store, in real time.",
    price: "P.O.A.",
    unit: "contact us for pricing",
    cta: "Join waitlist",
    soon: true,
  },
];

export function AddOns() {
  const { openModal } = useModal();
  return (
    <section id="addons" className="relative overflow-hidden py-24 md:py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[rgb(var(--accent-rgb)/0.05)] blur-[160px]" />

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Extend your plan"
          title={
            <>
              Power-up with <span className="text-grad">add-ons</span>
            </>
          }
          sub="Bolt on exactly what you need — no re-platforming, no long-term lock-in."
        />

        <RevealStagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.09}>
          {addons.map((a) => (
            <RevealItem key={a.name}>
              <Tilt
                max={a.soon ? 3 : 7}
                className={cn(
                  "card-spotlight group relative flex h-full flex-col overflow-hidden p-6",
                  a.soon ? "card-dashed" : "card card-hover"
                )}
              >
                {/* Number + badge row */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.65rem] tracking-[0.15em] text-ink-faint">
                    {a.num}
                  </span>
                  {a.soon && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-[rgb(var(--accent-rgb)/20%)] bg-[rgb(var(--accent-rgb)/6%)] px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-[var(--color-lime)]">
                      <Clock className="h-2.5 w-2.5" />
                      Soon
                    </span>
                  )}
                </div>

                {/* Icon */}
                <span
                  className={cn(
                    "mt-5 grid h-12 w-12 place-items-center rounded-2xl transition-transform duration-400 group-hover:scale-110",
                    a.soon
                      ? "bg-[rgb(var(--accent-rgb)/7%)] text-ink-faint"
                      : "bg-[rgb(var(--accent-rgb)/14%)] text-[var(--color-lime)]"
                  )}
                >
                  {a.icon}
                </span>

                {/* Name + desc */}
                <h3
                  className={cn(
                    "font-display mt-5 text-[0.95rem] font-semibold leading-snug",
                    a.soon ? "text-ink-soft" : "text-ink"
                  )}
                >
                  {a.name}
                </h3>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-ink-mute">{a.desc}</p>

                {/* Push price + CTA to bottom */}
                <div className="flex-1" />

                {/* Price block */}
                <div className="mt-6 border-t border-border pt-5">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={cn(
                        "number-stat text-4xl",
                        a.soon ? "text-ink-mute" : "text-grad"
                      )}
                    >
                      {a.price}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[0.68rem] text-ink-faint">{a.unit}</p>
                </div>

                {/* CTA */}
                <button
                  disabled={a.soon}
                  onClick={a.soon ? undefined : openModal}
                  className={cn(
                    "mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300",
                    a.soon
                      ? "cursor-not-allowed border border-border text-ink-faint"
                      : "btn-primary"
                  )}
                >
                  {a.cta}
                  {!a.soon && <ArrowUpRight className="h-3.5 w-3.5" />}
                </button>
              </Tilt>
            </RevealItem>
          ))}
        </RevealStagger>

        <p className="mt-10 text-center text-xs text-ink-faint">
          All add-ons billed monthly in NZD, excl. GST · Cancel anytime
        </p>
      </div>
    </section>
  );
}
