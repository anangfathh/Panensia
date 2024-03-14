<template>
    <div>
        <aside class="footerHolder overflow-hidden bg-lightGray pt-xl-23 pb-xl-8 pt-lg-10 pb-lg-8 pt-md-12 pb-md-8 pt-10">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-6 col-lg-4 mb-lg-0 mb-4">
                        <h3 class="headingVI fwEbold text-uppercase mb-7">Contact Us</h3>
                        <ul class="list-unstyled footerContactList mb-3">
                            <li class="mb-3 d-flex flex-nowrap pr-xl-20 pr-0"><span class="icon icon-place mr-3"></span> <address class="fwEbold m-0">Jl. Kartika , Gulon RT 2 RW 21 Gang Awan No. 131 Jebres, Surakarta 57126</address></li>
                            <li class="mb-3 d-flex flex-nowrap"><span class="icon icon-phone mr-3"></span> <span class="leftAlign">WA : <a href="javascript:void(0);">0857-2874-9413</a></span></li>
                            <li class="email d-flex flex-nowrap"><span class="icon icon-email mr-2"></span> <span class="leftAlign">Email:  <a href="javascript:void(0);">panensiaofficial@gmail.com</a></span></li>
                        </ul>
                        <!-- <ul class="list-unstyled followSocailNetwork d-flex flex-nowrap">
                            <li class="fwEbold mr-xl-11 mr-md-8 mr-3">Follow  us:</li>
                            <li class="mr-xl-6 mr-md-5 mr-2"><a href="javascript:void(0);" class="fab fa-facebook-f"></a></li>
                            <li class="mr-xl-6 mr-md-5 mr-2"><a href="javascript:void(0);" class="fab fa-twitter"></a></li>
                            <li class="mr-xl-6 mr-md-5 mr-2"><a href="javascript:void(0);" class="fab fa-pinterest"></a></li>
                            <li class="mr-2"><a href="javascript:void(0);" class="fab fa-google-plus-g"></a></li>
                        </ul> -->
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 pl-xl-14 mb-lg-0 mb-4">
                        <h3 class="headingVI fwEbold text-uppercase mb-6">Informasi</h3>
                        <ul class="list-unstyled footerNavList">
                            <li class="mb-1"><RouterLink to="/tentangkami" class="d-block" >Tentang Kami</RouterLink></li>
                            <li class="mb-1"><RouterLink to="/produk" class="d-block" >Produk</RouterLink></li>
                            <li class="mb-1"><RouterLink to="/berita" class="d-block" >Berita</RouterLink></li>
                            <li class="mb-1"><RouterLink to="/kontak" class="d-block" >Kontak</RouterLink></li>
                            <li><a href="javascript:void(0);">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3 pl-xl-14 mb-lg-0 mb-4">
                        <h3 class="headingVI fwEbold text-uppercase mb-6">Maps</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2117408190893!2d110.86086397476348!3d-7.5518754924618055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a171c9d0b2579%3A0x522ce6228633356a!2sJl.%20Kartika%2C%20Jebres%2C%20Kec.%20Jebres%2C%20Kota%20Surakarta%2C%20Jawa%20Tengah%2057126!5e0!3m2!1sen!2sid!4v1709624862988!5m2!1sen!2sid" style="border:0;" allowfullscreen="">
                        </iframe>
                    </div>
                </div>
            </div>
        </aside>
        <footer id="footer" class="container-fluid overflow-hidden px-lg-20">
            <div class="copyRightHolder text-center pt-lg-5 pb-lg-4 py-3">
                <p class="mb-0">Coppyright © {{ new Date().getFullYear() }} <a href="javascript:void(0);">Panensia</a> - All right reserved</p>
            </div>
        </footer>
    </div>
</template>
