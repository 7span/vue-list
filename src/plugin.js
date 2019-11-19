// import { SButtons, SButton, SIcon, SSelect, SField } from "@7span/shilp-vue";

const install = (Vue, options = {}) => {
  // Vue.component("SButtons", SButtons);
  // Vue.component("SButton", SButton);
  // Vue.component("SIcon", SIcon);
  // Vue.component("SSelect", SSelect);
  // Vue.component("SField", SField);

  Vue.component(
    "VList",
    Vue.extend({
      extends: require("./components/List.vue").default,
      data() {
        return {
          options
        };
      }
    })
  );

  Vue.component(
    "chevron-right",
    require("vue-material-design-icons/ChevronRight").default
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

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
