/**
 * Resume — same iframe-preview pattern as the cloned website's /resume page.
 * Drive view link converted to /preview embed URL (see RESUME_CONFIG).
 */
import { HiExternalLink, HiDownload } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { RESUME_CONFIG } from '../utils/constants';
import Container from '../components/Container';

const Resume = () => {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  return (
    <Container className="mt-20">
      <section id="resume">
        <div className="space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Resume</h1>
            <p className="text-secondary mx-auto max-w-2xl text-lg">My resume.</p>
            <div className="flex items-center justify-center gap-3">
              <a
                href={RESUME_CONFIG.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm ${
                  dark ? 'border-white/20 bg-white/5 hover:bg-white/10' : 'border-black/20 bg-black/5 hover:bg-black/10'
                }`}
              >
                <HiExternalLink /> Open in Drive
              </a>
              <a
                href={RESUME_CONFIG.url.replace('/preview', '/view?usp=sharing')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-100"
              >
                <HiDownload /> Download
              </a>
            </div>
          </div>
          <hr className={dark ? 'border-white/10' : 'border-black/10'} />
          <div className="mx-auto max-w-2xl">
            <iframe
              src={RESUME_CONFIG.url}
              title="Resume"
              className={`min-h-screen w-full rounded-lg border ${
                dark ? 'border-white/10 bg-white' : 'border-black/10 bg-white'
              }`}
            />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Resume;
