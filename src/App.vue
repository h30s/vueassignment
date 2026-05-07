<script setup>
import { ref, watch, computed } from 'vue'
import SearchBar from './components/SearchBar.vue'
import SearchResultList from './components/SearchResultList.vue'
import LoaderPlaceholder from './components/LoaderPlaceholder.vue'
import { doSearch } from './services/searchService'

const searchText = ref('')
const searchResults = ref([])
const isLoading = ref(false)
const errorText = ref('')
const openedResultId = ref(null)
let debounceTimer = null
let activeRequestId = 0
const normalizedQuery = computed(() => searchText.value.trim())

watch(searchText, (newValue) => {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(async () => {
    const text = newValue.trim()
    const requestId = ++activeRequestId
    errorText.value = ''
    openedResultId.value = null
    if (!text) {
      searchResults.value = []
      return
    }
    isLoading.value = true
    try {
      const results = await doSearch(text)
      if (requestId === activeRequestId) {
        searchResults.value = results
      }
    } catch {
      if (requestId === activeRequestId) {
        searchResults.value = []
        errorText.value = 'Could not load results'
      }
    } finally {
      if (requestId === activeRequestId) {
        isLoading.value = false
      }
    }
  }, 350)
})

function toggleResult(id) {
  if (openedResultId.value === id) {
    openedResultId.value = null
  } else {
    openedResultId.value = id
  }
}
</script>

<template>
  <div class="page">
    <div class="box">
      <h1>Saras Finance  Search</h1>
      <SearchBar :model-value="searchText" @update:model-value="searchText = $event" />
      <p v-if="errorText" class="msg err">{{ errorText }}</p>
      <p v-else-if="!normalizedQuery" class="msg">Type to search</p>
      <p v-else-if="!isLoading && normalizedQuery" class="msg">
        Total results: {{ searchResults.length }}
      </p>
      <Transition name="fade" mode="out-in">
        <LoaderPlaceholder v-if="isLoading" key="loading" />
        <SearchResultList
          v-else-if="normalizedQuery"
          key="results"
          :items="searchResults"
          :open-id="openedResultId"
          @toggle-item="toggleResult"
        />
      </Transition>
    </div>
  </div>
</template>
