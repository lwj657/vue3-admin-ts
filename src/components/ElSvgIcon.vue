<template>
  <el-icon :size="size" :color="color">
    <component :is="ElSvg[name]" />
  </el-icon>
</template>

<<<<<<< HEAD
<script setup>
=======
<script setup lang="ts">
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
import * as ElSvg from '@element-plus/icons-vue'
const props = defineProps({
  name: {
    require: true,
    default: 'Fold',
    type: String
  },
  size: {
    require: false,
    default: 18,
    type: Number
  },
  color: {
    require: false,
    default: '',
    type: String
  }
})
<<<<<<< HEAD
let { name } = props
=======
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
</script>

<style scoped lang="scss">
//.el-svg-icon {
//  width: 1em;
//  height: 1em;
//  margin-left: -2px; //el-svg-icon has some margin
//  font-size: 20px !important;
//  text-align: left !important;
//}
</style>
