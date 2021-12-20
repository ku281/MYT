const express = require('express');
const { check } = require('express-validator');
const playerController = require('../controllers/playercontroller');
const router = express.Router();

router.post('/newplayer', playerController.createNewPlayer);


module.exports = router;