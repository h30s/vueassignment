<script setup>
import SearchResultItem from './SearchResultItem.vue'

defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  openId: {
    type: [String, Number, null],
    default: null,
  },
})

const emit = defineEmits(['toggle-item'])
</script>

<template>
  <div v-if="items.length" class="list">
    <SearchResultItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      :open="openId === item.id"
      @toggle="emit('toggle-item', $event)"
    />
  </div>

  <p v-else class="empty">
    No results found
  </p>
</template>
