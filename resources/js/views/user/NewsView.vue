<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

import NavComp from '../../components/NavComp.vue'
import FooterComp from '../../components/FooterComp.vue'

let news = ref([])

onMounted(async () => {
    const response = await axios.get('/api/getNews')
    news.value = response.data.news
    console.log(news.value)
})
</script>

<template>
    <header>
        <NavComp />
    </header>
    <main>
        <h1>User News {{ news.length }}</h1>
        <ul v-if="news.length > 0">
            <li v-for="item in news" :key="item.id">
                <RouterLink :to="{ name: 'news.detail', params: { id: item.id } }">
                    <h2>{{ item.title }}</h2>
                </RouterLink>
                <template v-for="image in item.news_images" :key="image.id">
                    <img :src="`/storage/${image.path}`" width="100" />
                </template>
                <br />
                <small>{{ item.news_category.name }}</small>
                <p>{{ item.content }}</p>
                <p>{{ item.user.name }}</p>
                <small>{{ item.created_at }}</small>
            </li>
        </ul>
        <p v-else>No news found</p>
    </main>
    <FooterComp />
</template>
