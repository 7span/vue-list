import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";
import qs from "qs";
import router from "./router";
import gql from "graphql-tag";
import plugin from "@7span/vue-list/src/main";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import Draggable from "vuedraggable";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://rickandmortyapi.com/graphql",
});

const app = createApp(App);
app.component("Draggable", Draggable);
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

    return apolloClient
      .query({
        query: gql`
          ${payload.query}
        `,
        variables: {
          page,
          perPage,
          search,
          filters,
          sort: sortBy,
        },
      })
      .then(({ data }) => {
        return {
          items: data.characters.results,
          count: data.characters.results.length,
          res: data.characters.results,
        };
      });

    //DIRECTUS COUNT
    // const count = await axios
    //   .get(`https://crm.7span.in/items/${endpoint}?aggregate[countDistinct]=id`)
    //   .then(({ data }) => data.data[0].countDistinct.id);

    // return axios
    //   .get(`https://crm.7span.in/items/${endpoint}`, {
    //     params: {
    //       page,
    //       limit: perPage,
    //       search: search,
    //       sort: (sort.order == "asc" ? "-" : "") + sort.by,
    //     },
    //     paramsSerializer: (params) => qs.stringify(params),
    //   })
    //   .then(({ data }) => {
    //     return {
    //       items: data.data,
    //       count: count,
    //     };
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
});

app.mount("#app");
