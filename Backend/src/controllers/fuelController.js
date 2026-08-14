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
        previousPrice: current.price, // save old price
        price: price,                 // set new price
        change: change,               // auto calculated
        updatedAt: Date.now()
      },
      { new: true }
    )

    res.json(updated)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}