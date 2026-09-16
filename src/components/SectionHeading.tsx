"use client";
import { motion } from "framer-motion";

export default function SectionHeading({ title }: { title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mb-8"
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <div className="h-px w-24 bg-gradient-to-r from-terminal-accent to-transparent shadow-[0_0_8px_theme(colors.terminal-accent)]" />
    </motion.div>
  );
}