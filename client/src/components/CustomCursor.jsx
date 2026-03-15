/**
 * ============================================
 * Custom Cursor Component
 * ============================================
 * 
 * A decorative cursor follower that adds a premium feel.
 * Scales up when hovering over interactive elements.
 * Hidden on mobile/touch devices.
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Don't show custom cursor on touch devices
        if ('ontouchstart' in window) return;

        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Detect hover over interactive elements
        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        // Add hover listeners to all interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, input, textarea, [role="button"]'
        );
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleHoverStart);
            el.addEventListener('mouseleave', handleHoverEnd);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, []);

    // Don't render on touch devices
    if ('ontouchstart' in typeof window !== 'undefined' ? window : {}) return null;

    return (
        <motion.div
            className="custom-cursor hidden lg:block"
            animate={{
                x: position.x - 10,
                y: position.y - 10,
                scale: isHovering ? 2 : 1,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{
                type: 'spring',
                stiffness: 500,
                damping: 28,
                mass: 0.5,
            }}
        />
    );
};

export default CustomCursor;
