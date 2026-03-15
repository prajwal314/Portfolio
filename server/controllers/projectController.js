/**
 * ============================================
 * Project Controller
 * ============================================
 * 
 * MVC Controller layer for Project resources.
 * Handles the business logic for:
 *   - GET /api/projects      → Fetch all projects
 *   - GET /api/projects/:id  → Fetch single project
 *   - POST /api/projects     → Create new project (admin)
 *   - DELETE /api/projects/:id → Delete project (admin)
 * 
 * Each function receives (req, res, next) and
 * delegates data operations to the Project model.
 */

const Project = require('../models/Project');

/**
 * @desc    Get all projects, sorted newest first
 * @route   GET /api/projects
 * @access  Public
 */
const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get a single project by ID
 * @route   GET /api/projects/:id
 * @access  Public
 */
const getProject = async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Create a new project
 * @route   POST /api/projects
 * @access  Admin (JWT protected)
 */
const createProject = async (req, res, next) => {
  try {
    const project = await Project.create(req.body);

    res.status(201).json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete a project by ID
 * @route   DELETE /api/projects/:id
 * @access  Admin (JWT protected)
 */
const deleteProject = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Project deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProjects,
  getProject,
  createProject,
  deleteProject,
};
