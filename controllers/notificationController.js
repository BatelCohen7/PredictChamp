const notificationService = require('../services/notificationService');

exports.manageNotifications = async (req, res) => {
  try {
    const { enableGameReminders, enableResultUpdates, enableSystemMessages } = req.body;
    await notificationService.manageNotifications(req.user.id, enableGameReminders, enableResultUpdates, enableSystemMessages);
    res.status(200).json({ message: 'Notification settings updated' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
