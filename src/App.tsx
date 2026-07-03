import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import About from "./components/About";
import Philosophy from "./components/Philosophy";
import Cost from "./components/Cost";
import Projects from "./components/Projects";
import Shield from "./components/Shield";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useScrollReveal } from "./hooks/useScrollReveal";

export default function App() {
  // Single scroll-reveal observer for every .reveal / .slab-line element.
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        {/* TÉRREO */}
        <Hero />
        <StatsBar />
        {/* PAV 01 · claro */}
        <About />
        {/* PAV 02 · dark */}
        <Philosophy />
        {/* PAV 03 · claro */}
        <Cost />
        {/* PAV 04 · dark (darker) */}
        <Projects />
        {/* PAV 05 · claro */}
        <Shield />
        {/* PAV 06 · dark */}
        <Testimonials />
        {/* COBERTURA · dark profundo */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
