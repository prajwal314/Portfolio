/**
 * Hero — sleek format: avatar, name/title, description with skill pills,
 * Resume + Get in touch buttons, social icon row.
 */
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail, HiX } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO, HERO_SOCIALS } from '../utils/constants';
import Container from '../components/Container';

const socialIcons = {
  x: <HiX size={24} />,
  linkedin: <FaLinkedin size={24} />,
  github: <FaGithub size={24} />,
  email: <HiMail size={24} />,
};

const Hero = () => {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Container className="pt-10">
      <img
        src={PERSONAL_INFO.avatar}
        alt="Prajwal Diwnale"
        className="size-24 rounded-full object-cover border border-white/10"
      />

      <div className="mt-8 flex flex-col gap-2">
        <h1 className="text-4xl font-bold">
          Sup, I&apos;m {PERSONAL_INFO.shortName} -{' '}
          <span className="text-secondary">A Software Engineer.</span>
        </h1>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={() => scrollTo('resume')}
          className={`rounded-md border px-4 py-2 text-sm font-medium cursor-pointer transition-colors ${
            dark ? 'border-white/20 bg-white/5 hover:bg-white/10' : 'border-black/20 bg-black/5 hover:bg-black/10'
          }`}
        >
          Resume / CV
        </button>
        <button
          onClick={() => scrollTo('contact')}
          className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 cursor-pointer transition-colors"
        >
          Get in touch
        </button>
      </div>

      <div className="mt-8 flex gap-4">
        {HERO_SOCIALS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            title={link.name}
            className="text-secondary flex items-center gap-2 hover:opacity-80"
          >
            <span className="size-6 flex items-center justify-center">
              {socialIcons[link.key]}
            </span>
          </a>
        ))}
      </div>
    </Container>
  );
};

export default Hero;
