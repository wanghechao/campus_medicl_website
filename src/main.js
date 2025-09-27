
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import persist from "pinia-plugin-persistedstate"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

import App from './App.vue'
import router from './router'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }


app.use(createPinia().use(persist))
app.use(router)

app.mount('#app')
