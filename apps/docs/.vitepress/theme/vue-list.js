import axios from "axios";
import qs from "qs";

export const requestHandler = async (requestData) => {
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
};
