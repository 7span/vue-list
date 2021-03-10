<template>
  <div class="v-list-pagination" v-if="count > perPage">
    <!-- PREV -->
    <template>
      <slot name="prev" :prev="prev" v-if="isPrev">
        <button @click="prev">Prev</button>
      </slot>
    </template>

    <!-- PAGES -->
    <template v-for="n in paginationButtonCount">
      <slot name="middle" :nextPage="pageSwitch" :n="n">
        <button :key="`page-${n}`" @click="n == page ? null : changePage(n)">
          {{ n }}
        </button>
      </slot>
    </template>

    <!-- NEXT -->
    <template>
      <slot name="next" :next="next" v-if="isNext">
        <button @click="changePage(page + 1)">Next</button>
      </slot>
    </template>

    <template>
      <slot
        name="select"
        v-if="totalPages > this.maxPagingLinks"
        :change="change"
        :value="page"
        :options="paginationLinks"
      >
        <select
          @input="changePage($event.target.value)"
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
      </slot>
    </template>
  </div>
</template>

<script>
import pagination from "@/mixins/pagination";

export default {
  mixins: [pagination],

  props: {
    maxPagingLinks: {
      type: Number,
      default: 5
    }
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
    }
  },
  methods: {
    prev() {
      this.changePage(this.page - 1);
    },
    next() {
      this.changePage(this.page + 1);
    },
    changePage(number) {
      this.$parent.changePage(number);
    },
    pageSwitch(n) {
      if (this.page == n) {
        return null;
      } else {
        this.changePage(n);
      }
    },
    change(event) {
      this.changePage(event.target.value);
    }
  }
};
</script>
