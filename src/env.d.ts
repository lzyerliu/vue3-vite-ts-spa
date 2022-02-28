/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.ts'
declare module '*.vue'

interface ImportMetaEnv {
  readonly VITE_APP_ENV: string
  readonly VITE_APP_HOST: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
