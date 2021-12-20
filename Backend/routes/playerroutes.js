const express = require('express');
const playerController = require('../controllers/playercontroller');
const router = express.Router();

router.post('/newplayer', playerController.createNewPlayer);
router.post('/fantasy', playerController.createNewRecent)
module.exports = router;