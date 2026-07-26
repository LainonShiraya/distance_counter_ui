<script setup lang="ts">
defineProps<{
  label: string
  name: string
  modelValue: number
  step?: string
  min?: number
  max?: number
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: number): void
}>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value === '' ? 0 : Number(target.value))
}
</script>

<template>
  <label class="coordinate-row">
    <span class="coordinate-label">{{ label }}</span>
    <input
      :name="name"
      type="number"
      :step="step ?? 'any'"
      :min="min"
      :max="max"
      :value="modelValue"
      @input="onInput"
      class="coordinate-input"
      inputmode="decimal"
      autocomplete="off"
    />
  </label>
</template>

<style scoped lang="scss">
.coordinate-row {
  display: grid;
  gap: 0.5rem;
}

.coordinate-label {
  color: #334155;
  font-size: 1rem;
  font-weight: 600;
}

.coordinate-input {
  border: 1px solid #cbd5e1;
  border-radius: 1rem;
  padding: 0.9rem 1rem;
  font-size: 1rem;
  color: #0f172a;
  background-color: #ffffff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.coordinate-input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.16);
}
</style>
