/**
 * ============================================
 * Contact Controller
 * ============================================
 * 
 * MVC Controller for the Contact form.
 * Handles:
 *   - POST /api/contact   → Save a new message
 * 
 * Messages are stored in MongoDB so the portfolio
 * owner can review them later.
 * 
 * Note: Input validation is performed in routes/contactRoutes.js
 */

const Contact = require('../models/Contact');

/**
 * @desc    Submit a contact message
 * @route   POST /api/contact
 * @access  Public
 */
const submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // Create and save contact message
    const contact = await Contact.create({ name, email, message });

    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContact,
};
