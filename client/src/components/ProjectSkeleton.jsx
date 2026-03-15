/**
 * ============================================
 * Project Card Skeleton (Loading State)
 * ============================================
 * 
 * Shown while projects are being fetched from API.
 * Uses shimmer animation defined in index.css.
 * Mimics the layout of an actual project card.
 */

import { useTheme } from '../context/ThemeContext';

const ProjectSkeleton = () => {
    const { theme } = useTheme();

    return (
        <div
            className={`rounded-2xl overflow-hidden ${theme === 'dark' ? 'bg-surface-800/50' : 'bg-white'
                } border ${theme === 'dark' ? 'border-white/5' : 'border-gray-200'
                }`}
        >
            {/* Image placeholder */}
            <div className="skeleton h-48 w-full" />

            {/* Content placeholders */}
            <div className="p-6 space-y-4">
                {/* Title */}
                <div className="skeleton h-6 w-3/4 rounded" />

                {/* Description lines */}
                <div className="space-y-2">
                    <div className="skeleton h-4 w-full rounded" />
                    <div className="skeleton h-4 w-5/6 rounded" />
                </div>

                {/* Tech stack tags */}
                <div className="flex gap-2 pt-2">
                    <div className="skeleton h-6 w-16 rounded-full" />
                    <div className="skeleton h-6 w-20 rounded-full" />
                    <div className="skeleton h-6 w-14 rounded-full" />
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-3">
                    <div className="skeleton h-9 w-24 rounded-lg" />
                    <div className="skeleton h-9 w-24 rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default ProjectSkeleton;
