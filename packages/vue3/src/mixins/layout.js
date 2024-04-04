import child from "./child";

export default {
  mixins: [child],
  inject: ["setSort"],
  computed: {
    items() {
      return this.root.items || [];
    },
    attrs() {
      return this.root.serializedAttrs;
    },
    attrSettings() {
      return this.root.attrSettings;
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
      let order;
      if (this.sortOrder == "asc") {
        order = "desc";
      } else {
        order = "asc";
      }
      this.setSort({ by: by.name, order });
    },
    itemIndex(index) {
      return this.root.localPerPage * (this.root.serverPage - 1) + index + 1;
    },
  },
};
