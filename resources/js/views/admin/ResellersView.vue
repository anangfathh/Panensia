<template>
    <!-- <main>
    <div>
      <h2>Resellers</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Brand</th>
          <th>Address</th>
          <th>Logo</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reseller in resellers" :key="reseller.id">
          <td>{{ reseller.name }}</td>
          <td>{{ reseller.phone }}</td>
          <td>{{ reseller.email }}</td>
          <td>{{ reseller.brand }}</td>
          <td>{{ reseller.address }}</td>
          <td>
            <img v-if="reseller.logo_path" :src="reseller.logo_path" alt="Reseller Logo" class="logo-image">
            <span v-else>No Logo</span>
          </td>
          <td>
            <router-link :to="{ name: 'admin.reseller.edit', params: { id: reseller.id }}">Edit</router-link>
            <router-link :to="{ name: 'admin.reseller.detail', params: { id: reseller.id }}">Details</router-link>
            <button @click="deleteReseller(reseller.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </main> -->
    <div class="mdk-drawer-layout__content page">
        <div class="container-fluid page__heading-container">
            <!-- Page Heding -->
            <div class="page__heading">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                            <RouterLink to="/admin"
                                ><i class="material-icons icon-20pt">home</i></RouterLink
                            >
                        </li>
                        <li class="breadcrumb-item">Management</li>
                        <li class="breadcrumb-item active" aria-current="page">Reseller</li>
                    </ol>
                </nav>

                <h1 class="m-0">Reseller</h1>
            </div>
            <!-- end heading -->
        </div>

        <!-- Content -->
        <div class="container page__container">
            <div class="row card-group-row">
                <div class="col-lg-6 col-md-12 card-group-row__col">
                    <div class="card card-group-row__card">
                        <div class="card-body-x-lg card-body d-flex flex-row align-items-center">
                            <div class="flex">
                                <div class="card-header__title text-muted d-flex mb-2">
                                    Total Reseller
                                </div>
                                <span class="h4 m-0"
                                    >{{ resellers.length }} <span class="text-muted">Seller</span>
                                </span>
                            </div>
                            <div>
                                <i class="fa fa-users icon-muted icon-40pt ml-3"></i>
                            </div>
                        </div>
                        <div class="progress" style="height: 3px">
                            <div
                                class="progress-bar"
                                role="progressbar"
                                :style="{ width: resellers.length + '%' }"
                                :aria-valuenow="resellers.length"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    <form class="form-inline">
                        <label class="mr-sm-2" for="inlineFormFilterBy">Filter by:</label>
                        <input
                            type="text"
                            class="form-control mb-2 mr-sm-2 mb-sm-0"
                            id="inlineFormFilterBy"
                            placeholder="Type a name"
                        />
                    </form>
                </div>

                <div
                    class="table-responsive border-bottom"
                    data-toggle="lists"
                    data-lists-values='["js-lists-values-employee-name"]'
                >
                    <table class="table mb-0 thead-border-top-0">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Logo</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody class="list" id="staff02">
                            <template v-if="resellers.length > 0">
                                <tr v-for="(reseller, index) in resellers" :key="reseller.id">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ reseller.name }}</td>
                                    <td>{{ reseller.brand }}</td>
                                    <td>
                                        <img
                                            v-if="reseller.logo_path"
                                            :src="reseller.logo_path"
                                            alt="Reseller Logo"
                                            class="logo-image"
                                            style="width: 50px"
                                        />
                                        <span v-else>No Logo</span>
                                    </td>
                                    <td>
                                        <router-link :to="`/admin/reseller/edit/${reseller.id}`">
                                            <button class="btn btn-success mr-1">
                                                <i class="fa fa-pencil-alt"></i>
                                            </button>
                                        </router-link>
                                        <router-link :to="`/admin/reseller/${reseller.id}`">
                                            <button class="btn btn-info mr-1">
                                                <i class="fa fa-eye"></i>
                                            </button>
                                        </router-link>
                                        <button
                                            class="btn btn-danger"
                                            @click="deleteReseller(reseller.id)"
                                        >
                                            <i class="fa fa-times"></i>
                                        </button>
                                    </td>
                                </tr>
                            </template>
                            <template v-else>
                                <tr>
                                    <td colspan="7" class="text-center">Tidak ada produk</td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>

                <!-- <div class="card-body text-right">
            15 <span class="text-muted">of 1,430</span>
            <a href="#" class="text-muted-light"
              ><i class="material-icons ml-1">arrow_forward</i></a
            >
          </div> -->
            </div>
        </div>
        <!-- end Content -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            resellers: []
        }
    },
    mounted() {
        // Fetch Resellers from API
        this.fetchResellers()
    },
    methods: {
        async fetchResellers() {
            try {
                const response = await fetch('/api/resellers')
                const data = await response.json()
                this.resellers = data
            } catch (error) {
                console.error('Error fetching resellers:', error)
            }
        },
        async deleteReseller(resellerId) {
            try {
                const response = await fetch(`/api/resellers/${resellerId}`, {
                    method: 'DELETE'
                })
                if (response.ok) {
                    // Update resellers list after successful deletion
                    this.fetchResellers()
                } else {
                    console.error('Failed to delete reseller:', response.statusText)
                }
            } catch (error) {
                console.error('Error deleting reseller:', error)
            }
        },
        async activateReseller(resellerId) {
            try {
                const response = await fetch(`/api/resellers/activate/${resellerId}`, {
                    method: 'PUT'
                })
                if (response.ok) {
                    // Update resellers list after successful activation
                    this.fetchResellers()
                } else {
                    console.error('Failed to activate reseller:', response.statusText)
                }
            } catch (error) {
                console.error('Error activating reseller:', error)
            }
        },
        async deactivateReseller(resellerId) {
            try {
                const response = await fetch(`/api/resellers/deactivate/${resellerId}`, {
                    method: 'PUT'
                })
                if (response.ok) {
                    // Update resellers list after successful deactivation
                    this.fetchResellers()
                } else {
                    console.error('Failed to deactivate reseller:', response.statusText)
                }
            } catch (error) {
                console.error('Error deactivating reseller:', error)
            }
        }
    }
}
</script>
