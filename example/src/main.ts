import { createApp } from 'vue'
import App from './App.vue'

import Button from '@vino/components/button'
import '@vino/theme-chalk/src/index.scss'

const plugins = [Button]

const app = createApp(App)

plugins.forEach(plugin => app.use(plugin))

app.mount('#app')
