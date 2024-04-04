import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import qs from "qs";
import router from "./router";
import plugin from "@7span/vue-list";

const app = createApp(App);
app.use(router);

app.config.productionTip = false;
app.use(plugin, {
  stateManager: {
    set(endpoint, state) {
      const key = `vue-list--${endpoint}`;
      localStorage.setItem(key, JSON.stringify(state));
    },

    get(endpoint) {
      const key = `vue-list--${endpoint}`;
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
    const { endpoint, pagination, search, sort, filters } = requestData;
    const { page, perPage } = pagination;

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

app.mount("#app");
