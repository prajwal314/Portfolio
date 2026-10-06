/**
 * SectionIndex — right-side "INDEX" rail matching the reference screenshots:
 *
 *   INDEX
 *   — About      <- active: bright + bold, short dash marker in the gutter
 *   Contact      <- inactive: dim gray
 *   Projects
 *   ...
 *
 * Active item follows scroll (via useScrollSpy in App.jsx); clicking an
 * item smooth-scrolls to its section. Hidden below xl screens.
 * Theme via useTheme() to match this codebase. Font inherits Geist Mono.
 */
import { useTheme } from '../context/ThemeContext';

const SectionIndex = ({ sections, activeId, onSectionClick }) => {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  return (
    <nav
      aria-label="Section index"
      className="fixed left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
    >
      <p
        className={`text-[10px] font-medium tracking-[0.25em] mb-3 ${
          dark ? 'text-gray-500' : 'text-gray-400'
        }`}
      >
        INDEX
      </p>
      <ul className="flex flex-col gap-2.5">
        {sections.map((section) => {
          const isActive = activeId === section.id;
          return (
            <li key={section.id}>
              <button
                onClick={() => onSectionClick(section.id)}
                aria-current={isActive ? 'true' : undefined}
                className="group flex items-center gap-2 cursor-pointer"
              >
                <span
                  className={`block h-[2px] w-4 transition-all duration-300 ${
                    isActive
                      ? dark
                        ? 'bg-white opacity-100'
                        : 'bg-black opacity-100'
                      : 'bg-transparent opacity-0'
                  }`}
                />
                <span
                  className={`text-[13px] font-semibold origin-left transition-all duration-300 group-hover:scale-125 ${
                    isActive
                      ? dark
                        ? 'text-white'
                        : 'text-black'
                      : dark
                        ? 'text-gray-500 group-hover:text-gray-300'
                        : 'text-gray-400 group-hover:text-gray-600'
                  }`}
                >
                  {section.title}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SectionIndex;
