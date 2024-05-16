<!-- <script setup>
import NavComp from '../../components/NavComp.vue'
import FooterComp from '../../components/FooterComp.vue'
</script>

<template>
    <main>
        <h1>User</h1>
        <div>This is the home view</div>
        <h1>VISITOR COUNT</h1>
        <div>Today: {{ $todayVisitors }}</div>
        <div>This week: {{ $weekVisitors }}</div>
        <div>This month: {{ $monthVisitors }}</div>
        <div>This year: {{ $yearVisitors }}</div>
        <div>Total: {{ $totalVisitors }}</div>
    </main>
</template> -->
<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

let products = ref([])

onMounted(async () => {
    const productResponse = await axios.get('/api/getProducts')
    products.value = productResponse.data.products
    console.log(products.value)

    $(document).ready(function () {
        jQuery('.slick-fade').slick({
            slidesToScroll: 1,
            rows: 0,
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            dots: true,
            dotsClass: 'slickNums',
            fade: true,
            adaptiveHeight: true,
            autoplay: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        dots: false
                    }
                }
            ]
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
</script>

<template>
    <main>
        <!-- introBlock -->
        <section class="introBlock position-relative">
            <div class="slick-fade">
                <!-- slider 1 -->
                <div>
                    <div
                        class="align w-100 d-flex align-items-center bgCover"
                        style="background-image: url(\new-asset\images\b-bg2.jpg)"
                    >
                        <!-- holder -->
                        <div class="container position-relative holder pt-xl-10 pt-0">
                            <!-- py-12 pt-lg-30 pb-lg-25 -->
                            <div class="row">
                                <div class="col-12 col-xl-7">
                                    <div class="txtwrap pr-lg-10">
                                        <span
                                            class="title d-block text-uppercase fwEbold position-relative pl-2 mb-lg-5 mb-sm-3 mb-1"
                                            >Panensia</span
                                        >
                                        <h1
                                            class="fwEbold position-relative pb-lg-8 pb-4 mb-xl-7 mb-lg-6"
                                        >
                                            Berasal Dari
                                            <span
                                                class="text-break d-block"
                                                style="font-size: 46px"
                                            >
                                                Rempah Pilihan.</span
                                            >
                                        </h1>
                                        <p class="mb-xl-15 mb-lg-10">
                                            penyuplai terbaik untuk kebutuhan rempah-rempah dan
                                            bumbu masak <br />
                                            yang diproduksi sendiri, memberikan aroma dan rasa
                                            terbaik untuk masakan Anda.
                                        </p>
                                        <a
                                            href="shop.html"
                                            class="btn btnTheme btnShop fwEbold text-white md-round py-md-3 px-md-4 py-2 px-3"
                                            >Shop Now <i class="fas fa-arrow-right ml-2"></i
                                        ></a>
                                    </div>
                                </div>
                                <div class="imgHolder">
                                    <img
                                        src="/public/assets/images/banner/chili-pepper-spices-2023-11-27-05-01-26-utc.webp"
                                        alt="image description"
                                        class=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end Slider 1 -->

                <!-- Slider 2 -->
                <div>
                    <div
                        class="align w-100 d-flex align-items-center bgCover"
                        style="background-image: url(\new-asset\images\b-bg2.jpg)"
                    >
                        <!-- holder -->
                        <div class="container position-relative holder pt-xl-10 pt-0">
                            <!-- py-12 pt-lg-30 pb-lg-25 -->
                            <div class="row">
                                <div class="col-12 col-xl-7">
                                    <div class="txtwrap pr-lg-10">
                                        <span
                                            class="title d-block text-uppercase fwEbold position-relative pl-2 mb-lg-5 mb-sm-3 mb-1"
                                            >Panensia</span
                                        >
                                        <h1 class="fwEbold position-relative mb-xl-7 mb-lg-5">
                                            Dipanen Dari
                                            <span class="text-break d-block">Petani Terbaik</span>
                                        </h1>
                                        <p class="mb-xl-15 mb-lg-10">
                                            mendistribusikan produk rempah Indonesia <br />
                                            baik di pasar domestik maupun mancanegara.
                                        </p>
                                        <RouterLink
                                            to="/produk"
                                            class="btn btnTheme btnShop fwEbold text-white md-round py-2 px-3 py-md-3 px-md-4"
                                            >Shop Now <i class="fas fa-arrow-right ml-2"></i
                                        ></RouterLink>
                                    </div>
                                </div>
                                <div class="imgHolder">
                                    <img
                                        src="/public/assets/images/banner/chili-pepper-spices-2023-11-27-05-01-26-utc.webp"
                                        alt="image description"
                                        class=""
                                        style="width: 1000px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end Slider 2 -->

                <!-- Slider 3 -->
                <div>
                    <div
                        class="align w-100 d-flex align-items-center bgCover"
                        style="background-image: url(\new-asset\images\b-bg3.jpg)"
                    >
                        <!-- holder -->
                        <div class="container position-relative holder pt-xl-10 pt-0">
                            <!-- py-12 pt-lg-30 pb-lg-25 -->
                            <div class="row">
                                <div class="col-12 col-xl-7">
                                    <div class="txtwrap pr-lg-10">
                                        <span
                                            class="title d-block text-uppercase fwEbold position-relative pl-2 mb-lg-5 mb-sm-3 mb-1"
                                            >Panensia</span
                                        >
                                        <h2 class="fwEbold position-relative mb-xl-7 mb-lg-5">
                                            Pilihan Terbaik Perusahaan Anda
                                        </h2>
                                        <p class="mb-xl-15 mb-lg-10">
                                            Panensia memiliki layanan Supply Chain untuk kebutuhan
                                            produksi <br />
                                            industri F&B, hotel, restoran, catering, perusahaan
                                            kosmetik, dan usaha lainnya.
                                        </p>
                                        <a
                                            href="shop.html"
                                            class="btn btnTheme btnShop fwEbold text-white md-round py-2 px-3 py-md-3 px-md-4"
                                            >Shop Now <i class="fas fa-arrow-right ml-2"></i
                                        ></a>
                                    </div>
                                </div>
                                <div class="imgHolder">
                                    <img
                                        src="/public/assets/images/banner/chili-pepper-spices-2023-11-27-05-01-26-utc.webp"
                                        alt="image description"
                                        class=""
                                        style="width: 1000px"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end Slider 3 -->
            </div>
            <div class="slickNavigatorsWrap">
                <a href="#" class="slick-prev"><i class="icon-leftarrow"></i></a>
                <a href="#" class="slick-next"><i class="icon-rightarrow"></i></a>
            </div>
        </section>
        <div
            class="contactListBlock container overflow-hidden pt-xl-24 pb-xl-12 pt-lg-20 pb-lg-10 pt-md-16 pb-md-4 pt-10 pb-1"
        >
            <div class="row">
                <div class="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                    <!-- contactListColumn -->
                    <div
                        class="contactListColumn border bg-lightGray overflow-hidden py-xl-5 py-md-3 py-2 px-xl-6 px-md-3 px-3 d-flex"
                    >
                        <span class="icon icon-van"></span>
                        <div class="alignLeft pl-2">
                            <strong class="headingV fwEbold d-block mb-1">Gratis Ongkir</strong>
                            <p class="m-0">Seluruh Indonesia</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                    <!-- contactListColumn -->
                    <div
                        class="contactListColumn border bg-lightGray overflow-hidden py-xl-5 py-md-3 py-2 px-xl-6 px-md-3 px-3 d-flex"
                    >
                        <span class="icon icon-gift"></span>
                        <div class="alignLeft pl-2">
                            <strong class="headingV fwEbold d-block mb-1">Kirim Hadiah</strong>
                            <p class="m-0">Untuk Keluarga</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                    <!-- contactListColumn -->
                    <div
                        class="contactListColumn border bg-lightGray overflow-hidden py-xl-5 py-md-3 py-2 px-xl-4 px-md-2 px-3 d-flex"
                    >
                        <span class="icon icon-recycle"></span>
                        <div class="alignLeft pl-2">
                            <strong class="headingV fwEbold d-block mb-1">Pengembalian</strong>
                            <p class="m-0">Bebas dalam 3 hari</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                    <!-- contactListColumn -->
                    <div
                        class="contactListColumn border bg-lightGray overflow-hidden py-xl-5 py-md-3 py-2 px-xl-6 px-md-3 px-3 d-flex"
                    >
                        <span class="icon icon-call"></span>
                        <div class="alignLeft pl-2">
                            <strong class="headingV fwEbold d-block mb-1">Support 24 / 7</strong>
                            <p class="m-0">Customer support</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- chooseUs-sec -->
        <section
            class="chooseUs-sec container pt-xl-22 pt-lg-20 pt-md-16 pt-10 pb-xl-12 pb-md-7 pb-2"
        >
            <div class="row">
                <div class="col-12 col-lg-6 mb-lg-0 mb-4">
                    <img
                        src="\public\assets\images\banner\happy-multiracial-farmers-working-inside-greenhous-2023-11-27-04-50-09-utc.webp"
                        alt="image description"
                        class="img-fluid"
                    />
                </div>
                <div class="col-12 col-lg-6 pr-4">
                    <h2 class="headingII fwEbold playfair position-relative mb-6 pb-5">
                        Kenapa Kami ?
                    </h2>
                    <p class="mb-xl-14 mb-lg-10">
                        Panensia adalah penyuplai terbaik untuk kebutuhan rempah-rempah dan bumbu
                        masak yang diproduksi sendiri, memberikan aroma dan rasa terbaik untuk
                        masakan Anda. ...
                        <RouterLink to="/tentangKami" class="btnMore"><i>Learn More</i></RouterLink>
                    </p>
                    <!-- chooseList -->
                    <ul class="list-unstyled chooseList">
                        <li class="d-flex justify-content-start mb-xl-7 mb-lg-5 mb-3">
                            <span class="icon icon-plant"></span>
                            <div class="alignLeft d-flex justify-content-start flex-wrap">
                                <h3 class="headingIII fwEbold mb-2">Hand Planted</h3>
                                <p>
                                    There are many variations of passages of lorem ipsum available,
                                    but the majority have suffered alteration in some form.
                                </p>
                            </div>
                        </li>
                        <li class="d-flex justify-content-start mb-xl-6 mb-lg-5 mb-4">
                            <span class="icon icon-ic-plant"></span>
                            <div class="alignLeft d-flex justify-content-start flex-wrap">
                                <h3 class="headingIII fwEbold mb-2">Natural Sunlight</h3>
                                <p>
                                    It is a long established fact that a reader will be distracted
                                    by the reable content of a page.
                                </p>
                            </div>
                        </li>
                        <li class="d-flex justify-content-start">
                            <span class="icon icon-desert"></span>
                            <div class="alignLeft d-flex justify-content-start flex-wrap">
                                <h3 class="headingIII fwEbold mb-2">Clean Air</h3>
                                <p>
                                    There are many variations of passages of lorem ipsum available,
                                    but the majority have suffered.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- productOfferSec -->
        <div class="productOfferSec container overflow-hidden py-xl-12 py-lg-10 py-md-8 py-5">
            <header class="col-12 mainHeader mb-7 text-center">
                <h1 class="headingIV playfair fwEblod mb-5">Panensia New Product</h1>
            </header>
            <div class="row">
                <div class="col-12 col-sm-4 mb-sm-0 mb-2">
                    <RouterLink to="/produk" class="w-100">
                        <img
                            src="/public/assets/images/banner/chili-pepper-spices-2023-11-27-05-01-26-utc.webp"
                            alt="image description"
                            class="img-fluid"
                            style="width: 500px"
                        />
                    </RouterLink>
                </div>
                <div class="col-12 col-sm-4">
                    <RouterLink to="/produk" class="w-100">
                        <img
                            src="/public/assets/images/banner/chili-pepper-spices-2023-11-27-05-01-26-utc.webp"
                            alt="image description"
                            class="img-fluid"
                            style="width: 500px"
                        />
                    </RouterLink>
                </div>
                <div class="col-12 col-sm-4">
                    <RouterLink to="/produk" class="w-100">
                        <img
                            src="/public/assets/images/banner/chili-pepper-spices-2023-11-27-05-01-26-utc.webp"
                            alt="image description"
                            class="img-fluid"
                            style="width: 500px"
                        />
                    </RouterLink>
                </div>
            </div>
        </div>

        <!-- partnerSec -->

        <div class="container-fluid px-xl-20 px-lg-14 mt-5">
            <!-- subscribeSecBlock -->
            <section
                class="subscribeSecBlock bgCover col-12 pt-xl-24 pb-xl-12 pt-lg-20 pt-md-16 pt-10 pb-md-8 pb-5"
                style="
                    background-image: url(/public/assets/images/banner/chili-pepper-spices-2023-11-27-05-01-26-utc.webp);
                "
            >
                <header class="col-12 mainHeader mb-sm-9 mb-6 text-center">
                    <h1 class="headingIV playfair fwEblod mb-4 text-white">
                        Langganan Produk Kami
                    </h1>
                    <p class="mb-sm-6 mb-3 text-white">
                        Masukkan email mu untuk mendapatkan produk terbaru dari kami
                    </p>
                </header>
                <form class="emailForm1 mx-auto overflow-hidden d-flex flex-wrap">
                    <input
                        type="email"
                        class="form-control px-4 border-0"
                        placeholder="Enter your mail..."
                    />
                    <button type="submit" class="btn btnTheme btnShop fwEbold text-white py-3 px-4">
                        Shop Now <i class="fas fa-arrow-right ml-2"></i>
                    </button>
                </form>
            </section>
        </div>
        <!-- footerHolder -->
        <!-- <aside class="footerHolder container-fluid overflow-hidden px-xl-20 px-lg-14 pt-xl-12 pb-xl-8 pt-lg-12 pt-md-8 pt-10 pb-lg-8">
				<div class="d-flex flex-wrap flex-lg-nowrap">
					<div class="coll-1 pr-3 mb-sm-4 mb-3 mb-lg-0">
						<h3 class="headingVI fwEbold text-uppercase mb-7">Contact Us</h3>
						<ul class="list-unstyled footerContactList mb-3">
							<li class="mb-3 d-flex flex-nowrap"><span class="icon icon-place mr-3"></span> <address class="fwEbold m-0">Address: London Oxford Street, 012 United Kingdom.</address></li>
							<li class="mb-3 d-flex flex-nowrap"><span class="icon icon-phone mr-3"></span> <span class="leftAlign">Phone : <a href="javascript:void(0);">(+032) 3456 7890</a></span></li>
							<li class="email d-flex flex-nowrap"><span class="icon icon-email mr-2"></span> <span class="leftAlign">Email:  <a href="javascript:void(0);">Botanicalstore@gmail.com</a></span></li>
						</ul>
						<ul class="list-unstyled followSocailNetwork d-flex flex-nowrap">
							<li class="fwEbold mr-xl-11 mr-sm-6 mr-4">Follow  us:</li>
							<li class="mr-xl-6 mr-sm-4 mr-2"><a href="javascript:void(0);" class="fab fa-facebook-f"></a></li>
							<li class="mr-xl-6 mr-sm-4 mr-2"><a href="javascript:void(0);" class="fab fa-twitter"></a></li>
							<li class="mr-xl-6 mr-sm-4 mr-2"><a href="javascript:void(0);" class="fab fa-pinterest"></a></li>
							<li class="mr-2"><a href="javascript:void(0);" class="fab fa-google-plus-g"></a></li>
						</ul>
					</div>
					<div class="coll-2 mb-sm-4 mb-3 mb-lg-0">
						<h3 class="headingVI fwEbold text-uppercase mb-6">Information</h3>
						<ul class="list-unstyled footerNavList">
							<li class="mb-1"><a href="javascript:void(0);">New Products</a></li>
							<li class="mb-2"><a href="javascript:void(0);">Top Sellers</a></li>
							<li class="mb-2"><a href="javascript:void(0);">Our Blog</a></li>
							<li class="mb-2"><a href="javascript:void(0);">About Our Shop</a></li>
							<li><a href="javascript:void(0);">Privacy policy</a></li>
						</ul>
					</div>
					<div class="coll-3 mb-sm-4 mb-3 mb-lg-0">
						<h3 class="headingVI fwEbold text-uppercase mb-6">My Account</h3>
						<ul class="list-unstyled footerNavList">
							<li class="mb-1"><a href="javascript:void(0);">My account</a></li>
							<li class="mb-2"><a href="javascript:void(0);">Discount</a></li>
							<li class="mb-2"><a href="javascript:void(0);">Orders history</a></li>
							<li><a href="javascript:void(0);">Personal information</a></li>
						</ul>
					</div>
					<div class="coll-4 mb-sm-4 mb-3 mb-lg-0">
						<h3 class="headingVI fwEbold text-uppercase mb-7 pl-xl-14 pl-lg-10">Popular Tag</h3>
						<ul class="list-unstyled tagNavList d-flex flex-wrap justify-content-lg-end mb-0">
							<li class="text-center mb-2 mr-2"><a href="javascript:void(0);" class="md-round d-block py-2 px-2">Trend</a></li>
							<li class="text-center mb-2"><a href="javascript:void(0);" class="md-round d-block py-2 px-2">Decor</a></li>
							<li class="text-center mb-2 mr-2"><a href="javascript:void(0);" class="md-round d-block py-2 px-2">Plant</a></li>
							<li class="text-center mb-2"><a href="javascript:void(0);" class="md-round d-block py-2 px-2">Table tree</a></li>
							<li class="text-center mb-2 mr-2"><a href="javascript:void(0);" class="md-round d-block py-2 px-2">Bedroom tree</a></li>
							<li class="text-center mb-2"><a href="javascript:void(0);" class="md-round d-block py-2 px-2">Living room</a></li>
						</ul>
					</div>
				</div>
			</aside> -->
    </main>
</template>
