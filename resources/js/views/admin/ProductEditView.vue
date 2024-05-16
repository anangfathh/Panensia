<script setup>
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from 'axios'

let reloadPage = localStorage.getItem('reloadPage') !== 'true'

if (reloadPage) {
    localStorage.setItem('reloadPage', 'true')
    window.location.reload()
}

let props = defineProps(['id'])
let product_categories = ref([])
// let shops = ref([])
let product = ref(null)
let files = ref(null)
let name = ref('')
let link_shopee = ref('')
let link_tokped = ref('')
let link_tiktok = ref('')
let desc = ref('')
let caution = ref('')
let price = ref('')
let ingredient = ref('')
let product_category_id = ref('')
const router = useRouter()

onMounted(async () => {
    const productResponse = await axios.get(`/api/getProductById/${props.id}`)
    product.value = productResponse.data.product
    console.log(product.value)

    const categoriesResponse = await axios.get('/api/getProductCategories')
    product_categories.value = categoriesResponse.data.categories
    console.log(product_categories)

    // const shopsResponse = await axios.get('/api/getShops')
    // shops.value = shopsResponse.data.shops
    // console.log(shops)

    if (!product.value) {
        router.push({ name: 'admin/products' })
    } else {
        // Set field values with old data
        name.value = product.value.name
        desc.value = product.value.desc
        ingredient.value = product.value.ingredient
        caution.value = product.value.caution
        price.value = product.value.price
        product_category_id.value = product.value.product_category_id
        link_tokped.value = product.value.link_tokped
        link_shopee.value = product.value.link_shopee
        link_tiktok.value = product.value.link_tiktok
    }
})

const editProduct = async () => {
    // Add validation / CSRF token

    const formData = new FormData()
    formData.append('name', name.value)
    formData.append('desc', desc.value)
    formData.append('ingredient', ingredient.value)
    formData.append('caution', caution.value)
    formData.append('price', price.value)
    formData.append('product_category_id', product_category_id.value)
    // formData.append('shop_id', shop_id.value)
    formData.append('link_tokped', link_tokped.value) // Hardcoded for now
    formData.append('link_shopee', link_shopee.value) // Hardcoded for now
    formData.append('link_tiktok', link_tiktok.value) // Hardcoded for now

    if (files.value) {
        for (let i = 0; i < files.value.length; i++) {
            formData.append(`files[${i}]`, files.value[i])
        }
    }

    try {
        const response = await axios.post(`/api/editProduct/${props.id}`, formData, {
            headers: {
                'desc-Type': 'multipart/form-data'
            }
        })
        console.log(response.data)
        alert('product edited')
        router.push('/admin/products')
    } catch (error) {
        console.error(error.response.data)
        alert('Error editing product')
    }
}
</script>

<template>
    <!-- <main>
        <h1>Admin Edit product</h1>
        <p>name</p>
        <input type="text" v-model="name" />
        <p>price</p>
        <input type="number" v-model="price" />
        <p>desc</p>
        <textarea v-model="desc"></textarea>
        <p>ingredient</p>
        <textarea v-model="ingredient"></textarea>
        <p>caution</p>
        <textarea v-model="caution"></textarea>
        <p>Category</p>
        <select v-if="product_categories.length > 0" v-model="product_category_id">
            <option v-for="item in product_categories" :key="item.id" :value="item.id">
                {{ item.name }}
            </option>
        </select>
        <p v-else>No category</p>
        <p>add Images</p>
        <input type="file" multiple @change="files = $event.target.files" />
        <p>Link Shopee</p>
        <input type="text" v-model="link_shopee" />
        <p>Link tokped</p>
        <input type="text" v-model="link_tokped" />
        <p>Link tiktok</p>
        <input type="text" v-model="link_tiktok" />
        <button @click="editproduct()">Edit</button>
    </main> -->
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
                            <router-link :to="`/admin/products`"> Product </router-link>
                        </li>
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
                            <label for="validationSample01">Product Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="validationSample01"
                                placeholder="First name"
                                required=""
                                v-model="name"
                            />
                        </div>
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample02">Product Description</label>
                            <textarea
                                v-model="desc"
                                name=""
                                class="form-control"
                                id="validationSample02"
                                cols="30"
                                rows="3"
                                required=""
                            ></textarea>
                        </div>
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample02">Product Ingredients</label>
                            <textarea
                                v-model="ingredient"
                                name=""
                                class="form-control"
                                id="validationSample02"
                                cols="30"
                                rows="3"
                                required=""
                            ></textarea>
                        </div>
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample02">Product Caution</label>
                            <textarea
                                v-model="caution"
                                name=""
                                class="form-control"
                                id="validationSample02"
                                cols="30"
                                rows="3"
                                required=""
                            ></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="select01">Product Category</label>
                        <select
                            id="select01"
                            v-if="product_categories.length > 0"
                            v-model="product_category_id"
                            data-toggle="select"
                            class="form-control"
                        >
                            <option value="" disabled>Select a category</option>
                            <option
                                v-for="item in product_categories"
                                :key="item.id"
                                :value="item.id"
                            >
                                {{ item.name }}
                            </option>
                        </select>
                        <p v-else>No category</p>
                    </div>
                    <div class="form-group">
                        <label for="dropfile">Images</label>
                        <input
                            type="file"
                            class="form-control"
                            id="dropfile"
                            multiple
                            @change="files = $event.target.files"
                        />
                    </div>

                    <div class="form-group">
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample04">Link Shopee</label>
                            <input
                                v-model="link_shopee"
                                type="text"
                                class="form-control"
                                id="validationSample04"
                                placeholder="https://shopee.co.id/.."
                                required=""
                            />
                        </div>
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample05">Link Tokopedia</label>
                            <input
                                v-model="link_tokped"
                                type="text"
                                class="form-control"
                                id="validationSample05"
                                placeholder="https://www.tokopedia.com/.."
                                required=""
                            />
                        </div>
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample06">Link Tiktop Shop</label>
                            <input
                                v-model="link_tiktok"
                                type="text"
                                class="form-control"
                                id="validationSample06"
                                placeholder="https://vt.tokopedia.com/.."
                                required=""
                            />
                        </div>
                    </div>
                    <button @click="editProduct()" class="btn btn-primary">Edit Product</button>
                </div>
            </div>
        </div>
        <!-- end Content -->
    </div>
</template>
