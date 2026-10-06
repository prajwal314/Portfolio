/**
 * Projects — sleek Featured Projects: 2-col grid, first 4, expandable.
 * Data still fetched dynamically from MongoDB API.
 */
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import api from '../utils/api';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectSkeleton from '../components/ProjectSkeleton';

const Projects = () => {
  const { theme } = useTheme();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await api.get('/projects');
        setProjects(Array.isArray(data?.data) ? data.data : []);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const visible = showAll ? projects : projects.slice(0, 4);

  return (
    <Container className="mt-20">
      <section id="projects">
        <SectionHeading subHeading="Featured" heading="Projects" />

        {loading && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-8">
            {[...Array(4)].map((_, i) => (
              <ProjectSkeleton key={i} />
            ))}
          </div>
        )}

        {!loading && projects.length === 0 && (
          <div className="text-center py-8">
            <p className="text-secondary">
              No projects yet. Add records to MongoDB and redeploy the backend.
            </p>
          </div>
        )}

        {!loading && projects.length > 0 && (
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-8">
              {visible.map((p) => (
                <ProjectCard key={p._id || p.title} project={p} />
              ))}
            </div>
            {projects.length > 4 && (
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => setShowAll((v) => !v)}
                  className={`rounded-md border px-4 py-2 text-sm cursor-pointer ${
                    theme === 'dark'
                      ? 'border-white/20 bg-white/5 hover:bg-white/10'
                      : 'border-black/20 bg-black/5 hover:bg-black/10'
                  }`}
                >
                  {showAll ? 'Show less' : 'Show all projects'}
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </Container>
  );
};

export default Projects;
