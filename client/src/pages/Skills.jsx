/**
 * ============================================
 * Skills Section
 * ============================================
 * 
 * Categorized skill cards with progress bars.
 * Uses direct animation props instead of variants.
 */

import { motion } from 'framer-motion';
import {
    HiCode,
    HiDatabase,
    HiChip,
    HiCloud,
    HiCube,
} from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { SKILLS } from '../utils/constants';
import SectionHeading from '../components/SectionHeading';

// Map skill categories to icons and accent colors
const categoryMeta = {
    programming: {
        icon: HiCode,
        gradient: 'from-violet-500 to-purple-600',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/20',
        text: 'text-violet-400',
        bar: 'from-violet-500 to-purple-500',
    },
    mern: {
        icon: HiCube,
        gradient: 'from-blue-500 to-cyan-500',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        text: 'text-blue-400',
        bar: 'from-blue-500 to-cyan-400',
    },
    databases: {
        icon: HiDatabase,
        gradient: 'from-emerald-500 to-teal-500',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        text: 'text-emerald-400',
        bar: 'from-emerald-500 to-teal-400',
    },
    aiml: {
        icon: HiChip,
        gradient: 'from-orange-500 to-amber-500',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/20',
        text: 'text-orange-400',
        bar: 'from-orange-500 to-amber-400',
    },
    devops: {
        icon: HiCloud,
        gradient: 'from-pink-500 to-rose-500',
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/20',
        text: 'text-pink-400',
        bar: 'from-pink-500 to-rose-400',
    },
};

const getLevelLabel = (level) => {
    if (level >= 80) return 'Advanced';
    if (level >= 50) return 'Intermediate';
    return 'Beginner';
};

const Skills = () => {
    const { theme } = useTheme();

    return (
        <section id="skills" className="relative py-24 lg:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <SectionHeading
                    title="Skills & Technologies"
                    subtitle="What I work with — organized by domain with proficiency levels."
                />

                {/* Skills grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(SKILLS).map(([key, category], index) => {
                        const meta = categoryMeta[key];
                        const Icon = meta.icon;

                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className={`group relative rounded-2xl p-6 transition-all duration-300 ${key === 'mern' ? 'lg:col-span-2' : ''
                                    } ${theme === 'dark'
                                        ? 'bg-surface-800/50 hover:bg-surface-700/60 border border-white/5 hover:border-white/10'
                                        : 'bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
                                    }`}
                                whileHover={{ y: -4 }}
                            >
                                {/* Gradient glow on hover */}
                                <div
                                    className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${meta.gradient} blur-xl -z-10`}
                                    style={{ transform: 'scale(0.95)', filter: 'blur(20px)', opacity: 0 }}
                                />

                                {/* Category header */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div
                                        className={`p-2.5 rounded-xl ${meta.bg} border ${meta.border}`}
                                    >
                                        <Icon className={`text-lg ${meta.text}`} />
                                    </div>
                                    <div>
                                        <h3
                                            className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                                }`}
                                        >
                                            {category.title}
                                        </h3>
                                        {category.level && (
                                            <span className={`text-xs font-medium ${meta.text}`}>
                                                {category.level}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Skill items with progress bars */}
                                <div className="space-y-4">
                                    {category.items.map((skill) => (
                                        <div key={skill.name}>
                                            <div className="flex items-center justify-between mb-1.5">
                                                <span
                                                    className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                                        }`}
                                                >
                                                    {skill.name}
                                                </span>
                                                <span
                                                    className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                                                        }`}
                                                >
                                                    {getLevelLabel(skill.level)}
                                                </span>
                                            </div>

                                            {/* Progress bar */}
                                            <div
                                                className={`h-1.5 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
                                                    }`}
                                            >
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                                                    className={`h-full rounded-full bg-gradient-to-r ${meta.bar}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
