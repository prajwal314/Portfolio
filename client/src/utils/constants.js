/**
 * ============================================
 * Portfolio Data Constants
 * ============================================
 * 
 * All customizable content is centralized here.
 * Change your name, bio, skills, education, etc
 * in one place — the components will reflect changes.
 */

export const PERSONAL_INFO = {
  name: 'Prajwal Diwnale',
  shortName: 'Prajwal',
  title: 'A MERN Stack developer.',
  roles: [
    'MERN Stack Developer',
    'AI/ML Enthusiast',
    'Problem Solver',
    'Artistic',
  ],
  bio: 'Passionate about building scalable web applications and exploring the intersection of AI and software engineering. Currently pursuing B.Tech Final Year in Computer Engineering at VIIT Pune.',
  aboutName: 'Prajwal Diwnale',
  aboutDescription: `I'm a MERN Stack developer and AI/ML enthusiast. I love building products to solve real-world problems — from full-stack web apps to computer-vision pipelines.`,
  avatar: '/animated_PP.png',
  email: 'diwnaleprajwal@gmail.com',
  github: 'https://github.com/prajwal314',
  linkedin: 'https://www.linkedin.com/in/prajwal-diwnale-532b0628a/',
  x: 'https://x.com/',
  resume: '#resume',
};

// Sleek-format hero: skill pills embedded in the description.
// Same idea as reference Hero.tsx template with {skills:n} placeholders.
export const HERO_SKILLS = [
  { name: 'React', href: 'https://react.dev/' },
  { name: 'Node.js', href: 'https://nodejs.org/' },
  { name: 'MongoDB', href: 'https://www.mongodb.com/' },
  { name: 'Express', href: 'https://expressjs.com/' },
  { name: 'Python', href: 'https://www.python.org/' },
];

export const HERO_SOCIALS = [
  { name: 'X', href: 'https://x.com/', key: 'x' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/prajwal-diwnale-532b0628a/', key: 'linkedin' },
  { name: 'Github', href: 'https://github.com/prajwal314', key: 'github' },
  { name: 'Email', href: 'mailto:diwnaleprajwal@gmail.com', key: 'email' },
];

// Resume — same iframe-preview pattern as the cloned website's /resume page.
// Provided Drive view link converted to embed preview URL.
export const RESUME_CONFIG = {
  url: 'https://drive.google.com/file/d/16QMl3vUxMpB29iXSb6fVnD2yND8Yrynm/preview',
  downloadUrl: 'https://drive.google.com/file/d/16QMl3vUxMpB29iXSb6fVnD2yND8Yrynm/view?usp=sharing',
};

export const EDUCATION = [
  {
    degree: 'Bachelor of Technology, Computer Engineering(Software Engineering)',
    institution: 'Vishwakarma Institute of Information Technology, Pune',
    year: '2023 – 2027',
    description: 'Focusing on full-stack development, data structures & algorithms, and machine learning.',
  },
];

export const EXPERIENCE = [
  {
    role: 'Industry Sponsored Project',
    company: 'P&ID Analysis and E&I Deliverable Generation',
    duration: 'Jan 2026 - May 2026',
    location: 'Pune, MH',
    description: 'Developed a GUI to automate extraction of Electrical & Instrumentation (E&I) deliverables from P&IDs.',
    highlights: [
      'Built a computer vision pipeline using YOLOv8, OpenCV, EasyOCR, and Tesseract OCR for instrument symbol detection and tag extraction',
      'Implemented symbol-to-tag mapping and a rule-based engine to generate structured Excel reports containing Instrument Tags, Types, I/O Types, Alarm Conditions, and Trip Details',
      'Trained and evaluated custom YOLOv8 models on annotated P&ID datasets to improve detection accuracy',
      'Achieved 24% mAP@50, 37% Precision, and 53% Recall through model optimization',
    ],
  },
  {
    role: 'Front End Developer',
    company: 'Sarvodaya Arogya Vikas Foundation, Akola',
    duration: 'March 2025 – June 2025',
    description: 'Developed and deployed responsive user interfaces and optimized web performance for healthcare platform.',
    highlights: [
      'Built responsive UI components',
      'Implemented accessible design patterns',
      'Deployed website with real Domain',
    ],
  },
];

export const SKILLS = {
  programming: {
    title: 'Programming',
    items: [
      { name: 'C++' },
      { name: 'Python'},
      { name: 'JavaScript'},
      { name: 'TypeScript'},
    ],
  },
  mern: {
    title: 'MERN Stack',
    items: [
      { name: 'React'},
      { name: 'Node.js'},
      { name: 'Express.js'},
      { name: 'MongoDB'},
    ],
  },
  databases: {
    title: 'Databases',
    items: [
      { name: 'MySQL'},
      { name: 'MongoDB'},
      { name: 'Convex'},
    ],
  },
  aiml: {
    title: 'AI / ML',
    items: [
      { name: 'Generative AI' },
      { name: 'RAG' },
      { name: 'OpenCV' },
      { name: 'NLP' },
      { name: 'YOLO Model' },
    ],
  },
  devops: {
    title: 'Cloud & DevOps',
    items: [
      { name: 'Github Actions' },
      { name: 'AWS( S3, EC2, Amplify, IAM)' },
    ],
  },
 
};

export const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const FOOTER_CONFIG = {
  developer: 'Prajwal Diwnale',
  text: 'Design & Developed by',
  copyright: 'All rights reserved.',
};

export const CTA_CONFIG = {
  preText: "Hey, you scrolled this far, let's talk.",
  linkText: 'Get in touch',
  profileImage: '/animated_PP.png',
  profileAlt: 'Prajwal Diwnale',
};
