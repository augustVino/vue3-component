import { Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export function widhInstall<T>(comp: T) {
  ;(comp as SFCWithInstall<T>).install = function (app) {
    const { name } = comp as unknown as { name: string }
    // 将组件注册成全局的组件
    app.component(name, comp)
  }
  return comp as SFCWithInstall<T>
}
