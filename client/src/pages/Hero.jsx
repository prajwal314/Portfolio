/**
 * ============================================
 * Hero Section
 * ============================================
 * 
 * The first thing visitors see. Features:
 *   - Animated gradient orbs in background
 *   - Typing effect cycling through roles
 *   - Framer Motion entrance animations
 *   - CTA buttons for Projects and Contact
 *   - Responsive layout with clean spacing
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown, HiCode } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../utils/constants';

const Hero = () => {
    const { theme } = useTheme();
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    // Typing animation effect
    useEffect(() => {
        const currentRole = PERSONAL_INFO.roles[currentRoleIndex];
        let timeout;

        if (!isDeleting) {
            if (displayText.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2000);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, 40);
            } else {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRoleIndex]);

    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="orb orb-1" />
                <div className="orb orb-2" />
                <div className="orb orb-3" />
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 bg-grid" />

            {/* Content — uses direct animation props, not variants */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
                {/* Status badge */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-8"
                >
                    <span
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium glass ${theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                            }`}
                    >
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Available for opportunities
                    </span>
                </motion.div>

                {/* Main heading */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-display mb-6"
                >
                    <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                        Hi, I&apos;m{' '}
                    </span>
                    <span className="gradient-text">{PERSONAL_INFO.name}</span>
                </motion.h1>

                {/* Typing effect */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-8 h-12 flex items-center justify-center"
                >
                    <div className="flex items-center gap-3">
                        <HiCode
                            className={`text-xl ${theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                                }`}
                        />
                        <span
                            className={`text-xl md:text-2xl font-mono font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                }`}
                        >
                            {displayText}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                                className="inline-block w-0.5 h-6 ml-1 bg-primary-500 align-middle"
                            />
                        </span>
                    </div>
                </motion.div>

                {/* Bio */}
                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={`text-body-lg max-w-2xl mx-auto mb-12 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}
                >
                    {PERSONAL_INFO.bio}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.button
                        onClick={scrollToProjects}
                        className="group relative px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-sm overflow-hidden cursor-pointer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                        <span className="relative flex items-center gap-2">
                            View Projects
                            <HiArrowDown className="group-hover:translate-y-0.5 transition-transform" />
                        </span>
                    </motion.button>

                    <motion.button
                        onClick={scrollToContact}
                        className={`px-8 py-3.5 rounded-xl font-semibold text-sm border transition-colors cursor-pointer gradient-border ${theme === 'dark'
                            ? 'text-white hover:bg-white/5'
                            : 'text-gray-900 hover:bg-black/5'
                            } border-transparent`}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Get in Touch
                    </motion.button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className={`w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2 ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
                            }`}
                    >
                        <motion.div className="w-1 h-2 rounded-full bg-primary-500" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
