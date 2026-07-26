import type { GeoPoint } from '../types/distance'

export const validatePoint = (point: GeoPoint, name: string): string => {
  if (Number.isNaN(point.lat) || Number.isNaN(point.lon)) {
    return `${name}: wpisz poprawne liczby.`
  }

  if (point.lat < -90 || point.lat > 90) {
    return `${name}: szerokość musi być między -90 a 90.`
  }

  if (point.lon < -180 || point.lon > 180) {
    return `${name}: długość musi być między -180 a 180.`
  }

  return ''
}