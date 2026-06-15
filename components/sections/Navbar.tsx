"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Magnetic } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";

const links = [
  { label: "Platform", href: "#visibility" },
  { label: "Pricing", href: "#pricing" },
  { label: "Add-Ons", href: "#addons" },
  { label: "Services", href: "#services" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500",
          scrolled
            ? "glass-strong shadow-[0_20px_50px_-30px_rgba(0,0,0,0.9)]"
            : "border border-transparent bg-transparent"
        )}
      >
        <a href="#top" aria-label="Stock Checker home">
          <Logo />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-ink-soft transition-colors hover:text-ink hover:bg-[var(--inset)]"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Magnetic strength={0.25}>
            <a href="#contact" className="btn-primary text-sm">
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Magnetic>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-strong absolute inset-x-4 top-20 rounded-2xl p-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-ink-soft hover:bg-[var(--inset)]"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 justify-center">
              Let&apos;s Talk
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
