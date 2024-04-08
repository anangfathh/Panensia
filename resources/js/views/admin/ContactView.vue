<script>

export default {
    data() {
        return {
            contacts: []
        }
    },
    mounted() {
        // Fetch Contacts from API
        this.fetchContacts()
    },
    methods: {
        async fetchContacts() {
            try {
                const response = await fetch('/api/contacts')
                const data = await response.json()
                this.contacts = data
            } catch (error) {
                console.error('Error fetching contacts:', error)
            }
        }
    }
}
</script>
<template>
    <!-- <main>
    <div>
      <h2>Contacts</h2>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in contacts" :key="contact.id">
            <td>{{ contact.type }}</td>
            <td>{{ contact.name }}</td>
            <td>{{ contact.email }}</td>
            <td>{{ contact.message }}</td>
            <td>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main> -->
    <div class="mdk-drawer-layout__content page">
        <div class="app-chat-container">
            <div class="row h-100 m-0">
                <div class="col-lg-12 py-3 px-0 d-none d-lg-flex flex-column h-100">
                    <div class="search-form form-control-rounded search-form--light mx-3">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="What are you looking for?"
                            id="searchSample02"
                        />
                        <button class="btn" type="button" role="button">
                            <i class="material-icons">search</i>
                        </button>
                    </div>

                    <div class="flex pt-3 d-flex flex-column">
                        <div data-simplebar class="h-100">
                            <div
                                class="list-group list-group-flush"
                                style="position: relative; z-index: 0"
                            >
                                <div
                                    v-for="(contact, index) in contacts"
                                    :key="index"
                                    class="list-group-item d-flex align-items-start border-right-3"
                                >
                                    <div class="mr-3 d-flex flex-column align-items-center">
                                        <a href="#" class="avatar avatar-xs mb-2">
                                            <img
                                                :src="`/assets/images/avatar/default.jpg`"
                                                alt="Avatar"
                                                class="avatar-img rounded-circle"
                                            />
                                        </a>
                                        <a href=""
                                            ><i class="material-icons icon-16pt">star_border</i></a
                                        >
                                    </div>
                                    <div class="flex">
                                        <p class="m-0">
                                            <span class="d-flex align-items-center mb-1">
                                                <router-link :to="`/admin/contacts/view/${contact.id}`" class="text-dark-gray">
                                                    <strong>{{ contact.name }}</strong>
                                                </router-link>
                                                <small class="ml-auto text-muted">{{
                                                    contact.created_at
                                                }}</small>
                                            </span>
                                            <span class="d-flex align-items-end">
                                                <span class="flex mr-3">
                                                    <strong class="text-body mb-1">{{
                                                        contact.type
                                                    }}</strong
                                                    ><br />
                                                    <small
                                                        class="text-muted"
                                                        style="
                                                            max-height: 2.5rem;
                                                            overflow: hidden;
                                                            position: relative;
                                                            display: inline-block;
                                                        "
                                                        >{{ contact.message }}</small
                                                    >
                                                </span>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- <div class="border-top pt-3 px-3 text-center">
                    <a href="" class="btn btn-primary">Create Message</a>
                </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
