"use client";

import { motion } from "framer-motion";
import { useModal } from "@/components/ui/ModalContext";
import {
  Workflow,
  Store,
  Check,
  ArrowUpRight,
  FileSpreadsheet,
  Boxes,
  MessageSquare,
  Zap,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tilt, Parallax, Reveal3D } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "order-automation",
    tag: "Order Automation",
    icon: <Workflow className="h-5 w-5" />,
    title: "Streamline every sales order, end to end",
    points: [
      "Effortlessly import orders from Woolworths & Foodstuffs directly into your system",
      "Minimise manual data entry and reduce costly errors",
      "Accelerate order fulfilment for faster, smoother operations",
      "Ensure every order is captured accurately and on time",
    ],
    visual: "orders",
    stat: { value: "−68%", label: "faster fulfilment" },
  },
  {
    id: "merchandising",
    tag: "Merchandising App",
    icon: <Store className="h-5 w-5" />,
    title: "Master in-store execution in real time",
    points: [
      "Gain complete control of in-store operations with real-time insights",
      "Track stock levels, monitor displays and manage promotions instantly",
      "Empower field teams to make smarter, faster decisions",
      "Integrate Stock Checker data and in-app messaging to strengthen field comms",
    ],
    visual: "merch",
    stat: { value: "3 reps", label: "live in the field" },
  },
];

export function Services() {
  const { openModal } = useModal();
  return (
    <section id="services" className="relative overflow-hidden py-24 md:py-32">
      {/* Ambient background */}
      <Parallax speed={-20} className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[rgb(var(--accent-rgb)/0.04)] blur-[160px]" />
      </Parallax>

      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Our services"
          title={
            <>
              Explore more{" "}
              <span className="text-grad">game-changing services</span>
            </>
          }
          sub="Beyond visibility — automation and field tools that turn insight into action across your whole operation."
        />

        <div className="mt-16 space-y-6">
          {services.map((s, i) => (
            <Reveal3D key={s.id} rotate={10} y={60}>
              <div
                className={cn(
                  "card card-spotlight group grid items-center gap-8 overflow-hidden p-7 md:p-10 lg:grid-cols-2",
                  i % 2 === 1 && "lg:[&>*:first-child]:order-2"
                )}
              >
                {/* Copy */}
                <div>
                  <span className="eyebrow">
                    {s.icon}
                    {s.tag}
                  </span>
                  <h3 className="font-display mt-5 text-[clamp(1.5rem,2.8vw,2.2rem)] font-semibold leading-tight text-ink">
                    {s.title}
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[rgb(var(--accent-rgb)/15%)] text-[var(--color-lime)]">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-[0.9rem] leading-relaxed text-ink-soft">{p}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stat pill + CTA row */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button onClick={openModal} className="btn-primary">
                      Get Started
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <div className="flex items-center gap-2 rounded-full border border-[rgb(var(--accent-rgb)/22%)] bg-[rgb(var(--accent-rgb)/7%)] px-4 py-2">
                      <Zap className="h-3.5 w-3.5 text-[var(--color-lime)]" />
                      <span className="font-mono text-sm font-semibold text-[var(--color-lime)]">
                        {s.stat.value}
                      </span>
                      <span className="text-xs text-ink-mute">{s.stat.label}</span>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <Parallax speed={24} className="relative">
                  <Tilt max={8} className="relative rounded-[22px]">
                    {s.visual === "orders" ? <OrdersVisual /> : <MerchVisual />}
                  </Tilt>
                </Parallax>
              </div>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}

function OrdersVisual() {
  const steps = [
    { icon: <FileSpreadsheet className="h-4 w-4" />, t: "Woolworths order received", s: "Imported" },
    { icon: <FileSpreadsheet className="h-4 w-4" />, t: "Foodstuffs order received", s: "Imported" },
    { icon: <Boxes className="h-4 w-4" />, t: "Pushed to inventory system", s: "Synced" },
  ];
  return (
    <div className="glass relative rounded-[22px] p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">Automation pipeline</p>
        <span className="font-mono text-[0.65rem] text-[var(--color-lime)]">0 manual entries</span>
      </div>
      <div className="space-y-2.5">
        {steps.map((st, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-between rounded-xl border border-border inset-panel px-3.5 py-3"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[rgb(var(--accent-rgb)/12%)] text-[var(--color-lime)]">
                {st.icon}
              </span>
              <span className="text-xs text-ink-soft">{st.t}</span>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-[rgb(var(--accent-rgb)/10%)] px-2.5 py-1 font-mono text-[0.62rem] text-[var(--color-lime)]">
              <Check className="h-2.5 w-2.5" strokeWidth={3} />
              {st.s}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-xl bg-[rgb(var(--accent-rgb)/8%)] px-4 py-3">
        <span className="text-xs text-ink-soft">Fulfilment time</span>
        <span className="font-mono text-sm font-bold text-[var(--color-lime)]">−68% faster</span>
      </div>
    </div>
  );
}

function MerchVisual() {
  return (
    <div className="glass relative rounded-[22px] p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">Field execution</p>
        <span className="flex items-center gap-1.5 rounded-full border border-[rgb(var(--accent-rgb)/25%)] px-2.5 py-1 font-mono text-[0.6rem] text-[var(--color-lime)]">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-[var(--color-lime)]" />
          3 reps live
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {[
          { k: "Displays checked", v: "42", up: true },
          { k: "Promos verified", v: "18", up: true },
          { k: "Photos captured", v: "96", up: true },
          { k: "Issues resolved", v: "11", up: false },
        ].map((c) => (
          <div key={c.k} className="rounded-xl border border-border inset-panel p-3">
            <p className={`font-mono text-xl font-bold ${c.up ? "text-ink" : "text-amber-400"}`}>
              {c.v}
            </p>
            <p className="mt-0.5 text-[0.68rem] text-ink-mute">{c.k}</p>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-3 flex items-center gap-3 rounded-xl bg-[rgb(var(--accent-rgb)/8%)] px-3.5 py-3"
      >
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-[var(--color-lime)] text-[#0a0d05]">
          <MessageSquare className="h-4 w-4" />
        </span>
        <div>
          <p className="text-xs font-medium text-ink">
            &ldquo;Endcap restocked at New World Thorndon&rdquo;
          </p>
          <p className="font-mono text-[0.62rem] text-ink-mute">field message · just now</p>
        </div>
      </motion.div>
    </div>
  );
}
