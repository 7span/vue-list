import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.config.productionTip = false;

import plugin from "./plugin.js";
Vue.use(plugin, {
  requestHandler(requestData) {
    const { endpoint, pagination, search, sort } = requestData;
    const { page, perPage } = pagination;
    return axios
      .get(endpoint, {
        params: {
          page,
          limit: perPage,
          search,
          sort_by: sort.by,
          sort_order: sort.order,
        },
      })
      .then((res) => {
        return {
          items: res.data?.items,
          count: res.data.meta.count,
        };
      });
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
