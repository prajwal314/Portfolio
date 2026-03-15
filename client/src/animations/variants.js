/**
 * ============================================
 * Framer Motion Animation Variants
 * ============================================
 * 
 * Reusable animation configs for Framer Motion.
 * 
 * NOTE: We intentionally do NOT use opacity: 0 in
 * hidden states because React 19's rendering cycle
 * can prevent Framer Motion from transitioning 
 * opacity back to 1, causing invisible content.
 * Instead, we use transform-based animations only.
 */

// Fade in from bottom
export const fadeInUp = {
  hidden: {
    y: 30,
    opacity: 0.01,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade in from left
export const fadeInLeft = {
  hidden: {
    x: -30,
    opacity: 0.01,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Fade in from right
export const fadeInRight = {
  hidden: {
    x: 30,
    opacity: 0.01,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Scale up from smaller size
export const scaleIn = {
  hidden: {
    scale: 0.9,
    opacity: 0.01,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Stagger children — use on parent container
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger with slower delay
export const staggerSlow = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Page transition variants
export const pageTransition = {
  initial: {
    y: 20,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

// Navbar slide down
export const slideDown = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Progress bar fill animation
export const progressFill = (width) => ({
  hidden: { width: 0 },
  visible: {
    width: `${width}%`,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2,
    },
  },
});
