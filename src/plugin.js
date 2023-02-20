import defaultOptions from "./options";

//Components
import Root from "./components/Root";
import Pagination from "./components/Pagination";
import Counter from "./components/Counter";
import PerPage from "./components/PerPage";
import Attributes from "./components/Attributes";
import Search from "./components/Search";
import LoadMore from "./components/LoadMore";
import GoTo from "./components/GoTo";
import ActiveFilters from "./components/ActiveFilters";

//Layout
import Table from "./layouts/table/Index";

const install = (Vue, userOptions = {}) => {
  const options = Object.assign({}, defaultOptions, userOptions);
  const prefix = options.componentPrefix;

  //Root Component
  Vue.component(`${prefix}List`, {
    data() {
      return {
        options,
      };
    },
    provide: {
      OPTIONS: options,
    },
    extends: Root,
  });

  Vue.component(`${prefix}ListPagination`, Pagination);
  Vue.component(`${prefix}ListCounter`, Counter);
  Vue.component(`${prefix}ListPerPage`, PerPage);
  Vue.component(`${prefix}ListAttributes`, Attributes);
  Vue.component(`${prefix}ListSearch`, Search);
  Vue.component(`${prefix}ListLoadMore`, LoadMore);
  Vue.component(`${prefix}ListTable`, Table);
  Vue.component(`${prefix}ListGoTo`, GoTo);
  Vue.component(`${prefix}ListActiveFilters`, ActiveFilters);
};

const plugin = {
  install,
};

export default plugin;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
