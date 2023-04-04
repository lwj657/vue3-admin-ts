<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<<<<<<< HEAD
<script lang="ts">
export default defineComponent({
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
    // color: {
    //   type: String,
    //   default: '#889aa4',
    // },
=======
<script setup lang="ts">
import { computed, defineComponent } from 'vue'
const props = defineProps({
  iconClass: {
    type: String,
    required: true
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
  },
  className: {
    type: String,
    default: ''
  }
})

const iconName = computed(() => `#icon-${props.iconClass}`)
const svgClass = computed(() => {
  if (props.className) {
    return `svg-icon ${props.className}`
  }
  return 'svg-icon'
})
</script>

<<<<<<< HEAD
<style scope lang="scss">
=======
<style scoped lang="scss">
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
.sub-el-icon,
.nav-icon {
  display: inline-block;
  font-size: 15px;
  margin-right: 12px;
  position: relative;
}

.svg-icon {
  width: 1em;
  height: 1em;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
</style>
