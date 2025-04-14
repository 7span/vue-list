import { ofetch } from 'ofetch'

function stateManagerKey(endpoint, version) {
  return `vue-list--${endpoint}--${version}`
}

export default {
  stateManager: {
    init(context) {
      const { endpoint, version } = context
      const allKeys = `vue-list--${endpoint}--`
      const latestKey = stateManagerKey(endpoint, version)
      const staleKeys = Object.keys(localStorage).filter(
        (key) => key.startsWith(allKeys) && key != latestKey,
      )
      staleKeys.forEach((key) => localStorage.removeItem(key))
    },

    set(context) {
      const { endpoint, version, search, page, perPage, sortBy, sortOrder, filters, attrSettings } =
        context
      const key = stateManagerKey(endpoint, version)
      localStorage.setItem(
        key,
        JSON.stringify({
          search,
          page,
          perPage,
          sortBy,
          sortOrder,
          filters,
          attrSettings,
        }),
      )
    },

    get(context) {
      const { endpoint, version } = context
      const key = stateManagerKey(endpoint, version)
      try {
        if (localStorage.getItem(key)) {
          return JSON.parse(localStorage.getItem(key))
        } else {
          return null
        }
      } catch {
        return null
      }
    },
  },

  async requestHandler(context) {
    console.log({ context })
    const { endpoint, search, filters, perPage, page, sortBy, sortOrder } = context

    let sort
    if (sortBy && sortOrder) {
      sort = (sortOrder == 'asc' ? '-' : '') + sortBy
    }

    //DIRECTUS COUNT
    const count = await ofetch(
      `https://everest.7span.in/items/${endpoint}?aggregate[countDistinct]=id`,
    ).then(({ data }) => data[0].countDistinct.id)

    return ofetch(`https://everest.7span.in/items/${endpoint}`, {
      params: {
        page,
        limit: perPage,
        search: search,
        sort,
        // filters: filters,
      },
      paramsSerializer: (params) => qs.stringify(params),
    })
      .then(({ data }) => {
        return {
          items: data,
          count: count,
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
