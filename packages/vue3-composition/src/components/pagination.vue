<template>
  <div class="v-list-pagination">
    <slot v-bind="scope">
      <!--
      @slot Render a previous button
      @binding {function} prev Got to previous page.
      @binding {boolean} hasPrev If previous page is available or not.
     -->
      <slot name="first" v-bind="scope">
        <button :disabled="!hasPrev" @click="first">First</button>
      </slot>

      <slot name="prev" v-bind="scope">
        <button :disabled="!hasPrev" @click="prev">Prev</button>
      </slot>

      <template v-for="item in pagesToDisplay">
        <!--
      @slot Render an interface to display a page button.
      @binding {function} change Call it to change a page.
      @binding {int} value Page number a button presents.
      @binding {boolean} isActive If a button is presenting a current page.
     -->
        <slot name="page" :value="item" :isActive="item == page" v-bind="scope">
          <span v-if="item == page" :key="`page-${item}`">{{ item }}</span>
          <button v-else :key="`page-${item}`" @click="setPage(item)">
            {{ item }}
          </button>
        </slot>
      </template>

      <!--
      @slot Render a next button
      @binding {function} prev Got to next page.
      @binding {boolean} hasPrev If next page is available or not.
     -->
      <slot name="next" v-bind="scope">
        <button :disabled="!hasNext" @click="next">Next</button>
      </slot>

      <slot name="last" v-bind="scope">
        <button :disabled="!hasNext" @click="last">Last</button>
      </slot>
    </slot>
  </div>
</template>

<script>
/**
 * Display a pagination bar with clickable page numbers to allow users to navigate.
 */

export default {
  props: {
    /**
     * Number of buttons to display in pagination.
     * Current Page will be center and other pages will be added in start and end.
     * Odd number is recommended
     */
    pageLinks: {
      type: Number,
      default: 5,
    },
  },

  inject: ['setPaginationMode', 'setPage', 'localPage', 'localPerPage', 'count'],

  created() {
    this.setPaginationMode('paging')
  },

  computed: {
    scope() {
      return {
        page: this.page,
        perPage: this.perPage,
        count: this._count,
        total: this.total,
        pagesToDisplay: this.pagesToDisplay,
        halfWay: this.halfWay,
        hasNext: this.hasNext,
        hasPrev: this.hasPrev,
        prev: this.prev,
        next: this.next,
        first: this.first,
        last: this.last,
        change: this.setPage,
      }
    },

    page() {
      return this.localPage()
    },

    perPage() {
      return this.localPerPage()
    },

    _count() {
      return this.count()
    },

    total() {
      return Math.ceil(this._count / this.perPage)
    },

    halfWay() {
      return Math.floor(this.pageLinks / 2)
    },

    pagesToDisplay() {
      const pages = Array.apply(null, Array(Math.min(this.pageLinks, this.total)))

      if (this.page <= this.halfWay) {
        return pages.map((value, index) => index + 1)
      } else if (this.total - this.page < this.halfWay) {
        return pages.map((value, index) => this.total - index).reverse()
      } else {
        return pages.map((value, index) => this.page - this.halfWay + index)
      }
    },

    hasNext() {
      return this.page * this.perPage < this._count
    },

    hasPrev() {
      return this.page != 1
    },
  },

  methods: {
    prev() {
      this.setPage(this.page - 1)
    },
    next() {
      this.setPage(this.page + 1)
    },
    first() {
      this.setPage(1)
    },
    last() {
      this.setPage(this.total)
    },
  },
}
</script>
