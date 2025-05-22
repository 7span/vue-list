<template>
  <div class="v-list">
    <slot v-bind="scope" />
  </div>
</template>

<script setup>
import { inject } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useVueList } from '../composables/use-vue-list'
import { _props } from '../vue-options'

defineOptions({
  name: 'VueList',
})

const props = defineProps(_props)
const filters = defineModel('filters')
const globalOptions = inject('vueListOptions')
const emit = defineEmits(['onItemSelect', 'onResponse', 'afterPageChange', 'afterLoadMore'])

const { scope, expose } = useVueList({
  props,
  emit,
  filters,
  globalOptions,
  route: useRoute(),
  router: useRouter(),
})

expose.setPage(1)

/**
  Expose the state and methods to the parent component.
  This allows parent components to access the state and methods
  without directly manipulating the internal state of the component.
*/
defineExpose(expose)
</script>
