import { useState, useEffect } from 'react';
import { getFuelPrices } from '../api/fuel';
import FuelCard from '../components/FuelCard';

const GasWeekSection = () => {
  const [fuelPrices, setFuelPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFuelPrices()
      .then(data => {
        setFuelPrices(data)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to load fuel prices')
        setLoading(false)
      })
  }, []);

  return (
    <section className="px-8 py-16 mb-10 md:px-16 bg-[#0a1020]">
      <div className="mx-auto max-w-6xl pb-9">
        
        <p className="text-emerald-600 text-xs font-semibold tracking-widest mb-3">
          THIS WEEK'S PRICES
        </p>
        <h2 className="text-white text-3xl font-bold mb-2">
          DOE reference prices
        </h2>
        <p className="text-slate-400 text-sm mb-10">
          Updated weekly based on DOE Philippines advisories
        </p>

        {loading && (
          <p className="text-slate-400 text-sm">Loading prices...</p>
        )}

        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {fuelPrices.map(fuel => (
              <FuelCard
                key={fuel._id}
                type={fuel.type}
                price={fuel.price}
                previousPrice={fuel.previousPrice}
                change={fuel.change}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default GasWeekSection;