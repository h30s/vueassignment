<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['toggle'])
</script>

<template>
  <div class="card">
    <button
      class="head"
      type="button"
      :aria-expanded="open"
      @click="emit('toggle', item.id)"
    >
      <div>
        <h2 class="title">{{ item.title }}</h2>
        <p class="snip">{{ item.snippet }}</p>
      </div>
      <span class="tag">{{ item.category }}</span>
    </button>
    <Transition name="panel">
      <div v-show="open" class="details">
        <p>{{ item.description }}</p>
        <dl class="meta">
          <div>
            <dt>Source</dt>
            <dd>{{ item.source }}</dd>
          </div>
          <div>
            <dt>Updated</dt>
            <dd>{{ item.updatedAt }}</dd>
          </div>
        </dl>
      </div>
    </Transition>
  </div>
</template>
