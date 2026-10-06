/**
 * Skill pill — dashed-border tag copied from sleek-portfolio Skill component.
 */
import { useTheme } from '../context/ThemeContext';

const Skill = ({ name, href, children }) => {
  const { theme } = useTheme();
  const inner = (
    <>
      {children && <span className="size-4 flex-shrink-0">{children}</span>}
      <span className="ml-1 text-sm font-bold">{name}</span>
    </>
  );
  const cls =
    'skill-inner-shadow inline-flex items-center self-end rounded-md border border-dashed px-2 py-1 text-sm ' +
    (theme === 'dark'
      ? 'border-white/30 bg-white/15 text-white'
      : 'border-black/20 bg-black/5 text-black');
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return <span className={cls}>{inner}</span>;
};

export default Skill;
