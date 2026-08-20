const API_URL = 'http://localhost:5000/api/distance'

export const calculateDistance = async (from, to) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ from, to })
  })
  const data = await response.json()
  return data
}