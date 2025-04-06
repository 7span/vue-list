<template>
  <div v-if="!loading && !items.length" class="v-list-error">
    <slot>
      <p>No data found!</p>
    </slot>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const items = inject('items')
const loading = inject('loading')
</script>
