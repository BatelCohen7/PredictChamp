const express = require('express');
const notificationController = require('../controllers/notificationController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/manage', authMiddleware, notificationController.manageNotifications);

module.exports = router;
