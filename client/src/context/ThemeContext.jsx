/**
 * ============================================
 * Theme Context
 * ============================================
 * 
 * Provides dark/light mode toggle across the app.
 * Uses React Context API + localStorage persistence.
 * 
 * Usage:
 *   const { theme, toggleTheme } = useTheme();
 *   // theme is 'dark' or 'light'
 */

import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    // Initialize from localStorage, default to 'dark'
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('portfolio-theme');
        return saved || 'dark';
    });

    // Apply theme class to <body> whenever it changes
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook for consuming theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
