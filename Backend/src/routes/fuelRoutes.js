const express = require('express')
const router = express.Router()
const { getAllFuelPrices, updateFuelPrice } = require('../controllers/fuelController')

// GET 
router.get('/', getAllFuelPrices)

// UPDATE 
router.put('/:id', updateFuelPrice)

module.exports = router;
