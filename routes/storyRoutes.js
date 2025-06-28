const express = require('express');
const { uploadStory, getAllStories, getStoryById } = require('../controllers/storyControlller');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/upload', protect, uploadStory); // ✅ No multer anymore
router.get('/', getAllStories);

router.get('/:id', getStoryById);


module.exports = router;