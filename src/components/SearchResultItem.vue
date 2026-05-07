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
      :aria-controls="`result-details-${item.id}`"
      @click="emit('toggle', item.id)"
    >
      <div>
        <h2 class="title">{{ item.title }}</h2>
        <p class="snip">{{ item.snippet }}</p>
      </div>
      <div class="head-right">
        <span class="tag">{{ item.category }}</span>
        <span class="chevron" :class="{ open }" aria-hidden="true">⌄</span>
      </div>
    </button>
    <Transition name="panel">
      <div
        v-show="open"
        :id="`result-details-${item.id}`"
        class="details"
      >
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
