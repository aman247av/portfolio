import CursorGlow from './components/CursorGlow';
import ParticleField from './components/ParticleField';
import SectionDivider from './components/SectionDivider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-dark-900 overflow-x-hidden">
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Animated particle background */}
      <ParticleField />

      {/* Persistent background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-cyber-500/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-neon-500/5 to-transparent" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
