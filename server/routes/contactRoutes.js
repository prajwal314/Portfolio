/**
 * ============================================
 * Contact Routes
 * ============================================
 * 
 * Public routes:
 *   POST /api/contact → Submit a contact message
 * 
 * Protected routes:
 *   GET /api/contact  → View all messages (admin)
 */

const express = require('express');
const router = express.Router();
const { submitContact, getMessages } = require('../controllers/contactController');
const authMiddleware = require('../middleware/auth');

// Public — anyone can submit a contact message
router.post('/', submitContact);

// Admin-protected — only admin can view messages
router.get('/', authMiddleware, getMessages);

module.exports = router;
