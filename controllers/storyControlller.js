const Story = require('../models/Story');

exports.uploadStory = async (req, res) => {
  try {
    const { title, description, genre } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const story = await Story.create({
      title,
      description,
      genre,
      fileUrl: `/uploads/${req.file.filename}`,
      uploadedBy: req.user._id
    });

    res.status(201).json({ message: 'Story uploaded', story });
  } catch (err) {
    res.status(500).json({ message: 'Upload failed', error: err.message });
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
