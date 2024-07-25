import React, { useState, useEffect } from 'react';
import api from '../services/api';

const NotificationsPage = () => {
  const [settings, setSettings] = useState({
    enableGameReminders: false,
    enableResultUpdates: false,
    enableSystemMessages: false
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    // Fetch current notification settings if needed
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSettings({ ...settings, [name]: checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await api.manageNotifications(token, settings.enableGameReminders, settings.enableResultUpdates, settings.enableSystemMessages);
      setSuccess('Notification settings updated');
    } catch (error) {
      setError('Failed to update settings');
    }
  };

  return (
    <div>
      <h1>Notifications Page</h1>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input type="checkbox" name="enableGameReminders" checked={settings.enableGameReminders} onChange={handleChange} />
            Enable Game Reminders
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="enableResultUpdates" checked={settings.enableResultUpdates} onChange={handleChange} />
            Enable Result Updates
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="enableSystemMessages" checked={settings.enableSystemMessages} onChange={handleChange} />
            Enable System Messages
          </label>
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default NotificationsPage;
