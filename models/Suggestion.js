const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema(
  {
    idea: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Suggestion', suggestionSchema);