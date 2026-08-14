const mongoose = require('mongoose')

const fuelPriceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Unleaded 91', 'Premium 95', 'Diesel', 'Diesel Plus']
  },
  price: {
    type: Number,
    required: true
  },
  previousPrice: {
    type: Number,
    default: 0
  },
  change: {
    type: Number,
    default: 0
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('FuelPrice', fuelPriceSchema)