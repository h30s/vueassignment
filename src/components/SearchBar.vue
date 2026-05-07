<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:model-value'])
</script>

<template>
  <div>
    <label for="search-input" class="sr-only">Search query</label>
    <input
      id="search-input"
      :value="modelValue"
      @input="emit('update:model-value', $event.target.value)"
      type="search"
      class="inp"
      placeholder="Search..."
      autocomplete="off"
    />
  </div>
</template>
