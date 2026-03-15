/**
 * ============================================
 * Auth Controller
 * ============================================
 * 
 * Handles admin authentication.
 * Uses a simple admin login flow:
 *   - POST /api/auth/login → Returns JWT token
 * 
 * For simplicity, admin credentials are stored
 * as environment variables. In production, you'd
 * want a proper User model with hashed passwords.
 */

const jwt = require('jsonwebtoken');

/**
 * @desc    Admin login — returns JWT token
 * @route   POST /api/auth/login
 * @access  Public
 */
const adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password.',
      });
    }

    // Check against env admin credentials
    // In production, replace with database-backed authentication
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@portfolio.com';
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials.',
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { email, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    res.status(200).json({
      success: true,
      token,
      message: 'Login successful.',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { adminLogin };
