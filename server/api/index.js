/**
 * ============================================
 * Vercel Serverless Function Entry Point
 * ============================================
 * 
 * This file exports the Express app for Vercel's
 * serverless functions. All routes are handled
 * through the main app instance.
 */

const app = require('../app');

module.exports = app;
