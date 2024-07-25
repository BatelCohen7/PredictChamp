import React, { useState, useEffect } from 'react';
import api from '../services/api';

const MatchPredictionPage = () => {
  const [matches, setMatches] = useState([]);
  const [predictions, setPredictions] = useState({});
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await api.getUpcomingMatches();
        setMatches(response.data.matches);
      } catch (error) {
        setError('Failed to fetch matches');
      }
    };
    fetchMatches();
  }, []);

  const handlePredictionChange = (matchId, team, value) => {
    setPredictions({
      ...predictions,
      [matchId]: {
        ...predictions[matchId],
        [team]: value
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      for (const matchId in predictions) {
        await api.submitPrediction(token, matchId, predictions[matchId]);
      }
      setSuccess('Predictions submitted successfully');
    } catch (error) {
      setError('Failed to submit predictions');
    }
  };

  return (
    <div>
      <h1>Match Prediction Page</h1>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <form onSubmit={handleSubmit}>
        {matches.map(match => (
          <div key={match.id}>
            <h3>{match.teamA} vs {match.teamB}</h3>
            <label>Team A:</label>
            <input
              type="number"
              value={predictions[match.id]?.teamA || ''}
              onChange={(e) => handlePredictionChange(match.id, 'teamA', e.target.value)}
            />
            <label>Team B:</label>
            <input
              type="number"
              value={predictions[match.id]?.teamB || ''}
              onChange={(e) => handlePredictionChange(match.id, 'teamB', e.target.value)}
            />
          </div>
        ))}
        <button type="submit">Submit Predictions</button>
      </form>
    </div>
  );
};

export default MatchPredictionPage;
