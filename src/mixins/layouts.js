export default {
  props: {
    items: {
      type: Array,
      default: () => []
    },
    layoutConfig: {
      type: Object,
      default: () => {}
    },
    paginationConfig: {
      type: Object,
      default: () => {}
    }
  },

  computed: {
    cols() {
      if (Array.isArray(this.layoutConfig.cols)) {
        let cols = {};
        this.layoutConfig.cols.forEach(item => {
          cols[item] = {
            label: item
          };
        });
        return cols;
      } else if (typeof this.layoutConfig.cols == "object") {
        return this.layoutConfig.cols;
      } else {
        console.error("Invalid data for: cols");
        return {};
      }
    }
  }
};
