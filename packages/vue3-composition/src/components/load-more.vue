<template>
  <div class="v-list-load-more">
    <slot :isLoading="isLoading" :loadMore="loadMore" :hasMoreItems="hasMoreItems">
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
const hasMoreItems = computed(() => {
  return count > items.length
})
</script>
