<template>
  <div class="v-list-refresh">
    <slot :loading="loading">
      <button @click="refresh({ refresh: true })">{{ loading ? 'Loading...' : 'Refresh' }}</button>
    </slot>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const refresh = inject('refresh')
const loading = inject('loading')
</script>
