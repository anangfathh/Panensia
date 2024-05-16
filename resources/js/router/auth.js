import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/auth/LoginView.vue'
import ForgotPasswordView from '../views/auth/ForgotPasswordView.vue'
import ResetPasswordView from '../views/auth/ResetPasswordView.vue'
// import DashboardView from '../views/DashboardView.vue' // Add dashboard view

const routes = [
    {
        path: '/login',
        name: 'auth.login',
        component: LoginView
    },
    {
        path: '/forgotPassword',
        name: 'auth.forgot_password',
        component: ForgotPasswordView
    },
    {
        path: '/resetPasswordForm/:token',
        name: 'auth.reset_password_form',
        component: ResetPasswordView,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
