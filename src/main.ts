import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import pinia from '@/store/index'
// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import credentialsFetch from '@/tools/fetch'
import WujieVue from 'wujie-vue3'
const { setupApp } = WujieVue

const props = {
  jump: (name: string) => {
    router.push({ name })
  }
}

const degrade =
  window.localStorage.getItem('degrade') === 'true' ||
  !window.Proxy ||
  !window.CustomElementRegistry

setupApp({
  name: 'child-app-1',
  url: 'http://192.168.17.3:4001/',
  exec: true,
  props,
  fetch: credentialsFetch,
  degrade
  // ...lifecycles
})

const app = createApp(App)
app.use(WujieVue)
app.use(router).use(pinia).use(ElementPlus)
app.mount('#app')
