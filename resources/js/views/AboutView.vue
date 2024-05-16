<template>
    <main>
        <!-- introBannerHolder -->
        <section
            class="introBannerHolder d-flex w-100 bgCover"
            style="
                background-image: url(/assets/images/banner/chili-pepper-spices-2023-11-27-05-01-26-utc.webp);
            "
        >
            <div class="container">
                <div class="row">
                    <div class="col-12 pt-lg-23 pt-md-15 pt-sm-10 pt-6 text-center">
                        <h1 class="headingIV fwEbold playfair mb-4 text-white">Tentang Kami</h1>
                        <ul class="list-unstyled breadCrumbs d-flex justify-content-center">
                            <li class="mr-2">
                                <RouterLink to="/" class="text-white-50">Home /</RouterLink>
                            </li>
                            <li class="mr-2">
                                <RouterLink to="#" class="active text-white"
                                    >Tentang Kami</RouterLink
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section
            class="abtSecHolder container pt-xl-24 pb-xl-12 pt-lg-20 pb-lg-10 pt-md-16 pb-md-8 pt-10 pb-5"
        >
            <div class="row">
                <div class="col-12 col-lg-6 pt-xl-12 pt-lg-8">
                    <h2 class="playfair fwEbold position-relative mb-7 pb-5">
                        <strong class="d-block" style="color: #114232">Panensia.id</strong>
                        <strong class="d-block">Rempah Indonesia</strong>
                    </h2>
                    <p class="pr-xl-16 pr-lg-10 mb-lg-0 mb-6">
                        Panensia adalah penyedia utama rempah-rempah dan bumbu yang diproduksi
                        secara mandiri, memberikan aroma dan rasa terbaik untuk masakan Anda. Kami
                        menyediakan layanan Rantai Pasokan untuk kebutuhan industri F&B, hotel,
                        restoran, layanan katering, perusahaan kosmetik, dan bisnis lainnya.
                    </p>
                </div>
                <div class="col-12 col-lg-6">
                    <img
                        src="https://i.pinimg.com/564x/6f/d3/69/6fd369059e7bbc79570592fab3041cfc.jpg"
                        alt="image description"
                        class="img-fluid"
                    />
                </div>
            </div>
        </section>

        <!-- <section class="counterSec container pt-xl-12 pb-xl-24 pt-lg-10 pb-lg-20 pt-md-8 pb-md-16 pt-5 pb-10">
            <div class="row">
                <div class="col-12">
                   
                    <ul class="progressCounter list-unstyled mb-2 d-flex flex-wrap text-capitalize text-center">
                        <li class="mb-md-0 mb-3">
                            <strong class="d-block fwEbold counter mb-2">229</strong>
                            <strong class="d-block text-uppercase txtWrap">Happy Clients</strong>
                        </li>
                        <li class="mb-md-0 mb-3">
                            <strong class="d-block fwEbold counter mb-2">109</strong>
                            <strong class="d-block text-uppercase txtWrap">Products</strong>
                        </li>
                        <li class="mb-md-0 mb-3">
                            <strong class="d-block fwEbold counter mb-2">22</strong>
                            <strong class="d-block text-uppercase txtWrap">Awesome Resellers</strong>
                        </li>
                        <li class="mb-md-0 mb-3">
                            <strong class="d-block fwEbold counter mb-2">11</strong>
                            <strong class="d-block text-uppercase txtWrap"></strong>
                        </li>
                    </ul>
                </div>
            </div>
        </section> -->

        <!-- style="background-image:linear-gradient(#416D19, #FFF67E,#FFF67E);" -->
        <section class="introSec pt-xl-12 pb-xl-7 pt-10 pb-10">
            <header class="col-12 mainHeader mb-3 text-center">
                <h1 class="headingIV playfair fwEblod mb-10 text-black">Cerita Kami</h1>
            </header>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6 mb-lg-0 mb-6">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe
                                class="embed-responsive-item frame-fluid rounded"
                                src="https://www.youtube.com/embed/x7PZ9hQ79xQ"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                    <div class="col-10 col-lg-6">
                        <div id="accordion" class="accordionList pt-lg-12">
                            <!-- Add colorful and interactive styles to each card -->
                            <div class="card mb-2">
                                <div class="card-header px-xl-5 py-xl-3" id="headingOne">
                                    <h5 class="mb-0">
                                        <button
                                            class="btn btn-link fwEbold text-uppercase text-left w-100 p-0"
                                            data-toggle="collapse"
                                            data-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                            style="color: #114232"
                                        >
                                            connecting people
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
                                            Untuk menghubungkan Produsen, Distributor, dan Konsumen
                                            dalam hal hasil pertanian sehingga semua dapat merasakan
                                            kemanfaatan alam Indonesia ini, kita perlu membangun
                                            jaringan yang kuat dan berkesinambungan. Kerjasama
                                            antara produsen, distributor, dan konsumen perlu
                                            didorong dengan transparansi, integritas, dan saling
                                            pengertian. Dengan demikian, tidak hanya para produsen
                                            yang mendapatkan manfaat dari hasil pertanian, tetapi
                                            juga distributor dan konsumen dapat merasakan
                                            keberhasilan dan kualitas produk yang berasal dari alam
                                            Indonesia yang kaya ini. Semoga kerjasama ini membawa
                                            kemakmuran bagi semua pihak yang terlibat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Add colorful and interactive styles to each card -->
                            <div class="card mb-2" style="background-color: #f8f9fa">
                                <div class="card-header px-xl-5 py-xl-3" id="headingTwo">
                                    <h5 class="mb-0">
                                        <button
                                            class="btn btn-link fwEbold text-uppercase text-left w-100 collapsed p-0"
                                            data-toggle="collapse"
                                            data-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                            style="color: #114232"
                                        >
                                            we build your dream
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
                                            Dengan kehadiran Panensia ini, diharapkan impian untuk
                                            memajukan pertanian dan perkebunan rempah Indonesia
                                            semakin berkembang. Semua lapisan masyarakat diharapkan
                                            mampu menikmati rempah Indonesia yang berkualitas,
                                            berasal dari berbagai daerah di Indonesia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Add colorful and interactive styles to each card -->
                            <div class="card mb-2" style="background-color: #f8f9fa">
                                <div class="card-header px-xl-5 py-xl-3" id="headingThree">
                                    <h5 class="mb-0">
                                        <button
                                            class="btn btn-link fwEbold text-uppercase text-left w-100 collapsed p-0"
                                            data-toggle="collapse"
                                            data-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                            style="color: #114232"
                                        >
                                            nothing to fear
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
                                            Panensia hadir sebagai sumber informasi terpercaya
                                            mengenai penjualan rempah-rempah Indonesia. Dengan
                                            demikian, konsumen yang ingin membeli rempah-rempah
                                            dapat dengan mudah menemukannya di situs web ini dan
                                            akan diarahkan ke platform penjualan pihak ketiga yang
                                            terpercaya. Hal ini memastikan bahwa rempah yang dibeli
                                            adalah rempah berkualitas tinggi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <!-- Add colorful and interactive styles to each card -->
                            <div class="card mb-2" style="background-color: #f8f9fa">
                                <div class="card-header px-xl-5 py-xl-3" id="headingFour">
                                    <h5 class="mb-0">
                                        <button
                                            class="btn btn-link fwEbold text-uppercase text-left w-100 collapsed p-0"
                                            data-toggle="collapse"
                                            data-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
                                            style="color: #114232"
                                        >
                                            make the world better
                                            <i class="fas fa-sort-down float-right"></i>
                                        </button>
                                    </h5>
                                </div>
                                <div
                                    id="collapseFour"
                                    class="collapse"
                                    aria-labelledby="headingFour"
                                    data-parent="#accordion"
                                >
                                    <div class="card-body px-xl-5 py-0">
                                        <p class="mb-7">
                                            Panensia hadir untuk menciptakan jembatan yang
                                            menghubungkan antara konsumen dan penjual, memudahkan
                                            konsumen dalam mencari rempah-rempah Indonesia yang
                                            berkualitas. Dengan demikian, rempah-rempah Indonesia
                                            dapat memberikan kontribusi dalam membuat dunia menjadi
                                            lebih baik.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- style="background-image: linear-gradient(to top, rgba(91, 165, 21, 0.5), rgba(203, 243, 165, 0.5), rgba(255, 255, 255, 0.5), rgba(91, 165, 21, 0.5))  style="background-image:linear-gradient( #707070,#1E5128,#4E9F3D,#D8E9A8);-->
        <!-- <section class="processStepSec container pt-xl-23 pb-xl-10 pt-lg-20 pb-lg-10 pt-md-16 pb-md-8 pt-10 pb-0" style="background-image:linear-gradient(#416D19, #FFF67E,#FFF67E);"> -->
        <section class="introSec pt-xl-12 pb-xl-7 pt-10 pb-10">
            <div class="row">
                <header class="col-12 mainHeader mb-3 text-center">
                    <h1 class="headingIV playfair fwEblod mb-4">Delivery Process</h1>
                    <br />
                    <br />
                    <!-- <span class="headerBorder d-block mb-5"><img src="--------" alt="Header Border" class="img-fluid img-bdr"></span> -->
                </header>
            </div>

            <div class="row">
                <div class="col-14 pl-xl-10 mb-lg-3 mb-10">
                    <!-- step 1 -->
                    <div class="card mb-3" style="width: 540px">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img
                                    src="https://i.pinimg.com/564x/ef/a4/bb/efa4bb17dc9b43142373419d50e0e3c1.jpg"
                                    class="img-fluid rounded-start"
                                    alt="Product Image"
                                />
                            </div>
                            <div class="stepCol col-md-8">
                                <div class="card-body">
                                    <strong
                                        class="mainTitle text-uppercase mt-n7 mb-5 d-block text-center py-1 px-3"
                                        >Step 01</strong
                                    >
                                    <h2 class="headingV fw-bold text-uppercase">
                                        Search for the Product
                                    </h2>
                                    <p class="">
                                        Jelajahi beragam produk kami dan temukan apa yang Anda
                                        butuhkan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- batas -->

                <!-- step 2 -->
                <div class="col-14 pl-xl-33 mb-lg-3 mb-10 mt-4">
                    <div class="col-14 pl-xl-33 mb-lg-3 mb-10">
                        <div class="pl-xl-23 mb-lg-3 mb-10">
                            <div class="pl-xl-33 mb-lg-3 mb-10">
                                <div class="card mb-3" style="max-width: 540px">
                                    <div class="row g-0">
                                        <div class="stepCol col-md-8">
                                            <div class="card-body">
                                                <strong
                                                    class="mainTitle text-uppercase mt-n7 mb-5 d-block text-center py-1 px-3 ml-xl-33"
                                                    >Step 02</strong
                                                >

                                                <h5
                                                    class="card-title headingV fw-bold text-uppercase"
                                                >
                                                    READ PRODUCT DESCRIPTIONS
                                                </h5>
                                                <p class="card-text">
                                                    Tingkatkan pengetahuan Anda tentang produk kami
                                                    dengan membaca deskripsi dan spesifikasinya.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <img
                                                src="https://i.pinimg.com/564x/d6/09/98/d609980a95df881d6b4c054ab95d0394.jpg"
                                                class="img-fluid rounded-start"
                                                alt="..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--  -->

                <!-- step 03  -->
                <div class="col-14 pl-xl-10 mb-lg-3 mb-10 mt-3">
                    <!-- step 1 -->
                    <div class="card mb-3" style="width: 540px">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img
                                    src="https://i.pinimg.com/564x/9b/fb/7a/9bfb7ac99c269580ea9bdcdfd6382529.jpg"
                                    class="img-fluid rounded-start"
                                    alt="Product Image"
                                />
                            </div>
                            <div class="stepCol col-md-8">
                                <div class="card-body">
                                    <strong
                                        class="mainTitle text-uppercase mt-n7 mb-5 d-block text-center py-1 px-3"
                                        >Step 03</strong
                                    >
                                    <h2 class="headingV fw-bold text-uppercase">
                                        CLICK THE PLATFORM LINK TO PROCEED BUYER
                                    </h2>
                                    <p class="">
                                        Ketika Anda siap untuk melakukan pembelian, cukup klik salah
                                        satu platform yang telah disediakan untuk menuju situs
                                        tempat Anda dapat membeli produk tersebut.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- batas -->

                <!-- step 04 -->
                <div class="col-14 pl-xl-33 mb-lg-3 mb-10 mt-4">
                    <div class="col-14 pl-xl-33 mb-lg-3 mb-10">
                        <div class="pl-xl-23 mb-lg-3 mb-10">
                            <div class="pl-xl-33 mb-lg-3 mb-10">
                                <div class="card mb-3" style="max-width: 540px">
                                    <div class="row g-0">
                                        <div class="stepCol col-md-8">
                                            <div class="card-body">
                                                <strong
                                                    class="mainTitle text-uppercase mt-n7 mb-5 d-block text-center py-1 px-3 ml-xl-33"
                                                    >Step 04</strong
                                                >

                                                <h5
                                                    class="card-title headingV fw-bold text-uppercase"
                                                >
                                                    COMPLETE YOUR PURCHASE
                                                </h5>
                                                <p class="card-text">
                                                    Setelah menuju platform tersebut, Anda dapat
                                                    menyelesaikan pembelian dan melanjutkan proses
                                                    checkout.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <img
                                                src="https://i.pinimg.com/564x/90/ca/a7/90caa7b281202b550466b6f5ab5cd4a3.jpg"
                                                class="img-fluid rounded-start"
                                                alt="..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- batas -->
            </div>
        </section>

        <section
            class="counterSec container pt-xl-12 pb-xl-24 pt-lg-10 pb-lg-20 pt-md-8 pb-md-16 pt-5 pb-10"
        >
            <div class="row">
                <header class="col-12 mainHeader mb-3 text-center">
                    <h1 class="headingIV playfair fwEblod mb-4">Tersedia di</h1>
                    <br />
                    <!-- <span class="headerBorder d-block mb-5"><img src="--------" alt="Header Border" class="img-fluid img-bdr"></span> -->
                </header>
            </div>
            <p style="color: #1e5128">
                Official Store
                ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <div class="row">
                <div class="col-12">
                    <!-- progressCounter -->
                    <ul
                        class="progressCounter list-unstyled mb-2 d-flex flex-wrap text-capitalize text-center"
                    >
                        <li class="mb-md-0 mb-3">
                            <img
                                class="d-block fwEbold counter mb-2"
                                src="https://i.pinimg.com/564x/dc/2a/3a/dc2a3a80a0160ce49905602cee5e6602.jpg"
                                alt=""
                                srcset=""
                                style="width: 220px; height: 110px"
                            />
                        </li>
                        <li class="mb-md-0 mb-3">
                            <img
                                class="d-block fwEbold counter mb-2"
                                src="https://i.pinimg.com/564x/40/4c/b1/404cb151103a5ee10ee2113cca251f17.jpg"
                                alt=""
                                srcset=""
                                style="width: 200px; height: 100px"
                            />
                        </li>
                        <li class="mb-md-0 mb-3">
                            <img
                                class="d-block fwEbold counter mb-2"
                                src="https://i.pinimg.com/564x/fd/3c/d3/fd3cd3a32280c710377e07b076fc43a2.jpg"
                                alt=""
                                srcset=""
                                style="width: 200px; height: 100px"
                            />
                        </li>
                        <li class="mb-md-0 mb-3">
                            <img
                                class="d-block fwEbold counter mb-2"
                                src="https://i.pinimg.com/564x/f7/60/16/f760162c99d81ac7bd0e7462ace7da8f.jpg"
                                alt=""
                                srcset=""
                                style="width: 190px; height: 85px"
                            />
                        </li>
                    </ul>
                </div>
            </div>

            <p style="color: #1e5128">
                Bersertifikasi
                ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
            </p>
            <div class="row">
                <div class="col-12">
                    <!-- Sertifikasi -->
                    <ul
                        class="progressCounter list-unstyled mb-2 d-flex flex-wrap text-capitalize text-center"
                    >
                        <li class="mb-md-0 mb-3">
                            <img
                                class="d-block fwEbold counter mb-2"
                                src="https://i.pinimg.com/564x/04/db/d3/04dbd359163fef4125a2169d1845b0c5.jpg"
                                alt=""
                                srcset=""
                                style="width: 170px; height: 120px"
                            />
                        </li>
                        <li class="mb-md-0 mb-3">
                            <img
                                class="d-block fwEbold counter mb-2"
                                src="https://www.besha-analitika.co.id/assets/image/clients/client_pom.png"
                                alt=""
                                srcset=""
                                style="width: 200px; height: 100px"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>
