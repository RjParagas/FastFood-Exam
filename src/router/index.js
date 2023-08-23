import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/homed',
      name: 'homed',
      component:HomeView
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/OrderNow.vue')
    },
    {
      path: '/notif',
      name: 'notif',
      component: () => import('../views/Notification.vue'),
      options: {
        history: true,
        pushState: true
      }
    },
    {
      path: '/fdetails',
      name: 'fdetails',
      component: () => import('../views/FoodDetails.vue')
    },
    {
      path: '/ordersum',
      name: 'ordersum',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/OrderSummary.vue')
    },
  ]
})

export default router
