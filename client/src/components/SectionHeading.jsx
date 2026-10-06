/**
 * SectionHeading — sleek format: small subHeading + bold heading, left aligned.
 * Backwards compatible with old { title, subtitle } props.
 */
const SectionHeading = ({ subHeading, heading, title, subtitle }) => {
  const small = subHeading || subtitle || '';
  const big = heading || title || '';
  return (
    <div className="mb-8">
      {small && <p className="text-secondary text-sm">{small}</p>}
      {big && <h2 className="text-2xl font-bold">{big}</h2>}
    </div>
  );
};

export default SectionHeading;
