"use client";
import { useState } from "react";
import { Mail, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import GetInTouch from "./GetInTouch";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || "Portfolio contact",
          message: form.message,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "sent" : "error");
      if (data.success) setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-8 my-16">
      <SectionHeading title="Contact" />

      <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
        <div>
          <div className="mb-8">
            <a href="mailto:lithikhab@gmail.com" className="inline-flex items-center gap-2 text-terminal-dim hover:text-terminal-accent transition-colors">
              <Mail size={16} />
              lithikhab@gmail.com
            </a>
          </div>

          <form onSubmit={handleSubmit} className="max-w-2xl text-left border border-terminal-dim/30 rounded-lg p-6 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-terminal-dim uppercase tracking-wide">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="w-full mt-1 bg-transparent border border-terminal-dim/30 rounded-md px-3 py-2 focus:outline-none focus:border-terminal-accent" />
              </div>
              <div>
                <label className="text-xs text-terminal-dim uppercase tracking-wide">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full mt-1 bg-transparent border border-terminal-dim/30 rounded-md px-3 py-2 focus:outline-none focus:border-terminal-accent" />
              </div>
            </div>

            <div>
              <label className="text-xs text-terminal-dim uppercase tracking-wide">Subject</label>
              <input name="subject" value={form.subject} onChange={handleChange} className="w-full mt-1 bg-transparent border border-terminal-dim/30 rounded-md px-3 py-2 focus:outline-none focus:border-terminal-accent" />
            </div>

            <div>
              <label className="text-xs text-terminal-dim uppercase tracking-wide">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full mt-1 bg-transparent border border-terminal-dim/30 rounded-md px-3 py-2 focus:outline-none focus:border-terminal-accent resize-none" />
            </div>

            <button type="submit" disabled={status === "sending"} className="w-full flex items-center justify-center gap-2 border border-terminal-accent text-terminal-accent rounded-md py-2 hover:bg-terminal-accent hover:text-terminal-bg transition-colors disabled:opacity-50">
              {status === "sending" ? "Sending..." : "Send Message"}
              <Send size={16} />
            </button>

            {status === "sent" && <p className="text-terminal-accent text-sm text-center">Message sent — thanks!</p>}
            {status === "error" && <p className="text-red-400 text-sm text-center">Something went wrong, try again.</p>}
          </form>
        </div>

        <div className="lg:pt-14 flex justify-center lg:justify-start">
          <GetInTouch />
        </div>
      </div>
    </section>
  );
}