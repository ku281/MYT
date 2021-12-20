const express = require('express');
const { check } = require('express-validator');
const venueController = require('../controllers/venuecontroller');
const router = express.Router();

router.post('/newvenue', venueController.createNewVenue);


module.exports = router;