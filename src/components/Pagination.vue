<template>
  <div class="v-list-pagination">
    <!--
      @slot Render a previous button
      @binding {function} prev Got to previous page.
      @binding {boolean} hasPrev If previous page is available or not.
     -->
    <slot name="prev" :prev="prev" :hasPrev="hasPrev">
      <button @click="prev">Prev</button>
    </slot>

    <template v-for="item in pagesToDisplay">
      <!--
      @slot Render an interface to display a page button.
      @binding {function} change Call it to change a page.
      @binding {int} value Page number a button presents.
      @binding {boolean} isActive If a button is presenting a current page.
     -->
      <slot name="page" :change="change" :value="item" :isActive="item == page">
        <span v-if="item == page" :key="`page-${item}`">{{ item }}</span>
        <button v-else :key="`page-${item}`" @click="change(item)">
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
      <button @click="next">Next</button>
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
      default: 7,
    },
  },

  created() {
    this.$parent.set("paginationMode", "paging");
  },

  computed: {
    page() {
      return this.$parent.localPage;
    },

    perPage() {
      return this.$parent.localPerPage;
    },

    count() {
      return this.$parent.count;
    },

    total() {
      return Math.ceil(this.count / this.perPage);
    },

    pagesToDisplay() {
      const pages = Array.apply(null, Array(this.pageLinks));
      const halfWay = Math.floor(this.pageLinks / 2);

      if (this.page <= halfWay) {
        return pages.map((value, index) => index + 1);
      } else {
        return pages.map((value, index) => this.page - halfWay + index);
      }
    },

    hasNext() {
      return this.page * this.perPage < this.count;
    },

    hasPrev() {
      return this.page != 1;
    },
  },

  methods: {
    prev() {
      this.change(this.page - 1);
    },
    next() {
      this.change(this.page + 1);
    },
    change(number) {
      this.$parent.changePage(number);
    },
  },
};
</script>
