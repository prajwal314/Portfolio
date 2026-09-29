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
  roles: [
    'MERN Stack Developer',
    'AI/ML Enthusiast',
    'Problem Solver',
    'Artistic',
  ],
  bio: 'Passionate about building scalable web applications and exploring the intersection of AI and software engineering. Currently pursuing B.Tech Third Year in Computer Engineering.',
  email: 'diwnaleprajwal@gmail.com',
  github: 'https://github.com/prajwal314',
  linkedin: 'https://www.linkedin.com/in/prajwal-diwnale-532b0628a/',
  resume: '#',
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
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
