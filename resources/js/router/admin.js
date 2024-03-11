import { createRouter, createWebHistory } from 'vue-router'
import admin from '../views/admin.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/dasboard',
            name: 'dashboard',
            component: admin
        }
    ]
})

export default router
