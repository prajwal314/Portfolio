/**
 * ============================================
 * Projects Section
 * ============================================
 * 
 * Dynamic project cards fetched from MongoDB.
 * Features loading skeletons and modal detail view.
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiEye, HiExternalLink } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import api from '../utils/api';
import SectionHeading from '../components/SectionHeading';
import ProjectSkeleton from '../components/ProjectSkeleton';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
    const { theme } = useTheme();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);

    // Fetch projects from backend API
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const { data } = await api.get('/projects');
                setProjects(data.data);
            } catch (err) {
                console.error('Failed to fetch projects:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="projects" className="relative py-24 lg:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <SectionHeading
                    title="Projects"
                    subtitle="Things I've built — each project is fetched dynamically from the database."
                />

                {/* Loading skeletons */}
                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(3)].map((_, i) => (
                            <ProjectSkeleton key={i} />
                        ))}
                    </div>
                )}

                {/* Empty state */}
                {!loading && projects.length === 0 && (
                    <div className="text-center py-16">
                        <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                            No projects yet. Add some via the admin API!
                        </p>
                    </div>
                )}

                {/* Project grid */}
                {!loading && projects.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className={`group relative rounded-2xl overflow-hidden transition-all duration-300 ${theme === 'dark'
                                    ? 'bg-surface-800/50 border border-white/5 hover:border-primary-500/30'
                                    : 'bg-white border border-gray-200 hover:border-primary-400/40 shadow-sm hover:shadow-lg'
                                    }`}
                                whileHover={{ y: -6 }}
                            >
                                {/* Project image / placeholder */}
                                <div className="relative h-48 overflow-hidden">
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div
                                            className={`w-full h-full flex items-center justify-center ${theme === 'dark' ? 'bg-surface-700' : 'bg-gray-100'
                                                }`}
                                        >
                                            <HiEye
                                                className={`text-4xl ${theme === 'dark' ? 'text-gray-600' : 'text-gray-300'
                                                    }`}
                                            />
                                        </div>
                                    )}

                                    {/* Gradient overlay */}
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-t ${theme === 'dark'
                                            ? 'from-surface-800/90 via-transparent'
                                            : 'from-white/80 via-transparent'
                                            } opacity-60`}
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3
                                        className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                                            }`}
                                    >
                                        {project.title}
                                    </h3>

                                    <p
                                        className={`text-sm leading-relaxed mb-4 line-clamp-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                            }`}
                                    >
                                        {project.description}
                                    </p>

                                    {/* Tech stack tags */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack?.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className={`px-2.5 py-1 rounded-lg text-xs font-medium ${theme === 'dark'
                                                    ? 'bg-white/5 text-gray-300 border border-white/5'
                                                    : 'bg-gray-100 text-gray-600 border border-gray-200'
                                                    }`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack?.length > 4 && (
                                            <span
                                                className={`px-2.5 py-1 rounded-lg text-xs font-medium ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                                                    }`}
                                            >
                                                +{project.techStack.length - 4}
                                            </span>
                                        )}
                                    </div>

                                    {/* Action links */}
                                    <div className="flex items-center gap-3">
                                        {project.githubLink && (
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${theme === 'dark'
                                                    ? 'text-gray-400 hover:text-white'
                                                    : 'text-gray-500 hover:text-gray-900'
                                                    }`}
                                            >
                                                <FaGithub size={16} />
                                                Code
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a
                                                href={project.liveLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors"
                                            >
                                                <HiExternalLink size={16} />
                                                Live
                                            </a>
                                        )}
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="ml-auto flex items-center gap-1.5 text-sm font-medium text-accent-400 hover:text-accent-300 transition-colors cursor-pointer"
                                        >
                                            <HiEye size={16} />
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* Project detail modal */}
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            </div>
        </section>
    );
};

export default Projects;
