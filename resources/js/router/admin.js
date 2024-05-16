import { createRouter, createWebHistory } from 'vue-router'

import AdminLayout from '../layout/AdminLay.vue'
import DashboardView from '../views/admin/DashboardView.vue'
import AdminResellersView from '../views/admin/ResellersView.vue'
import AdminResellerEditView from '../views/admin/ResellerEditView.vue'
import AdminResellerDetailView from '../views/admin/ResellerDetailView.vue'
import AdminContactView from '../views/admin/ContactView.vue'
import AdminContactDetailView from '../views/admin/ContactDetailView.vue'
import AdminProductsView from '../views/admin/ProductsView.vue'
import AdminProductImagesView from '../views/admin/ProductImagesView.vue'
import AdminProductEditView from '../views/admin/ProductEditView.vue'
import AdminProductCreateView from '../views/admin/ProductCreateView.vue'
import AdminProductCategoriesView from '../views/admin/ProductCategoryView.vue'
import AdminProductCategoryEditView from '../views/admin/ProductCategoryEditView.vue'
import AdminProductCategoryCreateView from '../views/admin/ProductCategoryCreateView.vue'
import AdminsView from '../views/admin/AdminsView.vue'
import AdminsCreateView from '../views/admin/AdminsCreateView.vue'
import AdminsEditView from '../views/admin/AdminsEditView.vue'
import AdminsProfileView from '../views/admin/AdminsProfileView.vue'
import UnauthorizedAccessView from '../views/admin/UnauthorizedAccessView.vue'
import ChangePasswordView from '../views/admin/ChangePasswordView.vue'
import AuthMiddleware from '../middleware/auth.js'
import SuperAdminMiddleware from '../middleware/superAdmin.js'
import NewsView from '../views/admin/NewsView.vue'
import NewsCategoriesView from '../views/admin/NewsCategoriesView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/admin',
            // name: 'dashboard',
            component: AdminLayout,
            meta: {
                requiresAuth: true
            },
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    component: DashboardView
                },
                {
                    path: ':any',
                    component: DashboardView
                }
            ]
        },
        /* === NEWS START === */
        {
            path: '/admin/news',
            name: 'admin.news',
            component: AdminLayout,
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
            path: '/admin/news/create',
            name: 'admin.news.create',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: () => import('../views/admin/NewsCreateView.vue')
                },
                {
                    path: ':any',
                    component: () => import('../views/admin/NewsCreateView.vue')
                }
            ]
        },
        {
            path: '/admin/news/edit/:id',
            name: 'admin.news.edit',
            component: () => import('../views/admin/NewsEditView.vue'),
            props: true
        },
        {
            path: '/admin/news_categories',
            name: 'admin.news_categories',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: NewsCategoriesView
                },
                {
                    path: ':any',
                    component: NewsCategoriesView
                }
            ]
        },
        {
            path: '/admin/news_categories/create',
            name: 'admin.news_categories.create',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: () => import('../views/admin/NewsCategoriesCreateView.vue')
                },
                {
                    path: ':any',
                    component: () => import('../views/admin/NewsCategoriesCreateView.vue')
                }
            ]
        },
        {
            path: '/admin/news_categories/edit/:id',
            name: 'admin.news_categories.edit',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: () => import('../views/admin/NewsCategoriesEditView.vue'),
                    props: true // Menambahkan props: true di sini jika Anda ingin melewatkan params sebagai props ke komponen
                }
            ],
            props: true
        },
        {
            path: '/admin/news_images/edit/:id',
            name: 'admin.news_images.edit',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: () => import('../views/admin/NewsImagesEditView.vue'),
                    props: true
                }
            ],
            props: true
        },

        /* === NEWS END === */
        /* === RESELLER START === */
        {
            path: '/admin/resellers',
            name: 'admin.resellers',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: AdminResellersView
                },
                {
                    path: ':any',
                    component: AdminResellersView
                }
            ]
        },
        {
            path: '/admin/reseller/:id',
            name: 'admin.reseller.detail',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: AdminResellerDetailView,
                    props: true
                }
            ],
            props: true
        },
        {
            path: '/admin/reseller/edit/:id',
            name: 'admin.reseller.edit',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: AdminResellerEditView,
                    props: true
                }
            ],
            props: true
        },
        {
            path: '/admin/contacts',
            name: 'admin.contacts',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: AdminContactView
                },
                {
                    path: ':any',
                    component: AdminContactView
                }
            ]
        },
        {
            path: '/admin/contacts/view/:id',
            name: 'admin.contacts.detail',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: AdminContactDetailView,
                    props: true // Menambahkan props: true di sini jika Anda ingin melewatkan params sebagai props ke komponen
                }
            ],
            props: true // Jika ingin melewatkan params ke komponen AdminLayout juga
        },
        {
            path: '/admin/products',
            name: 'admin.products',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: AdminProductsView
                },
                {
                    path: ':any',
                    component: AdminProductsView
                }
            ]
        },
        {
            path: '/admin/product/create',
            name: 'admin.product.create',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: AdminProductCreateView
                },
                {
                    path: ':any',
                    component: AdminProductCreateView
                }
            ]
        },
        {
            path: '/admin/product/edit/:id',
            name: 'admin.product.edit',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: AdminProductEditView,
                    props: true // Menambahkan props: true di sini jika Anda ingin melewatkan params sebagai props ke komponen
                }
            ],
            props: true // Jika ingin melewatkan params ke komponen AdminLayout juga
        },
        {
            path: '/admin/product_categories',
            name: 'admin.product_categories',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: AdminProductCategoriesView
                },
                {
                    path: ':any',
                    component: AdminProductCategoriesView
                }
            ]
        },
        {
            path: '/admin/product_categories/create',
            name: 'admin.product_categories.create',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: AdminProductCategoryCreateView
                },
                {
                    path: ':any',
                    component: AdminProductCategoryCreateView
                }
            ]
        },
        {
            path: '/admin/product_categories/edit/:id',
            name: 'admin.product_categories.edit',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: AdminProductCategoryEditView,
                    props: true // Menambahkan props: true di sini jika Anda ingin melewatkan params sebagai props ke komponen
                }
            ],
            props: true
        },
        {
            path: '/admin/product_images/:id',
            name: 'admin.product_images',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: AdminProductImagesView,
                    props: true // Menambahkan props: true di sini jika Anda ingin melewatkan params sebagai props ke komponen
                }
            ],
            props: true // Jika ingin melewatkan params ke komponen AdminLayout juga
        },
        /* === SUPER ADMIN START === */
        {
            path: '/admin/admins',
            name: 'admin.admins',
            component: AdminLayout,
            meta: { requiresSuperAdmin: true },
            children: [
                {
                    path: '',
                    component: AdminsView
                },
                {
                    path: ':any',
                    component: AdminsView
                }
            ]
        },
        {
            path: '/admin/admins/create',
            name: 'admin.admins.create',
            component: AdminLayout,
            children: [
                {
                    path: '',
                    component: AdminsCreateView
                },
                {
                    path: ':any',
                    component: AdminsCreateView
                }
            ]
        },
        {
            path: '/admin/admins/edit/:id',
            name: 'admin.admins.edit',
            component: AdminsEditView,
            props: true,
            meta: { requiresAuth: true, requiresSuperAdmin: true },
            beforeEnter: [AuthMiddleware, SuperAdminMiddleware]
        },
        /* === SUPER ADMIN END === */
        /* === PROFILE START === */
        {
            path: '/admin/profile',
            name: 'admin.profile',
            component: AdminsProfileView,
            meta: { requiresAuth: true },
            beforeEnter: AuthMiddleware
        },
        {
            path: '/admin/unauthorized',
            name: 'admin.unauthorized',
            component: UnauthorizedAccessView
        },
        /* === PROFILE END === */
        /* === UNAUTHORIZED PAGE === */
        {
            path: '/admin/changePassword/:id',
            name: 'admin.change_password',
            component: ChangePasswordView,
            props: true,
            meta: { requiresAuth: true },
            beforeEnter: AuthMiddleware
        }
    ]
})

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('loggedIn')

    if (to.matched.some((record) => record.meta.requiresSuperAdmin)) {
        if (loggedIn && localStorage.getItem('is_superAdmin') === '1') {
            next()
        } else {
            next({ name: 'login' })
        }
    } else {
        next()
    }
})

export default router
