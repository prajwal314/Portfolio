/**
 * ============================================
 * Database Configuration
 * ============================================
 * 
 * Handles MongoDB connection using Mongoose.
 * Connection string is loaded from environment variables.
 * Includes retry logic and connection event handlers.
 */

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`\n✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📦 Database: ${conn.connection.name}\n`);

    // Handle connection events
    mongoose.connection.on('error', (err) => {
      console.error(`❌ MongoDB connection error: ${err}`);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️  MongoDB disconnected');
    });

  } catch (error) {
    console.error(`❌ MongoDB connection failed: ${error.message}`);
    // Exit process with failure code if DB connection fails
    process.exit(1);
  }
};

module.exports = connectDB;
