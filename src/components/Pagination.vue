<template>
  <div class="v-list__pagination" v-if="count >perPage">
    <s-list group>
      <!-- PREV -->
      <s-button
        v-if="isPrev"
        icon="chevron-left"
        color="primary"
        shape="square"
        @click.native="changePage(page-1)"
      ></s-button>

      <!-- PAGES -->
      <template v-for="n in paginationButtonCount">
        <s-button
          v-if="n==page"
          color="primary"
          shape="square"
          class="button--active"
          :key="`page--${n}`"
          label
        >{{n}}</s-button>
        <s-button
          v-else
          color="primary"
          shape="square"
          :key="`page--${n}`"
          @click.native="changePage(n)"
        >{{n}}</s-button>
      </template>

      <!-- NEXT -->
      <s-button
        v-if="isNext"
        icon="chevron-right"
        color="primary"
        shape="square"
        @click.native="changePage(page+1)"
      ></s-button>
    </s-list>

    <template v-if="totalPages > this.maxPagingLinks">
      <select @change="changePage($event.target.value)" :value="page">
        <option v-for="n in totalPages" :value="n" :key="`paging-link--${n}`">{{n}}</option>
      </select>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    page: Number,
    perPage: Number,
    count: {
      type: Number,
      default: 0
    },
    maxPagingLinks: Number
  },
  computed: {
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
    changePage(number) {
      this.$emit("change", number);
    }
  }
};
</script>

<style lang="scss" scoped>
.v-list__pagination {
  list-style: none;
  margin: 0;
  padding: spacer();
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  > li {
    margin: 0px 2px;
  }
  .button--active {
    background-color: --color("primary", dark);
    cursor: default;
  }
}
</style>
