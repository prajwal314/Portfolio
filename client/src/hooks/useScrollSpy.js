import { useEffect, useState } from 'react';

/**
 * useScrollSpy — same observer setup as reference2 PortfolioHome:
 * marks a section active while it crosses the middle band of the viewport.
 */
export const useScrollSpy = (ids) => {
  const [activeSection, setActiveSection] = useState(ids[0] || null);

  useEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0,
    });

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids]);

  return [activeSection, setActiveSection];
};

/**
 * scrollToSection — same 120px offset smooth scroll as reference2.
 */
export const scrollToSection = (id, onDone) => {
  const element = document.getElementById(id);
  if (element) {
    const offset = 120;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    if (onDone) onDone(id);
  }
};
