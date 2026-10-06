/**
 * Setup + Journey — compact cards mirroring sleek-portfolio landing format.
 * No new routes: cards scroll to existing sections.
 */
import { HiCog, HiCode, HiAcademicCap, HiBadgeCheck } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { EDUCATION } from '../utils/constants';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';

export const Setup = () => {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const items = [
    {
      name: 'Stack I Use',
      description: 'MERN, Python, AI/ML tools I reach for daily.',
      icon: <HiCog size={16} />,
      target: 'about',
    },
    {
      name: 'Projects Setup',
      description: 'How I structure full-stack projects.',
      icon: <HiCode size={16} />,
      target: 'projects',
    },
  ];
  return (
    <Container className="mt-10">
      <SectionHeading subHeading="Development" heading="Setup" />
      <div className="mt-8 flex flex-col gap-4">
        {items.map((item) => (
          <button
            key={item.name}
            onClick={() => document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' })}
            className="group text-left cursor-pointer"
          >
            <span
              className={`flex flex-row items-center justify-between gap-4 px-4 py-2 rounded-xl border ${
                dark ? 'border-white/10 bg-white/[0.03]' : 'border-gray-200 bg-white'
              }`}
            >
              <span className={`flex items-center justify-center rounded-md p-2 ${dark ? 'bg-white/10' : 'bg-gray-100'}`}>
                {item.icon}
              </span>
              <span className="flex w-full flex-col">
                <span className="text-base font-semibold">{item.name}</span>
                <span className="text-sm text-secondary">{item.description}</span>
              </span>
              <span className="hidden group-hover:block">→</span>
            </span>
          </button>
        ))}
      </div>
    </Container>
  );
};

export const Journey = () => {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  return (
    <Container className="mt-10">
      <SectionHeading subHeading="My" heading="Journey" />
      <div className="mt-8 flex flex-col gap-4">
        <div
          className={`flex flex-row items-center gap-4 px-4 py-2 rounded-xl border ${
            dark ? 'border-white/10 bg-white/[0.03]' : 'border-gray-200 bg-white'
          }`}
        >
          <span className={`flex items-center justify-center rounded-md p-2 ${dark ? 'bg-white/10' : 'bg-gray-100'}`}>
            <HiAcademicCap size={16} />
          </span>
          <span className="flex w-full flex-col">
            <span className="text-base font-semibold">Education</span>
            <span className="text-sm text-secondary">
              {EDUCATION.map((e) => `${e.degree} — ${e.institution} (${e.year})`).join(' • ')}
            </span>
          </span>
        </div>
        <div
          className={`flex flex-row items-center gap-4 px-4 py-2 rounded-xl border ${
            dark ? 'border-white/10 bg-white/[0.03]' : 'border-gray-200 bg-white'
          }`}
        >
          <span className={`flex items-center justify-center rounded-md p-2 ${dark ? 'bg-white/10' : 'bg-gray-100'}`}>
            <HiBadgeCheck size={16} />
          </span>
          <span className="flex w-full flex-col">
            <span className="text-base font-semibold">Certificates & Achievements</span>
            <span className="text-sm text-secondary">
              Frontend Developer @ Sarvodaya Arogya Vikas Foundation • P&ID computer-vision research project
            </span>
          </span>
        </div>
      </div>
    </Container>
  );
};
