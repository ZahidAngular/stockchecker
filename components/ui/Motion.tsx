"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
  type MotionStyle,
} from "framer-motion";
import { useRef, type ReactNode, type PointerEvent } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------
   Reveal3D — depth-based entrance. Sections rise out of Z-space with
   a subtle perspective tilt as they enter the viewport.
------------------------------------------------------------------ */
export function Reveal3D({
  children,
  className,
  delay = 0,
  y = 64,
  rotate = 16,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  rotate?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <div style={{ perspective: 1100 }} className={className}>
      <motion.div
        initial={
          reduce
            ? { opacity: 0 }
            : { opacity: 0, y, rotateX: rotate, scale: 0.94, transformPerspective: 1100 }
        }
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ duration: 1, ease: EASE, delay }}
        style={{ transformOrigin: "center bottom", willChange: "transform" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Parallax — scroll-linked vertical drift. speed < 0 moves up faster
   (foreground), > 0 lags behind (background depth).
------------------------------------------------------------------ */
export function Parallax({
  children,
  speed = 40,
  className,
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yRaw = useTransform(scrollYProgress, [0, 1], [speed, -speed]);
  const y = useSpring(yRaw, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y, willChange: "transform" }}>
        {children}
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Tilt — mouse-tracking 3D tilt with spring physics. Drives motion
   values directly (no React re-render). Disabled for reduced motion.
------------------------------------------------------------------ */
export function Tilt({
  children,
  className,
  max = 8,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), {
    stiffness: 200,
    damping: 22,
  });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), {
    stiffness: 200,
    damping: 22,
  });

  const glareX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glareOpacity = useMotionValue(0);
  const glareSpring = useSpring(glareOpacity, { stiffness: 150, damping: 25 });
  const glareBg = useTransform(
    glareX,
    (x) => `radial-gradient(420px circle at ${x} 0%, rgba(199,249,77,0.5), transparent 60%)`
  );

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
    glareOpacity.set(0.12);
  }
  function onLeave() {
    px.set(0.5);
    py.set(0.5);
    glareOpacity.set(0);
  }

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={className}
      style={
        {
          rotateX: rx,
          rotateY: ry,
          transformStyle: "preserve-3d",
          transformPerspective: 1000,
          willChange: "transform",
        } as MotionStyle
      }
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{ opacity: glareSpring, background: glareBg }}
        />
      )}
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   Magnetic — element drifts toward the cursor, springs back on leave.
   Ideal for primary CTAs. Keeps interactions tactile but restrained.
------------------------------------------------------------------ */
export function Magnetic({
  children,
  className,
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  function onMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={reduce ? undefined : { x, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   FadeUp — simple, non-3D fade-up reveal for secondary elements.
   Use when Reveal's 3D rotateX would be too heavy.
------------------------------------------------------------------ */
export function FadeUp({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   ScrollScale — content gently scales + fades as it scrolls through,
   adding cinematic depth. Used sparingly on hero-class visuals.
------------------------------------------------------------------ */
export function ScrollFloat({
  children,
  className,
  range = 60,
}: {
  children: ReactNode;
  className?: string;
  range?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [range, -range]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateRaw = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const rotate = useSpring(rotateRaw, { stiffness: 90, damping: 26 });

  return (
    <div ref={ref} className={className} style={{ perspective: 1200 }}>
      <motion.div
        style={
          reduce
            ? undefined
            : { y, rotateX: rotate, transformPerspective: 1200, willChange: "transform" }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
