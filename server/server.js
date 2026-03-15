/**
 * ============================================
 * Express Server — Local Development Entry Point
 * ============================================
 * 
 * This file is used for local development only.
 * For Vercel deployment, the app is exported from app.js
 * and used by api/index.js.
 * 
 * Run with: npm run dev (nodemon) or npm start (node)
 */

const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Connect to MongoDB first
  await connectDB();

  app.listen(PORT, () => {
    console.log(`\n🚀 Server running on port ${PORT}`);
    console.log(`📡 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🌐 API URL: http://localhost:${PORT}/api\n`);
  });
};

startServer();
