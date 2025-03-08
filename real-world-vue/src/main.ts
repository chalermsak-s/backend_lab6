import { createApp } from 'vue'
import { createPinia } from "pinia";
import '@/assets/main.css'

import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'

const pinia = createPinia();
const app = createApp(App)

app.use(pinia);
app.use(router) // ใช้ router
app.mount('#app') // ติดตั้ง Vue app

