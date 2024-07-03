const express = require('express');
const competitionController = require('../controllers/competitionController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/group', authMiddleware, competitionController.createGroup);
router.post('/group/join', authMiddleware, competitionController.joinGroup);
router.get('/groups/public', authMiddleware, competitionController.getPublicGroups);

module.exports = router;
