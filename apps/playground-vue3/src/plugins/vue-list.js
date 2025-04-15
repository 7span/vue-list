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

    const requests = [
      //DIRECTUS COUNT
      ofetch(`https://everest.7span.in/items/${endpoint}?aggregate[countDistinct]=id`).then(
        ({ data }) => data[0].countDistinct.id,
      ),

      //DIRECTUS DATA
      ofetch(`https://everest.7span.in/items/${endpoint}`, {
        params: {
          page,
          limit: perPage,
          search: search,
          sort,
          // filters: filters,
        },
      }).then(({ data }) => {
        return data
      }),
    ]

    return Promise.all(requests)
      .then(([count, items]) => {
        return {
          items,
          count,
        }
      })
      .catch((error) => {
        console.error({ error })
        const err = new Error('Failed to fetch data')
        err.name = 'NetworkError'
        throw err
      })
  },
}
