import child from "./child";

export default {
  mixins: [child],
  inject: ["OPTIONS"],
  computed: {
    items() {
      return this.root.localItems;
    },
    attrs() {
      return this.root.localAttrs;
    },
    pagination() {
      return this.root.paginationConfig;
    },
    sortBy() {
      return this.root.localSortBy;
    },
    sortOrder() {
      return this.root.localSortOrder;
    },
  },
  methods: {
    sortItemsBy(by) {
      this.root.set("localSortBy", by.name);
      if (this.sortOrder == "asc") {
        this.root.set("localSortOrder", "desc");
      } else {
        this.root.set("localSortOrder", "asc");
      }
      this.root.refresh();
    },
    itemIndex(index) {
      return this.root.localPerPage * (this.root.localPage - 1) + index + 1;
    },
  },
};
