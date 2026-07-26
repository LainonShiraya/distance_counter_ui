export type GeoPoint = {
  lat: number
  lon: number
}

const toRadians = (value: number): number => (value * Math.PI) / 180

export const getDistanceMeters = (pointA: GeoPoint, pointB: GeoPoint): number => {
  const earthRadius = 6371000 // R = 6371000 m
  const lat1 = toRadians(pointA.lat)
  const lat2 = toRadians(pointB.lat)
  const deltaLat = toRadians(pointB.lat - pointA.lat)
  const deltaLon = toRadians(pointB.lon - pointA.lon)

  const a = Math.sin(deltaLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return earthRadius * c
}
