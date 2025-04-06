<template>
  <div v-if="initializingState && loading" class="v-list-loader">
    <slot>
      <p>Initial Loading...</p>
    </slot>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const loading = inject('loading')
const initializingState = inject('initializingState')
</script>
