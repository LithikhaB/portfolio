"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Globe,
  Database,
  Network,
  Layers,
  Rocket,
  Webhook,
  Boxes,
  Atom,
  Binary,
} from "lucide-react";
import {
  SiPython,
  SiOpenjdk,
  SiCplusplus,
  SiC,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiDjango,
  SiSpring,
  SiPhoenixframework,
  SiStreamlit,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiRedis,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiHtml5,
  SiGithub,
  SiPandas,
  SiPytest,
  SiApachemaven,
} from "react-icons/si";
import SectionHeading from "./SectionHeading";

type Skill = { name: string; icon: React.ElementType; primary: true };

type Category = {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  skills: Skill[];
};

const SKILL_COLORS: Record<string, string> = {
  Python: "#4B8BBE", Java: "#F89820", JavaScript: "#F7DF1E", TypeScript: "#3178C6",
  SQL: "#4479A1", "C++": "#659AD2", C: "#A8B9CC", "HTML/CSS": "#E34F26",
  PyTorch: "#EE4C2C", TensorFlow: "#FF8F00", "Scikit-learn": "#F7931E",
  "LaBSE / IndicBERT": "#F9A8D4", "Feature Engineering": "#F9A8D4", "Model Deployment": "#F9A8D4",
  NLP: "#F9A8D4", Pandas: "#150458", NLTK: "#86EFAC", Qiskit: "#C084FC",
  Django: "#44B78B", "Spring Boot": "#6DB33F", "REST APIs": "#86EFAC",
  Streamlit: "#FF4B4B", "Phoenix/LiveView": "#FD4F00", "Tailwind CSS": "#38BDF8",
  Git: "#F05032", Redis: "#DC382D", PostgreSQL: "#4169E1",
  "MVC Architecture": "#FCD34D", Docker: "#2496ED", GitHub: "#E5E5E5",
  Maven: "#C71A36", Pytest: "#0A9EDC",
};

const categories: Category[] = [
  {
    id: "languages",
    label: "Languages",
    icon: Code2,
    color: "#7DD3FC",
    skills: [
      { name: "Python", icon: SiPython, primary: true },
      { name: "Java", icon: SiOpenjdk, primary: true },
      { name: "JavaScript", icon: SiJavascript, primary: true },
      { name: "TypeScript", icon: SiTypescript, primary: true },
      { name: "SQL", icon: SiMysql, primary: true },
      { name: "C++", icon: SiCplusplus, primary: true },
      { name: "C", icon: SiC, primary: true },
      { name: "HTML/CSS", icon: SiHtml5, primary: true },
    ],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    icon: BrainCircuit,
    color: "#F9A8D4",
    skills: [
      { name: "PyTorch", icon: SiPytorch, primary: true },
      { name: "TensorFlow", icon: SiTensorflow, primary: true },
      { name: "NLP", icon: BrainCircuit, primary: true },
      { name: "Scikit-learn", icon: SiScikitlearn, primary: true },
      { name: "Pandas", icon: SiPandas, primary: true },
      { name: "NLTK", icon: Binary, primary: true },
      { name: "Qiskit", icon: Atom, primary: true },
      { name: "LaBSE / IndicBERT", icon: Network, primary: true },
      { name: "Feature Engineering", icon: Layers, primary: true },
      { name: "Model Deployment", icon: Rocket, primary: true },
    ],
  },
  {
    id: "web-dev",
    label: "Web Dev",
    icon: Globe,
    color: "#86EFAC",
    skills: [
      { name: "Django", icon: SiDjango, primary: true },
      { name: "Spring Boot", icon: SiSpring, primary: true },
      { name: "REST APIs", icon: Webhook, primary: true },
      { name: "Streamlit", icon: SiStreamlit, primary: true },
      { name: "Phoenix/LiveView", icon: SiPhoenixframework, primary: true },
      { name: "Tailwind CSS", icon: SiTailwindcss, primary: true },
    ],
  },
  {
    id: "tools-db",
    label: "Tools & DB",
    icon: Database,
    color: "#FCD34D",
    skills: [
      { name: "Git", icon: SiGit, primary: true },
      { name: "GitHub", icon: SiGithub, primary: true },
      { name: "Redis", icon: SiRedis, primary: true },
      { name: "PostgreSQL", icon: SiPostgresql, primary: true },
      { name: "Docker", icon: SiDocker, primary: true },
      { name: "Maven", icon: SiApachemaven, primary: true },
      { name: "Pytest", icon: SiPytest, primary: true },
      { name: "MVC Architecture", icon: Boxes, primary: true },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(categories[0].id);
  const activeCat = categories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="mx-8 my-16">
      <SectionHeading title="Skills" />

      <div className="grid md:grid-cols-[240px_1fr] gap-4">
        <div className="border border-terminal-dim/30 rounded-lg p-2 space-y-1 h-fit">
          {categories.map((cat) => {
            const isActive = cat.id === active;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${isActive ? "bg-terminal-accent/15" : "hover:bg-terminal-dim/10"
                  }`}
                style={{ color: isActive ? cat.color : undefined }}
              >
                <cat.icon size={16} />
                {cat.label}
                {isActive && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full" style={{ backgroundColor: cat.color }} />
                )}
              </button>
            );
          })}
        </div>

        <div className="border border-terminal-dim/30 rounded-lg overflow-hidden">
          <div className="px-4 py-2 border-b border-terminal-dim/30 flex items-center justify-between text-sm">
            <span className="text-terminal-dim tracking-wide">
              MODULE: {activeCat.label.toUpperCase()}
            </span>
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
                {activeCat.skills.map((skill) => {
                  const color = SKILL_COLORS[skill.name] || activeCat.color;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 px-4 py-3 rounded-md border border-l-4 bg-terminal-dim/5 transition-colors"
                      style={{ borderColor: `${color}40`, borderLeftColor: color }}
                    >
                      <skill.icon size={18} style={{ color }} />
                      <span className="text-sm font-semibold">{skill.name}</span>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}