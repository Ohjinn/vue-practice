import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch: true */ '../views/ContactView.vue')
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () => import(/* webpackChunkName: "about" */ '../views/Basic.vue')
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpackChunkName: "about" */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import(/* webpackChunkName: "about" */ '../views/Example.vue')
  },
  {
    path: '/serverdata',
    name: '/ServerData',
    component: () => import(/* webpackChunkName: "about" */ '../views/ServerData.vue')
  },
  {
    path: '/slot',
    name: 'SlotUseModalLayout',
    component: () => import(/* webpackChunkName: "about" */ '../views/SlotUserModalLayout.vue')
  },
  {
    path: '/inject',
    name: 'ProvideInject',
    componet: () => import(/* webpackChunkName: "about" */ '../views/ProvideInject.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
