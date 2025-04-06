import { ofetch } from 'ofetch'

function stateManagerKey(endpoint, state) {
  return `vue-list--${endpoint}--${state?.version}`
}

export default {
  stateManager: {
    init(endpoint, state) {
      const allKeys = `vue-list--${endpoint}--`
      const latestKey = stateManagerKey(endpoint, state)
      const staleKeys = Object.keys(localStorage).filter(
        (key) => key.startsWith(allKeys) && key != latestKey,
      )
      staleKeys.forEach((key) => localStorage.removeItem(key))
    },

    set(endpoint, state) {
      const key = stateManagerKey(endpoint, state)
      localStorage.setItem(key, JSON.stringify(state))
    },

    get(endpoint, state) {
      const key = stateManagerKey(endpoint, state)
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

  async requestHandler(requestData) {
    console.log({ requestData })
    const { endpoint, search, filters, payload, perPage, page, sortBy, sortOrder } = requestData

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
