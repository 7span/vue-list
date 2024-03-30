import defaultOptions from "./options";

//Components
import Root from "./components/Root.vue";
import Pagination from "./components/Pagination.vue";
import Counter from "./components/Counter.vue";
import PerPage from "./components/PerPage.vue";
import Attributes from "./components/Attributes.vue";
import Search from "./components/Search.vue";
import LoadMore from "./components/LoadMore.vue";
import GoTo from "./components/GoTo.vue";

//Layout
import Table from "./layouts/table/Index.vue";

const install = (Vue, userOptions = {}) => {
  const options = Object.assign({}, defaultOptions, userOptions);
  const prefix = options.componentPrefix;

  Vue.prototype.$vueList = { options: options };

  //Root Component
  Vue.component(`${prefix}List`, Root);
  Vue.component(`${prefix}ListPagination`, Pagination);
  Vue.component(`${prefix}ListCounter`, Counter);
  Vue.component(`${prefix}ListPerPage`, PerPage);
  Vue.component(`${prefix}ListAttributes`, Attributes);
  Vue.component(`${prefix}ListSearch`, Search);
  Vue.component(`${prefix}ListLoadMore`, LoadMore);
  Vue.component(`${prefix}ListTable`, Table);
  Vue.component(`${prefix}ListGoTo`, GoTo);
};

const plugin = {
  install,
};

export default plugin;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
