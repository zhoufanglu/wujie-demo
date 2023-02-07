import hostMap from '@/tools/hosMap'

export function useWujie() {
  const url = hostMap('//192.168.17.3:4001/child-app-1/#/HelloWorld')
  const props = {}
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
