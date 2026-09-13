"use client";
import { useState } from "react";
import TypewriterText from "./TypewriterText";

export default function Hero() {
  const [showRole, setShowRole] = useState(false);
  const [showBio, setShowBio] = useState(false);

  return (
    <section id="about" className="mx-8 mt-8 flex flex-col md:flex-row gap-6 items-stretch">
      <div className="flex-1 border border-terminal-dim/30 rounded-lg overflow-hidden">
        <div className="px-4 py-2 border-b border-terminal-dim/30 text-terminal-dim text-sm">
          portfolio.sh
        </div>
        <div className="p-8 space-y-4">
          <div>
            <span className="text-terminal-accent">$ </span>whoami
            <div className="text-3xl md:text-5xl font-bold mt-2">
              <TypewriterText text="Lithikha B" onDone={() => setShowRole(true)} />
            </div>
          </div>

          {showRole && (
            <div>
              <span className="text-terminal-accent">$ </span>cat role.txt
              <div className="mt-1">
                {">> "}
                <TypewriterText
                  text="AI & Data Science student, builds real systems end to end"
                  onDone={() => setShowBio(true)}
                />
              </div>
            </div>
          )}

          {showBio && (
            <div>
              <span className="text-terminal-accent">$ </span>cat description.txt
              <p className="mt-1 text-terminal-dim border-l-2 border-terminal-dim/30 pl-3">
                From anomaly detection on factory floors to distributed rate limiters —
                I like problems that span ML, systems, and product.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="w-full md:w-64 relative rounded-lg overflow-hidden border border-terminal-dim/30">
        <img src="/profile.jpg" alt="Lithikha B" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-terminal-accent mix-blend-color opacity-40" />
      </div>
    </section>
  );
}