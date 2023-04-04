<<<<<<< HEAD
import { createRouter, createWebHashHistory, Router } from 'vue-router'
import Layout from '@/layout'
import { RouterTy } from '~/router'

export const constantRoutes: RouterTy = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  /** 登录路由 */
=======
import { createRouter, createWebHashHistory } from 'vue-router'
import basicDemo from './modules/basic-demo'
// import charts from './modules/charts'
// import richText from './modules/rich-text'
// import table from './modules/table'
// import excel from './modules/excel'
// import other from './modules/other'
// import guid from './modules/guid'
import type { RouterTypes } from '~/basic'
import Layout from '@/layout/index.vue'

export const constantRoutes: RouterTypes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },

>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        //using el svg icon, the elSvgIcon first when at the same time using elSvgIcon and icon
<<<<<<< HEAD
        meta: { title: '首页', elSvgIcon: 'Fold' }
      }
    ]
  },
=======
        meta: { title: 'Dashboard', elSvgIcon: 'Fold', affix: true }
      }
    ]
  },
  // {
  //   path: '/RBAC',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://github.jzfai.top/low-code-platform/#/permission-center/user-table-query',
  //       meta: { title: 'RBAC', icon: 'skill' }
  //     }
  //   ]
  // },
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
  {
    path: '/setting-switch',
    component: Layout,
    children: [
      {
        path: 'index',
<<<<<<< HEAD
        component: () => import('@/views/setting-switch'),
        name: 'SettingSwitch',
        meta: { title: '应用配置', icon: 'example' }
      }
    ]
  },
  {
    path: '/error-log',
    component: Layout,
    redirect: '/error-log/list',
    meta: { title: 'ErrorLog', icon: 'bug' },
    children: [
      {
        path: 'list',
        component: () => import('@/views/error-log'),
        name: 'ErrorLog',
        meta: { title: 'Error Log' }
      },
      {
        path: 'error-log-test',
        component: () => import('@/views/error-log/ErrorLogTest.vue'),
        name: 'ErrorLogTest',
        meta: { title: 'ErrorLog Test' }
      }
    ]
  },
  {
    path: '/writing-demo',
    component: Layout,
    meta: { title: 'Writing Demo', icon: 'eye-open' },
    alwaysShow: true,
    children: [
      {
        path: 'hook',
        component: () => import('@/views/example/hook/Hook.vue'),
        name: 'Hook',
        meta: { title: 'Hook-Demo' }
      },
      {
        path: 'vuex-use',
        component: () => import('@/views/example/vuex-use/VuexUse.vue'),
        name: 'VuexUse',
        meta: { title: 'Vuex-Demo' }
      },
      {
        path: 'mock-test',
        component: () => import('@/views/example/mock-test/MockTest.vue'),
        name: 'MockTest',
        meta: { title: 'Mock-Demo' }
      },
      {
        path: 'svg-icon',
        component: () => import('@/views/example/svg-icon/SvgIcon.vue'),
        name: 'SvgIcon',
        meta: { title: 'Svg-Demo' }
      },
      {
        path: 'parent-children',
        component: () => import('@/views/example/parent-children/Parent.vue'),
        name: 'Parent',
        meta: { title: 'Parent-Children' }
      },
      {
        path: 'keep-alive',
        component: () => import('@/views/example/keep-alive'),
        name: 'KeepAlive',
        //cachePage: cachePage when page enter, default false
        //leaveRmCachePage: remove cachePage when page leave, default false
        meta: { title: 'Keep-Alive', cachePage: true, leaveRmCachePage: false }
      },
      {
        path: 'tab-keep-alive',
        component: () => import('@/views/example/keep-alive/TabKeepAlive.vue'),
        name: 'TabKeepAlive',
        //closeTabRmCache: remove cachePage when tabs close, default false
        meta: { title: 'Tab-Keep-Alive', cachePage: true, closeTabRmCache: true }
      },
      {
        path: 'router-demo-f',
        name: 'routerDemoF',
        hidden: true,
        component: () => import('@/views/example/keep-alive/RouterDemoF.vue'),
        meta: { title: 'RouterDemo-F', activeMenu: '/writing-demo/keep-alive' }
      },
      {
        path: 'router-demo-s',
        name: 'routerDemoS',
        hidden: true,
        component: () => import('@/views/example/keep-alive/RouterDemoS.vue'),
        meta: { title: 'RouterDemo-S', activeMenu: '/writing-demo/keep-alive' }
      },
      {
        path: 'deep-router-keep-alive',
        name: 'DeepRouterKeepAlive',
        component: () => import('@/views/example/keep-alive/DeepRouterKeepAlive.vue'),
        //注：移除父容器页面缓存会把子页面一起移除了
        meta: { title: 'Deep KeepAlive', cachePage: true, leaveRmCachePage: true },
        alwaysShow: true,
        children: [
          {
            path: 'deep-children',
            name: 'DeepChildren',
            component: () => import('@/views/example/keep-alive/deep-children/DeepChildren.vue'),
            meta: { title: 'DeepChildren', cachePage: false, leaveRmCachePage: true }
          },
          {
            path: 'deep-children-sd',
            name: 'DeepChildrenSd',
            component: () => import('@/views/example/keep-alive/deep-children/DeepChildrenSd.vue'),
            meta: { title: 'DeepChildrenSd', cachePage: true, leaveRmCachePage: false }
          }
        ]
      }
    ]
  },
  {
    path: '/external-link',
    component: Layout,
    children: [
      {
        component: () => {},
        path: 'https://github.com/jzfai/vue3-admin-ts.git',
        meta: { title: '框架说明', icon: 'link' }
=======
        component: () => import('@/views/setting-switch/index.vue'),
        name: 'SettingSwitch',
        meta: { title: 'Setting Switch', icon: 'example' }
      }
    ]
  },

  {
    path: '/error-log',
    component: Layout,
    meta: { title: 'Error Log', icon: 'eye' },
    alwaysShow: true,
    children: [
      {
        path: 'error-log',
        component: () => import('@/views/error-log/index.vue'),
        name: 'ErrorLog',
        meta: { title: 'Error Index' }
      },
      {
        path: 'error-generator',
        component: () => import('@/views/error-log/error-generator.vue'),
        name: 'ErrorGenerator',
        meta: { title: 'Error Generator' }
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index.vue'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2/index.vue'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3/index.vue'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index.vue'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },
  basicDemo
  // guid,
  // richText,
  // charts,
  // table,
  // excel,
  // other
]

//角色和code数组动态路由
export const roleCodeRoutes: RouterTypes = [
  {
    path: '/roles-codes',
    component: Layout,
    redirect: '/roles-codes/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'lock',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/roles-codes/index.vue'),
        name: 'RolesCodes',
        meta: { title: 'Permission Switch' }
      },
      {
        path: 'roleIndex',
        component: () => import('@/views/roles-codes/role-index.vue'),
        name: 'RoleIndex',
        meta: { title: 'Role Index', roles: ['admin'] }
      },
      {
        path: 'code-index',
        component: () => import('@/views/roles-codes/code-index.vue'),
        name: 'CodeIndex',
        meta: { title: 'Code Index', code: 16 }
      },
      {
        path: 'button-permission',
        component: () => import('@/views/roles-codes/button-permission.vue'),
        name: 'ButtonPermission',
        meta: { title: 'Button Permission' }
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
      }
    ]
  }
]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
<<<<<<< HEAD
export const asyncRoutes: RouterTy = [
  // 404 page must be placed at the end !!!
  // using pathMatch install of "*" in vue-router 4.0
  { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
=======
export const asyncRoutes: RouterTypes = [
  // 404 page must be placed at the end !!!
  { path: '/:catchAll(.*)', name: 'CatchAll', redirect: '/404', hidden: true }
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

// export function resetRouter() {
//   const newRouter = createRouter({
//     history: createWebHashHistory(),
//     scrollBehavior: () => ({ top: 0 }),
//     routes: constantRoutes
//   })
// }

export default router
