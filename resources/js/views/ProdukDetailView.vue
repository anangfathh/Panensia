<script setup>
import { useRouter } from 'vue-router'
import { onMounted, ref, defineProps } from 'vue'
import axios from 'axios'

let props = defineProps(['id'])
let product = ref(null)
let router = useRouter()
let products = ref([])
let product_categories = ref([])

onMounted(async () => {
    try {
        const response = await axios.get(`/api/getProductById/${props.id}`)
        product.value = response.data.product
        console.log(product.value)

        if (!product.value) {
            router.push({ name: 'produk' })
        }
    } catch (error) {
        console.error('Error fetching product:', error)
    }
    const productResponse = await axios.get('/api/getProducts')
    products.value = productResponse.data.products
    console.log(products.value)

    const categoriesResponse = await axios.get('/api/getProductCategories')
    product_categories.value = categoriesResponse.data.categories
    console.log(product_categories.value)

    $(document).ready(function () {
        jQuery('.productSliderImage').slick({
            dots: false,
            speed: 800,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            autoplay: true,
            arrows: false,
            fade: true,
            autoplaySpeed: 2000,
            asNavFor: '.paggSlider'
        })
        jQuery('.paggSlider').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.productSliderImage',
            arrows: false,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1170,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        })
    })
})
const filteredImages = (images) => {
    if (!images) {
        return []
    }
    return images.filter((image) => image.order === 1)
}
function redirectToTokped(link) {
    window.open(link, '_blank') // Open link in a new tab
}
function redirectToShopee(link) {
    window.open(link, '_blank') // Open link in a new tab
}
function formatPrice(price) {
    // Format price to Indonesian Rupiah
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)
}
</script>

