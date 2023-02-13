import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export function useMenu() {
  const router = useRouter()
  const route = useRoute()

  const menuList: any = ref([
    {
      name: '主-app',
      children: [
        {
          name: 'page-A',
          path: '/prop-demo',
          appFrom: 'main'
        }
      ]
    },
    {
      name: '子-app',
      children: [
        {
          name: 'child-app-1',
          path: '/child-app-1',
          appFrom: 'child-app'
        },
        {
          name: 'userManage',
          path: '/userManage',
          appFrom: 'userManage'
        }
      ]
    }
  ])
  const openMenuIndexList = menuList.value.map((i: any) => i.name)
  const activeIndex = ref('')

  const getActiveIndex = () => {
    // console.log(83, route.fullPath)
    activeIndex.value = route.path
    // 遍历第二层菜单menu， 如果路由包含 path, activeIndex就是该path的
    menuList.value.forEach((menu: any) => {
      menu.children.forEach((subMenu: any) => {
        if (route.path.includes(subMenu.path)) {
          activeIndex.value = subMenu.path
        }
      })
    })
  }
  getActiveIndex()

  const menuItemClick = async (item: any) => {
    activeIndex.value = item.path
    await router.push(item.path)
  }

  return { menuList, openMenuIndexList, activeIndex, menuItemClick }
}
