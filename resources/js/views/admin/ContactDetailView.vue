<script>
export default {
    data() {
        return {
            contact: null
        }
    },
    mounted() {
        // Fetch Contact details from API
        this.fetchContact()
    },
    methods: {
        async fetchContact() {
            try {
                const response = await fetch(`/api/contacts/${this.$route.params.id}`)
                const data = await response.json()
                this.contact = data
            } catch (error) {
                console.error('Error fetching contact details:', error)
            }
        }
    }
}
</script>

<template>
    <!-- <main>
        <div>
        <h2>Contact Detail</h2>
    
        <div v-if="contact">
            <strong>Type:</strong> {{ contact.type }}<br>
            <strong>Name:</strong> {{ contact.name }}<br>
            <strong>Email:</strong> {{ contact.email }}<br>
            <strong>Message:</strong> {{ contact.message }}
        </div>
        </div>
    </main> -->

    <div class="mdk-drawer-layout__content page">
        <div class="app-chat-container">
            <div class="row h-100 m-0">
                <div
                    v-if="contact"
                    class="col-lg-12 py-3 px-4 bg-white border-left d-flex flex-column"
                >
                    <div class="flex d-flex flex-column">
                        <div data-simplebar class="h-100">
                            <div class="d-flex align-items-center mb-3">
                                <a href="#" class="avatar avatar-sm mr-3">
                                    <img
                                        :src="`/assets/images/avatar/default.jpg`"
                                        alt="Avatar"
                                        class="avatar-img rounded-circle"
                                    />
                                </a>
                                <div class="flex">
                                    <p class="m-0">
                                        <span class="d-flex align-items-center">
                                            <a href="#" class="text-dark-gray"
                                                ><strong>{{ contact.name }}</strong></a
                                            >
                                            <small class="ml-auto text-muted">Today</small>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <!-- <div class="d-flex align-items-center">
                            <h1 class="h4 flex">Pesan {{ contact.type }}</h1>
                            <div class="d-flex align-items-center">
                                <a href="" class="text-dark-gray">
                                    <i class="material-icons">reply</i>
                                </a>
                                <a href="" class="text-dark-gray ml-2">
                                    <i class="material-icons">print</i>
                                </a>
                            </div>
                        </div> -->
                            <div class="d-flex align-items-center">
                                <div class="flex mr-3">
                                    <p>
                                        Dear Panensia,<br /><br />Ini Adalah Pesan
                                        {{ contact.type }} dari {{ contact.name }} yang berisi :<br /><br />
                                    </p>
                                    <blockquote class="border-left-3 pl-3">
                                        <p class="text-dark-gray">{{ contact.message }}</p>
                                    </blockquote>
                                    <p><br /><br />Kind regards,<br />{{ contact.email }}</p>
                                </div>
                                <!-- <div class="text-center ml-3">
                                <a href="" class="d-flex flex-column mb-3">
                                    <i class="material-icons">star</i>
                                    <small class="text-muted">Starred</small>
                                </a>

                                <a href="" class="d-flex flex-column">
                                    <i class="material-icons">attachment</i>
                                    <small class="text-muted">2 Attachments</small>
                                </a>
                            </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="border-top pt-3 px-3 text-center">
                        Click here to
                        <RouterLink class="btn btn-link px-0" to="/admin/contacts"
                            >Back.</RouterLink
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
