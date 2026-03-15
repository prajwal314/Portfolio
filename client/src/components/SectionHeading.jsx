/**
 * ============================================
 * Section Heading Component
 * ============================================
 * 
 * Reusable animated section heading with:
 *   - Gradient underline
 *   - Scroll-triggered slide-in animation
 *   - Optional subtitle text
 */

import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const SectionHeading = ({ title, subtitle }) => {
    const { theme } = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 text-center"
        >
            <h2 className="text-headline gradient-text section-heading inline-block mb-4">
                {title}
            </h2>
            {subtitle && (
                <p
                    className={`text-body-lg max-w-2xl mx-auto mt-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default SectionHeading;
