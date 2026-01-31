import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExceptionalWork from "@/components/ExceptionalWork";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import GlobalMobility from "@/components/GlobalMobility";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ExceptionalWork />
      <Experience />
      <Projects />
      <Skills />
      <GlobalMobility />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
