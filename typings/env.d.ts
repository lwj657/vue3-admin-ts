<<<<<<< HEAD
//  the ts of vite config file
/// <reference types="vite/client" />
export interface ImportMetaEnv {
  readonly VITE_APP_BASE_URL: string
  readonly VITE_APP_IMAGE_URL: string
  readonly VITE_APP_ENV: string
  // 更多环境变量...
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}
=======
declare global {
  interface ImportMetaEnv {
    readonly VITE_APP_BASE_URL: string
    readonly VITE_APP_IMAGE_URL: string
    readonly VITE_APP_ENV: string
    // 更多环境变量...
  }
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}
export {}
>>>>>>> dc5f3b2b2b09549f2d0a09a90ace81c4d3883b1e
