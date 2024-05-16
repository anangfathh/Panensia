<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

let news = ref([])

onMounted(async () => {
    const response = await axios.get('/api/getNews')
    news.value = response.data.news
    console.log(news.value)
})
</script>

<template>
    <!-- <main>
        <h1>Admin News {{ news.length }}</h1>
        <RouterLink to="/admin/news/create">
            <button>Create</button>
        </RouterLink>
        <table v-if="news.length > 0" width="100%">
            <thead>
                <tr>
                    <th width="5%">ID</th>
                    <th width="80%">Title</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in news" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td style="text-align: left; padding-left: 10px">{{ item.title }}</td>
                    <td>
                        <RouterLink :to="{ name: 'admin.news.edit', params: { id: item.id } }">
                            <button>Edit</button>
                        </RouterLink>
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
                            <RouterLink :to="`/admin`"
                                ><i class="material-icons icon-20pt">home</i></RouterLink
                            >
                        </li>
                        <li class="breadcrumb-item">Management</li>
                        <li class="breadcrumb-item active" aria-current="page">News</li>
                    </ol>
                </nav>

                <h1 class="m-0">News</h1>
            </div>
            <!-- end heading -->
        </div>

        <!-- Content -->
        <div class="container page__container">
            <RouterLink to="/admin/news/create">
                <button class="btn btn-dark mb-4">Create</button>
            </RouterLink>
            <RouterLink to="/admin/news_categories">
                <button class="btn btn-secondary mb-4 ml-2">
                    <i class="fa fa-plus"></i> Add Category
                </button>
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
                    <table class="table mb-0 thead-border-top-0" width="100%">
                        <thead>
                            <tr>
                                <th width="5%">ID</th>
                                <th width="80%">Title</th>
                            </tr>
                        </thead>
                        <tbody class="list" id="staff02">
                            <template v-if="news.length > 0">
                                <tr v-for="item in news" :key="item.id">
                                    <td class="text-muted">{{ item.id }}</td>
                                    <td>{{ item.title }}</td>
                                    <td>
                                        <RouterLink
                                            :to="{
                                                name: 'admin.news.edit',
                                                params: { id: item.id }
                                            }"
                                        >
                                            <button class="btn btn-success mr-1">
                                                <i class="fa fa-pencil-alt"></i> Edit
                                            </button>
                                        </RouterLink>
                                    </td>
                                </tr>
                            </template>
                            <template v-else>
                                <tr>
                                    <td colspan="7" class="text-center">Tidak ada Berita</td>
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
