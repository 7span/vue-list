<template>
  <div class="v-list">
    <slot v-bind="scope" />
  </div>
</template>

<script setup>
import _props from '../props'
import { useVueList } from '../composables/use-vue-list'
import { inject } from 'vue'
const globalOptions = inject('vueListOptions')

defineOptions({
  name: 'VueList',
})

const props = defineProps(_props)

const { setPage, scope } = useVueList(props, globalOptions)

await setPage(1)
</script>
