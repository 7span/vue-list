const install = (Vue, options = {}) => {
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
};

const plugin = {
  install,
  version: "__VERSION__"
};

export default plugin;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
