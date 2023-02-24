import { createApp } from 'vue'
import {createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
      path: '/login',
      name: 'login',
      component: Login
    }
]
})

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
