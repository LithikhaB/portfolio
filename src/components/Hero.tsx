"use client";
import { useState, useEffect } from "react";
import TypewriterText from "./TypewriterText";
import CommandTerminal from "./CommandTerminal";

export default function Hero() {
  const [showRole, setShowRole] = useState(false);
  const [showBio, setShowBio] = useState(false);

  useEffect(() => {
    if (showRole) {
      const timer = setTimeout(() => setShowBio(true), 500); // delay to mimic role.txt "finishing"
      return () => clearTimeout(timer);
    }
  }, [showRole]);

  return (
    <section id="about" className="mx-4 sm:mx-8 mt-8 grid md:grid-cols-[1fr_260px] gap-6 items-start">
      <div className="border border-terminal-dim/30 rounded-lg overflow-hidden">
        <div className="px-4 py-2 border-b border-terminal-dim/30 text-terminal-dim text-sm">
          portfolio.sh
        </div>
        <div className="p-6 sm:p-8 space-y-4">
          <div>
            <span className="text-terminal-accent">$ </span>whoami
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-terminal-accent drop-shadow-[0_0_14px_theme(colors.terminal-accent)]">
              <TypewriterText text="Lithikha B" onDone={() => setShowRole(true)} />
            </div>
          </div>

          {showRole && (
            <div>
              <span className="text-terminal-accent">$ </span>cat role.txt
              <p className="mt-1 text-terminal-dim border-l-2 border-terminal-dim/30 pl-3">
                A budding{" "}
                <span className="text-terminal-accent">SWE / AI-ML</span> engineer who
                likes shipping real things
              </p>
            </div>
          )}

          {showBio && (
            <div>
              <span className="text-terminal-accent">$ </span>cat description.txt
              <p className="mt-1 text-terminal-dim border-l-2 border-terminal-dim/30 pl-3">
                I enjoy turning messy, real-world problems into systems that actually work —
                whether that's catching machine failures early on a factory floor, teaching
                models to bridge two languages, or making sure code holds up under real load.
              </p>
            </div>
          )}
        </div>

        <CommandTerminal />
      </div>

      <div className="relative w-full aspect-[3/4] md:aspect-square rounded-lg overflow-hidden border border-terminal-dim/30">
        <img src="/profile.jpg" alt="Lithikha B" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-terminal-accent mix-blend-color opacity-40" />
      </div>
    </section>
  );
}