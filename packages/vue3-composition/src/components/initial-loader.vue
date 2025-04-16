<template>
  <div v-if="initializingState && isLoading" class="vue-list__initial-loader">
    <slot>
      <p>Initial Loading...</p>
    </slot>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const isLoading = inject('isLoading')
const initializingState = inject('initializingState')
</script>
