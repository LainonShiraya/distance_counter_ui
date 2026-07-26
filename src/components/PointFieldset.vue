<script setup lang="ts">
import CoordinateInput from './CoordinateInput.vue'
import type { GeoPoint } from '../utils/distance'

const props = defineProps<{
  title: string
  point: GeoPoint
  namePrefix: string
}>()

const emit = defineEmits<{
  (event: 'update:point', value: GeoPoint): void
}>()

const updatePoint = <K extends keyof GeoPoint>(key: K, value: number) => {
  emit('update:point', { ...props.point, [key]: value })
}
</script>

<template>
  <fieldset class="point-card">
    <legend>{{ title }}</legend>

    <CoordinateInput
      label="Szerokość (lat)"
      :name="`${namePrefix}-lat`"
      :modelValue="point.lat"
      step="0.000001"
      :min="-90"
      :max="90"
      @update:modelValue="value => updatePoint('lat', value)"
    />

    <CoordinateInput
      label="Długość (lon)"
      :name="`${namePrefix}-lon`"
      :modelValue="point.lon"
      step="0.000001"
      :min="-180"
      :max="180"
      @update:modelValue="value => updatePoint('lon', value)"
    />
  </fieldset>
</template>

<style scoped lang="scss">
.point-card {
  border: 1px solid #cbd5e1;
  border-radius: 1rem;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
}

.point-card legend {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
}
</style>
