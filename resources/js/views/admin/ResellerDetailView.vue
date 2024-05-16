<template>
    <div class="mdk-drawer-layout__content page">
        <div class="container-fluid page__heading-container">
            <div class="page__heading d-flex align-items-center">
                <div class="flex">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0">
                            <li class="breadcrumb-item">
                                <RouterLink to="/admin"
                                    ><i class="material-icons icon-20pt">home</i></RouterLink
                                >
                            </li>
                            <li class="breadcrumb-item">
                                <RouterLink to="/admin/resellers"> Reseller</RouterLink>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Detail</li>
                        </ol>
                    </nav>
                    <h1 class="m-0">Reseller Profile</h1>
                </div>
            </div>
        </div>

        <div class="container-fluid page__container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <div class="card">
                        <div class="card-body">
                            <div class="px-3">
                                <div
                                    class="d-flex justify-content-center flex-column text-center my-5 navbar-light"
                                >
                                    <div
                                        class="navbar-brand d-flex flex-column m-0"
                                        style="min-width: 0"
                                    >
                                        <img
                                            class="navbar-brand-icon mb-2"
                                            :src="resellerData.logo_path"
                                            alt="Reseller Logo"
                                            width="200"
                                        />
                                    </div>
                                </div>
                                <div class="row mb-5">
                                    <div class="col-lg">
                                        <h5 class="mb-4">
                                            <span class="text-muted">Name : </span
                                            ><strong class="text-body">{{
                                                resellerData.name
                                            }}</strong
                                            ><br />
                                            <span class="text-muted">Phone : </span
                                            ><strong class="text-body">{{
                                                resellerData.phone
                                            }}</strong>
                                            <br />
                                            <span class="text-muted">Email : </span
                                            ><strong class="text-body">{{
                                                resellerData.email
                                            }}</strong>
                                            <br />
                                            <span class="text-muted">Brand : </span
                                            ><strong class="text-body">{{
                                                resellerData.brand
                                            }}</strong>
                                            <br />
                                            <span class="text-muted">Address : </span
                                            ><strong class="text-body">{{
                                                resellerData.address
                                            }}</strong>
                                            <br />
                                            <span class="text-muted">Social Media Link : </span
                                            ><strong
                                                class="text-body"
                                                v-if="resellerData.link_social"
                                                >{{ resellerData.link_socials }}</strong
                                            >
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- // END drawer-layout__content -->
</template>

<script>
// import { RouterLink } from 'vue-router'

export default {
    data() {
        return {
            resellerData: {
                name: '',
                phone: '',
                email: '',
                brand: '',
                address: '',
                logo_path: '',
                link_social: ''
            }
        }
    },
    mounted() {
        // Fetch Reseller data from API on component mount
        this.fetchResellerData()
    },
    methods: {
        async fetchResellerData() {
            try {
                const response = await fetch(`/api/resellers/${this.$route.params.id}`)
                const data = await response.json()
                this.resellerData = data
            } catch (error) {
                console.error('Error fetching reseller data:', error)
            }
        }
    }
}
</script>
