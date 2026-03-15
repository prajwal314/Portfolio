/**
 * ============================================
 * Project Model
 * ============================================
 * 
 * Defines the schema for portfolio projects.
 * Projects are fetched dynamically from MongoDB
 * and displayed in the Projects section.
 * 
 * Fields:
 *   - title: Project name
 *   - description: Brief overview of the project
 *   - techStack: Array of technologies used
 *   - githubLink: Link to source code
 *   - liveLink: Link to live demo (optional)
 *   - image: URL or path to project thumbnail
 *   - featured: Whether to highlight this project
 *   - createdAt: Auto-generated timestamp
 */

const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Project description is required'],
      trim: true,
      maxlength: [500, 'Description cannot exceed 500 characters'],
    },
    techStack: {
      type: [String],
      required: [true, 'At least one technology is required'],
      validate: {
        validator: (arr) => arr.length > 0,
        message: 'Tech stack must have at least one technology',
      },
    },
    githubLink: {
      type: String,
      required: [true, 'GitHub link is required'],
      trim: true,
    },
    liveLink: {
      type: String,
      trim: true,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    // Automatically add createdAt and updatedAt fields
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);
