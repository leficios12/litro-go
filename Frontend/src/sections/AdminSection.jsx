import { useState, useEffect } from 'react'
import { getFuelPrices, updateFuelPrice } from '../api/fuel'

const AdminSection = () => {
  const [fuelPrices, setFuelPrices] = useState([]);
  const [newPrices, setNewPrices] = useState({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    getFuelPrices()
      .then(data => {
        setFuelPrices(data)
        setLoading(false)
      })
  }, [])

  const handleChange = (id, value) => {
    setNewPrices(prev => ({ ...prev, [id]: value }))
  }

  const handleUpdate = async (id) => {
    const price = parseFloat(newPrices[id])
    if (!price) return alert('Please enter a valid price')

    try {
      const updated = await updateFuelPrice(id, price)
      setFuelPrices(prev =>
        prev.map(fuel => fuel._id === id ? updated : fuel)
      )
      setMessage(`${updated.type} updated to ₱${updated.price}`)
      setTimeout(() => setMessage(null), 3000)
    } catch (err) {
      setMessage('Failed to update price')
    }
  }

  return (
    <section className="px-8 py-16 md:px-16 bg-[#0a1020] min-h-screen">
      <div className="mx-auto max-w-3xl">

        <p className="text-emerald-600 text-xs font-semibold tracking-widest mb-3">
          ADMIN
        </p>
        <h2 className="text-white text-3xl font-bold mb-2">
          Update fuel prices
        </h2>
        <p className="text-slate-400 text-sm mb-10">
          Update every Tuesday based on DOE Philippines advisories.
        </p>

        {message && (
          <p className="text-sm mb-6 text-emerald-400">{message}</p>
        )}

        {loading && (
          <p className="text-slate-400 text-sm">Loading...</p>
        )}

        {!loading && (
          <div className="flex flex-col gap-4">
            {fuelPrices.map(fuel => (
              <div
                key={fuel._id}
                className="bg-[#1e293b] border border-slate-700 rounded-2xl p-5 flex items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase mb-1">
                    {fuel.type}
                  </p>
                  <p className="text-white text-2xl font-bold">
                    ₱{fuel.price.toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    placeholder="New price"
                    value={newPrices[fuel._id] || ''}
                    onChange={e => handleChange(fuel._id, e.target.value)}
                    className="bg-[#0f172a] border border-slate-600 rounded-lg px-4 py-2 text-white text-sm w-32 focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    onClick={() => handleUpdate(fuel._id)}
                    className="bg-emerald-700 hover:bg-emerald-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition"
                  >
                    Update
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default AdminSection;