/**
 * ============================================
 * Contact Model
 * ============================================
 * 
 * Stores messages submitted via the contact form.
 * Messages are saved in MongoDB for the portfolio
 * owner to review later.
 * 
 * Fields:
 *   - name: Sender's name
 *   - email: Sender's email address
 *   - message: The message content
 *   - read: Whether the message has been read
 *   - createdAt: Auto-generated timestamp
 */

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [50, 'Name cannot exceed 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid email address',
      ],
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxlength: [1000, 'Message cannot exceed 1000 characters'],
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Contact', contactSchema);
