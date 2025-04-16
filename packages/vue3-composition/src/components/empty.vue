<template>
  <div v-if="!isLoading && !items.length && !error" class="vue-list__empty">
    <slot>
      <p>No data found!</p>
    </slot>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const items = inject('items')
const isLoading = inject('isLoading')
const error = inject('error')
</script>
