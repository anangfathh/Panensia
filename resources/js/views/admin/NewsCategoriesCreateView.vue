<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

let name = ref('')
const router = useRouter()

const createCategory = async () => {
    // Add validation / CSRF token

    let slug = name.value
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')

    const newsData = {
        name: name.value,
        slug: slug,
        user_id: 1 // Hardcoded for now
    }

    try {
        const response = await axios.post('/api/createNewsCategory', newsData)
        console.log(response.data)
        alert('News category created')
        router.push('/admin/news_categories')
    } catch (error) {
        console.error(error)
        alert('Error creating news category')
    }
}
</script>

<template>
    <!-- <main>
        <h1>Admin Create News Category</h1>
        <p>name</p>
        <input type="text" v-model="name" />
        <button @click="createCategory()">Create</button>
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
                        <li class="breadcrumb-item">News</li>
                        <li class="breadcrumb-item">
                            <a href="/admin/news_categories"> News Category </a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Create</li>
                    </ol>
                </nav>

                <h1 class="m-0">Create News Category</h1>
            </div>
            <!-- end heading -->
        </div>

        <!-- Content -->
        <div class="card card-form">
            <div class="row no-gutters">
                <div class="col-lg-12 card-form__body card-body">
                    <div class="form-row">
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample01">Category Name</label>
                            <input
                                v-model="name"
                                type="text"
                                class="form-control"
                                id="validationSample01"
                                placeholder="Category Name"
                                required=""
                            />
                        </div>
                    </div>
                    <button @click="createCategory()" class="btn btn-primary">
                        Create Category
                    </button>
                </div>
            </div>
        </div>
        <!-- end Content -->
    </div>
</template>
