<<<<<<< HEAD
interface SettingTy {
  title: string
  sidebarLogo: boolean
  showLeftMenu: boolean
  ShowDropDown: boolean
  showHamburger: boolean
  isNeedLogin: boolean
  isNeedNprogress: boolean
  showTagsView: boolean
  tagsViewNum: number
  openProdMock: boolean
  errorLog: string | Array<string>
  permissionMode: string
  delWindowHeight: string
  tmpToken: string
  showNavbarTitle: boolean
  showTopNavbar: boolean
  mainNeedAnimation: boolean
  viteBasePath: string
}

const setting: SettingTy = {
  title: 'Vue3 Admin Ts',
=======
import packageJson from '../package.json'
import type { SettingsConfig } from '~/basic'
export const settings: SettingsConfig = {
  title: packageJson.name,
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,
  /**
   * @type {boolean} true | false
   * @description Whether show the title in Navbar
   */
  showNavbarTitle: false,
  /**
   * @type {boolean} true | false
   * @description Whether show the drop-down
   */
  ShowDropDown: true,
  /**
   * @type {boolean} true | false
   * @description Whether show Hamburger
   */
  showHamburger: true,
  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showLeftMenu: true,
  /**
   * @type {boolean} true | false
   * @description Whether show TagsView
   */
<<<<<<< HEAD
  showTagsView: false,
=======
  showTagsView: true,
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
  /**
   * @description TagsView show number
   */
  tagsViewNum: 6,
  /**
   * @type {boolean} true | false
   * @description Whether show the top Navbar
   */
  showTopNavbar: true,
  /* page  animation related*/
  /**
   * @type {boolean} true | false
   * @description Whether need animation of main area
   */
<<<<<<< HEAD
  mainNeedAnimation: true,
=======
  mainNeedAnimation: false,
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
  /**
   * @type {boolean} true | false
   * @description Whether need nprogress
   */
  isNeedNprogress: true,

  /*page login or other*/
  /**
   * @type {boolean} true | false
   * @description Whether need login
   */
  isNeedLogin: true,
  /**
<<<<<<< HEAD
   * @type {string} 'roles' | 'code' | 'roleCode'
   */
  permissionMode: 'roleCode',
=======
   * @type {string} 'rbac'| 'roles' | 'code'
   */
  permissionMode: 'roles',
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
  /**
   * @type {boolean} true | false
   * @description Whether  open prod mock
   */
  openProdMock: true,
  /**
   * @type {string | array} 'dev' | ['prod','test','dev'] according to the .env file props of VITE_APP_ENV
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['dev', 'test']
   */
  errorLog: ['prod'],
  /*
   * table height(100vh-delWindowHeight)
   * */
  delWindowHeight: '210px',
  /*
   * setting dev token when  isNeedLogin is setting false
   * */
  tmpToken: 'tmp_token',

  /*
   * vite.config.js base config
<<<<<<< HEAD
   * such as
   * */
  viteBasePath: '/vue3-admin-ts/'
=======
   * */
  viteBasePath: './',

  /*
   * i18n setting default language
   * en/zh
   * */
  defaultLanguage: 'en',
  /*
   *  default theme
   * base-theme/lighting-theme/dark-theme
   * */
  defaultTheme: 'base-theme',
  /*
   * setting default defaultSize
   * large / default /small
   * */
  defaultSize: 'small',
  /*
   * vite.config.js base config
   * such as
   * */
  //平台id  2->vue3-admin-plus
  plateFormId: 2
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
}

export default settings
