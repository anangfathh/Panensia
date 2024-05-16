<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

let products = ref([])

onMounted(async () => {
    const response = await axios.get('/api/getProducts')
    products.value = response.data.products
    console.log(products.value)
})

const deleteProduct = async (id) => {
    // Add validation / CSRF token

    if (window.confirm('Are you sure you want to delete this product?') === false) {
        return
    }

    try {
        const response = await axios.delete(`/api/deleteProduct/${id}`)
        console.log(response.data)
        alert('product deleted')
        products.value = products.value.filter((item) => item.id !== id)
    } catch (error) {
        console.error(error)
        alert(error.response.data.message)
    }
}
</script>

<template>
    <div class="mdk-drawer-layout__content page">
        <div class="container-fluid page__heading-container">
            <!-- Page Heding -->
            <div class="page__heading">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                            <a href="/admin"><i class="material-icons icon-20pt">home</i></a>
                        </li>
                        <li class="breadcrumb-item">Management</li>
                        <li class="breadcrumb-item active" aria-current="page">Product</li>
                    </ol>
                </nav>

                <h1 class="m-0">Product</h1>
            </div>
            <!-- end heading -->
        </div>

        <!-- Content -->
        <div class="container page__container">
            <RouterLink to="/admin/product/create">
                <button class="btn btn-dark mb-4">Create</button>
            </RouterLink>
            <RouterLink to="/admin/product_categories">
                <button class="btn btn-secondary mb-4 ml-2">
                    <i class="fa fa-plus"></i> Add Category
                </button>
            </RouterLink>
            <div class="row card-group-row">
                <div class="col-lg-6 col-md-12 card-group-row__col">
                    <div class="card card-group-row__card">
                        <div class="card-body-x-lg card-body d-flex flex-row align-items-center">
                            <div class="flex">
                                <div class="card-header__title text-muted d-flex mb-2">
                                    Total Produk
                                </div>
                                <span class="h4 m-0"
                                    >{{ products.length }} <span class="text-muted">Produk</span>
                                </span>
                            </div>
                            <div>
                                <i class="fa fa-box-open icon-muted icon-40pt ml-3"></i>
                            </div>
                        </div>
                        <div class="progress" style="height: 3px">
                            <div
                                class="progress-bar"
                                role="progressbar"
                                :style="{ width: products.length + '%' }"
                                :aria-valuenow="products.length"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <form class="form-inline">
                        <label class="mr-sm-2" for="inlineFormFilterBy">Filter by:</label>
                        <input
                            type="text"
                            class="form-control mb-2 mr-sm-2 mb-sm-0"
                            id="inlineFormFilterBy"
                            placeholder="Type a name"
                        />
                    </form>
                </div>

                <div
                    class="table-responsive border-bottom"
                    data-toggle="lists"
                    data-lists-values='["js-lists-values-employee-name"]'
                >
                    <table class="table mb-0 thead-border-top-0">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Link Tokped</th>
                                <th>Link Shopee</th>
                                <th>Link Tiktok</th>
                                <th>Updated At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="list" id="staff02">
                            <template v-if="products.length > 0">
                                <tr v-for="(item, index) in products" :key="item.id">
                                    <td>{{ index + 1 }}</td>
                                    <td class="js-lists-values-employee-name">{{ item.name }}</td>
                                    <td>
                                        <span class="badge badge-warning">{{
                                            item.product_category.name
                                        }}</span>
                                    </td>
                                    <td class="text-muted">{{ item.link_tokped }}</td>
                                    <td class="text-muted">{{ item.link_shopee }}</td>
                                    <td class="text-muted">{{ item.link_tiktok }}</td>
                                    <td class="text-muted">{{ item.updated_at }}</td>
                                    <td>
                                        <RouterLink :to="`/admin/product/edit/${item.id}`">
                                            <button class="btn btn-success mr-1">
                                                <i class="fa fa-pencil-alt"></i>
                                            </button>
                                        </RouterLink>
                                        <!-- <RouterLink
                                            :to="{
                                                name: 'admin.product_images',
                                                params: { id: item.id }
                                            }"
                                        >
                                            <button class="btn btn-info mr-1">
                                                <i class="fa fa-images"></i>
                                            </button>
                                        </RouterLink> -->
                                        <button
                                            class="btn btn-danger"
                                            @click="deleteProduct(item.id)"
                                        >
                                            <i class="fa fa-times"></i>
                                        </button>
                                    </td>
                                </tr>
                            </template>
                            <template v-else>
                                <tr>
                                    <td colspan="7" class="text-center">Tidak ada produk</td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>

                <!-- <div class="card-body text-right">
                15 <span class="text-muted">of 1,430</span>
                <a href="#" class="text-muted-light"
                  ><i class="material-icons ml-1">arrow_forward</i></a
                >
              </div> -->
            </div>
        </div>
        <!-- end Content -->
    </div>
</template>
