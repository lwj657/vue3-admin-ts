<template>
  <div class="scroll-y">
<<<<<<< HEAD
    <div class="dashboard-container">
      <div class="dashboard-text">name: {{ username }}</div>
    </div>
    <div>update element-plus to 1.2.+, add svg icon, icon-font is abandoned</div>
    <i class="el-icon-add-location">abandoned</i>
    <div>update element-plus version to 2.0.1 release version the size options change to "large default small"</div>

    <div class="mt-2">global element svg icon</div>
    <ElSvgIcon name="Edit" :size="30" color="red" />

    <div class="mt-2">this is var from vite.config.js define</div>
    <div>{{ showObj }},{{ showObjString }}</div>

    <div class="mt-3 mb-1">
      <div class="mb-1">### How to migrate</div>
      <div class="mb-1">See how to migrate from **ElementUI** to **Element Plus** in our dedicated discussion:</div>
      <div class="mb-1">- For English: [#5658](https://github.com/element-plus/element-plus/discussions/5658)</div>
      <div class="mb-1">- 简体中文: [#5657](https://github.com/element-plus/element-plus/discussions/5657)</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store/user'

const userStore = useUserStore()
const username = computed(() => {
  return userStore.username
})

const showObj = ref(GLOBAL_VAR)
// eslint-disable-next-line no-undef
const showObjString = ref(GLOBAL_STRING)
</script>

<style lang="scss" scoped>
.dashboard {
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
=======
    <div v-lang class="mt-10px mb-10px font-bold">switch theme</div>
    <el-button @click="setTheme('base-theme')">base-theme(default)</el-button>
    <el-button @click="setTheme('lighting-theme')">lighting-theme</el-button>
    <el-button @click="setTheme('china-red')">china-red(default)</el-button>
    <el-button @click="setTheme('dark')">dark-theme</el-button>

    <div v-lang class="mt-10px mb-10px font-bold">switch size</div>
    <el-button @click="setSize('large')">large</el-button>
    <el-button @click="setSize('default')">default</el-button>
    <el-button @click="setSize('small')">small</el-button>

    <div v-lang class="mt-10px mb-10px font-bold">switch language</div>
    <el-button @click="changeLanguage('en')">en</el-button>
    <el-button @click="changeLanguage('zh')">zh</el-button>

    <!--example components -->
    <div v-lang class="mb-10px font-bold mt-20px">Button Group</div>
    <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
    <el-button type="success" @click="count++">count is: {{ count }}</el-button>
    <el-button type="warning" @click="count++">count is: {{ count }}</el-button>
    <el-button type="danger" @click="count++">count is: {{ count }}</el-button>
    <el-button type="info" @click="count++">count is: {{ count }}</el-button>

    <div v-lang class="mt-30px font-bold mb-10px">unocss using</div>
    <div class="mb-40px w-900px h-10px text-16px">
      <div>
        you can look
        <el-link class="text-red" href="https://uno.antfu.me/" target="_blank">https://uno.antfu.me/</el-link>
        to search you need such as "margin-left:10px" and then get the sortcut(ml-10px)
      </div>
    </div>

    <div v-lang class="mt-30px font-bold mb-10px">global var</div>
    {{ showObj }}
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useConfigStore } from '@/store/config'

const { setTheme, theme, setSize, size, setLanguage } = useConfigStore()
const route = useRoute()
const changeLanguage = (langParam) => {
  setLanguage(langParam, route.meta?.title)
}
const count = ref(0)
const showObj = ref(GLOBAL_VAR)
</script>
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
