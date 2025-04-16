<template>
  <div class="vue-list__refresh">
    <slot :isLoading="isLoading" :refresh="refresh">
      <button @click="refresh({ isRefresh: true })">
        {{ isLoading ? 'Loading...' : 'Refresh' }}
      </button>
    </slot>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const refresh = inject('refresh')
const isLoading = inject('isLoading')
</script>
