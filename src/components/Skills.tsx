"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Globe,
  Database,
  Cloud,
  Network,
  Layers,
  Rocket,
  Webhook,
  Boxes,
} from "lucide-react";
import {
  SiPython,
  SiOpenjdk,
  SiCplusplus,
  SiC,
  SiJavascript,
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
      { name: "Streamlit", icon: SiStreamlit, primary: true},
      { name: "Phoenix/LiveView", icon: SiPhoenixframework, primary: true},
      { name: "Tailwind CSS", icon: SiTailwindcss, primary: true},
    ],
  },
  
  {
    id: "tools-db",
    label: "Tools & DB",
    icon: Database,
    color: "#FCD34D",
    skills: [
      { name: "Git", icon: SiGit, primary: true },
      { name: "Redis", icon: SiRedis, primary: true },
      { name: "PostgreSQL", icon: SiPostgresql, primary: true },
      { name: "MVC Architecture", icon: Boxes, primary: true },
      { name: "Docker", icon: SiDocker, primary: true },
      { name: "GitHub", icon: SiGithub, primary: true}
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(categories[0].id);
  const activeCat = categories.find((c) => c.id === active)!;

  const sortedSkills = [...activeCat.skills].sort(
    (a, b) => Number(b.primary) - Number(a.primary)
  );

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
                {isActive && (
                  <span
                    className="ml-auto w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: cat.color }}
                  />
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
                {sortedSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`flex items-center gap-3 px-4 py-3 rounded-md border transition-colors ${
                      skill.primary
                        ? "border-l-4 bg-terminal-dim/5"
                        : "border-terminal-dim/15 bg-terminal-dim/[0.03]"
                    }`}
                    style={
                      skill.primary
                        ? { borderColor: activeCat.color, borderLeftColor: activeCat.color }
                        : undefined
                    }
                  >
                    <skill.icon
                      size={18}
                      style={{ color: skill.primary ? activeCat.color : undefined }}
                      className={!skill.primary ? "text-terminal-dim" : ""}
                    />
                    <span
                      className={`text-sm ${
                        skill.primary ? "font-semibold" : "text-terminal-dim"
                      }`}
                    >
                      {skill.name}
                    </span>
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