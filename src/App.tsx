import { useState } from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import ResumeModal from "./components/ResumeModal";
import { resume } from "./data/resume";

function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-page)', borderTop: '1px solid var(--border-light)', padding: '2.5rem 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <a href="#" style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.05em', color: 'var(--text-heading)', textTransform: 'uppercase' }}>
          RAM NARAYAN
        </a>

        <div style={{ display: 'flex', gap: '1.75rem' }}>
          <a href={resume.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="serif-text" style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>
            LinkedIn
          </a>
          <a href={resume.personalInfo.github} target="_blank" rel="noopener noreferrer" className="serif-text" style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>
            GitHub
          </a>
          <a href={`mailto:${resume.personalInfo.email}`} className="serif-text" style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>
            Email
          </a>
        </div>

        <span className="serif-text" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          © 2026 Ram Narayan. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeOpen(false);
  };

  return (
    <>
      <Navbar onOpenResume={handleOpenResume} />
      <Hero onOpenResume={handleOpenResume} />
      <Experience />
      <Projects />
      <Contact onOpenResume={handleOpenResume} />
      <Footer />
      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </>
  );
}

export default App;

