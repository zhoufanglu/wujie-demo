<template>
  <div class="child-app-1">
    <WujieVue
      width="100%"
      height="100%"
      name="child-app-1"
      :url="url"
      :sync="true"
      :fetch="fetch"
      :props="props"
      :before-load="beforeLoad"
      :before-mount="beforeMount"
      :after-mount="afterMount"
      :before-unmount="beforeUnmount"
      :after-unmount="afterUnmount"
    ></WujieVue>
  </div>
</template>

<script setup>
  import { useWujie } from '@/views/test/child-apps/child-app-1/useWujie'
  const { url, fetch, props, beforeLoad, beforeMount, afterMount, beforeUnmount, afterUnmount } =
    useWujie()
</script>

<style scoped lang="scss">
  .test {
  }
</style>
