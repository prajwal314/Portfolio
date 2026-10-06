/**
 * ExperienceCard — ported from sleek-portfolio ExperienceCard.
 * Company header, dates, tech pills, bullet description.
 */
import { useTheme } from '../context/ThemeContext';

const parseDescription = (text) =>
  text.replace(/\*(.*?)\*/g, '<b>$1</b>');

const ExperienceCard = ({ experience }) => {
  const { theme } = useTheme();
  const muted = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';
  const heading = theme === 'dark' ? 'text-white' : 'text-gray-900';

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <h3 className={`text-lg font-bold ${heading}`}>{experience.company}</h3>
              {experience.isCurrent && (
                <span className="flex items-center gap-1 rounded-md border-green-300 bg-green-500/10 px-2 py-1 text-xs">
                  <span className="size-2 animate-pulse rounded-full bg-green-500" />
                  Working
                </span>
              )}
            </div>
            <p className={heading}>{experience.position || experience.role}</p>
          </div>
        </div>
        <div className={`text-secondary flex flex-col md:text-right text-sm`}>
          <p>
            {experience.startDate || experience.duration || ''}{' '}
            {experience.endDate ? `- ${experience.isCurrent ? 'Present' : experience.endDate}` : ''}
          </p>
          {experience.location && <p>{experience.location}</p>}
        </div>
      </div>

      {experience.technologies && experience.technologies.length > 0 && (
        <div>
          <h4 className={`text-md mt-4 mb-2 font-semibold ${heading}`}>Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, i) => (
              <span
                key={i}
                className={`rounded-md border px-2 py-1 text-xs font-medium ${
                  theme === 'dark'
                    ? 'border-white/10 bg-white/5 text-gray-300'
                    : 'border-gray-200 bg-gray-100 text-gray-600'
                }`}
              >
                {typeof tech === 'string' ? tech : tech.name}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className={`text-secondary flex flex-col gap-1 text-sm leading-relaxed`}>
        {(experience.description || []).map((d, i) =>
          typeof d === 'string' ? (
            <p key={i} dangerouslySetInnerHTML={{ __html: `• ${parseDescription(d)}` }} />
          ) : null
        )}
        {(experience.highlights || []).map((h, i) => (
          <p key={`h-${i}`} className={muted}>
            • {h}
          </p>
        ))}
        {!experience.description && !experience.highlights && experience.summary && (
          <p>• {experience.summary}</p>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
