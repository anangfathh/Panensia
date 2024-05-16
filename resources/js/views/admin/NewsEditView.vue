<script setup>
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from 'axios'

let props = defineProps(['id'])
let news_categories = ref([])
let news = ref(null)
let files = ref(null)
let title = ref('')
let content = ref('')
let news_category_id = ref('')
const router = useRouter()

onMounted(async () => {
    const newsResponse = await axios.get(`/api/getNewsById/${props.id}`)
    news.value = newsResponse.data.news
    console.log(news.value)

    const categoriesResponse = await axios.get('/api/getNewsCategories')
    news_categories.value = categoriesResponse.data.categories
    console.log(news_categories)

    if (!news.value) {
        router.push({ name: 'admin.news' })
    }
})

const editNews = async () => {
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
    }

    try {
        const response = await axios.post(`/api/editNews/${props.id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(response.data)
        alert('News edited')
        router.push('/admin/news')
    } catch (error) {
        console.error(error.response.data)
        alert('Error editing news')
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
                            <RouterLink :to="`/admin`">
                                <i class="material-icons icon-20pt">home</i>
                            </RouterLink>
                        </li>
                        <li class="breadcrumb-item">Management</li>
                        <li class="breadcrumb-item">
                            <RouterLink :to="`/admin/news`"> News </RouterLink>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Edit</li>
                    </ol>
                </nav>

                <h1 class="m-0">Edit News</h1>
            </div>
            <!-- end heading -->
        </div>

        <!-- Content -->
        <div class="card card-form">
            <div class="row no-gutters">
                <div class="col-lg-12 card-form__body card-body">
                    <div class="form-row">
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample01">Title</label>
                            <input
                                type="text"
                                v-model="title"
                                class="form-control"
                                id="validationSample01"
                                placeholder="First name"
                                required=""
                            />
                        </div>
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample02">Content</label>
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
                            multiple
                            @change="files = $event.target.files"
                        />
                    </div>

                    <button @click="editNews()" class="btn btn-primary">Edit News</button>
                </div>
            </div>
        </div>
        <!-- end Content -->
    </div>
</template>
