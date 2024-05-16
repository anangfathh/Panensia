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
                        <h1 class="headingIV fwEbold playfair mb-4 text-white">Kontak</h1>
                        <ul class="list-unstyled breadCrumbs d-flex justify-content-center">
                            <li class="mr-2">
                                <RouterLink to="/" class="text-white-50">Home /</RouterLink>
                            </li>
                            <li class="mr-2">
                                <RouterLink to="#" class="active text-white">Kontak</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <div class="contactSec container pt-xl-24 pb-xl-23 py-lg-20 pt-md-16 pb-md-10 pt-10 pb-0">
            <div class="row">
                <div class="col-12">
                    <ul class="list-unstyled contactListHolder mb-0 d-flex flex-wrap text-center">
                        <li class="mb-lg-0 mb-6">
                            <span class="icon d-block mx-auto bg-lightGray py-4 mb-4"
                                ><i class="fas fa-map-marker-alt"></i
                            ></span>
                            <strong class="title text-uppercase playfair mb-5 d-block"
                                >Alamat</strong
                            >
                            <address class="mb-0">
                                Jl. Kartika , Gulon RT 2 RW 21 Gang Awan No. 131<span
                                    class="d-block"
                                >
                                    Jebres, Surakarta 57126</span
                                >
                            </address>
                        </li>
                        <li class="mb-lg-0 mb-6">
                            <span class="icon d-block mx-auto bg-lightGray py-4 mb-3"
                                ><i class="fas fa-headphones"></i
                            ></span>
                            <strong class="title text-uppercase playfair mb-5 d-block"
                                >Whatsapp</strong
                            >
                            <a href="tel:84123456789" class="d-block">+62 857-2874-9413</a>
                        </li>
                        <li class="mb-lg-0 mb-6">
                            <span class="icon d-block mx-auto bg-lightGray py-5 mb-3"
                                ><i class="fas fa-envelope"></i
                            ></span>
                            <strong class="title text-uppercase playfair mb-5 d-block"
                                >Email</strong
                            >
                            <a href="#" class="d-block">panensiaofficial@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- mapHolder -->
        <div class="mapHolder">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.2117408190893!2d110.86086397476348!3d-7.5518754924618055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a171c9d0b2579%3A0x522ce6228633356a!2sJl.%20Kartika%2C%20Jebres%2C%20Kec.%20Jebres%2C%20Kota%20Surakarta%2C%20Jawa%20Tengah%2057126!5e0!3m2!1sen!2sid!4v1709624862988!5m2!1sen!2sid"
                style="border: 0"
                allowfullscreen=""
            >
            </iframe>
        </div>
        <section
            class="contactSecBlock container pt-xl-23 pb-xl-24 pt-lg-20 pb-lg-10 pt-md-16 pb-md-8 py-10"
        >
            <div class="row">
                <header class="col-12 mainHeader mb-10 text-center">
                    <h1 class="headingIV playfair fwEblod mb-7">Kritik dan Saran</h1>
                    <p>
                        Berikan masukan anda untuk kemajuan Panensia<br class="d-block" />
                        Masukan anda sangat berarti.
                    </p>
                </header>
            </div>
            <div class="row">
                <div class="col-12">
                    <form @submit.prevent="saveContact" class="contactForm">
                        <div class="d-flex flex-wrap row1 mb-md-1">
                            <div class="form-group coll mb-5">
                                <select
                                    v-model="contactForm.type"
                                    required
                                    name=""
                                    class="form-control"
                                >
                                    <option value="0">-- Pilih Masukan --</option>
                                    <option value="saran">Saran</option>
                                    <option value="kritik">Kritik</option>
                                </select>
                            </div>
                            <div class="form-group coll mb-5">
                                <input
                                    v-model="contactForm.name"
                                    required
                                    type="text"
                                    id="name"
                                    class="form-control"
                                    name="name"
                                    placeholder="Nama *"
                                />
                            </div>
                            <div class="form-group coll mb-5">
                                <input
                                    v-model="contactForm.email"
                                    required
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    name="Email"
                                    placeholder="Email  *"
                                />
                            </div>
                        </div>
                        <div class="form-group w-100 mb-6">
                            <textarea
                                v-model="contactForm.message"
                                required
                                class="form-control"
                                placeholder="Pesan"
                            ></textarea>
                        </div>
                        <div class="text-center">
                            <button
                                type="submit"
                                class="btn btnTheme btnShop md-round fwEbold text-white py-3 px-4 py-md-3 px-md-4"
                            >
                                Kirim Pesan
                            </button>
                        </div>
                        <div v-if="successMessage" class="success-message">
                            {{ successMessage }}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            contactForm: {
                name: '',
                email: '',
                type: 'kritik',
                message: ''
            },
            successMessage: ''
        }
    },
    methods: {
        async saveContact() {
            try {
                const csrfToken = document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute('content')
                const response = await fetch('/api/contacts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken
                    },
                    body: JSON.stringify(this.contactForm)
                })

                if (response.ok) {
                    // Redirect or perform any other action after successful contact creation
                    this.$router.push({ name: 'contacts.create' })
                    this.successMessage = 'Pesan Anda berhasil dikirim!'
                    this.contactForm = {
                        name: '',
                        email: '',
                        type: 'kritik',
                        message: ''
                    }
                } else {
                    console.error('Failed to create contact:', response.statusText)
                }
            } catch (error) {
                console.error('Error creating contact:', error)
            }
        }
    }
}
</script>
