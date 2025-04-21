<template>
  <div class="vue-list__refresh">
    <slot v-bind="scope">
      <button @click="refresh({ isRefresh: true })">
        {{ isLoading ? 'Loading...' : 'Refresh' }}
      </button>
    </slot>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
const refresh = inject('refresh')
const isLoading = inject('isLoading')

const scope = computed(() => {
  return {
    // Injected state
    isLoading: isLoading.value,

    // Injected methods
    refresh,
  }
})
</script>
