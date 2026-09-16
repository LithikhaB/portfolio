"use client";
import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";

type Line = { type: "input" | "output" | "error"; text: string };

const LINKS: Record<string, string> = {
  linkedin: "https://linkedin.com/in/lithikha",
  github: "https://github.com/LithikhaB",
  gitlab: "https://gitlab.com/lithikhab",
  leetcode: "https://leetcode.com/u/lithikhab/",
};

const SECTIONS = ["about", "experience", "projects", "achievements", "skills", "contact"];

const HELP_LINES = [
  "Navigate:  about · experience · projects · achievements · skills · contact",
  "Socials:   linkedin · github · gitlab · leetcode",
  "Theme:     dark · light",
  "Other:     clear (wipe log) · help (show this again)",
];

export default function CommandTerminal() {
  const { setTheme } = useTheme();
  const [history, setHistory] = useState<Line[]>([
    { type: "output", text: "Type 'help' to see available commands." },
  ]);
  const [input, setInput] = useState("");
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [history]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    const newLines: Line[] = [{ type: "input", text: raw }];

    if (cmd === "help") {
      HELP_LINES.forEach((l) => newLines.push({ type: "output", text: l }));
    } else if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else if (SECTIONS.includes(cmd)) {
      newLines.push({ type: "output", text: `Navigating to ${cmd}...` });
      setTimeout(() => {
        const el = document.getElementById(cmd);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else if (cmd === "dark" || cmd === "light") {
      setTheme(cmd);
      newLines.push({ type: "output", text: `Switched to ${cmd} mode.` });
    } else if (LINKS[cmd]) {
      newLines.push({ type: "output", text: `Opening ${cmd}...` });
      window.open(LINKS[cmd], "_blank", "noopener,noreferrer");
    } else {
      newLines.push({ type: "error", text: `command not found: ${cmd} (try 'help')` });
    }

    setHistory((h) => [...h, ...newLines]);
    setInput("");
  };

  return (
    <div className="border-t border-terminal-dim/30 mt-4">
      <div ref={logRef} className="p-4 max-h-40 overflow-y-auto text-sm space-y-1 scroll-smooth">
        {history.map((line, i) => (
          <div key={i} className={line.type === "error" ? "text-red-400" : line.type === "input" ? "text-terminal-text" : "text-terminal-dim"}>
            {line.type === "input" ? <span><span className="text-terminal-accent">$ </span>{line.text}</span> : line.text}
          </div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          run(input);
        }}
        className="flex items-center gap-2 px-4 py-3 border-t border-terminal-dim/20"
      >
        <span className="text-terminal-accent">$</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type a command..."
          className="flex-1 bg-transparent outline-none text-sm placeholder:text-terminal-dim/50"
          autoComplete="off"
          spellCheck={false}
        />
      </form>
    </div>
  );
}