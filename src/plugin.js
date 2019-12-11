const install = (Vue, options = {}) => {
  Vue.component("VList", {
    extends: require("./components/List.vue").default,
    provide: {
      OPTIONS: options
    },
    data() {
      return {
        options
      };
    }
  });

  Vue.component(
    "chevron-right",
    require("vue-material-design-icons/ChevronRight").default
  );
  Vue.component(
    "ChevronUp",
    require("vue-material-design-icons/ChevronUp").default
  );
  Vue.component(
    "ChevronDown",
    require("vue-material-design-icons/ChevronDown").default
  );
  Vue.component(
    "chevron-left",
    require("vue-material-design-icons/ChevronLeft").default
  );
  Vue.component("drag", require("vue-material-design-icons/Drag").default);
};

const plugin = {
  install,
  version: "__VERSION__"
};

export default plugin;
export const VListGridTable = require("./layouts/GridTable").default;
export const VListMasnory = require("./layouts/Masnory").default;
export const VListTable = require("./layouts/Table").default;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
