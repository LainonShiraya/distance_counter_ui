<script setup lang="ts">
import DistanceCalculator from './components/DistanceCalculator.vue'
</script>

<template>
  <div id="app" class="app-shell">
    <main class="content">
      <h1>Odległość między punktami</h1>
      <DistanceCalculator />
    </main>
  </div>
</template>

<style scoped lang="scss">
*{
    margin:0;
    padding:0;
}
.app-shell {
  margin:0;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: start;
}

.content {
  width: min(100%, 920px);
}

h1 {
  margin: 0 0 1.5rem;
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: #0f172a;
  text-align: center;
}
</style>
