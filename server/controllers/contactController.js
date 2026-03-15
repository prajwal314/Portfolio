/**
 * ============================================
 * Contact Controller
 * ============================================
 * 
 * MVC Controller for the Contact form.
 * Handles:
 *   - POST /api/contact   → Save a new message
 *   - GET /api/contact     → Get all messages (admin)
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

/**
 * @desc    Get all contact messages (for admin review)
 * @route   GET /api/contact
 * @access  Admin (JWT protected)
 */
const getMessages = async (req, res, next) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitContact,
  getMessages,
};
