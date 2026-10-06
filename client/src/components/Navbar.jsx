/**
 * Navbar — sleek format: sticky blurred bar, logo left, links center, theme toggle right.
 * Single-page anchor navigation (no blog link).
 */
import { useState } from 'react';
import { HiSun, HiMoon, HiMenuAlt3, HiX } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { NAV_LINKS } from '../utils/constants';
import Container from './Container';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dark = theme === 'dark';

  const scrollTo = (href) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <Container className="sticky top-0 z-20 rounded-md py-4 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-4">
          <div className="hidden sm:flex items-center justify-center gap-4">
            {NAV_LINKS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4 cursor-pointer text-sm"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-lg cursor-pointer ${dark ? 'text-white hover:bg-white/10' : 'text-gray-600 hover:bg-black/5'}`}
          >
            {dark ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Menu"
            className="sm:hidden p-2 rounded-lg cursor-pointer"
          >
            {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden pt-3 pb-1 flex flex-col gap-1">
          {NAV_LINKS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className={`text-left px-3 py-2 rounded-lg text-sm cursor-pointer ${
                dark ? 'hover:bg-white/10' : 'hover:bg-black/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </Container>
  );
};

export default Navbar;
