<script>
import HeaderComponent from '../components/admin/HeaderComp.vue'
import SidebarComp from '../components/admin/SidebarComp.vue'

export default {
    components: {
        HeaderComponent,
        SidebarComp
    }
}
</script>

<template>
    <body class="layout-default">
        <div class="preloader"></div>
    
        <!-- Header Layout -->
        <div class="mdk-header-layout js-mdk-header-layout">
          <!-- Header -->
          <HeaderComponent />
          <!-- // END Header -->
    
          <!-- Header Layout Content -->
          <div class="mdk-header-layout__content">
            <div class="mdk-drawer-layout js-mdk-drawer-layout" data-push data-responsive-width="992px">

            <!-- hero start -->
                <RouterView />
              <!-- end hero -->
    
              <div class="mdk-drawer js-mdk-drawer" id="default-drawer" data-align="start">
                <!-- side bar start -->
                <SidebarComp />
                <!-- end sidebar -->
              </div>
            <!-- // END drawer-layout -->
          </div>
        </div>
          <!-- // END header-layout__content -->
        </div>
        <!-- // END header-layout -->
    
        <!-- App Settings FAB -->
        <div id="app-settings">
            <app-settings
                layout-active="default"
                :layout-location="{
            'default': 'ui-forms.html',
            'fixed': 'fixed-ui-forms.html',
            'fluid': 'fluid-ui-forms.html',
            'mini': 'mini-ui-forms.html'
                }">
            </app-settings>
        </div>
      </body>
</template>

<style>

</style>