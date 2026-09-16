"use client";
import { useEffect, useState } from "react";
import { SiLeetcode } from "react-icons/si";

type Stats = { totalSolved: number; easySolved: number; mediumSolved: number; hardSolved: number; ranking: number };

export default function LeetCodeStats() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch("https://leetcode-stats-api.herokuapp.com/lithikhab")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(() => setStats(null));
  }, []);

  if (!stats) return null;

  const rows = [
    { label: "Easy", value: stats.easySolved, color: "#86EFAC" },
    { label: "Medium", value: stats.mediumSolved, color: "#FCD34D" },
    { label: "Hard", value: stats.hardSolved, color: "#F87171" },
  ];

  return (
    <a
      href="https://leetcode.com/u/lithikhab/"
      target="_blank"
      rel="noopener noreferrer"
      className="block border border-terminal-dim/30 rounded-lg p-6 hover:border-terminal-accent/50 transition-colors w-full max-w-xs"
    >
      <div className="flex items-center gap-2 mb-4">
        <SiLeetcode size={20} className="text-terminal-accent" />
        <span className="font-bold">LeetCode</span>
      </div>

      <div className="text-3xl font-bold mb-1">{stats.totalSolved}</div>
      <p className="text-terminal-dim text-xs mb-4">problems solved</p>

      <div className="space-y-2 mb-4">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between text-sm">
            <span style={{ color: r.color }}>{r.label}</span>
            <span className="text-terminal-dim">{r.value}</span>
          </div>
        ))}
      </div>

      <p className="text-xs text-terminal-dim pt-3 border-t border-terminal-dim/20">
        Rank #{stats.ranking?.toLocaleString()}
      </p>
    </a>
  );
}