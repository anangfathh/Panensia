import { createRouter, createWebHistory } from 'vue-router'

import UserLayout from '../layout/UserLay.vue'
import HomeView from '../views/user/HomeView.vue'
import AboutView from '../views/user/AboutView.vue'
import NewsView from '../views/user/NewsView.vue'
import NewsDetailView from '../views/user/NewsDetailView.vue'
import ContactsView from '../views/user/ContactsView.vue'
import ResellerView from '../views/user/ResellerView.vue'
import ProdukView from '../views/user/ProdukView.vue'

const userRouter = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: UserLayout,
            children: [
              {
                path: '',
                component: HomeView
              },
              {
                path: ':any',
                component: HomeView
              }
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: UserLayout,
            children: [
              {
                path: '',
                component: AboutView
              },
              {
                path: ':any',
                component: AboutView
              }
            ]
            
        },
        {
            path: '/news',
            name: 'news',
            component: UserLayout,
            children: [
              {
                path: '',
                component: NewsView
              },
              {
                path: ':any',
                component: NewsView
              }
            ]
        },
        {
            path: '/news/detail/:id',
            name: 'news.detail',
            component: NewsDetailView,
            props: true
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: { name: 'home' }
        },
        {
            path: '/contact',
            name: 'contacts.create',
            component: UserLayout,
            children: [
              {
                path: '',
                component: ContactsView
              },
              {
                path: ':any',
                component: ContactsView
              }
            ]
        },
        {
            path: '/reseller',
            name: 'reseller.create',
            component: ResellerView
        },
        {
          path: '/produk',
          name: 'produk',
          component: UserLayout,
            children: [
              {
                path: '',
                component: ProdukView
              },
              {
                path: ':any',
                component: ProdukView
              }
            ]
      }
    ]
})

export default userRouter
