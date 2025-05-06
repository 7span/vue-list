<template>
  <div v-show="isInitialLoading" class="vue-list__initial-loader">
    <slot>
      <p>Initial Loading...</p>
    </slot>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const isInitialLoading = inject('isInitialLoading')

defineOptions({
  name: 'VueListInitialLoader',
})
</script>
