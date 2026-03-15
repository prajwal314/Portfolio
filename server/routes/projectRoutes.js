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
 * 
 * Protected routes (require JWT):
 *   POST /api/projects     → Create project
 *   DELETE /api/projects/:id → Delete project
 */

const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProject,
  createProject,
  deleteProject,
} = require('../controllers/projectController');
const authMiddleware = require('../middleware/auth');

// Public routes — anyone can view projects
router.get('/', getProjects);
router.get('/:id', getProject);

// Admin-protected routes — require valid JWT
router.post('/', authMiddleware, createProject);
router.delete('/:id', authMiddleware, deleteProject);

module.exports = router;
