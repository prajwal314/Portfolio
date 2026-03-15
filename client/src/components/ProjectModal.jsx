/**
 * ============================================
 * Project Modal Component
 * ============================================
 * 
 * Full-screen overlay showing detailed project info.
 * Includes:
 *   - Project image
 *   - Full description
 *   - Tech stack badges
 *   - GitHub and Live Demo links
 *   - Click-outside or ESC to close
 */

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const ProjectModal = ({ project, isOpen, onClose }) => {
    const { theme } = useTheme();

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl ${theme === 'dark'
                            ? 'bg-surface-800 border border-white/10'
                            : 'bg-white border border-gray-200'
                            } shadow-2xl`}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors cursor-pointer ${theme === 'dark'
                                ? 'bg-white/10 hover:bg-white/20 text-white'
                                : 'bg-black/5 hover:bg-black/10 text-gray-700'
                                }`}
                        >
                            <HiX size={20} />
                        </button>

                        {/* Project Image */}
                        {project.image && (
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface-800/80 to-transparent" />
                            </div>
                        )}

                        {/* Content */}
                        <div className="p-8">
                            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>
                                {project.title}
                            </h3>

                            <p className={`text-base leading-relaxed mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="mb-6">
                                <h4 className={`text-sm font-semibold uppercase tracking-wider mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                    }`}>
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack?.map((tech, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1 rounded-full text-xs font-medium ${theme === 'dark'
                                                ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                                                : 'bg-primary-500/10 text-primary-600 border border-primary-500/20'
                                                }`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4">
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-sm font-medium transition-colors"
                                    >
                                        <FaGithub size={16} />
                                        View Code
                                    </a>
                                )}
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                                    >
                                        <HiExternalLink size={16} />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
