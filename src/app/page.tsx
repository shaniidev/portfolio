import Hero from "@/components/sections/Hero";
import Ticker from "@/components/sections/Ticker";
import About from "@/components/sections/About";
import Findings from "@/components/sections/Findings";
import Arsenal from "@/components/sections/Arsenal";
import Credentials from "@/components/sections/Credentials";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      {/* Findings sit above skills and projects: for a bug bounty hunter the
          track record is the proof, everything after it is supporting detail. */}
      <Findings />
      <Arsenal />
      <Credentials />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}
