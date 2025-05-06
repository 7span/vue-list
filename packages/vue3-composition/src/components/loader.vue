<template>
  <div v-show="isLoading && !isInitialLoading" class="vue-list__loader">
    <slot>
      <p>Loading...</p>
    </slot>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const isLoading = inject('isLoading')
const isInitialLoading = inject('isInitialLoading')

defineOptions({
  name: 'VueListLoader',
})
</script>
