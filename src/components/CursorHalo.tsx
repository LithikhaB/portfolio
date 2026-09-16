"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorHalo() {
  const [active, setActive] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // dot: tight spring, follows almost instantly
  const dotX = useSpring(x, { damping: 30, stiffness: 800, mass: 0.2 });
  const dotY = useSpring(y, { damping: 30, stiffness: 800, mass: 0.2 });

  // halo: looser spring, drags behind
  const haloX = useSpring(x, { damping: 20, stiffness: 150, mass: 0.6 });
  const haloY = useSpring(y, { damping: 20, stiffness: 150, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setActive(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!active) return null;

  return (
    <>
      {/* halo — lags behind, soft glow */}
      <motion.div
        style={{ translateX: haloX, translateY: haloY }}
        className="pointer-events-none fixed top-0 left-0 z-[9998] -ml-4 -mt-4 w-8 h-8 rounded-full bg-terminal-accent/20 blur-[2px]"
      />
      {/* dot — near-instant, solid */}
      <motion.div
        style={{ translateX: dotX, translateY: dotY }}
        className="pointer-events-none fixed top-0 left-0 z-[9999] -ml-[3px] -mt-[3px] w-1.5 h-1.5 rounded-full bg-terminal-accent shadow-[0_0_8px_theme(colors.terminal-accent)]"
      />
    </>
  );
}