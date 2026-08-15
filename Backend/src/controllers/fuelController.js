const FuelPrice = require('../models/FuelPrice')

// GET all fuel prices
const getAllFuelPrices = async (req, res) => {
  try {
    const prices = await FuelPrice.find()
    res.json(prices)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// UPDATE a fuel price
const updateFuelPrice = async (req, res) => {
  try {
    const { id } = req.params
    const { price } = req.body

    // get current price first
    const current = await FuelPrice.findById(id)

    // calculate change automatically
    const change = price - current.price

    const updated = await FuelPrice.findByIdAndUpdate(
      id,
      {
        previousPrice: current.price,
        price: price,
        change: change,
        updatedAt: Date.now()
      },
      { new: true }
    )

    res.json(updated)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

module.exports = { getAllFuelPrices, updateFuelPrice }