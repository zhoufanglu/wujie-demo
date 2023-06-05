import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from '@/router'
import pinia from '@/store/index'
// element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import loadWujie from '@/wujie'

import credentialsFetch from '@/tools/fetch'

const app = createApp(App)
loadWujie(app)

app.use(router).use(pinia).use(ElementPlus)
app.mount('#app')
