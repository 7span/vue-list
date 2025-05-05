<template>
  <div v-if="error && !isLoading" class="vue-list__error">
    <slot :error="error">
      <pre>{{ error }}</pre>
    </slot>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const error = inject('error')
const isLoading = inject('isLoading')

defineOptions({
  name: 'VueListError',
})
</script>
