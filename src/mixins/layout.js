export default {
  inject: ["OPTIONS"],
  computed: {
    items() {
      return this.$parent.localItems;
    },
    attrs() {
      return this.$parent.localAttrs;
    },
    pagination() {
      return this.$parent.paginationConfig;
    },
    sortBy() {
      return this.$parent.localSortBy;
    },
    sortOrder() {
      return this.$parent.localSortOrder;
    },
  },
  methods: {
    sortItemsBy(by) {
      this.$parent.set("localSortBy", by.name);
      if (this.sortOrder == "asc") {
        this.$parent.set("localSortOrder", "desc");
      } else {
        this.$parent.set("localSortOrder", "asc");
      }
      this.$parent.refresh();
    },
    itemIndex(index) {
      return (
        this.$parent.localPerPage * (this.$parent.localPage - 1) + index + 1
      );
    },
  },
};
