const competitionService = require('../services/competitionService');

exports.createGroup = async (req, res) => {
  try {
    const { groupName, description, isPrivate } = req.body;
    const groupId = await competitionService.createGroup(req.user.id, groupName, description, isPrivate);
    res.status(201).json({ groupId, message: 'Group created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.joinGroup = async (req, res) => {
  try {
    const { groupId } = req.body;
    await competitionService.joinGroup(req.user.id, groupId);
    res.status(200).json({ message: 'Joined group successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPublicGroups = async (req, res) => {
  try {
    const groups = await competitionService.getPublicGroups();
    res.status(200).json({ groups });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
