<script>
import HeaderComponent from '../components/user/HeaderComp.vue'
import FooterComponent from '../components/user/FooterComp.vue';

export default {
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>
<template>
    <body>
        <HeaderComponent />
        <div id="pageWrapper">
            <RouterView />
        </div>
        <FooterComponent />
    </body>
  
</template>