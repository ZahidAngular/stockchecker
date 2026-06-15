const items = [
  { name: "PAK'nSAVE", dot: "#e8d44d" },
  { name: "Woolworths", dot: "#00aa45" },
  { name: "New World", dot: "#e31837" },
  { name: "Foodstuffs", dot: "#f47c20" },
  { name: "Countdown", dot: "#e31837" },
  { name: "FreshChoice", dot: "#00aa45" },
  { name: "SuperValue", dot: "#e8d44d" },
  { name: "Four Square", dot: "#f47c20" },
];

export function LogoMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-bg-2/40 py-10">
      <div className="mx-auto mb-8 max-w-6xl px-5">
        <p className="text-center font-mono text-[0.7rem] uppercase tracking-[0.25em] text-ink-faint">
          Real-time visibility across the networks that move FMCG
        </p>
      </div>

      {/* Forward marquee */}
      <div className="marquee-mask overflow-hidden">
        <div
          className="marquee-track items-center"
          style={{ ["--marquee-dur" as string]: "40s" }}
        >
          {[...items, ...items].map((it, i) => (
            <span
              key={i}
              className="mx-2.5 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/80 px-5 py-2.5 font-display text-sm font-medium text-ink-soft backdrop-blur-sm transition-all duration-300 hover:border-[rgb(var(--accent-rgb)/30%)] hover:text-ink"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full opacity-70"
                style={{ background: it.dot }}
                aria-hidden
              />
              {it.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
