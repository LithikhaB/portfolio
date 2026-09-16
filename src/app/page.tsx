import Nav from "@/components/Nav";
import Hero from "@/components/Hero"
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <Nav />
      <Hero />
      <Experience />
      <Achievements />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}