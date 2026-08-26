import { useEffect } from 'react'
import { MapContainer, TileLayer, Polyline, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'

// fix leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

// custom markers
const markerA = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

const markerB = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

// auto fit map to route
const FitBounds = ({ coordinates }) => {
  const map = useMap()
  useEffect(() => {
    if (coordinates && coordinates.length > 0) {
      map.fitBounds(coordinates, { padding: [40, 40] })
    }
  }, [coordinates, map])
  return null
}

const MapView = ({ fromCoords, toCoords, routeCoordinates }) => {
  return (
    <MapContainer
      center={fromCoords || [12.8797, 121.7740]}
      zoom={10}
      className="w-full h-full rounded-2xl -z-0"
      style={{ minHeight: '400px' }}
    >
      {/* Dark map tile — Waze-like */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />

      {/* Route line */}
      {routeCoordinates && (
        <Polyline
          positions={routeCoordinates}
          color="#10b981"
          weight={4}
          opacity={0.9}
        />
      )}

      {/* Point A marker */}
      {fromCoords && (
        <Marker position={fromCoords} icon={markerA} />
      )}

      {/* Point B marker */}
      {toCoords && (
        <Marker position={toCoords} icon={markerB} />
      )}

      {/* Auto fit */}
      {routeCoordinates && (
        <FitBounds coordinates={routeCoordinates} />
      )}

    </MapContainer>
  )
}

export default MapView;