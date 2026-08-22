import { useState, useEffect, useRef } from 'react'

const LocationInput = ({ placeholder, value, onChange, badge, badgeColor }) => {
  const [query, setQuery] = useState(value || '')
  const [suggestions, setSuggestions] = useState([])
  const [showDropdown, setShowDropdown] = useState(false)
  const [loading, setLoading] = useState(false)
  const debounceRef = useRef(null)
  const wrapperRef = useRef(null)

  const API_KEY = import.meta.env.VITE_ORS_API_KEY

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const fetchSuggestions = async (text) => {
    if (text.length < 3) {
      setSuggestions([])
      return
    }

    setLoading(true)
    try {
      const res = await fetch(
        `https://api.openrouteservice.org/geocode/autocomplete?api_key=${API_KEY}&text=${encodeURIComponent(text)}&boundary.country=PHL&size=5`
      )
      const data = await res.json()
      setSuggestions(data.features || [])
      setShowDropdown(true)
    } catch (err) {
      setSuggestions([])
    }
    setLoading(false)
  }

  const handleChange = (e) => {
    const text = e.target.value
    setQuery(text)

    // debounce — wait 100ms after user stops typing
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      fetchSuggestions(text)
    }, 100)
  }

  const handleSelect = (feature) => {
    const label = feature.properties.label
    const coords = feature.geometry.coordinates // [lng, lat]
    setQuery(label)
    setShowDropdown(false)
    setSuggestions([])
    onChange({ label, coords })
  }

  return (
    <div className="flex items-center gap-3 relative" ref={wrapperRef}>

      {/* Badge */}
      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${badgeColor}`}>
        {badge}
      </div>

      {/* Input + Dropdown */}
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleChange}
          onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
          className="w-full bg-[#0f172a] border border-slate-600 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-emerald-500"
        />

        {/* Loading indicator */}
        {loading && (
          <div className="absolute right-3 top-2.5 text-slate-400 text-xs">...</div>
        )}

        {/* Dropdown */}
        {showDropdown && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-[#1e293b] border border-slate-600 rounded-xl overflow-hidden z-50 shadow-xl">
            {suggestions.map((feature, i) => (
              <button
                key={i}
                onClick={() => handleSelect(feature)}
                className="w-full text-left px-4 py-3 text-sm text-slate-300 hover:bg-[#334155] transition border-b border-slate-700 last:border-0"
              >
                <span className="text-white">{feature.properties.name}</span>
                <span className="text-slate-500 text-xs block mt-0.5">{feature.properties.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default LocationInput