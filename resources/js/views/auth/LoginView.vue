<template>
    <div>
        <div style="margin-top: 100px; text-align: center">
            <div v-if="loginFailed" style="color: red">Email atau Password Anda salah.</div>
            <div style="margin: auto; width: 50%">
                <div>
                    <h2>LOGIN</h2>
                    <hr />
                    <form @submit.prevent="login">
                        <div style="margin-bottom: 10px">
                            <label>EMAIL</label>
                            <input
                                type="email"
                                style="width: 100%; padding: 5px"
                                v-model="user.email"
                                placeholder="Masukkan Email"
                            />
                            <div v-if="validation.email" style="color: red; margin-top: 5px">
                                Masukkan Email
                            </div>
                        </div>
                        <div style="margin-bottom: 10px">
                            <label>PASSWORD</label>
                            <input
                                type="password"
                                style="width: 100%; padding: 5px"
                                v-model="user.password"
                                placeholder="Masukkan Password"
                            />
                            <div v-if="validation.password" style="color: red; margin-top: 5px">
                                Masukkan Password
                            </div>
                        </div>

                        <button
                            type="submit"
                            style="
                                padding: 5px;
                                background-color: #3490dc;
                                color: #fff;
                                border: none;
                                cursor: pointer;
                            "
                        >
                            LOGIN
                        </button>
                    </form>
                </div>
            </div>
            <div>
                <RouterLink to="/forgotPassword">Forgot Password?</RouterLink>
            </div>
        </div>
        <!-- Hidden router-link -->
        <!-- <router-link ref="dashboardLink" :to="`/admin`" style="display: none"></router-link> -->
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const user = ref({ email: '', password: '' })
const validation = ref({ email: false, password: false })
const loginFailed = ref(false)
const router = useRouter()

const login = async () => {
    validation.value = { email: false, password: false }

    if (!user.value.email) {
        validation.value.email = true
        return
    }

    if (!user.value.password) {
        validation.value.password = true
        return
    }

    try {
        const response = await axios.post('/api/login', {
            email: user.value.email,
            password: user.value.password
        })

        if (response.data.status === 'success' && response.data && response.data.token) {
            localStorage.setItem('loggedIn', 'true')
            localStorage.setItem('token', response.data.token)
            router.push({ name: 'dashboard' })
        } else {
            loginFailed.value = true
            console.log('taik')
        }
    } catch (error) {
        console.error(error)
        loginFailed.value = true
        console.log('bjir')
    }
}
</script>
