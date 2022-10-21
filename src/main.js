import { createApp } from 'vue'
import App from './App.vue'
import pinia from './stores'
import router from "@/router"
import { registerDateFns } from "@/utils/index"

// 引入css文件（分第三方和本地css文件)
import "normalize.css"
import "@/assets/css/index.css"

const app = createApp(App)
registerDateFns(app)

app.use(pinia)
app.use(router)

app.mount('#app')
