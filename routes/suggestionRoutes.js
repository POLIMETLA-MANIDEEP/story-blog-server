const express = require('express');
const { submitSuggestion, getSuggestions } = require('../controllers/suggestionController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, submitSuggestion);
router.get('/', protect, getSuggestions);

module.exports = router;