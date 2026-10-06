/**
 * Container — narrow centered wrapper copied from sleek-portfolio format.
 * max-w-3xl, fade-in-blur entrance.
 */
const Container = ({ children, className = '', ...props }) => {
  return (
    <div className={`animate-fade-in-blur mx-auto w-full max-w-3xl px-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Container;
