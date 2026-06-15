"use client";

import { motion } from "framer-motion";
import { Check, AlertTriangle, Search } from "lucide-react";

const bars = [62, 78, 45, 90, 70, 84, 58, 96];

const rows = [
  { sku: "Sparkling Water 1.5L", store: "Woolworths", status: "on", price: "$2.49" },
  { sku: "Oat Granola 450g", store: "New World", status: "gap", price: "—" },
  { sku: "Cold Brew 750ml", store: "PAK'nSAVE", status: "on", price: "$5.90" },
  { sku: "Protein Bar 60g", store: "Woolworths", status: "on", price: "$3.20" },
];

export function DashboardMockup() {
  return (
    <div
      className="glass-strong relative rounded-[26px] p-4 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]"
      style={{ perspective: "1400px" }}
    >
      {/* sheen sweep */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[26px]">
        <div
          className="absolute -inset-y-10 left-0 w-1/3 skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          style={{ animation: "sheen 6s ease-in-out infinite" }}
        />
      </div>

      {/* window chrome */}
      <div className="mb-3 flex items-center justify-between px-1">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--accent-rgb)/80%)]" />
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-border inset-panel px-3 py-1">
          <Search className="h-3 w-3 text-ink-faint" />
          <span className="font-mono text-[0.65rem] text-ink-mute">app.stockchecker.co</span>
        </div>
        <span className="font-mono text-[0.65rem] text-ink-faint">v2.4</span>
      </div>

      {/* top KPI row */}
      <div className="grid grid-cols-3 gap-2.5">
        {[
          { k: "On-shelf", v: "94.2%", up: true },
          { k: "Gaps found", v: "37", up: false },
          { k: "Avg price", v: "$3.84", up: true },
        ].map((kpi) => (
          <div key={kpi.k} className="card rounded-2xl p-3">
            <p className="text-[0.65rem] text-ink-mute">{kpi.k}</p>
            <p className="mt-1 font-mono text-lg font-semibold text-ink">{kpi.v}</p>
            <div
              className={`mt-1 h-1 w-full rounded-full ${
                kpi.up ? "bg-[rgb(var(--accent-rgb)/40%)]" : "bg-amber-400/30"
              }`}
            >
              <div
                className={`h-full rounded-full ${kpi.up ? "bg-[var(--color-lime)]" : "bg-amber-400"}`}
                style={{ width: kpi.up ? "78%" : "42%" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* chart */}
      <div className="card mt-2.5 rounded-2xl p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-medium text-ink">Distribution coverage</p>
          <span className="font-mono text-[0.65rem] text-[var(--color-lime)]">Last 8 weeks</span>
        </div>
        <div className="flex h-24 items-end gap-2">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-t-md bg-gradient-to-t from-[rgb(var(--accent-rgb)/30%)] to-[var(--color-lime)]"
              initial={{ height: "8%" }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>
      </div>

      {/* live table */}
      <div className="card mt-2.5 rounded-2xl p-2">
        {rows.map((r, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-xl px-2.5 py-2 transition-colors hover:bg-white/[0.03]"
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`grid h-6 w-6 place-items-center rounded-lg ${
                  r.status === "on"
                    ? "bg-[rgb(var(--accent-rgb)/15%)] text-[var(--color-lime)]"
                    : "bg-amber-400/15 text-amber-400"
                }`}
              >
                {r.status === "on" ? (
                  <Check className="h-3.5 w-3.5" />
                ) : (
                  <AlertTriangle className="h-3.5 w-3.5" />
                )}
              </span>
              <div>
                <p className="text-xs font-medium text-ink">{r.sku}</p>
                <p className="text-[0.65rem] text-ink-mute">{r.store}</p>
              </div>
            </div>
            <span
              className={`font-mono text-xs ${
                r.status === "on" ? "text-ink-soft" : "text-amber-400"
              }`}
            >
              {r.status === "on" ? r.price : "OUT"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
