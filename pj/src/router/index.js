import { createRouter, createWebHistory } from 'vue-router'
import Step1 from '../views/contact/Step1.vue'
import Step2 from '../views/contact/Step2.vue'
import Step3 from '../views/contact/Step3.vue' 

const routes = [
  {
    path: '/',
    name: 'Step1',
    component: Step1
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact/Step2',
    name: 'Step2',
    component: Step2
  },
  {
    path: '/contact/Step3',
    name: 'Step3',
    component: Step3
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
