import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/common.scss' // 样式

const app = createApp(App) // 创建实例

app.use(store)
  .use(router)

app.mount('#app')

// createApp(App).use(store).use(router).mount('#app')
