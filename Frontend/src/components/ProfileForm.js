import React, { useState, useEffect } from 'react';
import api from '../services/api';

const ProfileForm = () => {
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.getUserProfile(token);
        setUsername(response.data.username);
        setProfileImage(response.data.profileImage);
      } catch (error) {
        setError('Failed to fetch profile');
      }
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await api.updateUserProfile(token, username, profileImage);
      setSuccess('Profile updated successfully');
    } catch (error) {
      setError('Update failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Profile</h2>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Profile Image URL:</label>
        <input type="text" value={profileImage} onChange={(e) => setProfileImage(e.target.value)} />
      </div>
      <button type="submit">Update Profile</button>
    </form>
  );
};

export default ProfileForm;
