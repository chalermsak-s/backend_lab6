import { createApp } from 'vue'
import '@/assets/main.css'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(router) // ใช้ router
app.mount('#app') // ติดตั้ง Vue app

