<template>
  <div>vue3推荐模板可以集成在你们的vscode或webstorm中，有助于快速开发</div>
</template>

<<<<<<< HEAD:src/views/example/vue3-template/Vue3Template.vue
<script setup lang="ts">
=======
<script setup>
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e:src/views/basic-demo/vue3-template/Vue3Template.vue
// 获取store和router

const props = defineProps({
  name: {
    require: true,
    default: 'fai',
    type: String
  }
})
const state = reactive({
  levelList: null
})

const routes = computed(() => 'value')
watch(
  () => props.name,
  (oldValue, newValue) => {},
  { immediate: true }
)

const router = useRouter()
onMounted(() => {
  console.log('页面挂载了')
})
const helloFunc = () => {
  console.log('helloFunc')
}
// 导出给父元素使用
defineExpose({ helloFunc })
// 导出属性到页面中使用
const { levelList } = toRefs(state)
</script>

<style scoped lang="scss"></style>
