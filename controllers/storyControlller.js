const Story = require('../models/Story');

exports.uploadStory = async (req, res) => {
  try {
    const { title, description, genre, content } = req.body;

    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    if (!title || !description || !genre || !content) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const story = await Story.create({
      title,
      description,
      genre,
      content,
      uploadedBy: req.user._id
    });

    res.status(201).json({ message: 'Story created successfully', story });
  } catch (err) {
    res.status(500).json({ message: 'Story creation failed', error: err.message });
  }
};

exports.getAllStories = async (req, res) => {
  try {
    const stories = await Story.find().sort({ createdAt: -1 });
    res.json(stories);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch stories' });
  }
};

exports.getStoryById = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id).populate('uploadedBy', 'name email');
    if (!story) {
      return res.status(404).json({ message: 'Story not found' });
    }
    res.json(story);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch story', error: err.message });
  }
};
