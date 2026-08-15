const mongoose = require('mongoose');
const dotenv = require('dotenv');
const FuelPrice = require('./models/FuelPrice');

dotenv.config();

const fuelPrices = [
  {
    type: 'Unleaded 91',
    price: 82.50,
    previousPrice: 87.26,
    change: -4.76
  },
  {
    type: 'Premium 95',
    price: 88.50,
    previousPrice: 93.41,
    change: -4.91
  },
  {
    type: 'Diesel',
    price: 78.85,
    previousPrice: 77.87,
    change: 0.98
  },
  {
    type: 'Diesel Plus',
    price: 85.00,
    previousPrice: 93.37,
    change: -8.37
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected')
    await FuelPrice.deleteMany()
    await FuelPrice.insertMany(fuelPrices)
    console.log('Fuel prices seeded')
    process.exit()
  })
  .catch((err) => console.log(err));