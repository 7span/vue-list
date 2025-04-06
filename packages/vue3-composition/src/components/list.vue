<template>
  <div class="v-list">
    <slot v-bind="scope" />
  </div>
</template>

<script setup>
import { ref, computed, inject, provide, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { attrSerializer } from '../utils'

const route = useRoute()
const router = useRouter()

const props = defineProps({
  endpoint: {
    type: String,
  },
  config: {
    type: Object,
  },
  requestPayload: {
    /**
     * Additional request payload while making requests.
     * requestHandler will get this in the context with `payload` key
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
  paginationHistory: {
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
})

const emit = defineEmits(['onItemSelect', 'onResponse', 'afterPageChange', 'afterLoadMore'])
const filters = defineModel('filters')
const globalOptions = inject('vueList')
const requestHandler = props.requestHandler || globalOptions.requestHandler

/**
 * Local reactive state variables that mirror the props.
 * Props serve as initial values only, while these local variables
 * track the actual state that changes based on user interactions.
 * This separation allows the component to maintain its own state
 * independently from the parent component's props.
 */
function getState() {
  try {
    const oldState = globalOptions.stateManager.get(props.endpoint, {
      requestPayload: props.requestPayload,
      version: props.version,
    })

    /**
     * For loadMore pagination mode, reset page to 1 since we always
     * load from the beginning in "load more" scenarios
     */
    let page
    if (props.paginationMode == 'loadMore') {
      page = 1
    } else {
      // Always give priority to query param over localState.
      page = Number(route.query.page) || oldState?.pagination?.page || props.page
    }

    return {
      page,
      perPage: oldState?.pagination?.perPage || props.perPage,
      sortBy: oldState?.sortBy || props.sortBy,
      sortOrder: oldState?.sortOrder || props.sortOrder,
      search: oldState?.search || props.search,
      attrSettings: oldState?.attrSettings,
      filters: oldState?.filters || props.filters,
    }
  } catch (err) {
    console.error(err)
    return {}
  }
}
const state = getState()

const localPage = ref(state.page)
const localPerPage = ref(state.perPage)
const localSortBy = ref(state.sortBy)
const localSortOrder = ref(state.sortOrder)
const localSearch = ref(state.search)
const attrSettings = ref(state.attrSettings)
filters.value = state.filters

/**
 * confirmedPage is only updated after a successful response for the requested page.
 * This prevents index flashing that can occur when the page variable changes
 * before the server response is received.
 */
const confirmedPage = ref()

const items = ref([])
const selection = ref([])
const error = ref(false)
const response = ref()
const count = ref(0)
const loading = ref(false)
const initializingState = ref(true)

/**
 * Determines the attributes to display in the list:
 * 1. Uses attrs from props if provided
 * 2. Falls back to extracting keys from first response item if attrs not provided
 * The attr.name is used as key to find corresponding values in the response data
 */
const serializedAttrs = computed(() => {
  const attrs = props.attrs || Object.keys(items.value?.[0] || {})
  return attrSerializer(attrs)
})

/**
 * Only add keys which are meant to be saved into the state manager.
 */
const statePayload = computed(() => {
  return {
    version: props.version,
    search: localSearch.value,
    page: localPage.value,
    perPage: localPerPage.value,
    sortBy: localSortBy.value,
    sortOrder: localSortOrder.value,
    filters: filters.value,
    attrSettings: attrSettings.value,
  }
})

const isEmpty = computed(() => {
  return items.value?.length == 0
})

const scope = computed(() => {
  return {
    //state
    items: items,
    response: response,
    loading: loading,
    selection: selection,
    error: error,

    //computed
    serializedAttrs: serializedAttrs,
    isEmpty: isEmpty,
    statePayload: statePayload,

    //methods
    refresh: refresh,
  }
})

const isLoadMore = computed(() => {
  return props.paginationMode == 'loadMore'
})

function setPage(value, payload) {
  localPage.value = value
  getData(payload)
}

function updateStateManager() {
  globalOptions.stateManager.set(props.endpoint, statePayload.value)
}

function setItems(res) {
  emit('onResponse', res)
  if (isLoadMore.value) {
    items.value = items.value.concat(res.items)
    emit('afterLoadMore', res)
  } else {
    items.value = res.items
    emit('afterPageChange', res)
  }
  count.value = res.count
}

function setSearch(value) {
  localSearch.value = value
  setPage(1)
}

function setSort({ by, order }) {
  localSortBy.value = by
  localSortOrder.value = order
  setPage(1)
}

function setSelection(value) {
  selection.value = value
}

function refresh(payload) {
  if (isLoadMore.value) {
    setPage(1, payload)
  } else {
    getData(payload)
  }
}

function setPerPage(value) {
  localPerPage.value = value
  setPage(1)
}

function loadMore() {
  localPage.value++
  getData()
}

/**
 * Update the config of an attribute
 *
 * @param {name} string Name of an attribute
 * @param {prop} string A property to update
 * @param {value} string A value to set
 */
function updateAttr(name, prop, value) {
  if (!attrSettings.value[name]) {
    attrSettings.value[name] = {}
  }
  attrSettings.value[name][prop] = value
  updateStateManager()
}

function clearState() {
  globalOptions.stateManager.set(props.endpoint)
}

/**
 * Updates URL query parameters for pagination.
 *
 * When component loads initially, page=1 is the default and no query param is added.
 * To keep routing history clean, we avoid adding page=1 parameter when returning to first page.
 * Query params are only updated for pages > 1 to maintain expected browser navigation.
 */
function updateUrl() {
  if (!isLoadMore.value && route.query.page != localPage.value && props.paginationHistory) {
    router.push({
      query: {
        ...(route.query || {}), // Keep already existing query params in URL
        page: localPage.value,
      },
    })
  }
}

function getData(payload = {}) {
  error.value = false
  loading.value = true

  requestHandler({
    method: 'get',
    endpoint: props.endpoint,
    config: props.config,
    payload: {
      ...props.requestPayload,
      ...payload,
    },
    ...statePayload.value,
  })
    .then((res) => {
      response.value = res

      //Update the state manager as page is changed
      updateStateManager()

      //Reset the state as page is changed
      selection.value = []

      setItems(res)
      updateUrl()

      //Setting this will update the index in the UI.
      confirmedPage.value = localPage.value

      initializingState.value = false
    })
    .catch((err) => {
      error.value = err
      // Re-throw error to allow error handling at options level
      throw new Error(err)
    })
    .finally(() => {
      loading.value = false
    })
}

/**
 * Watch for changes in filters to trigger data refresh.
 * When filters change:
 * 1. Reset page back to 1 to show first page of new filtered results
 * 2. Fetch new data using updated filters and current params
 * Note: Skip during initial state setup to avoid duplicate requests
 */
watch(filters, () => {
  if (initializingState.value) return
  setPage(1)
})

watch(selection, (newValue, oldValue) => {
  emit('onItemSelect', newValue, oldValue)
})

watch(
  () => route.query.page,
  (newValue) => {
    if (!newValue) {
      setPage(1)
    } else if (localPage.value !== Number(newValue)) {
      setPage(Number(newValue))
    }
  },
)

// Provide State
provide('attrSettings', attrSettings)
provide('items', items)
provide('count', count)
provide('error', error)
provide('localSortBy', localSortBy)
provide('localSortOrder', localSortOrder)
provide('localPage', localPage)
provide('localPerPage', localPerPage)
provide('loading', loading)
provide('localSearch', localSearch)
provide('selection', selection)
provide('confirmedPage', confirmedPage)
provide('paginationMode', props.paginationMode)
provide('initializingState', initializingState)

// Provide Methods
provide('setSearch', setSearch)
provide('setSort', setSort)
provide('setSelection', setSelection)
provide('setItems', setItems)
provide('setPage', setPage)
provide('setPerPage', setPerPage)
provide('updateAttr', updateAttr)
provide('loadMore', loadMore)
provide('attrs', serializedAttrs)

/**
 * If stateManager does not provide attrSettings,
 * we need to initialize it with default values.
 */
if (!attrSettings.value) {
  attrSettings.value = serializedAttrs.value.reduce((value, item) => {
    value[item.name] = {
      visible: true,
    }
    return value
  }, {})
}

/**
 * Initialize the state manager.
 * This step allows cleaning up stale states when version changes.
 */
globalOptions.stateManager.init(props.endpoint, {
  requestPayload: props.requestPayload,
  version: props.version,
})

setPage(localPage.value)
</script>
