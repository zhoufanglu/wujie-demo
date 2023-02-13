import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import routes from '@/router/routes'

/**********************路由定义***********************/
const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router
