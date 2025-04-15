<template>
  <div class="v-list-search">
    <slot :search="localSearch" :setSearch="set">
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
import { inject } from 'vue'
const setSearch = inject('setSearch')
const localSearch = inject('localSearch')

const props = defineProps({
  debounceTime: {
    type: Number,
    default: 1000,
  },
})

const set = debounce((value) => {
  setSearch(value)
}, props.debounceTime)
</script>
