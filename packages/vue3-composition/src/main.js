import defaultOptions from './options'

//Components
import Provider from './components/provider.vue'
import Root from './components/list.vue'
import Items from './components/items.vue'
import InitialLoader from './components/initial-loader.vue'
import Loader from './components/loader.vue'
import Err from './components/error.vue'
import Pagination from './components/pagination.vue'
import Summary from './components/summary.vue'
import PerPage from './components/per-page.vue'
import Attributes from './components/attributes.vue'
import Search from './components/search.vue'
import LoadMore from './components/load-more.vue'
import GoTo from './components/go-to.vue'
import Refresh from './components/refresh.vue'
import Empty from './components/empty.vue'

const install = (app, userOptions = {}) => {
  const options = Object.assign({}, defaultOptions, userOptions)
  const prefix = options.componentPrefix

  app.provide('vueListOptions', options)

  app.component(`${prefix}VueListProvider`, Provider)
  app.component(`${prefix}VueList`, Root)
  app.component(`${prefix}VueListInitialLoader`, InitialLoader)
  app.component(`${prefix}VueListLoader`, Loader)
  app.component(`${prefix}VueListItems`, Items)
  app.component(`${prefix}VueListError`, Err)
  app.component(`${prefix}VueListPagination`, Pagination)
  app.component(`${prefix}VueListSummary`, Summary)
  app.component(`${prefix}VueListPerPage`, PerPage)
  app.component(`${prefix}VueListSearch`, Search)
  app.component(`${prefix}VueListLoadMore`, LoadMore)
  app.component(`${prefix}VueListGoTo`, GoTo)
  app.component(`${prefix}VueListRefresh`, Refresh)
  app.component(`${prefix}VueListAttributes`, Attributes)
  app.component(`${prefix}VueListEmpty`, Empty)
  // app.component(`${prefix}ListTable`, Table)
}

const plugin = {
  install,
}

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
