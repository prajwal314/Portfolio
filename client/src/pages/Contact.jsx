/**
 * ============================================
 * Contact Section
 * ============================================
 * 
 * Contact form with API submission and social links.
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../utils/constants';
import api from '../utils/api';
import SectionHeading from '../components/SectionHeading';

const Contact = () => {
    const { theme } = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name.trim()) {
            toast.error('Please enter your name.');
            return;
        }
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            toast.error('Please enter a valid email.');
            return;
        }
        if (!formData.message.trim()) {
            toast.error('Please enter a message.');
            return;
        }

        setIsSubmitting(true);

        try {
            await api.post('/contact', formData);
            toast.success('Message sent successfully! 🎉');
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            toast.error(err.message || 'Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <HiMail size={20} />,
            label: 'Email',
            value: PERSONAL_INFO.email,
            href: `mailto:${PERSONAL_INFO.email}`,
        },
        {
            icon: <HiLocationMarker size={20} />,
            label: 'Location',
            value: 'Pune, India',
            href: null,
        },
    ];

    const socialLinks = [
        { icon: <FaGithub size={18} />, href: PERSONAL_INFO.github, label: 'GitHub' },
        { icon: <FaLinkedin size={18} />, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
    ];

    const inputClasses = `w-full px-5 py-3.5 rounded-xl text-sm font-medium outline-none transition-all duration-200 ${theme === 'dark'
        ? 'bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-primary-500/50 focus:bg-white/[0.08]'
        : 'bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-primary-500/50 focus:bg-white'
        }`;

    return (
        <section id="contact" className="relative py-24 lg:py-32">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <SectionHeading
                    title="Get in Touch"
                    subtitle="Have a project in mind or just want to say hi? I'd love to hear from you."
                />

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Contact Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div className="space-y-4">
                            {contactInfo.map((info) => (
                                <div key={info.label} className="flex items-start gap-4">
                                    <div
                                        className={`p-3 rounded-xl ${theme === 'dark'
                                            ? 'bg-white/5 text-primary-400'
                                            : 'bg-primary-500/10 text-primary-600'
                                            }`}
                                    >
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p
                                            className={`text-xs font-medium uppercase tracking-wider mb-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                                                }`}
                                        >
                                            {info.label}
                                        </p>
                                        {info.href ? (
                                            <a
                                                href={info.href}
                                                className={`text-sm font-medium transition-colors ${theme === 'dark'
                                                    ? 'text-gray-300 hover:text-white'
                                                    : 'text-gray-700 hover:text-gray-900'
                                                    }`}
                                            >
                                                {info.value}
                                            </a>
                                        ) : (
                                            <p
                                                className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                                    }`}
                                            >
                                                {info.value}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div>
                            <p
                                className={`text-xs font-medium uppercase tracking-wider mb-4 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                                    }`}
                            >
                                Find me on
                            </p>
                            <div className="flex gap-3">
                                {socialLinks.map((link) => (
                                    <motion.a
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 rounded-xl transition-colors ${theme === 'dark'
                                            ? 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                                            : 'bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200'
                                            }`}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={link.label}
                                    >
                                        {link.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="contact-name"
                                    className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                        }`}
                                >
                                    Name
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className={inputClasses}
                                    maxLength={50}
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="contact-email"
                                    className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                        }`}
                                >
                                    Email
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your.email@example.com"
                                    className={inputClasses}
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className={`block text-xs font-semibold uppercase tracking-wider mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                                        }`}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell me about your project or just say hello..."
                                    rows={5}
                                    className={`${inputClasses} resize-none`}
                                    maxLength={1000}
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer overflow-hidden"
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            >
                                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                                <span className="relative flex items-center justify-center gap-2">
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <HiPaperAirplane className="rotate-90 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </span>
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
