const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    story: { type: mongoose.Schema.Types.ObjectId, ref: 'Story' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    review: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Review', reviewSchema);