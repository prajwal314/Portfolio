/**
 * ============================================
 * Contact Routes
 * ============================================
 * 
 * Public routes:
 *   POST /api/contact → Submit a contact message
 */

const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contactController');

// Public — anyone can submit a contact message
router.post('/', submitContact);

module.exports = router;