<template>
    <div v-if="product">
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
                            <h1 class="headingIV fwEbold playfair mb-4 text-white">Produk</h1>
                            <ul class="list-unstyled breadCrumbs d-flex justify-content-center">
                                <li class="mr-2">
                                    <RouterLink to="/" class="text-white-50">Home /</RouterLink>
                                </li>
                                <li class="mr-2">
                                    <RouterLink to="/produk" class="text-white-50"
                                        >Produk /</RouterLink
                                    >
                                </li>
                                <li class="active text-white">{{ product ? product.name : '' }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <!-- twoColumns -->
            <div class="twoColumns container pt-xl-23 pb-xl-20 pt-lg-20 pb-lg-20 py-md-16 py-10">
                <div class="row mb-6">
                    <div class="col-12 col-lg-6 order-lg-1">
                        <!-- productSliderImage -->
                        <div class="productSliderImage mb-lg-0 mb-4">
                            <div v-for="image in product.image" :key="image.id">
                                <img
                                    :src="`/storage/${image.path}`"
                                    alt="image description"
                                    class="img-fluid w-100"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6 order-lg-3">
                        <!-- productTextHolder -->
                        <div class="productTextHolder overflow-hidden">
                            <h2 class="fwEbold mb-2">{{ product ? product.name : '' }}</h2>
                            <ul class="list-unstyled productInfoDetail mb-5 overflow-hidden">
                                <li class="mb-2">Berat bersih: <span>250 gram</span></li>
                                <li class="mb-2">Tekstur: <span>Bubuk</span></li>
                                <li class="mb-2">Bebas biaya ongkir se-Indonesia</li>
                            </ul>
                            <strong class="price d-block mb-5 text-green">{{
                                formatPrice(product.price)
                            }}</strong>
                            <span class="text-uppercase mr-2">Dapatkan Di:</span>
                            <br /><br />
                            <ul class="list-unstyled socialNetwork d-flex flex-wrap mb-sm-11 mb-4">
                                <div class="socialNetworkLink">
                                    <a
                                        href="#"
                                        class="btn btnShoppe btnShop fwEbold text-black py-2 px-2"
                                        @click="redirectToShopee(product.link_shopee)"
                                    >
                                        <img
                                            src="https://freelogopng.com/images/all_img/1656181093transparent-shopee-logo-png.png"
                                            alt=""
                                            style="
                                                width: 30px;
                                                padding-right: 10px;
                                                padding-bottom: 8px;
                                            "
                                        />Shopee
                                    </a>
                                    <!-- <br /> -->
                                    <a
                                        href="#"
                                        target="_blank"
                                        class="btn btnTokped btnShop fwEbold text-black py-2 px-2"
                                        @click="redirectToTokped(product.link_tokped)"
                                    >
                                        <img
                                            src="https://www.freepnglogos.com/uploads/logo-tokopedia-png/tokopedia-nursing-pillow-archives-baby-loop-7.png"
                                            alt=""
                                            style="
                                                width: 30px;
                                                padding-right: 10px;
                                                padding-bottom: 8px;
                                            "
                                        />Tokopedia
                                    </a>
                                    <a
                                        href="#"
                                        target="_blank"
                                        class="btn btnTokped btnShop fwEbold text-black py-2 px-2"
                                        @click="redirectToTokped(product.link_tiktok)"
                                    >
                                        <img
                                            src="https://freelogopng.com/images/all_img/1655893962tiktok-logo-black-and-white.png"
                                            alt=""
                                            style="
                                                width: 30px;
                                                padding-right: 10px;
                                                padding-bottom: 8px;
                                            "
                                        />Tiktok
                                    </a>
                                </div>
                            </ul>

                            <div>
                                <div id="accordion" class="accordionList pt-lg-0">
                                    <div class="card mb-2">
                                        <div class="card-header px-xl-5 py-xl-3" id="headingOne">
                                            <h5 class="mb-0">
                                                <button
                                                    class="btn btn-link fwEbold text-uppercase text-left w-100 p-0"
                                                    data-toggle="collapse"
                                                    data-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    Deskripsi
                                                    <i class="fas fa-sort-down float-right"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapseOne"
                                            class="collapse show"
                                            aria-labelledby="headingOne"
                                            data-parent="#accordion"
                                        >
                                            <div class="card-body px-xl-5 py-0">
                                                <p class="mb-7">
                                                    {{ product ? product.desc : '' }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mb-2">
                                        <div class="card-header px-xl-5 py-xl-3" id="headingTwo">
                                            <h5 class="mb-0">
                                                <button
                                                    class="btn btn-link fwEbold text-uppercase text-left w-100 collapsed p-0"
                                                    data-toggle="collapse"
                                                    data-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    Bahan
                                                    <i class="fas fa-sort-down float-right"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            class="collapse"
                                            aria-labelledby="headingTwo"
                                            data-parent="#accordion"
                                        >
                                            <div class="card-body px-xl-5 py-0">
                                                <p class="mb-7">
                                                    {{ product ? product.ingredient : '' }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mb-2">
                                        <div class="card-header px-xl-5 py-xl-3" id="headingThree">
                                            <h5 class="mb-0">
                                                <button
                                                    class="btn btn-link fwEbold text-uppercase text-left w-100 collapsed p-0"
                                                    data-toggle="collapse"
                                                    data-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    Peringatan
                                                    <i class="fas fa-sort-down float-right"></i>
                                                </button>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapseThree"
                                            class="collapse"
                                            aria-labelledby="headingThree"
                                            data-parent="#accordion"
                                        >
                                            <div class="card-body px-xl-5 py-0">
                                                <p class="mb-7">
                                                    {{ product ? product.caution : '' }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <!-- paggSlider -->
                        <div class="paggSlider">
                            <div v-for="image in product.image" :key="image.id">
                                <div class="imgBlock">
                                    <img
                                        :src="`/storage/${image.path}`"
                                        alt="image description"
                                        class="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- featureSec -->
            <section
                class="featureSec container overflow-hidden pt-xl-12 pb-xl-29 pt-lg-10 pb-lg-14 pt-md-8 pb-md-10 py-5"
            >
                <div class="row">
                    <!-- mainHeader -->
                    <header class="col-12 mainHeader mb-5 text-center">
                        <h1 class="headingIV playfair fwEblod mb-4">Kamu mungkin juga suka</h1>
                    </header>
                </div>
                <div class="row">
                    <!-- featureCol -->
                    <div
                        class="col-12 col-sm-6 col-lg-3 featureCol position-relative mb-7"
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
                                            :to="{
                                                name: 'produk.detail',
                                                params: { id: item.id }
                                            }"
                                            style="border-radius: 10px"
                                            >Selengkapnya</RouterLink
                                        >
                                    </li>
                                </ul>
                            </div>
                            <div class="text-center py-5 px-4">
                                <span class="title d-block mb-2"
                                    ><RouterLink
                                        :to="{
                                            name: 'produk.detail',
                                            params: { id: item.id }
                                        }"
                                        style="border-radius: 10px"
                                        >{{ item.name }}</RouterLink
                                    ></span
                                >
                                <span class="price d-block fwEbold"
                                    ><del>Rp59.000</del>Rp55.000</span
                                >
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
                </div>
            </section>
            <div class="container mb-lg-24 mb-md-16 mb-10">
                <!-- subscribeSecBlock -->

                <!-- subscribeSecBlock -->
            </div>
            <!-- footerHolder -->

            <!-- footerHolder -->
        </main>
    </div>
</template>
