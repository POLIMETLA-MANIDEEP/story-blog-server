const express = require('express');
const { uploadStory, getAllStories } = require('../controllers/storyControlller');
const protect = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

router.post('/upload', protect, upload.single('storyFile'), uploadStory);

router.get('/', getAllStories);


module.exports = router;