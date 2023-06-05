<template>
  <div class="child-app-1">
    {{ viteUrl }}
    <!-- sync路由是否同步， 同步会编码   -->
    <WujieVue width="100%" height="100%" name="child-app-1" :url="viteUrl"></WujieVue>
    <!--    :sync="true"
    :fetch="fetch"
    :props="props"
    :before-load="beforeLoad"
    :before-mount="beforeMount"
    :after-mount="afterMount"
    :before-unmount="beforeUnmount"
    :after-unmount="afterUnmount"-->
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useWujie } from '@/views/test/child-apps/child-app-1/useWujie'
  import hostMap from '@/tools/hosMap'
  const route = useRoute()
  const { url, fetch, props, beforeLoad, beforeMount, afterMount, beforeUnmount, afterUnmount } =
    useWujie()
  const viteUrl = computed(() => {
    //http://192.168.16.189:9001/test
    return hostMap('//192.168.16.189:9001/') + route.params.path
  })
</script>

<style scoped lang="scss">
  npm .test {
  }
</style>
