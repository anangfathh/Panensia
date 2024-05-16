<script>
import axios from 'axios'

export default {
    data() {
        return {
            admins: []
        }
    },
    mounted() {
        this.fetchAdmins()
    },
    methods: {
        async fetchAdmins() {
            try {
                const response = await axios.get('/api/admins', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                this.admins = response.data
            } catch (error) {
                console.error('Error fetching administrators:', error)
                alert('Error fetching administrators')
            }
        },
        async deleteAdmin(adminId) {
            if (window.confirm('Are you sure you want to delete this admin?') === false) {
                return
            }

            try {
                const response = await axios.delete(`/api/admins/${adminId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                if (response.status === 200) {
                    this.fetchAdmins()
                    alert('Admin deleted')
                } else {
                    console.error('Failed to delete admin:', response.statusText)
                    alert('Failed to delete admin')
                }
            } catch (error) {
                console.error('Error deleting admin:', error)
                alert('Error deleting admin')
            }
        }
    }
}
</script>

<template>
    <div class="mdk-drawer-layout__content page">
        <div class="container-fluid page__heading-container">
            <!-- Page Heding -->
            <div class="page__heading">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item">
                            <a href="/admin"><i class="material-icons icon-20pt">home</i></a>
                        </li>
                        <li class="breadcrumb-item">Management</li>
                        <li class="breadcrumb-item active" aria-current="page">User List</li>
                    </ol>
                </nav>

                <h1 class="m-0">User</h1>
            </div>
            <!-- end heading -->
        </div>

        <!-- Content -->
        <div class="container page__container">
            <RouterLink to="/admin/admins/create">
                <button class="btn btn-dark mb-4">Create</button>
            </RouterLink>
            <div class="row card-group-row">
                <div class="col-lg-6 col-md-12 card-group-row__col">
                    <div class="card card-group-row__card">
                        <div class="card-body-x-lg card-body d-flex flex-row align-items-center">
                            <div class="flex">
                                <div class="card-header__title text-muted d-flex mb-2">
                                    Total User
                                </div>
                                <span class="h4 m-0"
                                    >{{ admin.length }}<span class="text-muted"> user</span>
                                </span>
                            </div>
                            <div>
                                <i class="fa fa-user icon-muted icon-40pt ml-3"></i>
                            </div>
                        </div>
                        <div class="progress" style="height: 3px">
                            <div
                                class="progress-bar"
                                role="progressbar"
                                :style="{ width: admin.length + '%' }"
                                :aria-valuenow="admin.length"
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
                    data-lists-values='["name"]'
                >
                    <table class="table mb-0 thead-border-top-0">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="list" id="staff01">
                            <template v-if="admin.length > 0">
                                <tr v-for="(item, index) in admin" :key="item.id">
                                    <td>{{ index + 1 }}</td>
                                    <td class="js-lists-values-employee-name">{{ item.name }}</td>
                                    <td class="text-muted">{{ item.email }}</td>
                                    <td>
                                        {{ item.is_superAdmin === 1 ? 'Super Admin' : 'Admin' }}
                                    </td>
                                    <td>
                                        <RouterLink
                                            :to="{
                                                name: 'admin.admins.edit',
                                                params: { id: item.id }
                                            }"
                                        >
                                            <button class="btn btn-success mr-1">
                                                <i class="fa fa-pencil-alt"></i> Edit
                                            </button>
                                        </RouterLink>
                                        <button
                                            class="btn btn-danger"
                                            @click="deleteAdmin(item.id)"
                                        >
                                            <i class="fa fa-times"></i> Delete
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
            </div>
        </div>
        <!-- end Content -->
    </div>
</template>

<style scoped></style>
