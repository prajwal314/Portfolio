/**
 * ============================================
 * Project Routes
 * ============================================
 * 
 * Defines REST API routes for projects.
 * 
 * Public routes:
 *   GET /api/projects      → List all projects
 *   GET /api/projects/:id  → Get single project
 */

const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProject,
} = require('../controllers/projectController');

// Public routes — anyone can view projects
router.get('/', getProjects);
router.get('/:id', getProject);

module.exports = router;
