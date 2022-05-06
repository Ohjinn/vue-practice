import { createApp } from 'vue'
import App from './App.vue'
import mixins from './mixins'
import router from './router'
import 'sweetalert2/dist/sweetalert2.min.css'

createApp(App).use(router).use(mixins).mount('#app')
