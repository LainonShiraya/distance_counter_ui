<script setup lang="ts">
import { reactive, ref } from 'vue'
import PointFieldset from './PointFieldset.vue'
import DistanceResult from './DistanceResult.vue'
import type { GeoPoint } from '../utils/distance'
import { getDistanceMeters } from '../utils/distance'
import { validatePoint } from '@/utils/validations.ts'

const points = reactive<{ A: GeoPoint; B: GeoPoint }>({
  A: { lat: 0, lon: 0 },
  B: { lat: 0, lon: 0 },
})
const distanceMeters = ref<number | null>(null)
const errorMessage = ref('')

const calculate = () => {
  errorMessage.value = validatePoint(points.A, 'Punkt A') || validatePoint(points.B, 'Punkt B')

  if (errorMessage.value) {
    distanceMeters.value = null
    return
  }

  distanceMeters.value = getDistanceMeters(points.A, points.B)
}

const updatePointA = (value: GeoPoint) => {
  points.A = value
}

const updatePointB = (value: GeoPoint) => {
  points.B = value
}
</script>

<template>
  <section class="distance-calculator">
    <form class="distance-form" @submit.prevent="calculate">
      <div class="columns">
        <PointFieldset
          title="Punkt A"
          namePrefix="pointA"
          :point="points.A"
          @update:point="updatePointA"
        />

        <PointFieldset
          title="Punkt B"
          namePrefix="pointB"
          :point="points.B"
          @update:point="updatePointB"
        />
      </div>

      <div class="actions">
        <button type="submit" class="primary-button">Oblicz</button>
      </div>
    </form>

    <DistanceResult :distanceMeters="distanceMeters" :errorMessage="errorMessage" />
  </section>
</template>

<style scoped lang="scss">
.distance-calculator {
  display: grid;
  gap: 1.5rem;
  background: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 1.25rem;
  padding: 1.5rem;
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.08);
}

.distance-form {
  display: grid;
  gap: 1.25rem;
}

.columns {
  display: grid;
  gap: 1rem;
}

@media (min-width: 720px) {
  .columns {
    grid-template-columns: 1fr 1fr;
  }
}

.point-card {
  border: 1px solid #cbd5e1;
  border-radius: 1rem;
  background: #f8fafc;
  display:flex;
  flex-direction: column;
  padding:1rem;
  gap:1rem;
}

.point-card legend {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.9rem;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.primary-button {
  width: fit-content;
  border: none;
  border-radius: 999px;
  padding: 1rem 1.85rem;
  background: #2563eb;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;
}

.primary-button:hover {
  background: #1d4ed8;
}
</style>
