var merge = require("lodash/merge");
import { colsConfig } from "../config";

export default {
  inject: ["DRAGGABLE", "COLS"],

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
    localCols() {
      let localCols;
      if (Array.isArray(this.layoutConfig.cols)) {
        this.layoutConfig.cols.forEach(item => {
          localCols[item] = {
            label: item
          };
        });
      } else if (typeof this.layoutConfig.cols == "object") {
        localCols = this.layoutConfig.cols;
      } else {
        localCols = {};
      }
      return localCols;
    },

    mergedCols() {
      //Merge with global configuration
      console.log(colsConfig);
      return merge(colsConfig, this.COLS, this.localCols);
    }
  }
};
