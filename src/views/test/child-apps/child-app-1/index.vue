<template>
  <div class="child-app-1">
    <WujieVue
      width="100%"
      height="100%"
      name="child-app-1"
      :alive="true"
      :url="url"
      :sync="true"
    ></WujieVue>
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
  import { useWujie } from '@/views/test/child-apps/child-app-1/useWujie'
  const { url, fetch, props, beforeLoad, beforeMount, afterMount, beforeUnmount, afterUnmount } =
    useWujie()

  const jump = (name) => {
    console.log(20, name)
  }
</script>

<style scoped lang="scss">
  .test {
  }
</style>
