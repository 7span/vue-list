<template>
  <div class="list-pagination" v-if="count > paginationConfig.perPage">
    <s-buttons class="space space--xs">
      <!-- PREV -->
      <s-button
        v-if="isPrev"
        icon="chevron-left"
        color="primary"
        shape="square"
        @click.native="changePage(page-1)"
      ></s-button>

      <!-- PAGES -->
      <s-button
        v-for="n in paginationButtonCount"
        color="primary"
        shape="square"
        :class="{ active : n==page }"
        :key="`page--${n}`"
        @click.native="changePage(n)"
      >{{n}}</s-button>

      <!-- NEXT -->
      <s-button
        v-if="isNext"
        icon="chevron-right"
        color="primary"
        shape="square"
        @click.native="changePage(page+1)"
      ></s-button>
    </s-buttons>

    <template v-if="totalPages > this.paginationConfig.maxPagingLinks">
      <select @change="changePage($event.target.value)" :value="value">
        <option v-for="n in totalPages" :value="n" :key="`paging-link--${n}`">{{n}}</option>
      </select>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: 1
    },
    count: {
      type: Number,
      default: 0
    },
    paginationConfig: Object
  },
  watch: {
    // value(newValue) {
    //   document.querySelector(".page__content").scrollTop = 0;
    // }
  },
  computed: {
    paginationButtonCount() {
      return this.totalPages >= this.paginationConfig.maxPagingLinks
        ? this.paginationConfig.maxPagingLinks
        : this.totalPages;
    },
    page() {
      return parseInt(this.value);
    },
    isNext() {
      return this.value * this.paginationConfig.perPage < this.count;
    },
    isPrev() {
      return this.value != 1;
    },
    totalPages() {
      return Math.ceil(this.count / this.paginationConfig.perPage);
    }
  },
  methods: {
    changePage(page) {
      this.$emit("change", page);
    }
  }
};
</script>

<style lang="scss">
.list-pagination {
  list-style: none;
  margin: 0;
  padding: spacer();
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  > li {
    margin: 0px 2px;
    button,
    select,
    a,
    button {
      height: 30px;
      min-width: 30px;
      display: flex;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      border: none;
      text-decoration: none;
      outline: 0 !important;
      color: $md-grey-500;
      font-size: 12px;
      font-weight: bold;
      &:hover {
        background-color: $md-grey-200;
      }
    }
    &.active {
      button,
      a {
        background-color: color("primary");
        color: #fff;
      }
    }
  }
}
</style>
