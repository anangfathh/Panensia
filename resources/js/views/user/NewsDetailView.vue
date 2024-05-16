<script setup>
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from 'axios'

// import NavComp from '../../components/NavComp.vue'
// import FooterComp from '../../components/FooterComp.vue'

let props = defineProps(['id'])
let news = ref(null)
let router = useRouter()

onMounted(async () => {
    const response = await axios.get(`/api/getNewsById/${props.id}`)
    news.value = response.data.news
    console.log(news.value)

    if (!news.value) {
        router.push({ name: 'news' })
    }
})
</script>

<!-- <template>
    <header>
        <NavComp />
    </header>
    <main>
        <h1>User News Detail</h1>
        <div v-if="news">
            <p>id: {{ news.id }}</p>
            <p>title: {{ news.title }}</p>
            <template v-for="image in news.news_images" :key="image.id">
                <img :src="`/storage/${image.path}`" width="100" />
            </template>
            <p>content: {{ news.content }}</p>
            <p>category id: {{ news.news_category.id }}</p>
            <p>category: {{ news.news_category.name }}</p>
            <p>user id: {{ news.user.id }}</p>
            <p>user: {{ news.user.name }}</p>
            <p>created_at: {{ news.created_at }}</p>
            <p>updated_at: {{ news.updated_at }}</p>
        </div>
    </main>
    <FooterComp />
</template> -->

