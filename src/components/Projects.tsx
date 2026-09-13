"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaGitlab } from "react-icons/fa";
import { ChevronLeft, ChevronRight, BrainCircuit, Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const CATEGORY_COLORS = { "AI/ML": "#F9A8D4", SDE: "#7DD3FC" };

const TECH_COLORS: Record<string, string> = {
  Java: "#F97316", "Spring Boot": "#86EFAC", Redis: "#F87171", Docker: "#60A5FA",
  Elixir: "#C084FC", "Phoenix LiveView": "#C084FC", PostgreSQL: "#7DD3FC", "Tailwind CSS": "#38BDF8",
  Scala: "#F87171",
  Python: "#7DD3FC", "yt-dlp": "#FCD34D", FFmpeg: "#FCD34D", Whisper: "#F9A8D4",
  rapidfuzz: "#FCD34D", "Gemini API": "#F9A8D4",
  Streamlit: "#FB7185", Pillow: "#FCD34D", OpenCV: "#60A5FA", NumPy: "#7DD3FC",
  "sentence-transformers": "#F9A8D4", Supabase: "#86EFAC", Plotly: "#C084FC",
};
const defaultColor = "#9CA3AF";

const projects = [
  {
    title: "Distributed Rate Limiter",
    subtitle: "Redis-backed, atomic request throttling",
    category: "SDE",
    date: "Sep 2026",
    points: [
      "Designed a distributed rate limiter enforcing consistent request limits across multiple app instances, using a Redis-backed atomic Lua script (INCR+EXPIRE) to eliminate race conditions under concurrent load.",
      "Implemented as Spring Boot middleware with hot-swappable config; containerized with Docker Compose, validated atomicity through concurrent load testing.",
    ],
    tech: ["Java", "Spring Boot", "Redis", "Docker"],
    github: "https://github.com/LithikhaB/distributed-rate-limiter",
    gitlab: null,
  },
  {
    title: "SBI Life Policy Recommender",
    subtitle: "Hackathon Finalist, SBI 2025",
    category: "SDE",
    date: "May 2025",
    points: [
      "Developed an AI-powered life insurance platform with an adaptive quiz engine, real-time premium calculator, and side-by-side policy comparison.",
      "Integrated a chatbot, voice interface, and guided onboarding tour; implemented secure auth and a mobile-optimised Glassmorphism UI.",
    ],
    tech: ["Elixir", "Phoenix LiveView", "PostgreSQL", "Tailwind CSS"],
    github: null,
    gitlab: "https://gitlab.com/lithikhab/sbihackathonwebsite",
  },
  {
    title: "Gitla",
    subtitle: "Git reimplemented in Scala",
    category: "SDE",
    date: "Dec 2024",
    points: [
      "Reconstructed core Git operations (init, add, commit, status) using immutable data structures and SHA-1-based object storage.",
      "Designed a TOML config parser and a custom blob/tree/commit object model.",
    ],
    tech: ["Scala"],
    github: null,
    gitlab: "https://gitlab.com/rusla/gitla",
  },
  {
    title: "PixelForge",
    subtitle: "Chainable image-filter pipeline, free & open-source",
    category: "SDE",
    date: "2026",
    points: [
      "Built a Streamlit image-filter app where multiple filters (sketch, cartoon, sepia, vintage, and more) chain into an ordered pipeline instead of applying one at a time.",
      "Added batch folder processing with one-click ZIP download and a draggable before/after comparison slider.",
    ],
    tech: ["Streamlit", "Pillow", "OpenCV", "NumPy"],
    github: "https://github.com/LithikhaB/PixelForge",
    gitlab: null,
  },
  {
    title: "Honest ATS",
    subtitle: "Semantic resume-to-JD scorer with fix recommendations",
    category: "AI/ML",
    date: "2026",
    points: [
      "Built a resume scorer using semantic similarity rather than keyword counting, flagging tech-stack mismatches between a resume and a job description.",
      "Added LLM-grounded, gap-specific fix recommendations and a dashboard tracking resume score evolution across versions.",
    ],
    tech: ["Streamlit", "sentence-transformers", "Gemini API", "Supabase", "Plotly"],
    github: "https://github.com/LithikhaB/honest-ats",
    gitlab: null,
  },
  {
    title: "Quest1 — Dialogue Frame Finder",
    subtitle: "Finds the exact video frame a line of dialogue first appears",
    category: "AI/ML",
    date: "Aug 2026",
    points: [
      "Built a pipeline that locates the frame where target dialogue appears: audio transcription with timestamps, fuzzy text matching for a candidate window, then frame-by-frame OCR verification.",
      "Included a fallback full-video OCR scan for low-confidence matches.",
    ],
    tech: ["Python", "yt-dlp", "FFmpeg", "Whisper", "rapidfuzz", "Gemini API"],
    github: "https://github.com/LithikhaB/Quest1",
    gitlab: null,
  },
];

const PAGE_SIZE = 4;
const pages = Array.from({ length: Math.ceil(projects.length / PAGE_SIZE) }, (_, i) =>
  projects.slice(i * PAGE_SIZE, i * PAGE_SIZE + PAGE_SIZE)
);

export default function Projects() {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = (dir: number) => {
    setDirection(dir);
    setPage((p) => (p + dir + pages.length) % pages.length);
  };

  return (
    <section id="projects" className="mx-8 my-16">
      <SectionHeading title="Projects" />

      <div className="flex items-center gap-2 mb-4 text-xs">
        <span className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ backgroundColor: `${CATEGORY_COLORS["AI/ML"]}22`, color: CATEGORY_COLORS["AI/ML"] }}>
          <BrainCircuit size={12} /> AI/ML
        </span>
        <span className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ backgroundColor: `${CATEGORY_COLORS.SDE}22`, color: CATEGORY_COLORS.SDE }}>
          <Code2 size={12} /> SDE
        </span>
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            initial={{ x: direction >= 0 ? 60 : -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction >= 0 ? -60 : 60, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="grid md:grid-cols-2 gap-4"
          >
            {pages[page].map((p) => (
              <div
                key={p.title}
                style={{ borderLeftColor: CATEGORY_COLORS[p.category as "AI/ML" | "SDE"] }}
                className="border border-terminal-dim/30 border-l-[3px] rounded-lg p-5 hover:border-terminal-accent/50 transition-colors flex flex-col"
              >
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h3 className="font-bold leading-tight">{p.title}</h3>
                  <span className="text-xs text-terminal-dim shrink-0">{p.date}</span>
                </div>
                <p className="text-terminal-accent text-xs mb-3">{p.subtitle}</p>

                <ul className="space-y-2 text-sm list-disc list-inside mb-4 text-terminal-text/90 flex-1">
                  {p.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => {
                    const color = TECH_COLORS[t] || defaultColor;
                    return (
                      <span key={t} className="text-xs px-2 py-1 rounded-full border" style={{ borderColor: `${color}55`, backgroundColor: `${color}15`, color }}>
                        {t}
                      </span>
                    );
                  })}
                </div>

                {(p.github || p.gitlab) && (
                  <div className="flex gap-4 pt-3 border-t border-terminal-dim/20">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-terminal-dim hover:text-terminal-accent transition-colors">
                        <FaGithub size={14} /> GitHub
                      </a>
                    )}
                    {p.gitlab && (
                      <a href={p.gitlab} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-terminal-dim hover:text-terminal-accent transition-colors">
                        <FaGitlab size={14} /> GitLab
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {pages.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <button onClick={() => go(-1)} aria-label="Previous page" className="w-9 h-9 rounded-full border border-terminal-dim/30 flex items-center justify-center hover:border-terminal-accent hover:text-terminal-accent transition-colors">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {pages.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > page ? 1 : -1); setPage(i); }}
                className={`w-2 h-2 rounded-full transition-colors ${i === page ? "bg-terminal-accent" : "bg-terminal-dim/40"}`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={() => go(1)} aria-label="Next page" className="w-9 h-9 rounded-full border border-terminal-dim/30 flex items-center justify-center hover:border-terminal-accent hover:text-terminal-accent transition-colors">
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </section>
  );
}