/**
 * Default Configuration Object
 */

const defaultConfig = {
  responseAdapter(res) {
    return {
      data: res.data,
      count: res.count
    };
  }
};

const gridTableConfig = {};

const masnoryConfig = {
  size: 5
};

const paginationConfig = {
  // querystring: Works on URL params
  // internal: Works on internal variable
  page: 1,
  mode: "querystring",
  perPage: 25,
  perPageKey: "per_page",
  maxPagingLinks: 5,
  perPageOptions: [
    {
      label: 10,
      value: 10
    },
    {
      label: 25,
      value: 25
    },
    {
      label: 50,
      value: 50
    },
    {
      label: 100,
      value: 100
    }
  ]
};

export { defaultConfig, gridTableConfig, masnoryConfig, paginationConfig };
