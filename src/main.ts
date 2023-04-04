import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'
import App from './App.vue'
<<<<<<< HEAD
const app = createApp(App)
import router from './router'
import '@/styles/index.scss' // global css
//import element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
app.use(ElementPlus, { size: 'mini', locale: zhCn })

// global mixin
// import elementMixin from '@/mixins/elementMixin'
// app.mixin(elementMixin)
// import commonMixin from '@/mixins/commonMixin'
// app.mixin(commonMixin)
// import routerMixin from '@/mixins/routerMixin'
// app.mixin(routerMixin)
// //import axios req
// import axiosReq from '@/utils/axiosReq'
// app.config.globalProperties.$axiosReq = axiosReq
=======
import router from './router'

//import theme
import './theme/index.scss'

//import unocss
import 'uno.css'

//i18n
import { setupI18n } from '@/lang'

import '@/styles/index.scss' // global css
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e

//svg-icon
import 'virtual:svg-icons-register'
import svgIcon from '@/icons/SvgIcon.vue'
<<<<<<< HEAD
app.component('SvgIcon', svgIcon)

//global mount moment-mini
// import $momentMini from 'moment-mini'
// app.config.globalProperties.$momentMini = $momentMini
//import global directive
import directive from '@/directive'
directive(app)
//import router  intercept
import './permission'

//element svg icon
import ElSvgIcon from '@/components/ElSvgIcon.vue'
app.component('ElSvgIcon', ElSvgIcon)

//error log  collection
import errorLog from '@/hooks/useErrorLog'
errorLog()

//pinia
import { createPinia } from 'pinia'

app.use(createPinia())

app.use(router).mount('#app')
=======
import directive from '@/directives'

//import router intercept
import './permission'

//import element-plus
import 'element-plus/dist/index.css'
const app = createApp(App)

//router
app.use(router)

//pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

//i18n
app.use(setupI18n)
app.component('SvgIcon', svgIcon)
directive(app)

//element-plus
app.use(ElementPlus)

app.mount('#app')
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
