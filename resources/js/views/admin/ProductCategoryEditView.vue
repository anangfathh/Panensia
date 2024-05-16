<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

let props = defineProps(['id'])
let product_categories = ref([])
let name = ref('')
const router = useRouter()

onMounted(async () => {
    const productCategoryResponse = await axios.get(`/api/getProductCategoryById/${props.id}`)
    product_categories.value = productCategoryResponse.data.category
    console.log(product_categories.value)

    if (!product_categories.value) {
        router.push({ name: 'admin.product_categories' })
    }
})

const editCategory = async () => {
    // Add validation / CSRF token

    let slug = name.value
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')

    const productData = {
        name: name.value,
        slug: slug
    }

    try {
        const response = await axios.post(`/api/editProductCategory/${props.id}`, productData)
        console.log(response.data)
        alert('Product category edited')
        router.push('/admin/product_categories')
    } catch (error) {
        console.error(error)
        alert('Error editing product category')
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
                            <a href="/admin">
                                <i class="material-icons icon-20pt">home</i>
                            </a>
                        </li>
                        <li class="breadcrumb-item">Management</li>
                        <li class="breadcrumb-item">
                            <a href="/admin/products"> Product </a>
                        </li>
                        <li class="breadcrumb-item">Product Categories</li>
                        <li class="breadcrumb-item active" aria-current="page">Edit</li>
                    </ol>
                </nav>

                <h1 class="m-0">Edit Product</h1>
            </div>
            <!-- end heading -->
        </div>

        <!-- Content -->
        <div class="card card-form">
            <div class="row no-gutters">
                <div class="col-lg-12 card-form__body card-body">
                    <div class="form-row">
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample01">Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="name"
                                v-model="name"
                                required=""
                            />
                        </div>
                    </div>

                    <button @click="editCategory()" class="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
        <!-- end Content -->
    </div>
</template>
