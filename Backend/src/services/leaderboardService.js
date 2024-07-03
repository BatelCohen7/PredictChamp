const Leaderboard = require('../models/leaderboardModel');

exports.getLiveLeaderboard = async () => {
  const leaderboard = await Leaderboard.find().sort('-points').limit(10).populate('user', 'username profileImage');
  return leaderboard;
};
