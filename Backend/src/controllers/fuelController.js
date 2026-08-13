const FuelPrice = require('../models/FuelPrice')

// GET 
const getAllFuelPrices = async (req, res) => {
  try {
    const prices = await FuelPrice.find()
    res.json(prices)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// UPDATE 
const updateFuelPrice = async (req, res) => {
  try {
    const { id } = req.params
    const updated = await FuelPrice.findByIdAndUpdate(id, req.body, { new: true })
    res.json(updated)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = { getAllFuelPrices, updateFuelPrice }