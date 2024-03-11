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
                        <strong class="d-block">Panensia.id</strong>
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

        <section
            class="counterSec container pt-xl-12 pb-xl-24 pt-lg-10 pb-lg-20 pt-md-8 pb-md-16 pt-5 pb-10"
        >
            <div class="row">
                <div class="col-12">
                    <!-- progressCounter -->
                    <ul
                        class="progressCounter list-unstyled mb-2 d-flex flex-wrap text-capitalize text-center"
                    >
                        <li class="mb-md-0 mb-3">
                            <strong class="d-block fwEbold counter mb-2">229</strong>
                            <strong class="d-block text-uppercase txtWrap">Happy Clients</strong>
                        </li>
                        <li class="mb-md-0 mb-3">
                            <strong class="d-block fwEbold counter mb-2">109</strong>
                            <strong class="d-block text-uppercase txtWrap"
                                >completed project</strong
                            >
                        </li>
                        <li class="mb-md-0 mb-3">
                            <strong class="d-block fwEbold counter mb-2">22</strong>
                            <strong class="d-block text-uppercase txtWrap">awesome staff</strong>
                        </li>
                        <li class="mb-md-0 mb-3">
                            <strong class="d-block fwEbold counter mb-2">11</strong>
                            <strong class="d-block text-uppercase txtWrap">winning awards</strong>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section
            class="introSec pt-xl-12 pb-xl-7 pt-10 pb-10"
            style="background-image: linear-gradient(to bottom right, #5ba515, #cbf3a5, #ffff)"
        >
            <header class="col-12 mainHeader mb-3 text-center">
                <h1 class="headingIV playfair fwEblod mb-4 text-black">Cerita Kami</h1>
                <!-- <span class="headerBorder d-block mb-5"><img src="" alt="Header Border" class="img-fluid img-bdr"></span> -->
            </header>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6 mb-lg-0 mb-6">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/x7PZ9hQ79xQ"
                            frameborder="0"
                            allowfullscreen
                            class="frame-fluid rounded"
                        ></iframe>
                    </div>
                    <div class="col-10 col-lg-6">
                        <div id="accordion" class="accordionList pt-lg-12">
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
                                            To succeed you must believe. When you believe, you will
                                            succeed. Surround yourself with angels, positive energy,
                                            beautiful people, beautiful souls, clean heart, angel.
                                            Let me be clear, you have to make it through the jungle
                                            to make it to paradise, that’s the key, Lion! Lion!
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
                                            To succeed you must believe. When you believe, you will
                                            succeed. Surround yourself with angels, positive energy,
                                            beautiful people, beautiful souls, clean heart, angel.
                                            Let me be clear, you have to make it through the jungle
                                            to make it to paradise, that’s the key, Lion! Lion!
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
                                            To succeed you must believe. When you believe, you will
                                            succeed. Surround yourself with angels, positive energy,
                                            beautiful people, beautiful souls, clean heart, angel.
                                            Let me be clear, you have to make it through the jungle
                                            to make it to paradise, that’s the key, Lion! Lion!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-2">
                                <div class="card-header px-xl-5 py-xl-3" id="headingFour">
                                    <h5 class="mb-0">
                                        <button
                                            class="btn btn-link fwEbold text-uppercase text-left w-100 collapsed p-0"
                                            data-toggle="collapse"
                                            data-target="#collapseFour"
                                            aria-expanded="false"
                                            aria-controls="collapseFour"
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
                                            To succeed you must believe. When you believe, you will
                                            succeed. Surround yourself with angels, positive energy,
                                            beautiful people, beautiful souls, clean heart, angel.
                                            Let me be clear, you have to make it through the jungle
                                            to make it to paradise, that’s the key, Lion! Lion!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section
            class="processStepSec container pt-xl-23 pb-xl-10 pt-lg-20 pb-lg-10 pt-md-16 pb-md-8 pt-10 pb-0"
        >
            <div class="row">
                <header class="col-12 mainHeader mb-3 text-center">
                    <h1 class="headingIV playfair fwEblod mb-4">Delivery Process</h1>
                    <!-- <span class="headerBorder d-block mb-5"><img src="--------" alt="Header Border" class="img-fluid img-bdr"></span> -->
                </header>
            </div>
            <div class="row">
                <div class="col-12 pl-xl-23 mb-lg-3 mb-10">
                    <div class="stepCol position-relative bg-lightGray py-6 px-6">
                        <!-- <i class="fas fa-search fa-3x text-primary mb-4 d-block mx-auto"></i> -->
                        <strong
                            class="mainTitle text-uppercase mt-n8 mb-5 d-block text-center py-1 px-3"
                            >Step 01</strong
                        >
                        <h2 class="headingV fwEblod text-uppercase mb-3">Search the Product</h2>
                        <p class="mb-5">
                            Explore our wide range of products and find what you need.
                        </p>
                    </div>
                </div>
                <div class="step-arrow"></div>
                <!-- Step 01 to Step 02 arrow -->
                <div class="col-12 pr-xl-23 mb-lg-3 mb-10">
                    <div
                        class="stepCol rightArrow position-relative bg-lightGray py-6 px-6 float-right"
                    >
                        <!-- <i class="fas fa-file-alt fa-3x text-primary mb-4 d-block mx-auto"></i> -->
                        <strong
                            class="mainTitle text-uppercase mt-n8 mb-5 d-block text-center py-1 px-3"
                            >Step 02</strong
                        >
                        <h2 class="headingV fwEblod text-uppercase mb-3">
                            Read Product Descriptions
                        </h2>
                        <p class="mb-5">
                            Learn more about the products by reading their descriptions and
                            specifications.
                        </p>
                    </div>
                </div>
                <div class="step-arrow"></div>
                <!-- Step 02 to Step 03 arrow -->
                <div class="col-12 pl-xl-23 mb-lg-3 mb-10">
                    <div class="stepCol position-relative bg-lightGray py-6 px-6">
                        <!-- <i class="fas fa-shopping-cart fa-3x text-primary mb-4 d-block mx-auto"></i> -->
                        <strong
                            class="mainTitle text-uppercase mt-n8 mb-5 d-block text-center py-1 px-3"
                            >Step 03</strong
                        >
                        <h2 class="headingV fwEblod text-uppercase mb-3">
                            Click the "Buy" Link to Proceed to Purchase
                        </h2>
                        <p class="mb-5">
                            When you're ready to make a purchase, simply click the "Buy" link to go
                            to the site where you can buy the product.
                        </p>
                    </div>
                </div>
                <div class="step-arrow"></div>
                <!-- Step 03 to Step 04 arrow -->
                <div class="col-12 pr-xl-23 mb-lg-3 mb-10">
                    <div
                        class="stepCol rightArrow position-relative bg-lightGray py-6 px-6 float-right"
                    >
                        <!-- <i class="fas fa-check-circle fa-3x text-primary mb-4 d-block mx-auto"></i> -->
                        <strong
                            class="mainTitle text-uppercase mt-n8 mb-5 d-block text-center py-1 px-3"
                            >Step 04</strong
                        >
                        <h2 class="headingV fwEblod text-uppercase mb-3">Complete Your Purchase</h2>
                        <p class="mb-5">
                            After clicking the link, you'll be directed to the site where you can
                            finalize your purchase and proceed with the checkout process.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
