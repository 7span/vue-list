<template>
  <div class="vue-list__go-to">
    <slot v-bind="scope">
      <select @input="setPage($event.target.value)" :value="localPage">
        <option v-for="(option, index) in pages" :key="`option-${index}`">
          {{ option }}
        </option>
      </select>
    </slot>
  </div>
</template>

<script setup>
import { inject, computed } from 'vue'
const setPage = inject('setPage')
const localPage = inject('localPage')
const localPerPage = inject('localPerPage')
const count = inject('count')

const pagesCount = computed(() => {
  return Math.ceil(count.value / localPerPage.value)
})

const pages = computed(() => {
  return Array.from({ length: pagesCount.value }, (_, i) => i + 1)
})

const scope = computed(() => {
  return {
    // Injected states
    page: localPage.value,

    // Computed properties
    pages: pages.value,
    pagesCount: pagesCount.value,

    // Injected methods
    setPage: setPage,
  }
})
</script>
