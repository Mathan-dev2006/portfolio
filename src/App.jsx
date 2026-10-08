import { useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import ResumeCTA from './components/ResumeCTA';
import SocialProof from './components/SocialProof';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#ececee] font-sans antialiased selection:bg-sky-500/25 selection:text-sky-200">
      {/* Top Scroll Depth Progress */}
      <ScrollProgress />

      {/* Sticky Header Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <ResumeCTA onOpenResume={() => setIsResumeOpen(true)} />
        <SocialProof />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Formatted Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
