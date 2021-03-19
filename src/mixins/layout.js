export default {
  inject: ["OPTIONS"],
  computed: {
    items() {
      return this.$parent.items;
    },
    allAttrs() {
      return this.$parent.allAttrs;
    },
    pagination() {
      return this.$parent.paginationConfig;
    },
    sortBy() {
      return this.$parent.localSortBy;
    },
    sortOrder() {
      return this.$parent.localSortOrder;
    }
  },
  methods: {
    sortItemsBy(by) {
      this.$parent.set("localSortBy", by.name);
      if (this.sortOrder && this.sortOrder == "asc") {
        this.$parent.set("localSortOrder", "desc");
      } else {
        this.$parent.set("localSortOrder", "asc");
      }
      this.$parent.refresh();
    },
    itemIndex(index) {
      return (
        this.$parent.currentPerPage * (this.$parent.currentPage - 1) + index + 1
      );
    }
  }
};
