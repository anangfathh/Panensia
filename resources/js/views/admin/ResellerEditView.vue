<template>
    <div class="mdk-drawer-layout__content page">
        <div class="container-fluid page__heading-container">
            <!-- Page Heding -->
            <div class="page__heading">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                            <a href="/admin">
                                <i class="material-icons icon-20pt">home</i>
                            </a>
                        </li>
                        <li class="breadcrumb-item">Management</li>
                        <li class="breadcrumb-item">
                            <a href="/admin/resellers">Reseller </a>
                        </li>
                        <li class="breadcrumb-item active" aria-current="page">Edit</li>
                    </ol>
                </nav>

                <h1 class="m-0">Edit Reseller</h1>
            </div>
            <!-- end heading -->
        </div>

        <!-- Content -->
        <div class="card card-form">
            <div class="row no-gutters">
                <div class="col-lg-12 card-form__body card-body">
                    <div class="form-row">
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample01">Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="name"
                                v-model="resellerData.name"
                                required=""
                            />
                        </div>
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample02">Phone</label>
                            <textarea
                                v-model="resellerData.phone"
                                name=""
                                class="form-control"
                                id="phone"
                                cols="30"
                                rows="3"
                                required=""
                            ></textarea>
                        </div>
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample02">Email</label>
                            <textarea
                                v-model="resellerData.email"
                                type="email"
                                id="email"
                                class="form-control"
                                cols="30"
                                rows="3"
                                required=""
                            ></textarea>
                        </div>
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample02">Brand</label>
                            <textarea
                                v-model="resellerData.brand"
                                type="text"
                                id="brand"
                                class="form-control"
                                cols="30"
                                rows="3"
                                required=""
                            ></textarea>
                        </div>
                        <div class="col-12 col-md-12 mb-3">
                            <label for="validationSample02">Address</label>
                            <textarea
                                v-model="resellerData.address"
                                type="text"
                                id="address"
                                required
                                class="form-control"
                                cols="30"
                                rows="3"
                            ></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-12 col-md-12 mb-3">
                            <img
                                v-if="resellerData.logo_path"
                                :src="resellerData.logo_path"
                                alt="Reseller Logo"
                                class="logo-image"
                            />
                        </div>
                        <label for="dropfile">Logo</label>
                        <input
                            type="file"
                            ref="logo"
                            @change="handleLogoChange"
                            class="form-control"
                            id="dropfile"
                            multiple
                        />
                    </div>
                    <div class="form-group">
                        <label for="is_active">Is Active</label>
                        <select
                            v-model="resellerData.is_active"
                            id="is_active"
                            data-toggle="select"
                            class="form-control"
                        >
                            <option disabled>Select a Status</option>
                            <option :value="true">Yes</option>
                            <option :value="false">No</option>
                        </select>
                    </div>

                    <button type="button" class="btn btn-primary" @click="updateReseller">Update</button>
                </div>
            </div>
        </div>
        <!-- end Content -->
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            resellerData: {
                name: '',
                phone: '',
                email: '',
                brand: '',
                address: '',
                logo_path: '',
                link_social: '',
                is_active: false
            },
            uploadingLogo: false
        }
    },
    mounted() {
        // Fetch Reseller data from API
        this.fetchResellerData()
    },
    methods: {
        async fetchResellerData() {
            try {
                const response = await fetch(`/api/resellers/${this.id}`)
                const data = await response.json()
                this.resellerData = data
            } catch (error) {
                console.error('Error fetching reseller data:', error)
            }
        },
        triggerFileInput() {
            this.$refs.logoInput.click()
        },
        handleLogoChange(event) {
            const file = event.target.files[0]
            this.uploadLogo(file)
        },
        async uploadLogo(file) {
            try {
                this.uploadingLogo = true

                const formData = new FormData()
                formData.append('logo', file)
                const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
                const response = await fetch(`/api/reseller/${this.id}/upload-logo`, {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': csrfToken
                    },
                    body: formData
                })

                if (response.ok) {
                    const data = await response.json()
                    this.resellerData.logo_path = data.logo_path
                } else {
                    console.error('Failed to upload logo:', response.statusText)
                }
            } catch (error) {
                console.error('Error uploading logo:', error)
            } finally {
                this.uploadingLogo = false
            }
        },
        async updateReseller() {
            try {
                const csrfToken = document.head.querySelector('meta[name="csrf-token"]').content;
                const response = await fetch(`/api/reseller/edit/${this.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': csrfToken
                    },
                    body: JSON.stringify(this.resellerData)
                });

                if (response.status === 200) {
                    this.$router.push('/admin/resellers');
                    console.log('Reseller updated successfully');
                } else {
                    const responseData = await response.json();
                    console.error('Failed to update reseller:', responseData);
                }
            } catch (error) {
                console.error('Error updating reseller:', error);
            }
        }
    }
}
</script>
