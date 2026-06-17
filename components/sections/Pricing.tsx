"use client";

import { Check, ArrowUpRight, Sparkles } from "lucide-react";
import { useModal } from "@/components/ui/ModalContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealStagger, RevealItem } from "@/components/ui/Reveal";
import { Tilt } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Stock Checker",
    price: "$330",
    period: "/ month",
    note: "Includes all core features. Minimum term 3 months.",
    features: [
      "Access all core Stock Checker features",
      "Woolworths, New World & PAK'nSAVE",
      "Track your distribution nationwide",
      "6 SKUs included",
      "Each additional SKU just $55.00",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Order Automation",
    badge: "Coming soon",
    price: "P.O.A.",
    period: "",
    note: "Import Woolworths & Foodstuffs orders straight into your accounting or inventory platform.",
    features: [
      "Export up to 50 / day (Woolworths)",
      "Export up to 50 / day (Foodstuffs)",
      "Up to 2 individual users",
      "Unlimited individual data",
      "Above 50 orders / day, extra $50",
    ],
    cta: "Join the waitlist",
    featured: true,
  },
  {
    name: "Merchandising App",
    price: "$880",
    period: "/ month",
    note: "Stay ahead of competitors — check availability, review placement and oversee promotions on the spot.",
    features: [
      "Powerful control of in-store execution",
      "Monitor stock levels & product displays",
      "Manage promotions instantly",
      "Empower field teams with real-time data",
      "Drive better decisions & performance",
    ],
    cta: "Get Started",
    featured: false,
  },
];

export function Pricing() {
  const { openModal } = useModal();
  return (
    <section id="pricing" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[var(--color-leaf)]/12 blur-[140px]" />
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Pricing plans"
          title={
            <>
              Choose the right plan <span className="text-grad">for your business</span>
            </>
          }
          sub="Transparent, flexible pricing built to scale with your distribution footprint."
        />

        <RevealStagger className="mt-14 grid items-stretch gap-5 lg:grid-cols-3" stagger={0.1}>
          {plans.map((plan) => (
            <RevealItem key={plan.name} className="h-full">
              <Tilt
                max={plan.featured ? 5 : 6}
                className={cn(
                  "relative flex h-full flex-col rounded-[var(--radius-card)] p-7",
                  plan.featured ? "lime-card lg:-translate-y-3" : "card card-hover"
                )}
              >
                {plan.featured && (
                  <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-[#0c1203] px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-[var(--color-lime)]">
                    <Sparkles className="h-3 w-3" />
                    {plan.badge}
                  </span>
                )}

                <h3
                  className={cn(
                    "font-display text-xl",
                    plan.featured ? "on-lime font-bold" : "font-semibold text-ink"
                  )}
                >
                  {plan.name}
                </h3>

                <div className="mt-4 flex items-end gap-1.5">
                  <span
                    className={cn(
                      "font-display text-5xl font-bold tracking-tight",
                      plan.featured ? "on-lime" : "text-ink"
                    )}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={cn(
                        "mb-1.5 text-sm",
                        plan.featured ? "on-lime-soft font-medium" : "text-ink-mute"
                      )}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                <p
                  className={cn(
                    "mt-3 min-h-[3.5rem] text-sm leading-relaxed",
                    plan.featured ? "on-lime-soft" : "text-ink-mute"
                  )}
                >
                  {plan.note}
                </p>

                {plan.featured ? (
                  <div className="my-5 h-px bg-[#0c1203]/20" />
                ) : (
                  <div className="hairline my-5" />
                )}

                <ul className="flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span
                        className={cn(
                          "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                          plan.featured
                            ? "bg-[#0c1203] text-[var(--color-lime)]"
                            : "bg-[rgb(var(--accent-rgb)/15%)] text-[var(--color-lime)]"
                        )}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span
                        className={cn(
                          "text-sm leading-relaxed",
                          plan.featured ? "on-lime font-medium" : "text-ink-soft"
                        )}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.featured ? (
                  <button
                    onClick={openModal}
                    className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#0c1203] px-5 py-3 font-semibold text-[var(--color-lime)] transition-transform hover:-translate-y-0.5"
                  >
                    {plan.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button onClick={openModal} className="btn-ghost mt-7 justify-center">
                    {plan.cta}
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                )}
              </Tilt>
            </RevealItem>
          ))}
        </RevealStagger>

        <p className="mt-8 text-center text-xs text-ink-faint">
          All prices in NZD, excl. GST. No setup fees — cancel anytime after your minimum term.
        </p>
      </div>
    </section>
  );
}
