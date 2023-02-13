<template>
  <div class="prop-child">
    <h4>prop-child</h4>
    <input :value="modelValue" type="text" @input="handleInputChange" />
    <br />
    <input :value="age" type="number" @input="handleInputChange2" />
    <br />
    <input type="text" :value="name" @input="handleInputChange3" />
  </div>
</template>

<script setup lang="ts">
  import { PropType, ref } from 'vue'
  const props = defineProps({
    modelValue: {
      type: String as PropType<string>,
      required: true,
      default: ''
    },
    age: {
      type: Number as PropType<number>,
      required: true
    },
    name: {
      type: String as PropType<string>,
      default: ''
    },
    nameModifiers: {
      type: Object as PropType<any>,
      default: () => ({})
    },
    name2: {
      type: String as PropType<string>,
      default: ''
    },
    name2Modifiers: {
      type: Object as PropType<any>,
      default: () => ({})
    }
  })

  const emit = defineEmits(['update:modelValue', 'update:age', 'update:name'])
  const handleInputChange = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
  }
  const handleInputChange2 = (e: Event) => {
    emit('update:age', Number((e.target as HTMLInputElement).value))
  }
  console.log(38, props)
  const handleInputChange3 = (e: Event) => {
    let value = (e.target as HTMLInputElement).value
    if (props!.nameModifiers!.custProp1) {
      value += '1'
    }
    if (props!.nameModifiers!.custProp2) {
      value += '2'
    }
    emit('update:name', value)
  }
</script>

<style scoped lang="scss">
  .prop-child {
    border: solid 1px red;
  }
</style>
