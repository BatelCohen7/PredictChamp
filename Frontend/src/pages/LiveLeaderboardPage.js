import React, { useState, useEffect } from 'react';
import api from '../services/api';

const LiveLeaderboardPage = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await api.getLiveLeaderboard();
        setLeaderboard(response.data.leaderboard);
      } catch (error) {
        setError('Failed to fetch leaderboard');
      }
    };
    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h1>Live Leaderboard Page</h1>
      {error && <p>{error}</p>}
      <ul>
        {leaderboard.map(user => (
          <li key={user.userId}>
            {user.username}: {user.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LiveLeaderboardPage;
