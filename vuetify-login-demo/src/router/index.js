import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/LoginView.vue'

export const router = createRouter({
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

Vue.use(VueRouter)

