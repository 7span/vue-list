<template>
  <slot></slot>
</template>

<script setup>
import { provide } from 'vue'
import { defaultRequestHandler, defaultStateManager } from '../options'

defineOptions({
  name: 'VueListProvider',
})

const props = defineProps({
  requestHandler: {
    type: Function,
    default: defaultRequestHandler,
  },
  stateManager: {
    type: Object,
    default: defaultStateManager,
  },
})

provide('vueListOptions', {
  requestHandler: props.requestHandler,
  stateManager: props.stateManager,
  isNuxt: true,
})
</script>
