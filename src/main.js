import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import qs from "qs";
import router from "./router";

Vue.config.productionTip = false;

import plugin from "./plugin.js";
Vue.use(plugin, {
  stateManager: {
    set(endpoint, state) {
      const key = `vue-list--${endpoint}`;
      localStorage.setItem(key, JSON.stringify(state));
    },

    get(endpoint) {
      const key = `vue-list--${endpoint}`;
      if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
      } else {
        return null;
      }
    },
  },

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
          filters: filters,
        },
        paramsSerializer: (params) => qs.stringify(params),
      })
      .then((res) => {
        return {
          items: res.data?.data,
          count: res.data.meta.total,
        };
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
