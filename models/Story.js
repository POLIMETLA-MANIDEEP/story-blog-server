const mongoose = require('mongoose');

const storySchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    genre: String,
    fileUrl: String,
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Story', storySchema);