"use client";
import { motion } from "framer-motion";
import { FaGithub, FaFileAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const jobs = [
  {
    role: "Factory Support Intern",
    company: "The Timken Company",
    period: "Jun 2026 – Jul 2026",
    color: "#7DD3FC",
    points: [
      "Built an unsupervised Machine Health Monitoring System to detect bearing anomalies days before failure, with severity classification and real-time Email/WhatsApp/audio alerts.",
      "Developed a 7-page Streamlit Shift Intelligence System for digital shift handovers and downtime tracking, automating colour-coded Excel handover reports at zero infrastructure cost.",
    ],
    github: "https://github.com/LithikhaB/Timken-Internship",
    certificate: "https://drive.google.com/file/d/1OiJCeOGJkeemUd7upUHQ2tjIHFAuSE5z/view?usp=sharing",
  },
  {
    role: "Intern",
    company: "MeitY, Govt. of India",
    period: "Dec 2025 – Mar 2026",
    color: "#C4B5FD",
    points: [
      "Built a hybrid English–Tamil word alignment pipeline combining rule-based heuristics with LaBSE and IndicBERT embeddings, reducing Alignment Error Rate from ~0.65 to ~0.35.",
      "Benchmarked TF-IDF, fastText, mBERT, and LaBSE; handled agglutinative morphology via bilingual dictionaries and transliteration matching.",
    ],
    github: "https://github.com/LithikhaB/MeitY",
    certificate: "https://drive.google.com/file/d/10nnc_G6EevPGwsLZT6Z_OUiM1H0tivMU/view?usp=drive_link",
  },
  {
    role: "Software Development Intern",
    company: "Jean Martin Systems",
    period: "Jun 2025 – Jul 2025",
    color: "#86EFAC",
    points: [
      "Developed Django-based backend modules for internal business tools following REST API design principles.",
      "Collaborated on a data science project with Comcast, delivering analytics dashboards and visualisation modules.",
    ],
    github: null,
    certificate: null,
  },
  {
    role: "AI Intern",
    company: "Infosys Springboard",
    period: "Oct 2024 – Dec 2024",
    color: "#FCD34D",
    points: [
      "Built an end-to-end NLP pipeline for sentiment classification, evaluating models to optimise accuracy.",
      "Led a 5-member team in an Agile workflow, managing sprint planning and code reviews.",
    ],
    github: "https://github.com/LithikhaB/InfosysSpringboard-Internship",
    certificate: "https://drive.google.com/file/d/1GEGq5xE4dz5F8W_WSeddeV6dVLbhLpqi/view?usp=drive_link",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-8 my-16">
      <SectionHeading title="Experience" />

      <div className="grid md:grid-cols-2 gap-4">
        {jobs.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            style={{ borderLeftColor: job.color }}
            className="border border-terminal-dim/30 border-l-[3px] rounded-lg p-5 hover:border-l-4 transition-all"
          >
            <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
              <div>
                <h3 className="font-bold leading-tight">{job.role}</h3>
                <p className="text-terminal-dim text-sm">{job.company}</p>
              </div>
              <span className="text-xs px-2 py-1 rounded-full shrink-0" style={{ backgroundColor: `${job.color}22`, color: job.color }}>
                {job.period}
              </span>
            </div>

            <ul className="space-y-2 text-sm list-disc list-inside mb-4 text-terminal-text/90">
              {job.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            {(job.github || job.certificate) && (
              <div className="flex gap-4 pt-3 border-t border-terminal-dim/20">
                {job.github && (
                  <a href={job.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-terminal-dim hover:text-terminal-accent transition-colors">
                    <FaGithub size={14} /> GitHub
                  </a>
                )}
                {job.certificate && (
                  <a href={job.certificate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-terminal-dim hover:text-terminal-accent transition-colors">
                    <FaFileAlt size={14} /> Certificate
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}