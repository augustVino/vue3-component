import { widhInstall } from '@vino/utils/with-install'
import _Button from './src/button.vue'

const Button = widhInstall(_Button)

export default Button
export type { ButtonProps } from './src/button'

declare module 'vue' {
  export interface GlobalComponents {
    VButton: typeof Button
  }
}
