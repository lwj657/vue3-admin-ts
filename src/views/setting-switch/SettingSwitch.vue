<template>
  <div class="scroll-y">
<<<<<<< HEAD
    <h3 class="mb-2">props operate demo of settings.js</h3>
    <div class="rowSS">
      <div class="mb-1">
        page layout related
        <div class="mt-2">
          sidebarLogo：
          <el-switch v-model="appStore.settings.sidebarLogo" />
        </div>
        <div class="mt-3">
          showNavbarTitle：
          <el-switch v-model="appStore.settings.showNavbarTitle" />
        </div>
        <div class="mt-3">
          ShowDropDown：
          <el-switch v-model="appStore.settings.ShowDropDown" />
        </div>
        <div class="mt-3">
          showHamburger：
          <el-switch v-model="appStore.settings.showHamburger" />
        </div>
        <div class="mt-3">
          showLeftMenu：
          <el-switch v-model="appStore.settings.showLeftMenu" />
        </div>
        <div class="mt-3">
          showTagsView：
          <el-switch v-model="appStore.settings.showTagsView" />
        </div>
        <div class="mt-3">
          showTopNavbar：
          <el-switch v-model="appStore.settings.showTopNavbar" />
        </div>
      </div>

      <div class="mb-1 ml-6">
        page animation related
        <div class="mt-2">
          mainNeedAnimation：places to "settings file" for setting
          <!-- <el-switch v-model="appStore.settings.mainNeedAnimation" />-->
        </div>
        <div class="mt-3">
          isNeedNprogress：
          <el-switch v-model="appStore.settings.isNeedNprogress" />
        </div>
      </div>
    </div>
    <div class="mt-2 mb-1">store.commit to change</div>
    <el-button type="primary" @click="testChangeSettings">testChangeSettings</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app'

const settings = computed(() => {
  return appStore.settings || {}
})

const appStore = useAppStore()
const testChangeSettings = () => {
  appStore.M_settings({ sidebarLogo: !settings.value.sidebarLogo })
}

const source = ref(false)
const sourceFun = () => {
  source.value = !source.value
}
const handle = () => {
  new Promise((resolve, reject) => {
    reject('reject promise')
  }).then((res) => {
    console.log('ok')
  })
}

const flag = ref(null)

const consoleErrorFun = () => {
  console.error('console.error')
}

const normalError = () => {
  throw new Error(' throw new Error("")\n')
}
const { proxy }: any = getCurrentInstance()
const updateReq = () => {
  return proxy
    .$axiosReq({
      // baseURL: 'http://8.135.1.141/micro-service-test',
      url: '/integration-front/brand/updateBy',
      data: { id: 'fai' },
      method: 'put',
      isParams: true,
      bfLoading: true
    })
    .then(() => {})
  // .catch((err) => {
  //   console.log('接口catch', err)
  // })
}
</script>

<style scoped lang="scss"></style>
=======
    <h3 class="mb-20px">props operate demo of settings.js</h3>
    <div class="rowSS">
      <div class="mb-10px">
        <div class="font-bold text-20px">page layout related</div>
        <div class="mt-20px">
          sidebarLogo：
          <el-switch v-model="settings.sidebarLogo" />
        </div>
        <div class="mt-30px">
          showNavbarTitle：
          <el-switch v-model="settings.showNavbarTitle" />
        </div>
        <div class="mt-30px">
          ShowDropDown：
          <el-switch v-model="settings.ShowDropDown" />
        </div>
        <div class="mt-30px">
          showHamburger：
          <el-switch v-model="settings.showHamburger" />
        </div>
        <div class="mt-30px">
          showLeftMenu：
          <el-switch v-model="settings.showLeftMenu" />
        </div>
        <div class="mt-30px">
          showTagsView：
          <el-switch v-model="settings.showTagsView" />
        </div>
        <div class="mt-30px">
          showTopNavbar：
          <el-switch v-model="settings.showTopNavbar" />
        </div>
      </div>
      <div class="mb-10px ml-60px">
        <div class="font-bold text-20px">page animation related</div>
        <div class="mt-20px">mainNeedAnimation：places to "settings file" for setting</div>
        <div class="mt-30px">
          isNeedNprogress：
          <el-switch v-model="settings.isNeedNprogress" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { settings } = storeToRefs(useBasicStore())
</script>
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
