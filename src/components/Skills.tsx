"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, BrainCircuit, Globe, Database, Cpu } from "lucide-react";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    id: "languages",
    label: "Languages",
    icon: Code2,
    color: "#7DD3FC",
    skills: ["Python", "Java", "C", "C++", "JavaScript", "SQL"],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    icon: BrainCircuit,
    color: "#F9A8D4",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Whisper", "Gemini API", "Model Deployment"],
  },
  {
    id: "web-dev",
    label: "Web Dev",
    icon: Globe,
    color: "#86EFAC",
    skills: ["HTML/CSS", "Tailwind CSS", "Django", "Spring Boot", "Phoenix/LiveView", "Streamlit", "REST APIs"],
  },
  {
    id: "tools-db",
    label: "Tools & DB",
    icon: Database,
    color: "#FCD34D",
    skills: ["Git", "Docker", "Redis", "PostgreSQL", "MySQL", "FFmpeg", "yt-dlp"],
  },
];

export default function Skills() {
  const [active, setActive] = useState(categories[0].id);
  const activeCat = categories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="mx-8 my-16">
      <SectionHeading title="Skills" />

      <div className="grid md:grid-cols-[240px_1fr] gap-4">
        {/* Sidebar */}
        <div className="border border-terminal-dim/30 rounded-lg p-2 space-y-1 h-fit">
          {categories.map((cat) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive ? "bg-terminal-accent/15" : "hover:bg-terminal-dim/10"
                }`}
                style={{ color: isActive ? cat.color : undefined }}
              >
                <cat.icon size={16} />
                {cat.label}
                {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cat.color }} />}
              </button>
            );
          })}
        </div>

        <div className="border border-terminal-dim/30 rounded-lg overflow-hidden">
          <div className="px-4 py-2 border-b border-terminal-dim/30 flex items-center justify-between text-sm">
            <span className="text-terminal-dim tracking-wide">MODULE: {activeCat.label.toUpperCase()}</span>
          </div>

          <div className="p-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="grid sm:grid-cols-2 gap-3"
              >
                {activeCat.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between px-4 py-3 rounded-md border border-terminal-dim/20 bg-terminal-dim/5"
                  >
                    <span className="text-sm">{skill}</span>
                    <Cpu size={14} className="text-terminal-dim" />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}