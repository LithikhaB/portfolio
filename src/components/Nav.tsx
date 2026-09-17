import ThemeToggle from "./ThemeToggle";
import { FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";

const sections = ["experience", "achievements", "projects", "skills", "contact"];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-4 border-b border-terminal-dim/20 bg-terminal-bg/90 backdrop-blur-sm">
      <span className="text-terminal-accent">./portfolio</span>

      <div className="flex items-center gap-6 text-sm">
        {sections.map((s) => (
          <a key={s} href={`#${s}`} className="hover:text-terminal-accent transition-colors">
            [{s.toUpperCase()}]
          </a>
        ))}

        <div className="flex items-center gap-4">
          <a href="https://github.com/LithikhaB" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-accent transition-colors">
            <FaGithub size={18} />
          </a>
          <a href="https://gitlab.com/lithikhab" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-accent transition-colors">
            <FaGitlab size={18} />
          </a>
          <a href="https://linkedin.com/in/lithikha" target="_blank" rel="noopener noreferrer" className="hover:text-terminal-accent transition-colors">
            <FaLinkedin size={18} />
          </a>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}