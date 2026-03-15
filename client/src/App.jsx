/**
 * App.jsx — Complete Portfolio Website
 * 
 * Self-contained, zero external animation libraries.
 * Uses React + Tailwind CSS + CSS animations only.
 */

import { useState, useEffect, createContext, useContext } from 'react';

/* ============================================
   CONSTANTS
   ============================================ */
const PERSONAL_INFO = {
  name: 'Prajwal Diwnale',
  roles: ['MERN Stack Developer', 'AI/ML Enthusiast', 'Problem Solver', 'Artistic'],
  bio: 'Passionate about building scalable web applications and exploring the intersection of AI and software engineering. Currently pursuing B.Tech Third Year in Computer Engineering.',
  email: 'diwnaleprajwal@gmail.com',
  github: 'https://github.com/prajwal314',
  linkedin: 'https://www.linkedin.com/in/prajwal-diwnale-532b0628a/',
};

const EDUCATION = [
  {
    degree: 'Bachelor of Technology, Computer Engineering',
    institution: 'Vishwakarma Institute of Information Technology, Pune',
    year: '2023 – 2027',
    description: 'Focusing on full-stack development, data structures & algorithms, and machine learning fundamentals.',
    
  },
];

const EXPERIENCE = [
  {
    role: 'Front End Developer',
    company: 'Sarvodaya Arogya Vikas Foundation, Akola',
    duration: 'March 2025 – June 2025',
    description: 'Developed responsive user interfaces and optimized web performance for healthcare platform.',
    highlights: ['Built responsive UI components', 'Implemented accessible design patterns', 'Deployed website with real Domain'],
    
  },
];

