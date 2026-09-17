import { CheckCircle2, Sparkles } from "lucide-react";

export default function GetInTouch() {
  return (
    <div className="border border-terminal-dim/30 rounded-lg p-6 w-full max-w-xs space-y-5">
      <div>
        <h3 className="font-bold mb-1">Get in touch</h3>
        <p className="text-sm text-terminal-dim">
          Always happy to talk about ML, systems, or the next interesting problem.
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
        </span>
        <span className="text-terminal-dim">Currently open to work</span>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-terminal-dim">
          <CheckCircle2 size={14} className="text-terminal-accent shrink-0" />
          Fast to respond, faster to overthink the reply
        </div>
        <div className="flex items-center gap-2 text-sm text-terminal-dim">
          <CheckCircle2 size={14} className="text-terminal-accent shrink-0" />
          Learns loudly — will ask a lot of questions
        </div>
      </div>

      <div className="pt-4 border-t border-terminal-dim/20 flex items-start gap-2">
        <Sparkles size={14} className="text-terminal-accent shrink-0 mt-0.5" />
        <p className="text-xs text-terminal-dim italic">
          "It works on my machine" — famous last words before every deploy.
        </p>
      </div>
    </div>
  );
}