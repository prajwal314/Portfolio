/**
 * ============================================
 * Express Application Configuration
 * ============================================
 * 
 * Architecture: MVC (Model-View-Controller)
 * 
 * Flow:
 *   Request → Routes → Controller → Model → Database
 *   Response ← Controller ← Model ← Database
 * 
 * Middleware Chain:
 *   1. helmet     → Security headers
 *   2. morgan     → HTTP request logging
 *   3. cors       → Cross-origin requests
 *   4. express.json → Parse JSON bodies
 *   5. Routes     → API endpoints
 *   6. errorHandler → Centralized error handling
 * 
 * This file configures and exports the Express app.
 * Business logic lives in controllers.
 */

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Import route modules
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/authRoutes');

// Initialize Express app
const app = express();

// ============================================
// DATABASE CONNECTION (for serverless)
// ============================================

// Cache the database connection for serverless environments
let isConnected = false;

const connectDatabase = async () => {
  if (isConnected) {
    return;
  }
  await connectDB();
  isConnected = true;
};

// Connect to database on each request (Vercel serverless)
app.use(async (req, res, next) => {
  await connectDatabase();
  next();
});

// ============================================
// MIDDLEWARE
// ============================================

// Security headers — protects against common web vulnerabilities
app.use(helmet());

// HTTP request logger — logs method, url, status, response time
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// CORS — allow requests from the React frontend
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);

// Parse incoming JSON request bodies
app.use(express.json({ limit: '10mb' }));

// Parse URL-encoded bodies (form submissions)
app.use(express.urlencoded({ extended: true }));

// ============================================
// API ROUTES
// ============================================

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Portfolio API is running',
    timestamp: new Date().toISOString(),
  });
});

// Mount route modules
app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

// ============================================
// ERROR HANDLING
// ============================================

// Centralized error handler (must be last middleware)
app.use(errorHandler);

// Export the app for Vercel serverless functions
module.exports = app;
