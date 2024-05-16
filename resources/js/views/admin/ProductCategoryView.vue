<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

let product_categories = ref([])

onMounted(async () => {
    const response = await axios.get('/api/getProductCategories')
    product_categories.value = response.data.categories
    console.log(product_categories.value)
})

const deleteCategory = async (id) => {
    // Add validation / CSRF token

    if (window.confirm('Are you sure you want to delete this category?') === false) {
        return
    }

    try {
        const response = await axios.delete(`/api/deleteProductCategory/${id}`)
        console.log(response.data)
        alert('Category deleted')
        product_categories.value = product_categories.value.filter((item) => item.id !== id)
    } catch (error) {
        console.error(error)
        alert('Error deleting category')
    }
}
</script>

<template>
    <!-- <main>
        <h1>Admin Product Categories {{ product_categories.length }}</h1>
        <RouterLink to="/admin/product_categories/create">
            <button>Create</button>
        </RouterLink>
        <table v-if="product_categories.length > 0" width="100%">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Updated At</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in product_categories" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.updated_at }}</td>
                    <td>
                        <RouterLink
                            :to="{ name: 'admin.product_categories.edit', params: { id: item.id } }"
                        >
                            <button>Edit</button>
                        </RouterLink>
                        <button @click="deleteCategory(item.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main> -->
    <div class="mdk-drawer-layout__content page">
        <div class="container-fluid page__heading-container">
            <!-- Page Heding -->
            <div class="page__heading">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                            <RouterLink to="/admin"
                                ><i class="material-icons icon-20pt">home</i></RouterLink
                            >
                        </li>
                        <li class="breadcrumb-item">Management</li>
                        <li class="breadcrumb-item">
                            <RouterLink to="/admin/products">Products</RouterLink>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Products Category
                        </li>
                    </ol>
                </nav>

                <h1 class="m-0">Products Category</h1>
            </div>
            <!-- end heading -->
        </div>

        <!-- Content -->
        <div class="container page__container">
            <RouterLink to="/admin/product_categories/create">
                <button class="btn btn-info mb-4">Create Category</button>
            </RouterLink>
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
                                <th>Title</th>
                                <th>Updated At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="list" id="staff02">
                            <template v-if="product_categories.length > 0">
                                <tr v-for="(item, index) in product_categories" :key="item.id">
                                    <td class="text-muted">{{ index + 1 }}</td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.updated_at }}</td>
                                    <td>
                                        <router-link
                                            :to="`/admin/product_categories/edit/${item.id}`"
                                        >
                                            <button class="btn btn-success mr-1">
                                                <i class="fa fa-pencil-alt"></i> Edit
                                            </button>
                                        </router-link>
                                        <button
                                            class="btn btn-danger mr-1"
                                            @click="deleteCategory(item.id)"
                                        >
                                            <i class="fa fa-times"></i> Delete
                                        </button>
                                    </td>
                                </tr>
                            </template>
                            <template v-else>
                                <tr>
                                    <td colspan="7" class="text-center">Tidak ada Kategori</td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- end Content -->
    </div>
</template>
