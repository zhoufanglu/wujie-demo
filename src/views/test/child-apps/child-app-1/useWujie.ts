import hostMap from '@/tools/hosMap'

export function useWujie() {
  // const url = hostMap('//192.168.17.3:4001/child-app-1/HelloWorld')
  const url = 'http://192.168.9.20:9001/#/test' //http://192.168.9.20:9001/#/test
  const props = { data: 'main-app-value-100' }
  const beforeLoad = () => {}
  const beforeMount = () => {}
  const afterMount = () => {}
  const beforeUnmount = () => {}
  const afterUnmount = () => {}

  return {
    url,
    fetch,
    props,
    beforeLoad,
    beforeMount,
    afterMount,
    beforeUnmount,
    afterUnmount
  }
}
