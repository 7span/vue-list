<template>
  <div class="vue-list__load-more">
    <slot v-bind="scope">
      <button v-if="hasMoreItems" @click="loadMore">Load More</button>
      <p v-else>— That's all —</p>
    </slot>
  </div>
</template>

<script setup>
/**
 * A component that implements infinite scrolling functionality.
 * Displays a "Load More" button that fetches and appends additional items
 * from an API while preserving the existing list items.
 */
import { inject, computed } from 'vue'
const loadMore = inject('loadMore')
const isLoading = inject('isLoading')
const items = inject('items')
const count = inject('count')

defineOptions({
  name: 'VueListLoadMore',
})

const hasMoreItems = computed(() => {
  return count.value > items.value.length
})

const scope = computed(() => {
  return {
    // Injected state
    isLoading: isLoading.value,

    // Injected methods
    loadMore,

    // Computed properties
    hasMoreItems: hasMoreItems.value,
  }
})
</script>
