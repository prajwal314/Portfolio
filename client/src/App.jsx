/**
 * App.jsx — sleek-portfolio homepage order, no blog:
 * Hero / Experience / Projects / About / Github / CTA / Resume / Setup / Journey / Contact
 */

import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import About from './pages/About';
import Github from './pages/Github';
import CTA from './pages/CTA';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { Setup, Journey } from './pages/SetupJourney';

function App() {
    return (
        <ThemeProvider>
            <div className="w-full min-h-screen mx-auto">
                <Navbar />

                <main className="w-full mx-auto min-h-screen py-16">
                    <Hero />
                    <Experience />
                    <Projects />
                    <About />
                    <Github />
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
        </ThemeProvider>
    );
}

export default App;
