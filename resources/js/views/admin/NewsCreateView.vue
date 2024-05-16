<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

let news_categories = ref([])
let title = ref('')
let content = ref('')
let news_category_id = ref('')
let files = ref(null)
const router = useRouter()

onMounted(async () => {
    const response = await axios.get('/api/getNewsCategories')
    news_categories.value = response.data.categories
    console.log(news_categories)
})

const createNews = async () => {
    // Add validation / CSRF token

    const formData = new FormData()
    formData.append('title', title.value)
    formData.append('content', content.value)
    formData.append('news_category_id', news_category_id.value)
    formData.append('user_id', 1) // Hardcoded for now

    if (files.value) {
        for (let i = 0; i < files.value.length; i++) {
            formData.append(`files[${i}]`, files.value[i])
        }
    } else {
        alert('No files selected')
        return
    }

    try {
        const response = await axios.post('/api/createNews', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(response.data)
        alert('News created')
        router.push('/admin/news')
    } catch (error) {
        console.error(error.response.data)
        alert('Error creating news')
    }
}
</script>

<template>
    <!-- <main>
        <h1>Admin Create News</h1>
        <p>title</p>
        <input type="text" v-model="title" />
        <p>content</p>
        <textarea v-model="content"></textarea>
        <p>category</p>
        <select v-if="news_categories.length > 0" v-model="news_category_id">
            <option v-for="item in news_categories" :key="item.id" :value="item.id">
                {{ item.name }}
            </option>
        </select>
        <p v-else>No category</p>
        <p>files</p>
        <input type="file" multiple @change="files = $event.target.files" />
        <button @click="createNews()">Create</button>
    </main> -->
    <div class="mdk-drawer-layout__content page">
        <div class="container-fluid page__heading-container">
            <!-- Page Heding -->
            <div class="page__heading">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                            <router-link :to="`/admin`">
                                <i class="material-icons icon-20pt">home</i>
                            </router-link>
                        </li>
                        <li class="breadcrumb-item">Management</li>
                        <li class="breadcrumb-item">
                            <router-link :to="`/admin/news`"> News </router-link>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Create</li>
                    </ol>
                </nav>

                <h1 class="m-0">Create News</h1>
            </div>
            <!-- end heading -->
        </div>

        <!-- Content -->
        <div class="card card-form">
            <div class="row no-gutters">
                <div class="col-lg-12 card-form__body card-body">
                    <div class="form-row">
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample01">News Title</label>
                            <input
                                v-model="title"
                                type="text"
                                class="form-control"
                                id="validationSample01"
                                placeholder="First name"
                                required=""
                            />
                        </div>
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample02">News Content</label>
                            <textarea
                                v-model="content"
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
                        <label for="select01">News Category</label>
                        <select
                            id="select01"
                            v-if="news_categories.length > 0"
                            v-model="news_category_id"
                            data-toggle="select"
                            class="form-control"
                        >
                            <option value="" disabled>Select a category</option>
                            <option v-for="item in news_categories" :key="item.id" :value="item.id">
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
                            @change="files = $event.target.files"
                        />
                    </div>

                    <button @click="createNews()" class="btn btn-primary">Create Product</button>
                </div>
            </div>
        </div>
        <!-- end Content -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            fileList: []
        }
    },
    methods: {
        handleFiles(event) {
            const files = event.target.files
            for (let i = 0; i < files.length; i++) {
                const file = files[i]
                // Validate file type
                if (file.type.startsWith('image/')) {
                    this.fileList.push(file)
                } else {
                    alert('File harus berupa gambar')
                }
            }
        },
        getFileUrl(file) {
            return URL.createObjectURL(file)
        }
    }
}
</script>
