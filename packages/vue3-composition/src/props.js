export default {
  endpoint: {
    type: String,
  },
  meta: {
    /**
     * Additional request payload while making requests.
     * requestHandler will get this in the context with `meta` key
     */
    default: () => {},
  },
  filters: {
    /**
     * The filter object will be reactive.
     * If the props is updated, results will be fetched again.
     */
    type: Object,
  },
  page: {
    /**
     * Default page to load. This is an initial value.
     * The actual state will be in localPage.
     */
    type: Number,
    default: 1,
  },
  perPage: {
    /**
     * Number of results to fetch in the request. This is an initial value.
     * The actual state will be in localPerPage.
     */
    type: Number,
    default: 25,
  },
  sortBy: {
    /**
     * Define a column to sortBy. This is an initial value.
     * The actual state will be in localSortBy.
     */
    type: String,
  },
  sortOrder: {
    /**
     * Ascending or Descending? This is an initial value.
     * The actual state will be in localSortOrder.
     */
    type: String,
    default: 'desc',
    validator(value) {
      return ['asc', 'desc'].includes(value)
    },
  },
  search: {
    /**
     * Default search query to use. The prop is just an initial value.
     * The actual state will be in localSearch.
     */
    type: String,
  },
  attrs: {
    /**
     * #TODO: Rename this?
     * List of attributes to display in a list
     */
    type: Array,
  },
  requestHandler: {
    /**
     * A function which makes API requests. The arguments will have all the state related data.
     * If not provided, the plugin's global request handler will be used.
     */
    type: Function,
  },
  version: {
    /**
     * Version is helpful for stateManager to identify new deployments.
     * If any changes are made in the configuration, update the version number.
     * This will help in stateManager to cleanup stale states.
     */
    type: [String, Number],
    default: 1,
  },
  hasPaginationHistory: {
    /**
     * #TODO: Rename this?
     * Enable pagination history in URL.
     * When enabled, the page number will be added in the URL as query param.
     */
    type: Boolean,
    default: true,
  },

  paginationMode: {
    /**
     * Pagination mode:
     * 1. pagination: Standard pagination with page numbers
     * 3. loadMore: Manual load more button
     */
    type: String,
    default: 'pagination',
    validator(value) {
      return ['pagination', 'loadMore'].includes(value)
    },
  },
}
