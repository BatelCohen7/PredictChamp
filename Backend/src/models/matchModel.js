const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  teamA: { type: String, required: true },
  teamB: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  predictions: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    prediction: { teamA: Number, teamB: Number }
  }]
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
