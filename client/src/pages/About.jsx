/**
 * ============================================
 * About Section
 * ============================================
 * 
 * Displays education and work experience as
 * centered stacked cards with scroll-reveal.
 */

import { motion } from 'framer-motion';
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { EDUCATION, EXPERIENCE } from '../utils/constants';
import SectionHeading from '../components/SectionHeading';

const About = () => {
    const { theme } = useTheme();

    const sections = [
        {
            type: 'education',
            title: 'Education',
            icon: HiAcademicCap,
            items: EDUCATION,
        },
        {
            type: 'experience',
            title: 'Work Experience',
            icon: HiBriefcase,
            items: EXPERIENCE,
        },
    ];

    return (
        <section id="about" className="relative py-24 lg:py-32">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                <SectionHeading
                    title="About Me"
                    subtitle="My education and experience, shown as simple stacked cards."
                />

                {/* Simple stacked cards */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {sections.map((section, sectionIndex) => {
                        const Icon = section.icon;

                        return section.items.map((item, itemIndex) => (
                            <motion.div
                                key={section.type}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.55, delay: sectionIndex * 0.12 + itemIndex * 0.05, ease: [0.22, 1, 0.36, 1] }}
                                className={`rounded-2xl p-6 md:p-8 glass border ${theme === 'dark'
                                    ? 'border-white/5 bg-surface-800/60'
                                    : 'border-gray-200 bg-white'
                                    }`}
                            >
                                <div className="flex items-center justify-between gap-4 mb-6">
                                    <span className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] ${section.type === 'education' ? 'text-accent-400' : 'text-primary-400'}`}>
                                        <Icon size={16} />
                                        {section.title}
                                    </span>

                                    <span className={`rounded-full px-4 py-1.5 text-sm font-medium ${theme === 'dark' ? 'bg-white/5 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                                        {item.year || item.duration}
                                    </span>
                                </div>

                                <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                                    {item.degree || item.role}
                                </h3>

                                <p className={`text-lg font-medium mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {item.institution || item.company}
                                </p>

                                <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {item.description}
                                </p>

                                {item.highlights && (
                                    <ul className="mt-5 space-y-3">
                                        {item.highlights.map((highlight, i) => (
                                            <li
                                                key={i}
                                                className={`flex items-start gap-3 text-sm md:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                                    }`}
                                            >
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </motion.div>
                        ));
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;
