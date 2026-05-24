import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import MouseGlow from './components/MouseGlow';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Achievements from './components/sections/Achievements';
import CurrentLearning from './components/sections/CurrentLearning';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-6 px-12 max-w-5xl mx-auto">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/5" />
      <div className="w-1.5 h-1.5 mx-4 bg-[#00F5FF]/30 rounded-full" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/5" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <ParticleBackground />
      <MouseGlow />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <CurrentLearning />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

