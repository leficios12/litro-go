const getDistance = async (req, res) => {
  try {
    const { fromLabel, toLabel, fromCoords, toCoords } = req.body

    // use exact coords from frontend — no re-geocoding needed!
    const fromLng = fromCoords[0]
    const fromLat = fromCoords[1]
    const toLng = toCoords[0]
    const toLat = toCoords[1]

    // get route directly using exact coordinates
    const routeRes = await fetch(
      `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${process.env.ORS_API_KEY}&start=${fromLng},${fromLat}&end=${toLng},${toLat}`
    )
    const routeData = await routeRes.json()

    if (!routeData.features || routeData.features.length === 0) {
      return res.status(400).json({ message: 'Could not calculate route' })
    }

    const distanceMeters = routeData.features[0].properties.segments[0].distance
    const distanceKm = (distanceMeters / 1000).toFixed(2)

    const routeCoordinates = routeData.features[0].geometry.coordinates.map(
      coord => [coord[1], coord[0]]
    )

    res.json({
      from: fromLabel,
      to: toLabel,
      distance: parseFloat(distanceKm),
      unit: 'km',
      fromCoords: [fromLat, fromLng],
      toCoords: [toLat, toLng],
      routeCoordinates
    })

  } catch (err) {
    res.status(500).json({ message: 'Failed to calculate distance' })
  }
}

module.exports = { getDistance }