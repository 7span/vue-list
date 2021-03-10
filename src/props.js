export default {
  header: {
    type: Boolean,
    default: true
  },
  footer: {
    type: Boolean,
    default: true
  },
  slim: {
    type: Boolean,
    default: false
  },
  pagination: {
    type: Boolean,
    default: true
  },
  actions: {
    type: Array,
    default: () => ["search", "settings", "filters", "refresh"]
  },
  endpoint: String,
  title: {
    default: ""
  },
  page: {
    type: Number,
    default: 1
  },
  perPage: {
    type: Number,
    default: 25
  },

  paginationMode: {
    type: String,
    default: "querystring",
    validator(value) {
      return ["querystring", "internal", "infinite"].includes(value);
    }
  },
  params: Object,
  data: Array,
  filters: Object,
  debounce: {
    type: Number,
    default: 1000
  },
  sortBy: String,
  sortOrder: String,
  loader: {
    type: Boolean,
    default: true
  },
  attrs: {
    type: Array
  },
  //An adaptor which defines which attributes to be passed to layout
  //This is helpful when you don't know which attributes are sent from API
  //Also useful when you need to show all the columns except few.
  attrsAdaptor: {
    type: Function
  },
  //You can define search query manually if internal searchbox is not being used.
  search: {
    type: String
  }
};
