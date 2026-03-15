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
    'DSA (Intermediate)',
  ],
  bio: 'Passionate about building scalable web applications and exploring the intersection of AI and software engineering. Currently pursuing B.Tech in Computer Engineering.',
  email: 'your-email@example.com',
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
  resume: '#',
};

export const EDUCATION = [
  {
    degree: 'Bachelor of Technology, Computer Engineering',
    institution: 'Vishwakarma Institute of Information Technology, Pune',
    year: '2023 – 2027',
    description: 'Focusing on full-stack development, data structures & algorithms, and machine learning fundamentals.',
  },
];

export const EXPERIENCE = [
  {
    role: 'Front End Developer',
    company: 'Sarvodaya Arogya Foundation, Akola',
    duration: 'March 2025 – June 2025',
    description: 'Developed responsive user interfaces, collaborated with backend teams, and optimized web performance for healthcare platform.',
    highlights: [
      'Built responsive UI components',
      'Improved page load times by 40%',
      'Implemented accessible design patterns',
    ],
  },
];

export const SKILLS = {
  programming: {
    title: 'Programming',
    items: [
      { name: 'C++', level: 70 },
      { name: 'Python', level: 65 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  mern: {
    title: 'MERN Stack',
    level: 'Advanced',
    items: [
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  databases: {
    title: 'Databases',
    items: [
      { name: 'SQL', level: 60 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  aiml: {
    title: 'AI / ML',
    items: [
      { name: 'Generative AI', level: 30 },
      { name: 'RAG', level: 30 },
      { name: 'Object Recognition', level: 50 },
    ],
  },
  devops: {
    title: 'DevOps & Cloud',
    items: [
      { name: 'DevOps', level: 25 },
      { name: 'AWS', level: 25 },
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
