<template>
  <div v-if="error" class="v-list-empty">
    <slot :error="error">
      <pre>{{ error }}</pre>
    </slot>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const error = inject('error')
</script>
