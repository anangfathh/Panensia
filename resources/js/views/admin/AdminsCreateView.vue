<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

import AdminNavComp from '../../components/AdminNavComp.vue'
import AdminFooterComp from '../../components/AdminFooterComp.vue'

let name = ref('')
let email = ref('')
let password = ref('')
let is_superAdmin = ref(false)
const router = useRouter()

const createAdmin = async () => {
    try {
        const response = await axios.post('/api/admins', {
            name: name.value,
            email: email.value,
            password: password.value,
            is_superAdmin: is_superAdmin.value,
        })

        console.log(response.data)
        alert('Admin created')
        // Redirect to AdminsView
        router.push({ name: 'admin.admins' }) // Adjust the name based on your route configuration
    } catch (error) {
        console.error(error.response.data)
        alert('Error creating admin')
    }
}
</script>

<template>
    <!-- <div>
        <header>
            <AdminNavComp />
        </header>
        <main>
            <h1>Admin Create Admin</h1>
            <label>Name</label>
            <input type="text" v-model="name" />
            <br>
            <label>Email</label>
            <input type="email" v-model="email" />
            <br>
            <label>Password</label>
            <input type="password" v-model="password" />
            <br>
            <label>Is Super Admin?</label>
            <input type="checkbox" v-model="is_superAdmin" />
            <br>
            <button @click="createAdmin">Create</button>
        </main>
        <AdminFooterComp />
    </div> -->
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
                  <a href="/admin/admins">
                    User List
                  </a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  Create user
                </li>
              </ol>
            </nav>
  
            <h1 class="m-0">Create User</h1>
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
                                <input v-model="name" type="text" class="form-control" id="validationSample01" placeholder="Type Your Name.." required="" >
                            </div>
                            <div class="col-12 col-md-12 mb-3">
                                <label for="validationSample01">Email</label>
                                <input v-model="email" type="email" class="form-control" id="validationSample01" placeholder="Type Your Email.." required="" >
                            </div>
                            <div class="col-12 col-md-12 mb-3">
                                <label for="validationSample01">Password</label>
                                <input v-model="password" type="password" class="form-control" id="validationSample01" placeholder="Type Your Password.." required="" >
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="custom-control custom-checkbox">
                            <input v-model="is_superAdmin" class="custom-control-input" type="checkbox" value="" id="invalidCheck01" required=""/>
                            <label class="custom-control-label" for="invalidCheck01">
                                Is Admin ?
                            </label>
                            </div>
                        </div>

                    <button @click="createAdmin" class="btn btn-primary">Create User</button>
              </div>
          </div>
      </div>
        <!-- end Content -->
  
    </div>
</template>
