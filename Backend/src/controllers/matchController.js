const matchService = require('../services/matchService');

exports.getUpcomingMatches = async (req, res) => {
  try {
    const matches = await matchService.getUpcomingMatches();
    res.status(200).json({ matches });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.submitPrediction = async (req, res) => {
  try {
    const { matchId, prediction } = req.body;
    await matchService.submitPrediction(req.user.id, matchId, prediction);
    res.status(200).json({ message: 'Prediction submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
