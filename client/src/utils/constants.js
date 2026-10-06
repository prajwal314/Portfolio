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
  { name: 'X', href: 'https://x.com/prajwal_diwnale', key: 'x' },
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
  languages: {
    title: 'Languages',
    items: [
      { name: 'C++', href: 'https://isocpp.org/', icon: 'SiCplusplus' },
      { name: 'Python', href: 'https://www.python.org/', icon: 'SiPython' },
      { name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'SiJavascript' },
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/', icon: 'SiTypescript' },
    ],
  },
  databases: {
    title: 'Databases',
    items: [
      { name: 'MongoDB', href: 'https://www.mongodb.com/', icon: 'SiMongodb' },
      { name: 'SQL', href: 'https://www.mysql.com/', icon: 'SiMysql' },
      { name: 'Convex', href: 'https://www.convex.dev/', icon: 'HiCloud' },
      { name: 'ChromaDB', href: 'https://www.trychroma.com/', icon: 'HiDatabase' },
    ],
  },
  web: {
    title: 'Web Stack',
    items: [
      { name: 'HTML5', href: 'https://developer.mozilla.org/en-US/docs/Web/HTML', icon: 'SiHtml5' },
      { name: 'CSS3', href: 'https://developer.mozilla.org/en-US/docs/Web/CSS', icon: 'SiCss3' },
      { name: 'Tailwind CSS', href: 'https://tailwindcss.com/', icon: 'SiTailwindcss' },
      { name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: 'SiJavascript' },
      { name: 'TypeScript', href: 'https://www.typescriptlang.org/', icon: 'SiTypescript' },
      { name: 'React', href: 'https://react.dev/', icon: 'SiReact' },
      { name: 'Next.js', href: 'https://nextjs.org/', icon: 'SiNextdotjs' },
      { name: 'Express.js', href: 'https://expressjs.com/', icon: 'SiExpress' },
      { name: 'Node.js', href: 'https://nodejs.org/', icon: 'SiNodedotjs' },
      { name: 'REST API', href: 'https://restfulapi.net/', icon: 'HiGlobe' },
    ],
  },
  aiml: {
    title: 'AI / ML',
    items: [
      { name: 'GenAI', href: 'https://openai.com/', icon: 'HiSparkles' },
      { name: 'NLP', href: 'https://en.wikipedia.org/wiki/Natural_language_processing', icon: 'HiChat' },
      { name: 'OpenCV', href: 'https://opencv.org/', icon: 'SiOpencv' },
      { name: 'YOLO Model', href: 'https://www.ultralytics.com/', icon: 'HiEye' },
      { name: 'OCR', href: 'https://en.wikipedia.org/wiki/Optical_character_recognition', icon: 'HiDocumentText' },
      { name: 'RAG', href: 'https://en.wikipedia.org/wiki/Retrieval-augmented_generation', icon: 'HiSearchCircle' },
      { name: 'VectorDB', href: 'https://en.wikipedia.org/wiki/Vector_database', icon: 'HiDatabase' },
    ],
  },
  devops: {
    title: 'Cloud & DevOps',
    items: [
      { name: 'GitHub Actions', href: 'https://github.com/features/actions', icon: 'SiGithubactions' },
      { name: 'Amazon S3', href: 'https://aws.amazon.com/s3/', icon: 'SiAmazons3' },
      { name: 'Amazon EC2', href: 'https://aws.amazon.com/ec2/', icon: 'SiAmazonec2' },
      { name: 'Amazon IAM', href: 'https://aws.amazon.com/iam/', icon: 'HiLockClosed' },
      { name: 'Vercel', href: 'https://vercel.com/', icon: 'SiVercel' },
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