<template>
    <main>
        <!-- introBannerHolder -->
        <section
            class="introBannerHolder d-flex w-100 bgCover"
            style="
                background-image: url(https://i.ibb.co/9wmwSHB/indian-garam-masala-powder-and-colourful-spices-s-2023-11-27-05-18-00-utc.jpg);
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
                                <RouterLink to="/berita" class="text-white-50">Berita /</RouterLink>
                            </li>
                            <li class="active text-white">Detail</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- twoColumns -->
        <div class="twoColumns container pt-xl-23 pb-xl-20 py-lg-20 py-md-16 py-10">
            <div class="row border-bottom mb-9">
                <div class="col-12 col-lg-9 order-lg-3">
                    <!-- newsBlogColumn -->
                    <div class="newsBlogColumn mb-9" v-if="news">
                        <div class="textHolder d-flex align-items-start mb-4">
                            <div class="center pl-6">
                                <h1
                                    class="fwEbold mb-3"
                                    style="
                                        display: block;
                                        margin-left: auto;
                                        margin-right: auto;
                                        color: black;
                                    "
                                >
                                    {{ news.title }}
                                </h1>
                                <div class="postMeta d-flex align-items-center mb-3">
                                    <span class="postBy mr-3"
                                        >Posted by: {{ news.user.name }}
                                    </span>
                                    <span class="postBy mr-3"> {{ news.created_at }}</span>
                                    <!-- <time class=" text-uppercase" datetime="2019-02-03 20:00">
                                        <strong class="fwEbold d-block">20</strong> Sep
                                    </time> -->
                                </div>
                            </div>
                        </div>
                        <div class="imgHolder mb-6">
                            <img
                                src="https://i.pinimg.com/564x/b7/29/c8/b729c892ce5ccbee699a47c944653ffa.jpg"
                                alt="image description"
                                class="img-fluid"
                                style="display: block; margin-left: auto; margin-right: auto"
                            />
                        </div>
                        <p class="mb-5">
                            {{ news.content }}
                        </p>
                    </div>
                </div>
                <div class="col-12 col-lg-3 order-lg-1">
                    <!-- sidebar -->
                    <aside id="sidebar">
                        <!-- widget -->
                        <!-- <section class="widget overflow-hidden mb-md-9 mb-6">
                            <h3 class="headingVII fwEbold text-uppercase mb-4">Search</h3>
                            <form action="javascript:void(0);" class="searchForm position-relative border">
                                <fieldset>
                                    <input type="search" class="form-control" placeholder="Search product...">
                                    <button class="position-absolute"><i class="icon-search"></i></button>
                                </fieldset>
                            </form>
                        </section> -->
                        <!-- widget -->
                        <!-- <section class="widget overflow-hidden mb-md-9 mb-6">
                            <h3 class="headingVII fwEbold text-uppercase mb-2">RECENT POSTS</h3>
                            <ul class="list-unstyled recentPostList mb-0">
                                <li><a href="javascript:void(0);" class="py-2 d-block">Blog image post</a></li>
                                <li><a href="javascript:void(0);" class="py-2 d-block">Post with Gallery</a></li>
                                <li><a href="javascript:void(0);" class="py-2 d-block">Post with Audio</a></li>
                                <li><a href="javascript:void(0);" class="py-2 d-block">Post with Video</a></li>
                                <li><a href="javascript:void(0);" class="py-2 d-block">Maecenas ultricies</a></li>
                            </ul>
                        </section> -->
                        <!-- widget -->
                        <!-- <section class="widget overflow-hidden mb-md-9 mb-6">
                            <h3 class="headingVII fwEbold text-uppercase mb-2">RECENT COMMENTS</h3>
                            <ul class="list-unstyled recentPostList mb-0">
                                <li><a href="javascript:void(0);" class="py-2 d-block">Admin on Vivamus blandit</a></li>
                                <li><a href="javascript:void(0);" class="py-2 d-block">Admin on Vivamus blandit</a></li>
                                <li><a href="javascript:void(0);" class="py-2 d-block">Admin on Vivamus blandit</a></li>
                                <li><a href="javascript:void(0);" class="py-2 d-block">Admin on Vivamus blandit</a></li>
                                <li><a href="javascript:void(0);" class="py-2 d-block">Admin on Vivamus blandit</a></li>
                            </ul>
                        </section> -->
                        <!-- widget -->
                        <!-- <section class="widget overflow-hidden mb-md-6 mb-3">
                            <h3 class="headingVII fwEbold text-uppercase mb-4">ARCHIVES</h3>
                            <ul class="list-unstyled archiveList mb-0">
                                <li class="mb-3"><a href="javascript:void(0);" class="d-block">March 2018</a></li>
                                <li class="mb-3"><a href="javascript:void(0);" class="d-block">December 2018</a></li>
                                <li class="mb-3"><a href="javascript:void(0);" class="d-block">November 2018</a></li>
                                <li class="mb-3"><a href="javascript:void(0);" class="d-block">September 2018</a></li>
                                <li class="mb-3"><a href="javascript:void(0);" class="d-block">August 2018</a></li>
                            </ul>
                        </section> -->
                        <!-- widget -->
                        <section class="widget overflow-hidden mb-md-5 mb-3">
                            <h3 class="headingVII fwEbold text-uppercase mb-4">CATEGORIES</h3>
                            <ul class="list-unstyled archiveList mb-0">
                                <li class="mb-3">
                                    <a href="javascript:void(0);" class="d-block">Slimming</a>
                                </li>
                                <li class="mb-3">
                                    <a href="javascript:void(0);" class="d-block">Detox</a>
                                </li>
                                <li class="mb-3">
                                    <a href="javascript:void(0);" class="d-block"
                                        >Imun dan Stamina</a
                                    >
                                </li>
                                <li class="mb-3">
                                    <a href="javascript:void(0);" class="d-block"
                                        >Kulit dan Kecantikan</a
                                    >
                                </li>
                                <li class="mb-3">
                                    <a href="javascript:void(0);" class="d-block"
                                        >Diabeter dan Gula Darah</a
                                    >
                                </li>
                                <!-- <li class="mb-3"><a href="javascript:void(0);" class="d-block">Videos</a></li>
                                <li class="mb-3"><a href="javascript:void(0);" class="d-block">WordPress</a></li> -->
                            </ul>
                        </section>

                        <!-- <section section class="widget overflow-hidden mb-md-5 mb-3">
                        <h3 class="headingVII fwEbold text-uppercase mb-4">Berita Terbaru</h3>
                        <div class="card" style="width: 12rem;">
                    <img src="https://i.pinimg.com/564x/63/40/af/6340af231bc915b25df80b08941eb9a0.jpg" class="card-img-top" alt="..." style="width:100px; height: 100px;" >
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    </div>
                    </section> -->
                        <!-- widget -->
                        <!-- <section class="widget overflow-hidden mb-md-9 mb-6">
                            <h3 class="headingVII fwEbold text-uppercase mb-4">META</h3>
                            <ul class="list-unstyled archiveList mb-0">
                                <li class="mb-3"><a href="javascript:void(0);" class="d-block">Log in</a></li>
                                <li class="mb-3"><a href="javascript:void(0);" class="d-block">Entries RSS</a></li>
                                <li class="mb-3"><a href="javascript:void(0);" class="d-block">Comments RSS</a></li>
                                <li class="mb-3"><a href="javascript:void(0);" class="d-block">WordPress.org</a></li>
                            </ul>
                        </section> -->
                    </aside>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <!-- socialNetworkList -->
                    <ul class="list-unstyled socialNetworkList d-flex flex-nowrap mb-5">
                        <li class="text-uppercase mr-12">SHARE THIS POST:</li>
                        <li class="mr-4">
                            <a href="javascript:void(0);" class="fab fa-facebook-f"></a>
                        </li>
                        <li class="mr-4">
                            <a href="javascript:void(0);" class="fab fa-google-plus-g"></a>
                        </li>
                        <li class="mr-4">
                            <a href="javascript:void(0);" class="fab fa-twitter"></a>
                        </li>
                        <li class="mr-4">
                            <a href="javascript:void(0);" class="fab fa-pinterest-p"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Add this section below the commentsFormArea but before the subscribeSecBlock -->
        <section class="recommendedNewsBlock container mb-lg-24 mb-md-16 mb-10">
            <h2 class="headingVII text-uppercase mb-5">Berita Lainnya</h2>
            <div class="row">
                <!-- Recommended News Card 1 -->
                <div class="col-md-4 mb-md-0 mb-4">
                    <div class="card" style="display: flex; flex-direction: column">
                        <img
                            src="https://th.bing.com/th/id/OIP.yq1A-O2YmaQ1rXWZ7l1wVwAAAA?rs=1&pid=ImgDetMain"
                            class="card-img-top"
                            alt="Image"
                        />
                        <div class="card-body" style="display: flex; flex-direction: column">
                            <h5 class="card-title">Makanan Berempah dan Sehat</h5>
                            <p class="card-text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                            <a href="#" class="btn btnTheme btnShop md-round fwEbold text-white"
                                >Read More</a
                            >
                        </div>
                    </div>
                </div>
                <!-- Recommended News Card 2 -->
                <div class="col-md-4 mb-md-0 mb-4">
                    <div class="card" style="display: flex; flex-direction: column">
                        <img
                            src="https://th.bing.com/th/id/OIP.S422L4dgMlw3M1rlQ5MzmQHaE7?rs=1&pid=ImgDetMain"
                            class="card-img-top"
                            alt="Image"
                        />
                        <div class="card-body" style="display: flex; flex-direction: column">
                            <h5 class="card-title">Menu Diet Sehat</h5>
                            <p class="card-text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                            <a href="#" class="btn btnTheme btnShop md-round fwEbold text-white"
                                >Read More</a
                            >
                        </div>
                    </div>
                </div>
                <!-- Recommended News Card 3 -->
                <div class="col-md-4 mb-md-0 mb-4">
                    <div class="card" style="display: flex; flex-direction: column">
                        <img
                            src="https://th.bing.com/th/id/OIP.9JLW-YR-P6URQZxZuUtRXQHaE8?rs=1&pid=ImgDetMain"
                            class="card-img-top"
                            alt="Image"
                        />
                        <div class="card-body" style="display: flex; flex-direction: column">
                            <h5 class="card-title">Manfaat Lada Hitan</h5>
                            <p class="card-text">
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </p>
                            <a href="#" class="btn btnTheme btnShop md-round fwEbold text-white"
                                >Read More</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- <div class="container mb-lg-24 mb-md-16 mb-10"> -->
        <!-- subscribeSecBlock -->
        <!-- <section class="subscribeSecBlock bgCover col-12 pt-lg-24 pb-lg-12 pt-md-16 pb-md-8 py-10" style="background-image: url(https://i.ibb.co/ZhxJBFx/top-view-of-farm-lands-with-agricultural-machines-2023-11-28-15-48-38-utc.jpg)">
                <header class="col-12 mainHeader mb-9 text-center">
                    <h1 class="headingIV playfair fwEblod mb-4">Subscribe Our Newsletter</h1>
                    <span class="headerBorder d-block mb-5"><img src="" alt="Header Border" class="img-fluid img-bdr"></span>
                    <p class="mb-6">Enter Your email address to join our mailing list and keep yourself update</p>
                </header>
                <form class="emailForm1 mx-auto overflow-hidden d-flex flex-wrap">
                    <input type="email" class="form-control px-4 border-0" placeholder="Enter your mail...">
                    <button type="submit" class="btn btnTheme btnShop fwEbold text-white py-3 px-4 py-md-3 px-md-4">Shop Now <i class="fas fa-arrow-right ml-2"></i></button>
                </form>
            </section>
        </div> -->
    </main>
</template>
