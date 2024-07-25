const leaderboardService = require('../services/leaderboardService');

exports.getLiveLeaderboard = async (req, res) => {
  try {
    const leaderboard = await leaderboardService.getLiveLeaderboard();
    res.status(200).json({ leaderboard });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
