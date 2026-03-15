/**
 * ============================================
 * Navbar Component
 * ============================================
 * 
 * Fixed navbar with:
 *   - Glassmorphism background
 *   - Auto-hide on scroll down, show on scroll up
 *   - Dark/light theme toggle
 *   - Smooth scroll navigation
 *   - Mobile hamburger menu
 *   - Active section highlighting
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import useScrollDirection from '../hooks/useScrollDirection';
import { NAV_LINKS } from '../utils/constants';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const scrollDirection = useScrollDirection();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isScrolled, setIsScrolled] = useState(false);

    // Track which section is currently in view
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Find the current section in viewport
            const sections = NAV_LINKS.map((link) => link.href.replace('#', ''));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Smooth scroll to section
    const scrollToSection = (href) => {
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: scrollDirection === 'down' && isScrolled ? -100 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'glass-strong shadow-lg shadow-black/5'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#hero');
                        }}
                        className="text-xl font-bold gradient-text cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {'<PD />'}
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <motion.button
                                key={link.href}
                                onClick={() => scrollToSection(link.href)}
                                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer ${activeSection === link.href.replace('#', '')
                                        ? theme === 'dark'
                                            ? 'text-white'
                                            : 'text-gray-900'
                                        : theme === 'dark'
                                            ? 'text-gray-400 hover:text-white'
                                            : 'text-gray-500 hover:text-gray-900'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.label}
                                {/* Active indicator dot */}
                                {activeSection === link.href.replace('#', '') && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}

                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            className={`ml-4 p-2 rounded-lg transition-colors cursor-pointer ${theme === 'dark'
                                    ? 'text-yellow-400 hover:bg-white/10'
                                    : 'text-gray-600 hover:bg-black/5'
                                }`}
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-3">
                        <motion.button
                            onClick={toggleTheme}
                            className={`p-2 rounded-lg cursor-pointer ${theme === 'dark' ? 'text-yellow-400' : 'text-gray-600'
                                }`}
                            whileTap={{ scale: 0.9 }}
                        >
                            {theme === 'dark' ? <HiSun size={20} /> : <HiMoon size={20} />}
                        </motion.button>
                        <motion.button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-lg cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}
                            whileTap={{ scale: 0.9 }}
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass-strong border-t border-white/5"
                    >
                        <div className="px-6 py-4 space-y-1">
                            {NAV_LINKS.map((link, i) => (
                                <motion.button
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => scrollToSection(link.href)}
                                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${activeSection === link.href.replace('#', '')
                                            ? theme === 'dark'
                                                ? 'text-white bg-white/10'
                                                : 'text-gray-900 bg-black/5'
                                            : theme === 'dark'
                                                ? 'text-gray-400 hover:text-white hover:bg-white/5'
                                                : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'
                                        }`}
                                >
                                    {link.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
