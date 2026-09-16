"use client";
import { useState, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import TypewriterText from "./TypewriterText";
import CommandTerminal from "./CommandTerminal";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const detailVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Hero() {
  const [showDetails, setShowDetails] = useState(false);
  const hasTyped = useRef(false);

  const handleTypingDone = () => {
    if (hasTyped.current) return;
    hasTyped.current = true;
    setShowDetails(true);
  };

  return (
    <motion.section
      id="about"
      className="mx-4 sm:mx-8 mt-8 grid md:grid-cols-[1fr_260px] gap-6 items-start"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        variants={cardVariants}
        className="border border-terminal-dim/30 rounded-lg overflow-hidden"
      >
        <div className="px-4 py-2 border-b border-terminal-dim/30 text-terminal-dim text-sm">
          portfolio.sh
        </div>
        <div className="p-6 sm:p-8 space-y-4">
          <div>
            <span className="text-terminal-accent">$ </span>whoami
            <div className="glow-text text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-terminal-accent">
              <TypewriterText text="Lithikha B" onDone={handleTypingDone} />
            </div>
          </div>

          {/* Always mounted so the box height is reserved from first paint — no layout push */}
          <motion.div
            initial="hidden"
            animate={showDetails ? "visible" : "hidden"}
            variants={detailVariants}
          >
            <span className="text-terminal-accent">$ </span>cat role.txt
            <p className="mt-1 text-terminal-dim border-l-2 border-terminal-dim/30 pl-3">
              A budding <span className="text-terminal-accent">SWE / AI-ML</span> engineer who
              likes shipping real things
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={showDetails ? "visible" : "hidden"}
            variants={detailVariants}
          >
            <span className="text-terminal-accent">$ </span>cat description.txt
            <p className="mt-1 text-terminal-dim border-l-2 border-terminal-dim/30 pl-3">
              Making AI do useful things. Making bugs do character development. <br />
              AI, data, and software engineering student building practical systems for
              real-world problems. Currently collecting bugs, projects, and questionable
              amounts of{" "}
              <span className="text-amber-500 font-semibold">coffee</span>.
            </p>
          </motion.div>
        </div>

        <CommandTerminal />
      </motion.div>

      <motion.div
        variants={cardVariants}
        className="relative w-full aspect-[3/4] md:aspect-square rounded-lg overflow-hidden border border-terminal-dim/30"
      >
        <img
          src="/profile.jpg"
          alt="Lithikha B"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-terminal-accent mix-blend-color opacity-40" />
      </motion.div>
    </motion.section>
  );
}