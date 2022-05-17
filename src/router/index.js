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
    name: 'ServerData',
    component: () => import(/* webpackChunkName: "about" */ '../views/ServerData.vue')
  },
  {
    path: '/slot',
    name: 'SlotUserModalLayout',
    component: () => import(/* webpackChunkName: "about" */ '../views/SlotUserModalLayout.vue')
  },
  {
    path: '/mixin',
    name: 'MixinTest',
    component: () => import(/* webpackChunkName: "about" */ '../views/MixinTest.vue')
  },
  {
    path: '/inject',
    name: 'ProvideInject',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProvideInject.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import(/* webpackChunkName: "about" */ '../views/Calculator.vue')
  },
  {
    path: '/compositionapi',
    name: 'CompositionApi',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompositionAPI.vue')
  },
  {
    path: '/compositionapi2',
    name: 'CompositionApi2',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompositionAPI2.vue')
  },
  {
    path: '/compositionapi3',
    name: 'CompositionApi3',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompositionAPI3.vue')
  },
  {
    path: '/compositionapiprovide',
    name: 'CompositionAPIProvide',
    component: () => import(/* webpackChunkName: "about" */ '../views/CompositionAPIProvide.vue')
  },
  {
    path: '/customdirective',
    name: 'CustomDirective',
    component: () => import(/* webpackChunkName: "about" */ '../views/CustomDirective.vue')
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: () => import(/* webpackChunkName: "about" */ '../views/Plugins.vue')
  },
  {
    path: '/store',
    name: 'StoreAccess',
    component: () => import(/* webpackChunkName: "about" */ '../views/StoreAccess.vue')
  },
  {
    path: '/validationtest',
    name: 'ValidationTest',
    component: () => import(/* webpackChunkName: "about" */ '../views/ValidationTest.vue')
  },
  {
    path: '/watcheffect',
    name: 'WatchEffect',
    component: () => import(/* webpackChunkName: "about" */ '../views/setup_prac/WatchEffect.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
