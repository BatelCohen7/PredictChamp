const express = require('express');
const matchController = require('../controllers/matchController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/upcoming', authMiddleware, matchController.getUpcomingMatches);
router.post('/predict', authMiddleware, matchController.submitPrediction);

module.exports = router;
