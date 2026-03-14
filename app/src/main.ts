import { createApp } from 'vue'
import App from './App.vue'

import { Notify, Quasar } from 'quasar'
import iconSet from 'quasar/icon-set/mdi-v7'
import lang from 'quasar/lang/zh-CN'

import '@quasar/extras/mdi-v7/mdi-v7.css'
import 'quasar/src/css/index.sass'

import './style.css'

const app = createApp(App)

app.use(Quasar, {
  plugins: { Notify },
  lang,
  iconSet,
  config: {
    dark: false,
  },
})

app.mount('#app')
