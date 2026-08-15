const API_URL = 'http://localhost:5000/api/fuel'

// GET all fuel prices
export const getFuelPrices = async () => {
  const response = await fetch(API_URL)
  const data = await response.json()
  return data
}

// UPDATE a fuel price
export const updateFuelPrice = async (id, price) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ price })
  })
  const data = await response.json()
  return data
}