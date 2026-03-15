/**
 * ============================================
 * useScrollDirection Hook
 * ============================================
 * 
 * Detects scroll direction to show/hide navbar.
 * Returns 'up' or 'down' based on scroll movement.
 * 
 * Uses a threshold to avoid jittery toggling
 * on small scroll movements.
 */

import { useState, useEffect } from 'react';

const useScrollDirection = (threshold = 10) => {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Only change direction if user scrolled beyond threshold
      if (Math.abs(currentScroll - prevScroll) < threshold) return;

      const direction = currentScroll > prevScroll ? 'down' : 'up';
      setScrollDirection(direction);
      setPrevScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScroll, threshold]);

  return scrollDirection;
};

export default useScrollDirection;
