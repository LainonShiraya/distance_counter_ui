import { describe, expect, it } from 'vitest'
import { getDistanceMeters } from '../utils/distance'

describe('getDistanceMeters', () => {
  it('returns 0 for identical coordinates', () => {
    const point = { lat: 52.2297, lon: 21.0122 }
    expect(getDistanceMeters(point, point)).toBeCloseTo(0, 6)
  })

  it.each([
    ['Warszawa → Kraków', { lat: 52.2297, lon: 21.0122 }, { lat: 50.0647, lon: 19.9450 }, 250000, 260000],
    ['Gdańsk → Warszawa', { lat: 54.3520, lon: 18.6466 }, { lat: 52.2297, lon: 21.0122 }, 280000, 320000],
  ])('%s', (_label, from, to, min, max) => {
    const distance = getDistanceMeters(from, to)

    expect(distance).toBeGreaterThan(min)
    expect(distance).toBeLessThan(max)
  })
})
