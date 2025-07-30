import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import aboutPage from '@/views/aboutPage.vue'
import contactUs from '@/views/contactUs.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
        {
      path: '/About',
      name: 'About',
      component: aboutPage,
    },
    {
      path: '/Contact',
      name: 'contact',
      component: contactUs
    },
  ],
})

export default router
