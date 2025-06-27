const Suggestion = require('../models/Suggestion');

exports.submitSuggestion = async (req, res) => {
  try {
    const newSuggestion = await Suggestion.create({
      idea: req.body.idea,
      user: req.user._id
    });
    res.status(201).json(newSuggestion);
  } catch (err) {
    res.status(500).json({ message: 'Failed to submit suggestion' });
  }
};

exports.getSuggestions = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    const suggestions = await Suggestion.find().populate('user', 'name email');
    res.json(suggestions);
  } catch (err) {
    res.status(500).json({ message: 'Failed to load suggestions' });
  }
};
