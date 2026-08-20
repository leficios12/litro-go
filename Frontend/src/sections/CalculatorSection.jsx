import { useState, useEffect } from 'react'
import { getFuelPrices } from '../api/fuel'
import { calculateDistance } from '../api/distance'

const CalculatorSection = () => {
  const [fuelPrices, setFuelPrices] = useState([])
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [selectedFuel, setSelectedFuel] = useState('Unleaded 91')
  const [gasPrice, setGasPrice] = useState('')
  const [efficiency, setEfficiency] = useState('')
  const [passengers, setPassengers] = useState(1)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // fetch fuel prices on load
  useEffect(() => {
    getFuelPrices().then(data => {
      setFuelPrices(data)
      // auto fill gas price based on selected fuel
      const fuel = data.find(f => f.type === selectedFuel)
      if (fuel) setGasPrice(fuel.price)
    })
  }, [])

  // update gas price when fuel type changes
  useEffect(() => {
    const fuel = fuelPrices.find(f => f.type === selectedFuel)
    if (fuel) setGasPrice(fuel.price)
  }, [selectedFuel, fuelPrices])

  const handleCalculate = async () => {
    if (!from || !to || !efficiency || !gasPrice) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      // get distance from backend
      const distanceData = await calculateDistance(from, to)

      if (distanceData.message) {
        setError(distanceData.message)
        setLoading(false)
        return
      }

      const distance = distanceData.distance
      const fuelNeeded = distance / parseFloat(efficiency)
      const totalCost = fuelNeeded * parseFloat(gasPrice)
      const costPerPerson = totalCost / parseInt(passengers)

      setResult({
        from: distanceData.from,
        to: distanceData.to,
        distance,
        fuelNeeded: fuelNeeded.toFixed(2),
        totalCost: totalCost.toFixed(2),
        costPerPerson: costPerPerson.toFixed(2),
        passengers
      })

    } catch (err) {
      setError('Failed to calculate. Please try again.')
    }

    setLoading(false)
  }

  const fuelTypes = ['Unleaded 91', 'Premium 95', 'Diesel', 'Diesel Plus']

  return (
    <section id="calculator" className="px-8 py-16 md:px-16 bg-[#0f172a]">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <p className="text-emerald-600 text-xs font-semibold tracking-widest mb-3">
          CALCULATOR
        </p>
        <h2 className="text-white text-3xl font-bold mb-2">
          Trip Calculator
        </h2>
        <p className="text-slate-400 text-sm mb-10">
          Fill in the details below and calculate.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left — Inputs */}
          <div className="flex flex-col gap-4">

            {/* Route */}
            <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-5">
              <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase mb-4">Route</p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-xs font-bold text-black flex-shrink-0">A</div>
                  <input
                    type="text"
                    placeholder="Starting point"
                    value={from}
                    onChange={e => setFrom(e.target.value)}
                    className="flex-1 bg-[#0f172a] border border-slate-600 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">B</div>
                  <input
                    type="text"
                    placeholder="Destination"
                    value={to}
                    onChange={e => setTo(e.target.value)}
                    className="flex-1 bg-[#0f172a] border border-slate-600 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Fuel type */}
            <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-5">
              <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase mb-4">Fuel Type</p>
              <div className="flex flex-wrap gap-2">
                {fuelTypes.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedFuel(type)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold border transition
                      ${selectedFuel === type
                        ? 'bg-emerald-700 border-emerald-500 text-white'
                        : 'bg-transparent border-slate-600 text-slate-400 hover:border-slate-400'
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Vehicle & Cost */}
            <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-5">
              <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase mb-4">Vehicle & Cost</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <label className="text-slate-400 text-xs">Gas price (₱ / liter)</label>
                  <input
                    type="number"
                    value={gasPrice}
                    onChange={e => setGasPrice(e.target.value)}
                    className="bg-[#0f172a] border border-slate-600 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-slate-400 text-xs">Fuel efficiency (km/L)</label>
                  <input
                    type="number"
                    placeholder="e.g. 12"
                    value={efficiency}
                    onChange={e => setEfficiency(e.target.value)}
                    className="bg-[#0f172a] border border-slate-600 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            </div>

            {/* Group split */}
            <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-5">
              <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase mb-4">Group Split</p>
              <div className="flex flex-col gap-2">
                <label className="text-slate-400 text-xs">Number of passengers</label>
                <input
                  type="number"
                  min="1"
                  value={passengers}
                  onChange={e => setPassengers(e.target.value)}
                  className="bg-[#0f172a] border border-slate-600 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            {/* Calculate button */}
            <button
              onClick={handleCalculate}
              disabled={loading}
              className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition disabled:opacity-50"
            >
              {loading ? 'Calculating...' : 'Calculate trip cost'}
            </button>

          </div>

          {/* Right — Results */}
          <div className="flex flex-col gap-4">
            {!result ? (
              <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full min-h-64">
                <p className="text-4xl mb-4">⛽</p>
                <p className="text-slate-400 text-sm">Fill in the details and hit calculate to see your trip breakdown.</p>
              </div>
            ) : (
              <div className="bg-[#1e293b] border border-slate-700 rounded-2xl p-5 flex flex-col gap-4">

                {/* Route summary */}
                <div>
                  <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase mb-2">Trip Summary</p>
                  <p className="text-white text-sm">{result.from} → {result.to}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-3">
                    <p className="text-slate-400 text-xs mb-1">Distance</p>
                    <p className="text-white text-xl font-bold">{result.distance}</p>
                    <p className="text-slate-500 text-xs">km</p>
                  </div>
                  <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-3">
                    <p className="text-slate-400 text-xs mb-1">Fuel needed</p>
                    <p className="text-white text-xl font-bold">{result.fuelNeeded}</p>
                    <p className="text-slate-500 text-xs">liters</p>
                  </div>
                  <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-3">
                    <p className="text-slate-400 text-xs mb-1">Total cost</p>
                    <p className="text-white text-xl font-bold">₱{result.totalCost}</p>
                    <p className="text-slate-500 text-xs">{selectedFuel}</p>
                  </div>
                </div>

                {/* Split */}
                <div className="bg-[#0f172a] border border-slate-700 rounded-xl p-4 flex items-center justify-between">
                  <p className="text-slate-400 text-sm">Each passenger pays</p>
                  <p className="text-emerald-400 text-2xl font-bold">₱{result.costPerPerson}</p>
                </div>

                {/* Passengers */}
                <div className="flex items-center gap-2">
                  {Array.from({ length: result.passengers }).map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-emerald-900 border border-emerald-700 flex items-center justify-center text-xs font-bold text-emerald-400">
                      {i + 1}
                    </div>
                  ))}
                  <p className="text-slate-500 text-xs ml-2">{result.passengers} passenger{result.passengers > 1 ? 's' : ''}</p>
                </div>

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default CalculatorSection