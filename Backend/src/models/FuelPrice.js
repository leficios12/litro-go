const mongoose = require('mongoose')

const fuelPriceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Unleaded 91', 'Premium 95', 'Diesel', 'Diesel Premium']
  },
  price: {
    type: Number,
    required: true
  },
  change: {
    type: Number,
    required: true
  },
  min: {
    type: Number,
    required: true
  },
  max: {
    type: Number,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('FuelPrice', fuelPriceSchema)