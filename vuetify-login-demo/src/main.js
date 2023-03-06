import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import router from './router'
import App from './App.vue'

const pinia = createPinia()
loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .use(pinia)
  .mount('#app')
