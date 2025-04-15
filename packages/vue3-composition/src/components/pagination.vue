<template>
  <div class="v-list-pagination">
    <slot v-bind="scope">
      <slot name="first" v-bind="scope">
        <button type="button" :disabled="!hasPrev" @click="first">First</button>
      </slot>

      <slot name="prev" v-bind="scope">
        <button type="button" :disabled="!hasPrev" @click="prev">Prev</button>
      </slot>

      <slot name="pages" v-bind="scope">
        <template v-for="item in pagesToDisplay">
          <slot name="page" :page="item" :isActive="item == localPage" v-bind="scope">
            <span v-if="item == localPage" :key="`page-active-${item}`">{{ item }}</span>
            <button type="button" v-else :key="`page-${item}`" @click="setPage(item)">
              {{ item }}
            </button>
          </slot>
        </template>
      </slot>

      <slot name="next" v-bind="scope">
        <button type="button" :disabled="!hasNext" @click="next">Next</button>
      </slot>

      <slot name="last" v-bind="scope">
        <button type="button" :disabled="!hasNext" @click="last">Last</button>
      </slot>
    </slot>
  </div>
</template>

<script setup>
/**
 * Display a pagination bar with clickable page numbers to allow users to navigate.
 */

import { inject, computed } from 'vue'
const setPage = inject('setPage')
const localPage = inject('localPage')
const localPerPage = inject('localPerPage')
const count = inject('count')

const props = defineProps({
  pageLinks: {
    /**
     * Number of page buttons to display in the pagination component.
     * The current page will be centered with additional pages shown on both sides.
     * An odd number is recommended for balanced display.
     */
    type: Number,
    default: 5,
  },
})

const pagesCount = computed(() => {
  return Math.ceil(count.value / localPerPage.value)
})

const halfWay = computed(() => {
  return Math.floor(props.pageLinks / 2)
})

const hasNext = computed(() => {
  return localPage.value * localPerPage.value < count.value
})

const hasPrev = computed(() => {
  return localPage.value != 1
})

const pagesToDisplay = computed(() => {
  const pages = Array.apply(null, Array(Math.min(props.pageLinks, pagesCount.value)))

  if (localPage.value <= halfWay.value) {
    return pages.map((value, index) => index + 1)
  } else if (pagesCount.value - localPage.value < halfWay.value) {
    return pages.map((value, index) => pagesCount.value - index).reverse()
  } else {
    return pages.map((value, index) => localPage.value - halfWay.value + index)
  }
})

const scope = computed(() => {
  return {
    page: localPage,
    perPage: localPerPage,
    count,
    pagesCount,
    pagesToDisplay,
    halfWay,
    hasNext,
    hasPrev,
    prev,
    next,
    first,
    last,
    setPage,
  }
})

function prev() {
  setPage(localPage.value - 1)
}
function next() {
  setPage(localPage.value + 1)
}
function first() {
  setPage(1)
}
function last() {
  setPage(pagesCount.value)
}
</script>
