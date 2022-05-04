import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import qs from "qs";

Vue.config.productionTip = false;

import plugin from "./plugin.js";
Vue.use(plugin, {
  requestHandler(requestData) {
    const { endpoint, pagination, search, sort, filters } = requestData;
    const { page, perPage } = pagination;
    return axios
      .get(endpoint, {
        params: {
          page,
          per_page: perPage,
          search,
          sort_by: sort.by,
          sort_order: sort.order,
          filter: filters,
        },
        paramsSerializer: (params) => qs.stringify(params),
      })
      .then((res) => {
        return {
          items: res.data?.data,
          count: res.data.meta.total,
        };
      });
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
