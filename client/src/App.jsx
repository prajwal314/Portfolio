/**
 * App.jsx — sleek-portfolio homepage order, no blog:
 * Hero / Experience / Projects / About / CTA / Resume / Setup / Journey / Contact
 * Plus reference2 right-side scroll-spy section index (Work/Projects/About/Resume/Contact).
 */

import { useMemo } from 'react';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import { useScrollSpy, scrollToSection } from './hooks/useScrollSpy';
import Navbar from './components/Navbar';
import SectionIndex from './components/SectionIndex';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import About from './pages/About';
import CTA from './pages/CTA';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { Setup, Journey } from './pages/SetupJourney';

const INDEX_SECTIONS = [
  { id: 'work', title: 'Work' },
  { id: 'projects', title: 'Projects' },
  { id: 'about', title: 'About' },
  { id: 'resume', title: 'Resume' },
  { id: 'contact', title: 'Contact' },
];

function Site() {
    const indexIds = useMemo(() => INDEX_SECTIONS.map((s) => s.id), []);
    const [activeSection, setActiveSection] = useScrollSpy(indexIds);

    const handleIndexClick = (id) => scrollToSection(id, setActiveSection);

    return (
        <div className="w-full min-h-screen mx-auto">
            <Navbar />
            <SectionIndex
                sections={INDEX_SECTIONS}
                activeId={activeSection}
                onSectionClick={handleIndexClick}
            />

            <main className="w-full mx-auto min-h-screen py-16">
                <Hero />
                <Experience />
                <Projects />
                    <About />
                    <CTA />
                <Resume />
                <Setup />
                <Journey />
                <Contact />
            </main>

            <Footer />

            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 3500,
                    style: {
                        background: '#111827',
                        color: '#f3f4f6',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                    },
                }}
            />
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <Site />
        </ThemeProvider>
    );
}

export default App;
