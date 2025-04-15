<template>
  <div v-if="!initializingState && isLoading" class="v-list-loader">
    <slot>
      <p>Loading...</p>
    </slot>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const isLoading = inject('isLoading')
const initializingState = inject('initializingState')
</script>
