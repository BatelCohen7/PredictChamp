const express = require('express');
const leaderboardController = require('../controllers/leaderboardController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/live', authMiddleware, leaderboardController.getLiveLeaderboard);

module.exports = router;
