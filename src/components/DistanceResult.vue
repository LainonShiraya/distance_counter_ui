<script setup lang="ts">
defineProps<{
  distanceMeters: number | null
  errorMessage: string
}>()
</script>

<template>
  <div class="output">
    <p class="hint">Wprowadź współrzędne w stopniach dziesiętnych, np. 52.2297 / 21.0122.</p>
    <p class="error" v-if="errorMessage">{{ errorMessage }}</p>

    <div class="results" v-if="distanceMeters !== null">
      <p>Odległość: <strong>{{ distanceMeters.toFixed(0) }} m</strong></p>
      <p>Odległość: <strong>{{ (distanceMeters / 1000).toFixed(0) }} km</strong></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.output {
  display: grid;
  gap: 0.75rem;
}

.hint {
  margin: 0;
  color: #475569;
  font-size: 0.95rem;
}

.error {
  margin: 0;
  color: #b91c1c;
  font-weight: 700;
}

.results {
  background: #eef2ff;
  border: 1px solid #c7d2fe;
  border-radius: 1rem;
  padding: 1rem;
}

.results p {
  margin: 0 0 0.75rem;
  font-size: 1rem;
}

.results p:last-child {
  margin-bottom: 0;
}
</style>
