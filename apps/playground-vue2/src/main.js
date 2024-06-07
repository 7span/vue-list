import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import qs from "qs";
import router from "./router";

Vue.config.productionTip = false;

import plugin from "@7span/vue-list/src/main";

function stateManagerKey(endpoint, state) {
  return `vue-list--${endpoint}--${state?.version}`;
}

Vue.use(plugin, {
  stateManager: {
    init(endpoint, state) {
      const allKeys = `vue-list--${endpoint}--`;
      const latestKey = stateManagerKey(endpoint, state);
      const staleKeys = Object.keys(localStorage).filter(
        (key) => key.startsWith(allKeys) && key != latestKey
      );
      staleKeys.forEach((key) => localStorage.removeItem(key));
    },

    set(endpoint, state) {
      const key = stateManagerKey(endpoint, state);
      localStorage.setItem(key, JSON.stringify(state));
    },

    get(endpoint, state) {
      const key = stateManagerKey(endpoint, state);
      try {
        if (localStorage.getItem(key)) {
          return JSON.parse(localStorage.getItem(key));
        } else {
          return null;
        }
      } catch {
        return null;
      }
    },
  },

  async requestHandler(requestData) {
    const {
      endpoint,
      search,
      sort,
      filters,
      payload,
      perPage,
      page,
      sortBy,
      sortOrder,
    } = requestData;

    //DIRECTUS COUNT
    const count = await axios
      .get(`https://crm.7span.in/items/${endpoint}?aggregate[countDistinct]=id`)
      .then(({ data }) => data.data[0].countDistinct.id);

    return axios
      .get(`https://crm.7span.in/items/${endpoint}`, {
        params: {
          page,
          limit: perPage,
          search: search,
          sort: (sort.order == "asc" ? "-" : "") + sort.by,
          // sort_order: sort.order,
          // filters: filters,
        },
        paramsSerializer: (params) => qs.stringify(params),
      })
      .then(({ data }) => {
        return {
          items: data.data,
          count: count,
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
