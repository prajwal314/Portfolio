/**
 * Experience — sleek Featured Experience section.
 * Shows first 2 entries, expands to all on click (single-page, no /work-experience route).
 */
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { EXPERIENCE } from '../utils/constants';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import ExperienceCard from '../components/ExperienceCard';

// Normalize existing EXPERIENCE shape to sleek card shape.
const normalize = (e, i) => ({
  company: e.company,
  position: e.role,
  location: e.location || '',
  image: '/prajwal-logo.svg',
  description: e.highlights || (e.description ? [e.description] : []),
  startDate: (e.duration || '').split(' - ')[0] || e.duration || '',
  endDate: (e.duration || '').split(' - ')[1] || '',
  website: '',
  technologies: (e.highlights || []).length
    ? []
    : [],
  isCurrent: i === 0,
});

const Experience = () => {
  const { theme } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const items = EXPERIENCE.map(normalize);
  const visible = showAll ? items : items.slice(0, 2);

  return (
    <Container className="mt-20">
      <section id="experience">
        <SectionHeading subHeading="Featured" heading="Experience" />
        <div className="mt-4 flex flex-col gap-8">
          {visible.map((exp) => (
            <ExperienceCard key={`${exp.company}-${exp.position}`} experience={exp} />
          ))}
        </div>
        {items.length > 2 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll((v) => !v)}
              className={`rounded-md border px-4 py-2 text-sm cursor-pointer ${
                theme === 'dark'
                  ? 'border-white/20 bg-white/5 hover:bg-white/10'
                  : 'border-black/20 bg-black/5 hover:bg-black/10'
              }`}
            >
              {showAll ? 'Show less' : 'Show all work experiences'}
            </button>
          </div>
        )}
      </section>
    </Container>
  );
};

export default Experience;
