"use client";
import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const achievements = [
    { icon: Trophy, color: "#FCD34D", title: "Amazon ML Summer School", date: "July 2026", description: "Selected among top 3,000 of 1.34 lakh+ applicants (top 2.2%), advancing through a 31,821-candidate OA shortlist for an intensive ML curriculum by Amazon scientists.", link: "https://drive.google.com/file/d/19yH3AdjJ_zpxcebb8D2trGQh0rbTs_Q4/view?usp=drive_link" },
    { icon: Award, color: "#7DD3FC", title: "Runner-Up — Citi Bridge Promptathon", date: "Mar 2026", description: "Second Runner-Up in a competitive AI prompt engineering challenge organised by Citi.", link: "https://drive.google.com/file/d/1nM8FuowfD3C5yLmpCIVf8gHFtXB22kH_/view?usp=sharing" },
    { icon: Star, color: "#86EFAC", title: "Visteon Scholar", date: "Jan 2026", description: "Selected for Visteon's SCHOLAR program, gaining industry-oriented training in automotive software, infotainment systems, and EV technologies through hands-on simulations and mentorship.", link: null },
    { icon: Medal, color: "#F9A8D4", title: "Women Engineers Scholar — Talentsprint × Google", date: "2024 – 2026", description: "Selected in the top 1% (200 of 30,000+); awarded ₹1 Lakh scholarship; completed the full program and attended the Google WE Immersion Week.", link: "https://drive.google.com/file/d/1LvGCnVb6fuITZYo_JxT73T2KM_f1hPtH/view?usp=sharing" },
    { icon: Trophy, color: "#C4B5FD", title: "Top 3 — Anna University Hackathon", date: "Nov 2024", description: "Led the team in developing a fake financial news detector using FinBERT.", link: null },
];

export default function Achievements() {
    return (
        <section id="achievements" className="mx-8 my-16">
            <SectionHeading title="Achievements" />

            <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((a, i) => (
                    <motion.div
                        key={a.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.35, delay: i * 0.05 }}
                        className="border border-terminal-dim/30 rounded-lg p-5 hover:border-terminal-accent/50 transition-colors"
                    >
                        <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${a.color}22` }}>
                                <a.icon size={20} style={{ color: a.color }} />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="font-bold leading-tight">{a.title}</h3>
                                    {a.link && (
                                        <a href={a.link} target="_blank" rel="noopener noreferrer" className="text-terminal-dim hover:text-terminal-accent transition-colors shrink-0">
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                                <p className="text-terminal-accent text-xs mb-2">{a.date}</p>
                                <p className="text-sm text-terminal-dim">{a.description}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}