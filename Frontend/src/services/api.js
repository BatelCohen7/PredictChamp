import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth APIs
export const login = async (email, password) => {
  return await api.post('/auth/login', { email, password });
};

export const signup = async (name, email, password, confirmPassword, birthdate) => {
  return await api.post('/auth/signup', { name, email, password, confirmPassword, birthdate });
};

export const verifyToken = async (token) => {
  return await api.get('/auth/verify-token', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// User APIs
export const getUserProfile = async (token) => {
  return await api.get('/user/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateUserProfile = async (token, username, profileImage) => {
  return await api.put('/user/profile', { username, profileImage }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Match APIs
export const getUpcomingMatches = async () => {
  return await api.get('/matches/upcoming');
};

export const submitPrediction = async (token, matchId, prediction) => {
  return await api.post('/matches/predict', { matchId, prediction }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Competition APIs
export const createGroup = async (token, groupName, description, isPrivate) => {
  return await api.post('/competition/group', { groupName, description, isPrivate }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const joinGroup = async (token, groupId) => {
  return await api.post('/competition/group/join', { groupId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getPublicGroups = async () => {
  return await api.get('/competition/groups/public');
};

// Leaderboard APIs
export const getLiveLeaderboard = async () => {
  return await api.get('/leaderboard/live');
};

// Notification APIs
export const manageNotifications = async (token, enableGameReminders, enableResultUpdates, enableSystemMessages) => {
  return await api.post('/notifications/manage', { enableGameReminders, enableResultUpdates, enableSystemMessages }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default api;
