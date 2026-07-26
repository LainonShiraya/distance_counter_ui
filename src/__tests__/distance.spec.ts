import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import DistanceCalculator from '@/components/DistanceCalculator.vue'
import { post } from '@/api/api'

vi.mock('@/api/api', () => ({
  post: vi.fn(),
}))

const mockedPost = vi.mocked(post)

const mountCalculator = () => mount(DistanceCalculator)

describe('DistanceCalculator', () => {
  beforeEach(() => {
    mockedPost.mockReset()
  })

  it('shows validation error and does not call API for invalid latitude', async () => {
    const wrapper = mountCalculator()

    await wrapper.find('input[name="pointA-lat"]').setValue('91')
    await wrapper.find('form').trigger('submit')

    expect(mockedPost).not.toHaveBeenCalled()
    expect(wrapper.text()).toContain('Punkt A:')
    expect(wrapper.text()).toContain('90')
  })

  it('sends entered points and displays returned distance', async () => {
    mockedPost.mockResolvedValue({
      data: {
        distanceMeters: 1000,
        distanceKilometers: 1,
      },
      status: 200,
    })
    const wrapper = mountCalculator()

    await wrapper.find('input[name="pointA-lat"]').setValue('52.2297')
    await wrapper.find('input[name="pointA-lon"]').setValue('21.0122')
    await wrapper.find('input[name="pointB-lat"]').setValue('50.0647')
    await wrapper.find('input[name="pointB-lon"]').setValue('19.945')
    await wrapper.find('form').trigger('submit')

    expect(mockedPost).toHaveBeenCalledWith('/getDistance.php', {
      pointA: { lat: 52.2297, lon: 21.0122 },
      pointB: { lat: 50.0647, lon: 19.945 },
    })
    expect(wrapper.text()).toContain('1000 m')
    expect(wrapper.text()).toContain('1 km')
  })
})
