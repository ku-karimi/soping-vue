import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FormChild from './views/formChild.vue'

const app = createApp(App)
const form = createApp(FormChild)

app.use(router)

app.mount('#app')
