/**
 * ============================================
 * Centralized Error Handling Middleware
 * ============================================
 * 
 * Catches all errors thrown in routes/controllers
 * and returns a consistent JSON error response.
 * 
 * This is the LAST middleware in the Express chain.
 * Any error passed via next(error) ends up here.
 * 
 * Error response format:
 * {
 *   success: false,
 *   message: "Error description",
 *   stack: "..." (only in development)
 * }
 */

const errorHandler = (err, req, res, next) => {
  // Default to 500 if no status code was set
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  // Handle Mongoose validation errors
  if (err.name === 'ValidationError') {
    statusCode = 400;
    // Collect all field-level validation messages
    const messages = Object.values(err.errors).map((val) => val.message);
    message = messages.join('. ');
  }

  // Handle Mongoose duplicate key errors
  if (err.code === 11000) {
    statusCode = 400;
    message = 'Duplicate field value entered.';
  }

  // Handle invalid MongoDB ObjectId
  if (err.name === 'CastError') {
    statusCode = 400;
    message = `Invalid ${err.path}: ${err.value}`;
  }

  // Handle JWT errors
  if (err.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Invalid token.';
  }

  if (err.name === 'TokenExpiredError') {
    statusCode = 401;
    message = 'Token has expired.';
  }

  res.status(statusCode).json({
    success: false,
    message,
    // Include stack trace only in development mode
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;
