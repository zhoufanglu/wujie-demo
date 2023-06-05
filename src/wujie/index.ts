import WujieVue from 'wujie-vue3'
import credentialsFetch from '@/tools/fetch'
import router from '@/router'

export default function loadWujie(app: any) {
  const props = {
    jump: (name: string) => {
      router.push({ name })
    }
  }

  const degrade =
    window.localStorage.getItem('degrade') === 'true' ||
    !window.Proxy ||
    !window.CustomElementRegistry

  const { setupApp } = WujieVue
  setupApp({
    name: 'child-app-1',
    url: 'http://192.168.17.3:4001/',
    exec: true,
    // props,
    fetch: credentialsFetch
    // degrade
    // ...lifecycles
  })
  app.use(WujieVue)
}
