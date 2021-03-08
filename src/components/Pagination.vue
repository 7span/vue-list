<template>
  <div class="v-list-pagination" v-if="count > perPage">
    <!-- PREV -->
    <button v-if="isPrev" @click="changePage(page - 1)">Prev</button>

    <!-- PAGES -->
    <button
      v-for="n in paginationButtonCount"
      :key="`page-${n}`"
      @click="n == page ? null : changePage(n)"
    >
      {{ n }}
    </button>

    <!-- NEXT -->
    <button v-if="isNext" @click="changePage(page + 1)">Next</button>

    <select
      v-if="totalPages > this.maxPagingLinks"
      @input="changePage($event)"
      :value="page"
      :options="paginationLinks"
    >
      <option
        v-for="(option, index) in paginationLinks"
        :key="`option-${index}`"
      >
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
import pagination from "@/mixins/pagination";

export default {
  mixins: [pagination],

  props: {
    maxPagingLinks: {
      type: Number,
      default: 5,
    },
  },

  computed: {
    page() {
      return this.$parent.localPage;
    },
    perPage() {
      return this.$parent.localPerPage;
    },

    mode() {
      return this.$parent.paginationMode;
    },

    paginationLinks() {
      const links = [];
      for (var i = 1; i <= this.totalPages; i++) {
        links.push(i);
      }
      return links;
    },

    paginationButtonCount() {
      return this.totalPages >= this.maxPagingLinks
        ? this.maxPagingLinks
        : this.totalPages;
    },
    isNext() {
      return this.page * this.perPage < this.count;
    },
    isPrev() {
      return this.page != 1;
    },
    totalPages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    changePage(number) {
      this.$parent.changePage(number);
    },
  },
};
</script>
