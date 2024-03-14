<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <div class="mdk-drawer__content">
        <div class="sidebar sidebar-light sidebar-left simplebar" data-simplebar>
          <div class="d-flex align-items-center sidebar-p-a border-bottom sidebar-account">
            <a href="profile.html" class="flex d-flex align-items-center text-underline-0 text-body">
              <span class="flex d-flex flex-column">
                <strong>Admin Panensia</strong>
                <small class="text-muted text-uppercase">Super Admin</small>
              </span>
            </a>
            <div class="dropdown ml-auto">
              <a href="#" data-toggle="dropdown" data-caret="false" class="text-muted">
                <i class="material-icons">more_vert</i>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="login.html">Logout</a>
              </div>
            </div>
          </div>

          <div class="sidebar-heading sidebar-m-t">Home</div>
          <ul class="sidebar-menu">
            <li :class="{ 'sidebar-menu-item active': route.path === '/admin' }">
                <RouterLink to="/admin" class="sidebar-menu-button">
                  <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">dvr</i>
                  <span class="sidebar-menu-text">Dashboard</span>
                </RouterLink>
              <ul class="sidebar-submenu collapse" id="dashboards_menu"></ul>
            </li>
          </ul>
          
          <div class="sidebar-heading">Management</div>
          <div class="sidebar-block p-0">
            <ul class="sidebar-menu" id="components_menu">
              <li :class="{ 'sidebar-menu-item active': route.path === '/admin/products' 
              || route.path === '/admin/product/create'
              || route.path === '/admin/product_categories' 
              || route.path === '/admin/product_categories/create' }">
                <RouterLink to="/admin/products" class="sidebar-menu-button">
                  <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">shopping_basket</i>
                  <span class="sidebar-menu-text">Produk</span>
                </RouterLink>
              </li>
              <li :class="{ 'sidebar-menu-item active': route.path === '/admin/admins' }">
                <RouterLink to="/admin/admins" class="sidebar-menu-button">
                  <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">person</i>
                  <span class="sidebar-menu-text">User List</span>
                </RouterLink>
              </li>
              <li :class="{ 'sidebar-menu-item active': route.path === '/admin/resellers' }">
                <RouterLink to="/admin/resellers" class="sidebar-menu-button">
                  <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">group</i>
                  <span class="sidebar-menu-text">Reseller</span>
                </RouterLink>
              </li>
              <li :class="{ 'sidebar-menu-item active': route.path === '/admin/news' }">
                <RouterLink to="/admin/news" class="sidebar-menu-button">
                  <i class="sidebar-menu-icon sidebar-menu-icon--left material-icons">web</i>
                  <span class="sidebar-menu-text">News</span>
                </RouterLink>
              </li>
              <li :class="{ 'sidebar-menu-item active': route.path === '/admin/contacts' }">
                <RouterLink to="/admin/contacts" class="sidebar-menu-button">
                  <i class="sidebar-menu-icon sidebar-menu-icon--left fa fa-paper-plane"></i>
                  <span class="sidebar-menu-text">Message</span>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
    </div>
</template>
