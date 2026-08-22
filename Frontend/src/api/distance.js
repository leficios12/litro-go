const API_URL = 'http://localhost:5000/api/distance'

export const calculateDistance = async (fromLabel, toLabel, fromCoords, toCoords) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ fromLabel, toLabel, fromCoords, toCoords})
  })
  const data = await response.json()
  return data
}