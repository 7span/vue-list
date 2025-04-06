import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ui from '@nuxt/ui/vue-plugin'
import './assets/main.css'
import VueList from '@7span/vue-list/src/main'
import vueListOptions from './plugins/vue-list'

const app = createApp(App)

app.use(router)
app.use(ui)
app.use(VueList, vueListOptions)
app.mount('#app')
