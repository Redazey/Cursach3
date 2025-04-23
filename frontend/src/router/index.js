import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUs from '@/views/AboutUs.vue'
import ContactsUs from '@/views/ContactsUs.vue'
import PhotoGallery from '@/views/PhotoGallery.vue'
import FeedBack from '@/views/FeedBack.vue'
import AuthToAdmin from '@/views/AuthToAdmin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/aboutUs',
      name: 'about us',
      component: AboutUs,
    },
    {
      path: '/contactUs',
      name: 'contact us',
      component: ContactsUs,
    },
    {
      path: '/photoGallery',
      name: 'photo gallery',
      component: PhotoGallery,
    },
    {
      path: '/feedBack',
      name: 'feedback',
      component: FeedBack,
    },
    {
      path: '/auth',
      name: 'auth to admin panel',
      component: AuthToAdmin,
    },
  ],
})

export default router
