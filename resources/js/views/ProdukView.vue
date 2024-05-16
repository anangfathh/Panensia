<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { RouterLink } from 'vue-router'
let products = ref([])
let product_categories = ref([])

onMounted(async () => {
    const productResponse = await axios.get('/api/getProducts')
    products.value = productResponse.data.products
    console.log(products.value)

    const categoriesResponse = await axios.get('/api/getProductCategories')
    product_categories.value = categoriesResponse.data.categories
    console.log(product_categories.value)
})
const filteredImages = (images) => {
    if (!images) {
        return []
    }
    return images.filter((image) => image.order === 1)
}
function filterProducts(categoryId) {
    if (!categoryId) {
        // No category selected, display all products
        return products.value
    } else {
        // Filter products based on category
        return products.value.filter((product) => product.product_category_id === categoryId)
    }
}
function formatPrice(price) {
    // Format price to Indonesian Rupiah
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)
}
</script>

<template>
    <main>
        <!-- introBannerHolder -->
        <section
            class="introBannerHolder d-flex w-100 bgCover"
            style="
                background-image: url(/assets/images/banner/indian-garam-masala-powder-and-colourful-spices-s-2023-11-27-05-18-00-utc.webp);
            "
        >
            <div class="container">
                <div class="row">
                    <div class="col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center">
                        <h1 class="headingIV fwEbold playfair mb-4 text-white">Produk</h1>
                        <ul class="list-unstyled breadCrumbs d-flex justify-content-center">
                            <li class="mr-2">
                                <RouterLink to="/" class="text-white-50">Home /</RouterLink>
                            </li>
                            <li class="mr-2">
                                <RouterLink to="/produk" class="active text-white"
                                    >Produk</RouterLink
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- twoColumns -->
        <div class="twoColumns container pt-lg-23 pb-lg-20 pt-md-16 pb-md-4 pt-10 pb-4">
            <div class="row">
                <div class="col-12 col-lg-9 order-lg-3">
                    <!-- content -->
                    <article id="content">
                        <!-- show-head -->
                        <header class="show-head d-flex flex-wrap justify-content-between mb-7">
                            <ul
                                class="list-unstyled viewFilterLinks d-flex flex-nowrap align-items-center"
                            >
                                <li class="mr-2">
                                    <a href="javascript:void(0);" class="active"
                                        ><i class="fas fa-th-large"></i
                                    ></a>
                                </li>
                                <li class="mr-2">
                                    <a href="javascript:void(0);"><i class="fas fa-list"></i></a>
                                </li>
                                <li class="mr-2">Showing 1–9 of 24 results</li>
                            </ul>
                            <!-- sortGroup -->
                            <div class="sortGroup">
                                <div class="d-flex flex-nowrap align-items-center">
                                    <strong class="groupTitle mr-2">Sort by:</strong>
                                    <div class="dropdown">
                                        <button
                                            class="dropdown-toggle buttonReset"
                                            type="button"
                                            id="sortGroup"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Default sorting
                                        </button>
                                        <ul
                                            class="dropdown-menu dropdown-menu-right"
                                            aria-labelledby="sortGroup"
                                        >
                                            <li><a href="javascript:void(0);">Default Order</a></li>
                                            <li><a href="javascript:void(0);">Default Order</a></li>
                                            <li><a href="javascript:void(0);">Default Order</a></li>
                                            <li><a href="javascript:void(0);">Default Order</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div class="row">
                            <!-- featureCol -->
                            <div
                                class="col-12 col-sm-6 col-lg-4 featureCol mb-7"
                                v-for="item in products"
                                :key="item.id"
                            >
                                <div class="border">
                                    <div class="imgHolder position-relative w-100 overflow-hidden">
                                        <img
                                            v-for="image in filteredImages(item.image)"
                                            :key="image.id"
                                            :src="`/storage/${image.path}`"
                                            alt="image description"
                                            class="img-fluid w-100"
                                        />
                                        <ul
                                            class="list-unstyled postHoverLinskList d-flex justify-content-center m-0"
                                        >
                                            <li class="active" style="list-style: none">
                                                <RouterLink
                                                    :to="`/produk/detail/${item.id}`"
                                                    style="border-radius: 10px"
                                                    >Selengkapnya</RouterLink
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="text-center py-5 px-4">
                                        <span class="title d-block mb-2"
                                            ><RouterLink
                                                :to="`/produk/detail/${item.id}`"
                                                style="border-radius: 10px"
                                                >{{ item.name }}</RouterLink
                                            ></span
                                        >
                                        <span class="price d-block fwEbold">{{
                                            formatPrice(item.price)
                                        }}</span>
                                        <span
                                            class="hotOffer fwEbold text-uppercase text-white position-absolute d-block"
                                            >HOT</span
                                        >
                                        <span
                                            class="hotOffer green fwEbold text-uppercase text-white position-absolute d-block ml-8"
                                            >Sale</span
                                        >
                                    </div>
                                </div>
                            </div>

                            <div class="col-12 pt-3 mb-lg-0 mb-md-6 mb-3">
                                <!-- pagination -->
                                <ul
                                    class="list-unstyled pagination d-flex justify-content-center align-items-end"
                                >
                                    <li>
                                        <a href="javascript:void(0);"
                                            ><i class="fas fa-chevron-left"></i
                                        ></a>
                                    </li>
                                    <li class="active"><a href="javascript:void(0);">1</a></li>
                                    <li><a href="javascript:void(0);">2</a></li>
                                    <li>...</li>
                                    <li>
                                        <a href="javascript:void(0);"
                                            ><i class="fas fa-chevron-right"></i
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="col-12 col-lg-3 order-lg-1">
                    <!-- sidebar -->
                    <aside id="sidebar">
                        <!-- widget -->
                        <section class="widget overflow-hidden mb-9">
                            <form
                                action="javascript:void(0);"
                                class="searchForm position-relative border"
                            >
                                <fieldset>
                                    <input
                                        type="search"
                                        class="form-control"
                                        placeholder="Cari Produk..."
                                    />
                                    <button class="position-absolute">
                                        <i class="icon-search"></i>
                                    </button>
                                </fieldset>
                            </form>
                        </section>
                        <!-- widget -->
                        <section class="widget overflow-hidden mb-9">
                            <h3 class="headingVII fwEbold text-uppercase mb-5">Kategori Produk</h3>
                            <ul class="list-unstyled categoryList mb-0">
                                <li
                                    class="mb-5 overflow-hidden category-item"
                                    v-for="category in product_categories"
                                    :key="category.id"
                                    data-category-id="{{ category.id }}"
                                    @click="filterProducts(category.id)"
                                >
                                    <a href="javascript:void(0);"
                                        >{{ category.name }}
                                        <span class="num border float-right">
                                            {{ category.product.length }}
                                        </span></a
                                    >
                                </li>
                            </ul>
                        </section>
                        <!-- widget -->

                        <!-- widget -->
                        <section class="widget mb-9">
                            <h3 class="headingVII fwEbold text-uppercase mb-6">Produk Terbaru</h3>
                            <ul class="list-unstyled recentListHolder mb-0 overflow-hidden">
                                <li
                                    class="mb-6 d-flex flex-nowrap"
                                    v-for="(product, index) in products.slice(-3)"
                                    :key="index"
                                >
                                    <div class="alignleft">
                                        <a :href="product.link" target="_blank">
                                            <img
                                                v-for="image in filteredImages(product.image)"
                                                :key="image.id"
                                                :src="`/storage/${image.path}`"
                                                alt="image description"
                                                class="img-fluid w-100"
                                            />
                                        </a>
                                    </div>
                                    <div class="description-wrap pl-1">
                                        <h4 class="headingVII mb-1">
                                            <RouterLink
                                                :to="{
                                                    name: 'produk.detail',
                                                    params: { id: product.id }
                                                }"
                                                style="border-radius: 10px"
                                                >{{ product.name }}</RouterLink
                                            >
                                        </h4>
                                        <strong class="price fwEbold d-block">{{
                                            formatPrice(product.price)
                                        }}</strong>
                                    </div>
                                </li>
                            </ul>
                        </section>
                        <!-- widget -->

                        <!-- widget -->
                    </aside>
                </div>
            </div>
        </div>
        <div class="container mb-lg-24 mb-md-16 mb-10">
            <!-- subscribeSecBlock -->

            <!-- subscribeSecBlock -->
        </div>
        <!-- footerHolder -->

        <!-- footerHolder -->
    </main>
</template>
