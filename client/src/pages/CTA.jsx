/**
 * CTA — dashed call-to-action box copied from sleek-portfolio format.
 * Simplified: scrolls to contact instead of Cal.com popup.
 */
import { useTheme } from '../context/ThemeContext';
import { CTA_CONFIG } from '../utils/constants';
import Container from '../components/Container';

const CTA = () => {
  const { theme } = useTheme();
  const dark = theme === 'dark';

  return (
    <Container
      className={`mt-20 rounded-md border border-dashed py-8 ${
        dark ? 'border-white/10' : 'border-black/20'
      }`}
    >
      <div className="mt-6 w-full flex-col px-6 pb-8 sm:flex sm:items-center sm:justify-between sm:px-12">
        <p className="mb-4 text-center text-base opacity-50 sm:mb-3 md:text-xl">
          {CTA_CONFIG.preText}
        </p>
        <div className="mt-4 flex w-full justify-center sm:mt-0 sm:w-auto sm:justify-end">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className={`group inline-flex cursor-pointer items-center gap-2 self-end rounded-md border border-dashed px-2 py-1 text-sm shadow-[0_0_5px_rgba(0,0,0,0.1)] transition-all ${
              dark
                ? 'border-white/30 bg-white/15 text-white'
                : 'border-black/20 bg-black/5 text-black'
            }`}
          >
            <img
              src={CTA_CONFIG.profileImage}
              alt={CTA_CONFIG.profileAlt}
              className="h-5 w-5 rounded-full object-cover"
            />
            <span className="block text-sm font-bold whitespace-nowrap">{CTA_CONFIG.linkText}</span>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CTA;
