<template>
  <div class="p-wujie">
    <div class="side-bar">
      <el-menu
        :default-openeds="openMenuIndexList"
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
      >
        <el-sub-menu v-for="(menu, index) in menuList" :key="index" :index="menu.name">
          <template #title>
            <span>{{ menu.name }}</span>
          </template>
          <el-menu-item
            v-for="menuChild in menu.children"
            :key="menuChild.path"
            :index="menuChild.path"
            @click="menuItemClick(menuChild)"
          >
            {{ menuChild.name }}
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="content">
      <div style="background-color: #eee">
        {{ activeIndex }}
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useMenu } from '@/views/test/wujie/useMenu'

  const { menuList, openMenuIndexList, activeIndex, menuItemClick } = useMenu()
</script>

<style scoped lang="scss">
  .p-wujie {
    color: $theme;
    display: flex;
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    .side-bar {
      width: 200px;
      height: 100%;
      //box-shadow: 1px 2px 10px 0px rgba(0, 0, 0, .1);
      box-shadow: 1px 1px 0 0 rgba(0, 0, 0, 0.1);
      padding-top: 20px;
      box-sizing: border-box;
      overflow: hidden;
    }
    .content {
      width: 100%;
    }
  }
</style>
