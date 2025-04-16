<template>
  <div class="vue-list__go-to">
    <slot :setPage="setPage" :page="localPage" :pages="pages" :pagesCount="pagesCount">
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
</script>
