/**
 * ProjectCard — sleek 2-col card ported from sleek-portfolio.
 * Works with backend shape: { title, description, techStack, githubLink, liveLink, image }
 */
import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import ProjectModal from './ProjectModal';

const ProjectCard = ({ project }) => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const dark = theme === 'dark';
  const techs = project.techStack || project.technologies || [];

  return (
    <>
      <div
        className={`group h-full w-full overflow-hidden rounded-xl border p-0 shadow-none transition-all ${
          dark ? 'border-white/10 bg-white/[0.03]' : 'border-gray-200 bg-white'
        }`}
      >
        {project.image && (
          <div className="relative aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        )}
        <div className="space-y-4 px-6 py-5">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => setOpen(true)}
              className={`text-xl leading-tight font-semibold hover:cursor-pointer text-left ${
                dark ? 'text-white' : 'text-gray-900'
              }`}
            >
              {project.title}
            </button>
            <div className="flex items-center gap-2">
              {(project.liveLink || project.live) && (
                <a
                  href={project.liveLink || project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live demo"
                  className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                >
                  <HiExternalLink size={18} />
                </a>
              )}
              {(project.githubLink || project.github) && (
                <a
                  href={project.githubLink || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                >
                  <FaGithub size={18} />
                </a>
              )}
            </div>
          </div>

          <p className="text-secondary line-clamp-3 text-sm">{project.description}</p>

          {techs.length > 0 && (
            <div>
              <h4 className="text-secondary mb-2 text-sm font-medium">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {techs.slice(0, 8).map((t, i) => (
                  <span
                    key={i}
                    className={`rounded-md border px-2 py-1 text-xs font-medium ${
                      dark
                        ? 'border-white/10 bg-white/5 text-gray-300'
                        : 'border-gray-200 bg-gray-100 text-gray-600'
                    }`}
                  >
                    {typeof t === 'string' ? t : t.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-1">
            <span
              className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs ${
                project.featured || project.isWorking === false
                  ? 'border-red-300 bg-red-500/10'
                  : 'border-green-300 bg-green-500/10'
              }`}
            >
              <span
                className={`size-2 animate-pulse rounded-full ${
                  project.featured || project.isWorking === false ? 'bg-red-500' : 'bg-green-500'
                }`}
              />
              {project.featured ? 'Featured' : 'All Systems Operational'}
            </span>
            <button
              onClick={() => setOpen(true)}
              className="text-secondary hover:text-primary text-sm underline-offset-4 transition-colors hover:underline cursor-pointer"
            >
              View Details →
            </button>
          </div>
        </div>
      </div>
      <ProjectModal project={project} isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default ProjectCard;
