const Group = require('../models/groupModel');

exports.createGroup = async (userId, groupName, description, isPrivate) => {
  const group = new Group({ name: groupName, description, isPrivate, members: [userId] });
  await group.save();
  return group._id;
};

exports.joinGroup = async (userId, groupId) => {
  const group = await Group.findById(groupId);
  if (!group) {
    throw new Error('Group not found');
  }
  if (!group.members.includes(userId)) {
    group.members.push(userId);
    await group.save();
  }
};

exports.getPublicGroups = async () => {
  const groups = await Group.find({ isPrivate: false });
  return groups;
};
