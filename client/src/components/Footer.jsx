/**
 * ============================================
 * Footer Component
 * ============================================
 * 
 * Simple, clean footer with social links 
 * and copyright notice.
 */

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../utils/constants';

const Footer = () => {
    const { theme } = useTheme();
    const year = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaGithub size={20} />, href: PERSONAL_INFO.github, label: 'GitHub' },
        { icon: <FaLinkedin size={20} />, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
        { icon: <HiMail size={20} />, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
    ];

    return (
        <footer
            className={`relative py-12 border-t ${theme === 'dark'
                ? 'border-white/5 bg-surface-950'
                : 'border-gray-200 bg-white'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <span className="text-lg font-bold gradient-text">{'<PD />'}</span>
                        <p
                            className={`text-sm mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                                }`}
                        >
                            © {year} {PERSONAL_INFO.name}. Built with ❤️ and MERN.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`p-2.5 rounded-xl transition-colors ${theme === 'dark'
                                    ? 'text-gray-400 hover:text-white hover:bg-white/10'
                                    : 'text-gray-500 hover:text-gray-900 hover:bg-black/5'
                                    }`}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label={link.label}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
