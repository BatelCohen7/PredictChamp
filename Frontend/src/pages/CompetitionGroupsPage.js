import React, { useState, useEffect } from 'react';
import api from '../services/api';

const CompetitionGroupsPage = () => {
  const [groups, setGroups] = useState([]);
  const [groupName, setGroupName] = useState('');
  const [description, setDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchPublicGroups = async () => {
      try {
        const response = await api.getPublicGroups();
        setGroups(response.data.groups);
      } catch (error) {
        setError('Failed to fetch groups');
      }
    };
    fetchPublicGroups();
  }, []);

  const handleCreateGroup = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await api.createGroup(token, groupName, description, isPrivate);
      setSuccess('Group created successfully');
    } catch (error) {
      setError('Failed to create group');
    }
  };

  return (
    <div>
      <h1>Competition Groups Page</h1>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <form onSubmit={handleCreateGroup}>
        <div>
          <label>Group Name:</label>
          <input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>
            <input type="checkbox" checked={isPrivate} onChange={(e) => setIsPrivate(e.target.checked)} />
            Private
          </label>
        </div>
        <button type="submit">Create Group</button>
      </form>
      <h2>Public Groups</h2>
      <ul>
        {groups.map(group => (
          <li key={group.id}>{group.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompetitionGroupsPage;
