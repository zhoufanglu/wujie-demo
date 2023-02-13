<template>
  <div class="user-manage">
    用户管理
    <WujieVue
      width="100%"
      height="100%"
      :sync="true"
      name="userManage"
      url="http://192.168.17.3:4004/userManage/#/login"
    ></WujieVue>
    <!--    <iframe src="http://192.168.17.3:4004/userManage/#/login"></iframe>-->
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
  .user-manage {
    border: solid 1px red;
  }
</style>
