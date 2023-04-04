<<<<<<< HEAD
//global declare file
//let  function  namespace  class ,module
declare let GLOBAL_let: Array<any>
declare let GLOBAL_STRING: string
declare let onlyOneChild: any
declare let GLOBAL_VAR: any

//declare import module
declare module '*/**'
declare module '*'
=======
import type { defineOptions as _defineOptions } from 'unplugin-vue-define-options/macros.d.ts'
declare global {
  interface ObjKeys {
    [propName: string]: any
  }
  const GLOBAL_VAR: String
  const defineOptions: typeof _defineOptions
  const $ref: any
}
export {}
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
