const Match = require('../models/matchModel');

exports.getUpcomingMatches = async () => {
  const matches = await Match.find({ date: { $gte: new Date() } }).sort('date');
  return matches;
};

exports.submitPrediction = async (userId, matchId, prediction) => {
  const match = await Match.findById(matchId);
  if (!match) {
    throw new Error('Match not found');
  }
  match.predictions.push({ user: userId, prediction });
  await match.save();
};
