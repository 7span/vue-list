import defaultOptions from './options'

//Components
import Root from './components/list.vue'
import Items from './components/items.vue'
import InitialLoader from './components/initial-loader.vue'
import Loader from './components/loader.vue'
import Err from './components/error.vue'
import Pagination from './components/pagination.vue'
import Counter from './components/counter.vue'
import PerPage from './components/per-page.vue'
import Attributes from './components/attributes.vue'
import Search from './components/search.vue'
import LoadMore from './components/load-more.vue'
import GoTo from './components/go-to.vue'

//Layout
// import Table from './layouts/table/Index.vue'

const install = (app, userOptions = {}) => {
  const options = Object.assign({}, defaultOptions, userOptions)
  const prefix = options.componentPrefix

  app.provide('vueList', options)

  app.component(`${prefix}List`, Root)
  app.component(`${prefix}ListInitialLoader`, InitialLoader)
  app.component(`${prefix}ListLoader`, Loader)
  app.component(`${prefix}ListItems`, Items)
  app.component(`${prefix}ListError`, Err)
  app.component(`${prefix}ListPagination`, Pagination)
  app.component(`${prefix}ListCounter`, Counter)
  app.component(`${prefix}ListPerPage`, PerPage)
  app.component(`${prefix}ListAttributes`, Attributes)
  app.component(`${prefix}ListSearch`, Search)
  app.component(`${prefix}ListLoadMore`, LoadMore)
  app.component(`${prefix}ListGoTo`, GoTo)
  // app.component(`${prefix}ListTable`, Table)
}

const plugin = {
  install,
}

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
