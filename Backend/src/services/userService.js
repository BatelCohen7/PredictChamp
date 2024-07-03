const User = require('../models/userModel');

exports.getProfile = async (userId) => {
  const user = await User.findById(userId).select('-password');
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

exports.updateProfile = async (userId, username, profileImage) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }
  user.username = username;
  user.profileImage = profileImage;
  await user.save();
};
