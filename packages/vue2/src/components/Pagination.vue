<template>
  <div class="v-list-pagination">
    <!--
      @slot Render a previous button
      @binding {function} prev Got to previous page.
      @binding {boolean} hasPrev If previous page is available or not.
     -->

    <slot name="first" :first="first" :hasPrev="hasPrev">
      <button :disabled="!hasPrev" @click="first">First</button>
    </slot>

    <slot name="prev" :prev="prev" :hasPrev="hasPrev">
      <button :disabled="!hasPrev" @click="prev">Prev</button>
    </slot>

    <template v-for="item in pagesToDisplay">
      <!--
      @slot Render an interface to display a page button.
      @binding {function} change Call it to change a page.
      @binding {int} value Page number a button presents.
      @binding {boolean} isActive If a button is presenting a current page.
     -->
      <slot
        name="page"
        :change="setPage"
        :value="item"
        :isActive="item == page"
      >
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
    <slot name="next" :next="next" :hasNext="hasNext">
      <button :disabled="!hasNext" @click="next">Next</button>
    </slot>

    <slot name="last" :last="last" :hasNext="hasNext">
      <button :disabled="!hasNext" @click="last">Last</button>
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

  inject: [
    "setPaginationMode",
    "setPage",
    "localPage",
    "localPerPage",
    "count",
  ],

  created() {
    this.setPaginationMode("paging");
  },

  computed: {
    page() {
      return this.localPage();
    },

    perPage() {
      return this.localPerPage();
    },

    _count() {
      return this.count();
    },

    total() {
      return Math.ceil(this._count / this.perPage);
    },

    halfWay() {
      return Math.floor(this.pageLinks / 2);
    },

    pagesToDisplay() {
      const pages = Array.apply(
        null,
        Array(Math.min(this.pageLinks, this.total))
      );

      if (this.page <= this.halfWay) {
        return pages.map((value, index) => index + 1);
      } else if (this.total - this.page < this.halfWay) {
        return pages.map((value, index) => this.total - index).reverse();
      } else {
        return pages.map((value, index) => this.page - this.halfWay + index);
      }
    },

    hasNext() {
      return this.page * this.perPage < this._count;
    },

    hasPrev() {
      return this.page != 1;
    },
  },

  methods: {
    prev() {
      this.setPage(this.page - 1);
    },
    next() {
      this.setPage(this.page + 1);
    },
    first() {
      this.setPage(1);
    },
    last() {
      this.setPage(this.total);
    },
  },
};
</script>
