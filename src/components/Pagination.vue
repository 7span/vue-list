<template>
  <div class="v-list-pagination" v-if="count > perPage">
    <!-- PREV -->
    <slot name="prev" :prev="prev" v-if="hasPrev">
      <button @click="prev">Prev</button>
    </slot>

    <!-- PAGES -->
    <template v-for="item in pagesToDisplay">
      <slot name="active-page" v-if="item == page">
        <span :key="`page-${item}`">{{ item }}</span>
      </slot>
      <slot v-else name="page" :change="change" :value="item">
        <button :key="`page-${item}`" @click="change(item)">
          {{ item }}
        </button>
      </slot>
    </template>

    <!-- NEXT -->
    <slot name="next" :next="next" v-if="hasNext">
      <button @click="change(page + 1)">Next</button>
    </slot>

    <!-- SELECT -->
    <slot
      name="select"
      v-if="total > this.pageLinks"
      :change="change"
      :value="page"
      :options="pagesOptions"
    >
      <select
        @input="change($event.target.value)"
        :value="page"
        :options="pagesOptions"
      >
        <option
          v-for="(option, index) in pagesOptions"
          :key="`option-${index}`"
        >
          {{ option }}
        </option>
      </select>
    </slot>
  </div>
</template>

<script>
import pagination from "@/mixins/pagination";

export default {
  mixins: [pagination],

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

    pagesOptions() {
      const links = [];
      for (var i = 1; i <= this.total; i++) {
        links.push(i);
      }
      return links;
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

    total() {
      return Math.ceil(this.count / this.perPage);
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
