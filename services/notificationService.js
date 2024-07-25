const User = require('../models/userModel');

exports.manageNotifications = async (userId, enableGameReminders, enableResultUpdates, enableSystemMessages) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }
  user.notifications = { enableGameReminders, enableResultUpdates, enableSystemMessages };
  await user.save();
};
