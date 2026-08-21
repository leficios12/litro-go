const getDistance = async (req, res) => {
  try {
    const { from, to } = req.body

    // Geocode "from" location
        //Boundary phl
    const fromRes = await fetch(
      `https://api.openrouteservice.org/geocode/search?api_key=${process.env.ORS_API_KEY}&text=${encodeURIComponent(from)}&size=1&boundary.country=PHL`
    )
    const fromData = await fromRes.json()

    if (!fromData.features || fromData.features.length === 0) {
      return res.status(400).json({ message: 'Starting point not found in the Philippines' })
    }

    const fromCoords = fromData.features[0].geometry.coordinates

    // Geocode "to" location 
    //Boundary phl
    const toRes = await fetch(
      `https://api.openrouteservice.org/geocode/search?api_key=${process.env.ORS_API_KEY}&text=${encodeURIComponent(to)}&size=1&boundary.country=PHL`
    )
    const toData = await toRes.json()

    if (!toData.features || toData.features.length === 0) {
      return res.status(400).json({ message: 'Destination not found in the Philippines' })
    }

    const toCoords = toData.features[0].geometry.coordinates

    // Get route
    const routeRes = await fetch(
      `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${process.env.ORS_API_KEY}&start=${fromCoords[0]},${fromCoords[1]}&end=${toCoords[0]},${toCoords[1]}`
    )
    const routeData = await routeRes.json()

    if (!routeData.features || routeData.features.length === 0) {
      return res.status(400).json({ message: 'Could not calculate route' })
    }

    const distanceMeters = routeData.features[0].properties.segments[0].distance
    const distanceKm = (distanceMeters / 1000).toFixed(2)

    // Extract route geometry for map
    const routeCoordinates = routeData.features[0].geometry.coordinates.map(
      coord => [coord[1], coord[0]] 
    )

    res.json({
      from: fromData.features[0].properties.label,
      to: toData.features[0].properties.label,
      distance: parseFloat(distanceKm),
      unit: 'km',
      fromCoords: [fromCoords[1], fromCoords[0]], 
      toCoords: [toCoords[1], toCoords[0]],      
      routeCoordinates                            
    })

  } catch (err) {
    res.status(500).json({ message: 'Failed to calculate distance' })
  }
}

module.exports = { getDistance }