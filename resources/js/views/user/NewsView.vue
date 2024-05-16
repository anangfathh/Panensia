<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

let news = ref([])
let news_categories = ref([])

onMounted(async () => {
    const response = await axios.get('/api/getNews')
    news.value = response.data.news
    console.log(news.value)

    const categoriesResponse = await axios.get('/api/getNewsCategories')
    news_categories.value = categoriesResponse.data.categories
    console.log(news_categories.value)
})
</script>

<!-- <template>
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
</template> -->

<template>
    <main>
        <section
            class="introBannerHolder d-flex w-100 bgCover"
            style="
                background-image: url(/assets/images/banner/indian-garam-masala-powder-and-colourful-spices-s-2023-11-27-05-18-00-utc.webp);
            "
        >
            <div class="container">
                <div class="row">
                    <div class="col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center">
                        <h1 class="headingIV fwEbold playfair mb-4 text-white">Berita</h1>
                        <ul class="list-unstyled breadCrumbs d-flex justify-content-center">
                            <li class="mr-2">
                                <RouterLink to="/" class="text-white-50">Home /</RouterLink>
                            </li>
                            <li class="mr-2">
                                <RouterLink to="/produk" class="active text-white"
                                    >Berita</RouterLink
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section style="background-image: linear-gradient(to bottom, #fff8b5, #fff8b5, #b2b377)">
            <div class="twoColumns container pt-lg-23 pb-lg-20 pt-md-16 pb-md-4 pt-10 pb-4">
                <div class="row">
                    <div class="col-12 col-lg-9 order-lg-3">
                        <article id="content" v-if="news.length > 0">
                            <!-- card baru  -->
                            <div v-for="item in news" :key="item.id">
                                <div
                                    class="card mb-3 mt-2"
                                    style="
                                        max-width: 780px;
                                        height: 180px;
                                        background-color: #f1f5a8;
                                    "
                                >
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img
                                                src="https://cdn.pixabay.com/photo/2017/07/28/13/29/spices-2548653_960_720.jpg"
                                                class="img-fluid rounded-start"
                                                alt="..."
                                                style="width: fit-content; height: fit-content"
                                            />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <p class="card-text">
                                                    <small class="text-body-secondary">{{
                                                        item.user.name
                                                    }}</small>
                                                    <small>tgl liris</small>
                                                </p>
                                                <RouterLink :to="`/news/detail/${item.id}`"
                                                    ><h5 class="card-title" style="color: #5ba515">
                                                        {{ item.title }}
                                                    </h5></RouterLink
                                                >
                                                <p class="card-text">summary berita ini adalah</p>
                                                <p class="card-text">
                                                    <small
                                                        class="text-body-secondary btn-primary"
                                                        >{{ item.news_category.name }}</small
                                                    >
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!--  -->
                        </article>
                    </div>

                    <div class="col-12 col-lg-3 order-lg-1">
                        <aside id="sidebar">
                            <section class="widget overflow-hidden mb-md-9 mb-6 ml-2">
                                <h3
                                    class="headingVII fwEbold text-uppercase mb-4 mt-4"
                                    style="color: #114232"
                                >
                                    Search
                                </h3>
                                <form
                                    action="javascript:void(0);"
                                    class="searchForm position-relative border"
                                >
                                    <fieldset
                                        style="
                                            background-image: url(https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_960_720.jpg);
                                            height: 100px;
                                        "
                                    >
                                        <input
                                            type="search"
                                            class="form-control"
                                            placeholder="Search product..."
                                        />
                                        <button class="position-absolute">
                                            <i class="icon-search"></i>
                                        </button>
                                    </fieldset>
                                </form>
                            </section>

                            <section class="widget overflow-hidden mb-md-5 mb-3">
                                <h3 class="headingVII fwEbold text-uppercase mb-4">CATEGORIES</h3>
                                <ul
                                    class="list-unstyled archiveList mb-0"
                                    v-if="news_categories.length > 0"
                                >
                                    <li class="mb-3" v-for="item in news_categories" :key="item.id">
                                        <a href="javascript:void(0);" class="d-block text-black">{{
                                            item.name
                                        }}</a>
                                    </li>
                                </ul>
                            </section>
                        </aside>
                    </div>
                </div>

                <div class="col-12 mb-sm-0 mb-4">
                    <!-- Pagination -->
                    <nav aria-label="Page navigation">
                        <ul class="pagination justify-content-center">
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span class="sr-only">Previous</span>
                                </a>
                            </li>
                            <li class="active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <!-- <div class="container-fluid px-xl-20 px-lg-14"> -->
                <!-- subscribeSecBlock -->
                <!--  <section class="subscribeSecBlock bgCover col-12 pt-xl-24 pb-xl-12 pt-lg-20 pt-md-16 pt-10 pb-md-8 pb-5" style="background-image: url(https://i.ibb.co/ZhxJBFx/top-view-of-farm-lands-with-agricultural-machines-2023-11-28-15-48-38-utc.jpg)">
          <header class="col-12 mainHeader mb-sm-9 mb-6 text-center">
            <h1 class="headingIV playfair fwEblod mb-4 text-white">Subscribe Our Newsletter</h1>
            <p class="mb-sm-6 mb-3 text-white">Enter Your email address to join our mailing list and keep yourself update</p>
          </header>
          <form class="emailForm1 mx-auto overflow-hidden d-flex flex-wrap">
            <input type="email" class="form-control px-4 border-0" placeholder="Enter your mail...">
            <button type="submit" class="btn btnTheme btnShop fwEbold text-white py-3 px-4">Shop Now <i class="fas fa-arrow-right ml-2"></i></button>
          </form>
        </section>
      </div> -->
            </div>
        </section>
    </main>
</template>
