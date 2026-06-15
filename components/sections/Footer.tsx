import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const socials: { label: string; path: string }[] = [
  { label: "LinkedIn", path: "M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3 0-2.95-1.8-2.95s-2.07 1.4-2.07 2.85V21h-4z" },
  { label: "X", path: "M17.5 3h3l-7 8 8.2 10h-6.4l-5-6-5.7 6H1.6l7.5-8.2L1 3h6.5l4.5 5.5zm-1.1 16h1.7L7.7 4.8H5.9z" },
  { label: "Instagram", path: "M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.26.07 1.64.07 4.83s0 3.57-.07 4.83c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.26.06-1.64.07-4.83.07s-3.57 0-4.83-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.57 2.2 15.19 2.2 12s0-3.57.07-4.83c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.43 2.2 8.81 2.2 12 2.2zm0 1.8c-3.14 0-3.5 0-4.74.07-.9.04-1.38.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.81-.32 1.71C3.4 8.5 3.4 8.86 3.4 12s0 3.5.07 4.74c.04.9.19 1.38.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.81.28 1.71.32 1.24.07 1.6.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.81.32-1.71.07-1.24.07-1.6.07-4.74s0-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.71a2.85 2.85 0 00-.69-1.06 2.85 2.85 0 00-1.06-.69c-.33-.13-.81-.28-1.71-.32C15.5 4 15.14 4 12 4zm0 3.06A4.94 4.94 0 1112 17a4.94 4.94 0 010-9.88zm0 1.8a3.14 3.14 0 100 6.28 3.14 3.14 0 000-6.28zm6.3-.62a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z" },
  { label: "Facebook", path: "M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0022 12z" },
];

const nav = {
  Platform: ["Real-time visibility", "Out-of-stock alerts", "Price checks", "Compliance"],
  Services: ["Order Automation", "Merchandising App", "Add-ons", "Integrations"],
  Company: ["About", "Pricing", "Contact", "Careers"],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-2/60">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-mute">
              Unlock FMCG growth with real-time insights and automation that
              streamlines distribution, boosts sales, reveals shelf gaps and
              exposes hidden revenue opportunities.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-ink-mute transition-colors hover:border-[rgb(var(--accent-rgb)/40%)] hover:text-[var(--color-lime)]"
                  aria-label={s.label}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(nav).map(([heading, items]) => (
            <div key={heading}>
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-faint">
                {heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {items.map((it) => (
                  <li key={it}>
                    <a
                      href="#"
                      className="text-sm text-ink-soft transition-colors hover:text-[var(--color-lime)]"
                    >
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="hairline my-10" />
        <div className="grid gap-6 sm:grid-cols-3">
          <ContactItem icon={<MapPin className="h-4 w-4" />} label="Operating in" value="New Zealand & Australia" />
          <ContactItem
            icon={<Phone className="h-4 w-4" />}
            label="Call us"
            value="+61 479 256 105"
            href="tel:+61479256105"
          />
          <ContactItem
            icon={<Mail className="h-4 w-4" />}
            label="Email"
            value="info@smartshelf.co.nz"
            href="mailto:info@smartshelf.co.nz"
          />
        </div>

        <div className="hairline my-10" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-ink-faint">
            © {new Date().getFullYear()} WebAppConsulting · All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-ink-mute transition-colors hover:text-ink">
              Privacy
            </a>
            <a href="#" className="text-xs text-ink-mute transition-colors hover:text-ink">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[rgb(var(--accent-rgb)/10%)] text-[var(--color-lime)]">
        {icon}
      </span>
      <div>
        <p className="font-mono text-[0.65rem] uppercase tracking-wider text-ink-faint">{label}</p>
        <p className="text-sm font-medium text-ink">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="transition-opacity hover:opacity-80">
      {inner}
    </a>
  ) : (
    inner
  );
}
