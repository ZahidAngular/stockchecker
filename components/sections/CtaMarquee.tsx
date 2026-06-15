const phrases = [
  "Out-of-stocks cost money — spot them first",
  "Know your shelves, know your sales",
  "Real-time insights. Real growth",
  "See gaps. Capture revenue. Win market share",
  "Stay stocked. Stay ahead",
];

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="mx-7 h-4 w-4 shrink-0 fill-[#0a0d05]">
      <path d="M12 2l2.6 6.4L21 9.2l-4.8 4.3 1.4 6.5L12 16.8 6.4 20l1.4-6.5L3 9.2l6.4-.8z" />
    </svg>
  );
}

export function CtaMarquee() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[var(--color-lime-deep)] via-[var(--color-lime)] to-[var(--color-lime-bright)] py-5">
      <div className="overflow-hidden">
        <div className="marquee-track items-center" style={{ ["--marquee-dur" as string]: "30s" }}>
          {[...phrases, ...phrases].map((p, i) => (
            <div key={i} className="flex items-center">
              <span className="whitespace-nowrap font-display text-base font-semibold text-[#0a0d05] sm:text-lg">
                {p}
              </span>
              <Star />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
