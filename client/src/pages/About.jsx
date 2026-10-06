/**
 * About — sleek About Me: photo left, name + description + skill pills right.
 * Skills folded in here (no separate Skills page, matching reference format).
 */
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO, SKILLS } from '../utils/constants';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiGithubactions,
  SiAmazons3,
  SiAmazonec2,
  SiVercel,
  SiOpencv,
} from 'react-icons/si';
import {
  HiCloud,
  HiDatabase,
  HiGlobe,
  HiSparkles,
  HiChat,
  HiEye,
  HiDocumentText,
  HiSearchCircle,
  HiLockClosed,
} from 'react-icons/hi';

const skillIcons = {
  SiCplusplus: SiCplusplus,
  SiPython: SiPython,
  SiJavascript: SiJavascript,
  SiTypescript: SiTypescript,
  SiMongodb: SiMongodb,
  SiMysql: SiMysql,
  SiHtml5: SiHtml5,
  SiCss3: SiCss3,
  SiTailwindcss: SiTailwindcss,
  SiReact: SiReact,
  SiNextdotjs: SiNextdotjs,
  SiExpress: SiExpress,
  SiNodedotjs: SiNodedotjs,
  SiGithubactions: SiGithubactions,
  SiAmazons3: SiAmazons3,
  SiAmazonec2: SiAmazonec2,
  SiVercel: SiVercel,
  SiOpencv: SiOpencv,
  HiCloud: HiCloud,
  HiDatabase: HiDatabase,
  HiGlobe: HiGlobe,
  HiSparkles: HiSparkles,
  HiChat: HiChat,
  HiEye: HiEye,
  HiDocumentText: HiDocumentText,
  HiSearchCircle: HiSearchCircle,
  HiLockClosed: HiLockClosed,
};

const About = () => {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  const pillClasses = `inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-medium transition-colors ${
    dark
      ? 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10'
      : 'border-gray-200 bg-gray-100 text-gray-600 hover:bg-gray-200'
  }`;

  return (
    <Container className="mt-20">
      <section id="about">
        <SectionHeading subHeading="About" heading="Me" />
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <img
            src={PERSONAL_INFO.avatar}
            alt="Prajwal Diwnale"
            className={`size-60 rounded-md border-2 shrink-0 object-cover ${
              dark ? 'border-white/10' : 'border-black/10'
            }`}
          />
          <div className="mt-4 md:mt-0">
            <h3 className="text-2xl font-bold">{PERSONAL_INFO.aboutName}</h3>
            <p className="text-secondary mt-4">{PERSONAL_INFO.aboutDescription}</p>
            <p className="text-secondary mt-4">{PERSONAL_INFO.bio}</p>
            <p className="text-secondary mt-8 font-bold">Skills</p>
            <div className="mt-4 flex flex-col gap-4">
              {Object.values(SKILLS).map((category) => (
                <div key={category.title}>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>
                    {category.title}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((s) => {
                      const Icon = skillIcons[s.icon];
                      return (
                        <a
                          key={`${category.title}-${s.name}`}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={s.name}
                          className={pillClasses}
                        >
                          {Icon && <Icon size={14} />}
                          {s.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