const SKILLS_DATA = [
  {
    category: 'Programming',
    emoji: '💻',
    color: 'from-violet-500 to-purple-500',
    items: [
      { name: 'C++', level: 70 },
      { name: 'Python', level: 65 },
      { name: 'JavaScript', level: 85 },
    ],
  },
  {
    category: 'MERN Stack',
    emoji: '⚛️',
    color: 'from-blue-500 to-cyan-400',
    wide: true,
    items: [
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 80 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    category: 'Databases',
    emoji: '🗄️',
    color: 'from-emerald-500 to-teal-400',
    items: [
      { name: 'SQL', level: 60 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    category: 'AI / ML',
    emoji: '🤖',
    color: 'from-orange-500 to-amber-400',
    items: [
      { name: 'Generative AI', level: 30 },
      { name: 'RAG', level: 30 },
      { name: 'Object Recognition', level: 50 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    emoji: '☁️',
    color: 'from-pink-500 to-rose-400',
    items: [
      { name: 'DevOps', level: 25 },
      { name: 'AWS', level: 25 },
    ],
  },
];

const NAV_LINKS = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

/* ============================================
   THEME CONTEXT
   ============================================ */
const ThemeCtx = createContext();
const useTheme = () => useContext(ThemeCtx);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') || 'dark'; } catch { return 'dark'; }
  });

  useEffect(() => {
    document.body.className = theme;
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* noop */ }
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return <ThemeCtx.Provider value={{ theme, toggleTheme }}>{children}</ThemeCtx.Provider>;
}

/* ============================================
   SECTION HEADING — Reusable
   ============================================ */
function SectionHeading({ title, subtitle }) {
  const { theme } = useTheme();
  return (
    <div className="text-center mb-16 animate-fade-in-up">
      <div className="section-divider" />
      <h2
        className="gradient-text inline-block mb-4 section-heading"
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, lineHeight: 1.2 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ============================================
   NAVBAR
   ============================================ */
function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down ${scrolled ? 'glass shadow-lg shadow-black/10' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="text-xl font-bold gradient-text cursor-pointer hover:scale-105 transition-transform"
          >
            <img src="/prajwal-logo.svg" alt="Prajwal Logo" className="h-10 w-auto" />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${theme === 'dark'
                  ? 'text-gray-400 hover:text-white hover:bg-white/5'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'
                  }`}
              >
                {link.label}
              </button>
            ))}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`ml-4 p-2.5 rounded-xl cursor-pointer transition-all hover:scale-110 ${theme === 'dark'
                ? 'text-yellow-400 hover:bg-white/10'
                : 'text-gray-600 hover:bg-black/5'
                }`}
              aria-label="Toggle theme"
            >
              <span className="text-lg">{theme === 'dark' ? '☀️' : '🌙'}</span>
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <button onClick={toggleTheme} className="p-2 text-lg cursor-pointer">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 text-2xl cursor-pointer ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5 animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium cursor-pointer transition-colors ${theme === 'dark'
                  ? 'text-gray-300 hover:text-white hover:bg-white/5'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-black/5'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

/* ============================================
   HERO SECTION
   ============================================ */
function Hero() {
  const { theme } = useTheme();
  const [text, setText] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const role = PERSONAL_INFO.roles[roleIdx];
    let timer;
    if (!deleting) {
      if (text.length < role.length) {
        timer = setTimeout(() => setText(role.slice(0, text.length + 1)), 80);
      } else {
        timer = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % PERSONAL_INFO.roles.length);
      }
    }
    return () => clearTimeout(timer);
  }, [text, deleting, roleIdx]);

  return (
    <section id="hero" className="w-full relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Status badge */}
        <div className="mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-medium glass ${theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
            }`}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
            </span>
            Available for opportunities
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="mb-6 animate-fade-in-up hero-heading"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', animationDelay: '0.2s' }}
        >
          <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
            Hi, I&apos;m{' '}
          </span>
          <span className="gradient-text">{PERSONAL_INFO.name}</span>
        </h1>

        {/* Typing */}
        <div className="mb-8 h-10 flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <span className={`text-lg md:text-2xl font-mono font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
            {'> '}{text}
            <span
              className="inline-block w-0.5 h-6 ml-1 bg-primary-500 align-middle"
              style={{ animation: 'blink 1s step-end infinite' }}
            />
          </span>
        </div>

        {/* Bio */}
        <p className={`max-w-2xl mx-auto mb-12 text-base md:text-lg leading-relaxed animate-fade-in-up ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`} style={{ animationDelay: '0.4s' }}>
          {PERSONAL_INFO.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-sm cursor-pointer overflow-hidden transition-all hover:shadow-lg hover:shadow-primary-500/25 hover:scale-[1.03] active:scale-[0.97]"
          >
            View Projects
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-8 py-4 rounded-xl font-semibold text-sm border-2 cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97] ${theme === 'dark'
              ? 'text-white border-white/20 hover:border-white/40 hover:bg-white/5'
              : 'text-gray-900 border-gray-300 hover:border-gray-400 hover:bg-black/5'
              }`}
          >
            Get in Touch
          </button>
        </div>


      </div>
    </section>
  );
}

/* ============================================
   ABOUT SECTION
   ============================================ */
function About() {
  const { theme } = useTheme();
  const items = [
    ...EDUCATION.map(e => ({ ...e, type: 'education' })),
    ...EXPERIENCE.map(e => ({ ...e, type: 'experience' })),
  ];

  return (
    <section id="about" className="w-full py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="My journey in tech — education, experience, and the milestones that shaped my path."
        />

        <div className="space-y-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`p-6 md:p-8 rounded-2xl glass card-hover animate-fade-in-up`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              {/* Type badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{item.type === 'education' ? '🎓' : '💼'}</span>
                <span className={`text-xs font-bold uppercase tracking-widest ${item.type === 'education' ? 'text-accent-400' : 'text-primary-400'
                  }`}>
                  {item.type}
                </span>
                <span className={`ml-auto text-xs font-medium px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-white/5 text-gray-500' : 'bg-gray-100 text-gray-400'
                  }`}>
                  {item.year || item.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                {item.degree || item.role}
              </h3>

              {/* Institution */}
              <p className={`text-sm font-medium mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                {item.institution || item.company}
              </p>

              {/* Description */}
              <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                {item.description}
              </p>

              {/* Experience highlights */}
              {item.highlights && (
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((h, j) => (
                    <li key={j} className={`flex items-start gap-3 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SKILLS SECTION
   ============================================ */
function Skills() {
  const { theme } = useTheme();

  const getLevelLabel = (level) => {
    if (level >= 80) return 'Advanced';
    if (level >= 50) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" className="w-full py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="What I work with — organized by domain with proficiency levels."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((cat, catIdx) => (
            <div
              key={cat.category}
              className={`p-6 rounded-2xl glass card-hover animate-fade-in-up ${cat.wide ? 'lg:col-span-2' : ''
                }`}
              style={{ animationDelay: `${0.1 + catIdx * 0.1}s` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.emoji}</span>
                <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                  {cat.category}
                </h3>
              </div>

              {/* Skill items */}
              <div className="space-y-4">
                {cat.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                        {skill.name}
                      </span>
                      <span className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                        {getLevelLabel(skill.level)}
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className={`h-2 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
                      }`}>
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                        style={{
                          width: `${skill.level}%`,
                          animation: 'progressGrow 1.2s cubic-bezier(0.22, 1, 0.36, 1) both',
                          animationDelay: `${0.3 + catIdx * 0.15}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================
   PROJECTS SECTION
   ============================================ */
function Projects() {
  const { theme } = useTheme();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => { setProjects(data.data || []); setLoading(false); })
      .catch(() => { setError('Could not load projects'); setLoading(false); });
  }, []);

  return (
    <section id="projects" className="w-full py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="Things I've built — each project is fetched dynamically from the database."
        />

        {/* Loading skeletons */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="rounded-2xl overflow-hidden glass">
                <div className="h-48 skeleton" />
                <div className="p-6 space-y-3">
                  <div className="h-5 w-3/4 skeleton" />
                  <div className="h-4 w-full skeleton" />
                  <div className="h-4 w-2/3 skeleton" />
                  <div className="flex gap-2 mt-4">
                    <div className="h-6 w-16 skeleton" />
                    <div className="h-6 w-16 skeleton" />
                    <div className="h-6 w-16 skeleton" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="text-center py-16">
            <p className="text-red-400 text-lg">{error}</p>
          </div>
        )}

        {/* Empty state */}
        {!loading && !error && projects.length === 0 && (
          <div className="text-center py-16 glass rounded-2xl">
            <span className="text-5xl block mb-4">🚀</span>
            <p className={`text-lg font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
              No projects yet. Add some via the admin API!
            </p>
          </div>
        )}

        {/* Project grid */}
        {!loading && projects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={project._id}
                className={`rounded-2xl overflow-hidden card-hover animate-fade-in-up ${theme === 'dark'
                  ? 'glass hover:border-primary-500/30'
                  : 'bg-white border border-gray-200 hover:shadow-xl'
                  }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Image */}
                <div className={`h-48 flex items-center justify-center overflow-hidden ${theme === 'dark' ? 'bg-surface-700/50' : 'bg-gray-50'
                  }`}>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  ) : (
                    <span className="text-5xl opacity-25">🖥️</span>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                    {project.title}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`} style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack?.slice(0, 4).map(tech => (
                      <span key={tech} className={`px-2.5 py-1 rounded-lg text-xs font-medium ${theme === 'dark'
                        ? 'bg-white/5 text-gray-300 border border-white/5'
                        : 'bg-gray-100 text-gray-600 border border-gray-200'
                        }`}>
                        {tech}
                      </span>
                    ))}
                    {project.techStack?.length > 4 && (
                      <span className={`px-2.5 py-1 text-xs font-medium ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                        className={`text-sm font-medium transition-colors hover:underline ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'
                          }`}>
                        GitHub →
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                        className="text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors hover:underline">
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ============================================
   CONTACT SECTION
   ============================================ */
function Contact() {
  const { theme } = useTheme();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: 'error', text: 'Please fill in all fields.' });
      return;
    }
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus({ type: 'success', text: 'Message sent successfully! 🎉' });
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', text: 'Failed to send message. Please try again.' });
    } finally {
      setSending(false);
    }
  };

  const inputCls = `w-full px-5 py-4 rounded-xl text-sm font-medium outline-none transition-all duration-200 ${theme === 'dark'
    ? 'bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 focus:border-primary-500/50 focus:bg-white/[0.06]'
    : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500/50 focus:shadow-sm'
    }`;

  return (
    <section id="contact" className="w-full py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${theme === 'dark' ? 'bg-white/5' : 'bg-primary-500/10'
                }`}>
                📧
              </div>
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest mb-1.5 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                  }`}>Email</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className={`text-sm font-medium transition-colors ${theme === 'dark' ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                  }`}>
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${theme === 'dark' ? 'bg-white/5' : 'bg-primary-500/10'
                }`}>
                📍
              </div>
              <div>
                <p className={`text-xs font-bold uppercase tracking-widest mb-1.5 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                  }`}>Location</p>
                <p className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>Pune, India</p>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-4">
              <p className={`text-xs font-bold uppercase tracking-widest mb-4 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                }`}>Find me on</p>
              <div className="flex gap-3">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer"
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105 ${theme === 'dark'
                    ? 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5'
                    : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}>
                  GitHub
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:scale-105 ${theme === 'dark'
                    ? 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5'
                    : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                    }`}>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div>
              <label className={`block text-xs font-bold uppercase tracking-widest mb-2.5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>Name</label>
              <input type="text" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Your name" className={inputCls} maxLength={50} />
            </div>

            <div>
              <label className={`block text-xs font-bold uppercase tracking-widest mb-2.5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>Email</label>
              <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                placeholder="your@email.com" className={inputCls} />
            </div>

            <div>
              <label className={`block text-xs font-bold uppercase tracking-widest mb-2.5 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>Message</label>
              <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                placeholder="Tell me about your project or just say hello..."
                rows={5} className={`${inputCls} resize-none`} maxLength={1000} />
            </div>

            {/* Status message */}
            {status && (
              <p className={`text-sm font-medium px-4 py-3 rounded-xl ${status.type === 'success'
                ? 'text-green-400 bg-green-500/10 border border-green-500/20'
                : 'text-red-400 bg-red-500/10 border border-red-500/20'
                }`}>
                {status.text}
              </p>
            )}

            {/* Submit button */}
            <button type="submit" disabled={sending}
              className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-sm cursor-pointer overflow-hidden transition-all hover:shadow-lg hover:shadow-primary-500/25 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              <span className="relative">
                {sending ? 'Sending...' : 'Send Message →'}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   FOOTER
   ============================================ */
function Footer() {
  const { theme } = useTheme();
  return (
    <footer className={`w-full py-12 border-t ${theme === 'dark' ? 'border-white/5 bg-surface-950/50' : 'border-gray-200 bg-white/50'
      }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-3"><img src="/prajwal-logo.svg" alt="Prajwal Logo" className="h-12 w-auto" /></div>
        <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
          © {new Date().getFullYear()} Prajwal Diwnale. Built with the MERN Stack.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer"
            className={`text-sm font-medium transition-colors ${theme === 'dark' ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'
              }`}>
            GitHub
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"
            className={`text-sm font-medium transition-colors ${theme === 'dark' ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'
              }`}>
            LinkedIn
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`}
            className={`text-sm font-medium transition-colors ${theme === 'dark' ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'
              }`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ============================================
   APP — Root Component
   ============================================ */
function App() {
  return (
    <ThemeProvider>
      <div className="w-full min-h-screen mx-auto">
        <Navbar />
        <main className="w-full mx-auto">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
