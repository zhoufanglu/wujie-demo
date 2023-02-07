import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import pinia from '@/store/index'
// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import WujieVue from 'wujie-vue3'
const { setupApp } = WujieVue

const props = {
  jump: (name: any) => {
    router.push({ name })
  }
}

setupApp({
  name: 'child-app-1',
  url: '//http://192.168.17.3:4001/child-app-1/#/HelloWorld/'
  /*exec: true,
  props,
  //fetch: credentialsFetch,
  prefix: { 'prefix-dialog': '/dialog', 'prefix-location': '/location' },
  degrade,
  ...lifecycles*/
})

const app = createApp(App)
app.use(WujieVue)
app.use(router).use(pinia).use(ElementPlus)
app.mount('#app')
