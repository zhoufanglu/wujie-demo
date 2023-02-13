<template>
  <div class="prop-demo">
    <form action="/dolphinscheduler/log/download-log">
      <button>提交</button>
    </form>
    <el-button @click="openDialog('A')">open-1</el-button>
    <el-button @click="openDialog('B')">open-2</el-button>
    {{ variables.value }}
    <Dialog
      ref="dialogRef"
      v-model:dialogVisible="variables.visible_A"
      value:variables.value
    ></Dialog>
    <Dialog2 v-model:dialogVisible="variables.visible_B"></Dialog2>
    <!--    <Dialog2 v-model:dialogVisible="dialogVisible"></Dialog2>-->
    <PropChild
      v-model="searchValue"
      v-model:age="age"
      v-model:name.custProp1="name"
      v-model:name2.custProp2="name2"
    ></PropChild>
    <h4>searchValue: {{ searchValue }}</h4>
    <h4>age: {{ age }}</h4>
    <h4>name: {{ name }}</h4>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import PropChild from '@/views/test/prop-demo/PropChild.vue'
  import Dialog from './Dialog.vue'
  import Dialog2 from './Dialog2.vue'
  import { useDialog } from '@/views/test/prop-demo/useDialog'
  const { variables } = useDialog()
  const openDialog = (type: string) => {
    if (type === 'A') {
      variables.visible_A = true
    } else {
      variables.visible_B = true
    }
  }
  const searchValue = ref('father')
  const age = ref(18)
  const name = ref('a')
  const name2 = ref('2')
</script>

<style scoped lang="scss">
  .prop-demo {
    .input-box {
      border: solid 1px red;
      padding: 20px;
    }
  }
</style>
