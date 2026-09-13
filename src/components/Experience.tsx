const jobs = [
  {
    role: "Factory Support Intern",
    company: "The Timken Company",
    period: "Jun 2026 – Jul 2026",
    points: [
      "Built an unsupervised Machine Health Monitoring System to detect bearing anomalies before failure, with severity classification and real-time alerts.",
      "Developed a 7-page Streamlit Shift Intelligence System for digital shift handovers and downtime tracking, automating Excel handover reports at zero infrastructure cost.",
    ],
  },
  {
    role: "Intern",
    company: "Ministry of Electronics and IT (MeitY), Govt. of India",
    period: "Dec 2025 – Mar 2026",
    points: [
      "Built a hybrid English–Tamil word alignment pipeline combining rule-based heuristics with LaBSE and IndicBERT embeddings, reducing Alignment Error Rate from ~0.65 to ~0.35.",
      "Benchmarked TF-IDF, fastText, mBERT, and LaBSE; handled agglutinative morphology via bilingual dictionaries and transliteration matching.",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Jean Martin Systems India Pvt Ltd",
    period: "Jun 2025 – Jul 2025",
    points: [
      "Developed Django-based backend modules for internal business tools following REST API design principles.",
      "Collaborated on a data science project with Comcast, delivering analytics dashboards and visualisation modules.",
    ],
  },
  {
    role: "AI Intern",
    company: "Infosys Springboard",
    period: "Oct 2024 – Dec 2024",
    points: [
      "Built an end-to-end NLP pipeline for sentiment classification, evaluating models to optimise accuracy.",
      "Led a 5-member team in an Agile workflow, managing sprint planning and code reviews.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-8 my-16">
      <h2 className="text-2xl font-bold mb-6">
        <span className="text-terminal-accent">02.</span> Experience
      </h2>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.company} className="border border-terminal-dim/30 rounded-lg overflow-hidden">
            <div className="px-4 py-2 border-b border-terminal-dim/30 text-terminal-dim text-sm flex justify-between">
              <span>{job.role} @ {job.company}</span>
              <span>{job.period}</span>
            </div>
            <ul className="p-4 space-y-2 list-disc list-inside text-sm">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}