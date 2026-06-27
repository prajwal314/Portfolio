/**
 * App.jsx
 *
 * App shell that composes modular sections.
 */

import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
    return (
        <ThemeProvider>
            <div className="w-full min-h-screen mx-auto">
                <Navbar />

                <main className="w-full mx-auto">
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
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
