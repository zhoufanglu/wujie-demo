const testHome = () => import('@/views/test/index.vue')
const propDemo = () => import('@/views/test/prop-demo/index.vue')
const longList_1 = () => import('@/views/longList/longList_1.vue')
const longList_2 = () => import('@/views/longList/longList_2.vue')
// 表格hook测试页面
const tableA = () => import('@/views/table-A/index.vue')
const tableB = () => import('@/views/table-B/index.vue')
const wujie = () => import('@/views/test/wujie/index.vue')
const child_app_1 = () => import('@/views/test/child-apps/child-app-1/index.vue')
const userManage = () => import('@/views/test/child-apps/user-manage/index.vue')

import type { RouteRecordRaw } from 'vue-router'

const test: RouteRecordRaw[] = [
  {
    path: '/longList_1',
    component: longList_1
  },
  {
    path: '/longList_2',
    component: longList_2
  },
  {
    path: '/test',
    component: testHome
  },
  {
    path: '/table-A',
    component: tableA
  },
  {
    path: '/table-B',
    component: tableB
  },
  {
    path: '/wujie',
    component: wujie,
    children: [
      {
        path: '/prop-demo',
        component: propDemo
      },
      {
        path: '/child-app-1',
        component: child_app_1
      },
      {
        path: '/userManage',
        component: userManage
      }
    ]
  }
]

export default test
