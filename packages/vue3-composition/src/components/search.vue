<template>
  <div class="vue-list__search">
    <slot v-bind="scope">
      <input
        type="text"
        :value="localSearch"
        @input="set($event.target.value)"
        placeholder="Search"
      />
    </slot>
  </div>
</template>

<script setup>
import { debounce } from 'lodash-es'
import { computed, inject } from 'vue'
const setSearch = inject('setSearch')
const localSearch = inject('localSearch')

defineOptions({
  name: 'VueListSearch',
})

const props = defineProps({
  debounceTime: {
    type: Number,
    default: 1000,
  },
})

const set = debounce((value) => {
  setSearch(value)
}, props.debounceTime)

const scope = computed(() => {
  return {
    // Injected State
    search: localSearch.value,

    // Methods
    setSearch: set,
  }
})
</script>
