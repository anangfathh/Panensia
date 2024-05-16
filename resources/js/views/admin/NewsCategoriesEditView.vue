<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

let props = defineProps(['id'])
let news_categories = ref([])
let name = ref('')
const router = useRouter()

onMounted(async () => {
    const newsCategoryResponse = await axios.get(`/api/getNewsCategoryById/${props.id}`)
    news_categories.value = newsCategoryResponse.data.category
    console.log(news_categories.value)

    if (!news_categories.value) {
        router.push({ name: 'admin.news_categories' })
    }
})

const editCategory = async () => {
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
        const response = await axios.post(`/api/editNewsCategory/${props.id}`, newsData)
        console.log(response.data)
        alert('News category edited')
        router.push('/admin/news_categories')
    } catch (error) {
        console.error(error)
        alert('Error editing news category')
    }
}
</script>

<template>
    <main>
        <h1>Admin Edit News Category</h1>
        <p>name</p>
        <input type="text" v-model="name" />
        <button @click="editCategory()">Edit</button>
    </main>
</template>
