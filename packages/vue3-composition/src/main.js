import defaultOptions from './options'

//Components
import Root from './components/Root.vue'
import Pagination from './components/Pagination.vue'
import Counter from './components/Counter.vue'
import PerPage from './components/PerPage.vue'
import Attributes from './components/Attributes.vue'
import Search from './components/Search.vue'
import LoadMore from './components/LoadMore.vue'
import GoTo from './components/GoTo.vue'

//Layout
import Table from './layouts/table/Index.vue'

const install = (app, userOptions = {}) => {
  const options = Object.assign({}, defaultOptions, userOptions)
  const prefix = options.componentPrefix

  app.provide('vueList', options)

  app.component(`${prefix}List`, Root)
  app.component(`${prefix}ListPagination`, Pagination)
  app.component(`${prefix}ListCounter`, Counter)
  app.component(`${prefix}ListPerPage`, PerPage)
  app.component(`${prefix}ListAttributes`, Attributes)
  app.component(`${prefix}ListSearch`, Search)
  app.component(`${prefix}ListLoadMore`, LoadMore)
  app.component(`${prefix}ListTable`, Table)
  app.component(`${prefix}ListGoTo`, GoTo)
}

const plugin = {
  install,
}

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
