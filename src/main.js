import { createApp } from 'vue'
import App from './App.vue'
import mixins from './mixins'
import store from './store'
import router from './router'
import 'sweetalert2/dist/sweetalert2.min.css'
import i18nplugin from './plugins/i18n'

const i18nStrings = {
    en: {
        hi: 'Hello!'
    },
    ko: {
        hi: '안녕하세요!'
    }
}

createApp(App).use(router).use(mixins).use(i18nplugin, i18nStrings).use(store)
.directive('focus', {
    mounted(el) {
        el.focus();
    }
})
.mount('#app')
