const express = require('express');
const router = express.Router();
const { getDistance } = require('../controllers/distanceController');

router.post('/', getDistance);

module.exports = router;