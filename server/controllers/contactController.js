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

    // Basic validation (model also validates)
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, email, and message.',
      });
    }

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
