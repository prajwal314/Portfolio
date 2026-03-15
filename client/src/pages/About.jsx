/**
 * ============================================
 * About Section
 * ============================================
 * 
 * Displays education and work experience in a
 * vertical timeline format with scroll-reveal.
 */

import { motion } from 'framer-motion';
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { EDUCATION, EXPERIENCE } from '../utils/constants';
import SectionHeading from '../components/SectionHeading';

const About = () => {
    const { theme } = useTheme();

    // Combine education and experience into a unified timeline
    const timelineItems = [
        ...EDUCATION.map((item) => ({ ...item, type: 'education' })),
        ...EXPERIENCE.map((item) => ({ ...item, type: 'experience' })),
    ];

    return (
        <section id="about" className="relative py-24 lg:py-32">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <SectionHeading
                    title="About Me"
                    subtitle="My journey in tech — education, experience, and the milestones that shaped my path."
                />

                {/* Timeline */}
                <div className="relative">
                    {/* Connecting vertical line */}
                    <div
                        className={`absolute left-6 md:left-1/2 top-0 bottom-0 w-px ${theme === 'dark'
                            ? 'bg-gradient-to-b from-primary-500/50 via-accent-500/30 to-transparent'
                            : 'bg-gradient-to-b from-primary-500/40 via-accent-500/20 to-transparent'
                            }`}
                    />

                    {timelineItems.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        const Icon = item.type === 'education' ? HiAcademicCap : HiBriefcase;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${isLeft
                                    ? 'md:flex-row md:text-right'
                                    : 'md:flex-row-reverse md:text-left'
                                    } flex-row text-left`}
                            >
                                {/* Timeline dot */}
                                <div
                                    className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 ${theme === 'dark'
                                        ? 'bg-surface-800 border-2 border-primary-500/50'
                                        : 'bg-white border-2 border-primary-500/40 shadow-md'
                                        }`}
                                >
                                    <Icon
                                        className={`text-lg ${theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                                            }`}
                                    />
                                </div>

                                {/* Content card */}
                                <div
                                    className={`ml-20 md:ml-0 flex-1 ${isLeft ? 'md:pr-16' : 'md:pl-16'
                                        } ${isLeft ? '' : 'md:ml-auto'}`}
                                    style={{ maxWidth: 'calc(50% - 2rem)' }}
                                >
                                    <div
                                        className={`p-6 rounded-2xl glass transition-all duration-300 hover:scale-[1.02] ${theme === 'dark'
                                            ? 'hover:bg-white/[0.08]'
                                            : 'hover:bg-white/80 hover:shadow-lg'
                                            }`}
                                    >
                                        {/* Type badge */}
                                        <span
                                            className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider mb-3 ${item.type === 'education'
                                                ? 'text-accent-400'
                                                : 'text-primary-400'
                                                }`}
                                        >
                                            <Icon size={14} />
                                            {item.type}
                                        </span>

                                        {/* Title */}
                                        <h3
                                            className={`text-lg font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                                }`}
                                        >
                                            {item.degree || item.role}
                                        </h3>

                                        {/* Institution / Company */}
                                        <p
                                            className={`text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                                }`}
                                        >
                                            {item.institution || item.company}
                                        </p>

                                        {/* Year / Duration */}
                                        <p
                                            className={`text-xs font-medium mb-3 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                                                }`}
                                        >
                                            {item.year || item.duration}
                                        </p>

                                        {/* Description */}
                                        <p
                                            className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                                }`}
                                        >
                                            {item.description}
                                        </p>

                                        {/* Experience highlights */}
                                        {item.highlights && (
                                            <ul className="mt-3 space-y-1.5">
                                                {item.highlights.map((highlight, i) => (
                                                    <li
                                                        key={i}
                                                        className={`flex items-start gap-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                                            }`}
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                                                        {highlight}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block flex-1" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;
