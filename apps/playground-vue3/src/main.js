import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import qs from "qs";
import router from "./router";
import Draggable from "vuedraggable";
import plugin from "@7span/vue-list/src/main";
const app = createApp(App);
app.component("Draggable", Draggable);
app.use(router);

app.config.productionTip = false;

function stateManagerKey(endpoint, state) {
  return `vue-list--${endpoint}--${state?.version}`;
}

app.use(plugin, {
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
    const { endpoint, pagination, search, sort, filters } = requestData;
    const { page, perPage } = pagination;

    //DIRECTUS COUNT
    const count = await axios
      .get(
        `https://everest.7span.in/items/${endpoint}?aggregate[countDistinct]=id`
      )
      .then(({ data }) => data.data[0].countDistinct.id);

    return new Promise((resolve, reject) => {
      axios
        .get(`https://everest.7span.in/items/${endpoint}`, {
          params: {
            page,
            limit: perPage,
            search: search,
            sort: (sort.order == "asc" ? "-" : "") + sort.by,
          },
          paramsSerializer: (params) => qs.stringify(params),
        })
        .then(({ data }) => {
          setTimeout(() => {
            resolve({
              items: data.data,
              count: count,
            });
          }, 5000);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
});

app.mount("#app");
