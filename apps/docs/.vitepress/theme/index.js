import "./tailwind.postcss";
import "./custom.css";
import VueList from "@7span/vue-list";
import DefaultTheme from "vitepress/theme";
import axios from "axios";
import qs from "qs";
import Draggable from "vuedraggable";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("draggable", Draggable);
    app.use(VueList, {
      async requestHandler(requestData) {
        {
          const { endpoint, pagination, search, sort, filters } = requestData;
          const { page, perPage } = pagination;

          //DIRECTUS COUNT
          const count = await axios
            .get(
              `https://crm.7span.in/items/${endpoint}?aggregate[countDistinct]=id`
            )
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
        }
      },
    });

    app.provide("global", app.config.globalProperties);
  },
};
