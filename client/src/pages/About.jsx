/**
 * About — sleek About Me: photo left, name + description + skill pills right.
 * Skills folded in here (no separate Skills page, matching reference format).
 */
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO, SKILLS } from '../utils/constants';
import Container from '../components/Container';
import SectionHeading from '../components/SectionHeading';

const About = () => {
  const { theme } = useTheme();
  const dark = theme === 'dark';
  const allSkills = Object.values(SKILLS).flatMap((c) => c.items.map((i) => i.name));

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
            <div className="mt-4 flex flex-wrap gap-2">
              {allSkills.map((s) => (
                <span
                  key={s}
                  title={s}
                  className={`rounded-md border px-2 py-1 text-xs font-medium cursor-default ${
                    dark
                      ? 'border-white/10 bg-white/5 text-gray-300'
                      : 'border-gray-200 bg-gray-100 text-gray-600'
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
