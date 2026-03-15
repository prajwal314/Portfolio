/**
 * ============================================
 * JWT Authentication Middleware
 * ============================================
 * 
 * Protects admin-only routes (POST/DELETE projects).
 * Extracts the JWT from the Authorization header,
 * verifies it, and attaches the decoded payload
 * to req.user for downstream use.
 * 
 * Usage: Add `authMiddleware` to any route that
 * requires admin authentication.
 * 
 * Header format: Authorization: Bearer <token>
 */

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    // Extract token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.',
      });
    }

    // Remove "Bearer " prefix to get raw token
    const token = authHeader.split(' ')[1];

    // Verify token using JWT_SECRET from env
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach decoded user info to request object
    req.user = decoded;
    next();
  } catch (error) {
    // Token is invalid or expired
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token.',
    });
  }
};

module.exports = authMiddleware;
